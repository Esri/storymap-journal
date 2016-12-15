define([
        "lib-build/tpl!./ShareEmbedPanel",
		"lib-build/css!./ShareEmbedPanel",
		"dojo/has",
		"lib-app/clipboard/clipboard",
		"lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"
    ],
	function (
		viewTpl,
		viewCss,
		has,
		Clipboard
	) {
		return function ShareEmbedPanel(container)
		{
			var EMBED_TPL  = '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="no"></iframe>',
			EMBED_SIZE = [
				{
					width: "100%",
					height: "800px"
				},
				{
					width: "100%",
					height: "640px"
				},
				{
					width: "800px",
					height: "600px"
				},
				{
					width: "640px",
					height: "480px"
				}
			],
			_url = null,
			_urlCopy = null;

			container.append(viewTpl({ }));

			buildEmbedSizeList();

			initEvents();

			this.present = function(url)
			{
        var canCopy = document.queryCommandSupported('copy');

				_urlCopy = url;
				_url = url;

				container.find('.embed-explain').html(i18n.viewer.shareFromCommon.embedExplain);
				container.find('.embed-lbl-size').html(i18n.viewer.shareFromCommon.size);

				container.find('.embed-sizes a').eq(0).click();

				// Touch device don't likely have flash...
				container.find('.share-embed-wrapper').toggleClass('touch', !canCopy);
				container.find('.share-clipboard').attr('title', i18n.viewer.shareFromCommon.copy);
				container.find('.share-status').html(i18n.viewer.shareFromCommon.copied);
			};

			this.setAutoplay = function(isAutoplay)
			{
				var url = _urlCopy;
				if ( isAutoplay ) {
					url += url.match(/\?/) ? '&' : '?';
					url += 'autoplay';
				}
				_url = url;
				container.find('.embed-sizes a').eq(0).click();
			};

			function buildEmbedSizeList()
			{
				$.each(EMBED_SIZE, function(i, size){
					container.find('.embed-sizes').append('<li><a data-width="' + size.width + '" data-height="' + size.height + '">' + size.width + ' / ' + size.height + '</a></li>');
				});

				container.find('.embed-sizes a').click(function(){
					var $this = $(this);

					$this.parents('.btn-group').find('.embed-sizes-btn').text($this.text());
					setEmbed($this.data('width'), $this.data('height'));
				});
			}

			function setEmbed(width, height)
			{
				container.find(".embedTextarea").val(
					EMBED_TPL
						.replace("%URL%", _url)
						.replace("%WIDTH%", width)
						.replace("%HEIGHT%", height)
				);

				//
				// Copy button
				//

				var bitLyCopy = new Clipboard(container.find(".share-btn").get(0),{
          text: function() {
            return container.find(".embedTextarea").val();
          }
        });

				bitLyCopy.on("success", function () {
					container.find(".share-btn").removeClass('share-clipboard').addClass('share-ok');
					container.find(".share-status").show();
					container.find(".embedTextarea")[0].selectionStart = container.find(".embedTextarea")[0].selectionEnd = -1;

					container.find(".bitlylink").focus();
					setTimeout(function(){
						container.find(".share-btn").addClass('share-clipboard').removeClass('share-ok');
						container.find(".share-status").hide();
					}, 2000);
				});
			}

			function initEvents()
			{
				container.find(".embedTextarea").click(function(){
					this.setSelectionRange(0, this.value.length);
				});
			}
		};
	}
);
