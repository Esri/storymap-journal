define([
        "./SocialSharing", 
        "../ui/share/ShareDialog"
    ], 
	function(
		SocialSharing,
		ShareDialog
	){
		var _shareDialog = new ShareDialog($("#shareDialog"));
		
		function resizeLinkContainer(container)
		{
			container.find(".linkContainer").css(
				"width",
				// TODO remove that ugly hack (186 is the width of the responsive view header container)
				(container.find(".logoContainer").position()||{ left: 186 }).left
				- container.find(".linkContainer").parent().position().left
				- container.find(".shareBtns").outerWidth() 
				// need a margin if there is a logo
				- ($(".logoContainer").width() > 1 ? 14 : 4)
			);
		}
		
		return {
			setLogo: function(container, headerCfg)
			{
				if ( ! headerCfg.logoURL || headerCfg.logoURL == "NO_LOGO" ) {
					container.find('.logoImg').hide();
					resizeLinkContainer(container);
				}
				else {
					container.find('.logoLink').css("cursor", headerCfg.logoTarget ? "pointer" : "default");
					
					if (headerCfg.logoTarget)
						container.find('.logoLink').attr("href", headerCfg.logoTarget);
					
					resizeLinkContainer(container);
					
					container.find('.logoImg')[0].onload = function(){
						resizeLinkContainer(container);
					};
					container.find('.logoImg')[0].onerror = function(){
						resizeLinkContainer(container);
					};
					
					container.find('.logoImg').attr("src", headerCfg.logoURL).show();
				}
			},
			setLink: function(container, headerCfg)
			{
				if( headerCfg.linkURL && headerCfg.linkText )
					container.find('.linkContainer').html('<a href="' + headerCfg.linkURL + '" class="link" target="_blank" tabindex="-1">' + headerCfg.linkText + '</a>');
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
			initEvents: function(container/*, bitlyPlacement*/)
			{
				container.find(".share_facebook").off('click').click(function(){
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
					var url = $(this).data('url') || document.location.href;
					_shareDialog.present(SocialSharing.cleanURL(url, true));
				});
				
				// Bind keyboard enter to click
				container.find(".shareIcon, .share-all").off('keypress').keypress(function (e) {
					if(e.which == 13) {
						$(this).click();
						return false;  
					}
				});
				
				$(window).resize(function(){
					resizeLinkContainer(container);
				});
			}
		};
	}
);