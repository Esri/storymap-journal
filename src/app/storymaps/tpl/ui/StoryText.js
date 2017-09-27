define(["dojo/topic",
        "esri/layers/GraphicsLayer",
		"esri/graphic",
		"esri/geometry/Point",
		"esri/geometry/ScreenPoint",
		"esri/geometry/Extent",
		"esri/symbols/PictureMarkerSymbol",
		"storymaps/tpl/core/Helper",
        "lib-app/colorbox/jquery.colorbox",
        "lib-build/css!lib-app/colorbox/colorbox"
    ],
	function(
		topic,
		GraphicsLayer,
		Graphic,
		Point,
		ScreenPoint,
		Extent,
		PictureMarkerSymbol //,
		// Helper // TODO: SIZES. probably need tokens.
	){
		var _fullScreenMediaIsOpening = false;

		/*
		 * Prepare all content that come from the rich text editor for display
		 * (section title and content)
		 */
		function prepareEditorContent(str, addTabIndex)
		{
			// Replace &nbsp; by a space space is not the only character of a tag
			//  i.e. <p>&nbsp;<p> or <p class="foo">&nbsp;</p> is not changed but all others &nbsp; are replaced by a space
			var str2 = str.replace(/(?!>)(&nbsp;)(?!<\/)/g, ' ');

			// Add tabindex to not empty elements
			if ( addTabIndex ) {
				str2 = $('<div><div class="content">' + str2 + '</div></div>');
				str2.find('.content > *').each(function(i, elem){
					var $elem = $(elem);
					if (($elem).attr('tabindex')) {
						// remove tabindex from paragraphs
						// (they're stored in the story json)
						var tagName = $elem.prop('tagName');
						if (tagName === 'P' || tagName === 'FIGURE') {
							$elem.removeAttr('tabindex');
						} else {
							// TODO: what other things currently have tabindex???
						}
					}
					// make story actions tabbable by adding a href="#" property
					$elem.find('a[data-storymaps]:not([href])').prop('href', '#');
				});

				return $(str2.html()).html();
			}
			else {
				return str2;
			}
		}

		/*
		 * Prepare story text content for display
		 * All panels have to call that function
		 */

		function prepareSectionPanelContent(contentStr)
		{
			var content = $(contentStr);

			content.find("iframe").each(function(i, frame){
				var $frame = $(frame),
					dataUnload = $frame.attr('data-unload');

				// Don't use .data('src') on purpose (stored memory not persisted when added DOM later)
				$frame
					.attr("data-src", $frame.attr('src'))
					.attr("data-unload", dataUnload === undefined || dataUnload == "true")
					.removeAttr('src');
			});

			return content;
		}

		/*
		 * Load Iframe with source hidden above
		 */

		function loadSectionIframe(container)
		{
			container.find("iframe").each(function(i, node){
				var frame = $(node);
				// Set the iframe only if not already set (i.e. don't reload)
				if ( ! frame.attr('src') )
					frame.attr("src", frame.data('src'));
			});
		}

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
			// Same ratio present in ViewText
			container.find(".iframe-container.fit iframe").attr("height", contentInnerWidth * 9 / 16);
		}

		/*
		 * Create Section panel actions link
		 */

		function createMainMediaActionLink()
		{
			$.each(app.data.getContentActions(), function(i, action){
				var link = $("a[data-storymaps=" + action.id + "]"),
					validAction = true;

				if (action.type == 'navigate' && (action.index == -1 || action.hiddenSection)) {
					validAction = false;

					// In builder and viewer if owner - style the navigate link that point to invalid section differently
					// In viewer when not owner, just disable the link
					var errorClass = app.userCanEdit ? 'navigate-error' : 'navigate-error-silent';
					link.addClass(errorClass);

					if (app.userCanEdit) {
						var label = i18n.viewer.mainStage.errorDeleted;

						if (action.hiddenSection && action.index != -1) {
							label = i18n.viewer.mainStage.errorNotPublished;
						}

						link.tooltip({
							trigger: 'hover',
							placement: 'top',
							container: 'body',
							title: label
						});
					}
				}

				if (validAction) {
					$("a[data-storymaps=" + action.id + "]").off('click').click(function(evt){
						var fromKeyboard = !(evt.screenX || evt.screenY);
						performAction(action, link, fromKeyboard);
					});
				}
			});
			$("#mainStagePanel").find(".backLbl").html(i18n.viewer.mainStage.back);
		}

		/*
		 * Full screen
		 */

		function mediaFullScreen(e)
		{
			var target = $(e.target),
				imgNode = target.is("img") ? target : target.siblings('img'),
				section = target.parents('.section');

			if ( ! (section.hasClass('active') || section.hasClass('swiper-slide-active')) )
				return;

			_fullScreenMediaIsOpening = true;

			// this already has a token on it, since it's already being displayed in the side panel
			var fullscreenHref = imgNode.attr('src');

			// TODO: SIZES

			$.colorbox({
				href: fullscreenHref,
				photo: true,
				title: imgNode.closest('figure').find('figcaption').html() || imgNode.attr('title'),
				scalePhotos: true,
				maxWidth: '90%',
				maxHeight: '90%',
				// restore focus to where we came from (otherwise, focus is completely lost,
				// and the user has to start over again). this will affect non-keyboard nav, and
				// put the default focus ring around the fullscreen button on the image for all users
				onClosed: function() {
					imgNode.siblings('.btn-fullscreen').focus();
					$('body').off('keydown');
				},
				onComplete: function() {
					// trap focus in modal if you try to tab away from the close button
					var closeBtn = $('#cboxClose');
					$('body').on('keydown', function(evt) {
						if (evt.keyCode === 9 && evt.target === closeBtn[0] && !evt.shiftKey) {
							evt.preventDefault();
							evt.stopImmediatePropagation();
						}
					});
				}
			});

			setTimeout(function(){
				_fullScreenMediaIsOpening = false;
			}, 800);
		}

		function createMediaFullScreenButton() // TODO: container? common method with actionLink?
		{
			$(".section img").each(function(i, node){
				var hasWidth = !! $(node).attr('width'),
					floatRight = $(node).css('float') == "right";

				$(node).parent()
					.css('position', 'relative')
					.addClass(hasWidth ? "has-width" : "no-width")
					.addClass(floatRight ? "float-right" : "");
				$(node)
					.wrap("<div class='image-wrapper'></div>");
				if (($(node).parents('#mobileView').length)) {
					$(node).parents('.image-container').removeClass('activate-fullscreen');
				} else {
					$(node).after($('<button class="btn-fullscreen"></button>').click(mediaFullScreen))
					.click(mediaFullScreen);
				}
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

		function createMainStageFocusButton() {

			$('.sections .focus-mainstage').on('click', function(evt) {
				var index = $(this).parents('.section').index();
				if (index !== app.data.getCurrentSectionIndex()) {
					app.ui.mainStage.updateMainMediaWithStoryMainMedia(index);
				}
				var thisMainstage = $('.mainMediaContainer.active');
				thisMainstage.focus();
				onMainstageFocus(thisMainstage, evt.target);
			});
		}

		function onMainstageFocus(mainstage, originator, fromAction) {
			var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
			var focusableEls = mainstage.find(focusableElementsString).filter(':visible');
			var firstTab = focusableEls.eq(0);
			var lastTab = focusableEls.eq(focusableEls.length - 1);
			var backBtn;
			if (fromAction) {
				backBtn = $('.backButton').attr('tabindex', '0');
				backBtn.off('keydown').on('keydown', function(e) {
					if (e.keyCode === 9) {
						e.preventDefault();
						if (e.shiftKey) {
							lastTab.focus();
						} else {
							firstTab.focus();
						}
					} else if (e.keyCode === 27) {
						backBtn.trigger('click');
						backBtn.off('keydown');
					}
				});
			}
			mainstage.on('keydown', function(e) {
				mainstageKeydown.bind(this)(e, focusableEls, firstTab, lastTab, originator, backBtn);
			});

		}

		function mainstageKeydown(e, focusableEls, firstTab, lastTab, originator, backBtn) {
			// on tab, cycle through focusable elements
			if (e.keyCode === 9) {
				if (!lastTab.length || !focusableEls.length) {
					e.preventDefault();
					if (backBtn) {
						backBtn.focus();
					}
					return;
				}
				if (e.target === lastTab[0] && !e.shiftKey) {
					e.preventDefault();
					(backBtn || firstTab).focus();
					return;
				}
				if (e.target === firstTab[0] && e.shiftKey) {
					e.preventDefault();
					(backBtn || lastTab).focus();
					return;
				}
			}
			// on esc, exit mainstage
			if (e.keyCode === 27) {
				if (backBtn) {
					backBtn.trigger('click');
				} else {
					exitMainstage($(this), originator);
				}
			}
		}

		function exitMainstage(mainstage, triggerFromContent) {
			topic.publish('mainstage-exit');
			mainstage.off('keydown');
			$(triggerFromContent).focus();
			$('.backButton').attr('tabindex', '-1');
		}

		/*
		 * Panel action link
		 */

		function performAction(action, link, fromKeyboard)
		{
			var currentMedia = app.data.getCurrentSection() && app.data.getCurrentSection().media,
				currentMediaIsWebmap = currentMedia && currentMedia.type == "webmap",
				currentExtent = currentMediaIsWebmap ? app.map.extent : null,
				currentWebmapId = currentMediaIsWebmap ? currentMedia.webmap.id : null;

			$('.mediaBackContainer').hide();

			var locLayer = app.map && app.map.getLayer("MJActionsLocate");
			if (locLayer) {
				app.map.removeLayer(locLayer);
			}

			if ( action.type == "navigate" ) {
				if (action.index !== undefined) {
					topic.publish('story-navigate-section', action.index);
					if (fromKeyboard) {
						topic.publish('story-focus-section', action.index);
					}
				}
			}
			else if ( action.type == "media" ) {
				var actionIsWebmap = action.media.type == "webmap",
					actionChangeWebmap = currentWebmapId && actionIsWebmap && currentWebmapId != action.media.webmap.id,
					actionChangeExtent = !! (actionIsWebmap && action.media.webmap.extent),
					actionChangeLayers = !! (actionIsWebmap && action.media.webmap.layers),
					actionChangePopup = !! (actionIsWebmap && action.media.webmap.popup);

				topic.publish("story-perform-action-media", action.media);
				var mainstage = $('.mainMediaContainer.active');
				mainstage.focus();
				var currentWebmap = actionIsWebmap ? app.maps[action.media.webmap.id] : null;
				if (actionIsWebmap && !currentWebmap) {
					var handle = topic.subscribe('story-loaded-map', function() {
						handle.remove();
						currentWebmap = app.maps[action.media.webmap.id];
						if (actionChangeExtent && currentWebmap.mapCommand) {
							app.maps[action.media.webmap.id].mapCommand.currentHomeExtent = new Extent(action.media.webmap.extent);
						}

						setTimeout(function() {
							onMainstageFocus(mainstage, link, true);
						}, 500);
					});
				} else {
					if (actionChangeExtent && currentWebmap.mapCommand) {
						app.maps[action.media.webmap.id].mapCommand.currentHomeExtent = new Extent(action.media.webmap.extent);
					}
					onMainstageFocus(mainstage, link, true);
				}

				// If the action is only changing extent on the same map, the next Map Move discard the back button
				// Can't rely on update-end as the Map may fire more than one event depending
				//  on the extent. As of 3.11, zoom far away is ok, but simple pan fire multiple events.
				//  so wait for story-loaded-map which is fired on setExtent.then and after a timeout we can
				//  safely listen for update-end
				/*
				if ( actionChangeExtent && ! actionChangeLayers && ! actionChangePopup && currentWebmapId == action.media.webmap.id ) {
					var handle = topic.subscribe("story-loaded-map", function(){
						handle.remove();

						setTimeout(function(){
							var handle2 = app.map.on("update-end", function(){
								handle2.remove();
								$('.mediaBackContainer').fadeOut().off('click');
							});

							$('.mediaBackContainer').click(function(){
								handle2.remove();
							});
						}, 800);
					});
				}
				*/

				$('.backButton').off('click').click(function() {
					// Was on a webmap and action is not a webmap or different webmap
					// Show back the webmap
					if ( currentMediaIsWebmap && (! actionIsWebmap || currentWebmapId != action.media.webmap.id) ) {
						// app.maps[action.media.webmap.id].mapCommand.currentHomeExtent = new Extent()
						topic.publish("ADDEDIT_SHOW_WEBMAP", currentWebmapId);
					}
					// Was on a webmap and action is the same webmap
					// Manually restore the state
					else if ( currentMediaIsWebmap && actionIsWebmap && currentWebmapId == action.media.webmap.id ) {
						var currentMap = app.maps[currentWebmapId];
						var currentSectionDefineExtent = !! (currentMediaIsWebmap ? currentMedia.webmap.extent : null),
							resetExtent = currentSectionDefineExtent ? new Extent(currentMedia.webmap.extent) : currentMap.response.map._params.extent;

						app.map.setExtent(resetExtent || currentExtent).then(function(){
							app.map.infoWindow.reposition();
						});
						currentMap.mapCommand.currentHomeExtent = resetExtent;

						if ( actionChangePopup )
							app.map.infoWindow.hide();
						// A popup was displayed: the action would have cleared it => restore it (or continue to show the actual)
						//else if ( popupDisplayed )
							//app.map.infoWindow.show(app.map.infoWindow.features);

						// If action define layers: reset to the section default
						if ( actionChangeLayers ) {
							var mapDefault = currentMap.response.itemInfo.itemData.operationalLayers,
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
					exitMainstage(mainstage, link);
				});

				var isRealExtentChange = false;
				if ( actionChangeExtent ) {
					if ( ! currentMediaIsWebmap ) {
						isRealExtentChange = true;
					}
					else {
						isRealExtentChange = JSON.stringify(app.map.extent.toJson()) != JSON.stringify(action.media.webmap.extent);
					}
				}

				if ( actionChangeWebmap || ! actionIsWebmap || ! currentMediaIsWebmap
						|| isRealExtentChange || actionChangeLayers )
					$('.mediaBackContainer')
						.show()
						.css("marginLeft", - $(".mediaBackContainer .backButton").outerWidth() / 2)
						.css("marginRight", - $(".mediaBackContainer .backButton").outerWidth() / 2);

			}
			else if ( action.type == "zoom" ) {
				var pointLayer = null;

				if ( ! currentMediaIsWebmap )
					return;

				// Add a marker
				if ( action.zoom.mapMarker ) {
					pointLayer = app.map.getLayer("MJActionsLocate");

					if (! pointLayer) {
						pointLayer = new GraphicsLayer({
							id: "MJActionsLocate"
						});
						app.map.addLayer(pointLayer);
					}

					pointLayer.add(
						new Graphic(
							new Point(action.zoom.center),
							new PictureMarkerSymbol(app.cfg.SECTION_ACTION_ZOOM_MAP_MARKER, 32, 32) // TODO should also be configurable
						)
					);
				}

				app.map.centerAndZoom(action.zoom.center, app.map.getLevel() != action.zoom.level ? action.zoom.level : null).then(function(){
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

				$('.mediaBackContainer')
					.show()
					.css("marginLeft", - $(".mediaBackContainer .backButton").outerWidth() / 2)
					.css("marginRight", - $(".mediaBackContainer .backButton").outerWidth() / 2);

				$('.backButton').off('click').click(function() {
					if ( pointLayer )
						app.map.removeLayer(pointLayer);

					var currentSectionDefineExtent = !! (currentMediaIsWebmap ? currentMedia.webmap.extent : null),
					resetExtent = currentSectionDefineExtent ? new Extent(currentMedia.webmap.extent) : app.maps[currentWebmapId].response.map._params.extent;

					app.map.setExtent(resetExtent || currentExtent);

					$('.mediaBackContainer').hide();
				});
			}
		}

		return {
			prepareEditorContent: prepareEditorContent,
			createMainMediaActionLink: createMainMediaActionLink,
			createMediaFullScreenButton: createMediaFullScreenButton,
			createMainStageFocusButton: createMainStageFocusButton,
			performAction: performAction,
			styleSectionPanelContent: styleSectionPanelContent,
			prepareSectionPanelContent: prepareSectionPanelContent,
			loadSectionIframe: loadSectionIframe
		};
	}
);
