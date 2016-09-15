define([
        "esri/arcgis/utils",
        "dojo/Deferred"
	],
	function(
		arcgisUtils,
		Deferred
	){
		function getPortalURL()
		{
			return arcgisUtils.arcgisUrl.split('/sharing/')[0];
		}

		return {
			run: function()
			{
				var result = new Deferred(),
					timer = null;

				app.portal.hasMyStories = null;

				var img = new Image(),
					// In development, My Stories need to be local otherwise it would be cross-domain
					baseUrl = app.isProduction ? (getPortalURL() + '/apps/') : '../';

				//img.src = baseUrl + 'MyStories/assets/images/my-stories/error.png';
				img.src = baseUrl + 'MyStories/assets/my-stories-portal-detector.png';

				img.onload = function(){
					app.portal.hasMyStories = true;
					timer && clearTimeout(timer);
					result.resolve();
				};

				img.onerror = img.onabort = function(){
					app.portal.hasMyStories = false;
					timer && clearTimeout(timer);
					result.reject();
				};

				timer = setTimeout(function(){
					result.reject();
				}, 2000);

				return result;
			}
		};
	}
);
