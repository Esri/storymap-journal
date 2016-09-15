define(["lib-build/tpl!./BuilderView",
        "lib-build/css!./BuilderView",
		"lib-build/css!./Common",
		"../core/WebApplicationData",
		"storymaps/common/builder/settings/SettingsPopup",
		"./Landing",
		"./Help",
		"./InitPopup",
		"storymaps/common/builder/SharePopup",
		"../core/Helper",
		"storymaps/common/utils/CommonHelper",
		// Settings tab
		"storymaps/common/builder/settings/ViewLayoutHorizontal",
		"./settings/ViewLayoutOptions",
		"storymaps/common/builder/settings/ViewTheme",
		"storymaps/common/builder/settings/ViewHeader",
		"./settings/ViewLayoutFonts",
		// Template
		"storymaps/common/builder/media/MediaSelector",
		"./addedit/Popup",
		"./OrganizePopup",
		// Map Editor
		"storymaps/common/builder/media/map/EditDialog",
		// Utils
		"dojo/Deferred",
		"dojo/topic",
		"dojo/has",
		// Text editing lib is loaded here once for the whole app
		"lib-app/ckeditor/ckeditor"],
	function (
		viewTpl,
		viewCss,
		commonCss,
		WebApplicationData,
		SettingsPopup,
		Landing,
		Help,
		InitPopup,
		SharePopup,
		Helper,
		CommonHelper,
		// Settings tab
		ViewLayout,
		ViewLayoutOptions,
		ViewTheme,
		ViewHeader,
		ViewLayoutFonts,
		// Template
		MediaSelector,
		AddEditPopup,
		OrganizePopup,
		// Map Editor
		MapEditDialog,
		// Utils
		Deferred,
		topic,
		has
	){
		return function BuilderView(Core)
		{
			$("#builder-views").append(viewTpl({ }));

			var _this = this,
				_settingsPopup = null,
				_handleMyStoriesFirstAdd = null,
				_landingUI = new Landing($("#builderLanding"), firstAdd, clickHelp),
				_helpUI = new Help($("#builderHelp")),
				_initPopup = new InitPopup($("#initPopup")),
				_sharePopup = new SharePopup($('#sharePopup')),
				_addEditPopup = new AddEditPopup($('#addEditPopup')),
				_organizePopup = new OrganizePopup($('#organizePopup')),
				_mapEditDialog = new MapEditDialog($('#mapEditPopup'));

			this.init = function(settingsPopup)
			{
				_settingsPopup = settingsPopup;

				topic.subscribe("SETTINGS_POPUP_SAVE", settingsPopupSave);
				topic.subscribe("OPEN_HELP", function(){ _helpUI.show(); });
				topic.subscribe("story-update-sections", updateAddButtonStatus);

				app.builder.openSharePopup = openSharePopup;
				app.builder.openEditPopup = openEditPopup;
				app.builder.openHelpPopup = openHelpPopup;
				app.builder.getAddEditEntryTitle = getAddEditEntryTitle;
				app.builder.openMapViewer = openMapViewer;

				CKEDITOR.disableAutoInline = true;

				// Add buttons for all layouts
				$(".builder-add")
					.click(function(){
						if (! $(this).hasClass("disabled"))
							clickAdd();
					})
					.find(".builder-lbl").html(i18n.builder.addEditPopup.titleAdd);

				// Organize buttons for all layouts
				$(".builder-organize")
					.click(openOrganizePopup)
					.find(".builder-lbl").html(i18n.builder.organizePopup.title);

				app.builderCfg = {
					STATUS: {
						PUBLISHED: i18n.builder.common.lblStatus1,
						/*DRAFT: i18n.builder.common.lblStatus2,*/
						HIDDEN: i18n.builder.common.lblStatus3
					}
				};

				//
				// Layout localization
				//

				app.cfg.LAYOUTS[0].title = i18n.builder.layouts.sideTitle;
				app.cfg.LAYOUTS[0].description = i18n.builder.layouts.sideDescr;
				app.cfg.LAYOUTS[1].title = i18n.builder.layouts.floatTitle;
				app.cfg.LAYOUTS[1].description = i18n.builder.layouts.floatDescr;

				//
				// Layout specificity related to handling events
				//
				$('body').on('shown.bs.modal', '.modal', function (e) {
					if( WebApplicationData.getLayoutId() == "float" )
						app.ui.floatingPanel.disableSwiperKeybordEvent();

				});

				$('body').on('hide.bs.modal', '.modal', function (e) {
					if( WebApplicationData.getLayoutId() == "float" ) {
						if ( $(e.currentTarget).hasClass("addEditPopup") && $(e.currentTarget).hasClass("temporaryHide") )
							return;

						app.ui.floatingPanel.enableSwiperKeybordEvent();
					}
				});

				//
				// My Stories
				//

				topic.subscribe("MY-STORIES-EDIT-MEDIA", myStoriesEditMedia);
				topic.subscribe("MY-STORIES-EDIT-MAP", myStoriesEditMap);
			};

			this.appInitComplete = function()
			{
				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "add" )
					clickAdd();

				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "organize" )
					openOrganizePopup();

				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "settings" )
					this.openSettingPopup();

				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "edit" )
					openEditPopup({
						displayTab: CommonHelper.getUrlParams().debugView || "content" ,
						sectionIndex: CommonHelper.getUrlParams().debugIndex || 0
					});

				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "share" )
					setTimeout(openSharePopup, 1000);

				updateAddButtonStatus();
			};

			this.updateUI = function(forceStoryLength)
			{
				var storyLength = forceStoryLength || app.data.getStoryLength();
				$(".builder-add, .builder-organize").removeClass("active");

				_landingUI.toggle(! storyLength);
				$(".builder-content-panel").toggle(!! storyLength);
				$("#sidePanel .builder, #floatingPanel .builder").toggleClass("large", ! app.data.getStoryLength());
			};

			//
			// Add
			//

			function firstAdd(title)
			{
				_this.updateUI(true);
				$(".builder-add").addClass("active");

				$("#mainStagePanel .firstAddExplain").html(
					'<div>'
					+ i18n.builder.firstAddSplash.lblMain.replace('%BR%', '</div><div class="biggerText">')
					+ '</div>'
				).fadeIn();

				setTimeout(function(){
					$("#sidePanel .firstAddExplain").html(
						'<div>' + i18n.builder.firstAddSplash.thisis + '</div>'
						+ '<div class="biggerText">' + app.cfg.LAYOUTS[0].title + '</div>'
					).fadeIn();

					$("#floatingPanel .firstAddExplain").html(
						'<div>' + i18n.builder.firstAddSplash.thisis + '</div>'
						+ '<div class="biggerText">' + app.cfg.LAYOUTS[1].title + '</div>'
					).fadeIn();
				}, 900);

				$("body").css("pointer-events", "none");

				setTimeout(function(){
					$(".firstAddExplain").fadeTo(100, 0.8);
					setTimeout(function(){
						clickAdd(title);
						$("body").css("pointer-events", "inherit");

						if ( ! _handleMyStoriesFirstAdd ) {
							_handleMyStoriesFirstAdd = topic.subscribe("BUILDER-MY-STORIES-CHECK", function(){
								setTimeout(window.myStoriesInit, 300);
								_handleMyStoriesFirstAdd.remove();
							});
						}
					}, 100);
				}, 1800);
			}

			function clickAdd(title)
			{
				_this.updateUI(true);
				$(".builder-add").addClass("active");

				_addEditPopup.present({
					mode: "add",
					webmaps: app.data.getWebmapsInfo(),
					section: app.data.getCurrentSection(),
					title: title
				}).then(
					function(section){
						console.log('builder.BuilderView.clickAdd:', section);

						app.data.addStorySection(section);

						$(".firstAddExplain").hide();
						checkForTemporaryMaps(section);

						topic.publish("story-update-sections");
						topic.publish("BUILDER_INCREMENT_COUNTER", 1);

						// After first section added - placement of Add/Orga - TODO remove after title optimization
						topic.publish("CORE_RESIZE");

						// Check the story
						topic.publish("BUILDER-MY-STORIES-CHECK");
					},
					function(){
						$(".firstAddExplain").hide();
						checkForTemporaryMaps();
						_this.updateUI();
					}
				);
			}

			function updateAddButtonStatus()
			{
				var disableAddButton = app.data.getStoryLength() >= app.cfg.MAX_NB_SECTIONS;

				$(".builder-add")
					.toggleClass("disabled", disableAddButton)
					.tooltip(disableAddButton ? {
						trigger: 'hover',
						placement: 'top',
						html: true,
						title: i18n.builder.addEditPopup.disabled
					} : 'destroy');

				if ( disableAddButton ) {
					var appColors = WebApplicationData.getColors();
					CommonHelper.addCSSRule(".builder-content-panel .tooltip-inner { background-color: " + appColors.text + "; color: " + appColors.panel + "; }");
					CommonHelper.addCSSRule(".builder-content-panel .tooltip-arrow { border-top-color: " + appColors.text + " !important; }");
				}
			}

			/*
			 * Remove the potential maps that have been loaded in Add/Edit but discarded
			 */
			function checkForTemporaryMaps(section)
			{
				var sectionIsWebmap = section && section.media && section.media.webmap;

				if ( sectionIsWebmap )
					$('.mapContainer[data-webmapid="' + section.media.webmap.id + '"]').data('temporary', false);

				$('.mapContainer').filter(function() {
					return $(this).data("temporary");
				}).each(function(i, node){
					var webmapId = $(node).data('webmapid');

					app.maps[webmapId].response.map.destroy();
					delete app.maps[webmapId];

					if ( $(node).parent().hasClass("active") )
						app.map = null;

					$(node).parent().remove();
				});
			}

			//
			// Edit
			//

			function openEditPopup(cfg)
			{
				var popupDeferred = new Deferred();

				_addEditPopup.present({
					mode: "edit",
					displayTab: cfg.displayTab,
					webmaps: app.data.getWebmapsInfo(),
					section: app.data.getStoryByIndex(cfg.sectionIndex),
					sectionIndex: cfg.sectionIndex,
					actionId: cfg.actionId
				}).then(
					function(updatedSection) {
						app.data.editSection(cfg.sectionIndex, updatedSection);

						checkForTemporaryMaps(updatedSection);

						topic.publish("story-update-section", {
							index: cfg.sectionIndex,
							section: updatedSection
						});

						topic.publish("BUILDER_INCREMENT_COUNTER", 1);
						popupDeferred.resolve();

						// Check the story
						topic.publish("BUILDER-MY-STORIES-CHECK");
					},
					function(){
						checkForTemporaryMaps();
						popupDeferred.reject();
					}
				);

				return popupDeferred;
			}

			function getAddEditEntryTitle()
			{
				return _addEditPopup.getAddEditEntryTitle();
			}

			//
			// Organize
			//

			function openOrganizePopup()
			{
				$(".builder-organize").addClass("active");

				_organizePopup.present({
					story: app.data.getStory(),
					sectionIndex: app.data.getCurrentSectionIndex()
				}).then(
					function(result){
						console.log('builder.BuilderView.openOrganizePopup:', result);

						_organizePopup.close();

						app.data.organizeStory(
							result.sections,
							result.sectionIndex,
							result.reversed
						);

						topic.publish("story-update-sections");
						topic.publish("BUILDER_INCREMENT_COUNTER", 1); // TODO

						// Check the story
						topic.publish("BUILDER-MY-STORIES-CHECK");
					},
					function(){
						_this.updateUI();
					}
				);
			}

			//
			// Settings
			//

			this.getSettingsTab = function()
			{
				return [
					new ViewLayout(),
					new ViewLayoutOptions(),
					new ViewTheme(),
					new ViewLayoutFonts(),
					new ViewHeader()
				];
			};

			this.openSettingPopup = function(fieldsError)
			{
				_settingsPopup.present(
					[
						WebApplicationData.getLayout(),
						WebApplicationData.getLayoutOptions(),
						{
							layout: WebApplicationData.getLayoutId(),
							layoutCfg: WebApplicationData.getLayoutOptions().layoutCfg,
							theme: WebApplicationData.getTheme()
						},
						WebApplicationData.getTheme(),
						WebApplicationData.getHeader()
					],
					null
				);
			};

			function settingsPopupSave(data)
			{
				var nbChange = 1;

				//nbChange += CommonHelper.findDifferences(data.settings[0], WebApplicationData.getLayout()).length;

				// Will trigger layout detroy/init
				if ( nbChange )
					$("body").addClass("switchLayout");

				//nbChange += CommonHelper.findDifferences(data.settings[1], WebApplicationData.getLayoutOptions()).length;
				//nbChange += CommonHelper.findDifferences(data.settings[2], WebApplicationData.getTheme()).length;
				//nbChange += CommonHelper.findDifferences(data.settings[3], WebApplicationData.getHeader()).length;

				WebApplicationData.setLayout(data.settings[0]);
				WebApplicationData.setLayoutOptions(data.settings[1]);
				WebApplicationData.setTheme({
					colors: data.settings[2].colors,
					fonts: data.settings[3].fonts
				});
				WebApplicationData.setHeader(data.settings[4]);

				// TODO deprecate nbChange ...
				if ( nbChange ) {
					topic.publish("BUILDER_INCREMENT_COUNTER", nbChange);
					topic.publish("CORE_UPDATE_UI");
					topic.publish("CORE_RESIZE");
				}

				updateAddButtonStatus();
			}

			//
			// Help
			//

			function clickHelp()
			{
				_helpUI.show();
			}

			function openHelpPopup(stepIndex, closeCallback)
			{
				_helpUI.show(stepIndex, closeCallback);
			}

			//
			// Direct creation first save
			//

			function openSharePopup(isFirstSave)
			{
				_sharePopup.present(isFirstSave, Core.getHeaderUserCfg());
			}

			//
			// Init popup
			//

			this.showInitPopup = function()
			{
				Core.initPopupPrepare();

				_initPopup.init();
				_initPopup.initLocalization();

				if ( ! app.isProduction && CommonHelper.getUrlParams().debug == "skipInit" ){
					initPopupComplete({id: "side"});
					return;
				}

				_initPopup.present().then(
					initPopupComplete,
					function()
					{
						Core.initPopupFail();
					}
				);
			};

			function initPopupComplete(config)
			{
				app.data.setStoryStorage("WEBAPP");

				Core.displayApp();
				Core.initPopupComplete();
				app.data.getWebAppData().setLayout(config);

				// Will trigger layout detroy/init in MainView/updateUI
				$("body").addClass("switchLayout");
				Core.appInitComplete();

				// Focus the landing screen title input
				// Except on iPad where the field is less sensible
				setTimeout(function(){
					if ( ! has("touch") )
						_landingUI.focus();
				}, 50);
			}

			//
			// My Stories
			//

			function myStoriesEditMedia(params)
			{
				params = params || {};

				var index = parseInt(params.index, 10);

				if ( index < 0 || index > app.data.getStoryLength() - 1 ) {
					return;
				}

				$(".builderShare").modal('hide');

				topic.publish("story-navigate-section", params.index);

				if ( params.type == 'main-stage' ) {
					app.builder.openEditPopup({
						sectionIndex: params.index
					}).then(function(){
						app.builder.openSharePopup();
					}, function(){
						app.builder.openSharePopup();
					});
				}
				else if ( params.type == 'main-stage-action' ) {
					app.builder.openEditPopup({
						sectionIndex: params.index,
						actionId: params.actionId,
						displayTab: 'content'
					}).then(function(){
						app.builder.openSharePopup();
					}, function(){
						app.builder.openSharePopup();
					});
				}
			}

			function myStoriesEditMap(params)
			{
				params = params || {};

				if ( $.inArray(params.id, app.data.getWebmaps()) < 0 ) {
					return;
				}

				$(".builderShare").modal('hide');

				openMapViewer({
					id: params.id
				}).then(
					function(){
						app.builder.openSharePopup();
					},
					function(){
						app.builder.openSharePopup();
					}
				);
			}

			//
			// Map Viewer
			//

			function openMapViewer(params)
			{
				return _mapEditDialog.present(params);
			}

			/*jshint -W098 */
			this.resize = function(cfg)
			{
				// On Firefox and share dialog is displayed
				if ( has("ff") && $("#sharePopup").hasClass("in") ) {
					_sharePopup.updateMyStoriesPosition();
				}
			};

			this.initLocalization = function()
			{
				_settingsPopup.initLocalization();
			};
		};
	}
);
