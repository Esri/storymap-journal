define([
		"lib-build/tpl!./SharePopupError",
		"lib-build/css!./SharePopupError"
    ],
	function (
		viewTpl
	) {
		return function SharePopupError(container)
		{
			container.html(viewTpl({
				title: i18n.commonCore.share.shareTitle,
				btnClose: i18n.commonCore.common.close
			}));

			this.present = function(params)
			{
				var errorMsg = "";

				// Cause

				// Cross domain in AGOL or Portal 10.4
				if ( params.error == "DOMAIN" ) {
					errorMsg += i18n.commonCore.share.notavailable1.replace(
						'%PRODUCT%',
						params.isPortal ? "Portal for ArcGIS" : "ArcGIS Online"
					);
				}
				// Portal < 10.4
				else if ( params.error == "PORTAL" ) {
					errorMsg += i18n.commonCore.share.notavailable2;
				}
				// Development mode
				else if ( params.error == "DEV" ) {
					errorMsg += i18n.commonCore.share.notavailable6;
				}

				errorMsg += '<br /><br />';

				// Workaround
				if ( params.error == "DOMAIN" ) {
					errorMsg += i18n.commonCore.share.notavailable3.replace(
						'%LINK%',
						'<a href="' + params.mystoriesURL + '" target="_blank">' + i18n.commonCore.share.notavailable4 + '</a>'
					);
				}
				else {
					errorMsg += i18n.commonCore.share.notavailable3.replace(
						'%LINK%',
						'<a href="' + params.itemURL + '" target="_blank">' + i18n.commonCore.share.notavailable5 + '</a>'
					);

					errorMsg += ' ';

					errorMsg += i18n.commonCore.share.notavailable7.replace(
						'%MYCONTENT%',
						'<a href="' + params.mycontentURL + '" target="_blank">' + i18n.commonCore.share.notavailable8 + '</a>'
					);
				}

				container.find('.error-msg').html(errorMsg);

				container.modal({ keyboard: true });
			};
		};
	}
);
