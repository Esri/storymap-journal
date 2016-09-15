define([
		"lib-build/tpl!./ErrorDialog",
		"lib-build/css!./ErrorDialog",
		"dojo/topic"
    ],
	function (
		viewTpl,
		viewCss,
		topic
	) {
		return function ErrorDialog(container)
		{
			container.html(viewTpl({
				btnClose: i18n.commonCore.common.close
			}));

			initEvents();

			this.present = function(params)
			{
				var errorMsg = "";

				// Title
				container.find('.modal-title').html(
					params.newMap ? i18n.commonWebmap.editor.newTitle : i18n.commonWebmap.editor.editTitle
				);

				// Cause
				if ( params.error == "DOMAIN" ) {
					errorMsg += i18n.commonWebmap.editor.notavailable2.replace(
						'%PRODUCT%',
						params.isPortal ? "Portal for ArcGIS" : "ArcGIS Online"
					);
				}
				else if ( params.error == "PORTAL" ) {
					errorMsg += i18n.commonWebmap.editor.notavailable3;
				}
				else if ( params.error == "DEV_TOKEN" ) {
					errorMsg += "Sorry, creating or editing a map in development mode require some extra configuration.";
				}
				else if ( params.error == "DEV_FAIL" ) {
					errorMsg += "Sorry, creating or editing a map is not supported in development environment.";
				}

				if ( params.error != "DEV_FAIL" && params.error != "TOUCH_ONLY" ) {
					errorMsg += '<br /><br />';
				}

				// Workaround
				if ( params.error == "DEV_TOKEN" ) {
					errorMsg += "To enable the map editor, please read the instructions in <i>app/storymaps/common/builder/media/map/MapViewerWrapper.js</i>.";
				}
				else if ( params.error == "DEV_FAIL" ) {
					errorMsg += "";
				}
				else if ( params.newMap ) {
					errorMsg += i18n.commonWebmap.editor.notavailable4.replace(
						'%MV%',
						'<a href="' + params.url + '" target="_blank">' + i18n.commonWebmap.editor.notavailable6 + '</a>'
					);
				}
				else {
					errorMsg += i18n.commonWebmap.editor.notavailable5.replace(
						'%MV%',
						'<a href="' + params.url + '" target="_blank">' + i18n.commonWebmap.editor.notavailable6 + '</a>'
					).replace(
						'%apply%',
						'<a class="map-reload">' + i18n.commonWebmap.editor.notavailable7 + '</a>'
					);
				}

				container.find('.error-msg').html(errorMsg);
				container.find('.map-reload').click(function(){
					topic.publish("ADDEDIT_RELOAD_CURRENT_WEBMAP");
				});

				container.modal({ keyboard: true });
			};

			function initEvents()
			{
				container.on('show.bs.modal', function () {
					$('#addEditPopup .backdrop').show();
				});

				container.on('hide.bs.modal', function () {
					$('#addEditPopup .backdrop').hide();
				});
			}
		};
	}
);
