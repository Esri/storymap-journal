define([
        "./MapViewerWrapperUtils"
    ],
	function(
		MapViewerWrapperUtils
	) {
		var CONFIG = {
			mapViewerOpt: 'embedded=1&hide=bm,share,save,analysis,directions,measure'
		};

		//
		// To be able to use MV in development mode you need to be on a while listed domain (the Portal for ArcGIS domain, *.arcgis.com or *.esri.com)
		// Then paste a token that you get from ArcGIS Online or Portal for ArcGIS by executing
		//     JSON.parse(dojo.cookie("esri_auth")).token
		// in a developer console on any page or apps running in Online or Portal (IM short lived token don't work)
		//

		var DEV_TOKEN = '';

		/*
		 * Params must define the following Map Viewer callback
		 * - onLoad
		 * - onError
		 * - onSaveSucceed
		 * - onSaveError
		 * And a reference to the frame window object
		 * - frameWindow
		 *
		 * use load() to start the process
		 *  - newMap: boolean
		 *  - id: map id when not creating a new map
		 */
		return function MapViewerWrapper(params)
		{
			var _this = this,
				_viewerIsLoaded = false,
				_viewerMapIsLoaded = false,
				_mapViewerLoadingPolling = null,
				_mapViewerChangesCheck = null,
				_mapEditable = false;

			window.addEventListener("message", receiveMessage, false);

			this.load = function(newMap, id)
			{
				var url = "";

				if ( ! newMap && ! id ) {
					throw "INVALID CALL TO MapViewerWrapper.load";
				}

				if ( ! params || ! params.onSaveSucceed || ! params.onSaveError
						|| ! params.onLoad || ! params.onError || ! params.onEnableSave
						|| ! params.frameWindow
				) {
					throw "INVALID CALL TO MapViewerWrapper.load";
				}

				url += MapViewerWrapperUtils.getMapViewerURL();

				if ( newMap ) {
					url += '?' + CONFIG.mapViewerOpt;
				}
				else {
					url += '?webmap=' + id;
					url += '&' + CONFIG.mapViewerOpt;
				}

				// Map Viewer is using the locale declared in user profile whereas the app are using the one declared by browser
				// Need to force the locale to make sure the experience between builder and MV is consistent
				url += '&locale=' + dojo.locale;

				// If the app is on a white listed domain or same domain than MV, the MV need the esri_auth token
				// In a development environment, that cookie is not likely to not be present
				// So developer need to provide token in DEV_TOKEN properties above
				if ( MapViewerWrapperUtils.isWhiteListedDomain()
						&& ! MapViewerWrapperUtils.viewerIsSameDomain()
						&& dojo.cookie("esri_auth")
				) {
					url += '#' + JSON.parse(dojo.cookie("esri_auth")).token;
				}
				else if ( MapViewerWrapperUtils.isWhiteListedDomain()
						&& ! MapViewerWrapperUtils.viewerIsSameDomain()
						&& DEV_TOKEN
				) {
					url += '#' + DEV_TOKEN;
				}
				// In development mode on non authorized domain
				else if ( ! MapViewerWrapperUtils.isWhiteListedDomain() && ! app.isProduction ) {
					throw "DEV_FAIL";
				}
				// In development mode on authorized domain but no token specified
				else if ( MapViewerWrapperUtils.isWhiteListedDomain() && ! app.isProduction && ! DEV_TOKEN ) {
					throw "DEV_TOKEN";
				}

				_viewerIsLoaded = false;
				_viewerMapIsLoaded = false;
				_mapEditable = false;
				_mapViewerLoadingPolling = setInterval(mapViewerLoadingPolling, 500);

				return url;
			};

			this.cancelLoading = function()
			{
				clearInterval(_mapViewerLoadingPolling);
				stopUnsavedChangesCheck();
			};

			this.send = function(json)
			{
				console.log("MV sending", json);
				try {
					params.frameWindow.postMessage(JSON.stringify(json), MapViewerWrapperUtils.getPortalURL());
				} catch ( error ) {
					// This doesn't seems to be called as the error would happen in the frame
					params.onError(error );
				}
			};

			this.close = function()
			{
				if ( _mapViewerLoadingPolling ) {
					clearInterval(_mapViewerLoadingPolling);
				}
				stopUnsavedChangesCheck();
			};

			function mapViewerLoadingPolling()
			{
				if ( ! _viewerMapIsLoaded ) {
					// when saving a map at viewer startup make sure this is called quickly to pass the caller source to the viewer,
					// so the viewer can send a message once the map finished loading or an error occurred
					// otherwise there will be no feedback after the save operation
					_this.send({
						type: "isLoaded"
					});
				}
				else {
					clearInterval(_mapViewerLoadingPolling);
				}
			}

			function startUnsavedChangesCheck()
			{
				if ( ! _mapViewerChangesCheck ) {
					_mapViewerChangesCheck = setInterval(unsavedChangesCheck, 1000);
				}
			}

			function stopUnsavedChangesCheck()
			{
				if ( _mapViewerChangesCheck ) {
					clearInterval(_mapViewerChangesCheck);
					_mapViewerChangesCheck = null;
				}
			}

			function unsavedChangesCheck()
			{
				_this.send({
					type: "hasUnsavedChanges"
				});
			}

			function receiveMessage(event)
			{
				if ( event.origin !== MapViewerWrapperUtils.getPortalDomain() ) {
					console.log("MV ignored a message from another domain:", event.origin, event.data);
					return;
				}

				var json = JSON.parse(event.data);
				console.log("MV received", json);

				switch (json.type) {
					case "mapSaved":
						params.onSaveSucceed(json.webmapId, json.title);
						break;
					case "mapSaveError":
						params.onSaveError(json);
						break;
					case "webmapId":
						// TODO
						// json.webmapId
						startUnsavedChangesCheck();

						setTimeout(function(){
							_this.send({
								type: "isWebmapEditable"
							});
						}, 1000);

						break;
					case "webmapEditable":
						// If the map is not editable, enable the save button so it can be copied
						if ( ! json.value ) {
							params.onEnableSave();
						}
						break;
					case "unsavedChanges":
						if ( json.value ) {
							params.onEnableSave();
						}

						break;
					case "loaded":
						_viewerMapIsLoaded = json.value;

						if (_viewerMapIsLoaded) {
							console.log("MV loaded - map too");

							if ( ! _viewerIsLoaded ) {
								params.onLoad();

								_this.send({
									type: "getWebmapId"
								});

								_viewerIsLoaded = true;
							}
							else {
								setTimeout(function(){
									_this.send({
										type: "isWebmapEditable"
									});
								}, 1000);
							}
						}
						else {
							console.log("MV loaded - map not yet");

							// This message is fired after MV is loaded until all layers are loaded
							// So only catch the event once
							if ( ! _viewerIsLoaded ) {
								// Shortly after MV is loaded, before all layer are loaded -> display the MV
								// This prevent waiting from broken layer to timeout before displaying it
								setTimeout(params.onLoad, 500);

								_this.send({
									type: "getWebmapId"
								});
							}

							_viewerIsLoaded = true;
						}
						break;
					case "newViewerBaseUrl":
						// TODO
						//json.baseUrl;
						break;
					case "message":
						// If the app and viewer are not on the same domain, it will fail here
						params.onError(json.message);
						break;
				}
			}
		};
	}
);
