define.amd.jQuery = true;

require([
	"dojo/i18n!../nls/template.js?v=" + app.version,
	"esri/arcgis/Portal",
	"esri/arcgis/utils",
	"dojo/_base/lang",
	"esri/dijit/Legend",
	"esri/geometry/Extent",
	"esri/tasks/query",
	"esri/tasks/QueryTask",
	"esri/IdentityManager",
	"dojo/aspect",
	"dojo/has",
	"dojo/domReady!"
], function(
	i18n,
	arcgisPortal,
	arcgisUtils,
	lang,
	LegendDijit,
	Extent,
	Query,
	QueryTask,
	IdentityManager,
	aspect,
	has
) {
	var sections = app.data.getStorySections(),
		title = sections[0].title,
		storyHTML = '';

	esri.arcgis.utils.arcgisUrl = window.opener.esri.arcgis.utils.arcgisUrl;
	esri.id.initialize(window.opener.esri.id);

	document.title = $('<div>' + title + '</div>').text();

	storyHTML += '<div class="print-warning">';
	storyHTML += i18n.viewer.shareFromCommon.printInstruction1;

	storyHTML += '<div class="share-warning">';

	if (! has('chrome') || ! has('safari')) {
		storyHTML += i18n.viewer.shareFromCommon.printInstruction1a + '. ';
	}

	storyHTML += i18n.viewer.shareFromCommon.printInstruction2.replace('${link}', '<a href="' + window.storyURL + '">' + i18n.viewer.shareFromCommon.link + '</a>');
	storyHTML += '</div>';
	storyHTML += '<div class="print-btn">';
	storyHTML += '<span class="glyphicon glyphicon-print" aria-hidden="true"></span>';
	storyHTML += i18n.viewer.shareFromCommon.print;
	storyHTML += '</div>';

	storyHTML += '<div class="print-options">';
	storyHTML += '<table style="width: 100%"><tr><td style="width: 50%">';
	storyHTML += '<div class="checkbox"><label>';
	storyHTML += '<input type="checkbox" value="pageBreak">';
	storyHTML += i18n.viewer.shareFromCommon.printOptPageBreak;
	storyHTML += '</label></div>';
	storyHTML += '</td><td style="width: 50%">';
	storyHTML += '<div class="checkbox"><label>';
	storyHTML += '<input type="checkbox" value="blackText">';
	storyHTML += i18n.viewer.shareFromCommon.makeTextBlack || 'Make all text black';
	storyHTML += '</label></div>';
	storyHTML += '</td></tr></table>';
	storyHTML += '</div>';

	storyHTML += '</div>';

	storyHTML += '<header>';
	storyHTML += '<div class="story-title">' + title + '</div>';

	storyHTML += '<i class="story-warning">' + i18n.viewer.shareFromCommon.printWarning.replace('${link}', '<a href="' + window.storyURL + '">' + window.storyURL + '</a>') + '</i>';
	storyHTML += '</header>';

	$.each(sections, function(i, section) {
		storyHTML += '<section>';

		storyHTML += '<div class="title-media-block">';
		if (i !== 0) {
			storyHTML += section.title;
		}

		storyHTML += exportMediaBlock(i, section.media);
		storyHTML += '</div>';

		storyHTML += exportNarrative(section.content);

		storyHTML += '</section>';
	});

	$('body').html(storyHTML);

	$('.print-btn').click(function(){
		window.print();
	});

	$('input[value=pageBreak]').change(function() {
		$('section').toggleClass('page-break', $(this).prop('checked'));
	});

	$('input[value=blackText]').change(function() {
		$('section').toggleClass('blackText', $(this).prop('checked'));
	});

	// Load webmap now that DOM is ready
	// That case should be shared with MainStage.js but as of today it's not modular enough
	$.each(sections, function(i, section) {
		var media = section.media;

		if (media.type != 'webmap') {
			return;
		}

		var extent = media && media.webmap ? media.webmap.extent : null;
		if ( extent ) {
			try {
				extent = new Extent(extent);
			} catch (e) {
				extent = null;
			}
		}

		loadWebmap(media.webmap.id, $('#media-section-' + i)[0], extent).then(function(response) {

			if (extent) {
				// Not sure why that's required, the extent passed in createMap is ignored...
				response.map.setExtent(extent);
			}

			response.map.disableScrollWheelZoom();

			//
			// Take care of layer overrides
			//

			var layerCfg = media && media.webmap ? media.webmap.layers : null,
				mapDefault = response.itemInfo.itemData.operationalLayers;

			// Loop through webmap layers and set the visibility
			// The visibility is set to the section definition when defined or to the webmap initial visibility
			$.each(mapDefault, function(i, layer){
				var override;

				if ( layer.layerObject) {
					override = $(layerCfg).filter(function(i, l){ return l.id == layer.layerObject.id; });

					var updateVisibility = function()
					{
						layer.layerObject.setVisibility(override.length ? override[0].visibility : layer.visibility);
					};

					if ( layer.layerObject.loaded )
						updateVisibility();
					else {
						layer.layerObject.on("load", updateVisibility);
					}
				}
				else if ( layer.featureCollection && layer.featureCollection.layers ) {
					$.each(layer.featureCollection.layers, function(i, fcLayer){
						override = $(layerCfg).filter(function(i, l){
							// Because the configuration store the map layerObject id like "mapNotes_914_0" instead of "mapNotes_914"
							// Should change that and keep V1.0 compatibility
							return l.id.split('_').slice(0,-1).join('_') == fcLayer.layerObject.id.split('_').slice(0,-1).join('_');
						});
						fcLayer.layerObject.setVisibility(override.length ? override[0].visibility : fcLayer.visibility);
					});
				}
			});

			//
			// Popup
			//

			applyPopupConfiguration(response.map, media.webmap.popup);

			//
			// Legend
			//

			var legendSettings = media.webmap.legend || {};

			if ( legendSettings.enable ) {
				var legend = new LegendDijit({
					map: response.map,
					layerInfos: arcgisUtils.getLegendLayers(response)
				}, $(response.map.container).next()[0]);

				window.maps = window.maps || [];
				window.maps.push(response.map);

				aspect.after(legend, 'startup', afterLegendRefresh);
				aspect.after(legend, 'refresh', afterLegendRefresh);

				legend.startup();
			}
		});
	});

	function afterLegendRefresh() {
		var toRemove = 'legend-single legend-double legend-triple';
		var layerLength = $(this.domNode).find('.esriLegendService').length;
		var toAdd;
		if (layerLength === 1) {
			toAdd = 'legend-single';
		} else if (layerLength === 2) {
			toAdd = 'legend-double';
		} else if (layerLength > 2) {
			toAdd = 'legend-triple';
		}

		$(this.domNode).removeClass(toRemove).addClass(toAdd);


		window.maps.forEach(function(map) {
			map.reposition();
		});

	}

	function loadWebmap(webmapIdOrJSON, container, extent)
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
			bingMapsKey: app.cfg.BING_MAPS_KEY,
			editable: false,
			layerMixins: app.data.getAppProxies()
		});
	}

	function exportNarrative(content)
	{
		if (! content) {
			return '';
		}

		// Make sure each media has a protocol
		// Otherwise it won't load as the print page has "no" protocol
		content = $('<div>' + content + '</div>');
		content.find('img, iframe').each(function() {
			var node = $(this);
			node.attr('src', checkURLProtocol(node.attr('src')));
		});

		// Add inline warning for Main Stage actions
		content.find('a[data-storymaps]').each(function() {
			$(this).attr('data-warning', '(' + i18n.viewer.shareFromCommon.printMSWarning + ')');
		});

		// Replace YouTube with image
		// Add inline warning for videos
		content.find('iframe').each(function() {
			var node = $(this);

			var videoIDYouTube = getYoutubeId(node.attr('src'));
			if (videoIDYouTube) {
				node.replaceWith('<div class="media media-image"><img src="http://img.youtube.com/vi/' + videoIDYouTube + '/0.jpg" /></div><i class="media-video-warning">' + i18n.viewer.shareFromCommon.printVideoWarning + '</i>');
			}

			var videoIDVimeo = getVimeoId(node.attr('src'));
			if (videoIDVimeo) {
				node.after('<i class="media-video-warning">' + i18n.viewer.shareFromCommon.printVideoWarning + '</i>');
			}
		});



		return '<div class="section-narrative">' + content.html() + '</div>';
	}

	function exportMediaBlock(id, media)
	{
		var outHTML = "";

		switch(media.type) {
			case "webmap":
				outHTML += '<div class="media media-map" id="media-section-' + id + '"></div>';

				var legendSettings = media.webmap.legend || {};
				if (legendSettings.enable) {
					outHTML += '<div class="media media-map-legend"></div>';
				}

				break;
			case "image":
				var tokenizedUrl = possiblyAddToken(media.image.url);
				outHTML += '<div class="media media-image"><img src="' + checkURLProtocol(tokenizedUrl) + '" /></div>';
				break;
			case "video":
				var videoIDYouTube = getYoutubeId(media.video.url);

				if (videoIDYouTube) {
					outHTML += '<div class="media media-image"><img src="http://img.youtube.com/vi/' + videoIDYouTube + '/0.jpg" /></div>';
				}
				// TODO: vimeo require a request to get the URL
				//  this should be saved in the story data when added in builder
				else {
					outHTML += '<div class="media media-video"><iframe src="' + checkURLProtocol(media.video.url) + '"></iframe></div>';
				}

				outHTML += '<i class="media-video-warning">' + i18n.viewer.shareFromCommon.printVideoWarning + '</i>';
				break;
			case "webpage":
				if (media.webpage.url) {
					outHTML += '<div class="media media-webpage"><iframe src="' + checkURLProtocol(media.webpage.url) + '"></iframe></div>';
				}
				else {
					outHTML += '<div class="media media-webpage">' + media.webpage.frameTag + '</div>';
				}
				break;
			default:
				outHTML += "";
		}

		return outHTML;
	}

	// A little different from the one in CommonHelper
	//   as protocol independent is not ok in that context
	function checkURLProtocol(url)
	{
		if ( ! url || url === "" || url.match(/^mailto:/) )
			return url;

		if ( ! /^(https?:\/\/)/i.test(url) ) {
			if ( ! /^(\/\/)/i.test(url) ) {
				return 'http://' + url;
			}
			else {
				return 'http:' + url;
			}
		}

		return url;
	}

	function getYoutubeId(url)
	{
		var urlTest = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.exec(url);
		return urlTest && urlTest.length == 4 ? urlTest[3] : null;
	}

	function getVimeoId(url)
	{
		var urlTest = /^.*(vimeo\.com\/)((video\/)|(channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(url);
		return urlTest ? urlTest.slice(-1) : null;
	}

	//
	// POP-UP
	// Duplicated from MainStage.js
	//

	function applyPopupConfiguration(map, popupCfg)
	{
		// When an action is performed the popup will be closed
		// But features aren't cleared so it can be restored
		map.infoWindow.hide();

		if ( popupCfg ) {
			var layer = map.getLayer(popupCfg.layerId),
				// TODO some MapService layer seems to require this
				// need to investigate more to make sure there is no other way
				// also if the popup contains multiple features, only the first feature will be displayed
				serviceId = popupCfg.layerId ? popupCfg.layerId.split('_').slice(0, -1).join('_') : '',
				layer2 = map.getLayer(serviceId);

			map.infoWindow.clearFeatures();

			if ( layer )
				applyPopupConfigurationStep2(map, popupCfg);
			// TODO
			else if ( layer2 ) {
				var layerIdx = popupCfg.layerId.split('_').slice(-1).join('_'),
					layerUrl = layer2.url + '/' + layerIdx;

				applyPopupConfigurationStep2Alt(map, popupCfg, serviceId, layerIdx, layerUrl);
			}
			// On FS the layer will be null until loaded...
			else
				var handle = map.on("update-end", function(){
					applyPopupConfiguration(map, popupCfg);
					handle.remove();
				});
		}
	}

	function applyPopupConfigurationStep2(map, popupCfg)
	{
		var query = new Query(),
			layer = map.getLayer(popupCfg.layerId);

		if ( ! layer )
			return;

		query.objectIds = [popupCfg.fieldValue];

		// Feature Service
		if (!layer._collection) {
			query.returnGeometry = true;
			query.outFields = ["*"]; // popupCfg.fieldName ?
			query.outSpatialReference = map.spatialReference;
		}

		// TODO: Image Services
		if ( ! layer.queryFeatures ) {
			return;
		}

		layer.queryFeatures(query).then(function(featureSet) {
			applyPopupConfigurationStep3(map, featureSet.features);
		});
	}

	// TODO
	function applyPopupConfigurationStep2Alt(map, popupCfg, serviceId, layerIdx, layerUrl)
	{
		var queryTask = new QueryTask(layerUrl),
			query = new Query(),
			layer = map.getLayer(serviceId);

		if ( ! layer )
			return;

		query.objectIds = [popupCfg.fieldValue];
		query.returnGeometry = true;
		query.outFields = ["*"]; // popupCfg.fieldName ?
		query.outSpatialReference = map.spatialReference;

		queryTask.execute(query, function(featureSet) {
			applyPopupConfigurationStep3(map, featureSet.features, serviceId, layerIdx);
		});
	}

	function applyPopupConfigurationStep3(map, features, serviceId, layerIdx)
	{
		if ( ! features || ! features.length )
			return;

		var geom = features[0].geometry,
			center = geom.getExtent() ? geom.getExtent().getCenter() : geom;

		// TODO
		if ( serviceId ) {
			features[0].infoTemplate = map.getLayer(serviceId).infoTemplates[layerIdx].infoTemplate;
			map.infoWindow.setContent(features[0].getContent());
		}
		else {
			map.infoWindow.setFeatures(features);
		}

		map.infoWindow.show(center);

		// Center the map is the geometry isn't visible
		if ( ! map.extent.contains(center) ) {
			map.centerAt(center);

		}
	}

	function possiblyAddToken(url) {
    var appItem = app.data && app.data.getWebAppItem && app.data.getWebAppItem();

    if (!appItem) {
    	return url;
    }

		if (!isAppResource(url, appItem)) {
			return url;
		}

		if (appItem.access === 'public') {
			return url;
		}

		// if we're here, we have an app resource and the app isn't public
		// so we need a token
		var token = getToken();
		if (!token) {
			console.warn('no token found even though token needed');
			return url;
		}

		var tokenJoin = (url.indexOf('?') > 0) ? '&' : '?';

		return url + tokenJoin + 'token=' + token;

	}

	function isAppResource(url, appItem) {
    return appItem && appItem.id && url
      && url.match(new RegExp('\/sharing\/rest\/content\/items\/' + appItem.id + '\/resources\/'));
	}

  function getToken() {
    if (app.portal && app.portal.getPortalUser()) {
      return app.portal.getPortalUser().credential.token;
    }
    var originCredential = IdentityManager.findCredential(document.location.origin);
    if (originCredential) {
      return originCredential.token;
    }
    var urlCredential = IdentityManager.findCredential(app.portal.url);
    if (urlCredential) {
      return IdentityManager.findCredential(app.portal.url).token;
    }
    return this.getCookieToken();
  }

});
