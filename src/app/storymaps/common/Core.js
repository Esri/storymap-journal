define(["lib-build/css!lib-app/bootstrap/css/bootstrap.min",
		"lib-build/css!./Core",
		"lib-app/jquery",
		"./utils/Polyfills",
		"esri/map",
		"esri/arcgis/Portal",
		"esri/arcgis/utils",
		"./utils/CommonHelper",
		"esri/urlUtils",
		// Builder
		"./builder/BuilderHelper",
		// Utils
		"dojo/has",
		"esri/IdentityManager",
		"esri/config",
		"esri/tasks/GeometryService",
		"esri/request",
		"dojo/topic",
		"dojo/on",
		"dojo/_base/lang",
		"dojo/Deferred",
		"dojo/DeferredList",
		"dojo/query",
		"lib-app/jquery.fastClick",
		"lib-app/bootstrap/js/bootstrap.min",
		"lib-app/history.min"],
	function(
		bootstrapCss,
		viewCss,
		jquery,
		Polyfills,
		Map,
		arcgisPortal,
		arcgisUtils,
		CommonHelper,
		urlUtils,
		BuilderHelper,
		has,
		IdentityManager,
		esriConfig,
		GeometryService,
		esriRequest,
		topic,
		on,
		lang,
		Deferred,
		DeferredList,
		query,
		FastClick)
	{		
		// Value is replaced with TPL_ENV_PRODUCTION during build
		var CONFIG = { environment: "TPL_ENV_DEV" };
		var _mainView = null;
		
		Polyfills.apply();

		//
		// Initialization
		//

		function init(mainView, builder)
		{
			var urlParams = CommonHelper.getUrlParams(), 
				isDirectCreation = false,
				isGalleryCreation = false;
			 
			console.log("common.core.Core - init", builder);
			
			_mainView = mainView;

			initLocalization();
			
			if( builder != null ) {
				isDirectCreation = urlParams.fromScratch != null || urlParams.fromscratch != null;
				isGalleryCreation = urlParams.fromGallery != null;
			}
			
			// If browser doesn't support history and it's direct or gallery mode where the URL will have to be rewritten later
			// Redirect to a URL that the browser will be able to overwrite
			// And put a token so that we don't loop in here
			if ( ! CommonHelper.browserSupportHistory() && (isDirectCreation || isGalleryCreation) && urlParams.ieredirected == null ) {
				window.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "#" + document.location.search + "&ieredirected";
			}

			// Ignore index.html configuration on AGOL/Portal
			if (CommonHelper.isArcGISHosted()) {
				app.indexCfg = { };
			}
			// Keep only some properties in development
			else if ( !isProd() ) {
				app.indexCfg = {
					proxyurl: app.indexCfg.proxyurl,
					sharingurl: app.indexCfg.sharingurl,
					username: app.indexCfg.username,
					password: app.indexCfg.password
				};
			} 
			
			// Check the config file
			if( ! _mainView.checkConfigFileIsOK() ) {
				initError("invalidConfig");
				return;
			}
				
			// Init UI
			
			if( has("touch") )
				$("body").addClass("hasTouch");
			FastClick.attach(document.body);

			lang.mixin(app, {
				map: null,
				maps: {},
				portal: null,
				builder: builder,
				isDirectCreation: isDirectCreation,
				isGalleryCreation: isGalleryCreation,
				isDirectCreationFirstSave: isDirectCreation,
				isLoading: true,
				loadingTimeout: null
			});
			
			if ( app.appCfg.useStandardHeader ){
				require(["storymaps/common/ui/header/Desktop"], function(HeaderDesktop){
					app.ui.headerDesktop = new HeaderDesktop($("#headerDesktop"), app.isInBuilder);
				});
			}
			
			if ( ! _mainView.init(this) )
				return;
			
			// Automatic login in development mode
			if ( !isProd() && app.indexCfg.username && app.indexCfg.password) {
				on(IdentityManager, 'dialog-create', function(){
					on(IdentityManager.dialog, 'show', function(){
						IdentityManager.dialog.txtUser_.set('value', app.indexCfg.username);
						IdentityManager.dialog.txtPwd_.set('value', app.indexCfg.password);
						IdentityManager.dialog.btnSubmit_.onClick();
					});
				});
			}
			
			startLoadingTimeout();

			// Sharing URL
			if ( ! app.indexCfg.sharingurl ) {
				// Determine if hosted or on a Portal 
				var appLocation = document.location.pathname.indexOf("/apps/");
				if( appLocation == -1 )
					appLocation = document.location.pathname.indexOf("/home/");
				
				if( appLocation != -1 ) {
					// Get the portal instance name
					var instance = location.pathname.substr(0,appLocation);
					 
					app.indexCfg.sharingurl = "//" + location.host + instance + "/sharing/content/items";
					app.indexCfg.proxyurl =  "//" + location.host + instance +  "/sharing/proxy";
				}
				else
					app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL;					
			}
			arcgisUtils.arcgisUrl = location.protocol + app.indexCfg.sharingurl;
			
			// Proxy URL
			if( ! app.indexCfg.proxyurl )
				app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL;
			esriConfig.defaults.io.proxyUrl = location.protocol + app.indexCfg.proxyurl;

			// Allow IE9 to save over HTTP
			IdentityManager && IdentityManager.setProtocolErrorHandler(function(){ return true; });
			
			// USE CORS to save the web app configuration during developement
			if( app.isInBuilder && app.cfg.CORS_SERVER ) {
				$.each(app.cfg.CORS_SERVER, function(i, server){
					esriConfig.defaults.io.corsEnabledServers.push(server);
				});
			}
			
			// Set timeout depending on the application mode
			esriConfig.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST;
			
			// Fix for multiple twitter bootstrap popup to be open simultaneously
			$.fn.modal.Constructor.prototype.enforceFocus = function () {};

			definePortalConfig();
			initStep2();
		}

		function initStep2()
		{
			console.log("common.core.Core - initStep2");
			
			var appId = CommonHelper.getAppID(isProd());
			var webmapId = CommonHelper.getWebmapID(isProd());
					
			// Initialize localization
			if ( app.ui.headerDesktop )
				app.ui.headerDesktop.initLocalization();
			_mainView.initLocalization();
			
			//$(window).resize(CommonHelper.debounce(handleWindowResize, 150));
			$(window).resize(handleWindowResize);
			
			// Disable form submit on enter key
			$("form").bind("keydown", function(e) {
				if (e.keyCode == 13)
					return false;
			});
			
			// Basic styling in case something isn't public
			on(IdentityManager, "dialog-create", styleIdentityManager);
			
			topic.subscribe("CORE_UPDATE_UI", updateUI);
			topic.subscribe("CORE_RESIZE", handleWindowResize);
			topic.subscribe("CORE_UPDATE_EXTENT", setMapExtent);
			
			app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step2);
			
			var supportWebmapPreviewAGOL = !! (app.appCfg ? app.appCfg.supportWebmapPreviewAGOL : true);
			
			// Load using a Web Mapping Application item
			if (appId) {
				loadWebMappingApp(appId);
				return;
			}
			
			// Webmap and template doesn't support preview when hosted in AGOL 
			if ( webmapId && ! supportWebmapPreviewAGOL ) {
				if( CommonHelper.isArcGISHosted() )
					window.location = app.cfg.HELP_URL;
				else 
					loadWebMap(webmapId);
				
				return;
			}
			
			// Direct creation and not signed-in
			if ( app.isDirectCreation && isProd() && ! CommonHelper.getPortalUser() ) {
				redirectToSignIn();
				return;
			}
				
			// Direct creation and signed in
			if (app.isDirectCreation) {
				portalLogin().then(function(){
					initializeUI();
					_mainView.startFromScratch();
					appInitComplete();
				});
				return;
			}
				
			if( CommonHelper.isArcGISHosted() )
				window.location = app.cfg.HELP_URL;
			else
				initError("invalidConfigNoApp");
		}

		function loadWebMappingApp(appId)
		{
			console.log("common.core.Core - loadWebMappingApp - appId:", appId);
			
			var urlParams = CommonHelper.getUrlParams();
			var forceLogin = urlParams.forceLogin !== undefined;
			
			// If forceLogin parameter in URL OR builder
			if ( forceLogin || app.isInBuilder )
				portalLogin().then(
					function() {
						loadWebMappingAppStep2(appId);
					}, 
					function() { 
						initError("notAuthorized");
					}
				);
			// Production in view mode
			else
				loadWebMappingAppStep2(appId);
		}
		
		function loadWebMappingAppStep2(appId)
		{
			// Get application item
			var itemRq = esriRequest({
				url: app.indexCfg.sharingurl + "/" + appId + "",
				content: {
					f: "json"
				},
				callbackParamName: "callback",
				load: function (response) {
					app.data.setWebAppItem(response);
				},
				error: function() { }
			});

			// Get application config
			var dataRq = esriRequest({
				url: app.indexCfg.sharingurl + "/" + appId + "/data",
				content: {
					f: "json"
				},
				callbackParamName: "callback",
				load: function (response) {
					app.data.getWebAppData().set(response);
				},
				error: function(){ }
			});
			
			var appDeferedList = new DeferredList([itemRq, dataRq]);
			appDeferedList.then(function(){
				if (!dataRq.results || !dataRq.results[0] || !itemRq.results || !itemRq.results[0]) {
					if( itemRq.results && itemRq.results[1] && itemRq.results[1] && itemRq.results[1].httpCode == 403 )
						initError("notAuthorized");
					else
						initError("invalidApp");
					return;
				}
				
				// If in builder, check that user is app owner or org admin
				if (app.isInBuilder && isProd() && !app.data.userIsAppOwner()) {
					initError("notAuthorized");
					return;
				}

				_mainView.webAppConfigLoaded();
				
				var useWebmapInApp = !! (app.appCfg ? app.appCfg.useWebmapInApp : true);
				var webmapId = app.data.getWebAppData().getWebmap() || CommonHelper.getWebmapID(isProd());
				
				if (webmapId && useWebmapInApp)
					loadWebMap(webmapId);
				else if ( ! useWebmapInApp ) {
					initializeUI(); 
					_mainView.loadWebmapFromData();
				}
				// ArcGIS Gallery page start the app with an appid that doesn't include a webmap
				else if (CommonHelper.getPortalUser() || ! isProd() && app.data.getWebAppData().isBlank() )
					redirectToBuilderFromGallery();
				else if ( ! app.data.getWebAppData().isBlank() )
					loadWebMap(app.data.getWebAppData().getViews()[0].cfg.webmap.id);
				else
					initError("invalidApp");
			});
		}
		
		function portalLogin()
		{
			var resultDeferred = new Deferred();
			var portalUrl = app.indexCfg.sharingurl.split('/sharing/')[0];
			app.portal = new arcgisPortal.Portal(portalUrl);

			on(IdentityManager, "dialog-create", styleIdentityManagerForBuilder);
			
			app.portal.on("load", function(){
				app.portal.signIn().then(
					function() {
						definePortalConfig();
						resultDeferred.resolve();
					},
					function() {
						resultDeferred.reject();
					}
				);
			});
			
			return resultDeferred;
		}

		function loadWebMap(webmapIdOrJSON)
		{
			_mainView.loadFirstWebmap(webmapIdOrJSON).then(
				lang.hitch(this, function(response){
					webMapInitCallback(response);
				}),
				lang.hitch(this, function(){
					initError("createMap");
				})
			);  
		}

		function webMapInitCallback(/*response*/)
		{
			console.log("common.core.Core - webMapInitCallback");
			
			// TODO
			/*
			if( app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0] ) {
				var ownerFound = false;
				
				if( response.itemInfo.item.owner ) 
					ownerFound = $.inArray(response.itemInfo.item.owner, app.indexCfg.authorizedOwners) != -1;
				
				if (!ownerFound) {
					initError("invalidConfigOwner");
					return;
				}
			}
			*/
			
			console.error("FATAL ERROR");
			return;
			/*
			app.maps[response.itemInfo.item.id] = _mainView.getMapConfig(response); 
			app.map = response.map;
			app.data.setWebMap(response.itemInfo);
			
			app.map.disableKeyboardNavigation();

			initializeUI();

			_mainView.firstWebmapLoaded();
			*/
		}
		
		function initializeUI()
		{
			app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step3);
			
			// Initialize header
			// Title/subtitle are the first valid string from: index.html config object, web application data, web map data
			// TODO
			var title = app.indexCfg.title || app.data.getWebAppData().getTitle() /*|| response.itemInfo.item.title*/;
			var subtitle = app.indexCfg.subtitle || app.data.getWebAppData().getSubtitle() /*|| response.itemInfo.item.snippet*/;
			
			var urlParams = CommonHelper.getUrlParams();
			var appColors = app.data.getWebAppData().getColors();
			
			if ( app.ui.headerDesktop ) {
				app.ui.headerDesktop.init(
					! app.isInBuilder && (app.cfg.EMBED || urlParams.embed || urlParams.embed === ''),
					title,
					subtitle,
					getHeaderUserCfg(),
					appColors[0],
					hasSwitchBuilderButton
				);
			}
			
			document.title = title ? $('<div>' + title + '</div>').text() : app.cfg.TPL_NAME;
		}
		
		function appInitComplete()
		{
			console.log("common.core.Core - initMap");
			
			// Resize everything after picture has been set
			handleWindowResize();

			// On mobile, force start on the Map view except if it's the intro
			if (location.hash && CommonHelper.browserSupportHistory())
				location.hash = "map";

			// On mobile, change view based on browser history
			window.onhashchange = function(){				
				_mainView.prepareMobileViewSwitch();
				_mainView.onHashChange();
			};
			
			_mainView.appInitComplete();
			app.builder && app.builder.appInitComplete();
		}
		
		function displayApp()
		{
			app.isLoading = false;
			$("#loadingOverlay").fadeOut("slow");
			app.ui.loadingIndicator.stop();
		}
		
		function initError(error, message, noDisplay)
		{	
			var errorMsg = i18n.viewer.errors[error];

			cleanLoadingTimeout();
			app.ui.loadingIndicator.stop();
			
			if ( error == "notConfiguredMobile" || error == "notConfiguredDesktop" )
				errorMsg = errorMsg.replace('%TPL_NAME%', app.cfg.TPL_NAME);
			
			if( error == "notConfiguredDesktop" ) {
				app.ui.loadingIndicator.setMessage(errorMsg, true);
				return;
			}
			else if ( error != "initMobile" )
				app.ui.loadingIndicator.forceHide();
			
			$("#fatalError .error-msg").html(errorMsg);
			if( ! noDisplay ) 
				$("#fatalError").show();
		}
		
		function replaceInitErrorMessage(error)
		{
			$("#fatalError .error-msg").html(i18n.viewer.errors[error]);
		}
		
		//
		// Map navigation
		//
		
		function setMapExtent(extent)
		{
			if( ! extent || ! extent.spatialReference || ! app.map || ! app.map.extent.spatialReference || ! app.map.spatialReference ) {
				var r = new Deferred();
				r.resolve();
				return r;
			}
				
			if( app.map.spatialReference.wkid == extent.spatialReference.wkid )
				return app.map.setExtent(extent/*, true*/); /* TODO */
			else {
				var resultDeferred = new Deferred();
				esriConfig.defaults.geometryService.project([extent], app.map.spatialReference, function(features){
					if( ! features || ! features[0] )
						return;
					
					app.map.setExtent(features[0]/*, true*/); /* TODO */
					resultDeferred.resolve();
				});
				return resultDeferred;
			}
		}
		
		function zoomToDeviceLocation(success, geom)
		{
			if( success ) {
				if ( app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326 ) {
					esriConfig.defaults.geometryService.project([geom], app.map.spatialReference, function(features){
						if( ! features || ! features[0] )
							return;
						
						if (! app.map.extent.contains(features[0])) 
							app.map.centerAt(features[0]);
					});
				}
				else if (! app.map.extent.contains(geom)) 
					app.map.centerAt(geom);
			}
		}

		//
		// UI
		//

		/**
		 * Refresh the UI when data have changed
		 */
		function updateUI(/*params*/)
		{
			console.log("common.core.Core - updateUI");
			
			var appColors = app.data.getWebAppData().getColors();
			
			if ( app.ui.headerDesktop ) {
				app.ui.headerDesktop.setTitleAndSubtitle(
					app.data.getWebAppData().getTitle() || (app.data.getWebMap() ? app.data.getWebMap().item.title : ''),
					app.data.getWebAppData().getSubtitle() || (app.data.getWebMap() ? app.data.getWebMap().item.snippet : '')
				);
				app.ui.headerDesktop.update(getHeaderUserCfg(), appColors[0]);
			}
			
			_mainView.updateUI();
			
			handleWindowResize();
		}
		
		function getHeaderUserCfg()
		{
			return {
				logoURL: app.data.getWebAppData().getLogoURL(),
				logoTarget: app.data.getWebAppData().getLogoTarget(),
				linkText: app.data.getWebAppData().getHeaderLinkText(),
				linkURL: app.data.getWebAppData().getHeaderLinkURL(),
				socialBtn: app.data.getWebAppData().getSocial()
			};
		}
		
		function handleWindowResize()
		{
			var widthViewport = $("body").width(),
				heightViewport = $("body").height(),
				heightAboveMap = 0,
				widthSideMap = 0;
			
			var isMobileView = widthViewport < 768 || widthViewport <= heightViewport,
				isOnMobileMapView = $(".centerLink").length ? $(".centerLink").hasClass("current") : true;
			
			if( isMobileView )
				$("body").addClass("mobile-view");
			else
				$("body").removeClass("mobile-view");

			$('.mainViewAboveMap').each(function(i, item){
				var itemObj = $(item);
				heightAboveMap += itemObj.is(':visible') ? itemObj.outerHeight() : 0;
			}); 
			
			$('.mainViewSideMap').each(function(i, item){
				var itemObj = $(item);
				widthSideMap += itemObj.is(':visible') ? itemObj.outerWidth() : 0;
			});
			
			if ( app.ui.headerDesktop )
				app.ui.headerDesktop.resize(widthViewport);
			
			if (app.initScreenIsOpen) {
				// Display the fatal error dialog box on mobile or the data popup on desktop
				//$("#loadingOverlay").css("top", isMobileView ? "0px" : heightAboveMap);
				//$("#loadingOverlay").css("height", isMobileView ? $("body").height() : $("body").height() - heightAboveMap);
				$("#header").css("display", isMobileView ? "none" : "block");
				$("#fatalError").css("display", isMobileView ? "block": "none");
			}
			
			if( ! app.initScreenIsOpen )
				$("#contentPanel").height(heightViewport - heightAboveMap);
			//$("#contentPanel").width(widthViewport);
			
			_mainView.resize({
				isMobileView: isMobileView,
				isOnMobileMapView: isOnMobileMapView,
				width: widthViewport,
				height: heightViewport - heightAboveMap
			});
			
			/* TODO find why need that -1 removing overflow:hidden ont he sidePanel fix the issue */
			$("#mainStagePanel").width(widthViewport - widthSideMap - 1);
			
			if (app.isInBuilder){
				app.builder.resize({
					isMobileView: isMobileView
				});
			}
			
			if (app.map && (! isMobileView || (isMobileView && isOnMobileMapView))){
				try {
					app.map.resize();
				} catch( e ){ }
			}
			
			// Change esri logo size
			if( isMobileView )
				$(".mapContainer .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm");
			else
				$(".mapContainer .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med");
		}
		
		function hasSwitchBuilderButton()
		{
			return ! app.isInBuilder && (
				(! isProd() && !! CommonHelper.getAppID(isProd()))
				|| isProd() && app.data.userIsAppOwner());
		}

		//
		// Login in dev environnement
		//
		
		function styleIdentityManager()
		{
			// Override for bootstrap conflicts
			$(".esriSignInDialog td label").siblings("br").css("display", "none");
			$(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none");
			$(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none");
			$(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px");

			// Edit title
			$(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html(i18n.viewer.signin.title);

			// Hide default message
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none");

			// Setup a more friendly text
			$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>" + i18n.viewer.signin.explainViewer.replace("%PORTAL_LINK%", "<a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a>") + "</div>");
		}
		
		function styleIdentityManagerForBuilder()
		{
			// Setup a more friendly text
			$(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").html(i18n.viewer.signin.explainBuilder.replace("%PORTAL_LINK%", "<a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a>"));
		}
		
		function prepareAppForWebmapReload()
		{
			// TODO
			//$("#mainMap_root").remove();
			
			$("#header").css("display", "inherit");
			$(".mobileView").css("display", "inherit");
			$("#fatalError").css("display", "none");
			$("#loadingOverlay").css("top", "0px");
			
			app.ui.loadingIndicator.start();
			
			app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step2);
			startLoadingTimeout();
			
			handleWindowResize();
		}
		
		function redirectToSignIn()
		{
			window.location = arcgisUtils.arcgisUrl.split('/sharing/')[0] 
				+ "/home/signin.html?returnUrl=" 
				+ encodeURIComponent(document.location.href);
		}
		
		function redirectToBuilderFromGallery()
		{
			// TODO display another redirect message
			app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
			setTimeout(function(){
				window.location = document.location.href + "&fromGallery";
			}, 1200);
		}

		//
		// App init
		//
		
		function startLoadingTimeout()
		{
			// First view loading time before failure
			app.loadingTimeout = setTimeout(appLoadingTimeout, app.cfg.TIMEOUT_VIEWER_LOAD);
		}
		
		function cleanLoadingTimeout()
		{
			if (typeof app != "undefined" && app.loadingTimeout) {
				clearTimeout(app.loadingTimeout);
				app.loadingTimeout = null;
			}
		}
		
		function appLoadingTimeout()
		{
			// Restart the timeout if the dialog is shown or has been shown and the timeout hasn't been fired after it has been closed
			if( IdentityManager && IdentityManager.dialog && IdentityManager.dialog._alreadyInitialized && ! IdentityManager.loadingTimeoutAlreadyFired) {
				clearTimeout(app.loadingTimeout);
				startLoadingTimeout();
				// Set a flag only if the dialog isn't showned now, so next timeout will fail
				if( ! IdentityManager._busy ) 
					IdentityManager.loadingTimeoutAlreadyFired = true;
				return;
			}
			
			app.ui.loadingIndicator.stop();
			app.ui.loadingIndicator.setMessage(i18n.viewer.loading.fail + '<br /><button type="button" class="btn btn-default btn-medium" style="margin-top: 5px;" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + '</button>', true);
			app.map && app.map.destroy();
		}
		
		function initLocalization()
		{
			query('#fatalError .error-title')[0].innerHTML = i18n.viewer.errors.boxTitle;
		}
		
		function isProd()
		{
			// Prevent the string from being replaced
			return CONFIG.environment != ['TPL','ENV','DEV'].join('_');
		}
		
		function definePortalConfig()
		{
			console.log("common.core.Core - parsePortalConfig");
			
			if ( ! app.portal )
				return;
			
			// If geometry, geocode service or bing maps key are defined by portal,
			// they override the configuration file values
		
			var geometryServiceURL, geocodeServices;
			
			//
			// Config file
			//
			
			if (commonConfig && commonConfig.CommonHelperServices) {
				if (commonConfig.CommonHelperServices.geometry && commonConfig.CommonHelperServices.geometry) 
					geometryServiceURL = location.protocol + commonConfig.CommonHelperServices.geometry.url;
				if (commonConfig.CommonHelperServices.geocode && commonConfig.CommonHelperServices.geocode.length && commonConfig.CommonHelperServices.geocode[0].url) 
					geocodeServices = commonConfig.CommonHelperServices.geocode;
				// Deprecated syntax
				else if (commonConfig.CommonHelperServices.geocode && commonConfig.CommonHelperServices.geocode && commonConfig.CommonHelperServices.geocode.url) 
					geocodeServices = [{
						name: "myGeocoder",
						url: commonConfig.CommonHelperServices.geocode.url
					}];
			}
			
			//
			// Portal
			//
			
			if (app.portal.helperServices) {
				if (app.portal.helperServices.geometry && app.portal.helperServices.geometry.url) 
					geometryServiceURL = app.portal.helperServices.geometry.url;
				
				if (app.portal.helperServices.geocode && app.portal.helperServices.geocode.length && app.portal.helperServices.geocode[0].url ) 
					geocodeServices = app.portal.helperServices.geocode;
			}

			esriConfig.defaults.geometryService = new GeometryService(geometryServiceURL);
			app.indexCfg.geocodeServices = geocodeServices;

			if( app.portal.bingKey )
				commonConfig.bingMapsKey = app.portal.bingKey;
			
			// Disable feature service creation as Portal for ArcGIS 10.2 doesn't support that yet
			if( app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE )
				app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = false;

			app.isPortal = !! app.portal.isPortal;
		}
		
		//
		// Builder init
		//
		
		function initPopupPrepare()
		{
			cleanLoadingTimeout();
			app.isInitializing = true;
			app.initScreenIsOpen = true;
			initError("notConfiguredMobile", null, true);
			setTimeout(handleWindowResize, 50);
		}
		
		function initPopupComplete()
		{
			$('#initPopup').modal("hide");
			app.initScreenIsOpen = false;
			
			//_core.prepareAppForWebmapReload();
			//$("#loadingOverlay").css("height", "100%");
			
			//topic.publish("BUILDER_INCREMENT_COUNTER", 1);
		}
		
		function initPopupFail()
		{
			replaceInitErrorMessage("notConfiguredDesktop");
			$("#loadingOverlay").css("top", "0px");
			$("#header").css("display", "inherit");
			$("#fatalError").css("display", "block");
			
			app.initScreenIsOpen = false;
			handleWindowResize();
		}

		return {
			init: init,
			isProd: isProd,
			appInitComplete: appInitComplete,
			displayApp: displayApp,
			
			loadWebMap: loadWebMap,
			handleWindowResize: handleWindowResize,
			hasSwitchBuilderButton: hasSwitchBuilderButton,
			
			initPopupPrepare: initPopupPrepare,
			initPopupComplete: initPopupComplete,
			initPopupFail: initPopupFail,
			
			zoomToDeviceLocation: zoomToDeviceLocation,
			
			getHeaderUserCfg: getHeaderUserCfg,
			
			cleanLoadingTimeout: cleanLoadingTimeout,
			initError: initError,
			prepareAppForWebmapReload: prepareAppForWebmapReload,
			replaceInitErrorMessage: replaceInitErrorMessage,
			portalLogin: portalLogin
		};
	}
);