define(["lib-build/tpl!./Landing",
		"lib-build/css!./Landing"],
	function (
		viewTpl
	){
		return function Landing(container, addFirstSectionCallback, helpCallback)
		{
			/* NOTE: the quotes probably shouldn't be in here, as `container` is
			 * JUST the #builderLanding, which is the title input and "take a tour" button.
			 * The #builderQuotes container is a sibling of #builderLanding.
			 * But this is so old that I hesitate to move the quotes elsewhere or
			 * change the Landing container to also include the quotes div. Thus the
			 * quotes stay, and their styling is in Landing.css.  -als 2/2018
			 */

			var QUOTES = [
				[
					i18n.builder.landing.quote0,
					"—–J.K. Rowling"
				],
				[
					i18n.builder.landing.quote1,
					"––Robert McKee"
				],
				[
					i18n.builder.landing.quote2,
					"––Michael Margolis"
				],
				[
					i18n.builder.landing.quote3,
					"––Anthony de Mello"
				],
				[
					i18n.builder.landing.quote4,
					"––Annette Simmons"
				],
				[
					i18n.builder.landing.quote5,
					"––Scott Harrison"
				],
				[
					i18n.builder.landing.quote6,
					"––Annette Simmons"
				],
				[
					i18n.builder.landing.quote7,
					"––Barbara Greene"
				],
				[
					i18n.builder.landing.quote8,
					"––Siberian Elder"
				],
				[
					i18n.builder.landing.quote9,
					"––Robert McKee"
				],
				[
					i18n.builder.landing.quote10,
					"––Maya Angelou"
				],
				[
					i18n.builder.landing.quote11,
					"––Brené Brown"
				],
				[
					i18n.builder.landing.quote12,
					"––Howard Gardner"
				],
				[
					i18n.builder.landing.quote13,
					"––Marion Dane Bauer"
				]
			];

			var userItems;

			container.append(viewTpl({
				lblAdd: i18n.builder.landing.lblAdd,
				phAdd: i18n.builder.landing.phAdd,
				lblOR: i18n.builder.landing.lblOR,
				lblHelp: i18n.builder.landing.lblHelp
			}));

			initEvents();

			this.toggle = function(state)
			{
				container.toggle(state);
				$("#builderQuotes").toggle(state);

				if ( ! getTitle() && (app.isGalleryCreation || app.isWebMapCreation) ) {
					container.find(".landing-add-container .add-title")
						.val(app.data.getWebAppItem().title)
						.select();
					onTitleChange();
				}

				if (!userItems && app.portal && app.portal.getPortalUser) {
					app.portal.getPortalUser().getItems().then(function(items) {
						userItems = items;
					});
				}

				focus();
			};

			this.focus = function()
			{
				container.find(".landing-add-container .add-title").focus();
			};

			function getTitle()
			{
				return container.find(".landing-add-container .add-title").val();
			}

			function onTitleChange()
			{
				container.find(".landing-add-container .landing-btn").toggleClass("disabled", ! getTitle());
			}

			function onClickAdd()
			{
				if ( ! $(this).hasClass("disabled") ) {
					// get title. if no title, get me out of here.
					var newTitle = $('.add-title-wrapper input').val().trim();
					if (!newTitle) {
						return;
					}
					var isDuplicate = userItems && _.some(userItems, function(item) {
						return item.title && item.title.toLowerCase() === newTitle.toLowerCase();
					});
					if (isDuplicate && app.data.getWebAppItem().title !== newTitle) {
						$('#saveErrorPopup').modal('show');
						return;
					}
					app.data.getWebAppData().setTitle(newTitle);
					$('.builder-save').removeClass('disabled').trigger('click');
					setTimeout(function() {
						addFirstSectionCallback(getTitle());
					}, 1000);

					// get rid of some popups
					$('#sharePopup').one('show.bs.modal', function(evt) {
						evt.stopImmediatePropagation();
						evt.preventDefault();
					});
					$('#sharePopupError').one('show.bs.modal', function(evt) {
						evt.stopImmediatePropagation();
						evt.preventDefault();
					});
				}
			}

			function initEvents()
			{
				container.find(".landing-add-container .add-title")
					.bind('input propertychange', onTitleChange)
					.keyup(function(e){ e.keyCode == 13 && $(this).val() && container.is(':visible') && onClickAdd(); });
				container.find(".landing-add-container .landing-btn").click(onClickAdd);
				container.find(".landing-tour-container").click(helpCallback);

				var quoteStr = QUOTES[Math.floor(Math.random() * QUOTES.length)].join("<br />");

				$("#builderQuotes").html('<div>' + quoteStr + '</div>');

			}
		};
	}
);
