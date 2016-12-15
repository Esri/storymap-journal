define(["lib-build/tpl!./Navigate",
		"lib-build/css!./Navigate",
		"lib-build/css!../../Common",
		"dojo/Deferred"],
	function (
		viewTpl,
		viewCss,
		commonCss,
		Deferred
	){
		return function Media(container)
		{
			container.append(viewTpl({
				lblTitle: i18n.commonMedia.editorActions.navigate,
				label: i18n.commonCore.sectionNavigation.section,
				btnOk: i18n.commonCore.common.apply,
				btnCancel: i18n.commonCore.common.cancel,
				btnBack: i18n.commonCore.common.back
			}));

			var _cfg = null,
				_dialogDeferred = null;

			initEvents();

			this.present = function(cfg)
			{
				_cfg = cfg;
				_dialogDeferred = new Deferred();

				container.find('.sections-list-btn')
					.data('value', -1)
					.html(i18n.commonCore.sectionNavigation.select);

				var listHTML = "";
				$.each(app.data.getStorySections(), function(i, section) {
					var title = '',
						optClass = '',
						sectionIsHidden = (section.status||'').toUpperCase() == 'HIDDEN';

					title += (i+1) + ' - ';

					title += $('<div>' + section.title + '</div>').text();

					if (i == app.data.getCurrentSectionIndex()) {
						title += ' (' + i18n.commonCore.sectionNavigation.thisSection + ')';
						optClass = 'disabled';
					}
					else if (i === 0) {
						title += ' (' + i18n.commonCore.sectionNavigation.homeSection + ')';
					}
					else if (sectionIsHidden) {
						title += ' (' + i18n.commonCore.sectionNavigation.hiddenSection + ')';
						optClass = 'disabled';
					}

					listHTML += '<li class="' + optClass + '"><a data-value="' + i + '">' + title + '</a></li>';

					if (cfg.mode == 'edit' && i == cfg.edit.index) {
						if (! sectionIsHidden) {
							container.find('.sections-list-btn')
								.data('value', i)
								.html(title);
						}
					}
				});

				container.find(".sections-list").html(listHTML);

				container.find('.sections-list a').click(function(){
					if ($(this).parent().hasClass("disabled")) {
						return;
					}

					$(this).parents('.btn-group').find('.sections-list-btn')
						.data('value', $(this).data('value'))
						.text($(this).text());
					updateSubmitButton();
				});
				container.find('.dropdown-toggle').dropdown();

				updateSubmitButton();

				container.modal({keyboard: true});
				return _dialogDeferred;
			};

			function updateSubmitButton()
			{
				var data = container.find('.sections-list-btn').data('value');

				container.find(".btnSubmit").attr(
					"disabled",
					data === undefined || data == -1
				);
			}

			function onClickSubmit()
			{
				var hasError = false;

				var postErrorCheck = function()
				{
					_dialogDeferred.resolve({
						id: _cfg.mode == "add" ? "MJ-ACTION-" + Date.now() : null,
						text: _cfg.text,
						index: container.find('.sections-list-btn').data('value')
					});
					container.modal('toggle');
				};

				if ( hasError instanceof Deferred ) {
					hasError.then(function(hasError){
						if ( ! hasError )
							postErrorCheck();
					});
				}
				else if ( ! hasError )
					postErrorCheck();
			}

			function initEvents()
			{
				container.find(".btnSubmit").click(onClickSubmit);
			}

			this.initLocalization = function()
			{
				//
			};
		};
	}
);
