define(["dojo/Deferred"], 
	function(
		Deferred
	){
		return {
			shareFacebook: function (title, subtitle, optionalImageURL, url)
			{
				var options = '&p[title]=' + encodeURIComponent(title)
								+ '&p[summary]=' + subtitle
								+ '&p[url]=' + this.cleanURL(url || document.location.href);
				
				if ( optionalImageURL )
					options += '&p[images][0]=' + encodeURIComponent(optionalImageURL);
				else
					options += '&p[images][0]=' + encodeURIComponent($("meta[property='og:image']").attr("content"));
			
				// Provide multiple images doesn't seems to be supported anymore 
				/*if ($("meta[property='og:image']").attr("content")) {
					options += '&p[images][' + counter + ']=' + encodeURIComponent($("meta[property='og:image']").attr("content"));
					counter++;
				}*/
				
				window.open(
					'http://www.facebook.com/sharer.php?s=100' + options, 
					'', 
					'toolbar=0,status=0,width=626,height=436'
				);
			},
			shareTwitter: function(title, url)
			{
				var options = 'text=' + encodeURIComponent(title)
								+ '&url=' + this.cleanURL(url || document.location.href)
								+ '&related=EsriStoryMaps'
								+ '&hashtags=storymap'; 
			
				window.open(
					'https://twitter.com/intent/tweet?' + options, 
					'', 
					'toolbar=0,status=0,width=626,height=436'
				);
			},
			/*
			shareBitly: function(container, placement, url)
			{
				var sharebitlyindex = container.find(".share_bitly").attr('sharebitlyindex');
				if ( ! sharebitlyindex ) {
					sharebitlyindex = $(".share_bitly[sharebitlyindex]").length + 1;
					container.find(".share_bitly").attr('sharebitlyindex', sharebitlyindex);
				}

				container.find(".share_bitly").popover({
					trigger: 'manual',
					placement: placement ? placement : 'left',
					animation: false,
					html: true,
					content: 
						'<div style="width:155px; min-height: 30px; text-align: center">'
						+ ' <div id="bitlyLoad" style="position:absolute; top: 16px; left: 24px; width:130px; text-align:center;">'
						+ '  <span class="smallLoader"></span>'
						+ ' </div>'
						+ ' <input id="bitlyInput" class="form-control" type="text" value="" style="display:none; height: 28px; width: 150px; margin-bottom: 0px;"/>'
						+ ' <div style="font-size: 0.8em; margin-top: 2px; margin-bottom: -1px; position: absolute; top: 40px; width: 100%; left: 0px; text-align: center;">'
						+ ' </div>'
						+ '</div>'
						+ '<script>'
						+ ' setTimeout(function(){$(document).on("click touchstart", function(src) { if( ! src || ! src.target || ! $(src.target).parents(".popover").length ){ $(".share_bitly[sharebitlyindex=' + (sharebitlyindex) + ']").popover("toggle"); $(document).off("click"); } })}, 100);'
						+ '</script>'
				}).popover('toggle');
				
				this.requestBitly(url).then(function(shortURL){
					$("#bitlyLoad").fadeOut();
					$("#bitlyInput").fadeIn();
					$("#bitlyInput").val(shortURL);
					$("#bitlyInput").select();
				});
			},
			*/
			requestBitly: function (url)
			{
				var bitlyUrls = [
						"http://api.bitly.com/v3/shorten?callback=?", 
						"https://api-ssl.bitly.com/v3/shorten?callback=?"
					],
					bitlyUrl = location.protocol == 'http:' ? bitlyUrls[0] : bitlyUrls[1],
					targetUrl = this.cleanURL(url || document.location.href, true),
					resultDeferred = new Deferred();
				
				$.getJSON(
					bitlyUrl, 
					{ 
						"format": "json",
						"apiKey": app.cfg.HEADER_SOCIAL.bitly.key,
						"login": app.cfg.HEADER_SOCIAL.bitly.login,
						"longUrl": targetUrl
					},
					function(response)
					{
						if( ! response || ! response || ! response.data.url ) 
							resultDeferred.reject();
						else
							resultDeferred.resolve(response.data.url);
					}
				);
				
				return resultDeferred;
			},
			cleanURL: function(url, noEncoding)
			{
				// If sharing in builder mode the link will always open the viewer
				// TODO clean, should get all url parameters, filter edit and rebuild URL
				url = url.replace(/\?edit(=.*)*&/, '?');
				url = url.replace(/\&edit(=.*)*/, '');
				url = url.replace(/\?edit/, '');
				
				return noEncoding ? url : encodeURIComponent(url);
			}
		};
	}
);