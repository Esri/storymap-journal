define(["lib-build/tpl!./ViewOther",
		"lib-build/css!./ViewOther"
	], 
	function (
		viewTpl
	){
		return function ViewHome(container) 
		{
			container.append(viewTpl({
				explain: i18n.commonMedia.videoSelectorOther.explain1 
					+ " "
					+ i18n.commonMedia.videoSelectorOther.explain2
						.replace('%WEBPAGE%', '<strong>' + i18n.commonMedia.videoSelectorOther.webpage + '</strong>')
					+ '<div style="width: 100%; text-align: center; margin: 5px 0 15px 0"><div class="media-video-help-embed-dailymotion"></div></div>'
					+ i18n.commonMedia.videoSelectorOther.explain3
						.replace('%WEBPAGE%', '<strong>' + i18n.commonMedia.videoSelectorOther.webpage + '</strong>')
						.replace('%EXAMPLE%', '<a href="http://www.videojs.com/">Video.js</a>')
				})
			);
			
			// TODO should the help link should open website option?
			
			init();
			
			this.present = function()
			{
				container.show();
			};
			
			function init()
			{
				//
			}
		};
	}
);