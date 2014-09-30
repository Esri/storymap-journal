define(["lib-build/tpl!./Overview",
        "lib-build/css!./Overview",
        "lib-build/css!../Common",
        "esri/dijit/OverviewMap",
        "esri/dijit/BasemapGallery",
		"esri/layers/ArcGISTiledMapServiceLayer",
		"esri/arcgis/utils",
		"dojo/Deferred",
		"dojo/dom",
		"dojo/on",
		"dojo/topic"],
	function (
		viewTpl, 
		viewCss,
		commonCss,
		OverviewMap, 
		BasemapGallery,
		ArcGISTiledMapServiceLayer, 
		arcgisUtils,
		Deferred, 
		dom, 
		on, 
		topic
	){
		return function Overview(map, container, isInBuilder) 
		{
			var _overviewMap = null,
				_settings = null,
				_containerColor = null;
				/*_basemapGallery = null,
				_baseLayerUrl = null,
				_initialExpandFactor = null,
				_expandFactor = null,
				_expandFactorChanged = false,
				_recColor = null;*/
			
			var tplStrings = {
				isInBuilder: isInBuilder,
				title: i18n.viewer.overviewFromCommon.title,
				overlayHeader: '',
				basemapGalleryBtnLabel: '',
				expandFactorLabel: ''
			};
			
			if ( isInBuilder ) {
				tplStrings.settings = i18n.commonMapControls.common.settings;
				tplStrings.openDefault = i18n.commonMapControls.common.openDefault;
				tplStrings.basemapGalleryBtnLabel = i18n.commonMapControls.overview.basemapGalleryBtnLabel;
				tplStrings.expandFactorLabel = i18n.commonMapControls.overview.expandFactorLabel;
			}
			
			container.append(viewTpl(tplStrings));
			
			this.toggle = function(activate, appColors)
			{
				container.toggle(!!activate);
				
				if ( activate && ! _overviewMap )
					display(appColors);
				else if ( ! activate )
					destroy();
			};
			
			this.toggleExpanded = function(expanded)
			{
				container.find('.overviewContainer').toggleClass("collapsed", ! expanded);
			};
			
			this.setColors = function(appColors)
			{
				_containerColor = appColors.dotNav;
				
				container.find('.overviewContainer').css({
					backgroundColor: appColors.dotNav,
					color: appColors.text
				});
				
				container.find(".titleBtn").css("color", appColors.softText);
				container.find(".settingsGear, .collapseBtn").css("color", appColors.softBtn);
				
				container.find(".ovwHighlight").css("border", "3px solid " + appColors.dotNav);
			};
			
			function display(appColors)
			{
				container.find('.overviewMapContainer').html('<div class="overviewMap"></div>');
				_overviewMap = new OverviewMap({
					map: map,
					visible: true,
					color: "transparent",
					opacity: 1
					/*expandFactor: _expandFactor*/
				}, container.find('.overviewMap')[0]);
				_overviewMap.startup();
				
				var borderColor = appColors ? appColors.dotNav : _containerColor;
				if ( borderColor )
					container.find(".ovwHighlight").css("border", "3px solid " + borderColor);
			}
			
			function destroy()
			{
				if ( _overviewMap ) 
					_overviewMap.destroy();
				_overviewMap = null;
			}
			
			function toggleMinimizedState()
			{
				container.find('.overviewContainer').toggleClass("collapsed");
				container.find('.settingsOverlay').hide();
			}
			
			function init()
			{
				container.find(".titleBtn").click(toggleMinimizedState);
				container.find(".settingsGear").click(function() {
					if ( ! container.find(".settingsOverlay").is(":visible") ) {
						container.mouseleave(function(){
							container.find(".settingsOverlay").toggle();
							container.off('mouseleave');
						});
					}
					else
						container.off('mouseleave');
					
					container.find(".settingsOverlay").toggle();
				});
				
				container.find('.expandStartup').change(onSettingsChange);
			}
			
			//
			// Builder
			//
			
			this.setSettings = function(settings)
			{
				_settings = settings;
				container.find('.expandStartup').prop('checked', _settings.openByDefault);
			};
			
			function onSettingsChange()
			{
				_settings.openByDefault = container.find('.expandStartup').prop('checked');
				topic.publish("BUILDER_INCREMENT_COUNTER", 1);
			}
			
			init();
		};
	}
);

/*
// TODO
		// create the basemap gallery
		_basemapGallery = new BasemapGallery({
			showArcGISBasemaps:true,
			map:app.map
		}, "basemapGallery");

		// basemap gallery load handler
		on(_basemapGallery, "load", function () {
			var items = $.map(_basemapGallery.basemaps, function (basemap) {
				return {
					id:basemap.itemId,
					title:basemap.title
				};
			});

			// build the drop down list of basemaps
			$.each(items, function (index, item) {
				if (item.id !== "413fd05bbd7342f5991d5ec96f4f8b18" && item.id !== "aab054ab883c4a4094c72e949566ad40" && item.id !== "5d2bfa736f8448b3a1708e1f6be23eed")
					$(".basemaps").append("<li><a data-itemId='" + item.id + "' href='#'>" + item.title + "</a></li>");
			});

			// create and startup the Overview Map
			if (_baseLayerUrl !== "") {
				// user-defined baseLayer
				_overviewMap = new OverviewMap({
					map:app.map,
					visible:true,
					color:_recColor,
					baseLayer:new ArcGISTiledMapServiceLayer(_baseLayerUrl),
					expandFactor:_expandFactor
				}, dom.byId("overviewMap"));
			} else {
				// entering fromScratch (use map's layer)
				_overviewMap = new OverviewMap({
					map:app.map,
					visible:true,
					color:_recColor,
					expandFactor:_expandFactor
				}, dom.byId("overviewMap"));
			}
			_overviewMap.startup();

			// basemap gallery click handler
			$(".basemaps li > a").click(function () {
				var deferred = new Deferred();
				arcgisUtils.getItem($(this).data("itemid")).then(function (response) {
					deferred.resolve(response);
					return deferred;
				}).then(function (value) {
							var tiledMapServices = [];
							$.each(value.itemData.baseMap.baseMapLayers, function (index, item) {
								_baseLayerUrl = item.url;
								tiledMapServices.push(new ArcGISTiledMapServiceLayer(_baseLayerUrl));
							});
							// set the text of the button
							$('.basemapBtn').text(value.itemData.baseMap.title).append(" <span class='caret'></span>");

							rebuildOverviewMapDiv("overviewMap");
							_overviewMap = new OverviewMap({
								map:app.map,
								visible:true,
								color:app.data.getWebAppData().getExtRectColor(),
								baseLayer:tiledMapServices[0],
								expandFactor:_expandFactor
							}, dom.byId("overviewMap"));
							_overviewMap.startup();

							topic.publish("BUILDER_INCREMENT_COUNTER", 1);
							app.data.getWebAppData().setBaseLayerUrl(_baseLayerUrl);
						});
			});
		});

		$('.expandFactorSpinner .btn:first-of-type').on('click', function () {
			$('.expandFactorSpinner input').val(parseInt($('.expandFactorSpinner input').val(), 10) + 1);
			plop(parseInt($('.expandFactorSpinner input').val(), 10));
		});

		$('.expandFactorSpinner .btn:last-of-type').on('click', function () {
			$('.expandFactorSpinner input').val(parseInt($('.expandFactorSpinner input').val(), 10) - 1);
			plop(parseInt($('.expandFactorSpinner input').val(), 10));
		});

	
	} else {
		// Viewer mode
		container.find(".settingsGear").hide();
		if (_baseLayerUrl !== "") {
			// user-defined baseLayer
			_overviewMap = new OverviewMap({
				map:app.map,
				visible:true,
				color:_recColor,
				baseLayer:new ArcGISTiledMapServiceLayer(_baseLayerUrl),
				expandFactor:_expandFactor
			}, dom.byId("overviewMap"));

	container.find(".overviewMapControlMinimizeBtn").on("click", minimizeBtnClickHandler);
	container.find('.locateBtnHelp').popover({
		trigger:'hover',
		placement:'top',
		html:true,
		content:'<script>$(".locateBtnHelp").next(".popover").addClass("expandFactor-popover");</script>' +
				'<div >' + i18n.viewer.overviewMapContainer.expandFactorPopover + '</div>'
	});
};
);
*/