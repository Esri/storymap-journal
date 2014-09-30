define(["lib-build/tpl!./BuilderPanel",
		"lib-build/css!./BuilderPanel",
		/* This dependency is needed to make sure that in production the NLS 
		 * will be loaded before any builder object that access i18n.common will be parsed
		 * Can't really be done at any other place as BuilderPanel is the first component loaded in Builder.js
		 */
		"dojo/i18n!commonResources/nls/core.js?v=" + app.version,
		"storymaps/common/utils/CommonHelper",
		"./SaveErrorPopup",
		"dojo/topic"],
	function (viewTpl, cssTpl, i18n, CommonHelper, SaveErrorPopup, topic) {
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
				tooltipNotShared: i18n.commonCore.builderPanel.tooltipNotShared,
				saveCounter: i18n.commonCore.builderPanel.noPendingChange
			}));
			
			var _this = this,
				_builderView = null,
				_saveErrorPopup = null;
			
			this.init = function(builderView) 
			{	
				_builderView = builderView;
				_saveErrorPopup = new SaveErrorPopup($("#saveErrorPopup"));
				
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
				
				if ( app.isDirectCreationFirstSave )
					container.find(".status-bar").addClass("hideCounterAndSharing");
				
				createSavePopover();
			};
			
			//
			// Panel buttons
			//
			
			function save()
			{
				console.log("common.builder.Builder - save");
				
				container.find('.builder-save').addClass('saving').html(i18n.commonCore.builderPanel.buttonSaving + ' <span class="smallLoader"></span>');
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
						
						if ( foundDuplicate ) {
							container.find('.builder-save').removeClass('saving').html(i18n.commonCore.common.save);
							_saveErrorPopup.present().then(function(){
								app.builder.openEditPopup({
									sectionIndex: 0,
									displayTab: 'main-stage'
								});
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
					// Save the app 
					// If OK and needed call save webmap 
					// If OK call appSaveSucceeded
					builderSave();
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
					window.open(CommonHelper.getAppViewModeURL(), '_blank');
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
				
				container.find('.builder-save').html(i18n.commonCore.builderPanel.buttonSaved + ' <span class="glyphicon glyphicon-ok"></span>');
				
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
				return container.find(".save-counter").html() && container.find(".save-counter").html() != i18n.commonCore.builderPanel.noPendingChange;
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
			
			function changeBuilderPanelButtonState(activate)
			{
				container.find(".builder-cmd").attr("disabled", ! activate);
			}
			
			this.updateSharingStatus = function()
			{
				/*
				 * Sharing status
				 */
				if( app.isDirectCreationFirstSave || app.isGalleryCreation )
					container.find(".sharing-status").html(i18n.commonCore.builderPanel.shareStatus1);
				else if ( app.data.getWebAppItem().access == "public" )
					container.find(".sharing-status").html(i18n.commonCore.builderPanel.shareStatus2);
				else if ( app.data.getWebAppItem().access == "account" )
					container.find(".sharing-status").html(i18n.commonCore.builderPanel.shareStatus3);
				else
					container.find(".sharing-status").html(i18n.commonCore.builderPanel.shareStatus4);
				
				/*
				 * Share & preview button state
				 */
				
				var disableShare = app.isDirectCreationFirstSave,
					disablePreview =  app.data.getWebAppData().isBlank() || app.data.getWebAppItem().access == "private";
				
				container.find('.builder-share').toggleClass("disabled", disableShare);
				container.find('.builder-preview').toggleClass("disabled", disablePreview);
				
				if ( disableShare )
					container.find('.builder-share').tooltip();
				else
					container.find('.builder-share').tooltip('destroy');
				
				if ( disablePreview )
					container.find('.builder-preview').tooltip();
				else
					container.find('.builder-preview').tooltip('destroy');
			};
			
			this.resize = function()
			{
				//
			};
			
			function initLocalization()
			{
				//
			}
		};
	}
);