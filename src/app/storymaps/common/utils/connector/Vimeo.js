define(["dojo/Deferred"], 
	function(Deferred)
	{
		return function Vimeo()
		{
			this.checkVideoUrl = function(url)
			{
				var resultDeferred = new Deferred(),
					urlTest = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/.exec(url);
				
				if ( urlTest && urlTest.length == 6 ) {
					var videoId = urlTest[5];
				
					getVideoInfo(videoId).then(
						function(data){
							if ( data )
								resultDeferred.resolve({
									title: data.title,
									description: data.description,
									user: data.user_name,
									thumbUrl: data.thumbnail_small,
									embedUrl: getVimeoEmbed(videoId),
									viewCount: data.stats_number_of_plays,
									likeCount: data.stats_number_of_likes
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
					rqStr = '//vimeo.com/api/v2/video/' + videoId + '.json';
		
				$.ajax({
					type:'GET',
					url: rqStr,
					jsonp: 'callback',
					dataType: 'jsonp',
					timeout: 4000
				}).then(
					function(data){
						if( data && data[0] )
							resultDeferred.resolve(data[0]);
						else
							resultDeferred.reject();
					},
					function(){
						resultDeferred.reject();
					}
				);
				
				return resultDeferred;
			}
			
			function getVimeoEmbed(videoId)
			{
				return "//player.vimeo.com/video/" + videoId;
			}
		};
	}
);