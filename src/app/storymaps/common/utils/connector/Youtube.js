define(["dojo/Deferred"], 
	function(Deferred)
	{
		return function Youtube()
		{
			this.checkVideoUrl = function(url)
			{
				var resultDeferred = new Deferred(),
					urlTest = /(youtube\.com\/(watch\?v\=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.exec(url);
				
				if ( urlTest && urlTest.length == 4 ) {
					var videoId = urlTest[3];
				
					getVideoInfo(videoId).then(
						function(data){
							if ( data )
								resultDeferred.resolve({
									title: data.title,
									description: data.description,
									user: data.uploader,
									thumbUrl: getYoutubeThumbnail(videoId),
									embedUrl: getYoutubeEmbed(videoId),
									viewCount: data.viewCount,
									likeCount: data.likeCount
								});
							else
								resultDeferred.reject();
						},
						function(){
							resultDeferred.reject("NOT_FOUND");
						}
					);
				}
				else
					resultDeferred.reject("INVALID_URL");
			
				return resultDeferred;
			};
			
			function getVideoInfo(videoId)
			{
				var resultDeferred = new Deferred(),
					rqStr = document.location.protocol 
						+ '//gdata.youtube.com/feeds/api/videos/' 
						+ videoId
						+ '?v=2&alt=jsonc';
		
				$.ajax({
					url: rqStr,
					dataType: 'jsonp',
					timeout: 4000
				}).then(
					function(response){
						if ( response && response.data )
							resultDeferred.resolve(response.data);
						else
							resultDeferred.reject();
					},
					function(){
						resultDeferred.reject();
					}
				);
				
				return resultDeferred;
			}
			
			function getYoutubeThumbnail(videoId)
			{
				return "//img.youtube.com/vi/" + videoId + "/default.jpg";
			}
			
			function getYoutubeEmbed(videoId)
			{
				return "//www.youtube.com/embed/" + videoId + "?wmode=opaque";
			}
			
			/*
			this.getUserVideos = function(userId, nbResultMax)
			{
				var resultDeferred = new Deferred();
				var videos = [];
				
				if( ! userId ) {
					resultDeferred.reject();
					return resultDeferred;
				}
								
				// Youtube queries are limited to 50 results
				// Should be made more robust if nbResultMax could be > 99
				
				var nbResultRq1 = nbResultMax > 50 ? 50 : nbResultMax;
				var rqStr = document.location.protocol 
							+ '//gdata.youtube.com/feeds/api/users/' 
							+ userId.replace(' ','')
							+ '/uploads?v=2'
							+ '&alt=jsonc';
				
				$.ajax({
					url: rqStr + '&max-results=' + nbResultRq1,
					dataType: 'jsonp',
					timeout: 4000
				}).then(
					function(response){
						videos = videos.concat(parseResults(response));

						// Do we need to fech more data?
						if ( nbResultRq1 != nbResultMax && response.data && response.data.totalItems > nbResultRq1 ) {
							rqStr += '&max-results=' + (nbResultMax - nbResultRq1) 
									+ '&start-index=' + (nbResultRq1 + 1);
							
							$.ajax({
								url: rqStr,
								dataType: 'jsonp',
								timeout: 4000
							}).then(
								function(response){
									videos = videos.concat(parseResults(response));
									resultDeferred.resolve(videos);
								}
							);
						}
						else
							resultDeferred.resolve(videos);
					},
					function(){
						resultDeferred.reject();
					}
				);

				return resultDeferred;
			};
			
			function parseResults(response)
			{
				var videos = [];
				var data = response && response.data && response.data.items ? response.data.items : [];
						
				$.each(data, function(i, video) {
					var videoURL = video.content ? video.content['5'] : '';
					
					if ( videoURL ) {
						// Using /v/ cause issue on Firefox (opaque mode doesn't work - the placard is hidden)
						videoURL = videoURL.replace('/v/', '/embed/');
						
						videos.push({
							name: video.title || '',
							description: video.description || '',
							pic_url: videoURL,
							thumb_url: video.thumbnail ? video.thumbnail.sqDefault : '',
							lat: video.geoCoordinates ? video.geoCoordinates.latitude : '',
							lng: video.geoCoordinates ? video.geoCoordinates.longitude : '',
							is_video: true
						});
					}
				});
				
				return videos;
			}*/
		};
	}
);