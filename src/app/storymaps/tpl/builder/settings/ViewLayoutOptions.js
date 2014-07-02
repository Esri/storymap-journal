define(["lib-build/tpl!./ViewLayoutOptions",
		"lib-build/css!./ViewLayoutOptions",
		"dojo/topic", 
		"../../core/WebApplicationData"
	],
	function (
		viewTpl,
		viewCss,
		topic, 
		WebApplicationData
	){
		return function ViewLayoutOptions() 
		{			
			var _this = this,
				_titleContainer = null,
				_contentContainer = null,
				_layout = null,
				_theme = null;
			
			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({
					cfgLeft: i18n.builder.settingsLayoutOptions.cfgLeft,
					cfgRight: i18n.builder.settingsLayoutOptions.cfgRight,
					cfgSmall: i18n.builder.settingsLayoutOptions.cfgSmall,
					cfgMedium: i18n.builder.settingsLayoutOptions.cfgMedium,
					cfgLarge: i18n.builder.settingsLayoutOptions.cfgLarge,
					socialLinksLabel: i18n.builder.settingsLayoutOptions.socialLinksLabel,
					socialLinksDescr: i18n.builder.settingsLayoutOptions.socialLinksDescr.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
				}));
				
				topic.subscribe("SETTINGS_LAYOUT_CHANGE", function(layout){
					_layout = layout;
					updateUI();
					// Reset the position but keep the size
					_contentContainer.find('.btn-position .btn').eq(_layout == "side" ? 0 : 1).click();
				});
				
				topic.subscribe("SETTINGS_THEME_CHANGE", function(theme){
					_theme = theme;
					updateUI();
				});
				
				_contentContainer.find('.btn-position .btn').click(function(){
					_contentContainer.find('.btn-position .btn').removeClass('btn-primary');
					$(this).addClass('btn-primary');
					updateUI();
					triggerEvent();
				});
				
				_contentContainer.find('.btn-size .btn').click(function(){
					_contentContainer.find('.btn-size .btn').removeClass('btn-primary');
					$(this).addClass('btn-primary');
					updateUI();
					triggerEvent();
				});
			};
			
			this.present = function(settings) 
			{	
				_layout = WebApplicationData.getLayoutId();
				_theme = WebApplicationData.getTheme();
				
				_contentContainer.find('[value = "sociallinks"]').prop('checked', settings.socialLinks);
				
				_contentContainer.find('.btn-position .btn[data-value="' + settings.layoutCfg.position + '"]').click();
				_contentContainer.find('.btn-size .btn[data-value="' + settings.layoutCfg.sizeLbl + '"]').click();
				
				updateUI();
			};
			
			this.show = function()
			{
				//
			};
			
			this.save = function()
			{			
				return {
					layoutCfg: {
						size: _contentContainer.find('.btn-size .btn-primary').data('value'),
						position: _contentContainer.find('.btn-position .btn-primary').data('value')
					},
					socialLinks: _contentContainer.find('[value = "sociallinks"]').prop('checked')
				};
			};
			
			function triggerEvent()
			{
				topic.publish("SETTINGS_LAYOUT_OPTIONS_CHANGE", _this.save());
			}
			
			function updateUI()
			{
				if ( ! _layout || ! _theme )
					return;
				
				_contentContainer.find(".thumbnail-position").html(app.appCfg.getLayoutThumnail({ 
					layout: _layout,
					options: _this.save().layoutCfg,
					theme: _theme.colors,
					contentLabel: true
				}));
				
				_contentContainer.find(".thumbnail-size").html(app.appCfg.getLayoutThumnail({ 
					layout: _layout,
					options: _this.save().layoutCfg,
					theme: _theme.colors,
					contentSize: true
				}));
			}
			
			this.initLocalization = function()
			{
				_titleContainer.html(i18n.builder.settingsLayoutOptions.title);
			};
		};
	}
);