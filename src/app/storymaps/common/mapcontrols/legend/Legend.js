define(["lib-build/tpl!./Legend",
        "lib-build/css!./Legend",
        "lib-build/css!../Common",
        "esri/dijit/Legend",
        "esri/arcgis/utils",
        "dojo/topic"],
	function (viewTpl, viewCss, commonCss, LegendDijit, arcgisUtils, topic) {
		return function Legend(response, container, isInBuilder) 
		{
			var _legend = null,
				_settings = null;
			
			var tplStrings = {
				isInBuilder: isInBuilder,
				title: i18n.viewer.legendFromCommon.title
			};
			
			if ( isInBuilder ) {
				tplStrings.settings = i18n.commonMapControls.common.settings;
				tplStrings.openDefault = i18n.commonMapControls.common.openDefault;
			}
			
			container.append(viewTpl(tplStrings));
			
			this.toggle = function(activate)
			{
				container.toggle(!!activate);
				
				if ( activate && ! _legend )
					display();
				else if ( ! activate )
					destroy();
			};
			
			this.toggleExpanded = function(expanded)
			{
				container.find('.legendContainer').toggleClass("collapsed", ! expanded);
			};
			
			this.setColors = function(appColors)
			{
				container.find(".legendContainer").css({
					backgroundColor: appColors.dotNav,
					color: appColors.text
				});
				
				container.find(".titleBtn").css("color", appColors.softText);
				container.find(".settingsGear, .collapseBtn").css("color", appColors.softBtn);
			};
			
			function display()
			{
				container.find('.legendDijitContainer').html('<div class="legendDijit"></div>');
				_legend = new LegendDijit({ 
					map: response.map,
					layerInfos: arcgisUtils.getLegendLayers(response)
				}, container.find('.legendDijit')[0]);
				_legend.startup();
			}
			
			function destroy()
			{
				if ( _legend ) 
					_legend.destroy();
				_legend = null;
			}
			
			function toggleMinimizedState()
			{
				container.find('.legendContainer').toggleClass("collapsed");
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
							container.find(".content").removeClass("settingsOpen");
						});
					}
					else
						container.off('mouseleave');
					
					container.find(".settingsOverlay").toggle();
					container.find(".content").toggleClass("settingsOpen");
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