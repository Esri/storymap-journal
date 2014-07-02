define(["dojo/topic", 
        "esri/layers/GraphicsLayer",
		"esri/graphic",
		"esri/geometry/Point",
		"esri/geometry/ScreenPoint",
		"esri/symbols/PictureMarkerSymbol",
        "lib-app/colorbox/jquery.colorbox", 
        "lib-build/css!lib-app/colorbox/colorbox"
    ], 
	function(
		topic,
		GraphicsLayer,
		Graphic,
		Point,
		ScreenPoint,
		PictureMarkerSymbol
	){		
		var _fullScreenMediaIsOpening = false; 
	
		/*
		 * Style section content after it has been inserted in the dom
		 */
		
		function styleSectionPanelContent()
		{
			/* TODO floating panel width is approximate has padding is in % */
			
			resizeSectionIframe($("#sidePanel .sections"), $("#sidePanel .sections").width() - 40);
			resizeSectionIframe($("#floatingPanel .sections"), $("#floatingPanel .sections").width() - 34);
			resizeSectionIframe($("#mobileView .swiper-wrapper"), $("#mobileView").width() - 30);
		}
		
		/*
		 * Add an height to iframe that don't have one (fit)
		 */
		function resizeSectionIframe(container, contentInnerWidth)
		{
			container.find(".iframe-container.fit iframe").attr("height", contentInnerWidth * 9 / 16);
		}
		
		/*
		 * Create Section panel actions link 
		 */
		
		function createMainMediaActionLink()
		{
			$.each(app.data.getContentActions(), function(i, action){
				$("a[data-storymaps=" + action.id + "]").off('click').click(function(){
					performAction(action);
				});
			});
			$("#mainStagePanel").find(".backLbl").html(i18n.viewer.mainStage.back);
		}
		
		/*
		 * Full screen
		 */
		
		function mediaFullScreen(e)
		{
			var target = $(e.target),
				imgNode = target.is("img") ? target : target.siblings('img');
			
			_fullScreenMediaIsOpening = true;
			
			$.colorbox({
				href: imgNode.attr('src'),
				photo: true,
				title: imgNode.parents('figure').find('figcaption').html() || imgNode.attr('title'),
				scalePhotos: true, 
				maxWidth: '90%', 
				maxHeight: '90%'
			});
			
			setTimeout(function(){
				_fullScreenMediaIsOpening = false;
			}, 800);
		}
		
		function createMediaFullScreenButton() // TODO: container? common method with actionLink?
		{
			$(".sections img").each(function(i, node){
				var hasWidth = !! $(node).attr('width'),
					floatRight = $(node).css('float') == "right";
				
				$(node).parent()
					.css('position', 'relative')
					.addClass(hasWidth ? "has-width" : "no-width")
					.addClass(floatRight ? "float-right" : "");
				$(node)
					.after($('<span class="btn-fullscreen"></span>').click(mediaFullScreen))
					.click(mediaFullScreen);
			});
			
			$(document)
				.unbind('cbox_complete', onMediaFullScreenClick)
				.bind('cbox_complete', onMediaFullScreenClick);
		}
		
		function onMediaFullScreenClick()
		{
			$('#cboxLoadedContent img').click(function(){
				// Workaround for click delay on touch device 
				if( _fullScreenMediaIsOpening ) 
					return;
				$.colorbox.close();
			});
		}
		
		/*
		 * Panel action link
		 */
		
		function performAction(action)
		{
			var currentMedia = app.data.getCurrentSection() && app.data.getCurrentSection().media,
				currentMediaIsWebmap = currentMedia && currentMedia.type == "webmap",
				currentExtent = currentMediaIsWebmap ? app.map.extent : null,
				currentWebmapId = currentMediaIsWebmap ? currentMedia.webmap.id : null;
			
			$('.mediaBackContainer').hide();
			
			if ( action.type == "media" ) {
				var actionIsWebmap = action.media.type == "webmap",
					actionChangeExtent = !! (actionIsWebmap && action.media.webmap.extent),
					actionChangeLayers = !! (actionIsWebmap && action.media.webmap.layers),
					actionChangePopup = !! (actionIsWebmap && action.media.webmap.popup);
				
				topic.publish("story-perform-action-media", action.media);
				
				if ( actionChangeExtent && ! actionChangeLayers && ! actionChangePopup && currentWebmapId == action.media.webmap.id ) {
					var handle = app.map.on("update-end", function(){
						var handle2 = app.map.on("update-end", function(){
							handle.remove();
							handle2.remove();
							$('.mediaBackContainer').fadeOut().off('click');
						});
						
						$('.mediaBackContainer').click(function(){
							handle.remove();
							handle2.remove();
						});
					});
				}
				
				$('.backButton').off('click').click(function() {
					// Was on a webmap and action is not a webmap or different webmap
					// Show back the webmap
					if ( currentMediaIsWebmap && (! actionIsWebmap || currentWebmapId != action.media.webmap.id) )
						topic.publish("ADDEDIT_SHOW_WEBMAP", currentWebmapId);
					// Was on a webmap anc action is the same webmap
					// Manually restore the state
					else if ( currentMediaIsWebmap && actionIsWebmap && currentWebmapId == action.media.webmap.id ) {
						// If action define extent: Reset to the extent prior clicking the action (not the section default)
						if ( actionChangeExtent || actionChangePopup )
							app.map.setExtent(currentExtent).then(function(){
								app.map.infoWindow.reposition();
							});
						
						if ( actionChangePopup )
							app.map.infoWindow.hide();
						// A popup was displayed: the action would have cleared it => restore it (or continue to show the actual)
						//else if ( popupDisplayed )
							//app.map.infoWindow.show(app.map.infoWindow.features);
						
						// If action define layers: reset to the section default
						if ( actionChangeLayers ) {
							var mapDefault = app.maps[currentWebmapId].response.itemInfo.itemData.operationalLayers,
								sectionDefault = currentMedia.webmap.layers || [];
							
							// Loop through webmap layers and set the visibility
							// The visibility is set to the section definition when defined or to the webmap initial visibility
							$.each(mapDefault, function(i, layer){
								var layerObject = layer.layerObject || (layer.featureCollection ? layer.featureCollection.layers[0].layerObject : null),
									override = $(sectionDefault).filter(function(i, l){ return l.id == layerObject.id; });
								layerObject.setVisibility(override.length ? override[0].visibility : layer.visibility);
							});
						}
					}
					else
						topic.publish("story-perform-action-media", app.data.getCurrentSection().media);	
					
					$('.mediaBackContainer').hide();
				});
				
				// If the action is a popup, that will be decided later in applyPopupConfigurationStep2 
				//  depending on the map context and the geometry of the feature
				if ( ! actionChangePopup )
					$('.mediaBackContainer').show();
			}
			else if ( action.type == "zoom" ) {
				var pointLayer = null;
					
				if ( ! currentMediaIsWebmap )
					return;
				
				// Add a marker
				if ( action.zoom.mapMarker ) {
					pointLayer = new GraphicsLayer();
					pointLayer.add(
						new Graphic(
							new Point(action.zoom.center), 
							new PictureMarkerSymbol(app.cfg.SECTION_ACTION_ZOOM_MAP_MARKER, 32, 32) // TODO should also be configurable
						)
					);
					app.map.addLayer(pointLayer);
				}
				
				app.map.centerAndZoom(action.zoom.center, action.zoom.level).then(function(){
					if ( $("body").hasClass("layout-float") ) {
						var graphicToScreen = app.map.toScreen(pointLayer.graphics[0].geometry),
							compareMeasure = null,
							newCenter = null;
						
						if ( $("body").hasClass("layout-float-right") ){
							compareMeasure = $("#floatingPanel").position().left;
							if ( graphicToScreen.x >= compareMeasure ) {
								newCenter = app.map.toMap(new ScreenPoint(
									app.map.width / 2 + graphicToScreen.x - compareMeasure / 2, 
									$("#floatingPanel").height() / 2
								));
							}
						}
						else if ( $("body").hasClass("layout-float-left") ) {
							compareMeasure = $("#floatingPanel").position().left + $("#floatingPanel").width();
							if ( graphicToScreen.x <= compareMeasure ) {
								newCenter = app.map.toMap(new ScreenPoint(
									app.map.width / 2 - graphicToScreen.x + compareMeasure / 2, 
									$("#floatingPanel").height() / 2
								));
							}
						}
						
						if ( newCenter )
							app.map.centerAt(newCenter);
					}
					
				});
				
				$('.mediaBackContainer').show();
				$('.backButton').off('click').click(function() {
					app.map.setExtent(currentExtent);
					if ( pointLayer )
						app.map.removeLayer(pointLayer);
					$('.mediaBackContainer').hide();
				});
			}
		}
		
		return {
			createMainMediaActionLink: createMainMediaActionLink,
			createMediaFullScreenButton: createMediaFullScreenButton,
			performAction: performAction,
			styleSectionPanelContent: styleSectionPanelContent
		};
	}
);