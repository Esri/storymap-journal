define([
        "lib-build/tpl!./ShareURLPanel",
		"lib-build/css!./ShareURLPanel",
        "../../utils/SocialSharing",
        "dojo/has",
        "lib-app/clipboard/clipboard",
        "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"
    ],
	function (
		viewTpl,
		viewCss,
		SocialSharing,
		has,
		Clipboard
	) {
		return function ShareURLPanel(container)
		{
			container.append(viewTpl({ }));

			var _linkField = container.find(".bitlylink"),
				_url = null;

			initEvents();

			this.present = function(url, selectUrl)
			{
        var canCopy = document.queryCommandSupported('copy');

				_url = SocialSharing.cleanURL(url, true);

				buildShortLink(_url, selectUrl);

				container.find('.btn-bitlylink-open').html(i18n.viewer.shareFromCommon.open);

				// Touch device don't likely have flash...
				container.find('.share-url-container').toggleClass('touch', !canCopy);
				container.find('.share-btn').attr('title', i18n.viewer.shareFromCommon.copy);
				container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
			};

			this.focus = function()
			{
				_linkField.select();
			};

			this.setAutoplay = function(isAutoplay)
			{
				var url = _url;

				if ( isAutoplay ) {
					url += url.match(/\?/) ? '&' : '?';
					url += 'autoplay';
				}

				buildShortLink(url);
			};

			function buildShortLink(url, selectUrl)
			{
				_linkField.val(url);
				container.find(".btn-bitlylink-open").attr("href", url);

				SocialSharing.requestShortUrl(url).then(function(shortURL){
					_linkField.val(shortURL);
					if ( selectUrl === undefined || selectUrl === true ) {
						_linkField.select();
					}
				});

				//
				// Copy button
				//
				//
				var bitLyCopy = new Clipboard(container.find(".share-btn").get(0),{
					text: function() {
						return container.find(".bitlylink").val();
					}
				});

				bitLyCopy.on("success", function () {
					container.find(".share-btn").removeClass('share-clipboard').addClass('share-ok');
					container.find(".share-status").show();
					container.find(".bitlylink")[0].selectionStart = container.find(".bitlylink")[0].selectionEnd = -1;

					container.find(".bitlylink").focus();
					setTimeout(function(){
						container.find(".share-btn").addClass('share-clipboard').removeClass('share-ok');
						container.find(".share-status").hide();
					}, 2000);
				});
			}

			function initEvents()
			{
				container.find(".bitlylink").click(function(){
					this.setSelectionRange(0, this.value.length);
				});
			}
		};
	}
);
