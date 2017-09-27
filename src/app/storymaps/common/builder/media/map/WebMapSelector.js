define(["lib-build/tpl!./WebMapSelector",
		"lib-build/css!./WebMapSelector",
		"../../browse-dialog/js/BrowseIdDlg",
		"lib-build/css!../../browse-dialog/css/browse-dialog",
		"lib-build/css!../../browse-dialog/storymaps-override",
		"./MapConfigOverlay",
		"./MapViewerWrapperUtils",
		"./ErrorDialog",
		"storymaps/tpl/core/Helper",
		"storymaps/common/utils/CommonHelper",
		"storymaps/common/utils/WebMapHelper",
		"esri/geometry/Extent",
		"dojo/Deferred",
		"dojo/topic",
		"dijit/registry",
		"dojo/on",
		"dojo/has",
		"dojo/_base/lang"
	],
	function (
		viewTpl,
		viewCss,
		BrowseIdDlg,
		browseDlgCss,
		browseDlgCss2,
		MapConfigOverlay,
		MapViewerWrapperUtils,
		ErrorDialog,
		Helper,
		CommonHelper,
		WebMapHelper,
		Extent,
		Deferred,
		topic,
		registry,
		on,
		has,
		lang
	){
		return function WebMapSelector(container, openConfigureCallback, closeConfigureCallback, onDataChangeCallback)
		{
			var _this = this,
				_cfg = null,
				_browseDialog = null,
				_mapConfig = null,
				_errorDialog = new ErrorDialog($("#mapErrorDialog"));

			container.append(viewTpl(lang.mixin({}, i18n.commonWebmap.selector, {lblEdit: i18n.commonCore.common.edit})));

			initEvents();

			this.present = function(cfg)
			{
				var mediaIsWebmap = cfg.media && cfg.media.type == 'webmap';

				_cfg = cfg;
				_mapConfig = {};

				if ( mediaIsWebmap ) {
					_mapConfig = {
						extent: cfg.media.webmap.extent,
						layers: cfg.media.webmap.layers,
						popup:  cfg.media.webmap.popup,
						legend:  cfg.media.webmap.legend,
						overview:  cfg.media.webmap.overview,
						geocoder: cfg.media.webmap.geocoder
					};

					// TODO should be able to know if this is the webmap initial extent or not
					if ( cfg.mode == "add" )
						_mapConfig.extent = app.map ? app.map.extent.toJson() : null;
				}

				container.find('.webmaps-list-btn-inner').data('webmap', '');
				container.find('.selected-map-sharing-status').html('');
				buildWebmapList(mediaIsWebmap ? cfg.media.webmap.id : '', cfg.webmaps);

				container.find('.map-cfg-row').toggle(!! mediaIsWebmap && app.data.getStoryLength() !== 0);

				// Map controls
				var enableOverview = false,
					enableLegend = false,
					enableGeocoder = false;

				if ( mediaIsWebmap ) {
					enableOverview = cfg.media.webmap.overview ? cfg.media.webmap.overview.enable : false;
					enableLegend   = cfg.media.webmap.legend   ? cfg.media.webmap.legend.enable   : false;
					enableGeocoder = cfg.media.webmap.geocoder ? cfg.media.webmap.geocoder.enable : false;
				}

				container.find('.opt-checkbox-overview').prop('checked', enableOverview);
				container.find('.opt-checkbox-legend').prop('checked', enableLegend);
				container.find('.opt-checkbox-geocoder').prop('checked', enableGeocoder);

				container.find('.lbl-configure').html(i18n.commonWebmap.selector.btnConfigure);

				var forceLocation = null,
					forceLayers = null,
					forcePopup = null;

				if ( _cfg.mode == "edit" && isCurrentSectionWebmapSelected() ) {
					forceLocation = !! _cfg.media.webmap.extent;
					forceLayers = !! _cfg.media.webmap.layers;
					forcePopup = !! _cfg.media.webmap.popup;
				}

				container.find('.map-cfg-controls').toggleClass("disable", !! _cfg.disableMapExtras);

				updateStatusConfigureButton(forceLocation, forceLayers, forcePopup);

				if (registry.byId('browse-id-dialog')) {
					registry.byId('browse-id-dialog').destroy();
					registry.byId('browse-id-search-box').destroy();
					if ( registry.byId('gallery') )
						registry.byId('gallery').destroy();
					_browseDialog = null;
				}
				buildBrowseDialog();

				this.postDisplay();
			};

			this.checkError = function()
			{
				var hasError = ! isSelectedWebmapValid();
				container.find('.webmapIdFieldContainer').toggleClass('has-feedback has-error', hasError);
				return hasError;
			};

			this.getData = function()
			{
				var webmapId = getSelectedWebmap(),
					isExtentCustom = container.find('.map-cfg .map-cfg-location .btn[data-value="custom"]').hasClass('btn-primary'),
					isLayersCustom = container.find('.map-cfg .map-cfg-content .btn[data-value="custom"]').hasClass('btn-primary'),
					isPopupCustom  = container.find('.map-cfg .map-cfg-popup .btn[data-value="custom"]').hasClass('btn-primary');

				if ( ! isSelectedWebmapValid() )
					return null;

				return {
					id: webmapId,
					extent: isExtentCustom && _mapConfig ? _mapConfig.extent : null,
					layers: isLayersCustom && _mapConfig ? _mapConfig.layers : null,
					popup:  isPopupCustom  && _mapConfig ? _mapConfig.popup  : null,
					overview: {
						enable: container.find('.opt-checkbox-overview').prop('checked'),
						openByDefault: _mapConfig && _mapConfig.overview ? _mapConfig.overview.openByDefault : true
					},
					legend: {
						enable: container.find('.opt-checkbox-legend').prop('checked'),
						openByDefault: _mapConfig && _mapConfig.legend ? _mapConfig.legend.openByDefault : false
					},
					geocoder: {
						enable: container.find('.opt-checkbox-geocoder').prop('checked')
					}
				};
			};

			this.activate = function()
			{
				_this.postDisplay();
			};

			this.postDisplay = function()
			{
				if ( container.find('.webmapSelector').width() === 0 ) {
					return;
				}

				// Optional but allow the list to be slightly wider
				container.find('.selected-map-edit-container').css(
					'width',
					container.find('.selected-map-edit').width()
				);
			};

			function buildWebmapList(currentMap, webmaps)
			{
				container.find('.webmaps-list').empty();

				$.each(webmaps, function(i, webmap) {
					var title = webmap.title || '<span class="smallLoader titleLoader"></span><span style="text-transform: uppercase">' + i18n.commonWebmap.selector.loadingTitle + '</span>',
						sharing = webmap.sharing ? webmap.sharing : '<span class="smallLoader"></span>',
						usage = "";

					if ( webmap.sections && webmap.sections.length ) {
						if ( webmap.sections.length == 1 )
							usage += i18n.commonWebmap.selector.section + " " + webmap.sections[0];
						else
							usage += i18n.commonWebmap.selector.sections + " " + webmap.sections.join(', ');
					}

					if ( webmap.actions && webmap.actions.length ) {
						usage += usage ? " " + i18n.commonWebmap.selector.and + " " : "";

						if ( webmap.actions.length == 1 )
							usage += i18n.commonWebmap.selector.action.toLowerCase() + " " + webmap.actions[0];
						else
							usage += i18n.commonWebmap.selector.actions.toLowerCase() + " " + webmap.actions.join(', ');
					}

					if ( ! webmap.sections && ! webmap.actions ) {
						usage = i18n.commonWebmap.selector.originalWebmap.replace("%TPL_NAME%", app.cfg.TPL_NAME);
					}

					addWebMapListItem('', webmap.id, title, usage, sharing);
				});

				addWebMapListItem('action-btn browse-webmap', '', i18n.commonWebmap.selector.browseMaps, '' /*app.portal.portalName*/);
				addWebMapListItem('action-btn create-webmap', '', i18n.commonWebmap.selector.createMap, '');

				if ( currentMap ) {
					container.find('.webmaps-list-btn-inner')
						.data('webmap', currentMap)
						.html('<span class="title">' + app.data.getWebmapTitle(currentMap) + '</span><span class="info">' + i18n.commonWebmap.selector.current + '</span>');
					container.find('.selected-map-sharing-status').html(app.data.getWebmapSharing(currentMap));
				}
				else
					container.find('.webmaps-list-btn-inner').html(i18n.commonWebmap.selector.select);

				container.find('.selected-map-edit').toggle(!! currentMap);

				container.find('.webmaps-list li:not(.action-btn) a').click(function(){
					container.find('.webmaps-list-btn-inner')
						.data("webmap", $(this).find('.webmap-entry').data('webmap'))
						.html($(this).find('.title').eq(0).clone());
					container.find('.selected-map-sharing-status').html($(this).find('.sharing-status').html());

					container.find('.map-cfg-row').fadeIn();

					updateStatusConfigureButton();
					// Reset map config
					_mapConfig = {};
				});

				container.find('.browse-webmap a').click(function(){
					_browseDialog.show();
				});

				container.find('.create-webmap a').click(createNewWebmap);
			}

			function addWebMapListItem(cssClass, webmap, title, info, status)
			{
				container.find('.webmaps-list').append(
					'<li class="' + cssClass + '">'
					+  '<a data-href="#">'
					+   '<span class="webmap-entry" data-webmap="' + webmap + '">'
					+    '<span class="title">' + title + '</span>'
					+    '<span class="info">' + info + '</span>'
					+    (status ? '<span class="sharing-status">' + status + '</span>' : '')
					+   '</span>'
					+  '</a>'
					+ '</li>'
				);
			}

			function onWebmapLoaded(webmap)
			{
				var node = container.find('.webmaps-list .webmap-entry[data-webmap="' + webmap.id + '"]');
				node.find(".title").html(webmap.title);
				node.find(".sharing-status").html(webmap.sharing);
			}

			function buildBrowseDialog()
			{
				_browseDialog = new BrowseIdDlg({
					portal: app.portal,
					galleryType: "webmap"
				});

				on(_browseDialog._grid, "onItemClick", function(){
					_browseDialog.onClose();
				});

				on(_browseDialog, "close", function(){
					if (_browseDialog.get("selected")) {
						newMapSelected(
							_browseDialog.get("selected").id,
							_browseDialog.get("selected").title,
							false
						);
					}
				});
			}

			function newMapSelected(id, title, justCreated)
			{
				var newMapLabel = justCreated ? i18n.commonWebmap.selector.newCreatedMap : i18n.commonWebmap.selector.newMap;

				container.find('.webmaps-list-btn-inner')
					.data('webmap', id)
					.html(
						'<span class="title">'
						+ title
						+ '</span>'
						+ '<span class="info">' + newMapLabel + '</span>'
					);

				//container.find('.selected-map-sharing-status').html(_browseDialog.get("selected").access);
				container.find('.selected-map-edit').toggle(true);

				// Reset Map Config
				_mapConfig = {};
				updateStatusConfigureButton();

				onDataChangeCallback && onDataChangeCallback({
					newMedia: {
						type: 'webmap',
						webmap: {
							id: id,
							title: title
						}
					}
				});

				_this.postDisplay();
			}

			function initEvents()
			{
				container.find('.help').tooltip({
					trigger: 'hover'
				});

				// TODO shouldn't subscribe to that topic globally
				topic.subscribe("LOADED_WEBMAP_INFOS", onWebmapLoaded);

				container.find('.map-cfg-row .btn-group .btn').click(function(){
					$(this).parent().find('.btn').removeClass('btn-primary');
					$(this).addClass('btn-primary');
				});

				container.find('.map-cfg-location .btn[data-value="custom"]').click(function(){
					onClickConfigure("LOCATION");
				});

				container.find('.map-cfg-content .btn[data-value="custom"]').click(function(){
					onClickConfigure("CONTENT");
				});

				container.find('.map-cfg-popup .btn[data-value="custom"]').click(function(){
					onClickConfigure("POPUP");
				});

				container.find('.selected-map-edit').click(editCurrentWebmap);
			}

			function getSelectedWebmap()
			{
				return container.find('.webmaps-list-btn-inner').data('webmap');
			}

			function isSelectedWebmapValid()
			{
				var webmapId = getSelectedWebmap();
				return webmapId && webmapId.match(/^[A-Fa-f0-9]{32}$/);
			}

			function isCurrentSectionWebmapSelected()
			{
				return _cfg.media && _cfg.media.webmap && _cfg.media.webmap.id == getSelectedWebmap();
			}

			/*
			 * Create/edit map
			 */

			function createNewWebmap()
			{
				if  ( isTouchOnly() ) {
					_errorDialog.present({
						newMap: true,
						error: "TOUCH_ONLY",
						url: MapViewerWrapperUtils.getMapViewerURL(),
						isPortal: app.isPortal
					});
				}
				else if ( ! app.isPortal && ! MapViewerWrapperUtils.isWhiteListedDomain() && app.isProduction ) {
					_errorDialog.present({
						newMap: true,
						error: "DOMAIN",
						url: MapViewerWrapperUtils.getMapViewerURL(),
						isPortal: app.isPortal
					});
				}
				else if ( app.isPortal && ! MapViewerWrapperUtils.viewerIsSameDomain() && app.isProduction ) {
					_errorDialog.present({
						newMap: true,
						error: "DOMAIN",
						url: MapViewerWrapperUtils.getMapViewerURL(),
						isPortal: app.isPortal
					});
				}
				else if ( app.isPortal && ! app.portal.hasMyStories ) {
					_errorDialog.present({
						newMap: true,
						error: "PORTAL",
						url: MapViewerWrapperUtils.getMapViewerURL(),
						isPortal: app.isPortal
					});
				}
				else {
					app.builder.openMapViewer({
						newMap: true,
						title: app.builder.getAddEditEntryTitle()
					}).then(
						function(result){
							if ( result.newMap ) {
								newMapSelected(
									result.newMapInfos.id,
									result.newMapInfos.title,
									true
								);
							}
						},
						function(e)
						{
							if ( e == "DEV_TOKEN" || e == "DEV_FAIL" ) {
								_errorDialog.present({
									newMap: true,
									error: e
								});
							}
						}
					);
				}
			}

			function editCurrentWebmap()
			{
				if  ( isTouchOnly() ) {
					_errorDialog.present({
						newMap: false,
						error: "TOUCH_ONLY",
						url: MapViewerWrapperUtils.getMapViewerLink(getSelectedWebmap()),
						isPortal: app.isPortal
					});
				}
				else if ( ! app.isPortal && ! MapViewerWrapperUtils.isWhiteListedDomain() && app.isProduction ) {
					_errorDialog.present({
						newMap: false,
						error: "DOMAIN",
						url: MapViewerWrapperUtils.getMapViewerLink(getSelectedWebmap()),
						isPortal: app.isPortal
					});
				}
				else if ( app.isPortal && ! MapViewerWrapperUtils.viewerIsSameDomain() && app.isProduction ) {
					_errorDialog.present({
						newMap: false,
						error: "DOMAIN",
						url: MapViewerWrapperUtils.getMapViewerLink(getSelectedWebmap()),
						isPortal: app.isPortal
					});
				}
				else if ( app.isPortal && ! app.portal.hasMyStories ) {
					_errorDialog.present({
						newMap: false,
						error: "PORTAL",
						url: MapViewerWrapperUtils.getMapViewerLink(getSelectedWebmap()),
						isPortal: app.isPortal
					});
				}
				else {
					app.builder.openMapViewer({
						id: getSelectedWebmap()
					}).then(
						function(result)
						{
							if ( result.newMap ) {
								newMapSelected(
									result.newMapInfos.id,
									result.newMapInfos.title,
									true
								);
							}
						},
						function(e)
						{
							if ( e == "DEV_TOKEN" || e == "DEV_FAIL" ) {
								_errorDialog.present({
									newMap: false,
									error: e
								});
							}
						}
					);
				}
			}

			function isTouchOnly()
			{
				return has("touch") && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i).test(navigator.userAgent);
			}

			/*
			 * Configure Map View
			 */

			function updateStatusConfigureButton(forceLocation, forceLayers, forcePopup)
			{
				var defineLocation = forceLocation || !! _mapConfig.extent,
					defineLayers = forceLayers || !! _mapConfig.layers,
					definePopup = forcePopup || !! _mapConfig.popup;

				container.find('.map-cfg .map-cfg-location .btn[data-value="default"]').toggleClass('btn-primary', ! defineLocation);
				container.find('.map-cfg .map-cfg-location .btn[data-value="custom"]').toggleClass('btn-primary', defineLocation);

				container.find('.map-cfg .map-cfg-content .btn[data-value="default"]').toggleClass('btn-primary', ! defineLayers);
				container.find('.map-cfg .map-cfg-content .btn[data-value="custom"]').toggleClass('btn-primary', defineLayers);

				container.find('.map-cfg .map-cfg-popup .btn[data-value="default"]').toggleClass('btn-primary', ! definePopup);
				container.find('.map-cfg .map-cfg-popup .btn[data-value="custom"]').toggleClass('btn-primary', definePopup);

				var webmapId = getSelectedWebmap();

				if ( webmapId ) {
					container.find('.map-cfg-row').show();
					// specifically request this with a token to see if the current user has admin/update privileges.
					var url = CommonHelper.getSpecificPortalURL() + '/sharing/content/items/' + webmapId;
					// get the webmap's item info to look at privileges
					WebMapHelper.request(url, null, null, Helper.getToken()).then(function(itemResponse) {

						// var externalLink = container.find('.external-link'); // TOOK OUT EXTERNAL SETTINGS LINK

						// reset strings
						var geocoderLabel = container.find('.lblGeocoder').text(i18n.commonWebmap.selector.lblGeocoder);
						var geocoderHelp = container.find('.opt-checkbox-geocoder ~ .help')
																.attr('data-original-title', i18n.commonWebmap.selector.tooltipGeocoder)
																.tooltip('fixTitle');
						// can we edit this?
						var canEdit = (itemResponse.itemControl === 'admin' || itemResponse.itemControl === 'update');
						if (!canEdit) {

							// externalLink.hide(); // TOOK OUT EXTERNAL SETTINGS LINK

							// if we're here, we don't have admin/update privileges for this map.
							// now we need to request the item *data* to see if the map has feature search enabled or not.
							WebMapHelper.request(url + '/data', null, null, Helper.getToken()).then(function(dataResponse) {
								var x; // walker
								(x = dataResponse.applicationProperties) && (x = x.viewing) && (x = x.search) && (x = x.layers) && (x = x.length);
								if (!x) {
									geocoderLabel.text(i18n.commonWebmap.selector.lblGeocoderNoFeatures);
									geocoderHelp.attr('data-original-title', i18n.commonWebmap.selector.tooltipGeocoderNoFeatures)
										.tooltip('fixTitle');
								}
							});

							// TOOK OUT EXTERNAL SETTINGS LINK
						// } else {
							// var settingsUrl = CommonHelper.getSpecificPortalURL() + '/home/item.html?id=' + webmapId + '#settings';
							// externalLink.show().find('a').attr('href', settingsUrl);
						}
					});
				}

				onDataChangeCallback && onDataChangeCallback();
			}

			function onClickConfigure(type)
			{
				var webmapId = getSelectedWebmap();

				container.find('.map-cfg').addClass("disabled");
				container.find('.map-cfg-info').hide().addClass("disabled");
				container.find('.webmap-loading').show().html(i18n.commonCore.common.loading + "...");

				// TODO save webmap state in case cancel

				if ( ! webmapId )
					return;

				// Configuring a webmap already used in the project, or selected in the same section
				// Doing these together now to correctly handle editing of story actions in sections
				// where the original mainstage isn't a map, but the storyaction is a map.
				if (isCurrentSectionWebmapSelected() || $.inArray(webmapId, _cfg.webmaps) != -1 ) {
					var handle = topic.subscribe("ADDEDIT_WEBMAP_DONE", function() {
						handle.remove();
						switchToConfigureOverlay(type);
					});
					topic.publish("ADDEDIT_SHOW_WEBMAP", webmapId);
				}
				// Configuring a webmap not used in the project
				else {
					var handleLoadSuccess, handleLoadFail;

					handleLoadSuccess = topic.subscribe("ADDEDIT_WEBMAP_DONE", function() {
						handleLoadSuccess.remove();
						handleLoadFail.remove();

						switchToConfigureOverlay(type);
					});

					handleLoadFail = topic.subscribe("ADDEDIT_LOAD_WEBMAP_FAIL", function() {
						handleLoadSuccess.remove();
						handleLoadFail.remove();

						updateStatusConfigureButton();
						container.find('.webmap-loading').show().html('<div class="error">' + i18n.viewer.errors.mapLoadingFail + '</div>');

						setTimeout(function(){
							container.find('.webmap-loading').hide();
							container.find('.map-cfg').removeClass("disabled");
						}, 3000);
					});

					topic.publish("ADDEDIT_LOAD_WEBMAP", webmapId);
				}
			}

			function switchToConfigureOverlay(type, media)
			{
				openConfigureCallback();

				MapConfigOverlay.present(
					type,
					media || {}
				).then(
					function(mapConfigResult){
						if ( type == "LOCATION" )
							_mapConfig.extent = mapConfigResult.extent ? mapConfigResult.extent.toJson() : null;
						else if ( type == "CONTENT" )
							_mapConfig.layers = mapConfigResult.layers;
						else if ( type == "POPUP" )
							_mapConfig.popup = mapConfigResult.popup;

						updateStatusConfigureButton();
						closeConfigureCallback();

						container.find('.webmap-loading').hide();
						container.find('.map-cfg').removeClass("disabled");
					}
				);
			}
		};
	}
);
