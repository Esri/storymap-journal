define(["dojo/cookie", 
		"dojo/has", 
		"esri/urlUtils",
		"esri/geometry/webMercatorUtils",
		"esri/geometry/Point",
		"esri/geometry/Extent",
		"esri/geometry/Polygon",
		"esri/layers/ArcGISDynamicMapServiceLayer",
		"esri/layers/ArcGISTiledMapServiceLayer",
		"esri/layers/OpenStreetMapLayer"], 
	function(
		cookie, 
		has, 
		urlUtils,
		webMercatorUtils,
		Point,
		Extent,
		Polygon,
		ArcGISDynamicMapServiceLayer,
		ArcGISTiledMapServiceLayer,
		OpenStreetMapLayer)
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
					document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + document.location.search + "&edit" + document.location.hash;
				else if ( document.location.search.slice(-1) == '?' )
					document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + "edit"  + document.location.hash;
				else
					document.location = document.location.protocol + '//' + document.location.host + document.location.pathname + "?edit"  + document.location.hash;
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
				var esriCookie = cookie('esri_auth');
				
				if( ! esriCookie )
					return;
				
				esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));
				
				// Cookie has to be set on the same organization
				if( esriCookie.urlKey 
						&& esriCookie.customBaseUrl 
						&& (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
					return;
				
				return esriCookie ? esriCookie.email : null;
			},
			getPortalRole: function()
			{
				var esriCookie = cookie('esri_auth');
				
				if( ! esriCookie )
					return;
				
				esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));
				
				// If the cookie is not set on the same organization
				if( esriCookie.urlKey 
						&& esriCookie.customBaseUrl 
						&& (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
					return;
				
				return esriCookie ? esriCookie.role : null;
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
			getItemURL: function(sharingUrl, id)
			{
				var portalUrl = sharingUrl.split('/sharing/')[0];
				return portalUrl + '/home/item.html?id=' + id;
			},
			getMyContentURL: function(sharingurl)
			{
				return sharingurl.split('/sharing/')[0] + '/home/content.html';
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
			checkImageURL: function(url)
			{
				return url && url.match(/((\.png)|(\.jp(e)?g))$/i);
			},
			createGeocoderOptions: function() 
			{
				var hasEsri = false,
					geocoders = dojo.clone(app.indexCfg.geocodeServices);
				
				dojo.forEach(geocoders, function (geocoder) {
					if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
						hasEsri = true;
						geocoder.name = "Esri World Geocoder";
						geocoder.outFields = "Match_addr, stAddr, City";
						geocoder.singleLineFieldName = "SingleLine";
						//geocoder.placeholder = (app.indexCfg.placefinder.placeholder === "") ? i18n.tools.search.title : app.indexCfg.placefinder.placeholder;
						geocoder.esri = geocoder.placefinding = true;
						/*if (app.indexCfg.placefinder.currentExtent || app.indexCfg.searchextent) {
							geocoder.searchExtent = app.mainMap.extent;
						}
						if (app.indexCfg.placefinder.countryCode !== "") {
							geocoder.sourceCountry = app.indexCfg.placefinder.countryCode;
						}*/
					}
				});
				
				//only use geocoders with a singleLineFieldName that allow placefinding
				geocoders = dojo.filter(geocoders, function (geocoder) {
					return (esri.isDefined(geocoder.singleLineFieldName) && esri.isDefined(geocoder.placefinding) && geocoder.placefinding);
				});
				
				var esriIdx;
				if (hasEsri) {
					for (var i = 0; i < geocoders.length; i++) {
						if (esri.isDefined(geocoders[i].esri) && geocoders[i].esri === true) {
							esriIdx = i;
							break;
						}
					}
				}
				
				var options = {
					autoNavigate: true, /* changed from false */
					autoComplete: hasEsri,
					theme: "simpleGeocoder"
				};
				
				if(hasEsri){
					options.minCharacters = 0;
					options.maxLocations = 5;
					options.searchDelay = 100;
				}
				
				//If the World geocoder is primary enable auto complete 
				if (hasEsri && esriIdx === 0) {
					options.arcgisGeocoder = geocoders.splice(0, 1)[0]; //geocoders[0];
					if (geocoders.length > 0) {
						options.geocoders = geocoders;
					}
				} else {
					options.arcgisGeocoder = false;
					options.geocoders = geocoders;
				}
						
				return options;	
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