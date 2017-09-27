define([
        "./SocialSharing",
        "../ui/share/ShareDialog",
        'storymaps/tpl/core/Helper'
    ],
	function(
		SocialSharing,
		ShareDialog,
		Helper
	){
		var _shareDialog = new ShareDialog($("#shareDialog"));

		function resizeLinkContainer(container)
		{

			var linkContainer = container.find('.linkContainer');
			var parentContainer = linkContainer.parent();

			if ( parentContainer.length) {
				var parentLeftPosition;
				if ($('body').hasClass('layout-float-right')) {
					parentLeftPosition = container.width() * 0.09;
				} else if ($('body').hasClass('layout-float-left')) {
					parentLeftPosition = 34 + container.width() * 0.02;
				} else {
					parentLeftPosition = 35;
				}
				parentContainer.css('left', Math.round(parentLeftPosition));

				linkContainer.css({
					// TODO remove that ugly hack (186 is the width of the responsive view header container)
					width: (container.find(".logoContainer").position()||{ left: 186 }).left
						- parentLeftPosition
						- container.find(".shareBtns").outerWidth()
						// need a margin if there is a logo
						- ($(".logoContainer").width() > 1 ? 14 : 4)
				});
			}
		}

		return {
			setLogo: function(container, headerCfg)
			{
				if ( ! headerCfg.logoURL || headerCfg.logoURL == "NO_LOGO" ) {
					container.find('.logoImg').hide();
					resizeLinkContainer(container);
				}
				else {
					var logoLink = container.find('.logoLink');
					if (headerCfg.logoTarget) {
						logoLink.css('cursor', 'pointer')
										.attr('href', headerCfg.logoTarget);
					} else {
						logoLink.css('cursor', 'default')
										.removeAttr('href');
					}

					resizeLinkContainer(container);

					var logoImg = container.find('.logoImg');

					logoImg[0].onload = function(){
						resizeLinkContainer(container);
					};
					logoImg[0].onerror = function(){
						resizeLinkContainer(container);
					};

					logoImg.attr("src", Helper.possiblyAddToken(headerCfg.logoURL)).show();
				}
			},
			setLink: function(container, headerCfg)
			{
				if( headerCfg.linkURL && headerCfg.linkText )
					container.find('.linkContainer').html('<a href="' + headerCfg.linkURL + '" class="link" target="_blank">' + headerCfg.linkText + '</a>');
				else
					container.find('.linkContainer').html(headerCfg.linkText);
			},
			setSocial: function(container, headerCfg)
			{
				var socialCfg = headerCfg.socialBtn;

				container.find(".share_facebook").toggleClass(
					'active',
					app.cfg.HEADER_SOCIAL
					&& app.cfg.HEADER_SOCIAL.facebook
					&& (!socialCfg || socialCfg.facebook)
				);

				container.find(".share_twitter").toggleClass(
					'active',
					app.cfg.HEADER_SOCIAL
					&& app.cfg.HEADER_SOCIAL.twitter
					&& (!socialCfg || socialCfg.twitter)
				);

				container.find(".share_bitly").toggleClass(
					'active',
					app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.bitly
					&& app.cfg.HEADER_SOCIAL.bitly.enable && app.cfg.HEADER_SOCIAL.bitly.login
					&& app.cfg.HEADER_SOCIAL.bitly.key && (!socialCfg || socialCfg.bitly)
				);
			},
			toggleSocialBtnAppSharing: function(container, disable)
			{
				// TODO has to reset the correct title here so if user share the app the "Share on xyz" is present
				if ( disable ) {
					container.find(".shareIcon").attr("title", "");
				}

				container.find(".shareIcon")
					.toggleClass("disabled", !! disable)
					.tooltip(disable ? {
						title: i18n.commonCore ? i18n.commonCore.builderPanel.tooltipNotShared : "",
						container: 'body'
					} : 'destroy');
			},
			disableSocialBtnAppSharingAutoplay: function(container, placement)
			{
				container.find(".shareIcon").attr("title", "");

				container.find(".shareIcon")
					.toggleClass("disabled", true)
					.tooltip({
						title: i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
						container: 'body',
						placement: placement ? placement : 'bottom'
					});
			},
			initEvents: function(container/*, bitlyPlacement*/)
			{
				container.find(".share_facebook").off('click').click(function(){
					if ( $(this).hasClass("disabled") )
						return;

					var title = $('<div>' + app.data.getWebAppData().getTitle() + '</div>').text(),
						subtitle = $('<div>' + app.data.getWebAppData().getSubtitle() + '</div>').text();

					SocialSharing.shareFacebook(
						title,
						subtitle,
						null,
						$(this).data('url')
					);
				});
				container.find(".share_twitter").off('click').click(function(){
					if ( $(this).hasClass("disabled") )
						return;

					var title = $('<div>' + app.data.getWebAppData().getTitle() + '</div>').text();

					SocialSharing.shareTwitter(
						title,
						$(this).data('url')
					);
				});
				/*
				container.find(".share_bitly").off('click').click(function(){
					SocialSharing.shareBitly(
						$(this).parent(),
						bitlyPlacement,
						$(this).data('url')
					);
				});
				*/
				container.find(".share_bitly").off('click').click(function(){
					if ( $(this).hasClass("disabled") )
						return;

					var url = $(this).data('url') || document.location.href;
					_shareDialog.present(SocialSharing.cleanURL(url, true));
				});

				// Bind keyboard enter to click
				container.find(".shareIcon, .share-all").off('keypress').keypress(function (e) {
					if ( $(this).hasClass("disabled") )
						return;

					if(e.which == 13) {
						$(this).click();
						return false;
					}
				});

				container.find('.share_facebook').attr("title", i18n.viewer.headerFromCommon.facebookTooltip);
				container.find('.share_twitter').attr("title", i18n.viewer.headerFromCommon.twitterTooltip);
				container.find('.share_bitly').attr("title", i18n.viewer.headerFromCommon.bitlyTooltip);

				$(window).resize(function(){
					resizeLinkContainer(container);
				});
			}
		};
	}
);
