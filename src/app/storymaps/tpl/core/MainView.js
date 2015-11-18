define(["lib-build/css!./MainView",
		"../ui/MainStage",
		"./Config",
		"./Data",
		"./WebApplicationData",
		"./Helper",
		// Desktop UI
		"../ui/desktop/SidePanel",
		"../ui/desktop/FloatingPanel",
		// Mobile UI
		"../ui/mobile/FloatingSwiper",
		// Common
		"storymaps/common/mapcontrols/command/MapCommand",
		"storymaps/common/mapcontrols/legend/Legend",
		"storymaps/common/mapcontrols/overview/Overview",
		
		"lib-build/css!storymaps/common/_resources/font/sharing/css/fontello.css",
		"lib-build/css!storymaps/common/utils/SocialSharing.css",
		"lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator.css",
		// Utils
		"storymaps/common/utils/CommonHelper",
		"dojo/has",
		"dojo/topic",
		"esri/arcgis/utils",
		"esri/geometry/Extent",
		"../ui/StoryText",
		"lib-build/css!../ui/Common",
		"lib-build/css!../ui/StoryText",
		"lib-build/css!../ui/mobile/Common",
		"lib-build/css!../ui/Responsive"
	], 
	function (
		viewCss,
		MainStage,
		Config,
		Data,
		WebApplicationData,
		Helper,
		SidePanel,
		FloatingPanel,
		FloatingSwiper,
		MapCommand,
		Legend,
		Overview,
		socialSharingIconCss,
		socialSharingCss,
		loadingIndicatorCss,
		CommonHelper, 
		has,
		topic,
		arcgisUtils,
		Extent,
		StoryText
	){
		/**
		 * @preserve This application is released under the Apache License V2.0 by Esri http://www.esri.com/
		 * Checkout the project repository on GitHub to access source code, latest revision, developer documentation, FAQ and tips
		 * https://github.com/Esri/map-journal-storytelling-template-js
		 */
		return function MainView(builderView) 
		{
			var _core = null;
			
			this.init = function(core) 
			{			
				_core = core;
				
				//----------------------------------------------
				// Development - TODO to be removed for release
				//----------------------------------------------
				/*
				if ( app.isProduction ) {
					require(["esri/IdentityManager", "dojo/on"], function(IdentityManager, on){
						CommonHelper.isArcGISHosted = function(){ return true; };
						
						on(IdentityManager, 'dialog-create', function(){
							on(IdentityManager.dialog, 'show', function(){
								IdentityManager.dialog.txtUser_.set('value', window.configOptions.username);
								IdentityManager.dialog.txtPwd_.set('value', window.configOptions.password);
								IdentityManager.dialog.btnSubmit_.onClick();
							});
						});
					});
				}
				*/
				//----------------------------------------------
				
				// Do not allow builder under IE 10
				if( app.isInBuilder && has("ie") && has("ie") < 10) {
					i18n.viewer.errors.noBuilderIE = i18n.viewer.errors.noBuilderIE.replace('%VERSION%', 10).replace('%UPGRADE%', i18n.viewer.errors.upgradeBrowser);
					_core.initError("noBuilderIE");
					return false;
				}
				// Do not allow viewer under IE 9
				else if ( has("ie") && has("ie") <= 8 ) {
					i18n.viewer.errors.noViewerIE = i18n.viewer.errors.noViewerIE.replace('%VERSION%', 9).replace('%UPGRADE%', i18n.viewer.errors.upgradeBrowser);
					_core.initError("noViewerIE");
					return false;
				}
				
				// Prevent iPad vertical bounce effect
				// except on few containers that needs that
				$(document).bind(
					'touchmove',
					function(e) {
						if( ! $(e.target).parents('#sidePanel, #mobileView, .legendContainer').length )
							e.preventDefault();
					}
				);
				
				// Data Model
				app.data = new Data();
				
				app.ui = {};
				
				app.ui.mainStage = new MainStage(
					$("#mainStagePanel"), 
					app.isInBuilder,
					this
				);
				
				// Desktop UI
				app.ui.sidePanel = new SidePanel(
					$("#sidePanel"), 
					app.isInBuilder, 
					navigateStoryToIndex
				);
				app.ui.floatingPanel = new FloatingPanel(
					$("#floatingPanel"), 
					app.isInBuilder, 
					navigateStoryToIndex
				);

				app.isAddEditInProgress = false;

				// Mobile UI
				app.ui.mobileView = new FloatingSwiper(
					$("#mobileView"), 
					app.isInBuilder,
					navigateStoryToIndex
				);
				
				topic.subscribe("story-navigate-section", navigateStoryToIndex);
				topic.subscribe("story-update-sections", updateUIStory);
				topic.subscribe("story-update-section", updateStorySection);
				topic.subscribe("story-perform-action-media", app.ui.mainStage.updateMainMediaWithStoryAction);
				
				topic.subscribe("ADDEDIT_LOAD_WEBMAP", app.ui.mainStage.loadTmpWebmap);
				topic.subscribe("ADDEDIT_SHOW_WEBMAP", app.ui.mainStage.showWebmapById);
				topic.subscribe("ADDEDIT_RELOAD_CURRENT_WEBMAP", app.ui.mainStage.reloadCurrentWebmap);
				
				// Prevent focus on mousedown 
				// Focus stay allowed with keyboard with 508
				$("body").on("mousedown", "*", function(e) {
					if (($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none") {
						$(this).css("outline", "none").on("blur", function() {
							$(this).off("blur").css("outline", "");
						});
						
						// Prevent outline over image-container in description panel - Unsure why needed
						if ( $(this).parents(".image-container").length ) {
							$(this).parents(".image-container").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						// Prevent outline over image caption container in description panel - Unsure why needed
						else if ( $(this).parents("figure.caption").length ) {
							$(this).parents("figure.caption").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						// Prevent outline over title in description panel - Unsure why needed
						else if ( $(this).parents(".title").length ) {
							$(this).parents(".title").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						// Prevent outline over paragraph in description panel - Unsure why needed
						else if ( $(this).parentsUntil(".content", "div").length ) {
							$(this).parentsUntil(".content", "div").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						// Prevent outline over paragraph in description panel - Unsure why needed
						else if ( $(this).parents("p").length ) {
							$(this).parents("p").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						// Prevent outline over ul in description panel - Unsure why needed
						else if ( $(this).parents("ul").length ) {
							$(this).parents("ul").css("outline", "none").on("blur", function() {
								$(this).off("blur").css("outline", "");
							});
						}
						
					}
				});
				
				return true;
			};

			this.webAppConfigLoaded = function()
			{
				app.data.setStoryStorage(WebApplicationData.getStoryStorage());

				var enableSwitchBuilderBtn = _core.hasSwitchBuilderButton();
				app.ui.sidePanel.toggleSwitchBuilderButton(enableSwitchBuilderBtn);
				app.ui.floatingPanel.toggleSwitchBuilderButton(enableSwitchBuilderBtn);
				
				// If the app has been loaded but it's blank it means user come from the gallery
				// FromScratch doesn't get here
				// From the webmap has the webmap id
				app.isGalleryCreation = ! Object.keys(app.data.getWebAppData().getOriginalData().values).length;
			};
			
			this.loadFirstWebmap = function(/*webmapIdOrJSON*/)
			{
				//
			};
			
			this.loadWebmapFromData = function()
			{
				if ( app.data.getStoryStorage() == "WEBAPP" ) 
					storyDataReady();
				//else
					//on.once(app.map, 'update-end', storyDataReady);
			};
			
			this.loadWebmap = function(webmapIdOrJSON, container, extent)
			{
				console.log("tpl.core.MainView - loadWebMap - webmapId:", webmapIdOrJSON);
				
				//var popup = $("body").width() > 768 ? null : new PopupMobile(null, $("<div></div>")[0]);
				var popup = null;
				
				return arcgisUtils.createMap(webmapIdOrJSON, container, {
					mapOptions: {
						slider: true,
						autoResize: false,
						showAttribution: true,
						infoWindow: popup,
						extent: extent
					},
					usePopupManager: true,
					ignorePopups: false,
					bingMapsKey: commonConfig.bingMapsKey,
					editable: false,
					layerMixins: app.data.getAppProxies()
				}); 
			};
			
			this.firstWebmapLoaded = function()
			{
				//
			};
			
			this.startFromScratch = function()
			{
				initUI();
			};
			
			this.getMapConfig = function(response, mapContainer)
			{
				return {
					response: response,
					mapCommand: new MapCommand(
						response.map, 
						onMapCommandHomeClick,
						_core.zoomToDeviceLocation,
						app.data.getWebAppData().getLocateBtn()
					),
					legend: new Legend(
						response,
						mapContainer.siblings('.legend'),
						app.isInBuilder
					),
					overview: new Overview(
						response.map,
						mapContainer.siblings('.overview'),
						app.isInBuilder
					)
				};
			};
				
			function storyDataReady()
			{
				var storyLength = app.data.getStoryLength(),
					storyIndex = 0,
					storyIndexUrl = parseInt(CommonHelper.getUrlParams().section, 10);
				
				if ( storyIndexUrl )
					storyIndex = storyIndexUrl - 1;
				
				if ( storyIndex >= storyLength )
					storyIndex = 0;
				
				if ( storyLength )
					app.data.setCurrentSectionIndex(storyIndex);
				
				if ( storyLength ) {
					// Load the panel content and the Main Stage media
					// Will create Main Stage media containers
					updateUIStory();
					
					// Give it's size to everyone
					_core.handleWindowResize();

					// If it's not a webmap we are ready
					if ( app.data.getCurrentSection().media.type != 'webmap' ) {
						initUI();
					}
					// It's a Map - wait for it to be loaded/centered
					else {
						var handle, handle2;
						
						handle = topic.subscribe("story-loaded-map", function(){
							handle.remove();
							handle2.remove();
							
							initUI();
						});
						
						handle2 = topic.subscribe("story-section-map-timeout", function(){
							handle.remove();
							handle2.remove();
							
							initUI();
						});
					}
				}
				else 
					initUI();
			}

			function initUI()
			{				
				// App has been configured
				if ( ! WebApplicationData.isBlank() )
					_core.appInitComplete();
				// No data and in builder mode -> open the FS creation popup 
				else if ( app.isInBuilder ) {
					if( _core.isProd() )
						builderView.showInitPopup();
					else
						_core.portalLogin().then(
							builderView.showInitPopup, 
							function(){ 
								_core.initError("noLayerNoHostedFS");
							}
						);
				}
				// No data in view mode
				else if( CommonHelper.getAppID(_core.isProd()) ) {
					if( app.data.userIsAppOwner() ){
						//app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
						//setTimeout(function(){
							CommonHelper.switchToBuilder();
						//}, 1200);
					}
					else
						_core.initError("notConfiguredDesktop");
				}
				// No data in preview mode (should not happen)
				else {
					_core.initError("noLayer");
				}
				
				if ( builderView )
					builderView.updateUI();
			}

			function initDesktopLayout()
			{
				var appLayout = WebApplicationData.getLayoutId(),
					appColors = WebApplicationData.getColors(),
					layoutOpt = WebApplicationData.getLayoutOptions(),
					sections = app.data.getStorySections();

				if ( appLayout == "side" ) {
					// As layout is now using a table to align Side Panel and Main Stage
					//  have to flip the node when needed
					if ( layoutOpt.layoutCfg.position == "left" ) {
						if ( ! $("#sidePanel").parent().children().eq(0).is("#sidePanel") )
							$("#mainStagePanel").before($("#sidePanel"));
					}
					else {
						if ( ! $("#sidePanel").parent().children().eq(0).is("#mainStagePanel") )
							$("#sidePanel").before($("#mainStagePanel"));
					}
					
					app.ui.sidePanel.init(
						sections, 
						app.data.getCurrentSectionIndex(),
						layoutOpt,
						_core.getHeaderUserCfg(),
						appColors
					);
				}
				else if ( appLayout == "float" ) {
					app.ui.floatingPanel.init(
						sections,
						app.data.getCurrentSectionIndex(),
						layoutOpt,
						_core.getHeaderUserCfg(),
						appColors
					);
				}
			}

			function initMobileLayout()
			{
				var appColors = WebApplicationData.getColors(),
					sections = app.data.getStorySections();

				if (has("ie") === undefined || has("ie") > 8) {
					app.ui.mobileView.init(
						sections, 
						app.data.getCurrentSectionIndex(), 
						_core.getHeaderUserCfg(), 
						appColors
					);
				}
			}
			
			// about data...
			function updateUIStory()
			{
				if ( app.data.getStoryByIndex(0) )
					document.title = $('<div>' + app.data.getStoryByIndex(0).title + '</div>').text();
				
				app.ui.mainStage.updateMainMediaContainers();
				
				initDesktopLayout();
				initMobileLayout();
				
				setCommonLayoutColor();
				StoryText.createMainMediaActionLink();
				StoryText.createMediaFullScreenButton();
				StoryText.styleSectionPanelContent();
				
				navigateStoryToIndex(app.data.getCurrentSectionIndex());
				
				if ( builderView )
					builderView.updateUI();
			}
			
			function updateStorySection(/*cfg*/)
			{
				// TODO: should only refresh the item
				updateUIStory();
				//navigateStoryToIndex(cfg.index);
			}
			
			// Layout only
			this.updateUI = function()
			{
				var appColors = app.data.getWebAppData().getColors(),
					appLayout = app.data.getWebAppData().getLayoutId(),
					appFonts = app.data.getWebAppData().getFonts();
				
				// If switching layout - builder only
				if ( $("body").hasClass("switchLayout") ) {
					//var classes = $.map(app.cfg.LAYOUTS, function(l){ return "layout-" + l.id; }).join(' ');
					// Remove all classes from body that starts with layout-
					var classes = $.map($("body").attr("class").split(' '), function(l){ return l.match(/layout-/) ? l : null; }).join(' ');
					$("body").removeClass("switchLayout").removeClass(classes);

					app.ui.sidePanel.destroy();
					app.ui.floatingPanel.destroy();

					initDesktopLayout(appLayout);
					// Need to wait a bit for Side Panel
					setTimeout(function(){
						navigateStoryToIndex(app.data.getCurrentSectionIndex());
						updateUIStory();
					}, 50);
				}
				
				// Add the new layout class
				$("body").addClass("layout-" + appLayout);
				$("body").attr("data-theme-major", appColors.themeMajor);
				
				$.each(Object.keys(app.maps), function(i, id){
					app.maps[id].mapCommand.enableLocationButton(WebApplicationData.getLocateBtn());
				});
				
				setCommonLayoutColor();
				
				updateDesktopLayout();
				app.ui.mainStage.updateMainStageWithLayoutSettings();
				
				app.ui.mobileView.update(_core.getHeaderUserCfg(), appColors);
				
				/*
				 * Fonts settings
				 *  viewer and builder section title inline editor
				 *  builder section content RTE happen in ViewText > postDisplay
				 */
				
				// Section title 
				CommonHelper.addCSSRule(
					".sectionPanel .title, .sectionPanel .appTitle, #mobileView .title, #AddEditTitleEditor { " + appFonts.sectionTitle.value + " }", 
					"SectionTitleFont"
				);
				// Section content
				CommonHelper.addCSSRule(
					".sectionPanel .content, #mobileView .content { " + appFonts.sectionContent.value + " }", 
					"SectionContentFont"
				);
				
				// Strong tag need special care as the default OpenSansSemiBold use a separate font family and require "font-weight: normal"
				
				// Section title strong
				CommonHelper.addCSSRule(
					".sectionPanel .title strong, .sectionPanel .appTitle strong, #mobileView .title strong, #AddEditTitleEditor strong { "
					+ (appFonts.sectionTitle.id != "default" ? 
							appFonts.sectionTitle.value + " font-weight: bold;"
							: "font-family: 'open_sanssemibold', sans-serif; font-weight: normal;")
					+ "}",
					"SectionTitleStrongFont"
				);
				// Section content strong
				CommonHelper.addCSSRule(
					".sectionPanel .content strong, #mobileView .content strong{ "
					+ (appFonts.sectionContent.id != "default" ? 
							appFonts.sectionContent.value + " font-weight: bold;"
							: "font-family: 'open_sanssemibold', sans-serif; font-weight: normal;")
					+ "}",
					"SectionContentStrongFont"
				);
			};
			
			function updateDesktopLayout()
			{
				var appLayout = WebApplicationData.getLayoutId(),
					appColors = WebApplicationData.getColors(),
					layoutOpt = WebApplicationData.getLayoutOptions();

				if ( appLayout == "side" )
					app.ui.sidePanel.update(layoutOpt, _core.getHeaderUserCfg(), appColors);
				else if ( appLayout == "float" ) 
					app.ui.floatingPanel.update(layoutOpt, _core.getHeaderUserCfg(), appColors);
			}
			
			function setCommonLayoutColor()
			{
				var colors = WebApplicationData.getColors();
				CommonHelper.addCSSRule(".section a { color: " + colors.textLink + "; }");
			}
			
			this.resize = function(cfg)
			{
				var appLayout = WebApplicationData.getLayoutId();

				// Firefox and IE
				$("#sidePanelInner, #mainStagePanelInner").height($("#contentPanel").height());

				if ( cfg.isMobileView )
					app.ui.mobileView.resize(cfg);
				else if ( appLayout == "side" )
					app.ui.sidePanel.resize(cfg);
				else if ( appLayout == "float" )
					app.ui.floatingPanel.resize(cfg);
				
				// Maintain the current section in all layouts
				//  nothing will happen if the layout isn't active
				//  TODO: can we maintain the slider activeIndex while it's not visible? (vis: hidden instead of display?)
				//  TODO: same can't scroll if panel container is display:none
				var sectionIndex = app.data.getCurrentSectionIndex();
				app.ui.sidePanel.showSectionNumber(sectionIndex);
				app.ui.floatingPanel.showSectionNumber(sectionIndex);
				app.ui.mobileView.showSectionNumber(sectionIndex);

				// Style panel content (iframe sizing)
				StoryText.styleSectionPanelContent();
				
				app.ui.mainStage.updateMainStageWithLayoutSettings();
			};
			
			//
			// Initialization
			//
			
			this.checkConfigFileIsOK = function()
			{
				return Config.checkConfigFileIsOK();
			};
			
			this.appInitComplete = function()
			{
				this.updateUI();
				_core.cleanLoadingTimeout();
				$(window).resize();
				if ( ! app.isDirectCreation )
					_core.displayApp();
				topic.publish("tpl-ready");
			};
			
			
			
			//
			// Story events
			//
			
			function navigateStoryToIndex(index)
			{
				console.log("tpl.core.MainView - navigateStoryToIndex - ", index);
				
				if ( index < 0 || index > app.data.getStoryLength() - 1 )
					return;
				
				// Change current section
				app.data.setCurrentSectionIndex(index);
				
				// Refresh Main Stage
				app.ui.mainStage.updateMainMediaWithStoryMainMedia(index);
				
				//
				// Refresh Story panels
				//
				
				app.ui.sidePanel.showSectionNumber(index);
				app.ui.floatingPanel.showSectionNumber(index);
				app.ui.mobileView.showSectionNumber(index);
				
				$('.mediaBackContainer').hide();
			}
			
			this.onHashChange = function()
			{
				var view = location.hash ? location.hash.substring(1) : "";
				app.ui.mobileView.setView(view);
			};
			
			//
			// User events
			//
			
			function onMapCommandHomeClick()
			{
				var currentSection = app.data.getCurrentSection(),
					currentSectionIsWebmap = !! (currentSection && currentSection.media && currentSection.media.type == 'webmap' && currentSection.media.webmap),
					currentSectionDefineExtent = !! (currentSectionIsWebmap ? currentSection.media.webmap.extent : null),
					webmapId = currentSectionIsWebmap ? currentSection.media.webmap.id : null;
					//webmapItemInfo = currentSectionIsWebmap && app.maps && app.maps[webmapId] && app.maps[webmapId].response ? app.maps[webmapId].response.itemInfo.item : null;

				if ( ! currentSectionIsWebmap )
					return;
				
				if ( currentSectionDefineExtent )
					topic.publish("CORE_UPDATE_EXTENT", new Extent(currentSection.media.webmap.extent));
				else
					topic.publish("CORE_UPDATE_EXTENT", app.maps[webmapId].response.map._params.extent /*CommonHelper.getWebMapExtentFromItem(webmapItemInfo)*/);				
			}
			
			this.prepareMobileViewSwitch = function()
			{
				//
			};
			
			this.initLocalization = function()
			{
				//
			};
		};
	}
);