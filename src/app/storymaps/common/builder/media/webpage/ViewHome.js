define(["lib-build/tpl!./ViewHome",
		"lib-build/css!./ViewHome",
		"storymaps/common/utils/CommonHelper"
	],
	function (
		viewTpl,
		viewCss,
		CommonHelper
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
				// Resize url field to adjust localization
				if ( container.find(".webpageSelectorHome").width() ) {
					container.find(".url, .textarea").css("width",
						container.find(".webpageSelectorHome").width()
						- 5
						- container.find('.btn-cfg').outerWidth()
					);
				}

				// Focus the expected field
				container.find(container.find('.textarea').val() ? '.textarea' : '.url').focus();
			};


			function checkError()
			{
				var hasUrl = checkErrorURL(),
					hasEmbed = checkErrorEmbed();

				// TODO url check

				container.find('.error').toggle(hasUrl && hasEmbed).html(i18n.commonMedia.webpageSelectorHome.lblError1);

				return (hasUrl && hasEmbed) || (!hasUrl && !hasEmbed);
			}

			function checkErrorURL()
			{
				var val = container.find('.url').val();
				return !! val;
			}

			function checkErrorEmbed()
			{
				var val = container.find('.textarea').val();
				return !! val;
			}

			function getData()
			{
				if ( checkError() )
					return null;

				// TODO isn't there an issue with updating the ts in edit mode?

				var url = container.find('.url').val(),
					frameTag = container.find('.textarea').val();

				if (url) {
					url = CommonHelper.convertURLHTTPS(url);
				}
				else {
					var node = $(frameTag.trim());

					node.attr('src', CommonHelper.convertURLHTTPS(node.attr('src')));
					frameTag = node.prop('outerHTML').replace(/ xmlns="[^"]*"/, '');
				}

				return {
					url: url,
					frameTag: frameTag
				};
			}

			function onDataUpdate()
			{
				container.find('.btn-cfg-url').attr("disabled", ! checkErrorURL() || checkErrorEmbed());
				container.find('.btn-cfg-embed').attr("disabled", ! checkErrorEmbed() || checkErrorURL());

				checkError();
			}


			function init()
			{
				container.find('.url').bind('input propertychange', onDataUpdate);
				container.find('.textarea').bind('input propertychange', onDataUpdate);

				container.find('.btn-cfg-url').click(function() {
					showView("configure", {
						media: {
							type: "webpage",
							webpage: getData()
						}
					});
				});

				container.find('.btn-cfg-embed').click(function() {
					var embedVal = container.find('.textarea').val().trim();

					if ( ! embedVal.match(/^<iframe.*<\/iframe>$/) || embedVal.match(/<iframe/g).length > 2 ) {
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
