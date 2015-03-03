define(["lib-build/tpl!./MapConfigOverlay",
		"lib-build/css!./MapConfigOverlay",
		"dojo/i18n!commonResources/nls/webmap.js?v=" + app.version,
		"dojo/i18n!commonResources/nls/media.js?v=" + app.version,
		"lib-app/arcgis-dijit-table-of-contents/js/TableOfContents",
		"lib-build/css!lib-app/arcgis-dijit-table-of-contents/css/TableOfContents",
		"esri/geometry/Extent",
		"dojo/Deferred",
		"dojo/on",
		"dojo/topic",
		"esri/dijit/Geocoder",
		"storymaps/common/utils/CommonHelper",
		"dojo/_base/lang"],
	function (
		viewTpl,
		viewCss,
		i18n,
		i18n2,
		TableOfContents,
		tableOfContentsCss,
		Extent,
		Deferred,
		on,
		topic,
		Geocoder,
		CommonHelper,
		lang
	){
		var container = $('#mainStagePanel'),
			_viewDeferred = null,
			_media = null,
			// Map extent
			_originalMapExtent = null,
			_extentAtOpening = null,
			_sectionDefineExtent = null,
			_extentDefined = null,
			_extentChangeHandle = null,
			_ignoreNextExtentChange = null,
			_geocoder = null,
			// Map layers
			_tableOfContents = null,
			_sectionDefineLayer = null,
			_layersChanged = null,
			_layersInitial = null,
			_layersOpening = null,
			// Popup
			_popupMapHandlers = null;
			
		container.append(viewTpl({
			btnReset: i18n.commonWebmap.configure.btnReset,
			btnCancel: i18n.commonWebmap.configure.btnCancel,
			tocTitle: i18n.commonWebmap.configure.tocTitle,
			tocExplain: i18n.commonWebmap.configure.tocExplain + " " + i18n.commonWebmap.configure.hintNavigation,
			tocSave: i18n.commonWebmap.configure.tocSave,
			tocHint: i18n.commonWebmap.configure.hintNavigation,
			extentTitle: i18n.commonWebmap.configure.extentTitle,
			extentExplain: i18n.commonWebmap.configure.extentExplain,
			extentSave: i18n.commonWebmap.configure.extentSave,
			popupTitle: i18n.commonWebmap.configure.popupTitle,
			popupExplain: i18n.commonWebmap.configure.popupExplain + " " + i18n.commonWebmap.configure.hintNavigation,
			popupSave: i18n.commonWebmap.configure.popupSave
		}));
		
		function present(type, media)
		{
			_viewDeferred = new Deferred();
			
			_media = media;
			
			// Init Map Extent
			_extentDefined = false;
			_ignoreNextExtentChange = false;
			_originalMapExtent = app.map._params.extent;
			_extentAtOpening = app.map.extent; //lang.clone(app.map.extent);
			_sectionDefineExtent = media ? !! media.extent : false;
			_extentChangeHandle = on(app.map, "extent-change", onMapExtentChange);
			// If user click the home button that's a reset and there is no way to know that through the API
			//  (the resulting extent is different from the webmap extent because of lods)
			// TODO could use dojo/aspect
			// - aspect.before(app.map, "setExtent", function(extent){}); => extent is the asked extent
			topic.subscribe("CORE_UPDATE_EXTENT", onResetInitialExtent);
			
			$(".mainMediaContainer.active .mapControls").addClass("hidden");
			//container.find(".toc").addClass("collapsed");
			
			// Init Map TOC
			_layersChanged = false;
			_layersInitial = app.mapItem.itemData.operationalLayers;
			_sectionDefineLayer = media ? !! media.layers : false;
			_layersOpening = getLayersVisibilityOverride();
			presentTableOfContents();
			
			if ( _sectionDefineExtent )
				_extentDefined = JSON.stringify(app.lastExtentSet) != JSON.stringify(media.extent);
			else
				_extentDefined = JSON.stringify(app.lastExtentSet) != JSON.stringify(app.map.mapJournalInitExtent) && JSON.stringify(app.lastExtentSet) != JSON.stringify(_originalMapExtent);
			
			console.log(
				JSON.stringify(app.lastExtentSet) != JSON.stringify(app.map.mapJournalInitExtent), 
				JSON.stringify(app.lastExtentSet) != JSON.stringify(_originalMapExtent), 
				app.lastExtentSet,
				app.map.mapJournalInitExtent,
				_originalMapExtent,
				_sectionDefineExtent,
				_sectionDefineLayer
			);
			
			// Init Bottom panel
			//toggleReset(0, _extentDefined, _sectionDefineExtent && JSON.stringify(app.lastExtentSet) != JSON.stringify(media.webmap.extent), ! _sectionDefineExtent || JSON.stringify(app.lastExtentSet) == JSON.stringify(media.webmap.extent));
			//toggleReset(1, false, ! getLayersVisibilityOverride().length, true);
			
			/*
			container.find(".resetSection").css("visibility", nbSection > 0 ? "visible" : "hidden");
			container.find(".resetWebmap").css("float", nbSection > 0 ? "" : "right");
			container.find(".resetSection").html(mode == "add" ? "Reset to<br />opening value" : "Reset to<br />section value");
			*/
			
			openUI(type);
			
			return _viewDeferred;
		}
		
		function close()
		{
			$(".mainMediaContainer.active .mapControls").removeClass("hidden");
			
			closeUI();
			_extentChangeHandle.remove();
			
			var layers = getLayersVisibilityOverride();

			_viewDeferred.resolve({
				extent: _extentDefined ? app.map.extent  : null,
				layers: layers && layers.length ? layers : null,
				popup: getSelectedFeatureInfo()
			});
		}
		
		/*
		 * Events
		 */
		
		function initEvents()
		{
			container.find(".position .save").click(close);
			container.find(".position .reset").click(onClickResetExtentWebmap);
			container.find(".position .cancel").click(cancelExtent);
			
			container.find(".toc .save").click(close);
			container.find(".toc .reset").click(onClickResetLayerWebmap);
			container.find(".toc .cancel").click(cancelLayers);
			
			/*
			container.find(".toc .expandButton").click(function(){
				container.find(".toc").toggleClass("collapsed");
			});
			*/
			
			container.find(".popup .save").click(close);
			container.find(".popup .reset").click(cancelPopup);
			container.find(".popup .cancel").click(cancelPopup);
		}
		
		/*
		 * Map location
		 */
		
		function onClickResetExtentWebmap()
		{
			app.map.setExtent(_originalMapExtent).then(function(){
				_extentDefined = false;
				//toggleReset(0, _extentDefined, true, ! _sectionDefineExtent);
			});
		}
		
		/*
		function onClickResetExtentSection()
		{
			app.map.setExtent(new Extent(_media.webmap.extent)).then(function(){
				_extentDefined = true;
				toggleReset(0, false, false, true);
			});
		}
		*/
		
		function cancelExtent()
		{
			app.ignoreNextEvent = true;
			_ignoreNextExtentChange = true;
			app.map.setExtent(_extentAtOpening).then(function(){
				_extentDefined = _sectionDefineExtent;
				close();
			});
		}
		
		function onResetInitialExtent()
		{
			_ignoreNextExtentChange = true;
			_extentDefined = false;
			//toggleReset(0, _extentDefined, true);
		}
		
		
		function onMapExtentChange()
		{
			if ( ! _ignoreNextExtentChange ) {
				_extentDefined = true;
				//toggleReset(0, _extentDefined, false, ! _sectionDefineExtent);
			}
			else
				_ignoreNextExtentChange = false;
		}
		
		function initGeocoder()
		{
			if ( _geocoder )
				_geocoder.destroy();
			
			$(".mainMediaContainer.active .geocoder")
				.html('<div class="simpleGeocoder"></div>')
				.show();
			
			var geocoder = new Geocoder(
				lang.mixin(
					{
						map: app.map
					},
					CommonHelper.createGeocoderOptions()
				),
				$(".mainMediaContainer.active .simpleGeocoder")[0]
			);
				
			$(".mainMediaContainer.active .geocoder input").attr("placeholder", i18n2.commonMedia.editorActionGeocode.lblTitle + "...");
			geocoder.startup();
		}
		
		/*
		 * Map layer
		 */
		
		function onClickResetLayerWebmap()
		{
			$.each(_layersInitial, function(i, layer){
				if ( layer.layerObject )
					layer.layerObject.setVisibility(layer.visibility);
				else if ( layer.featureCollection ){
					$.each(layer.featureCollection.layers, function(i, l){
						l.layerObject.setVisibility(layer.visibility);
					});
				}
			});
			
			//toggleReset(1, false, true, ! _sectionDefineLayer || getLayersVisibilityOverride().toString() == _layersOpening.toString());
		}
		
		/*
		function onClickResetLayerSection()
		{
			onClickResetLayerWebmap();
			
			$.each(_layersOpening, function(i, l){
				var layerId = l.id, 
					layer = $.grep(_layersInitial, function(ll) { 
						var lll = ll.featureCollection ? ll.featureCollection.layers[0].id : ll.id;
						return lll == layerId;
					})[0];
				
				if ( ! layer )
					return;
				
				if ( layer.layerObject )
					layer.layerObject.setVisibility(_layersOpening.visibility);
				else if ( layer.featureCollection ){
					$.each(layer.featureCollection.layers, function(i, l){
						l.layerObject.setVisibility(_layersOpening.visibility);
					});
				}
			});
			
			toggleReset(1, false, ! getLayersVisibilityOverride().length, true);
		}
		*/
		
		function cancelLayers()
		{
			$.each(_layersInitial, function(i, layer){
				var layerObject = layer.layerObject || (layer.featureCollection ? layer.featureCollection.layers[0].layerObject : null),
					overrideAtOpening = $(_layersOpening).filter(function(i, l){ return l.id == layerObject.id; }),
					newVisibility = overrideAtOpening.length ? overrideAtOpening[0].visibility : layer.visibility;
				
				if ( layer.layerObject )
					layerObject.setVisibility(newVisibility);
				else {
					$.each(layer.featureCollection.layers, function(i, l){
						l.layerObject.setVisibility(newVisibility);
					});
				}
			});
			close();
		}
		
		function onLayerToggle()
		{
			_layersChanged = getLayersVisibilityOverride().length > 0;
			//toggleReset(1, _layersChanged, ! _layersChanged, ! _media.webmap || ! _media.webmap.layers || ! _media.webmap.layers.length ? true : getLayersVisibilityOverride().toString() == _layersOpening.toString());
		}
		
		function getLayersVisibilityOverride()
		{
			var visibilityOverrides = [];
			
			$.each(_layersInitial, function(i, layer){
				var layerObject = layer.layerObject || (layer.featureCollection ? layer.featureCollection.layers[0].layerObject : null);
				if( layerObject && layer.visibility != layerObject.visible )
					visibilityOverrides.push({
						id: layerObject.id,
						visibility: layerObject.visible
					});
			});

			return visibilityOverrides;
		}
		
		function presentTableOfContents()
		{
			if ( _tableOfContents )
				_tableOfContents.destroy();
			
			container.find(".tocContainer").html('<div class="TableOfContents"></div>');
			
			_tableOfContents = new TableOfContents({
				map: app.map,
				layers: _layersInitial
			}, container.find(".TableOfContents")[0]);
			
			if ( ! _layersInitial || ! _layersInitial.length ) {
				container.find(".TableOfContents").html(
					'<div style="margin-bottom: 10px;">'
					+ i18n.commonWebmap.configure.tocNoData
					+ '</div>'
				);
			}

			on(_tableOfContents, 'toggle', onLayerToggle);
			on(_tableOfContents, 'load', function(){
				container.find(".toc-checkbox").addClass('glyphicon glyphicon-unchecked');
			});
			
			_tableOfContents.startup();
		}
		
		/*
		 * Popup
		 */
		
		function onPopupShow()
		{
			// Should use that to change the status of the save button
		}
		
		function onPopupHide()
		{
			//
		}
		
		function cancelPopup()
		{
			/*
			if ( _media && _media.popup ) {
				
			}
			*/
			app.map.infoWindow.hide();
			app.map.infoWindow.clearFeatures();
			
			close();
		}
		
		function getSelectedFeatureInfo()
		{
			var feature = app.map.infoWindow.getSelectedFeature();
			
			if ( ! feature )
				return null;
			
			/*
			 * The popup's feature is saved through an attribute and it's value
			 * Try to find an object id through type or field name
			 * Default to the first Integer field
			 */
			
			// TODO should have an error message if not found
			
			var layer = feature.getLayer(),
				fields = layer.fields,
				objectIdFields = $.grep(fields, function(field){
					return field.type == "esriFieldTypeOID";
				});
			
			if ( layer && fields && ! objectIdFields.length ) {
				objectIdFields = $.grep(fields, function(field){
					return field.name == "OBJECTID" || field.name == "FID";
				});
				
				if ( ! objectIdFields.length ) {
					objectIdFields = $.grep(fields, function(field){
						return field.type == "esriFieldTypeInteger";
					});
				}
			}
			
			if ( objectIdFields.length ) {
				var fieldName = objectIdFields[0].name;
				return {
					layerId: layer.id,
					fieldName: fieldName,
					fieldValue: feature.attributes[fieldName]
				};
			}
			
			return null;
		}
		
		
		/*
		 * Common
		 */
		
		function openUI(type)
		{
			$("body").addClass("builder-mask");
			$(".panelEditBtn").fadeOut();
			
			if( type == "LOCATION"){
				container.find(".mapConfigOverlay.position").show();
				initGeocoder();
			}
			else if( type == "CONTENT")
				container.find(".mapConfigOverlay.toc").show();
			else if( type == "POPUP"){
				container.find(".mapConfigOverlay.popup").show();
				_popupMapHandlers = [ 
					app.map.infoWindow.on("show", onPopupShow),
					app.map.infoWindow.on("hide", onPopupHide)
				];
			}
			
			if ( type != "LOCATION" ) {
				app.map.disableMapNavigation();
				$(app.map.__container).parent().find(".esriSimpleSliderTL").hide();
			}
		}
		
		function closeUI()
		{
			$("body").removeClass("builder-mask");
			$(".panelEditBtn").fadeIn();
			
			container.find(".mapConfigOverlay").hide();
			app.map.enableMapNavigation();
			$(app.map.__container).parent().find(".esriSimpleSliderTL").show();
			
			$(".mainMediaContainer.active .geocoder").hide();
			
			if ( _popupMapHandlers ) {
				_popupMapHandlers[0].remove();
				_popupMapHandlers[1].remove();
				_popupMapHandlers = null;
			}
		}

		initEvents();
		
		return {			
			present: present
		};
	}
);