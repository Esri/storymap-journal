define(["lib-build/tpl!./ViewLayoutHorizontal",
		"lib-build/css!./ViewLayoutHorizontal",
		"dojo/topic"],
	function (viewTpl, viewCss, topic) {
		return function ViewLayoutHorizontal() 
		{
			var _this = this,
				_titleContainer = null,
				_contentContainer = null,
				_mode = null;
			
			this.init = function(titleContainer, contentContainer, mode)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				_mode = mode;
				
				_titleContainer.html(i18n.commonCore.settingsLayout.title);
				
				_contentContainer.append(viewTpl({
					initMode: mode == "init",
					explain: i18n.commonCore.settingsLayout.explain,
					helpExplain: i18n.commonCore.settingsLayout.explainInit,
					viewExample: i18n.commonCore.settingsLayout.viewExample,
					start: i18n.commonCore.common.start
				}));
				
				$.each(app.cfg.LAYOUTS, function(i, layout){
					_contentContainer.find('.layout-title').eq(i).html(layout.title);
					_contentContainer.find('.layout-description').eq(i).html(layout.description);
					_contentContainer.find('.layout-thumb').eq(i).attr("src", layout.thumbnail);
				});
				
				_contentContainer.find('.help').tooltip({placement: 'right'});
				_contentContainer.find('.layout-live').click(onLayoutPreview);
				_contentContainer.find('.layout').click(onLayoutSelect);
				_contentContainer.find('.btn-start').click(onClickStart);
			};
					
			this.present = function(settings) 
			{
				var layoutIndex = $.map(app.cfg.LAYOUTS, function(layout){ 
					return layout.id == settings.id; 
				}).indexOf(true);
				
				_contentContainer.find('.layouts').removeClass("init-loading");
				
				selectLayout(layoutIndex > 0 ? layoutIndex : 0);

				if ( _mode == "init" ) {
					_contentContainer.find('.layout').addClass('hover');
					_contentContainer.find('.layout').hover(
						function(){
							_contentContainer.find('.layout').removeClass('hover');
							$(this).addClass('hover');
						},
						function(){
							$(this).removeClass('hover');
						}
					);
				}
				
				_contentContainer.find(".layouts").toggleClass("init", _mode == "init");
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
			
			function onLayoutSelect(event)
			{
				var target = $(event.target), 
					index = target.hasClass("layout") ? target.index() : target.parents('.layout').index();
				
				selectLayout(index);
				
				if ( _mode != "init" )
					topic.publish("SETTINGS_LAYOUT_CHANGE", _this.getSelectedLayout());
			}
			
			function selectLayout(index)
			{
				_contentContainer.find('.layout').removeClass("selected");
				_contentContainer.find('.layout').eq(index).addClass("selected");
				_contentContainer.find(".layouts").removeClass("init");
				_contentContainer.find(".btn-start").removeAttr("disabled");
			}
			
			/*
			 * Init only
			 */
			
			function onLayoutPreview(e)
			{
				window.open(
					app.cfg.LAYOUTS[$(this).parents(".layout").index()].liveApp,
					'_blank'
				);
				e.stopPropagation();
			}
			
			function onClickStart()
			{
				topic.publish("SETTINGS_LAYOUT_CHANGE", _this.getSelectedLayout());
			}
			
			this.initLocalization = function()
			{
				//
			};
		};
	}
);