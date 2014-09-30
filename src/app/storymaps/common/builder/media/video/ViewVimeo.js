define(["lib-build/tpl!./ViewVideoCommon",
		"lib-build/css!./ViewVideoCommon",
		"storymaps/common/utils/connector/Vimeo", 
		"lib-build/tpl!./ViewVideoCommonDetail"],
	function (
		viewTpl,
		viewCss,
		VimeoConnector,
		viewTplDetail
	){
		return function ViewVimeo(container, showView) 
		{
			var _vimeo = new VimeoConnector();
			
			container.append(viewTpl({
				serviceId: "vimeo",
				fieldUrl: i18n.commonMedia.videoSelectorVimeo.url + "...",
				btnCheck: i18n.commonMedia.videoSelectorCommon.check
			}));
			
			init();
			
			this.present = function(params)
			{
				if (! params || ! params.isReturning) {
					if( ! container.find(".url").val() )
						container.find('.btn-check').attr("disabled", "disabled");
				}
				
				container.show();
				
				// Resize url field to adjust localization
				if ( container.find(".videoSelectorView").width() ) {
					container.find(".url")
						.css("width", 
							container.find(".videoSelectorView").width() 
							- 85
							- 40
							- container.find('.btn-check').outerWidth()
						)
						.focus();
				}
			};
			
			function check()
			{
				var url = container.find(".url").val(); 
				
				activateLoadingIndicator();
				
				_vimeo.checkVideoUrl(url).then(
					function(data){
						container.find(".loadingMsg").html('<span class="glyphicon glyphicon-ok"></span>');
						
						container.find(".video-detail-container").fadeIn().html(viewTplDetail({
							thumbUrl: data.thumbUrl,
							title: data.title,
							description: data.description,
							btnSelect: i18n.commonMedia.videoSelectorCommon.select
						}));
						
						container.find(".btn-select-video").click(function(){
							showView('configure', {
								mode: 'add',
								fromService: true,
								media: {
									name: data.title || '',
									description: data.description || '',
									pic_url: data.embedUrl,
									thumb_url: data.thumbUrl,
									lat: '',
									lng: '',
									is_video: true
								}
							});
						});
					},
					function(){
						container.find(".loadingMsg").html('');
						container.find(".errorMsg").show().html(i18n.commonMedia.videoSelectorCommon.notFound);
					}
				);
			}
			
			function activateLoadingIndicator()
			{
				container.find(".loadingMsg").html('<span class="smallLoader"></span>');
				container.find(".errorMsg").hide();
				container.find('.btn-check').attr("disabled", "disabled");
			}
			
			function init()
			{
				container.find('.btn-check').click(check);
				container.find(".url")
					.bind('input propertychange', function(){
						if( $(this).val() )
							container.find('.btn-check').removeAttr("disabled");
						else
							container.find('.btn-check').attr("disabled", "disabled");
						
						container.find(".loadingMsg").html("");
						container.find(".errorMsg").hide();
						container.find(".video-detail-container").fadeOut().empty();
					})
					.keyup(function(e){ e.keyCode == 13 && $(this).val() && check(); });
			}
		};
	}
);