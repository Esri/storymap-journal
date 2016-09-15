define(["lib-build/tpl!./BuilderPanel",
		"lib-build/css!./BuilderPanel",
		/* This dependency is needed to make sure that in production the NLS
		 * will be loaded before any builder object that access i18n.common will be parsed
		 * Can't really be done at any other place as BuilderPanel is the first component loaded in Builder.js
		 */
		"dojo/i18n!commonResources/nls/core.js?v=" + app.version,
		"storymaps/common/utils/CommonHelper",
		"./SaveErrorPopup",
		"./SaveErrorPopupSocial",
		"dojo/topic"],
	function (viewTpl, cssTpl, i18n, CommonHelper, SaveErrorPopup, SaveErrorPopupSocial, topic) {
		return function BuilderPanel(container, builderSave, builderDirectCreationFirstSave, builderGalleryCreationFirstSave)
		{
			container.append(viewTpl({
				title: i18n.commonCore.builderPanel.panelHeader.replace('%TPL_NAME%', app.cfg.TPL_NAME),
				btnSave: i18n.commonCore.common.save,
				btnShare: i18n.commonCore.builderPanel.buttonShare,
				btnSettings: i18n.commonCore.builderPanel.buttonSettings,
				btnHelp: i18n.commonCore.builderPanel.buttonHelp,
				btnPreview: i18n.commonCore.builderPanel.buttonPreview,
				tooltipFirstSave: i18n.commonCore.builderPanel.tooltipFirstSave,
				tooltipNotShared: i18n.commonCore.builderPanel.tooltipNotShared2,
				saveCounter: i18n.commonCore.builderPanel.noPendingChange
			}));

			var _this = this,
				_builderView = null,
				_saveErrorPopup = null,
				_saveErrorPopupSocial = null;

			this.init = function(builderView)
			{
				_builderView = builderView;
				_saveErrorPopup = new SaveErrorPopup($("#saveErrorPopup"));
				_saveErrorPopupSocial = new SaveErrorPopupSocial($("#saveErrorPopupSocial"));

				initLocalization();

				container.removeClass('hide');

				app.builder.hideSaveConfirmation = hideSaveConfirmation;

				container.find('.builder-save').click(save);
				container.find(".builder-share").click(showShare);
				container.find('.builder-settings').click(showSettingsPopup);
				container.find('.builder-help').click(showHelpPopup);
				container.find('.builder-preview').click(showPreview);

				$(window).bind('keydown', function(event) {
					if (event.ctrlKey || event.metaKey) {
						// CTRL+S
						if (String.fromCharCode(event.which).toLowerCase() == 's') {
							if (!container.find('.builder-save').attr("disabled") && ! app.initScreenIsOpen) {
								event.preventDefault();
								save();
							}
						}
					}
				});

				createSavePopover();

				topic.subscribe("MYSTORIES_SCAN", updateCheckBtn);
				updateCheckBtn("start");
			};

			//
			// Panel buttons
			//

			function save()
			{
				console.log("common.builder.Builder - save");

				if ( container.find('.builder-save').hasClass('disabled') ) {
					return;
				}

				container.find('.builder-save').addClass('saving').html('<span class="small-loader"></span>' + i18n.commonCore.builderPanel.buttonSaving);
				changeBuilderPanelButtonState(false);

				if (app.isDirectCreationFirstSave) {
					var appTitle = app.data.getWebAppData().getTitle(),
						appSubTitle = app.data.getWebAppData().getSubtitle();

					if ( ! appTitle ) {
						_this.saveFailed("NONAME");
						return;
					}

					app.portal.getPortalUser().getItems().then(function(items){
						var foundDuplicate = false;

						if ( items ) {
							$.each(items, function(i, item){
								if ( item.title && item.title.toLowerCase() == appTitle.toLowerCase() )
									foundDuplicate = true;
							});
						}

						// TODO make that an option
						if ( foundDuplicate ) {
							container.find('.builder-save').removeClass('saving').html(i18n.commonCore.common.save);
							_saveErrorPopup.present().then(function(){
								if ( app.appCfg.useStandardHeader ){
									app.ui.headerDesktop.setTitleError();
								}
								else {
									app.builder.openEditPopup({
										sectionIndex: 0,
										displayTab: 'main-stage'
									});
								}

							});
						}
						else
							// Save the webmap
							// If ok get the new id
							// Call saveApp
							// If ok call appSaveSucceeded
							builderDirectCreationFirstSave(appTitle, appSubTitle);
					});
				}
				// If the app rely on a webmap and it's a gallery workflow
				// Has to do special workflow for first save
				else if (app.appCfg.useWebmapInApp && app.isGalleryCreation) {
					builderGalleryCreationFirstSave();
				}
				else {
					// Save of an existing app

					var storyTitle = "",
						itemTitle = "";

					if ( app.data.getWebAppData().getTitle() ) {
						storyTitle = app.data.getWebAppData().getTitle().trim();
					}

					if (app.data.getWebAppItem() && app.data.getWebAppItem().title ) {
						itemTitle = app.data.getWebAppItem().title.trim();
					}

					// if item and story title don't match
					//  and user hasn't chose to not be warned about it
					//  and story is public
					if ( ! app.builder.titleMatchOnLoad
							&& ! app.data.getWebAppData().getDoNotWarnTitle()
							&& app.data.getWebAppItem().access == "public"
							// Extra check that title actually differs - don't show the dialog it title where not matching but user fixed it
							&& storyTitle != itemTitle
					) {
						// If the warning dialog has already been displayed in the session, skip it and reuse the choice
						if ( app.builder.titleMatchDialogDisplayed ) {
							builderSave(app.builder.titleFromItem);
						}
						// Show the warning dialog
						else {
							app.builder.titleMatchDialogDisplayed = true;

							_saveErrorPopupSocial.present().then(
								function(p) {
									app.builder.titleFromItem = p && p.choice == 'item';
									builderSave(app.builder.titleFromItem);
								}
							);
						}
					}
					else {
						// Save the app
						// If OK and needed call save webmap
						// If OK call appSaveSucceeded
						var keepItemTitle = app.data.getWebAppData().getDoNotWarnTitle()
							|| (app.data.getWebAppItem().access != "public" && ! app.builder.titleMatchOnLoad);
						builderSave(keepItemTitle);
					}
				}
			}

			function showSettingsPopup()
			{
				closePopover();
				_builderView.openSettingPopup(false);
			}

			function showHelpPopup()
			{
				closePopover();
				topic.publish("OPEN_HELP");
			}

			function showPreview()
			{
				if ( ! $(this).hasClass("disabled") )
					window.open(CommonHelper.getAppViewModeURL() + '&preview', '_blank');
			}

			function showShare()
			{
				if ( ! $(this).hasClass("disabled") )
					app.builder.openSharePopup(false);
			}

			//
			// Save callbacks
			//

			this.saveSucceeded = function()
			{
				if( app.isDirectCreationFirstSave || app.isGalleryCreation )
					app.builder.openSharePopup(true);

				resetSaveCounter();
				changeBuilderPanelButtonState(true);

				container.find('.builder-save').html('<span class="glyphicon glyphicon-ok"></span> ' + i18n.commonCore.builderPanel.buttonSaved);

				setTimeout(function(){
					container.find('.builder-save').removeClass('saving').html(i18n.commonCore.common.save);
				}, 3500);
			};

			this.saveFailed = function(/*source, error*/)
			{
				container.find('.builder-save').removeClass('saving').html(i18n.commonCore.common.save);
				container.find(".builder-save").tooltip('show');

				/*
				if( source == "FS" && error && error.code == 400 && error.details && error.details[0] && error.details[0].split('html content').length >= 2 ) {
					container.find(".builder-save").next(".tooltip").find(".stepFailed2").css("display", "block");
				}
				else if (source == "NONAME") {
					container.find(".builder-save").next(".tooltip").find(".stepFailed3").css("display", "block");

					$("#headerDesktop .title").addClass("titleEmpty");

					container.find(".builder-save").attr("disabled", false);
					container.find(".builder-settings").attr("disabled", false);
					container.find(".builder-help").attr("disabled", false);

					return;
				}
				else */
					container.find(".builder-save").next(".tooltip").find(".stepFailed").css("display", "block");

				changeBuilderPanelButtonState(true);
			};

			//
			// Counter
			//

			this.hasPendingChange = function()
			{
				return ! container.find(".builder-save").hasClass("disabled");
			};

			this.incrementSaveCounter = function(/*nb*/)
			{
				var value = "";

				value = i18n.commonCore.builderPanel.unSavedChangePlural;
				container.find(".save-counter").addClass("pendingChanges").html(value);

				// Don't activate save button in direct creation until there is one section
				container.find(".builder-save").toggleClass("disabled", app.isDirectCreationFirstSave && ! app.data.getStoryLength());

				if ( app.isDirectCreationFirstSave && app.data.getStoryLength() )
					container.find(".status-bar").removeClass("hideCounterAndSharing");
			};

			function resetSaveCounter()
			{
				container.find(".save-counter").removeClass("pendingChanges").html(i18n.commonCore.builderPanel.noPendingChange);
				container.find(".builder-save").addClass("disabled");
			}

			//
			// Popover
			//

			function closePopover()
			{
				container.find(".builder-save").tooltip('hide');
			}

			function createSavePopover()
			{
				var containerId = "#" + container.attr("id");

				// App saved confirmation
				container.find(".builder-save").tooltip('destroy');
				container.find(".builder-save").tooltip({
					//containerId: containerId,
					html: true,
					trigger: 'manual',
					placement: 'left',
					title: '<script>'
								+ '$("' + containerId + ' .builder-save").next(".tooltip").addClass("save-fail-popover");'
								+ '$("' + containerId + ' .builder-save").next(".tooltip").find(".stepHidden").css("display", "none");'
								+ '</script>'
								+ '<div class="stepHidden stepFailed" style="color: red; width: 180px;">'
								+  i18n.commonCore.builderPanel.saveError + ' '
								+ '<button type="button" class="btn btn-xs" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.commonCore.common.close+'</button> '
								+ '</div>'
								/*+ '<div class="stepHidden stepFailed2" style="color: red; width: 180px;">'
								+  i18n.commonCore.builderPanel.saveError2 + ' '
								+ '<button type="button" class="btn btn-default btn-xs" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.commonCore.builderPanel.ok+'</button> '
								+ '</div>'
								+ '<div class="stepHidden stepFailed3" style="color: red; width: 180px;">'
								+  i18n.commonCore.builderPanel.saveError3 + ' '
								+ '<button type="button" class="btn btn-default btn-xs" onclick="app.builder.hideSaveConfirmation()" style="vertical-align: 1px;">'+i18n.commonCore.builderPanel.ok+'</button> '
								+ '</div>'*/
				});
			}

			//
			// UI
			//

			function hideSaveConfirmation()
			{
				container.find(".builder-save").tooltip('hide');
			}

			function changeBuilderPanelButtonState()
			{
				_this.updateSharingStatus();
				_this.resize();
			}

			this.updateSharingStatus = function()
			{
				/*
				 * Share & preview button state
				 */

				var disableShare = app.isDirectCreationFirstSave || app.isGalleryCreation || app.isWebMapCreation,
					disablePreview =  app.data.getWebAppItem().access == "private"
						|| app.data.getWebAppItem().access == "shared";

				container.find('.builder-share').toggleClass("disabled", disableShare);
				container.find('.builder-preview')
					.tooltip("destroy")
					.removeClass("disabled");

				if ( disableShare )
					container.find('.builder-share').tooltip({
						trigger: 'hover'
					});
				else
					container.find('.builder-share').tooltip('destroy');

				if ( disableShare ) {
					container.find('.builder-preview')
						.addClass("disabled")
						.tooltip({
							trigger: 'hover',
							title: i18n.commonCore.builderPanel.tooltipFirstSave
						});
				}
				else if ( disablePreview )
					container.find('.builder-preview').tooltip({
						trigger: 'hover',
						title: i18n.commonCore.builderPanel.tooltipNotShared2
					});
				else
					container.find('.builder-preview').tooltip('destroy');

				// TODO get that outside
				if ( app.ui.headerDesktop )
					app.ui.headerDesktop.toggleSocialBtnAppSharing(disablePreview);

				app.ui.sidePanel.toggleSocialBtnAppSharing(disablePreview);
				app.ui.floatingPanel.toggleSocialBtnAppSharing(disablePreview);
				app.ui.mobileView.toggleSocialBtnAppSharing(disablePreview);

				/*
				 * Status
				 */

				updateStatus();
			};

			function updateStatus()
			{
				container.find(".status-msg").show();

				if( app.isDirectCreationFirstSave || app.isGalleryCreation )
					container.find(".status-msg").html(i18n.commonCore.builderPanel.status6);
				else if ( app.mystories && app.mystories.hasCheckErrors ) {
					if ( app.data.getWebAppItem().access == "public" )
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status1);
					else if ( app.data.getWebAppItem().access == "account" )
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status1);
					else
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status2);
				}
				else {
					if ( app.data.getWebAppItem().access == "public" )
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status3);
					else if ( app.data.getWebAppItem().access == "account" )
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status4);
					else
						container.find(".status-msg").html(i18n.commonCore.builderPanel.status5);
				}

				_this.resize();
			}

			/*
			 * My Stories error checking
			 */

			function checkForErrors()
			{
				app.builder.openSharePopup();
			}

			function updateCheckBtn(status)
			{
				var checkBtn = container.find('.check-story');

				if( ! app.data.getStoryLength() ) {
					checkBtn.hide();
				}
				else {
					if ( status == "start" ) {
						checkBtn
							.html('<span class="small-loader"></span>' + i18n.commonCore.builderPanel.checking)
							.show()
							.css("cursor", "default")
							.off('click');

						container.find(".status-msg").hide();
					}
					else if ( status == "error" ) {
						checkBtn
							.html(i18n.commonCore.builderPanel.fix)
							.show()
							.css("cursor", "pointer")
							.click(checkForErrors);

						_this.updateSharingStatus();
					}
					else {
						checkBtn.hide();
						_this.updateSharingStatus();
					}
				}
			}

			this.resize = function()
			{
				container.find('.status-msg').css(
					'max-width',
					$(window).width() - (container.find('.buttons').position().left + container.find('.buttons').outerWidth() + container.find('.status-btns').outerWidth() + 20)
				);
			};

			function initLocalization()
			{
				//
			}
		};
	}
);
