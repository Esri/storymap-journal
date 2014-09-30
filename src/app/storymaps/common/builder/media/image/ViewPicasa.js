define(["lib-build/tpl!./ViewPicasa",
		"lib-build/css!./ViewPicasa",
		"storymaps/common/utils/connector/Picasa", 
		"lib-build/tpl!./ViewPicasaAlbum"],
	function (
		viewTpl,
		viewCss,
		PicasaConnector,
		viewTplSet
	){
		return function ViewFlickr(container, showView) 
		{
			var _picasa = new PicasaConnector(app.cfg.FLICKR_API_KEY);
			
			container.append(viewTpl({
				fieldUserName: i18n.commonMedia.imageSelectorPicasa.userInputLbl,
				btnSearch: i18n.commonMedia.mediaSelector.userLookup
			}));
			
			init();
			
			this.present = function(params)
			{
				if (! params || ! params.isReturning) {
					if( ! container.find(".userName").val() )
						container.find('.btn-userLogin').attr("disabled", "disabled");
				}
				
				container.show();
				
				// Resize url field to adjust localization
				if ( container.find(".imageSelectorPicasa").width() ) {
					container.find(".userName")
						.css("width", 
							container.find(".imageSelectorPicasa").width() 
							- 85
							- 40
							- container.find('.btn-userLogin').outerWidth()
						)
						.focus();
				}
			};
			
			function login()
			{
				var userName = container.find(".userName").val(),
					// TODO params with nbCol
					nbCol = container.parents('.smallSize').length ? 3 : 4; 
				
				activateLoadingIndicator();
				
				_picasa.getAlbums(userName).then(
					function(data){
						var albumsHTML = "";
						
						if ( ! data || ! data.length ) {
							container.find(".loadingMsg").html('');
							container.find(".errorMsg").show().html(i18n.commonMedia.mediaSelector.noData);
							return;
						}
						
						$.each(data, function(i, album){
							albumsHTML += viewTplSet({
								id: album.url,
								thumb: album.thumbnailUrl,
								title: album.title,
								//nb: album.photos,
								style: (i % nbCol === 0) ? "clear:both" : ""
							});
						});
						
						container.find(".albums").removeClass("disabled").show().html(albumsHTML);
						container.find(".albums").off('click').click(onSelectAlbum);
						container.find(".loadingMsg").html('<span class="glyphicon glyphicon-ok"></span>');
					},
					function() {
						container.find(".loadingMsg").html('');
						container.find(".errorMsg").show().html(i18n.commonMedia.imageSelectorPicasa.signInMsg2);
					}
				);
			}
			
			function onSelectAlbum(evt)
			{
				activateLoadingIndicator();
				container.find(".albums").addClass("disabled");
				
				_picasa.getAlbum($(evt.target).parents('.album').data('id'), 200).then(
					function(data){
						container.find(".loadingMsg").html("");
						container.find(".albums").removeClass("disabled");
						
						if( ! data.length )
							return;
						
						showView('picker', { data: data });
					},
					function() {
						container.find(".loadingMsg").html('');
						container.find(".errorMsg").show().html(i18n.commonMedia.imageSelectorFlickr.loadingFailed);
					}
				);
			}
			
			function activateLoadingIndicator()
			{
				container.find(".loadingMsg").html('<span class="smallLoader"></span>');
				container.find(".errorMsg").hide();
			}
			
			function init()
			{
				container.find('.btn-userLogin').click(login);
				container.find(".userName")
					.bind('input propertychange', function(){
						if( $(this).val() )
							container.find('.btn-userLogin').removeAttr("disabled");
						else
							container.find('.btn-userLogin').attr("disabled", "disabled");
						
						container.find(".loadingMsg").html("");
						container.find(".errorMsg").hide();
						container.find(".albums").html("");
					})
					.keyup(function(e){ e.keyCode == 13 && $(this).val() && login(); });
			}
		};
	}
);