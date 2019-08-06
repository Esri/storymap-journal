function loadJS(url, isExternal)
{
  let src = url;
	if( isExternal )
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	else
		url += '?v=' + app.version + (!app.isProduction ? '&_=' + new Date().getTime() : '');

  var embedJS = document.getElementsByTagName("script");
  for (var link of embedJS) {
    if (link.getAttribute('src') && link.getAttribute('src').indexOf(src) > -1) {
      return;
    }
  }

		var ref = window.document.getElementsByTagName('script')[0];
		var script = window.document.createElement('script');
		script.src = url;
		script.async = false;
		ref.parentNode.insertBefore(script, ref);
}

function loadCSS(url, isExternal)
{
  let src = url;
	if( isExternal )
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	else
		url += '?v=' + app.version + (!app.isProduction ? '&_=' + new Date().getTime() : '');

  var embedCSS = document.getElementsByTagName("link");
  for (var link of embedCSS) {
    if (link.getAttribute('href').indexOf(src) > -1) {
      return;
    }
  }

	var el = document.createElement("link");
	el.setAttribute("rel", "stylesheet");
	el.setAttribute("type", "text/css");
	el.setAttribute("href", url);
	document.getElementsByTagName("head")[0].appendChild(el);
}

function getUrlVar(name)
{
	var vars = [], hash;
	if( window.location.href.indexOf('?') == -1 ) return null;

	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++){
		hash = hashes[i].split('=');
		hash[0] = hash[0].split('#')[0];
		vars.push(hash[0]);
		vars[hash[0]] = (hash[1] == undefined) ? true : hash[1];
	}
	return vars[name];
}

function defineDojoConfig()
{
	var path1 = location.pathname.replace(/\/[^/]+$/, '/');

	window.dojoConfig = {
		parseOnLoad: true,
		isDebug: false,
		useDeferredInstrumentation: true,
		async: !app.isProduction,
		//cacheBust: ! app.isProduction,
		packages: [
      {
				name: 'app',
				location: path1 + 'app'
			},
			{
				name: 'storymaps',
				location: path1 + 'app/storymaps'
			},
      {
        name: 'wrapper',
        location: path1 + 'app/wrapper'
      },
			{
				name: 'lib-app',
				location: path1 + 'lib-app'
			},
			{
				name: 'lib-build',
				location: path1 + 'lib-build'
			},
			{
				name: 'commonResources',
				location: path1 + (app.isProduction ? 'resources/common' : 'app/storymaps/common/_resources/')
			}
		],
		aliases: [
			['text', 'lib-build/text'],
			['underscore', 'lib-build/lodash']
		]
	};

	if (location.search.match(/locale=([\w\-]+)/)) {
		window.dojoConfig.locale = RegExp.$1;
	}
}

function bootstrap (reset = false) {
  app.isProduction = false;
  app.isReset = reset;

  if (reset !== true) {
    defineDojoConfig();
  }

  app.isInBuilder = getUrlVar('edit') || getUrlVar('fromScratch') || getUrlVar('fromscratch');

  // Get the version of the kiosk which needs to spin up
  configOptions.ik.version = getUrlVar('version');

  app.indexCfg = configOptions;

  loadCSS(app.pathJSAPI + "esri/css/esri.css", true);
  loadCSS(app.pathJSAPI + "dijit/themes/claro/claro.css", true);

  if( app.isProduction ) {
    if ( app.isInBuilder )
      loadCSS("app/builder-min.css");
    else
      loadCSS("app/viewer-min.css");
  }

  loadJS(app.pathJSAPI + 'init.js', true);
  loadJS('app/config.js');

  CKEDITOR_BASEPATH = app.isProduction ? 'resources/lib/ckeditor/' : 'lib-app/ckeditor/';

  if( app.isProduction ) {
    if ( app.isInBuilder )
      loadJS('app/builder-min.js');
    else
      loadJS('app/viewer-min.js');
  }

  loadJS('app/ik-menu.js');
  loadJS('app/main-app.js');

  // Enable Google Analytics on storymaps.esri.com
  if (window.location.href.toLowerCase().indexOf("storymaps.esri.com") >= 0) {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-26529417-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }
}

function reset (appid = '') {

  console.log('Reset Storymap -', appid)

  app.isReset = true;

  // Back up some variables which give 
  if (app.portal && app.portal.helperServices) {
    configOptions.helperServices = app.portal.helperServices;
  }

  // Set new appid
  configOptions.appid = appid;

  if (app.events) {
    Object.keys(app.events).forEach(function (event) {
      app.events[event].remove();
    });
  }

  // Start the application
  bootstrap(true);

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



// Start App
bootstrap();
