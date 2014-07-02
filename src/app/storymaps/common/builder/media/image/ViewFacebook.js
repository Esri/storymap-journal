define(["lib-build/tpl!./ViewFacebook",
		"lib-build/css!./ViewFacebook",
		"storymaps/common/utils/connector/Facebook", 
		"lib-build/tpl!./ViewFacebookAlbum"],
	function (
		viewTpl,
		viewCss,
		FacebookConnector,
		viewTplAlbum
	){
		return function ViewFacebook(container, showView) 
		{
			var _facebook = new FacebookConnector(app.cfg.FACEBOOK_APP_ID);
			
			container.append(viewTpl({ }));
			
			init();
			
			this.present = function(params)
			{
				container.find(".signInMsg").removeClass('error').html("");
				
				if( ! params || ! params.isReturning ) 
					loadApi();
				
				container.show();
			};
			
			function loadApi()
			{
				_facebook.loadApi().then(function(){
					_facebook.onLogout().then(function(){
						container.find(".albums").html("");
						loadApi();
					});
					loadUserAlbums();
				});
			}
			
			function loadUserAlbums()
			{
				var nbCol = container.parents('.smallSize').length ? 3 : 4; 
				
				_facebook.getAlbums({ }).then(function(data){
					var albumsHTML = "";
					
					if ( data && data.length ) {
						$.each(data, function(i, album){
							albumsHTML += viewTplAlbum({
								id: album.id,
								thumb: album.thumbnailUrl || 'https://fbstatic-a.akamaihd.net/rsrc.php/v1/y5/r/npmTejrANDz.jpg',
								title: album.name,
								nb: album.count || 0,
								style: (i % nbCol === 0) ? "clear:both" : ""
							});
						});
					}
					
					container.find(".albums").removeClass("disabled").show().html(albumsHTML);
					container.find(".albums").off('click').click(onSelectAlbum);
				});
			}
			
			function activateLoadingIndicator()
			{
				container.find(".signInMsg").removeClass('error').html('<span class="smallLoader"></span>');
			}
			
			function onSelectAlbum(evt)
			{
				activateLoadingIndicator();
				container.find(".album").addClass("disabled");
				
				_facebook.getAlbum(
					$(evt.target).parents('.album').data('id'),
					true, 
					200
				).then(function(data){
					if( ! data.length ) {
						//updateFooter("error");
						return;
					}
					
					showView('picker', { data: data });
				});
			}
			
			function init()
			{
				//
			}
		};
	}
);