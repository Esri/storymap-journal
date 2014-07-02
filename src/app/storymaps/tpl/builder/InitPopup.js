define(["lib-build/tpl!./InitPopup",
		"lib-build/css!./InitPopup",
		"storymaps/common/builder/settings/ViewLayoutHorizontal",
		"dojo/Deferred",
		"dojo/topic"], 
	function (
		viewTpl,
		viewCss,
		ViewLayout,
		Deferred,
		topic
	){
		return function InitPopup(container) 
		{
			container.append(viewTpl({
				title: i18n.builder.initPopup.title + '<span class="builder-logo"></span>'
			}));
			
			var _initCompleteDeferred = null,
				_btnPrev = container.find(".btnPrev"),
				_btnNext = container.find(".btnNext"),
				_layoutChangeEventHandler = null,
				_views = {
					home: new ViewLayout()/*,
					storage: new ViewStorage()*/
				};
				
			initEvents();
			
			this.init = function()
			{
				//
			};
			
			this.present = function() 
			{			
				_initCompleteDeferred = new Deferred();
				
				_btnPrev.hide();

				_btnNext.removeAttr("disabled");
				_btnNext.html(i18n.builder.initPopup.nextBtn).show();
				_btnNext.click(showNextView);
				
				_views.home.init($("<div></div>"), container.find(".initPopupViewSettingsLayout"), "init");
				_views.home.initLocalization();
				_views.home.present({});
				
				container.find('.initPopupViewSettingsLayout').show();
				_btnNext.html(i18n.builder.initPopup.startBtn).removeAttr("disabled").removeClass('btn-primary').addClass('btn-success');
				
				container.modal({keyboard: false});
				
				// Has to be centered in JS because of the tooltip that create temporary overflow
				container.find('.navContainer').css('margin-left', Math.floor(- container.find('.navContainer .nav').eq(0).width() / 2));
				// topic.publish("CORE_RESIZE");
				
				_layoutChangeEventHandler = topic.subscribe("SETTINGS_LAYOUT_CHANGE", showNextView);
						
				return _initCompleteDeferred;
			};
			
			function showNextView()
			{
				// TODO
				if ( ! container.find('.step:visible').index() && ! _btnNext.hasClass('btn-success') ) {
					_btnNext.html(i18n.builder.initPopup.startBtn).removeAttr("disabled").removeClass('btn-primary').addClass('btn-success');
					container.find('.tabs-step').eq(1).click();
					return;
				}
				
				_layoutChangeEventHandler.remove();
				
				_initCompleteDeferred.resolve({
					id: _views.home.getSelectedLayout()
				});
				
				$("body").unbind("keydown", enterEvent);
			}
			
			function enterEvent(e)
			{
				e.keyCode == 13 && showNextView();
			}
			
			function initEvents()
			{
				container.find('.tabs-step').click(function(){
					$(this).tab('show');
					container.find('.step').hide().eq($(this).parent().index() ? 1 : 0).show();
					
					// TODO
					if ( $(this).parent().index() )
						_btnNext.html(i18n.builder.initPopup.startBtn).removeAttr("disabled").removeClass('btn-primary').addClass('btn-success');
				});
				
				$("body").bind("keydown", enterEvent);
			}
			
			this.initLocalization = function()
			{
				//
			};
		};
	}
);