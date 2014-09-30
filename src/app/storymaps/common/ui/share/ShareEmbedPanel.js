define([
        "lib-build/tpl!./ShareEmbedPanel",
		"lib-build/css!./ShareEmbedPanel"
    ], 
	function (
		viewTpl
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
			_url = null;
			
			container.append(viewTpl({ }));
			
			buildEmbedSizeList();
			
			this.present = function(url)
			{
				_url = url;
				
				container.find('.embed-explain').html(i18n.viewer.shareFromCommon.embedExplain);
				container.find('.embed-lbl-size').html(i18n.viewer.shareFromCommon.size);
				
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
			}
		};
	}
);