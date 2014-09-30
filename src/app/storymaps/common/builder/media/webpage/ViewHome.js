define(["lib-build/tpl!./ViewHome",
		"lib-build/css!./ViewHome"
	], 
	function (
		viewTpl
	){
		return function ViewHome(container, showView) 
		{
			container.append(viewTpl({
				lblUrl: i18n.commonMedia.webpageSelectorHome.lblUrl,
				lblEmbed: i18n.commonMedia.webpageSelectorHome.lblEmbed,
				phURL: "http://www.esri.com",
				phEmbed: "<iframe width=&quot;100%&quot; height=&quot;600px&quot; src=&quot;http://...&quot;></iframe>",
				lblOR: i18n.commonMedia.webpageSelectorHome.lblOR,
				btnConfigure: i18n.commonMedia.webpageSelectorHome.configure
			}));
			
			init();
			
			this.present = function(cfg)
			{
				container.show();	
				
				if ( cfg && cfg.mode == "edit" && cfg.media && cfg.media.type == "webpage" ) {
					container.find('.url').val(cfg.media.webpage.url || '');
					container.find('.textarea').val(cfg.media.webpage.frameTag || '');
				}
				else {
					container.find('.url').val('');
					container.find('.textarea').val('');
				}
				
				onDataUpdate();
				this.postDisplay();
			};
			
			this.postDisplay = function()
			{
				// Focus the expected field
				container.find(container.find('.textarea').val() ? '.textarea' : '.url').focus();
			};
			
			
			function checkError()
			{
				var urlVal = container.find('.url').val(),
					embedVal = container.find('.textarea').val();

				// TODO url check
				
				container.find('.error').toggle(!! urlVal && !! embedVal).html(i18n.commonMedia.webpageSelectorHome.lblError1);
				
				return (urlVal && embedVal) || (!urlVal && !embedVal);
			}
			
			function getData()
			{
				if ( checkError() )
					return null;
				
				// TODO isn't there an issue with updating the ts in edit mode?

				return {
					url: container.find('.url').val(),
					frameTag: container.find('.textarea').val()
				};
			}
			
			function onDataUpdate()
			{
				container.find('.btn-cfg-embed').attr("disabled", checkError());
			}
			
			
			function init()
			{
				container.find('.url').bind('input propertychange', onDataUpdate);
				container.find('.textarea').bind('input propertychange', onDataUpdate);
				container.find('.btn-cfg-embed').click(function() {
					var urlVal = container.find('.url').val(),
						embedVal = container.find('.textarea').val();
					
					if ( embedVal && ! urlVal && (! embedVal.match(/^<iframe.*<\/iframe>$/) || embedVal.match(/iframe/g).length > 2) ) {
						container.find('.error')
							.show()
							.html(i18n.commonMedia.webpageSelectorHome.lblError2.replace('%IFRAMETAG%', '"&lt;iframe&gt;"'));
						return;
					}
					
					showView("configure", { 
						media: {
							type: "webpage",
							webpage: getData()
						}
					}); 
				});
			}
		};
	}
);