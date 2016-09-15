define([
	"lib-build/tpl!./SaveErrorPopupSocial",
	"lib-build/css!./SaveErrorPopupSocial",
	"../utils/CommonHelper",
	"storymaps/tpl/core/WebApplicationData",
	"dojo/Deferred",
	"dojo/i18n!commonResources/nls/core.js?v=" + app.version
	],
	function (
		viewTpl,
		viewCss,
		CommonHelper,
		WebApplicationData,
		Deferred,
		i18n
	) {
		return function SaveErrorPopupSocial(container)
		{
			var _resultDeferred = null;

			container.append(viewTpl({
				title: i18n.commonCore.saveErrorSocial.title,
				panel1: i18n.commonCore.saveErrorSocial.panel1,
				panel2: i18n.commonCore.saveErrorSocial.panel2,
				panel2q1: i18n.commonCore.saveErrorSocial.panel2q1,
				panel2q1tooltip: i18n.commonCore.saveErrorSocial.panel2q1tooltip,
				panel2q2: i18n.commonCore.saveErrorSocial.panel2q2,
				panel3: i18n.commonCore.saveErrorSocial.panel3
					.replace("${MYSTORIES}", '<a href="' + CommonHelper.getMyStoriesURL() + '" target="_blank">' + i18n.commonCore.common.mystories + '</a>'),
				panel4: i18n.commonCore.saveErrorSocial.panel4,
				btnSave: i18n.commonCore.common.save
			}));

			initEvents();

			this.present = function()
			{
				_resultDeferred = new Deferred();

				container.find('.panel1 .help').tooltip({
					title: i18n.commonCore.saveErrorSocial.panel1tooltip + '<img src="resources/tpl/builder/icons/builder-help-social.png"/>',
					html: true,
					placement: 'right'
				});

				container.find('.panel2 .help').tooltip();

				container.modal({ keyboard: false });

				return _resultDeferred;
			};

			function initEvents()
			{
				container.find("input[name='optErrorSocial']").change(function () {
					var value = container.find("input[name='optErrorSocial']:checked").val();
					if ( value == 'story' ) {
						container.find('.stop-asking input')
							.attr('disabled', 'disabled')
							.prop('checked', false);

						container.find('.stop-asking label').addClass('disabled');
					}
					else {
						container.find('.stop-asking input').removeAttr('disabled');
						container.find('.stop-asking label').removeClass('disabled');
					}
				});

				container.find(".btn-primary").click(function(){
					if ( container.find('.stop-asking input').is(':checked') ) {
						WebApplicationData.setDoNotWarnTitle(true);
					}

					_resultDeferred.resolve({
						choice: container.find("input[name='optErrorSocial']:checked").val()
					});
					container.modal('hide');
				});
			}
		};
	}
);
