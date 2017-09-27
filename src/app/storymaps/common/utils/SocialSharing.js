define(["dojo/Deferred", "esri/urlUtils"],
	function(
		Deferred,
		urlUtils
	){
		return {
			shareFacebook: function (title, subtitle, optionalImageURL, url)
			{
				var options = this.cleanURL(url || document.location.href);

				window.open(
					'http://www.facebook.com/sharer/sharer.php?u=' + options,
					'',
					'toolbar=0,status=0,width=626,height=436'
				);
			},
			shareTwitter: function(title, url)
			{
				var options = 'text=' + encodeURIComponent(title)
								+ '&url=' + this.cleanURL(url || document.location.href)
								+ '&related=EsriStoryMaps'
								+ '&hashtags=StoryMaps';

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
			requestShortUrl: function(url) {
				var esriUrlShortener = 'https://arcg.is/prod/shorten?callback=?',
						targetUrl = url || document.location.href,
						resultDeferred = new Deferred();

				$.getJSON(
					esriUrlShortener,
					{
						'longUrl': targetUrl
					},
					function(response) {
						console.log(response);
						if(! response || ! response || ! response.data.url) {
							resultDeferred.reject();
						}
						else {
							resultDeferred.resolve(response.data.url);
						}
					}
				);

				return resultDeferred;
			},

			cleanURL: function(url, noEncoding)
			{
				var urlParams = urlUtils.urlToObject(url);
				var newUrl = urlParams.path;



				if ( urlParams.query ) {
					delete urlParams.query.edit;
					delete urlParams.query.locale;
					delete urlParams.query.folderId;
					delete urlParams.query.webmap;
					delete urlParams.query.autoplay;

					$.each(Object.keys(urlParams.query), function(i, k){
						if ( i === 0 ){
							newUrl += '?';
						}
						else {
							newUrl += '&';
						}

						if ( urlParams.query[k] !== undefined && urlParams.query[k] !== "" ) {
							newUrl += k + '=' + urlParams.query[k];
						}
						else {
							newUrl += k;
						}
					});
				}

				return noEncoding ? newUrl : encodeURIComponent(newUrl);
			}
		};
	}
);
