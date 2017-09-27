define(["lib-build/css!lib-app/bootstrap/css/bootstrap.min",
		"lib-build/css!storymaps/common/ui/Modal.css",
		"lib-build/css!./Core",
		"lib-app/jquery",
		"./utils/Polyfills",
		"esri/map",
		"esri/arcgis/Portal",
		"esri/arcgis/utils",
		"./utils/CommonHelper",
		"esri/urlUtils",
		// Builder
		"./builder/MyStoriesWrapper",
		// Utils
		"dojo/has",
		"esri/IdentityManager",
		"esri/arcgis/OAuthInfo",
		"esri/config",
		"esri/tasks/GeometryService",
		"esri/request",
		"dojo/topic",
		"dojo/on",
		"dojo/_base/lang",
		"dojo/_base/array",
		"dojo/_base/kernel",
		"dojo/Deferred",
		"dojo/DeferredList",
		"dojo/query",
		"lib-app/jquery.fastClick",
		"lib-app/bootstrap/js/bootstrap.min",
		"lib-app/history.min"],
	function(
		bootstrapCss,
		modalCss,
		viewCss,
		jquery,
		Polyfills,
		Map,
		arcgisPortal,
		arcgisUtils,
		CommonHelper,
		urlUtils,
		MyStoriesWrapper,
		has,
		IdentityManager,
		ArcGISOAuthInfo,
		esriConfig,
		GeometryService,
		esriRequest,
		topic,
		on,
		lang,
		array,
		kernel,
		Deferred,
		DeferredList,
		query,
		FastClick)
	{
		// Value is replaced with TPL_ENV_PRODUCTION during build
		var CONFIG = { environment: "TPL_ENV_DEV" },
			_mainView = null,
			_urlParams = CommonHelper.getUrlParams();

		Polyfills.apply();

		//
		// Initialization
		//

		function init(mainView, builder)
		{
			var isDirectCreation = false,
				isGalleryCreation = false;

			console.log("common.core.Core - init", builder);

			_mainView = mainView;

			app.userCanEdit = false;

			initLocalization();

			if( builder != null ) {
				isDirectCreation = _urlParams.fromScratch != null || _urlParams.fromscratch != null;
				isGalleryCreation = _urlParams.fromGallery != null;
			}

			// If browser doesn't support history and it's direct or gallery mode where the URL will have to be rewritten later
			// Redirect to a URL that the browser will be able to overwrite
			// And put a token so that we don't loop in here
			if ( ! CommonHelper.browserSupportHistory() && (isDirectCreation || isGalleryCreation) && _urlParams.ieredirected == null ) {
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
					password: app.indexCfg.password,
					oAuthAppId: app.indexCfg.oAuthAppId
				};
			}

			if(_urlParams.sharinghost)
				app.indexCfg.sharingurl = _urlParams.sharinghost;

			// Check the config file
			if( ! _mainView.checkConfigFileIsOK() ) {
				initError("invalidConfig");
				return;
			}

			// Init UI

			document.title = app.cfg.TPL_NAME;

			$(".print-warning").html(i18n.viewer.errors.print0);

			//
			// Instantiate FastClick to make the app more responsive except on the map due to conflict with popup charts
			//

			if( has("touch") )
				$("body").addClass("hasTouch");

			FastClick.prototype._needsClick = FastClick.prototype.needsClick;
			FastClick.prototype.needsClick = function(target) {
				if ($(target).parents('.esriPopup').length) {
					return true;
				}
				return FastClick.prototype._needsClick.call(this, target);
			};

			FastClick.attach(document.body);

			// App is embedded
			if ( window != window.top /*|| _urlParams.forceEmbed !== undefined || app.indexCfg.forceEmbed*/ )
				$("body").addClass("isEmbed");

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

			if ( app.indexCfg.sharingurl.match(/^http/) )
				arcgisUtils.arcgisUrl = app.indexCfg.sharingurl;
			else
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

			// Proxy rules
			if ( app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length ) {
				$.each(app.cfg.PROXY_RULES, function(i, rule){
					if ( rule && rule.urlPrefix && rule.proxyUrl ) {
						urlUtils.addProxyRule(rule);
					}
				});
			}

			// Set timeout depending on the application mode
			esriConfig.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST;

			// Fix for multiple twitter bootstrap popup to be open simultaneously
			$.fn.modal.Constructor.prototype.enforceFocus = function () {};

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

			//app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step2);

			// Load the Portal
			app.portal = new arcgisPortal.Portal(app.indexCfg.sharingurl.split('/sharing/')[0]);
			app.portal.on("load", function(response){
				app.isPortal = !! response.isPortal;

				definePortalConfig();

				// Pass cookie onto API to avoid infinite redirects
				// use .portalUrl instead of just .url -- otherwise Portal federated services
				// look in the wrong place for generateToken. Check esri.id.serverInfos if
				// you run into this problem.
				IdentityManager.checkSignInStatus(app.portal.portalUrl);

				// If app is configured to use OAuth
				if ( app.indexCfg.oAuthAppId ) {
					var info = new ArcGISOAuthInfo({
						appId: app.indexCfg.oAuthAppId,
						popup: false,
						portalUrl: 'https:' + app.indexCfg.sharingurl.split('/sharing/')[0]
					});

					IdentityManager.registerOAuthInfos([info]);

					IdentityManager.checkSignInStatus(info.portalUrl).then(
						function() {
							// User has signed-in using oAuth
							if ( ! builder )
								portalLogin().then(initStep2);
							else
								portalLogin().then(initStep2);
						},
						function() {
							// Not signed-in, redirecting to OAuth sign-in page if builder
							if (!builder){
								initStep2();
							} else {
								portalLogin().then(initStep2);
							}
						}
					);
				}
				else
					initStep2();
			});
		}

		function initStep2()
		{
			console.log("common.core.Core - initStep2");

			var appId = CommonHelper.getAppID(isProd()),
				webmapId = CommonHelper.getWebmapID(isProd()),
				supportWebmapPreviewAGOL = !! (app.appCfg ? app.appCfg.supportWebmapPreviewAGOL : true);

			// Load using a Web Mapping Application item
			if (appId) {
				loadWebMappingApp(appId);
				return;
			}

			// Webmap and template doesn't support preview when hosted in AGOL
			if ( webmapId && ! supportWebmapPreviewAGOL ) {
				if( CommonHelper.isArcGISHosted() )
					redirectToExternalHelp();
				else
					loadWebMap(webmapId);

				return;
			}

			// Direct creation and not signed-in
			if ( app.isDirectCreation && isProd() && CommonHelper.isArcGISHosted() && ! (CommonHelper.getPortalUser() || app.portal.getPortalUser()) ) {
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
				redirectToExternalHelp();
			else if ( _urlParams.appid && (! app.indexCfg.authorizedOwners || ! app.indexCfg.authorizedOwners[0]) )
				initError("unspecifiedConfigOwner");
			else if ( ! app.isProduction )
				initError("invalidConfigNoAppDev");
			else
				initError("invalidConfigNoApp");
		}

		function loadWebMappingApp(appId)
		{
			console.log("common.core.Core - loadWebMappingApp - appId:", appId);

			var forceLogin = _urlParams.forceLogin !== undefined;

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
			arcgisUtils.getItem(appId).then(
				function(response)
				{
					if ( ! response ) {
						initError("appLoadingFail");
						return;
					}

					var itemRq = response.item,
						dataRq = response.itemData;

					app.data.setWebAppItem(itemRq);
					app.data.getWebAppData().set(dataRq);

					app.userCanEdit = app.data.userIsAppOwner();

					//Prevent app from accessing the cookie in viewer when user is not the owner
					//if ( ! app.isInBuilder && ! app.userCanEdit ) {
					//	if( ! document.__defineGetter__ ) {
					//		Object.defineProperty(document, 'cookie', {
					//			get: function(){ return ''; },
					//			set: function(){ return true; }
					//		});
					//	}
					//	else {
					//		document.__defineGetter__("cookie", function() { return ''; });
					//		document.__defineSetter__("cookie", function() {} );
					//	}
					//}

					if( app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0] ) {
						var owner = itemRq.owner,
							ownerFound = false;

						if( owner )
							ownerFound = $.inArray(owner, app.indexCfg.authorizedOwners) != -1;

						if ( ! ownerFound && app.indexCfg.authorizedOwners[0] == "*" )
							ownerFound = true;

						if ( ! ownerFound ) {
							$.each(app.indexCfg.authorizedOwners, function(i, owner){
								var test = owner.match(/^\[(.*)\]$/);
								if ( test ) {
									if ( itemRq.orgId == test[1] ) {
										ownerFound = true;
									}
								}
							});
						}

						if ( ! ownerFound ) {
							initError("invalidConfigOwner");
							return;
						}
					}

					// App proxies
					if (itemRq && itemRq.appProxies) {
						var layerMixins = array.map(itemRq.appProxies, function (p) {
							return {
								"url": p.sourceUrl,
								"mixin": {
									"url": p.proxyUrl
								}
							};
						});
						app.data.setAppProxies(layerMixins);
					}

					// If in builder, check that user is app owner or org admin
					if (app.isInBuilder && isProd() && !app.userCanEdit) {
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
						initError("appLoadingFail");

					// Print
					var isShareDialogEnabled = true;
					if (app.data.getWebAppData().getHeader() && app.data.getWebAppData().getHeader().social && ! app.data.getWebAppData().getHeader().social.bitly) {
						isShareDialogEnabled = false;
					}
					$(".print-warning").html(isShareDialogEnabled ? i18n.viewer.errors.print1 : i18n.viewer.errors.print2);
				},
				function(error)
				{
					if ( error && error.httpCode == 400 )
						initError("invalidApp");
					else if ( error && error.httpCode == 403 )
						initError("notAuthorized");
					else
						initError("appLoadingFail");
				}
			);
		}

		function portalLogin()
		{
			var resultDeferred = new Deferred();

			on(IdentityManager, "dialog-create", styleIdentityManagerForBuilder);

			app.portal.signIn().then(
				function() {

					// If in builder, check that user is user can create/edit item
					if (app.isInBuilder && ! app.data.checkUserItemPrivileges()) {
						initError("notAuthorizedBuilder");
						return;
					}

					app.userCanEdit = app.data.userIsAppOwner();

					definePortalConfig();
					resultDeferred.resolve();
				},
				function() {
					resultDeferred.reject();
				}
			);

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

		function redirectToExternalHelp()
		{
			window.location = app.isPortal && app.cfg.HELP_URL_PORTAL ? app.cfg.HELP_URL_PORTAL : app.cfg.HELP_URL;
		}

		function initializeUI()
		{
			//app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step3);

			// Initialize header
			// Title/subtitle are the first valid string from: index.html config object, web application data, web map data
			// TODO
			var title = app.indexCfg.title || app.data.getWebAppData().getTitle() /*|| response.itemInfo.item.title*/;
			var subtitle = app.indexCfg.subtitle || app.data.getWebAppData().getSubtitle() /*|| response.itemInfo.item.snippet*/;

			var appColors = app.data.getWebAppData().getColors();

			if ( app.ui.headerDesktop ) {
				app.ui.headerDesktop.init(
					! app.isInBuilder && (app.cfg.EMBED || _urlParams.embed || _urlParams.embed === ''),
					title,
					subtitle,
					getHeaderUserCfg(),
					appColors[0],
					hasSwitchBuilderButton
				);
			}

			if ( app.appCfg.useAppTitleAsPageTitle )
				document.title = title ? $('<div>' + title + '</div>').text() : app.cfg.TPL_NAME;
		}

		function appInitComplete()
		{
			console.log("common.core.Core - initApp");

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

			// Load My Stories in builder or viewer if user is owning the story

			var isPreview = (_urlParams.preview === 'true' || _urlParams.preview === '');
			var isAutoplay = (_urlParams.autoplay === 'true' || _urlParams.autoplay === '');
			if ( (app.isInBuilder || app.userCanEdit) && has("ie") != 9 && !isPreview && !isAutoplay ) {
				if ( has("ff") ) {
					$(".builderShare #my-stories-frame").remove();
				}

				if ( has("ff") || ! app.isInBuilder ) {
					$("body").append('<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>');
				}

				MyStoriesWrapper.loadMyStories();
			}

			// Update URL for hosted apps so that when shared it will have the proper metadata on social medias
			if ( document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/)
					&& document.location.search.match(/^\?appid=/)
					&& (! has('ie') || has('ie') >= 10) ) {
				History.replaceState({}, "", "index.html" + document.location.search + document.location.hash);
			}

			var urlParams = document.location.search;
			if (urlParams) {
				urlParams = urlParams.replace('&preview', '');

				if (urlParams != document.location.search) {
					window.history.replaceState({}, '', 'index.html' + urlParams + document.location.hash);
				}
			}
		}

		function displayApp()
		{
			app.isLoading = false;
			$("#loadingIndicator, #loadingMessage").addClass("fadeOut").fadeOut(400);
			$("#loadingOverlay").fadeOut(800);
		}

		function initError(error, message, noDisplay)
		{
			var errorMsg = i18n.viewer.errors[error];

			cleanLoadingTimeout();
			$("#loadingIndicator").hide();

			errorMsg = errorMsg.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME);

			if ( error == "notAuthorized" && app.indexCfg.oAuthAppId ) {
				errorMsg += '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' + i18n.viewer.errors.signOut + '</button></div>';
			}

			if ( error == "appLoadingFail" ) {
				$("#loadingMessage").html(
					'<div id="loadingRetry">'
					+ ' <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">'
					+    i18n.viewer.loading.failButton
					+ ' </button>'
					+ '</div>'
				).hide().fadeIn(1200, function(){ $("#loadingMessage").addClass("loaded"); });
			}
			else
				$("#loadingMessage").hide();

			if ( has("ie") == 8 ) {
				$("#fatalError-icon").css({
					filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='_resources/icons/warning-icon.png', sizingMethod='scale')",
					backgroundPosition: "2px 3px",
					width: 78
				});
				$("#fatalError-msg").css({
					paddingLeft: 5
				});
			}

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
				widthSideMap = 0,
				forceDesktop = _urlParams.forceDesktop !== undefined || app.indexCfg.forceDesktop,
				forceMobile = _urlParams.forceMobile !== undefined || app.indexCfg.forceMobile;
				//forceEmbed = _urlParams.forceEmbed !== undefined || app.indexCfg.forceEmbed;

			var isMobileView = widthViewport <= 768 || forceMobile,
				isOnMobileMapView = $(".centerLink").length ? $(".centerLink").hasClass("current") : true;

			if ( forceDesktop )
				isMobileView = false;

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
				|| isProd() && app.userCanEdit)
				&& (_urlParams.autoplay === undefined || _urlParams.autoplay == 'false')
				&& (_urlParams.preview === undefined || _urlParams.preview == 'false');
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

			// If safe hide default message and setup a more friendly text
			if ( IdentityManager._arcgisUrl ) {
				$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none");
				$(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>" + i18n.viewer.signin.explainViewer.replace("%PORTAL_LINK%", "<a href='http://" + IdentityManager._arcgisUrl + "' title='" + IdentityManager._arcgisUrl + "' target='_blank'>" + IdentityManager._arcgisUrl + "</a>") + "</div>");
			}
		}

		function styleIdentityManagerForBuilder()
		{
			// Setup a more friendly text
			if ( IdentityManager._arcgisUrl )
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

			//app.ui.loadingIndicator.start();

			//app.ui.loadingIndicator.setMessage(i18n.viewer.loading.step2);
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
			//app.ui.loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder);
			//setTimeout(function(){
				window.location = document.location.href + "&fromGallery";
			//}, 1200);
		}

		//
		// App init
		//

		function startLoadingTimeout()
		{
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
				// Set a flag only if the dialog isn't showned now
				if( ! IdentityManager._busy )
					IdentityManager.loadingTimeoutAlreadyFired = true;
				return;
			}

			//$("#loadingIndicator").fadeOut();
			$("#loadingMessage").html(
				'<div class="mainMessage">'
				+  i18n.viewer.loading.long
				+  '<br />'
				+  i18n.viewer.loading.long2
				+ '</div>'
			).fadeIn("slow", function(){ $("#loadingMessage").addClass("loaded"); });

			//app.map && app.map.destroy();
		}

		function initLocalization()
		{
			document.documentElement.lang = kernel.locale;
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

			// Use geocode service from the portal if none declared in config
			var existingGeocoders = app.data.getWebAppData().getAppGeocoders();
			var existingGeocoderUrls = existingGeocoders ? existingGeocoders.map(function(g) {
				return g.url;
			}) : [];
			var additionalGeocoders = [];
			if (app.cfg.HELPER_SERVICES.geocode && app.cfg.HELPER_SERVICES.geocode.length) {
				$.each(app.portal.helperServices.geocode, function (index, geocoder) {
					if (geocoder.url && existingGeocoderUrls.indexOf(geocoder.url) < 0) {
						additionalGeocoders.push(geocoder);
					}
				});
				app.cfg.HELPER_SERVICES.geocode = additionalGeocoders;
			}

			// Use geometry service from the portal if none declared in config
			var geometryServiceURL;
			if (app.cfg.HELPER_SERVICES.geometry && app.cfg.HELPER_SERVICES.geometry.url) {
				geometryServiceURL = app.cfg.HELPER_SERVICES.geometry.url;
			}
			else if (app.portal.helperServices.geometry && app.portal.helperServices.geometry.url) {
				geometryServiceURL = app.portal.helperServices.geometry.url;
			}
			esriConfig.defaults.geometryService = new GeometryService(geometryServiceURL);

			// Use bing key from the portal if none declared in config
			if( ! app.cfg.BING_MAPS_KEY && app.portal.bingKey ) {
				app.cfg.BING_MAPS_KEY = app.portal.bingKey;
			}

			// Disable feature service creation as Portal for ArcGIS 10.2 doesn't support that yet
			if( app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE )
				app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = false;

			app.isPortal = !! app.portal.isPortal;

			// Help URL on Portal for ArcGIS
			if ( app.isPortal && app.portal.helpBase && app.portal.portalHostname ) {
				// app.cfg.HELP_URL_PORTAL contains the page in the help doc
				// app.portal.helpBase contains the path to the home of help
				// app.portal.helpBase should always be relative to the hostname and include the optional portal instance name
				// app.portal.portalHostname also include the portal instance name so we remove it first

				// Skip if the URL is already a full path
				if ( ! app.cfg.HELP_URL_PORTAL.match('^//') ) {
					var portalHost = app.portal.portalHostname.split('/')[0];
					app.cfg.HELP_URL_PORTAL = '//' + portalHost + app.portal.helpBase + app.cfg.HELP_URL_PORTAL;
				}
			}
		}

		//
		// Builder init
		//

		function initPopupPrepare()
		{
			var errMsg = "notConfiguredMobile";

			cleanLoadingTimeout();
			app.isInitializing = true;
			app.initScreenIsOpen = true;

			// Touch device
			if ( has("touch") && CommonHelper.isMobile() ) {
				// in portrait mode with enough room in landscape for builder
				if ( window.innerHeight > window.innerWidth ) {
					if ( window.innerHeight > 768 ) {
						errMsg = "notConfiguredMobile2";
					}
				}
				// in landscape mode with enough room to fit builder but prepare in case of orientation change
				else {
					if ( window.innerWidth > 768 ) {
						errMsg = "notConfiguredMobile2";
					}
				}
			}

			initError(errMsg, null, true);
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
