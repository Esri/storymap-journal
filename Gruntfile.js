(function() {
	module.exports = function(grunt) {
		var TPL_NAME = 'tpl';
		
		/*
		 * Tasks:
		 *  - grunt 			Create the production build
		 *  - grunt server		Run a webserver on 8080
		 *  - grunt jshint		Run JSHint once
		 *  - grunt watch		Run JSHint every time a JS file change
		 */
		
		require('load-grunt-tasks')(grunt);
		
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			
			clean: {
				deploy: ['deploy/*']
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
						'underscore',
						'lib-build/normalize', 
						//'i18n'
					],
					inlineText: true,
					separateCSS: true,
					siteRoot: '../../src/app/storymaps/'
					// ckeditor doesn't build with uglify2
					//optimize: 'uglify2'
				},
				builder: {
					options: {
						name: 'storymaps/' + TPL_NAME + '/BuildConfigBuilder',
						out: 'deploy/app/builder-min.js',
					}
				},
				viewer: {
					options: {
						name: 'storymaps/' + TPL_NAME + '/BuildConfigViewer',
						out: 'deploy/app/viewer-min.js',
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
				commonConfig: {
					files: [{
						expand: true,
						cwd: 'src/app',
						src:['commonConfig.js'],
						dest: 'deploy/app'
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
							'plugins/widget/**',
							'plugins/lineutils/**',
							'plugins/image2/**',
							'plugins/tableresize/**',
							'plugins/confighelper/**',
							'plugins/colordialog/**',
							'plugins/link/**',
							'plugins/fakeobjects/**',
							'plugins/iframe/**',
							'plugins/magicline/**',
							'plugins/pastefromword/**'
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
				index: {
					src: ['deploy/index.html'],
					actions: [
						{
							name: 'Index.html isProduction flag',
							search: 'isProduction: false',
							replace: 'isProduction: true'
						}
					]
				}
			},
			
			jshint: {
				common: [
					'src/app/storymaps/common/**/*.js', 
					// Exclude browse-dialog files
					'!src/app/storymaps/common/builder/browse-dialog/**/*.js',
					// Exclude localized NLS
					'!src/app/storymaps/common/_resources/nls/*/*.js'
				],
				tpl: ['src/app/storymaps/tpl/**/*.js'],
				tplnls: ['src/resources/**/nls/*.js'],
				options: {
					jshintrc: '.jshintrc',
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
			'jshint:tplnls',
			// Initialize deploy folder
			'clean', 
			'mkdir',
			
			// Minify and compress JS & CSS
			'requirejs',
			'regex-replace:js',
			'regex-replace:css',
			
			// Copy and perform replacement in index.html
			'copy:html',
			'regex-replace:index',
			
			// Copy resources
			'copy:config',
			'copy:commonConfig',
			'copy:resources',
			'copy:commonResources',
			
			// Copy libs resources and perform replacement
			'copy:libsResources',
			'regex-replace:csslib',
			
			'copy:readme'
		]);
	};
})();