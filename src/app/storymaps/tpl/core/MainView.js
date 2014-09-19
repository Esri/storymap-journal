define(["lib-build/css!./MainView",
		"lib-build/tpl!./MainMediaContainerMap",
		"lib-build/tpl!./MainMediaContainerImage",
		"lib-build/tpl!./MainMediaContainerEmbed",
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
		"storymaps/common/ui/loadingIndicator/LoadingIndicator",
		"storymaps/common/mapcontrols/command/MapCommand",
		"storymaps/common/mapcontrols/legend/Legend",
		"storymaps/common/mapcontrols/overview/Overview",
		"lib-build/css!storymaps/common/ui/Modal.css",
		"lib-build/css!storymaps/common/utils/SocialSharing.css",
		// Utils
		"storymaps/common/utils/CommonHelper",
		"dojo/has",
		"esri/arcgis/utils",
		"esri/renderers/UniqueValueRenderer",
		"esri/geometry/Point",
		"esri/geometry/Extent",
		"esri/config",
		"esri/geometry/webMercatorUtils",
		//"esri/dijit/PopupMobile",
		"esri/tasks/QueryTask",
		"esri/tasks/query",
		"dojo/topic",
		"dojo/on",
		"dojo/aspect",
		"dojo/_base/lang",
		"../ui/StoryText",
		"esri/IdentityManager",
		"lib-build/css!../ui/Common",
		"lib-build/css!../ui/StoryText",
		"lib-build/css!../ui/mobile/Common",
		"lib-build/css!../ui/Responsive"
	], 
	function (
		viewCss,
		mainMediaContainerMapTpl,
		mainMediaContainerImageTpl,
		mainMediaContainerEmbedTpl,
		Config,
		Data,
		WebApplicationData,
		Helper,
		SidePanel,
		FloatingPanel,
		FloatingSwiper,
		LoadingIndicator,
		MapCommand,
		Legend,
		Overview,
		modalCss,
		socialSharingCss,
		CommonHelper, 
		has,
		arcgisUtils,
		UniqueValueRenderer,
		Point,
		Extent,
		esriConfig,
		webMercatorUtils,
		//PopupMobile,
		QueryTask,
		Query,
		topic,
		on,
		aspect,
		lang,
		StoryText,
		IdentityManager)
	{
		return function MainView(builderView) 
		{
			var _core = null;
			var _this = this;
			
			this.init = function(core) 
			{			
				_core = core;
				
				// Do not allow builder under IE 10
				if( app.isInBuilder && has("ie") && has("ie") < 10) {
					// TODO i18n the number should be a variable
					i18n.viewer.errors.noBuilderIE8 = i18n.viewer.errors.noBuilderIE8.replace('9', '10');
					_core.initError("noBuilderIE8");
					return false;
				}
				else if ( has("ie") && has("ie") <= 8 ) {
					// TODO i18n
					i18n.viewer.errors.noViewerIE8 = "This application is not supported in Internet Explorer before version 9. <a href='http://browsehappy.com/?locale=en' target='_blank'>Please update your browser</a>.";
					_core.initError("noViewerIE8");
					return false;
				}
				
				// Prevent iPad vertical bounce effect
				// except on few containers that needs that
				$(document).bind(
					'touchmove',
					function(e) {
						if( ! $(e.target).parents('#sidePanel, #mobileView').length )
							e.preventDefault();
					}
				);
				
				// Data Model
				app.data = new Data();
					
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
				topic.subscribe("story-perform-action-media", updateMainMediaWithStoryAction);
				
				topic.subscribe("ADDEDIT_LOAD_WEBMAP", loadTmpWebmap);
				topic.subscribe("ADDEDIT_SHOW_WEBMAP", showWebmapById);
				
				return true;
			};

			this.webAppConfigLoaded = function()
			{
				app.data.setStoryStorage(WebApplicationData.getStoryStorage());
				
				var enableSwitchBuilderBtn = _core.hasSwitchBuilderButton();
				app.ui.sidePanel.toggleSwitchBuilderButton(enableSwitchBuilderBtn);
				app.ui.floatingPanel.toggleSwitchBuilderButton(enableSwitchBuilderBtn);
			};
			
			this.loadFirstWebmap = function(webmapIdOrJSON)
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
				
				arcgisUtils.arcgisUrl = arcgisUtils.arcgisUrl.replace('http:http','http');
				
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
					bingMapsKey: commonConfig.bingMapsKey
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
					// Create Main Stage containers
					createMainMediaContainers();

					// Load the panel content and the Main Stage media
					updateUIStory();
					
					// Give it's size to everyone
					_core.handleWindowResize();

					// If it's not a webmap we are ready
					if ( app.data.getCurrentSection().media.type != 'webmap' ) {
						initUI();
					}
					// It's a Map - wait for it to be loaded/centered
					else {
						var handle = topic.subscribe("story-loaded-section", function(){
							handle.remove();
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
						app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
						setTimeout(function(){
							CommonHelper.switchToBuilder();
						}, 1200);
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
				updateMainMediaContainers();
				
				initDesktopLayout();
				initMobileLayout();
				
				setCommonLayoutColor();
				setMapControlsColor();
				StoryText.createMainMediaActionLink();
				StoryText.createMediaFullScreenButton();
				StoryText.styleSectionPanelContent();
				
				navigateStoryToIndex(app.data.getCurrentSectionIndex());
				
				if ( builderView )
					builderView.updateUI();
			}
			
			function updateStorySection(cfg)
			{
				// TODO: should only refresh the item
				updateUIStory();
				//navigateStoryToIndex(cfg.index);
			}
			
			// Layout only
			this.updateUI = function()
			{
				var appColors = app.data.getWebAppData().getColors(),
					appLayout = app.data.getWebAppData().getLayoutId();
				
				// If switching layout
				if ( $("body").hasClass("switchLayout") ) {
					//var classes = $.map(app.cfg.LAYOUTS, function(l){ return "layout-" + l.id; }).join(' ');
					// Remove all classes from body that starts with layout-
					var classes = $.map($("body").attr("class").split(' '), function(l){ return l.match(/layout-/) ? l : null; }).join(' ');
					$("body").removeClass("switchLayout").removeClass(classes);

					app.ui.sidePanel.destroy();
					app.ui.floatingPanel.destroy();

					initDesktopLayout(appLayout);
				}
				
				// Add the new layout class
				$("body").addClass("layout-" + appLayout);
				
				$.each(Object.keys(app.maps), function(i, id){
					app.maps[id].mapCommand.enableLocationButton(WebApplicationData.getLocateBtn());
				});
				
				$("#mainStagePanel").css("background-color", appColors.media);
				
				setCommonLayoutColor();
				setMapControlsColor();
				
				updateDesktopLayout();
				updateMainStageWithLayoutSettings();
				
				app.ui.mobileView.update(_core.getHeaderUserCfg(), appColors);
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
			
			function setMapControlsColor()
			{
				if ( app.mapConfig ) {
					var appColors = app.data.getWebAppData().getColors();
					app.mapConfig.overview.setColors(appColors);
					app.mapConfig.legend.setColors(appColors);
				}
			}
			
			/* jshint -W098 */
			this.resize = function(cfg)
			{
				var appLayout = WebApplicationData.getLayoutId();

				if ( appLayout == "side" )
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
				
				updateMainStageWithLayoutSettings();
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
			// Management of Main Stage: containers
			//
			
			function createMainMediaContainers()
			{				
				var containers = "";
				
				$.each(app.data.getWebmaps(), function(i, webmap){
					containers += mainMediaContainerMapTpl({ webmapid: webmap, isTemporary: false });
				});
				
				$.each(app.data.getImages(), function(i, url){
					containers += mainMediaContainerImageTpl({ url: url });
				});
				
				$("#mainStagePanel .medias").append(containers);
			}
			
			function addTemporaryMainMediaContainer(webmap)
			{
				$("#mainStagePanel .medias").append(mainMediaContainerMapTpl({ webmapid: webmap, isTemporary: true }));
			}
			
			function updateMainMediaContainers()
			{
				var webmaps = app.data.getWebmaps(),
					images = app.data.getImages(),
					embeds = app.data.getEmbeds();
				
				//
				// Map
				//
				
				// Add new container
				$.each(webmaps, function(i, webmap){
					var mapContainer = $('.mapContainer[data-webmapid="' + webmap + '"]');
					if ( ! mapContainer.length )
						$("#mainStagePanel .medias").append( mainMediaContainerMapTpl({ webmapid: webmap, isTemporary: false }) );
				});
				
				// Remove unused container
				$('.mapContainer').each(function(){
					if ( $.inArray($(this).data('webmapid'), webmaps) == -1 )
						$(this).parent().remove();
				});
				
				//
				// Image
				//
				
				// Add new container
				$.each(images, function(i, imageUrl){
					var imageContainer = $('.imgContainer[data-src="' + imageUrl + '"]');
					if ( ! imageContainer.length )
						$("#mainStagePanel .medias").append( mainMediaContainerImageTpl({ url: imageUrl }) );
				});
				
				// Remove unused containers
				$('.imgContainer').each(function(){
					if ( $.inArray($(this).data('src'), images) == -1 )
						$(this).parent().remove();
				});
				
				//
				// Embed (video and webpage)
				//
				
				// Add new container
				$.each(embeds, function(i, embedInfo) {
					// TODO this has to be reviewed to not allow content to be loaded too early? or give the same option for url?
					var embedContainer = $('.embedContainer[data-src="' + (embedInfo.url || embedInfo.ts) + '"]');
					if ( ! embedContainer.length ) {
						
						//
						// Frametag are added straight to the dom without any container
						//  a class and a data attribute are added below
						// Ideally there should be a container so that it's possible to do more funny stuff like adding
						//  multiple iframe but these makes it difficult to center the frame(s)
						//
						
						$("#mainStagePanel .medias").append(mainMediaContainerEmbedTpl({ 
							url: embedInfo.url,
							frameTag: embedInfo.frameTag
						}));
						
						// TODO should parse before adding to the dom
						// TODO should remove the src attr and make it a data attr like regular frame
						if ( !! embedInfo.frameTag ) {
							$("#mainStagePanel .medias .mainMediaContainer").last()
								.find('iframe').first()
								.addClass('embedContainer')
								.attr('data-src', embedInfo.ts);
						}
					}
				});
				
				// Remove unused containers
				$('.embedContainer').each(function() {
					var embedSRC = $(this).data('src');
					var embedInUse = $.grep(embeds, function(embed){
						return embedSRC == embed.url || embedSRC == embed.ts;
					}).length > 0;
					
					if ( ! embedInUse )
						$(this).parent().remove();
				});
			}
			
			//
			// Management of Main Stage: all media
			//
			
			function updateMainMediaWithStoryMainMedia(index)
			{
				var section = app.data.getStoryByIndex(index);
				if ( section && section.media )
					updateMainMedia(section.media, section, index);
			}
			
			function updateMainMediaWithStoryAction(media)
			{
				updateMainMedia(media, null, null);
			}
			
			function updateMainMedia(media, section, index)
			{
				// Refresh any iframe that would be the current Main Stage Media
				// If it's a video player this will stop current video playback 
				var activeFrame = $(".mainMediaContainer.active > iframe");
				if ( activeFrame.length ) {
					setTimeout(function(){
						activeFrame.attr('src', activeFrame.attr('src'));
					}, 500);
				}
				
				if ( media.type == "webmap" )
					updateMainMediaMaps(media.webmap.id, section, index, media);
				else if ( media.type == "image" )
					updateMainMediaPicture(media.image.url, media.image.display);
				else if ( media.type == "video" )
					updateMainMediaEmbed(media.video.url, media.video);
				else if ( media.type == "webpage" )
					updateMainMediaEmbed(media.webpage.url || media.webpage.ts, media.webpage);
			}
			
			//
			// Management of Main Stage: map
			//
			
			// TODO params of the next two function has to be cleanedup
			
			function updateMainMediaMaps(newWebmapId, section, index, media) 
			{
				var currentWebmapId = $('.mapContainer:visible').data('webmapid');
				
				if ( newWebmapId ) {
					var mapContainer = $('.mapContainer[data-webmapid="' + newWebmapId + '"]');
					
					// The map has already been loaded
					if ( mapContainer.hasClass('map') ) {
						var extentBeforeUpdate = app.map ? app.map.extent : null;
						
						app.map = app.maps[newWebmapId].response.map;
						app.mapItem = app.maps[newWebmapId].response.itemInfo;
						app.mapConfig = app.maps[newWebmapId];
						
						updateMainMediaMapsStep2(mapContainer, section, extentBeforeUpdate, index, media);
					}
					// Need to load the map
					else {
						// For the loading indicator to be visible
						mapContainer.parent().addClass("active");
						
						// TODO for all media type
						var loadingIndicator = new LoadingIndicator($('#mainStagePanel > .loadingIndicator')[0]);
						loadingIndicator.start();
						
						// Get the extent to be used to load the webmap
						var extent = media && media.webmap ? media.webmap.extent : null;
						if ( ! extent && section && section.media && section.media.webmap )
							extent = section.media.webmap.extent;
						
						if ( extent ) {
							try {
								extent = new Extent(extent);
							} catch (e) {
								extent = null;
							}
						}
						
						_this.loadWebmap(newWebmapId, mapContainer[0], extent).then(
							lang.hitch(_this, function(response){
								var extentBeforeUpdate = app.map ? app.map.extent : null;
								
								app.maps[newWebmapId] = this.getMapConfig(response, mapContainer);
								app.map = response.map;
								app.mapItem = app.maps[newWebmapId].response.itemInfo;
								app.mapConfig = app.maps[newWebmapId];
								
								updateMainMediaMapsStep2(
									mapContainer, 
									section, 
									extentBeforeUpdate, 
									index, 
									media
								);
								
								//
								// Register events for the builder
								//  because we need to know for Map Configuration what is the intended extent 
								//  before the zoom when there is lods (the resulting extent will always be different)
								//
								if ( app.isInBuilder ) {
									// can't use update-end as it's not correct value for setExtent when lods
									app.ignoreNextEvent = false;
									aspect.before(app.map, "setExtent", function(extent) {
										console.log("Set extent:", extent);
										if ( ! app.ignoreNextEvent ) {
											app.lastExtentSet = extent;
											// A pan or zoom will also be triggered
											app.ignoreNextEvent = true;
										}
									});
									
									var handle = app.map.on("update-end", function(){
										handle.remove();
										app.lastExtentSet = app.map.extent;
										// store the initial extent in a new property 
										// TODO is that necessary? to not mess with browser resize and init map extent?
										//app.map._params.extent = app.map.extent;
										app.map.mapJournalInitExtent = app.map.extent;
										app.ignoreNextEvent = true;
									});
									
									var onPanOrZoomEnd = function(e)
									{
										if ( ! app.ignoreNextEvent )
											app.lastExtentSet = e.extent;
										else
											app.ignoreNextEvent = false;
									};
									app.map.on("zoom-end", onPanOrZoomEnd);
									app.map.on("pan-end", onPanOrZoomEnd);
									
									/*
									// popup maximize / map edit conflict
									app.map.infoWindow.on("maximize", function(){
										$("#mainStageEdit").hide();
									});
									
									app.map.infoWindow.on("restore", function(){
										$("#mainStageEdit").show();
									});
									
									app.map.infoWindow.on("hide", function(){
										$("#mainStageEdit").show();
									});
									*/
								}
								
								// Popup theme
								if ( app.map.infoWindow )
									$(app.map.infoWindow.domNode).addClass("light");

								setTimeout(function(){
									loadingIndicator.stop();
								}, 100);
								
								mapContainer.parent().removeClass("has-error");
							}),
							lang.hitch(_this, function(){
								loadingIndicator.stop();
								$('.mainMediaContainer').removeClass("active");
								mapContainer.parent().addClass("has-error active");
								mapContainer.parent().find('.error').html(i18n.viewer.errors.mapLoadingFail);
								topic.publish("story-loaded-section", index);
								topic.publish("ADDEDIT_LOAD_WEBMAP_FAIL");
							})
						);
					}
				} 
			}
			
			function updateMainMediaMapsStep2(mapContainer, section, oldExtent, index, media)
			{
				$('.mainMediaContainer').removeClass("active");
				mapContainer.parent().addClass("active");
				updateMainStageWithLayoutSettings();
				setMapControlsColor();
				
				//app.data.debug();
				
				try {
					app.map.resize();
					app.map.reposition();
				} catch(e) { }
				
				// If this is a story section
				if ( section || media ) {
					//
					// Layers
					//
					
					//  - Array of {id:'', visible:''} for the overrided layers (compared to the webmap initial state)
					//  - Only overrided layers are present there to allow the webmap to evolve outside of the app
					//     - If default visibility of layers are changed outside of the app, all view that didn't override the value will see the change
					//     - if the webmap evolve the array may reference deleted layers. That's cleaned anytime user open the Configure map View and Save
					var layerCfg = media && media.webmap ? media.webmap.layers : null,
						mapDefault = app.maps[media.webmap.id].response.itemInfo.itemData.operationalLayers;
					
					// Loop through webmap layers and set the visibility
					// The visibility is set to the section definition when defined or to the webmap initial visibility
					$.each(mapDefault, function(i, layer){
						var layerObject = layer.layerObject || (layer.featureCollection ? layer.featureCollection.layers[0].layerObject : null),
							override = $(layerCfg).filter(function(i, l){ return l.id == layerObject.id; });
						if ( layerObject)
							layerObject.setVisibility(override.length ? override[0].visibility : layer.visibility);
					});
					
					//
					// Extent
					//
					
					var extent = media && media.webmap ? media.webmap.extent : null;
					if ( ! extent && section && section.media && section.media.webmap )
						extent = section.media.webmap.extent;
					
					if ( extent ) {
						try {
							extent = new Extent(extent);
						} catch (e){
							//
						}
					}
					
					if ( extent )
						app.map.setExtent(extent/*, true*/).then(function(){
							applyPopupConfiguration(media.webmap.popup);
							topic.publish("story-loaded-section", index);
						}); // TODO has at least to use _core.setExtent
					else
						topic.publish("story-loaded-section", index);
					
					/*
					// Reuse the current extent
					else if( oldExtent )
						app.map.setExtent(oldExtent);
					*/
					
					//
					// Map Controls
					//
					
					var overviewSettings = media.webmap.overview || {},
						legendSettings = media.webmap.legend || {};
					
					// If the section is a webmap user is not allow to change the legend and overview settings
					//  but if media is an image he can choose
					// There is an on puropose loophole here if section was an image and then was switched to a webmap (after link was defined)
					//  the settings initially defined for the link will still apply
					if ( section && section.media && section.media.webmap ) {
						if ( ! overviewSettings )
							overviewSettings = section.media.webmap.overview;
						if ( ! legendSettings )
							legendSettings = section.media.webmap.legend;
					}
					
					app.maps[media.webmap.id].overview.toggle(overviewSettings.enable, WebApplicationData.getColors());
					app.maps[media.webmap.id].overview.toggleExpanded(overviewSettings.openByDefault);
					app.maps[media.webmap.id].overview.setSettings(overviewSettings);
					
					app.maps[media.webmap.id].legend.toggle(legendSettings.enable);
					app.maps[media.webmap.id].legend.toggleExpanded(legendSettings.openByDefault);
					app.maps[media.webmap.id].legend.setSettings(legendSettings);
					
					//app.maps[media.webmap.id].mapCommand.enableLocationButton(media.webmap.locate);
					
					//
					// Popup
					//
					
					if ( ! extent )
						applyPopupConfiguration(media.webmap.popup);
					// Otherwise called through extent change callback
					
				} 
				else 
					topic.publish("ADDEDIT_WEBMAP_DONE");
			}
			
			function applyPopupConfiguration(popupCfg)
			{
				// When an action is performed the popup will be closed
				// But features aren't cleared so it can be restored
				app.map.infoWindow.hide();
				
				if ( popupCfg ) {
					var layer = app.map.getLayer(popupCfg.layerId);
					
					app.map.infoWindow.clearFeatures();

					if ( layer ) 
						applyPopupConfigurationStep2(popupCfg);
					// On FS the layer will be null until loaded...
					else
						var handle = app.map.on("update-end", function(){
							applyPopupConfiguration(popupCfg);
							handle.remove();
						});
				}
			}

			function applyPopupConfigurationStep2(popupCfg)
			{
				var layer = app.map.getLayer(popupCfg.layerId);
				
				if ( ! layer )
					return;
				
				// Server layer
				if ( layer.url ) {
					var queryTask = new QueryTask(layer.url),
						query = new Query();
						query.objectIds = [popupCfg.fieldValue];
						query.returnGeometry = true;
						query.outFields = ["*"];

					queryTask.execute(query, function(result){
						var feature = result.features[0];
						if ( feature ) {
							if( ! feature.infoTemplate )
								feature.setInfoTemplate(layer.infoTemplate);
							
							applyPopupConfigurationStep3(feature);
						}
					});
				}
				// Client side layer
				else {
					var feature = null;
					
					$.each(layer.graphics, function(i, g){
						if ( g.attributes[popupCfg.fieldName] == popupCfg.fieldValue )
							feature = g;
					});
					
					if ( feature )
						applyPopupConfigurationStep3(feature);
				}
			}
			
			function applyPopupConfigurationStep3(feature)
			{
				if ( ! feature )
					return;
				
				var geom = feature.geometry,
					center = geom.getExtent() ? geom.getExtent().getCenter() : geom;
				
				app.map.infoWindow.setFeatures([feature]);
				app.map.infoWindow.show(center);
				
				// Center the map is the geometry isn't visible
				if ( ! app.map.extent.contains(center) ) {
					app.map.centerAt(center);
					$('.mediaBackContainer').show();
				}
			}
			
			function updateMainStageWithLayoutSettings()
			{
				var appLayout = WebApplicationData.getLayoutId(),
					layoutCfg = WebApplicationData.getLayoutCfg(),
					bodyWidth = $("body").width();
				
				// Resize embed that are have display fit
				styleMainStageEmbed();
				
				if ( appLayout == "float" ) {
					var mapWidth = $("#contentPanel").width(),
						panelPos = $("#floatingPanel").position(),
						panelWidth = $("#floatingPanel").width(),
						isLeft = layoutCfg.position == "left",
						mapArea = isLeft ? mapWidth - (panelPos.left + panelWidth) : panelPos.left;
					
					// Attribution
					if ( isLeft )
						$(".mainMediaContainer.active .esriControlsBR").css({
							left: panelPos.left + panelWidth + 5,
							right: 'inherit'
						});
					else
						$(".mainMediaContainer.active .esriControlsBR").css({
							left: 'inherit',
							right: mapWidth - panelPos.left + 5
						});
					
					// Map configuration
					if ( isLeft )
						$(".mapConfigOverlay.position, .mapConfigOverlay.popup").css("left", panelPos.left + panelWidth + mapArea / 2);
					else
						$(".mapConfigOverlay.position, .mapConfigOverlay.popup").css("left", mapArea / 2);
					
					//
					// Center some components on the Main Stage space at the left or right of the panel
					//
					
					var panelIsRight =  $("body").hasClass("layout-float-right"),
						paddingDir = panelIsRight ? "padding-right" : "padding-left",
						posDir = panelIsRight ? "right" : "left", 
						val = $("#floatingPanel").position().left;
					
					if ( panelIsRight )
						val = bodyWidth - val;
					else
						val += $("#floatingPanel").width(); 
					
					// Help, builder landing&quotes
					$(".centerAlignOnFloat")
						.css({ paddingRight: 0, paddingLeft: 0 })
						.css(paddingDir, val);
					
					// Back button
					$(".centerAlignOnFloatOverMap")
						.css({ left: 0, right: 0 })
						.css(posDir, val);
					
					// Help goes over the floating panel when screen too small 
					if ( bodyWidth <= 1067 )
						$("#builderHelp").css(paddingDir, 0);
					
					// Main Stage Images that are centered
					// Disabled as img could get cropped
					// Could workaround that by playing on the background-position and not on left/right
					/*
					$(".mainMediaContainer .imgContainer.center")
						.css({ left: 0, right: 0 })
						.css(posDir, val);
					*/
					
					// Main Stage video&embed that are centered
					$(".mainMediaContainer .embedContainer.center")
						.css({ left: 0, right: 0 })
						.css(posDir, val);
					
					// Main Stage video&embed that are custom
					$(".mainMediaContainer .embedContainer.custom")
						.css({ left: 0, right: 0 })
						.css(posDir, val);
				}
				else {
					// Attribution
					$(".mainMediaContainer.active .esriControlsBR").css({
						left: "",
						right: ""
					});
					
					// Map configuration
					$(".mapConfigOverlay.position, .mapConfigOverlay.popup").css("left", "50%");
					
					// Reset centering that may have been done if user has changed layouts
					$(".centerAlignOnFloat").css({ paddingRight: 0, paddingLeft: 0 });
					$(".centerAlignOnFloatOverMap").css({ left: 0, right: 0 });
					//$(".mainMediaContainer .imgContainer.center").css({ left: 0, right: 0 });
					$(".mainMediaContainer .embedContainer.center").css({ left: 0, right: 0 });
					$(".mainMediaContainer .embedContainer.custom").css({ left: 0, right: 0 });
				}
			}
			
			//
			// Management of Main Stage: picture
			//
			
			function updateMainMediaPicture(url, display)
			{
				$('.mainMediaContainer').removeClass('active');
				var pictureContainer = $('.imgContainer[data-src="' + url + '"]');
				if ( pictureContainer ) {
					pictureContainer.removeClass("center fit fill stretch").addClass(display);
					pictureContainer.attr('src', pictureContainer.data('src'));
					
					updateMainStageWithLayoutSettings();
					
					pictureContainer.parent().addClass('active');
				}
			}
			
			//
			// Management of Main Stage: embed (video and webpage) 
			//
			
			function updateMainMediaEmbed(url, cfg)
			{
				$('.mainMediaContainer').removeClass('active');
				var embedContainer = $('.embedContainer[data-src="' + url + '"]');
				
				if ( embedContainer ) {
					embedContainer.removeClass("center fit fill stretch").addClass(cfg.display);
					
					// TODO this fail if no src attr is set on the iframe (srcdoc)
					//  as a workaround <iframe srcdoc="http://" src="about:blank></iframe>
					if ( ! embedContainer.attr('src') )
						// TODO youtube recommand an origin param "&origin=" + encodeURIComponent(document.location.origin)
						// https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
						embedContainer.attr('src', url);
					
					var width = cfg.width || '560',
						height = cfg.height || '315';
					
					// Done trough CSS and JS on resize
					if ( cfg.display == "fit" ) {
						width = "";
						height = "";
					}
					
					if ( width ) {
						if ( ! width.match(/[0-9]+%/) )
							width = width + 'px';
						embedContainer.attr('width', width);
					}
					if ( height ) {
						if ( ! height.match(/[0-9]+%/) )
							height = height + 'px';
						embedContainer.attr('height', height);
					}
					
					embedContainer.parent().addClass('active');
					updateMainStageWithLayoutSettings();
				}
			}
			
			function styleMainStageEmbed()
			{
				$(".mainMediaContainer.active iframe.embedContainer.fit").attr(
					"height", 
					$("#mainStagePanel").width() * 9 / 16
				);
			}
			
			//
			// Story events
			//
			
			function navigateStoryToIndex(index)
			{
				console.log("tpl.core.MainView - navigateStoryToIndex - ", index);
				
				// Change current section
				app.data.setCurrentSectionIndex(index);
				
				// Refresh Main Stage
				updateMainMediaWithStoryMainMedia(index);
				
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
					webmapId = currentSectionIsWebmap ? currentSection.media.webmap.id : null,
					webmapItemInfo = currentSectionIsWebmap && app.maps && app.maps[webmapId] && app.maps[webmapId].response ? app.maps[webmapId].response.itemInfo.item : null;

				if ( ! currentSectionIsWebmap )
					return;
				
				if ( currentSectionDefineExtent )
					topic.publish("CORE_UPDATE_EXTENT", new Extent(currentSection.media.webmap.extent));
				else
					topic.publish("CORE_UPDATE_EXTENT", app.maps[webmapId].response.map._params.extent /*CommonHelper.getWebMapExtentFromItem(webmapItemInfo)*/);				
			}
			
			//
			// Builder events
			//
			
			function showWebmapById(webmapId)
			{
				updateMainMediaMaps(webmapId);
			}

			function loadTmpWebmap(webmapId)
			{
				if ( ! $('.mapContainer[data-webmapid="' + webmapId + '"]').length )
					addTemporaryMainMediaContainer(webmapId);
				
				updateMainMediaMaps(webmapId);
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
