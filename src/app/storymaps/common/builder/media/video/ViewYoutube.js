define(["lib-build/tpl!./ViewVideoCommon",
		"lib-build/css!./ViewVideoCommon",
		"storymaps/common/utils/connector/Youtube",
		"lib-build/tpl!./ViewVideoCommonDetail"],
	function (
		viewTpl,
		viewCss,
		YoutubeConnector,
		viewTplDetail
	){
		return function ViewYoutube(container, showView)
		{
			var _youtube = new YoutubeConnector();

			container.append(viewTpl({
				faIcon: 'youtube',
				serviceName: 'YouTube',
				fieldUrl: i18n.commonMedia.videoSelectorYoutube.url + "...",
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

				var videoContainer = container.find('.videoSelectorView');

				// Resize url field to adjust localization
				if ( videoContainer.width() ) {
					var urlInput = videoContainer.find('.url');
					urlInput.css("width",
						videoContainer.width()
						- (urlInput.position().left - videoContainer.position().left)
						- videoContainer.find('.btn-check').outerWidth()
						- 30)
						.focus();
				}
			};

			function check()
			{
				var url = container.find(".url").val(),
					fetchVideoSnippet = ! (app.isPortal && app.cfg.YOUTUBE_DISABLE_ON_PORTAL);

				activateLoadingIndicator();

				_youtube.checkVideoUrl(url, fetchVideoSnippet).then(
					function(data){
						container.find(".loadingMsg").html('<span class="glyphicon glyphicon-ok"></span>');

						container.find(".video-detail-container").fadeIn().html(viewTplDetail({
							fetchVideoSnippet: fetchVideoSnippet,
							thumbUrl: data.thumbUrl,
							title: data.title,
							description: data.description,
							btnSelect: i18n.commonMedia.videoSelectorCommon.select,
							videoNotChecked: i18n.commonMedia.videoSelectorYoutube.videoNotChecked
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
					function(error){
						container.find(".loadingMsg").html('');

						if ( error == "NOT_AUTHORIZED" )
							container.find(".errorMsg").show().html(i18n.commonMedia.videoSelectorYoutube.checkFailedAPI);
						else
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
