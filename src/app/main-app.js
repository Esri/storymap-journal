if (document.location.protocol == "file:") {
	$(document).ready(function() {
		$("#fatalError .error-title").html("Application loading failed");
		$("#fatalError .error-msg").html("The application has to be accessed through a web server. Consult user guide for detail.");
		$("#fatalError").show();
	});
}
else {
	var i18n = null;
	define.amd.jQuery = true;

	require([
			"dojo/i18n!./resources/tpl/viewer/nls/template.js?v=" + app.version,
			"dojo/i18n!commonResources/nls/core.js?v=" + app.version,
			"esri/urlUtils",
			"dojo/_base/lang",
			"dojo/dom",
			"app/custom-scripts",
			"lib-app/jquery",
			"dojo/ready"
		], function(
			i18nViewer,
			i18nCommonCore,
			urlUtils,
			lang,
			dom
		){
			i18n = i18nViewer;
			lang.mixin(i18n, i18nCommonCore);

		 	require([
					"storymaps/common/Core",
					"storymaps/tpl/core/MainView"
				], function(
					Core,
					MainView
				){
		 			if (app.isInBuilder) {
						require([
								"storymaps/common/builder/Builder",
								"storymaps/tpl/builder/BuilderView" ,
								"dojo/i18n!./resources/tpl/builder/nls/template.js?v=" + app.version,
								"dojo/i18n!commonResources/nls/media.js?v=" + app.version,
								"dojo/i18n!commonResources/nls/webmap.js?v=" + app.version,
								"dojo/i18n!commonResources/nls/mapcontrols.js?v=" + app.version
							], function(
								Builder,
								BuilderView,
								i18nBuilder,
								i18nCommonMedia,
								i18nCommonWebmap,
								i18nCommonMapControls
							){
								lang.mixin(i18n, i18nBuilder);
								lang.mixin(i18n, i18nCommonMedia);
								lang.mixin(i18n, i18nCommonWebmap);
								lang.mixin(i18n, i18nCommonMapControls);

								var builderView = new BuilderView(Core),
								mainView = new MainView(builderView);

								Core.init(mainView, Builder);
								Builder.init(Core, builderView);
							}
						);
					}
					else {
						Core.init(new MainView());
					}
		 		}
			);
		}
	);
}
