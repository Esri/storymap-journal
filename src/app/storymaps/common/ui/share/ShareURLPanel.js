define([
        "lib-build/tpl!./ShareURLPanel",
		"lib-build/css!./ShareURLPanel",
        "../../utils/SocialSharing",
        "dojo/has",
        "lib-app/ZeroClipboard/ZeroClipboard.min"
    ], 
	function (
		viewTpl,
		viewCss,
		SocialSharing,
		has,
		ZeroClipboard
	) {
		return function ShareURLPanel(container)
		{
			container.append(viewTpl({ }));
			
			var _linkField = container.find(".bitlylink");
			
			this.present = function(url)
			{
				buildShortLink(url);
				
				container.find('.btn-bitlylink-copy').html(i18n.viewer.shareFromCommon.copy);
				container.find('.btn-bitlylink-open').html(i18n.viewer.shareFromCommon.open);
				
				// Touch device don't likely have flash...
				container.find('.btn-bitlylink-copy').toggle( ! has("touch") );
			};
			
			this.focus = function()
			{
				_linkField.select();
			};
			
			function buildShortLink(url)
			{
				_linkField.val(url);
				container.find(".btn-bitlylink-open").attr("href", url);
				
				SocialSharing.requestBitly(url).then(function(shortURL){
					_linkField.val(shortURL).select();
				});
				
				//
				// Copy button
				//
				
				ZeroClipboard.config( { swfPath: (app.isProduction ? "resources/lib/" : "lib-app") + "/ZeroClipboard/ZeroClipboard.swf"  } );
				var bitLyCopy = new ZeroClipboard(container.find(".btn-bitlylink-copy"));
				
				bitLyCopy.on("copy", function (event) {
					var clipboard = event.clipboardData;
					clipboard.setData("text/plain", container.find(".bitlylink").val());
					container.find(".btn-bitlylink-copy").html(i18n.viewer.shareFromCommon.copied);
					container.find(".bitlylink").focus();
					setTimeout(function(){
						container.find(".btn-bitlylink-copy").html(i18n.viewer.shareFromCommon.copy);
					}, 4000);
				});
			}
		};
	}
);