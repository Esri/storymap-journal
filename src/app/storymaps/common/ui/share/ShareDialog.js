define([
        "lib-build/tpl!./ShareDialog",
        "lib-build/css!./ShareDialog",
        "./ShareURLPanel",
        "./ShareEmbedPanel",
        "../../utils/SocialSharing",
        "../../utils/CommonHelper"
    ],
	function (
		viewTpl,
		viewCss,
		ShareURLPanel,
		ShareEmbedPanel,
		SocialSharing,
		CommonHelper
	) {
		return function ShareDialog(container)
		{
			container.append(viewTpl({}));

			var _shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
				_shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));

			container.on('shown.bs.modal', function () {
				_shareURLPanel.focus();
			});

			container.find('.autoplay-checkbox').change(function(){
				_shareURLPanel.setAutoplay(!! this.checked);
				_shareEmbedPanel.setAutoplay(!! this.checked);
				container.find(".autoplay-notification")
					.html(i18n.viewer.shareFromCommon.linksupdated)
					.fadeIn();

				setTimeout(function(){
					container.find(".autoplay-notification").fadeOut();
				}, 1000);
			});

			container.find('.btn-print').click(function() {
				var win = window.open('resources/tpl/viewer/print/print.html?appid=' + CommonHelper.getAppID(), '_blank');
				win.storyURL = container.find('.bitlylink').val();
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

				container.find('.autoplay-label').html(i18n.viewer.shareFromCommon.autoplayLabel);
				container.find('.autoplay-help').tooltip({
					title: i18n.viewer.shareFromCommon.autoplayExplain1
						+ '<br /><br />'
						+ i18n.viewer.shareFromCommon.autoplayExplain2,
					html: true
				});

				container.find('.autoplay-checkbox').prop("checked", false);

				container.find('.label-print').html(i18n.viewer.shareFromCommon.print);

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
