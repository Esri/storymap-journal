define(["lib-build/tpl!./ViewHome",
		"lib-build/css!./ViewHome",
		"dojo/has"], 
	function (
		viewTpl,
		viewCss,
		has
	){
		return function ViewHome(container, showView) 
		{
			container.append(viewTpl({ }));
			
			init();
			
			this.present = function()
			{
				container.show();	
			};
			
			function init()
			{
				container.find('.btn-select-flickr').click(function(){ showView("flickr"); });
				container.find('.btn-select-fb').click(function(){ showView("facebook"); });
				container.find('.btn-select-picasa').click(function(){ showView("picasa"); });
				container.find('.btn-select-url').click(function(){ 
					showView("configure", { 
						fromService: false 
					}); 
				});
				
				if (!app.cfg.AUTHORIZED_IMPORT_SOURCE.flickr)
					container.find('.btn-select-flickr').addClass("disabled").unbind('click');
				if (!app.cfg.AUTHORIZED_IMPORT_SOURCE.facebook)
					container.find('.btn-select-fb').addClass("disabled").unbind('click');
				if (!app.cfg.AUTHORIZED_IMPORT_SOURCE.picasa)
					container.find('.btn-select-picasa').addClass("disabled").unbind('click');
				/*if (!app.cfg.AUTHORIZED_IMPORT_SOURCE.youtube)
					container.find('.btn-select-youtube').addClass("disabled").unbind('click');
				*/
				
				if (! has("touch") && ! app.cfg.AUTHORIZED_IMPORT_SOURCE.flickr) {
					container.find('.btn-select-flickr').tooltip({
						trigger: 'hover',
						placement: 'top',
						html: true,
						title: i18n.commonCore.common.disabledAdmin,
						container: 'body'
					});
				}
				
				if (!has("touch") && !app.cfg.AUTHORIZED_IMPORT_SOURCE.facebook) {
					container.find('.btn-select-fb').tooltip({
						trigger: 'hover',
						placement: 'top',
						html: true,
						title: i18n.commonCore.common.disabledAdmin,
						container: 'body'
					});
				}
				
				if (!has("touch") && !app.cfg.AUTHORIZED_IMPORT_SOURCE.picasa) {
					container.find('.btn-select-picasa').tooltip({
						trigger: 'hover',
						placement: 'top',
						html: true,
						title: i18n.commonCore.common.disabledAdmin,
						container: 'body'
					});
				}
				
				/*
				if (!has("touch") || !app.cfg.AUTHORIZED_IMPORT_SOURCE.youtube) {
					container.find('.btn-select-youtube').tooltip({
						trigger: 'hover',
						placement: 'top',
						html: true,
						content: app.cfg.AUTHORIZED_IMPORT_SOURCE.youtube ? 'YouTube' : i18n.commonMedia.mediaSelector.disabled,
						container: '.popover-import'
					});
				}
				*/
				
				if (!has("touch")) {
					container.find('.btn-select-url').tooltip({
						trigger: 'hover',
						placement: 'top',
						html: true,
						title: i18n.commonMedia.mediaSelector.url,
						container: 'body'
					});
				}
			}
		};
	}
);