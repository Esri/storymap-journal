define([
	"lib-build/tpl!./SaveErrorPopup",
	"lib-build/css!./SaveErrorPopup",
	"../utils/CommonHelper",
	"dojo/Deferred",
	"dojo/i18n!commonResources/nls/core.js?v=" + app.version
	],
	function (
		viewTpl,
		viewCss,
		CommonHelper,
		Deferred,
		i18n
	) {
		return function SaveErrorPopup(container)
		{
			container.append(viewTpl({
				title: i18n.commonCore.saveError.title,
				content: i18n.commonCore.saveError.err1Div1
					+ "<br /><br />" 
					+ i18n.commonCore.saveError.err1Div2,
				btnOk: i18n.commonCore.saveError.btnOk
			}));
			
			this.present = function()
			{
				var resultDeferred = new Deferred();
				
				container.find('.linkagolroot').attr('href', CommonHelper.getMyContentURL(app.indexCfg.sharingurl));
				
				container.on('hide.bs.modal', function(){
					resultDeferred.resolve();
				});
				
				container.modal({ keyboard:true });
				
				return resultDeferred;
			};
		};
	}
);