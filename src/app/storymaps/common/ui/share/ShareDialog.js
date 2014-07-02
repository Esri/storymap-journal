define([
        "lib-build/tpl!./ShareDialog",
        "lib-build/css!./ShareDialog",
        "./ShareURLPanel",
        "./ShareEmbedPanel"
    ],
	function (
		viewTpl,
		viewCss,
		ShareURLPanel,
		ShareEmbedPanel
	) {
		return function ShareDialog(container)
		{
			container.append(viewTpl({ }));
			
			var _shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
				_shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));
			
			container.on('shown.bs.modal', function () {
				_shareURLPanel.focus();
			});
			
			this.present = function(url)
			{
				_shareURLPanel.present(url);
				_shareEmbedPanel.present(url);
				
				container.find('.modal-title').html(i18n.viewer.headerFromCommon.share);
				container.find('.embed-title').html(i18n.viewer.shareFromCommon.embed);
				container.find('.btn-close').html(i18n.viewer.common.close);
				
				container.modal({ keyboard:true });
			};
		};
	}
);