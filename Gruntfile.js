(function() {
	module.exports = function(grunt) {
		var fs = require('fs'),
			TPL_NAME = 'tpl';

		/*
		 * Tasks:
		 *  - grunt 			Create the production build
		 *  - grunt server		Run a webserver on 8080
		 *  - grunt jshint		Run JSHint once
		 *  - grunt watch		Run JSHint every time a JS file change
		 *  - grunt jsapioptim	Generate the JS API modules list used by the app in deploy/
		 */

		require('load-grunt-tasks')(grunt);

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			clean: {
				deploy: ['deploy/*'],
				jsapioptim: [
					'deploy/build-api-viewer.tmp',
					'deploy/build-api-builder.tmp',
					'jsapi-optim-modules-viewer.txt',
					'jsapi-optim-modules-builder.txt'
				],
				fontello: [
				    'deploy/resources/tpl/viewer/font/css/',
				    'deploy/resources/tpl/viewer/font/config.json',
				    'deploy/resources/tpl/viewer/font/demo.html',
				    'deploy/resources/tpl/viewer/font/README.txt'
				]
			},

			mkdir: {
				all: {
					options: {
						create: ['deploy/app']
					},
				},
			},

			requirejs: {
				options: {
					baseUrl: 'src/app/',
					paths: {
						/* Ignore modules of the following packages */
						'dojo': 'empty:',
						'esri': 'empty:',
						'dijit': 'empty:',
						'dojox': 'empty:',
						'dgrid': 'empty:', // Used by SelectMapWidget
						'put-selector': 'empty:', // Used by SelectMapWidget

						/* Libraries */
						'lib-app': '../lib-app/',

						/* Build chain dependencies */
						'lib-build': '../lib-build/',

						/* Inlining of .html */
						'text': '../lib-build/text',
						'underscore': '../lib-build/lodash',

						/* Localization */
						'i18n': '../lib-build/i18n',
					},
					stubModules: [
						'text',
						'lib-build/tpl'
					],
					exclude: [
						// 'underscore',
						'lib-build/normalize'
						//'i18n'
					],
					inlineText: true,
					separateCSS: true,
					siteRoot: '../../src/app/storymaps/',
					preserveLicenseComments: false
					// ckeditor doesn't build with uglify2
					//optimize: 'uglify2'
				},
				builder: {
					options: {
						name: 'storymaps/' + TPL_NAME + '/BuildConfigBuilder',
						out: 'deploy/app/builder-min.js',
						onModuleBundleComplete: function (data) {
							var modules = data.included.filter(function (value) {
								return ! value.match(/lib-/);
							});

							fs.writeFile("deploy/build-api-builder.tmp", modules.join('\n'), function(err) {
								if(err) console.log(err);
							});
						}
					}
				},
				viewer: {
					options: {
						name: 'storymaps/' + TPL_NAME + '/BuildConfigViewer',
						out: 'deploy/app/viewer-min.js',
						onModuleBundleComplete: function (data) {
							var modules = data.included.filter(function (value) {
								return ! value.match(/lib-/);
							});

							fs.writeFile("deploy/build-api-viewer.tmp", modules.join('\n'), function(err) {
								if(err) console.log(err);
							});
						}
					}
				}
			},

			concat: {
				options: {
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - '
							+ '<%= grunt.template.today("yyyy-mm-dd, hh:MM:ss TT") %> - '
							+ 'This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - '
							+ 'https://github.com/Esri/map-journal-storytelling-template-js */',
				},
				viewerJS: {
					src: ['deploy/app/viewer-min.js'],
					dest: 'deploy/app/viewer-min.js',
				},
				builderJS: {
					src: ['deploy/app/builder-min.js'],
					dest: 'deploy/app/builder-min.js',
				},
			},

			execute: {
				viewer: {
					src: ['src/lib-build/js-api-optimizer.js'],
					options: {
						// execute node with additional arguments
						args: ['deploy/build-api-viewer.tmp', 'jsapi-optim-modules-viewer.txt']
					}
				},
				builder: {
					src: ['src/lib-build/js-api-optimizer.js'],
					options: {
						// execute node with additional arguments
						args: ['deploy/build-api-builder.tmp', 'jsapi-optim-modules-builder.txt']
					}
				}
			},

			copy: {
				html: {
					files: [{
						expand: true,
						cwd: 'src',
						src:['*.html'],
						dest: 'deploy/'
					}]
				},
				resources: {
					files: [{
						expand: true,
						cwd: 'src',
						src:['resources/**'],
						dest: 'deploy/'
					}]
				},
				commonResources: {
					files: [{
						expand: true,
						cwd: 'src/app/storymaps/common/_resources/',
						src:['**'],
						dest: 'deploy/resources/common/'
					}]
				},
				config: {
					files: [{
						expand: true,
						cwd: 'src',
						src:['app/config.js'],
						dest: 'deploy/'
					}]
				},
				main: {
					files: [{
						expand: true,
						cwd: 'src',
						src:['app/main-app.js', 'app/main-config.js','app/custom-scripts.js'],
						dest: 'deploy/'
					}]
				},
				readme: {
					files: [{
						expand: true,
						src:['Readme.pdf', 'Readme.txt'],
						dest: 'deploy/'
					}]
				},
				libsResources: {
					files: [{
						expand: true,
						cwd: 'src/lib-app/bootstrap/fonts/',
						src:['**'],
						dest: 'deploy/resources/lib/bootstrap/fonts/'
					}, {
						expand: true,
						cwd: 'src/lib-app/font-awesome/fonts/',
						src:['**'],
						dest: 'deploy/resources/lib/font-awesome/fonts/'
					},
					{
						expand: true,
						cwd: 'src/lib-app/ckeditor/',
						src:[
							'config.js',
							'contents.css',
							'styles.js',
							'lang/**',
							'skins/**',
							'plugins/colordialog/**',
							'plugins/confighelper/**',
							'plugins/image2/**',
							'plugins/link/**',
							'plugins/widget/**'
						],
						dest: 'deploy/resources/lib/ckeditor/'
					},
					{
						expand: true,
						cwd: 'src/lib-app/colorbox/',
						src:['colorbox.css', 'images/**'],
						dest: 'deploy/resources/lib/colorbox/'
					},
					{
						expand: true,
						cwd: 'src/lib-app/ZeroClipboard/',
						src:['ZeroClipboard.swf'],
						dest: 'deploy/resources/lib/ZeroClipboard/'
					},
					{
						expand: true,
						cwd: 'src/app/storymaps/common/builder/ckeditor/',
						src:['editor.css', 'plugins/storymaps*/plugin.js', 'plugins/storymaps*/icons/**'],
						dest: 'deploy/resources/lib/ckeditor/'
					}]
				},
				jsapioptim: {
					files: [{
						src:['jsapi-optim-modules-viewer.txt', 'jsapi-optim-modules-builder.txt'],
						dest: 'deploy/'
					}]
				}
			},

			'regex-replace': {
				css: {
					src: ['deploy/app/*.css'],
					actions: [
						{
							name: 'Common resources path',
							search: 'common/_resources/',
							replace: '../resources/common/',
							flags: 'g'
						},
						{
							name: 'Project images path',
							search: '../../(../)*',
							replace: '../',
							flags: 'g'
						},
						{
							name: 'Bootstrap images path',
							search: '../lib-app/bootstrap/fonts/',
							replace: '../resources/lib/bootstrap/fonts/',
							flags: 'g'
						},
						{
							name: 'FontAwesome fonts path',
							search: '../lib-app/font-awesome/fonts/',
							replace: '../resources/lib/font-awesome/fonts/',
							flags: 'g'
						},
						{
							name: 'Colorbox images path',
							search: '../lib-app/colorbox/images/',
							replace: '../resources/lib/colorbox/images/',
							flags: 'g'
						}
					]
				},
				csslib: {
					src: ['deploy/resources/lib/ckeditor/editor.css'],
					actions: [
						{
							name: 'CKEDITOR font',
							search: '../../_resources/font/',
							replace: '../../common/font/',
							flags: 'g'
						},
						{
							name: 'CKEDITOR image',
							search: '../../_resources/icons/ckeditor/',
							replace: '../../common/icons/ckeditor/',
							flags: 'g'
						}
					]
				},
				js: {
					src: ['deploy/app/*.js'],
					actions: [
						{
							name: 'JS isProduction flag',
							search: 'TPL_ENV_DEV',
							replace: 'TPL_ENV_PRODUCTION'
						},
						{
							name: 'JS marker path',
							search: 'app/storymaps/common/_resources/icons/',
							replace: 'resources/common/icons/'
						}
					]
				},
				main: {
					src: ['deploy/app/main-config.js'],
					actions: [
						{
							name: 'Index.html isProduction flag',
							search: 'app.isProduction = false',
							replace: 'app.isProduction = true'
						}
					]
				}
			},

			jshint: {
				common: {
					options: {
						jshintrc: '.jshintrc'
					},
					files: {
						src: [
							'src/app/storymaps/common/**/*.js',
							// Exclude browse-dialog files
							'!src/app/storymaps/common/builder/browse-dialog/**/*.js',
							// Exclude NLS
							'!src/app/storymaps/common/_resources/nls/**/*.js'
						]
					}
				},
				tpl: {
					options: {
						jshintrc: '.jshintrc'
					},
					files: {
						src: ['src/app/storymaps/tpl/**/*.js']
					}
				},
				"nls-en": {
					options: {
						jshintrc: '.jshintrc'
					},
					files: {
						src: [
							'src/resources/**/nls/*.js',
							'src/app/storymaps/common/_resources/nls/*.js'
						]
					}
				},
				"nls-all": {
					options: {
						"smarttabs": true,
						"-W100": true,
						"-W044": true
					},
					files: {
						src: [
							'src/app/storymaps/common/_resources/nls/*/*.js',
							'src/resources/**/nls/*/*.js'
						]
					}
				}
			},

			connect: {
				server: {
					options: {
						port: 8080,
						keepalive: true,
						hostname: '*'
					}
				}
			},

			watch: {
				files: ['src/app/**/*.js'],
				tasks: ['jshint']
			}
		});

		/*
		 * Create a web server on port 8080
		 * Run 'start grunt server' or 'grunt server &'
		 */
		grunt.registerTask('server', ['connect']);

		/*
		 * Build production version of the template
		 */
		grunt.registerTask('default', [
			// Comment out to disable code linting
			'jshint:common',
			'jshint:tpl',
			'jshint:nls-en',
			'jshint:nls-all',
			// Initialize deploy folder
			'clean',
			'mkdir',

			// Minify and compress JS & CSS
			'requirejs',
			'regex-replace:js',
			'regex-replace:css',
			'concat',

			// Copy html
			'copy:html',

			// Copy main
			'copy:main',
			'regex-replace:main',

			// Copy resources
			'copy:config',
			'copy:resources',
			'copy:commonResources',

			// Copy libs resources and perform replacement
			'copy:libsResources',
			'regex-replace:csslib',

			'copy:readme',
			'clean:jsapioptim',
			'clean:fontello'
		]);

		/*
		 * Generate jso.arcgis.com input
		 */
		grunt.registerTask('jsapioptim', function() {
			grunt.task.run('clean');
			grunt.task.run('mkdir');

			grunt.task.run('requirejs');
			grunt.task.run('execute');

			grunt.task.run('clean:deploy');
			grunt.task.run('copy:jsapioptim');
			grunt.task.run('clean:jsapioptim');
		});
	};
})();
