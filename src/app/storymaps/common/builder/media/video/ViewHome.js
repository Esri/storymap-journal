define(["lib-build/tpl!./ViewHome",
		"lib-build/css!./ViewHome"
	],
	function (
		viewTpl
	){
		return function ViewHome(container, showView)
		{
			container.append(viewTpl({
				lblLink: i18n.commonMedia.mediaSelector.lblLink,
				lblOther: i18n.commonMedia.videoSelectorHome.other,
				thirdPartyTerms: i18n.commonMedia.mediaSelector.thirdPartyTerms,
				youtubeTermsLink: app.cfg.YOUTUBE_TERMS_LINK || '',
				vimeoTermsLink: app.cfg.VIMEO_TERMS_LINK || ''
			}));

			init();

			this.present = function()
			{
				container.show();
			};

			function init()
			{
				container.find('.btn-select-youtube').click(function(){ showView("youtube"); });
				container.find('.btn-select-vimeo').click(function(){ showView("vimeo"); });
				container.find('.btn-select-other').click(function(){ showView("other"); });
			}
		};
	}
);
