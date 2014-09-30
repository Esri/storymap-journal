define(["lib-build/tpl!./WebMapSelector",
		"lib-build/css!./WebMapSelector",
		"../../browse-dialog/js/BrowseIdDlg",
		"lib-build/css!../../browse-dialog/css/browse-dialog",
		"lib-build/css!../../browse-dialog/storymaps-override",
		"./MapConfigOverlay",
		"esri/geometry/Extent",
		"dojo/Deferred",
		"dojo/topic",
		"dijit/registry",
		"dojo/on"], 
	function (
		viewTpl,
		viewCss,
		BrowseIdDlg,
		browseDlgCss,
		browseDlgCss2,
		MapConfigOverlay,
		Extent,
		Deferred,
		topic,
		registry,
		on
	){
		return function WebMapSelector(container, openConfigureCallback, closeConfigureCallback, onDataChangeCallback) 
		{
			var _cfg = null,
				_browseDialog = null,
				_mapConfig = null;
			
			container.append(viewTpl({
				lblWebmap: i18n.commonWebmap.selector.lblWebMap,
				lblLocation: i18n.commonWebmap.selector.lblLocation,
				lblContent: i18n.commonWebmap.selector.lblContent,
				lblPopup: i18n.commonWebmap.selector.lblPopup,
				lblControls: i18n.commonWebmap.selector.lblControls,
				lblOverview: i18n.commonWebmap.selector.lblOverview,
				lblLegend: i18n.commonWebmap.selector.lblLegend,
				webmapDefault: i18n.commonWebmap.selector.webmapDefault,
				customCfg: i18n.commonWebmap.selector.customCfg,
				tooltipLocation: i18n.commonWebmap.selector.tooltipLocation,
				tooltipContent: i18n.commonWebmap.selector.tooltipContent,
				tooltipPopup: i18n.commonWebmap.selector.tooltipPopup,
				tooltipOverview: i18n.commonWebmap.selector.tooltipOverview,
				tooltipLegend: i18n.commonWebmap.selector.tooltipLegend,
				mapCfgInvite: i18n.commonWebmap.selector.mapCfgInvite
			}));
			
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
						popup:  cfg.media.webmap.popup
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
					enableLegend = false;

				if ( mediaIsWebmap ) {
					enableOverview = cfg.media.webmap.overview ? cfg.media.webmap.overview.enable : false;
					enableLegend   = cfg.media.webmap.legend   ? cfg.media.webmap.legend.enable   : false;
				}
				
				container.find('.opt-checkbox-overview').prop('checked', enableOverview);
				container.find('.opt-checkbox-legend').prop('checked', enableLegend);
				
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
						openByDefault: true
					},
					legend: {
						enable: container.find('.opt-checkbox-legend').prop('checked'),
						openByDefault: false
					}
				};
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
							usage += i18n.commonWebmap.selector.action + " " + webmap.actions[0];
						else
							usage += i18n.commonWebmap.selector.sections + " " + webmap.actions.join(', ');
					}
					
					if ( ! webmap.sections && ! webmap.actions ) {
						usage = i18n.commonWebmap.selector.originalWebmap.replace("%TPL_NAME%", app.cfg.TPL_NAME);
					}

					addWebMapListItem('', webmap.id, title, usage, sharing);
				});
				
				addWebMapListItem('action-btn browse-webmap', '', i18n.commonWebmap.selector.browseMaps, app.portal.portalName);
				
				if ( currentMap ) {
					container.find('.webmaps-list-btn-inner')
						.data('webmap', currentMap)
						.html('<span class="title">' + app.data.getWebmapTitle(currentMap) + '</span><span class="info">' + i18n.commonWebmap.selector.current + '</span>');
					container.find('.selected-map-sharing-status').html(app.data.getWebmapSharing(currentMap));
				}
				else
					container.find('.webmaps-list-btn-inner').html(i18n.commonWebmap.selector.select);
				
				
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
			}
			
			function addWebMapListItem(cssClass, webmap, title, info, status)
			{
				container.find('.webmaps-list').append(
					'<li class="' + cssClass + '">'
					+  '<a href="#">'
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
						container.find('.webmaps-list-btn-inner')
							.data('webmap', _browseDialog.get("selected").id)
							.html(
								'<span class="title">' 
								+ _browseDialog.get("selected").title
								+ '</span>'
								+ '<span class="info">' + i18n.commonWebmap.selector.newMap + '</span>'
							);
						container.find('.selected-map-sharing-status').html(_browseDialog.get("selected").access);
						// Reset Map Config
						_mapConfig = {};
						updateStatusConfigureButton();
					}
				});
			}
			
			function initEvents()
			{
				container.find('.help').tooltip();
				
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
				
				if ( getSelectedWebmap() )
					container.find('.map-cfg-row').show();
				
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
				
				if ( isCurrentSectionWebmapSelected() ) {
					/*
					if ( _cfg.mode == "edit" && _mapConfig.extent )
						app.map.setExtent(new Extent(_mapConfig.extent)).then(function(){
							switchToConfigureOverlay(type, _cfg.media);
						});
					else
					*/
					switchToConfigureOverlay(type, _mapConfig);
				}
				// Configuring a webmap already used in the project
				else if ( $.inArray(webmapId, _cfg.webmaps) != -1 ) {
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