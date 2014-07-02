define(["lib-build/tpl!./ViewLayoutVertical",
		"lib-build/css!./ViewLayoutVertical",
		"lib-build/tpl!./ViewLayoutVerticalItem",
		"dojo/topic"],
	function (viewTpl, viewCss, viewItemTpl, topic) {
		return function ViewLayoutVertical() 
		{
			var _this = this,
				_titleContainer = null,
				_contentContainer = null;
			
			this.init = function(titleContainer, contentContainer, mode)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({
					explain: i18n.commonCore.settingsLayout.explain,
					helpExplain: mode == "init" ? i18n.commonCore.settingsLayout.explainInit : null
				}));
				
				_contentContainer.find('.help').tooltip({placement: 'right'});
			};
			
			this.present = function(settings) 
			{
				var layoutIndex = $.map(app.cfg.LAYOUTS, function(layout){ 
					return layout.id == settings.id; 
				}).indexOf(true);
				
				selectLayout(layoutIndex > 0 ? layoutIndex : 0);
				
				_contentContainer.find('.layout').click(onLayoutChange);
			};
			
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
			
			this.save = function()
			{		
				return {
					id: this.getSelectedLayout()
				};
			};

			this.getSelectedLayout = function()
			{
				return app.cfg.LAYOUTS[_contentContainer.find('.layout.selected').index()].id;
			};
			
			function onLayoutChange()
			{
				selectLayout($(this).index());
				topic.publish("SETTINGS_LAYOUT_CHANGE", _this.getSelectedLayout());
			}
			
			function selectLayout(index)
			{
				_contentContainer.find('.layout').removeClass("selected");
				_contentContainer.find('.layout').eq(index).addClass("selected");
			}
	
			this.initLocalization = function()
			{
				_titleContainer.html(i18n.commonCore.settingsLayout.title);
				
				$.each(app.cfg.LAYOUTS, function(i, layout){
					_contentContainer.find('.layouts').append(viewItemTpl({
						title: layout.title,
						description: layout.description,
						thumbnail: layout.thumbnail
					}));
				});
			};
		};
	}
);