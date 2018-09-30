define(["dojo/Deferred"], 
	function(Deferred)
	{
		return function Youtube()
		{
			this.checkVideoUrl = function(url, fetchVideoSnippet)
			{
				var resultDeferred = new Deferred(),
					videoId = getYoutubeId(url);

				if ( ! videoId ) {
					resultDeferred.reject("INVALID_URL");
				}
				else if ( fetchVideoSnippet ){
					getVideoInfo(videoId).then(
						function(data){
							if ( data )
								resultDeferred.resolve({
									title: data.title,
									description: data.description,
									user: data.channelTitle,
									thumbUrl: data.thumbnails['default'].url,
									embedUrl: getYoutubeEmbed(videoId),
									viewCount: null,
									likeCount: null
								});
							else
								resultDeferred.reject();
						},
						function(error){
							if ( error && error.status == 403 )
								resultDeferred.reject("NOT_AUTHORIZED");
							else
								resultDeferred.reject("NOT_FOUND");
						}
					);
				}
				else {
					resultDeferred.resolve({
						title: '',
						description: '',
						user: '',
						thumbUrl: '',
						embedUrl: getYoutubeEmbed(videoId),
						viewCount: null,
						likeCount: null,
						fetchVideoSnippet: false
					});
				}

				return resultDeferred;
			};

			function getVideoInfo(videoId)
			{
				var resultDeferred = new Deferred(),
					rqStr = 'https://www.googleapis.com/youtube/v3/videos'
						+ '?part=snippet'
						+ '&id=' + videoId
						+ '&key=' + app.cfg.YOUTUBE_API_KEY;

				$.ajax({
					dataType: 'json',
					url: rqStr,
					timeout: 4000
				}).then(
					function(response){
						if ( response && response.items && response.items.length )
							resultDeferred.resolve(response.items[0].snippet);
						else
							resultDeferred.reject();
					},
					function(error){
						resultDeferred.reject(error);
					}
				);

				return resultDeferred;
			}

			function getYoutubeId(url)
			{
				var urlTest = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.exec(url);
				return urlTest && urlTest.length == 4 ? urlTest[3] : null;
			}

			function getYoutubeEmbed(videoId)
			{
				return "//www.youtube.com/embed/" + videoId + "?wmode=opaque&rel=0";
			}
		};
	}
);
