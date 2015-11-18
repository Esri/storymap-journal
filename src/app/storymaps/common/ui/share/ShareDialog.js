define([
        "lib-build/tpl!./ShareDialog",
        "lib-build/css!./ShareDialog",
        "./ShareURLPanel",
        "./ShareEmbedPanel",
        "../../utils/SocialSharing" 
    ],
	function (
		viewTpl,
		viewCss,
		ShareURLPanel,
		ShareEmbedPanel,
		SocialSharing
	) {
		return function ShareDialog(container)
		{
			container.append(viewTpl({ }));
			
			var _shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
				_shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));
			
			container.on('shown.bs.modal', function () {
				_shareURLPanel.focus();
			});
			
			this.present = function(url, socialOptions)
			{
				socialOptions = socialOptions || {
					facebook: false,
					twitter: false
				};
				
				container.find('.social-container').toggle(socialOptions.facebook || socialOptions.twitter);
				createSocialbuttons(socialOptions);
				
				_shareURLPanel.present(url);
				_shareEmbedPanel.present(url);
				
				container.find('.modal-title').html(i18n.viewer.headerFromCommon.share);
				container.find('.embed-title').html(i18n.viewer.shareFromCommon.embed);
				container.find('.btn-close').html(i18n.viewer.common.close);
				
				container.modal({ keyboard:true });
			};
			
			function createSocialbuttons(socialOptions)
			{
				var appTitle = $('<div>' + app.data.getWebAppData().getTitle() + '</div>').text();
				
				container.find(".share_facebook").toggle(socialOptions.facebook);
				if ( socialOptions.facebook ) {
					container.find(".share_facebook").off('click').click(function(){
						SocialSharing.shareFacebook(
							'', 
							'', 
							null, 
							$(this).data('url')
						);
					});
				}
				
				container.find(".share_twitter").toggle(socialOptions.twitter);
				if ( socialOptions.twitter ) {
					container.find(".share_twitter").off('click').click(function(){
						SocialSharing.shareTwitter(
							appTitle, 
							$(this).data('url')
						);
					});
				}
			}
		};
	}
);