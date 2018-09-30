function loadJS(url, isExternal)
{
	if( isExternal )
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	else
		url += '?v=' + app.version + (!app.isProduction ? '&_=' + new Date().getTime() : '');

		var ref = window.document.getElementsByTagName('script')[0];
		var script = window.document.createElement('script');
		script.src = url;
		script.async = false;
		ref.parentNode.insertBefore(script, ref);
}

function loadCSS(url, isExternal)
{
	if( isExternal )
		url = document.location.protocol == 'file:' ? 'http:' + url : url;
	else
		url += '?v=' + app.version + (!app.isProduction ? '&_=' + new Date().getTime() : '');

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

app.isProduction = false;

defineDojoConfig();

app.isInBuilder = getUrlVar('edit') || getUrlVar('fromScratch') || getUrlVar('fromscratch');
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
	_ = {};

	if ( app.isInBuilder )
		loadJS('app/builder-min.js');
	else
		loadJS('app/viewer-min.js');
}

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
