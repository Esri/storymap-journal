define(["lib-build/tpl!./ViewFlickr",
		"lib-build/css!./ViewFlickr",
		"storymaps/common/utils/connector/Flickr",
		"lib-build/tpl!./ViewFlickrSet"],
	function (
		viewTpl,
		viewCss,
		FlickrConnector,
		viewTplSet
	){
		return function ViewFlickr(container, showView)
		{
			var _flickr = new FlickrConnector(app.cfg.FLICKR_API_KEY);

			container.append(viewTpl({
				fieldUserName: i18n.commonMedia.imageSelectorFlickr.userInputLbl,
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

				var flickrContainer = container.find('.imageSelectorFlickr');

				// Resize url field to adjust localization
				if ( flickrContainer.width() ) {
					var userNameInput = flickrContainer.find('.userName');
					userNameInput.css("width",
						flickrContainer.width()
						- (userNameInput.position().left - flickrContainer.position().left)
						- flickrContainer.find('.btn-userLogin').outerWidth()
						- 30)
						.focus();
				}
			};

			function login()
			{
				var userName = container.find(".userName").val(),
					// TODO params with nbCol
					nbCol = container.parents('.smallSize').length ? 3 : 4;

				activateLoadingIndicator();

				_flickr.connect(userName, true, false).then(
					function(data){
						var setsHTML = "";

						if ( ! data || ! data.sets || ! data.sets.length ) {
							container.find(".loadingMsg").html('');
							container.find(".errorMsg").show().html(i18n.commonMedia.mediaSelector.noData);
							return;
						}

						$.each(data.sets, function(i, set){
							setsHTML += viewTplSet({
								id: set.id,
								thumb: set._thumbnail,
								title: set.title._content,
								nb: set.photos,
								style: (i % nbCol === 0) ? "clear:both" : ""
							});
						});

						container.find(".sets").removeClass("disabled").show().html(setsHTML);
						container.find(".sets").off('click').click(onSelectSet);
						container.find(".loadingMsg").html('<span class="glyphicon glyphicon-ok"></span>');
					},
					function(){
						container.find(".loadingMsg").html('');
						container.find(".errorMsg").show().html(i18n.commonMedia.imageSelectorFlickr.signInMsg2);
					}
				);
			}

			function onSelectSet(evt)
			{
				activateLoadingIndicator();
				container.find(".sets").addClass("disabled");

				_flickr.getPicturesInSet(
					$(evt.target).data('id') || $(evt.target).parents('.set').data('id'),
					{
						per_page: 500 // TODO: Flickr limit is 500 per request. Add paging to display all photos in albums with more than 500 images.
					}
				).then(
					function(data) {
						//var albumTitle = _container.find("#flickrListSet option:selected").text();
						//albumTitle = albumTitle.split(/\ \([0-9]+\)/)[0];

						container.find(".loadingMsg").html("");
						container.find(".sets").removeClass("disabled");

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
						container.find(".sets").html("");
					})
					.keyup(function(e){ e.keyCode == 13 && $(this).val() && login(); });
			}
		};
	}
);
