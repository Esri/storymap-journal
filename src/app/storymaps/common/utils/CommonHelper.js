define(["dojo/cookie",
		"dojo/has",
		"dojo/_base/lang",
		"dojo/_base/Color",
		"dojo/Deferred",
		"dojo/DeferredList",
		"./SocialSharing",
		"esri/request",
		"esri/dijit/Search",
        "esri/tasks/locator",
		"esri/urlUtils",
		"esri/arcgis/utils",
		"esri/geometry/webMercatorUtils",
		"esri/geometry/Point",
		"esri/geometry/Extent",
		"esri/geometry/Polygon",
		"esri/layers/FeatureLayer",
		"esri/layers/ArcGISDynamicMapServiceLayer",
		"esri/layers/ArcGISTiledMapServiceLayer",
		"esri/layers/OpenStreetMapLayer",
		"dojo/i18n!commonResources/nls/webmap.js?v=" + app.version
		],
	function(
		cookie,
		has,
		lang,
		Color,
		Deferred,
		DeferredList,
		SocialSharing,
		esriRequest,
		Search,
		Locator,
		urlUtils,
		arcgisUtils,
		webMercatorUtils,
		Point,
		Extent,
		Polygon,
		FeatureLayer,
		ArcGISDynamicMapServiceLayer,
		ArcGISTiledMapServiceLayer,
		OpenStreetMapLayer,
		i18n)
	{
		return {
			isMobile: function()
			{
				return navigator.userAgent.match(/iPhone|iPad|iPod/i)
						|| navigator.userAgent.match(/Android/i)
						|| navigator.userAgent.match(/BlackBerry/i)
						|| navigator.userAgent.match(/IEMobile/i);
			},
			switchToBuilder: function()
			{
				if( document.location.search.match(/appid/) )
					document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search, true) + "&edit" + document.location.hash;
				else if ( document.location.search.slice(-1) == '?' )
					document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + "?edit"  + document.location.hash;
				else
					document.location = SocialSharing.cleanURL(document.location.protocol + '//' + document.location.host + document.location.pathname, true) + "?edit"  + document.location.hash;
			},
			isArcGISHosted: function()
			{
				// App is hosted if the URL contains /apps/XYZ/ or /home/XYZ/ or /arcgis/apps/
				return (/(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/).test(document.location.pathname);
			},
			browserSupportHistory: function()
			{
				return !!(window.history && history.pushState);
			},
			// Get URL parameters IE9 history not supported friendly
			getUrlParams: function()
			{
				var urlParams = urlUtils.urlToObject(document.location.search).query;
				if ( urlParams )
					return urlParams;

				if( ! this.browserSupportHistory() && ! urlParams )
					return urlUtils.urlToObject(document.location.hash).query || {};

				return {};
			},
			getWebmapID: function(isProd)
			{
				var urlParams = this.getUrlParams();

				if( app.indexCfg && app.indexCfg.webmap )
					return app.indexCfg.webmap;

				if ( this.isArcGISHosted() || ! isProd )
					return urlParams.webmap;

				// Only authorize URL params outside of arcgis.com if a webmap owner is specified
				if( app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0] )
					return urlParams.webmap;
			},
			getAppID: function(isProd)
			{
				var urlParams = this.getUrlParams();

				if( app.indexCfg && app.indexCfg.appid )
					return app.indexCfg.appid;

				if ( this.isArcGISHosted() || ! isProd )
					return urlParams.appid;

				// Only authorize URL params outside of arcgis.com if a webmap/app owner is specified
				if( app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0] )
					return urlParams.appid;
			},
			getGraphicsLayerByName: function(map, name)
			{
				var layer;
				for (var i = 0; i < map.graphicsLayerIds.length; i++) {
					layer = map.getLayer(map.graphicsLayerIds[i]);
					if (layer.name == name)
						return layer;
				}
				return null;
			},
			getWebMapExtentFromItem: function(item)
			{
				if( ! item.extent || item.extent.length != 2 )
					return null;

				var bottomLeft = webMercatorUtils.geographicToWebMercator(
					new Point(
						item.extent[0][0],
						item.extent[0][1]
					)
				);

				var topRight = webMercatorUtils.geographicToWebMercator(
					new Point(
						item.extent[1][0],
						item.extent[1][1]
					)
				);

				return new Extent({
					xmax: topRight.x,
					xmin: bottomLeft.x,
					ymax: topRight.y,
					ymin: bottomLeft.y,
					spatialReference: {
						wkid: 102100
					}
				});
			},
			serializeExtentToItem: function(extent)
			{
				if( ! extent || ! extent.spatialReference )
					return null;

				var extentWgs = extent.spatialReference.wkid == 4326 ? extent : webMercatorUtils.webMercatorToGeographic(extent);

				return [
					[Math.round(extentWgs.xmin*10000)/10000, Math.round(extentWgs.ymin*10000)/10000],
					[Math.round(extentWgs.xmax*10000)/10000, Math.round(extentWgs.ymax*10000)/10000]
				];
			},
			serializedExtentEquals: function(extent1, extent2)
			{
				return extent1
						&& extent2
						&& extent1.length == extent2.length
						&& extent1.length == 2
						&& extent1[0][0] == extent2[0][0]
						&& extent1[0][1] == extent2[0][1]
						&& extent1[1][0] == extent2[1][0]
						&& extent1[1][1] == extent2[1][1];
			},
			/*
			 * Clone Bing/OSM/Tile/Dynamic Map layer
			 * Default to light grey canvas if bing or not tile/dynamic
			 */
			cloneLayer: function(layer)
			{
				if( layer.url && layer.url.match(/virtualearth\./) )
					return new ArcGISTiledMapServiceLayer("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer");
				else if(layer instanceof ArcGISTiledMapServiceLayer)
					return new ArcGISTiledMapServiceLayer(layer.url);
				else if (layer instanceof ArcGISDynamicMapServiceLayer)
					return new ArcGISDynamicMapServiceLayer(layer.url);
				else if (layer.id == "OpenStreetMap")
					return new OpenStreetMapLayer();

				return new ArcGISTiledMapServiceLayer("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer");
			},
			extentToPolygon: function(extent)
			{
				var p = new Polygon(extent.spatialReference);
				p.addRing(
					[
						[extent.xmin, extent.ymin],
						[extent.xmin, extent.ymax],
						[extent.xmax, extent.ymax],
						[extent.xmax, extent.ymin],
						[extent.xmin, extent.ymin]
					]
				);
				return p;
			},
			getFirstLevelWhereExtentFit: function(extent, map)
			{
				var mapWidth = map.width;
				var mapHeight = map.height;
				var lods = map._params.lods;

				if ( ! lods )
					return -1;

				for (var l = lods.length - 1; l >= 0; l--) {
					if( mapWidth * map._params.lods[l].resolution > extent.getWidth() && mapHeight * map._params.lods[l].resolution > extent.getHeight() )
						return l;
				}

				return -1;
			},
			getPortalUser: function()
			{
				var esriCookie = this.getEsriCookie();
				if (!esriCookie) {
					return;
				}

				// Cookie has to be set on the same organization
				if( esriCookie.urlKey
						&& esriCookie.customBaseUrl
						&& (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
					return;

				// if there's no esriCookie, we've already returned
				return esriCookie.email;
			},
			getPortalRole: function()
			{
				var esriCookie = this.getEsriCookie();
				if (!esriCookie) {
					return;
				}

				// If the cookie is not set on the same organization
				if (esriCookie.urlKey
						&& esriCookie.customBaseUrl
						&& (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
					return;

				// if there's no esriCookie, we've already returned
				return esriCookie.role;
			},
			getEsriCookie: function() {
				var esriCookie = cookie('esri_auth');

				if (!esriCookie)
					return;

				return JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));
			},
			getAppViewModeURL: function()
			{
				return document.location.protocol
					+ '//' + document.location.host
					+ document.location.pathname
					+ '?appid=' + app.data.getWebAppItem().id;
			},
			getWebmapViewerLinkFromSharingURL: function(sharingUrl)
			{
				var portalUrl = sharingUrl.split('/sharing/')[0];
				return portalUrl + '/home/webmap/viewer.html';
			},
			getPortalURL: function()
			{
				return arcgisUtils.arcgisUrl.split('/sharing/')[0];
			},
			getSpecificPortalURL: function() {
				if (app.portal.urlKey && app.portal.customBaseUrl) {
					return '//' + app.portal.urlKey + '.' + app.portal.customBaseUrl;
				}
				return this.getPortalURL();
			},
			getItemURL: function(id)
			{
				return this.getPortalURL() + '/home/item.html?id=' + id;
			},
			getItemId: function() {
				return app.data && app.data.getWebAppItem && app.data.getWebAppItem().id;
			},
			getMyContentURL: function()
			{
				return this.getPortalURL() + '/home/content.html';
			},
			getMyStoriesURL: function()
			{
				if ( app.isPortal ){
					return this.getPortalURL() + '/apps/MyStories/';
				}
				else {
					return '//storymaps.arcgis.com/en/my-stories/';
				}
			},
			browserSupportAttachementUsingFileReader: function()
			{
				return !! window.FileReader
						&& !! window.FormData
						&& !! this.browserSupportCanvas()
						&& !! window.Blob
						/*&& has("ie") != 10*/; // IE10 unexpectedly fail to do the addAttachment request (with CORS or proxy)
			},
			browserSupportCanvas: function()
			{
				var elem = document.createElement('canvas');
				return !!(elem.getContext && elem.getContext('2d'));
			},
			browserSupportFileReaderBinaryString: function()
			{
				if( ! window.FileReader )
					return false;

				var f = new window.FileReader();
				return !! ('readAsArrayBuffer' in f);
			},
			getBinaryStringFromArrayBuffer: function(file)
			{
				var arr = new Uint8Array(file);
				var str = '';
				for (var i = 0; i < arr.length; i++)
					str += String.fromCharCode(arr[i]);
				return str;
			},
			addCSSRule: function(style, styleNodeIdAttr, targetIframeNode)
			{
				var target = "head";

				if( has("ie") <= 8 )
					return;

				if ( targetIframeNode )
					target = targetIframeNode.contents().find("head");

				if ( styleNodeIdAttr ) {
					var styleNode = $(target).find("#" + styleNodeIdAttr).eq(0);
					if ( styleNode.length ) {
						styleNode.html(style);
						return;
					}
				}

				$("<style>")
					.prop("type", "text/css")
					.attr("id", styleNodeIdAttr)
					.html(style)
					.appendTo(target);
			},
			hex2rgba: function(x, a)
			{
				if( ! x || x === "" )
					return "";

				var r = x.replace('#','').match(/../g),g=[],i;
				for(i in r){
					g.push(parseInt(r[i],16));
				}
				g.push(a);
				return 'rgba('+g.join()+')';
			},
			prependURLHTTP: function(url)
			{
				if ( ! url || url === "" || url.match(/^mailto:/) )
					return url;

				if ( ! /^(https?:\/\/)|^(\/\/)/i.test(url) )
					return 'http://' + url;

				return url;
			},
			convertURLHTTPS: function(url)
			{
				if ( ! url || url === "" || url.match(/^mailto:/) )
					return url;

				url = url.replace(/http:\/\//, 'https://');
				url = url.replace(/^\/\//, 'https://');

				if ( ! /^(https:\/\/)/i.test(url) ) {
					return 'https://' + url;
				}

				return url;
			},
			convertURLHTTP: function(url)
			{
				if ( ! url || url === "" || url.match(/^mailto:/) )
					return url;

				url = url.replace(/https:\/\//, 'http://');
				url = url.replace(/^\/\//, 'http://');

				if ( ! /^(http:\/\/)/i.test(url) ) {
					return 'http://' + url;
				}

				return url;
			},
			checkImageURL: function(url)
			{
				return url && url.match(/((\.png)|(\.jp(e)?g))$/i);
			},
			createGeocoder: function(p)
			{
				var resultDeferred = new Deferred();

				if ( ! p || ! p.map || ! p.domNode ) {
					resultDeferred.resolve();
					return resultDeferred;
				}

				if ( ! app.cfg.HELPER_SERVICES.geocode ) {
					resultDeferred.resolve();
					return resultDeferred;
				}

				// Query each geocode service to configure the search widget
				var requests = [];
				var layerSources = [];
				var allSources = [];
				var self = this;

				// these are the layer sources
				if (p.searchOptions && p.searchOptions.layers && p.searchOptions.layers.length && p.searchOptions.enabled) {
					layerSources = this.getLayerSources(p.searchOptions.layers, p.map, p.searchOptions.hintText);
				}

				// these are the stored app geocoders
				var appDataSources = self.processAppDataGeocoders(p.placeHolder);

				// start with layerSources if they exist.
				if (layerSources.length) {
					allSources = layerSources;
				}

				// next, if address search is enabled on the webmap, add appDataSources then app.cfg sources
				if (!p.searchOptions || (p.searchOptions && !p.searchOptions.disablePlaceFinder)) {
					allSources = allSources.concat(appDataSources || []);
					$.each(app.cfg.HELPER_SERVICES.geocode, function(index, geocoder){
						requests.push(self.getGeocoderRequest(geocoder));
					});
				}

				// if address search is disabled, and there's no layer search, but the storymap author
				// has asked for a geocoder here, try and find one for them...
				if (p.searchOptions && p.searchOptions.disablePlaceFinder && !allSources.length) {
					// first try an app data source (a stored geocoder)
					if (appDataSources && appDataSources.length) {
						allSources.push(appDataSources[0]);
					} else if (app.cfg.HELPER_SERVICES.geocode && app.cfg.HELPER_SERVICES.geocode.length) {
						// then try finding a legit geocoder in app.cfg
						var found = false;
						$.each(app.cfg.HELPER_SERVICES.geocode, function(index, geocoder){
							if (!found && geocoder.url) {
								requests.push(self.getGeocoderRequest(geocoder));
								found = true;
							}
						});
					} else {
						// if all else fails, nullify allSources, and the world placefinder will get picked up.
						allSources = null;
					}
				}

				var searchOptions = {
					map: p.map,
					allPlaceholder: p.placeHolder,
					enableButtonMode: p.enableButtonMode
				};

				if (allSources && allSources.length) {
					this.checkForSourceNameDuplicates(allSources);
					searchOptions.sources = allSources;
				} else {
					searchOptions.placeholder = p.placeHolder || i18n.commonWebmap.selector.placeholderGenericGeocoder;
				}

				var search = new Search(searchOptions, p.domNode);

				if (requests.length) {
					var requestList = new DeferredList(requests);
					requestList.then(function(responses) {
						var appCfgSources = self.processGeocoderRequestReturn(responses, p.placeHolder);

						var concatSources = search.get('sources').concat(appCfgSources || []);
						if (concatSources.length) {
							self.setGeocodeSources(search, concatSources);
							resultDeferred.resolve(search);
						}
					});
				} else {
					var searchSources = search.get('sources');
					if (searchSources.length) {
						self.setGeocodeSources(search, searchSources);
						resultDeferred.resolve(search);
					}
				}

				return resultDeferred;
			},

			getGeocoderRequest: function(geocoder) {
				var requestOptions = {
					url: geocoder.url,
					content: { f: 'json' },
					handleAs: 'json'
				};
				if (!app.isInBuilder && !app.portal.user) {
					requestOptions.disableIdentityLookup = true;
				} else {
					requestOptions.callbackParamName = 'callback';
				}
				return esriRequest(requestOptions);
			},

			getLayerSources: function(layers, map, hintText) {
				var self = this;
				return $.map(layers, function(lyrInfo) {
					var lyr = map.getLayer(lyrInfo.id);
					var sourceObj = {
						featureLayer: lyr,
						searchFields: [lyrInfo.field.name],
						displayField: lyrInfo.field.name,
						exactMatch: lyrInfo.field.exactMatch,
						outFields: ['*'],
						maxResults: 6,
						name: self.findGeocoderName(lyr, lyrInfo),
						placeholder: hintText
					};
					if (lyrInfo.subLayer || lyrInfo.subLayer === 0) {
						var actualSubLayerIndex = lyrInfo.subLayer;
						var w; // walker
						if ((w = lyr.dynamicLayerInfos) && (w = w[lyrInfo.subLayer]) && (w = w.source)) {
							actualSubLayerIndex = w.mapLayerId;
						}
						sourceObj.featureLayer = new FeatureLayer(lyr.url + '/' + lyrInfo.subLayer);
					}
					return sourceObj;
				});
			},

			processGeocoderRequestReturn: function(responses, fallbackPlaceholder) {
				var sources = [];
				var self = this;
				$.each(responses, function(index, response){
					if (!response[0] || !response[1] || !response[1].singleLineAddressField) {
						return;
					}
					var targetGeocoder = app.cfg.HELPER_SERVICES.geocode[index];
					var newLocator = new Locator(targetGeocoder.url);
					var newSource = {
						singleLineFieldName: response[1].singleLineAddressField.name,
						name: targetGeocoder.name ? targetGeocoder.name : response[1].name,
						placeholder: targetGeocoder.placeholder || fallbackPlaceholder || i18n.commonWebmap.selector.placeholderGenericGeocoder,
						locator: newLocator
					};
					newSource.name = newSource.name || self.findGeocoderName({url: newLocator.url});
					if (self.isEsriGeocoder({url: targetGeocoder.url})) {
						newSource.placeholder = i18n.commonWebmap.selector.placeholderGenericGeocoder;
					}

					// if we don't do this, a call goes out to a potentially non-existent /suggest endpoint and returns an invalid url error on
					// just about every keystroke.
					if (!response[1].capabilities || response[1].capabilities.toLowerCase().indexOf('suggest') < 0) {
						newSource.enableSuggestions = false;
					}

					sources.push(newSource);
				});
				return sources;
			},

			processAppDataGeocoders: function(fallbackPlaceholder) {
				if (!app.data.getWebAppData().getAppGeocoders) {
					return;
				}
				// copy the array so we're not modifying it.
				var appGeocoders = app.data.getWebAppData().getAppGeocoders();
				if (!appGeocoders || !appGeocoders.length) {
					return;
				}
				appGeocoders = appGeocoders.slice();
				var sources = [];
				var self = this;
				$.each(appGeocoders, function(index, geocoder) {
					if (geocoder.url) {
						var optionsCopy = lang.mixin({}, geocoder);
						optionsCopy.locator = new Locator(optionsCopy.url);
						if (self.isEsriGeocoder({url: optionsCopy.url})) {
							optionsCopy.placeholder = i18n.commonWebmap.selector.placeholderGenericGeocoder;
							optionsCopy.name = i18n.commonWebmap.selector.lblEsriGeocoder;
						} else {
							optionsCopy.placeholder = optionsCopy.placeholder || fallbackPlaceholder;
							optionsCopy.name = optionsCopy.name || self.findGeocoderName({url: optionsCopy.url});
						}
						sources.push(optionsCopy);
					}
				});
				return sources;

			},

			setGeocodeSources: function(search, sources) {
				this.checkForSourceNameDuplicates(sources);
				search.set('sources', sources);
				search.set('activeSourceIndex', 0);
				search.startup();
			},

			checkForSourceNameDuplicates: function(sources) {
				var existingSourceNames = [];
				var self = this;
				$.each(sources, function(index, src) {
					if (existingSourceNames.indexOf(src.name) >= 0) {
						src.name = self.getAdjustedSourceName(existingSourceNames, src.name);
					}
					existingSourceNames.push(src.name);
				});
			},

			getAdjustedSourceName: function(namesList, name) {
				var num = 2;
				var newName = name + ' - ' + num;
				while (namesList.indexOf(newName) >= 0) {
					num++;
					newName = name + ' - ' + num;
				}
				return newName;
			},

			isEsriGeocoder: function(lyrOrObj) {
				if (!lyrOrObj.url) {
					console.warn('no url on locator', lyrOrObj);
					return false;
				}
				return lyrOrObj.url.match(/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g);
			},

			// if this returns undefined, esri nls will label it "Untitled Source".
			findGeocoderName: function(lyr, lyrInfo) {
				var geocoderName = lyrInfo ? (lyrInfo.name || lyrInfo.title) : '';
				if (!geocoderName) {
					var opLyrs = app.mapItem ? app.mapItem.itemData.operationalLayers : [];
					opLyrs.some(function(opLyrInfo) {
						if (opLyrInfo.id === lyr.id) {
							geocoderName = opLyrInfo.title;
							return true;
						}
						return false;
					});
				}
				geocoderName = geocoderName || lyr.name || lyr.title;
				if (!geocoderName) {
					if (this.isEsriGeocoder(lyr)) {
						geocoderName = i18n.commonWebmap.selector.lblEsriGeocoder;
					} else {
						if (typeof lyr.url !== "string" || !lyr.url.split) {
							return; // go with esri nls "Untitled Source"
						} else {
							var parts = lyr.url.split('/');
							var serviceName = parts[parts.length - 2];
							if (serviceName) {
								geocoderName = serviceName;
							}
							return; // go with esri nls "Untitled Source"
						}
					}
				}
				if (lyrInfo && (lyrInfo.subLayer || lyrInfo.subLayer === 0)) {
					var targetLayerInfos = lyr.dynamicLayerInfos || lyr.layerInfos;
					var sublayerInfo = targetLayerInfos[lyrInfo.subLayer];
					if (sublayerInfo && sublayerInfo.name) {
						geocoderName += ' - ' + sublayerInfo.name;
					}
				}
				return geocoderName.replace(/_/g, ' ');
			},

			colorsAreSimilar: function(color1, color2, looseMatching) {
				var lum1 = this.getLuminance(color1);
				var lum2 = this.getLuminance(color2);
				var ratio = (lum1 + 0.05) / (lum2 + 0.05);

				if (lum2 > lum1) {
					ratio = 1 / ratio;
				}

				if (ratio >= 2.85 || (looseMatching && ratio >= 2.2)) {
					return false;
				}
				return true;

			},

			// https://github.com/LeaVerou/contrast-ratio
			getLuminance: function(color) {
				var djColor = new Color(color);
				var mapped = djColor.toRgb().map(function(num) {
					num /= 255;
					if (num < 0.03928) {
						return num / 12.92;
					}
					return Math.pow((num + 0.055) / 1.055, 2.4);
				});
				return 0.2126 * mapped[0] + 0.7152 * mapped[1] + 0.0722 * mapped[2];
			},

			getRgba: function(color, a) {
				var djColor = new Color(color);
				var rgb = djColor.toRgb();
				return 'rgba(' + rgb.join(', ') + ', ' + a + ')';
			},

			// Returns a function, that, as long as it continues to be invoked, will not
			// be triggered. The function will be called after it stops being called for
			// N milliseconds. If `immediate` is passed, trigger the function on the
			// leading edge, instead of the trailing.
			// http://davidwalsh.name/javascript-debounce-function
			debounce: function(func, wait, immediate)
			{
				var timeout;
				return function() {
					var context = this,
						args = arguments;

					clearTimeout(timeout);

					timeout = setTimeout(function() {
						timeout = null;
						if (!immediate)
							func.apply(context, args);
					}, wait);

					if (immediate && !timeout)
						func.apply(context, args);
				};
			},
			// TODO this function isn't reliable
			/* jshint -W059 */
			findDifferences: function(objectA, objectB) {
				var propertyChanges = [];
				var objectGraphPath = ["this"];
				(function(a, b) {
					if(a.constructor == Array) {
						if( ! b || b.constructor != Array || b.length != a.length ) {
							propertyChanges.push({ "Property": objectGraphPath.join(""), "ObjectA": a, "ObjectB": b });
						}
						else {
							// BIG assumptions here: That both arrays are same length, that
							// the members of those arrays are _essentially_ the same, and
							// that those array members are in the same order...
							for(var i = 0; i < a.length; i++) {
								objectGraphPath.push("[" + i.toString() + "]");
								arguments.callee(a[i], b[i]);
								objectGraphPath.pop();
							}
						}
					}
					else if(a.constructor == Object || (a.constructor != Number &&
							a.constructor != String && a.constructor != Date &&
							a.constructor != RegExp && a.constructor != Function &&
							a.constructor != Boolean)) {
						// we can safely assume that the objects have the
						// same property lists, else why compare them?
						for(var property in a) {
							objectGraphPath.push(("." + property));
							if ( ! b[property] ) {
								propertyChanges.push({ "Property": objectGraphPath.join(""), "ObjectA": a[property], "ObjectB": null });
							}
							else if(a[property] && a[property].constructor != Function) {
								arguments.callee(a[property], b[property]);
							}
							objectGraphPath.pop();
						}
					}
					else if(a.constructor != Function) { // filter out functions
						if(a != b) {
							propertyChanges.push({ "Property": objectGraphPath.join(""), "ObjectA": a, "ObjectB": b });
						}
					}
				})(objectA, objectB);
				return propertyChanges;
			}
		};
	}
);
