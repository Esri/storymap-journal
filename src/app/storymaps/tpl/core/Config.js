define([], 
	function(){
		// Header default configuration
		var HEADER_LOGO_URL = "resources/tpl/viewer/icons/esri-logo.png",
			HEADER_LOGO_TARGET = "http://www.esri.com",
			HEADER_LINK_TEXT = "A story map",
			HEADER_LINK_URL = "http://storymaps.arcgis.com";

		app.appCfg = {
			supportWebmapPreviewAGOL: false,
			useWebmapInApp: false,
			useStandardHeader: false,
			useAppTitleAsPageTitle: false
		};
		
		app.appCfg.getLayoutThumnail = function(params)
		{
			params = params || {};
			
			var layout = params.layout || currentLayoutCfg.id,
				currentLayoutCfg = app.data.getLayoutStaticConfig(layout),
				theme = params.theme || currentLayoutCfg.themes[0],
				options = params.options || {
					position: currentLayoutCfg.positions[0],
					size: 'medium'
				},
				selected = params.selected || false,
				separateNavBar = params.separateNavBar || false,
				contentStep = params.contentStep || false,
				contentStepIdx = params.contentStepIdx || 1,
				contentSize = params.contentSize || false,
				contentLabel = params.contentLabel || false,
				thumbHTML = "",
				blockTpl = "",
				block1HTML = "",
				block2HTML = "";
				
			if ( ! separateNavBar && ! contentStep && ! contentSize && ! contentLabel )
				separateNavBar = true;
			
			// TODO gne?!
			if ( options.sizeLbl )
				options.size = options.sizeLbl;
			
			thumbHTML += '<div class="layout-thumbnail' + " layout-" + layout + " size-" + options.size + " pos-" + options.position + (selected ? ' selected' : '') + '" data-colors=\'' + JSON.stringify(theme) + '\'>';
			thumbHTML += '<div class="layout-selected"></div>';
			
			if ( layout == "side" ) {
				blockTpl = '<div class="layout-block" style="float: left; margin-left: 3%; width: $size$%; background-color:$color$; $styleOpt$"><span class="thumb-content $contentClass$" style="$contentStyle$">$content$</span></div>';
				
				//
				// Size
				//
				var sizeDiv1 = 8,
					sizeDiv2 = 20,
					sizeDiv3 = 59;
				
				if ( options.size == 'small' ) {
					sizeDiv1 = 8;
					sizeDiv2 = 15;
					sizeDiv3 = 64;
				}
				else if ( options.size == 'large' ) {
					sizeDiv1 = 8;
					sizeDiv2 = 35;
					sizeDiv3 = 44;
				}
				
				if ( separateNavBar ) {
					if ( options.position == 'left' ) {
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv1)
							.replace('$color$', theme.dotNav)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv2)
							.replace('$color$', theme.panel)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv3)
							.replace('$color$', theme.media)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
					}
					else {
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv3)
							.replace('$color$', theme.media)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv2)
							.replace('$color$', theme.panel)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
						thumbHTML += blockTpl
							.replace('$size$', sizeDiv1)
							.replace('$color$', theme.dotNav)
							.replace('$styleOpt$', '')
							.replace('$contentClass$', '')
							.replace('$content$', '');
					}
				}
				else {
					var invPos = options.position == "right";
					
					block1HTML = blockTpl
						.replace('$size$', sizeDiv1 + sizeDiv2)
						.replace('$color$', theme.panel)
						.replace('$styleOpt$', invPos ? 'margin-right: 3%; float: right' : '');
					block2HTML = blockTpl
						.replace('$size$', sizeDiv3 + 3)
						.replace('$color$', theme.media)
						.replace('$styleOpt$', invPos ? 'float: right' : '');
					
					if ( contentLabel ) {
						block1HTML = block1HTML
							.replace('$contentClass$', 'panel-lbl rotate')
							.replace('$contentStyle$', 'color: ' + theme.text)
							.replace('$content$', currentLayoutCfg.title);
						block2HTML = block2HTML
							.replace('$contentClass$', 'panel-lbl')
							.replace('$content$', i18n.builder.layouts.mainStage);
					}
					else if ( contentSize ) {
						block1HTML = block1HTML.replace('$contentStyle$', 'color: ' + theme.text);
					}
				}
				
			}
			else if ( layout == "float" ) {
				var sizePanel = parseInt(app.data.getCurrentLayoutStaticConfig().sizes[options.size], 10) - 10,
					panelLeft = options.position == "left";
				
				// get more space for lbl
				if ( options.size == "small" )
					sizePanel = 18;
				
				blockTpl = '<div class="layout-block layout-float $layout-left$" style="$basestyle$ width: $size$%; background-color:$color$; $styleOpt$"><span class="thumb-content $contentClass$" style="$contentStyle$">$content$</span></div>';
				blockTpl = blockTpl.replace('$layout-left$', panelLeft ? 'layout-left' : '');
				
				block1HTML = blockTpl
					.replace('$basestyle$', 'margin: 0 4px;')
					.replace('$size$', 94)
					.replace('$color$', theme.media)
					.replace('$styleOpt$', '');
				block2HTML = blockTpl
					.replace('$basestyle$', 'position: absolute; right: 10%; top: 6px;')
					.replace('$size$', sizePanel)
					.replace('$color$', theme.panel)
					.replace('$styleOpt$', 'border: none; bottom: 7px; height: auto; left: ' + (panelLeft ? '10%' : 'auto'));
				
				if ( contentLabel ) {
					block1HTML = block1HTML
						.replace('$contentClass$', 'panel-lbl')
						.replace('$content$', i18n.builder.layouts.mainStage);
					block2HTML = block2HTML
						.replace('$contentClass$', 'panel-lbl rotate')
						.replace('$contentStyle$', 'color: ' + theme.text)
						.replace('$content$', currentLayoutCfg.title);
				}
				else if ( contentSize ) {
					block2HTML = block2HTML.replace('$contentStyle$', 'color: ' + theme.text);
				}
			}
			
			if ( contentStep ) {
				block1HTML = block1HTML
					.replace('$contentClass$', 'number number-step' + contentStepIdx + ' ' + (layout == "side" ? 'number-2' : 'number-1'))
					.replace('$content$', '');
				block2HTML = block2HTML
					.replace('$contentClass$', 'number number-step' + contentStepIdx + ' ' + (layout == "side" ? 'number-1' : 'number-2'))
					.replace('$content$', '');
			}
			else if ( contentSize ) {
				var sizeDiv1Lbl = app.data.getCurrentLayoutStaticConfig().sizes[options.size],
					sizeDiv3Lbl = (100 - parseInt(sizeDiv1Lbl, 10)) + '%';
				
				block1HTML = block1HTML
					.replace('$contentClass$', 'size')
					.replace('$content$', layout == "side" ? sizeDiv1Lbl : sizeDiv3Lbl);
				block2HTML = block2HTML
					.replace('$contentClass$', 'size')
					.replace('$content$', layout == "side" ? sizeDiv3Lbl : sizeDiv1Lbl);
			}
			else {
				block1HTML = block1HTML
					.replace('$contentClass$', '')
					.replace('$content$', '');
				block2HTML = block2HTML
					.replace('$contentClass$', '')
					.replace('$content$', '');
			}
			
			block1HTML = block1HTML.replace('$contentStyle$', '');
			block2HTML = block2HTML.replace('$contentStyle$', '');
			
			thumbHTML += block1HTML + block2HTML;
			thumbHTML += '</div>';
			
			return thumbHTML;
		};
		
		return {
			checkConfigFileIsOK: function()
			{
				app.cfg.HEADER_LOGO_URL = HEADER_LOGO_URL;
				app.cfg.HEADER_LOGO_TARGET = HEADER_LOGO_TARGET;
				app.cfg.HEADER_LINK_TEXT = HEADER_LINK_TEXT;
				app.cfg.HEADER_LINK_URL = HEADER_LINK_URL;

				return app.cfg
					&& app.cfg.HEADER_LOGO_URL !== undefined 
					&& app.cfg.HEADER_LOGO_TARGET !== undefined
					&& app.cfg.HEADER_LINK_TEXT !== undefined
					&& app.cfg.HEADER_LINK_URL !== undefined
					&& app.cfg.HEADER_SOCIAL  
					
					&& app.cfg.MAX_NB_SECTIONS
					&& app.cfg.DOTNAV_GROUPSIZE
					
					&& app.cfg.TIMEOUT_VIEWER_LOAD
					&& app.cfg.TIMEOUT_VIEWER_REQUEST
					&& app.cfg.TIMEOUT_BUILDER_REQUEST
					
					&& app.cfg.SECTION_ACTION_ZOOM_MAP_MARKER
					
					&& app.cfg.LAYOUTS && app.cfg.LAYOUTS.length
					&& app.cfg.FONTS
					
					&& app.cfg.HELP_URL
					&& app.cfg.HELP_URL_PORTAL
					
					&& app.cfg.TPL_NAME
					&& app.cfg.WEBAPP_TAG
					&& app.cfg.WEBAPP_KEYWORD_GENERIC
					&& app.cfg.WEBAPP_KEYWORD_APP
					
					&& app.cfg.AUTHORIZED_IMPORT_SOURCE
					&& app.cfg.FLICKR_API_KEY
					&& app.cfg.FACEBOOK_APP_ID
					&& app.cfg.YOUTUBE_DISABLE_ON_PORTAL !== undefined
					&& app.cfg.YOUTUBE_API_KEY
					
					&& app.cfg.CORS_SERVER
					&& app.cfg.DEFAULT_SHARING_URL
					&& app.cfg.DEFAULT_PROXY_URL; 
			}
		};
	}
);