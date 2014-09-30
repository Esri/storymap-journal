define(["lib-build/tpl!./ViewLayoutFonts",
		"lib-build/css!./ViewLayoutFonts"
	],
	function (
		viewTpl
	){
		return function ViewLayoutFonts() 
		{			
			var	_titleContainer = null,
				_contentContainer = null,
				_listInitDone = false;
			
			//
			// Not ready to have custom font id, when saving it will default to default font (data model is ok)
			//
			
			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({
					sectionTitleLbl: i18n.builder.settingsLayoutFonts.sectionTitleLbl,
					sectionContentLbl: i18n.builder.settingsLayoutFonts.sectionContentLbl
				}));
			};
			
			this.present = function(settings) 
			{	
				settings = settings || {};
				settings.fonts = settings.fonts || {};
				settings.fonts.sectionTitle = settings.fonts.sectionTitle || {}; 
				settings.fonts.sectionContent = settings.fonts.sectionContent || {}; 
				
				if ( ! _listInitDone ) {
					// Add a localized "(default)" on each first font
					app.cfg.FONTS.sectionTitle[0].lbl += " (" + i18n.builder.settingsLayoutFonts.defaultLbl + ")";
					app.cfg.FONTS.sectionContent[0].lbl += " (" + i18n.builder.settingsLayoutFonts.defaultLbl + ")";
					
					// Append Font lists
					_contentContainer.find('.font-title-list').html(getFontList(app.cfg.FONTS.sectionTitle));
					_contentContainer.find('.font-content-list').html(getFontList(app.cfg.FONTS.sectionContent));
					
					// Change events
					createChangeEvent(_contentContainer.find('.font-title-list a'), _contentContainer.find('.font-title-btn-inner'));
					createChangeEvent(_contentContainer.find('.font-content-list a'), _contentContainer.find('.font-content-btn-inner'));
				
					_listInitDone = true;
				}
				
				// Current values
				_contentContainer.find('.font-title-list a[data-font-id=' + (settings.fonts.sectionTitle.id||app.cfg.FONTS.sectionTitle[0].id) + ']').click();
				_contentContainer.find('.font-content-list a[data-font-id=' + (settings.fonts.sectionContent.id||app.cfg.FONTS.sectionContent[0].id) + ']').click();
			};
			
			this.show = function()
			{
				//
			};
			
			this.save = function()
			{			
				return { 
					fonts: {
						sectionTitle: removeFontLbl(
							findFontById(
								app.cfg.FONTS.sectionTitle, 
								_contentContainer.find('.font-title-btn-inner').data('font-id')
							)
						),
						sectionContent: removeFontLbl(
							findFontById(
								app.cfg.FONTS.sectionContent, 
								_contentContainer.find('.font-content-btn-inner').data('font-id')
							)
						)
					}
				};
			};
			
			this.initLocalization = function()
			{
				_titleContainer.html(i18n.builder.settingsLayoutFonts.title);
			};
			
			function getFontList(fonts)
			{
				var outputHTML = "";
				
				$.each(fonts, function(i, font){
					outputHTML += '<li><a href="#" data-font-id="' + font.id + '" style="' + font.value + '">' + font.lbl + '</a></li>';
				});
				
				return outputHTML;
			}
			
			function findFontById(fonts, fontId)
			{
				var searchFont = $.grep(fonts, function(font){
					return fontId == font.id;
				});
				
				return searchFont[0] || fonts[0];
			}
			
			function createChangeEvent(choices, lbl)
			{
				choices.click(function(){
					var $this = $(this);
					lbl.data("font-id", $this.data('font-id'))
						.html($this.html())
						.attr("style", $this.attr('style'));
				});
			}
			
			function removeFontLbl(font)
			{
				return {
					id: font.id,
					value: font.value
				};
			}
		};
	}
);