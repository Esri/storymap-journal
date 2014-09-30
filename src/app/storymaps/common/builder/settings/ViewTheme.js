define(["lib-build/tpl!./ViewTheme",
		"lib-build/css!./ViewTheme",
		"dojo/topic"], 
	function (viewTpl, viewCss, topic) {
		return function ViewTheme() 
		{
			var _this = this,
				_titleContainer = null,
				_contentContainer = null,
				_layout = null,
				_layoutCfg = null;
			
			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({ }));
				
				topic.subscribe("SETTINGS_LAYOUT_CHANGE", function(layout){
					_layout = layout;
					_contentContainer.find('.themes').html('');
					renderThemesList();
					topic.publish("SETTINGS_THEME_CHANGE", _this.save());
				});
				
				topic.subscribe("SETTINGS_LAYOUT_OPTIONS_CHANGE", function(layoutOptions){
					_layoutCfg = layoutOptions.layoutCfg;
					renderThemesList();
				});
			};
			
			this.present = function(settings)
			{
				_layout = settings.layout;
				_layoutCfg = settings.layoutCfg;
				renderThemesList(settings.theme ? settings.theme.colors : null);
			};
			
			this.save = function()
			{
				return {
					colors: _contentContainer.find(".layout-thumbnail.selected").data("colors")
				};
			};
			
			function renderThemesList(selectedThemeCfg)
			{
				if ( ! _layout )
					return;
				
				var layoutProp = $.grep(app.cfg.LAYOUTS, function(l){ return l.id == _layout; }),
					themes = layoutProp[0].themes || [],
					selectedTheme = _contentContainer.find('.layout-thumbnail.selected').index(),
					themesHTML = "";

				if ( selectedTheme == -1 )
					selectedTheme = 0;
				
				// Find the selected theme from the colors
				if ( selectedThemeCfg ) {
					$.each(themes, function(index, theme){
						// This doesn't use the theme name as it would break compat with story done prior 06/26/14 
						// But ultimately it should, they would default to the first theme
						if ( selectedThemeCfg.dotNav == theme.dotNav && selectedThemeCfg.panel == theme.panel 
								&& selectedThemeCfg.media == theme.media && selectedThemeCfg.text == theme.text)
							selectedTheme = index;
					});
				}
				
				$.each(themes, function(i, theme){
					themesHTML += app.appCfg.getLayoutThumnail({ 
						layout: _layout,
						theme: theme,
						options: _layoutCfg,
						selected: selectedTheme == i
					});
				});
				
				_contentContainer.find('.themes').html(themesHTML);
				_contentContainer.find('.layout-thumbnail')
					.click(onSelectTheme)
					.eq(selectedTheme).addClass("selected");
			}
			
			function onSelectTheme()
			{
				_contentContainer.find('.layout-thumbnail').removeClass('selected');
				$(this).addClass('selected');
				
				topic.publish("SETTINGS_THEME_CHANGE", _this.save());
			}
			
			/*
			var _tableColor =  null,
				_inputHeaderColor = null,
				_inputMiddleColor = null,
				_inputFooterColor = null;		
			
			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({
					explain: i18n.commonCore.settingsTheme.explain,
					label: i18n.commonCore.settingsTheme.label + ":"
				}));
				
				_tableColor = buildColorTable();
				_inputHeaderColor = _tableColor.find('#inputCustomHeaderColor');
				_inputMiddleColor = _tableColor.find('#inputCustomMiddleColor');
				_inputFooterColor = _tableColor.find('#inputCustomFooterColor');
				
				createColorPalette(_inputHeaderColor);
				createColorPalette(_inputMiddleColor);
				createColorPalette(_inputFooterColor);
				
				_contentContainer.find('#colorScheme .controls').append(_tableColor);
				_inputHeaderColor.spectrum("set", app.cfg.COLORS[0]);	
				_inputMiddleColor.spectrum("set", app.cfg.COLORS[1]);	
				_inputFooterColor.spectrum("set", app.cfg.COLORS[2]);	
				
				_tableColor.find("input[name=groupColorSchemes]").click(onColorSchemeRadioClick);
			};
			
			this.present = function(settings) 
			{
				selectCurrentColorScheme(settings.colors);
				// if the last radio button is selected, that means it is the custom
				// color palette, so we need to initialize the pickers.
				var numRadios = _contentContainer.find("input[name=groupColorSchemes]").length;
				if (_contentContainer.find("input[name=groupColorSchemes]").eq(numRadios - 1).attr('checked') == "checked") {
					_inputHeaderColor.spectrum("set", settings.colors[0]);	
					_inputMiddleColor.spectrum("set", settings.colors[1]);	
					_inputFooterColor.spectrum("set", settings.colors[2]);				
				}
			};
			*/
			
			this.show = function()
			{
				//
			};
			
			this.getTitle = function()
			{
				return _titleContainer;
			};
			
			this.getView = function()
			{
				return _contentContainer;
			};
			
			/*
			this.save = function()
			{		
				var schemeName = getCurrentScheme();
				var colors;
				
				if (schemeName == "schemeCustom") {
					colors = [
						_inputHeaderColor.val(),
						_inputMiddleColor.val(),
						_inputFooterColor.val()
					];
				}
				else {
					var scheme = $.grep(app.cfg.COLOR_SCHEMES, function(n){ return n.name == schemeName; })[0];
					colors = [
						scheme.headerColor,
						scheme.middleColor,
						scheme.footerColor
					];
				}
				
				return {
					colors: colors
				};
			};
	
			function getCurrentScheme() 
			{
				return _contentContainer.find("input[name=groupColorSchemes]:checked").val();
			}
			*/
			
			/*
			function updatePickers()
			{
				if( getSelectedSchemeIndex() == app.cfg.COLOR_SCHEMES.length ) {
					_inputHeaderColor.spectrum("enable");	
					_inputMiddleColor.spectrum("enable");	
					_inputFooterColor.spectrum("enable");
				} 
				else {
					_inputHeaderColor.spectrum("disable");	
					_inputMiddleColor.spectrum("disable");	
					_inputFooterColor.spectrum("disable");
				}
			}
			
			function getSelectedSchemeIndex()
			{
				var index = -1;
				_contentContainer.find(".controls tr td:nth-child(1) input").each(function(i, input){ 
					if( $(input).is(":checked")) 
						index = i;
				});
				return index;
			}
			
			function setSelectedScheme(index)
			{
				_contentContainer.find(".controls tr:nth-child(" + index + ") td:nth-child(1) input").attr("checked", "true");
			}
			
			function createColorPalette(input) 
			{
				input.spectrum({
					showButtons:false,
					color: app.cfg.COLORS[0],
					showPalette:false,
					showSelectionPalette:false,
					showPaletteOnly:false,
					showInput: true
				});
			}
			
			function onColorSchemeRadioClick()
			{
				updatePickers();
				
				// Har link to update the logo tab
				if (getSelectedSchemeIndex() == app.cfg.COLOR_SCHEMES.length) {
					_contentContainer.find("#headerSimulator").css("background-color", $(_inputHeaderColor).val());			
				}
				else {
					var scheme = $.grep(app.cfg.COLOR_SCHEMES,function(n){
						return n.name == getCurrentScheme();
					})[0]; 
					_contentContainer.find("#headerSimulator").css("background-color", scheme.headerColor);
				}
			}
			
			function buildColorTable() 
			{
				if( ! app.cfg.COLOR_SCHEMES )
					return;
				
				var table = $("<table></table>");
				var row;
				
				$.each(app.cfg.COLOR_SCHEMES, function(index, value){
					if( ! value.name || ! value.headerColor || ! value.middleColor || ! value.footerColor )
						return;
					
					row = $("<tr></tr>");
					
					var input = $("<input type='radio' class='radio' name='groupColorSchemes'/>");
					input.attr("value",value.name);
					
					var td = $("<td></td>");
					td.append(input);
					row.append(td);
					row.append("<td><div class='swatch' style='background-color:"+value.headerColor+"'></div></td>");
					row.append("<td><div class='swatch' style='background-color:"+value.middleColor+"'></div></td>");
					row.append("<td><div class='swatch' style='background-color:"+value.footerColor+"'></div></td>");
					
					table.append(row);
				});
		
				row = $("<tr></tr>");
				row.append("<td><input type='radio' class='radio' name='groupColorSchemes' value='schemeCustom'/></td>");
				row.append("<td><input id='inputCustomHeaderColor' class='colorInput' type='custom'/></td>");
				row.append("<td><input id='inputCustomMiddleColor' class='colorInput' type='custom'/></td>");
				row.append("<td><input id='inputCustomFooterColor' class='colorInput' type='custom'/></td>");
				
				table.append(row);
				return table;			
			}
			*/
			
			this.initLocalization = function()
			{
				_titleContainer.html(i18n.commonCore.settingsTheme.title);
			};
		};
	}
);