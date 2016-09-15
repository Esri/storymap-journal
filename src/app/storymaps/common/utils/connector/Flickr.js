define(["dojo/Deferred", "dojo/_base/lang"], 
	function(Deferred, lang)
	{
		return function Flickr(apiKey)
		{
			var _userId = null;

			if( ! apiKey ){
				console.error("Flickr initialization error - missing apiKey parameter");
				return;
			}

			this.connect = function(userName, requestSet, requestTag)
			{
				var connectDeferred = new Deferred();

				requestSet = requestSet === false ? false : true;
				requestTag = requestTag === false ? false : true;

				request('flickr.people.findByUsername', {username: userName}).done(function(result){
					if( result && result.stat == "ok" ){
						_userId = result.user.id;

						if ( requestSet && requestTag ) {
							$.when(getTags(), getSets()).done(function(tags, sets) {
								connectDeferred.resolve({
									tags: tags[0].who.tags.tag,
									sets: enrichSet(sets[0].photosets.photoset)
								});
							});
						}
						else if ( requestSet ) {
							getSets().then(function(response){
								connectDeferred.resolve({
									sets: enrichSet(response.photosets.photoset)
								});
							});
						}
						else if ( requestTag ) {
							getTags().then(function(response){
								connectDeferred.resolve({
									tags: response.who.tags.tag
								});
							});
						}
						else
							connectDeferred.resolve({});
					}
					else
						connectDeferred.reject();
				});

				return connectDeferred;
			};

			this.getPicturesInSet = function(setId, options)
			{
				return getPictures('flickr.photosets.getPhotos', lang.mixin({photoset_id: setId}, options));
			};

			this.getPicturesByTag = function(tags, options)
			{
				return getPictures('flickr.photos.search', lang.mixin({tags: tags}, options));
			};

			function getTags()
			{
				return request('flickr.tags.getListUser', {user_id: _userId});
			}

			function getSets()
			{
				return request('flickr.photosets.getList', {user_id: _userId});
			}

			function getPictures(method, params)
			{
				var rqDef = new Deferred();

				params.photoSize = params.photoSize || 'b';
				params.thumbSize = params.thumbSize || 'm';

				var searchParams = lang.mixin(
					{
						extras: 'geo,description'
					},
					{
						user_id: _userId
					},
					params
				);

				request(method, searchParams).done(function(result){
					if( ! result || result.stat != "ok" )
						rqDef.reject();

					var response = [],
						photos = [];

					if ( result.photos )
						photos = result.photos.photo;
					else if ( result.photoset )
						photos = result.photoset.photo;

					$.each(photos, function(i, photo) {
						response.push({
							name: photo.title || '',
							description: photo.description ? (photo.description._content || '') : '',
							pic_url: getPhotoURL(photo, params.photoSize),
							thumb_url: getPhotoURL(photo, params.thumbSize),
							lat: photo.latitude || '',
							lng: photo.longitude || '',
							is_video: false
						});
					});

					rqDef.resolve(response);
				});
				return rqDef;
			}

			function enrichSet(sets)
			{
				$.each(sets, function(i, set){
					set._thumbnail = 'https://farm2.static.flickr.com/'
						+ set.server
						+ '/'
						+ set.primary
						+ '_'
						+ set.secret
						+ '_s'
						+ '.jpg';
				});
				return sets;
			}

			function getPhotoURL(photo, size)
			{
				return 'https://farm' + photo.farm + '.static.flickr.com/'
							+ photo.server + '/' + photo.id + '_' + photo.secret
							+ '_' + size + '.jpg';
			}

			function request(method, params)
			{
				// http://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
				var url = 'https://' /*document.location.protocol*/
							+ 'api.flickr.com/services/rest/?method='
							+ method
							+ '&format=json'
							+ '&api_key=' + apiKey
							+ (! params ? '' : '&' + $.param(params))
							+ '&jsoncallback=?';

				return $.getJSON(url);
				/*
				return $.ajax({
					dataType: "json",
					url: url,
					timeout: 4000
				});
				*/
			}
		};
	}
);
