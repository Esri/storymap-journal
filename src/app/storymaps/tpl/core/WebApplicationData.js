define(["dojo/_base/lang"], 
	function(lang)
	{
		/**
		 * WebApplicationData
		 * @class WebApplicationData
		 * 
		 * R/W of the Web mapping Application data
		 */
		
		var _originalData = {};
		var _data = { 
			values: {}
		};
		
		return {
			set: function(data)
			{
				_originalData = lang.clone(data);
				
				if( ! data || ! data.values )
					return;
				
				/*
				if ( data.values.story.entries ) {
					data.values.story.sections = lang.clone(data.values.story.entries);
					delete data.values.story.entries;
					_originalData = lang.clone(data);
				}
				*/
				
				_data = data; 
			},
			get: function()
			{
				var data = lang.clone(_data);
				
				data.values.template = data.values.template || {};
				data.values.template = {
					name: data.values.template.name || app.cfg.TPL_NAME,
					createdWith: data.values.template.createdWith || app.version,
					editedWith: app.version
				};
				
				return data;
			},
			getOriginalData: function()
			{
				return _originalData;
			},
			isBlank: function()
			{
				return Object.keys(_data.values).length <= 1 || app.data.getStorySections().length === 0;
			},
			getBlank: function()
			{
				return {
					values: {
						webmap: _originalData.values.webmap
					}
				};
			},
			// The eventual webmap the template has been created with (Start from a webmap in AGOL Map Viewer)
			getSourceWebmap: function()
			{
				return _originalData && _originalData.values ? _originalData.values.webmap : null;
			},
			cleanWebAppAfterInitialization: function()
			{
				var hasDoneCleaning = false;
				var datas = [_originalData, _data];
				for(var i=0; i < datas.length; i++) {
					var data = datas[i];
					if (data && data.values) {
						if (data.values.order) {
							delete data.values.order;
							hasDoneCleaning = true;
						}
						if (data.values.firstRecordAsIntro) {
							delete data.values.firstRecordAsIntro;
							hasDoneCleaning = true;
						}
							
						if (data.values.fieldsOverride){
							delete data.values.fieldsOverride;
							hasDoneCleaning = true;
						} 
							
						if (data.values.sourceLayer){
							delete data.values.sourceLayer;
							hasDoneCleaning = true;
						} 
					}
				}
				return hasDoneCleaning;
			},
			restoreOriginalData: function()
			{
				this.set(_originalData);
			},
			updateAfterSave: function()
			{
				_originalData = lang.clone(_data);
			},
			
			/*
			 * Versioning
			 */
			
			// Last saved template version
			getTemplateVersion: function()
			{
				return _data.values.template ? _data.values.template.editedWith : null;
			},
			// First saved template version
			getTemplateCreation: function()
			{
				return _data.values.template ? _data.values.template.creaedWith : null;
			},
			
			/*
			 * Webmap id
			 */
			getWebmap: function()
			{
				return _data.values.webmap;
			},
			setWebmap: function(webmap)
			{
				_data.values.webmap = webmap;
			},
			
			/*
			 * Header
			 */
			getTitle: function()
			{
				var title = _data.values.title;
				
				// Reuse the title as app title
				if ( (app.isDirectCreationFirstSave || title === undefined) && this.getStorySections().length > 0 )
					this.setTitle($("<div>" + this.getStorySections()[0].title + "</div>").text());
				
				return _data.values.title;
			},
			setTitle: function(title)
			{
				_data.values.title = title;
			},
			getSubtitle: function()
			{
				return _data.values.subtitle;
			},
			setSubtitle: function(subtitle)
			{
				_data.values.subtitle = subtitle;
			},
			
			/*
			 * Settings
			 */
			
			getSettings: function()
			{
				return _data.values.settings || {};
			},
			
			/*
			 * Layout
			 */
			getLayout: function()
			{
				return this.getSettings().layout || {};
			},
			setLayout: function(layout)
			{
				_data.values.settings = _data.values.settings || {};
				_data.values.settings.layout = layout;
			},
			getLayoutId: function()
			{	
				return this.getLayout().id || app.cfg.LAYOUTS[0].id;
			},
			// The static configuration of the layout
			getLayoutProperties: function(layoutId)
			{
				var layout = layoutId || this.getLayoutId(),
					layoutCfg = $.grep(app.cfg.LAYOUTS, function(l){ return l.id == layout; });
				
				return layoutCfg && layoutCfg.length ? layoutCfg[0] : null;
			},
			
			
			/*
			 * Layout options
			 */
			getLayoutOptions: function()
			{
				var layoutOptions = lang.clone(this.getSettings().layoutOptions) || {};
				
				layoutOptions.layoutCfg = this.getLayoutCfg();
				layoutOptions.socialLinks = layoutOptions.socialLinks === undefined ? false : layoutOptions.socialLinks;
				
				return layoutOptions;
			},
			setLayoutOptions: function(layoutOptions)
			{
				_data.values.settings = _data.values.settings || {};
				_data.values.settings.layoutOptions = layoutOptions;
			},
			getLocateBtn: function()
			{
				return this.getLayoutOptions().locateBtn || false;
			},
			getLayoutCfg: function()
			{
				var cfg = {},
					rawCfg = ((this.getSettings().layoutOptions || {}).layoutCfg) || {},
					layoutProp = this.getLayoutProperties();
				
				if ( ! layoutProp )
					return null;
				
				if ( layoutProp.sizes ) {
					cfg.sizeLbl = rawCfg.size || 'medium';
					cfg.sizeVal = layoutProp.sizes[cfg.sizeLbl];
				}
				
				if ( layoutProp.positions )
					cfg.position = rawCfg.position || layoutProp.positions[0];
				
				return cfg;
			},
			
			/*
			 * Theme
			 */
			getTheme: function()
			{
				return this.getSettings().theme || {};
			},
			setTheme: function(theme) 
			{
				_data.values.settings = _data.values.settings || {};
				_data.values.settings.theme = theme;
			},
			getColors: function()
			{
				var cfgColors = this.getTheme().colors;
				
				// If colors are defined, check if that theme is present in the config file
				// If present reuse the values from config, else use the values from the item
				// This allow an user to override his theme from the config file as well as administrator update
				if ( cfgColors && cfgColors.name ) {
					var matchedTheme = $.grep(this.getLayoutProperties().themes, function(theme) {
						return theme.name == cfgColors.name;
					});
					
					if ( matchedTheme && matchedTheme.length )
						return matchedTheme[0];
					else
						return cfgColors;
				}
				else
					return this.getLayoutProperties().themes[0];
			},
			getFonts: function()
			{
				var outputFonts = { 
						sectionTitle: app.cfg.FONTS.sectionTitle[0],
						sectionContent: app.cfg.FONTS.sectionContent[0]
					},
					cfgFonts = this.getTheme().fonts || { };
				
				if ( cfgFonts.sectionTitle ) {
					outputFonts.sectionTitle = $.grep(app.cfg.FONTS.sectionTitle, function(font) {
						return font.id == cfgFonts.sectionTitle.id;
					})[0] || cfgFonts.sectionTitle;
				}
				
				if ( cfgFonts.sectionContent ) {
					outputFonts.sectionContent = $.grep(app.cfg.FONTS.sectionContent, function(font) {
						return font.id == cfgFonts.sectionContent.id;
					})[0] || cfgFonts.sectionContent;
				}

				return outputFonts;
			},
			
			/*
			 * Header
			 */
			getHeader: function()
			{
				return this.getSettings().header || {};
			},
			setHeader: function(header) 
			{
				_data.values.settings = _data.values.settings || {};
				_data.values.settings.header = header;
			},
			getHeaderLinkText: function()
			{
				return this.getHeader().linkText === undefined ? app.cfg.HEADER_LINK_TEXT : this.getHeader().linkText;
			},
			getHeaderLinkURL: function()
			{
				return this.getHeader().linkURL === undefined ? app.cfg.HEADER_LINK_URL : this.getHeader().linkURL;
			},
			getLogoURL: function()
			{
				var logoURL = ! this.getHeader().logoURL ? app.cfg.HEADER_LOGO_URL : this.getHeader().logoURL;
				
				if ( logoURL == app.cfg.HEADER_LOGO_URL && this.getColors() && this.getColors().esriLogo == "white" )
					logoURL = "resources/tpl/viewer/icons/esri-logo-white.png";
				
				return logoURL;
			},
			getLogoTarget: function()
			{
				return ! this.getHeader().logoURL || this.getHeader().logoURL == app.cfg.HEADER_LOGO_URL
					? app.cfg.HEADER_LOGO_TARGET 
					: this.getHeader().logoTarget;
			},
			getSocial: function()
			{
				return this.getHeader().social;
			},
			
			/*
			 * Map Journal
			 */
			getStory: function()
			{
				return _data.values.story || {};
			},
			getStorySections: function()
			{
				var story = this.getStory();
				
				// FS will use story.order to return sections in the correct order
				
				/*
				var arr = [];
				for(var i=0;i<1000;i++)
					arr.push(story.sections[0]);
				return arr;
				*/
				
				return story.sections || [];
			},
			getStoryStorage: function()
			{
				return this.getStory().storage || "WEBAPP";
			},
			setStorySections: function(sections, reversed)
			{
				_data.values.story = _data.values.story || {};
				_data.values.story.storage = "WEBAPP";
				_data.values.story.sections = sections;
				_data.values.story.reversed = reversed;
			}
		};
	}
);