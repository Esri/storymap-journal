define(["lib-build/tpl!./SidePanelSection",
		"lib-build/css!./SidePanel",
		"lib-build/css!storymaps/common/builder/InlineFieldEdit",
		"./DotNavBar",
		"../StoryText",
		"storymaps/common/utils/HeaderHelper",
		"storymaps/common/utils/CommonHelper"
	], 
	function(
		viewSectionTpl,
		viewCss,
		inlineEditCss,
		DotNavBar,
		StoryText,
		HeaderHelper,
		CommonHelper
	){
		var _isFirstLoad = true;
		
		return function SidePanel(container, isInBuilder, navigationCallback)
		{
			var _this = this,
				_activeSectionIndex = 0,
				_navDots = new DotNavBar(container.find('.navDots'), onDotNavigation),
				_selectReady = false;
			
			this.init = function(sections, sectionIndex, layoutOptions, headerCfg, colors)
			{
				_activeSectionIndex = 0;
				
				setLayout(layoutOptions);
				setColor(colors);
				setHeader(headerCfg);
				render(sections, sectionIndex);
				initEvents();
				
				_navDots.init({
					sections: sections, 
					sectionIndex: sectionIndex, 
					bgColor: colors.dotNav, 
					tooltipBgColor: colors.text,
					tooltipFontColor: colors.panel,
					dotColor: colors.softBtn,
					tooltipPosition: layoutOptions.layoutCfg.position == "left" ? "right" : "left"
				});
				
				// Visual scroll invitation in viewer
				if ( ! isInBuilder ) {
					setTimeout(function() {
						displayScrollInvite(colors);
					}, 0);
					
					if ( sections.length == 1 ) {
						container.find(".navDots").hide();
						container.find("#sidePanelInner, .scroll").css({
							paddingLeft: 0,
							paddingRight: 0
						});
					}
				}
				
				// For Firefox who remember and apply scroll position on page reload
				setTimeout(function(){
					container.find('.sections')[0].scrollTop = 0;
				}, 0);
				
				if ( _isFirstLoad )
					_selectReady = true;
				
				_isFirstLoad = false;
				
				// For IE11 that can't seems to hide the scrollbar otherwise
				setTimeout(function(){
					container.find('.sectionsWrapper').addClass("ie11fix");
					setTimeout(function(){ 
						container.find('.sectionsWrapper').removeClass("ie11fix");
					}, 0);
				}, 0);
			};
			
			this.update = function(layoutOptions, headerCfg, colors)
			{
				setLayout(layoutOptions);
				setColor(colors);
				setHeader(headerCfg);
				_navDots.updateTooltipPlacement(layoutOptions.layoutCfg.position == "left" ? "right" : "left");
			};
			
			this.resize = function(cfg)
			{
				$("#sidePanel .sections").height(
					cfg.height 
					- $("#sidePanel .sectionsWrapper").position().top 
					- $(".builder-content-panel:visible").outerHeight()
				);
				updateAppTitle();
				// TODO should make sure that the current section continue to be visible?
			};
			
			this.showSectionNumber = function(index, forceDisplay, skipScrolling)
			{
				if ( ! container.is(':visible') || ! _selectReady )
					return;
				
				// Unload current section frame if navigating out
				if ( _activeSectionIndex != index ) {
					var activeSectionIFrame = container.find('.section.active .content iframe[data-unload=true]');
					if ( activeSectionIFrame.length ) {
						setTimeout(function(){
							activeSectionIFrame.each(function(i, frame){
								var $frame = $(frame);
								$frame.attr('src', '');
							});
						}, 150);
					}
				}
				
				// Show potential iframe not loaded yet
				StoryText.loadSectionIframe(container.find('.section').eq(index));
				
				// Navigate
				if ( _activeSectionIndex != index || forceDisplay ){
					_selectReady = false;
					
					container.find('.section').removeClass('active').eq(index).addClass('active');
					_navDots.setActive(index);
					
					if ( ! skipScrolling ) {
						// Start from scratch
						if ( ! container.find('.sections').length || ! container.find('.section').length ) {
							_selectReady = true;
							return;
						}

						var scrollTop = container.find('.sections').eq(0)[0].scrollTop,
							sectionsScroll = container.find('.sections')[0].scrollHeight,
							sectionsHeight = container.find('.sections').height(),
							newSectionTop = container.find('.section').eq(index).position().top,
							hasToMove = (newSectionTop <= 0) || (scrollTop + sectionsHeight < sectionsScroll);
						
						setTimeout(function(){
							container.find('.sections').animate(
								{
									scrollTop: scrollTop + newSectionTop
								},
								{
									duration: hasToMove ? 500 : 0,
									complete: function(){
										updateAppTitle(true);
										removeScrollInvite();
										
										if ( isInBuilder )
											updateEditBtnPosition(index);

										// Need to wait for the title to be updated...
										setTimeout(function(){
											_selectReady = true;
											_activeSectionIndex = index;
										}, 100);
										
										// Load potential frame on visible section 
										loadVisibleIframe();
									},
									progress: function(){
										updateAppTitle();
										removeScrollInvite();
									}
								}
							);
						}, 0); // Needed when section defined by url parameter...
					}
					else {
						_activeSectionIndex = index;
						_selectReady = true;
						
						if ( isInBuilder )
							updateEditBtnPosition();
					}
				}
			};
			
			this.getSectionNumber = function()
			{
				return _activeSectionIndex;
			};

			this.destroy = function()
			{
				container.hide();
			};
			
			this.toggleSwitchBuilderButton = function(state)
			{
				container.find('.switchBuilder')
					.html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton)
					.off('click')
					.click(CommonHelper.switchToBuilder)
					.toggle(state);
			};
			
			function setLayout(layoutOptions)
			{
				container.toggleClass("section-social-links", layoutOptions.socialLinks);
				
				container.css("width", layoutOptions.layoutCfg.sizeVal);
				$("body")
					.removeClass("layout-side-left layout-side-right")
					.addClass(layoutOptions.layoutCfg.position == "left" ? "layout-side-left" : "layout-side-right");
			}
			
			/* jshint -W069 */
			function render(sections, sectionIndex)
			{				
				var contentHTML = "";
				
				$.each(sections, function(i, section){
					contentHTML += createSectionBlock(
						i,
						section["status"],
						section["content"],
						section["title"],
						section["OBJECTID"]
					);
				});
				
				container.find('.appTitle').html(sections.length ? sections[0]["title"] : '');
				container.find('.sections').html(StoryText.prepareSectionPanelContent(contentHTML));
				container.find('.section')
					.click(onClickSection)
					.eq(sectionIndex).addClass('active');
				
				// Builder edit btn
				container.find(".panelEditBtn").toggle(!! (isInBuilder && sections && sections.length));
				
				container.show();
				setTimeout(function(){
					// If not in a frame, focus the panel so that keyboard events works
					if ( window.self === window.top )
						container.find(".sections").focus();
					
					loadVisibleIframe();
				}, 0);
				
				
				var titles = container.find('.title');
				
				// Fire a click event when focusing through keyboard and prevent double event when clicking with mouse
				titles
					.focus(function(){
						if (!$(this).data("mouseDown")){
							$(this).click();
						}
					})
					.mousedown(function(){
						$(this).data("mouseDown", true);
					})
					.mouseup(function(){
						$(this).removeData("mouseDown");
					});
				
				// Find the last entry header or "element" of it's description
				var lastTabElement = titles.last();
				if( lastTabElement.siblings(".content").find("[tabindex=0]").length )
					lastTabElement = lastTabElement.siblings(".content").find("[tabindex=0]").last();
				
				// Tab on the last element has to navigate to the header
				lastTabElement.on('keydown', function(e) {
					if( e.keyCode === 9 && ! e.shiftKey ) {
						container.find(".header").removeAttr("aria-hidden");

						if ( ! container.find(".header .linkContainer a").length )
							container.find(".header .linkContainer").attr("tabindex", "0");
						else
							container.find(".header .linkContainer a").attr("tabindex", "0");
						
						container.find(".header .shareIcon").attr("tabindex", "0");
						
						if ( container.find(".header .linkContainer a").length )
							container.find(".header .linkContainer a")[0].focus();
						else if ( container.find(".header .linkContainer").length )
							container.find(".header .linkContainer")[0].focus();
						else if ( container.find(".header .shareIcon:visible").length )
							container.find(".header .shareIcon")[0].focus();
						
						return false;
					}
				});
			}
			
			function createSectionBlock(/*editEl,*/ index, status, content, title)
			{
				var optHtmlClass = "";
				
				/*if(status === "DRAFT")
					optHtmlClass = 'draft-section';*/
				if(status != "PUBLISHED")
					optHtmlClass = 'hidden-section';
				
				return viewSectionTpl({
					optHtmlClass: optHtmlClass,
					title: StoryText.prepareEditorContent(title),
					content: StoryText.prepareEditorContent(content, true),
					lblShare: i18n.viewer.headerFromCommon.share,
					shareURL: CommonHelper.getAppViewModeURL() + "&section=" + (index+1)
				});
			}
			
			function displayScrollInvite(colors)
			{
				// Exit if content fully fits in container
				// TODO resize?
				// that +1 wasn't needed at some point
				if ( container.find('.sections')[0].scrollHeight <= container.outerHeight() - container.find('.header').outerHeight() + 1 )
					return;
				
				container.find(".scroll").show();
				container.find(".scrollInner").tooltip({
					title: i18n.viewer.sideLayout.scroll
				});
				
				CommonHelper.addCSSRule(".scroll .tooltip-inner { background-color: " + colors.text + "; color: " + colors.panel + "; }");
				CommonHelper.addCSSRule(".scroll .tooltip-arrow { border-top-color: " + colors.text + " !important; }");
				
				container.find(".scroll")
					.click(function(){
						container.find(".scroll .tooltip").remove();
						removeScrollInvite();
						container.find('.sections').scrollTop(400);
					})
					.on('mousewheel', function(){
						container.find(".scroll .tooltip").remove();
						container.find('.sections').scrollTop(100);
					});
			}
			
			function onDotNavigation(index)
			{
				if(! _selectReady)
					return;
				
				_this.showSectionNumber(index, true, false);
				navigationCallback(index);
			}
			
			function onClickSection()
			{
				var index = $(this).index();
				
				if ( _activeSectionIndex == index )
					return;
				
				_this.showSectionNumber(index);
				navigationCallback(index);
			}
			
			function onScroll()
			{
				if(! _selectReady)
					return;
				
				var scrollingContainer = container.find(".sections"),
					scrollingContainerTop = scrollingContainer.eq(0)[0].scrollTop,
					scrollingContainerHeight = scrollingContainer.height(),
					newSectionIndex = -1;
				
				updateAppTitle();
				// TODO: doesn't works if content isn't tall enough
				// Shouldn't be displayed?
				removeScrollInvite();
				
				if(scrollingContainerTop === 0)
					newSectionIndex = 0;
				else {
					// TODO!
					var firstMatchingSectionIndex = -1,
						lastSectionTopPosition = -1;
						
					container.find(".section").each(function(){					
						var sectionPos = $(this).position().top;
						if ( sectionPos < scrollingContainerHeight / 2.5 )
							firstMatchingSectionIndex = $(this).index();
								
						lastSectionTopPosition = sectionPos;	
					});
					
					if ( Math.round(lastSectionTopPosition + container.find(".section").last().outerHeight()) == scrollingContainerHeight )
						newSectionIndex = container.find(".section").length - 1;
					else if ( firstMatchingSectionIndex == -1 && lastSectionTopPosition > 0 )
						newSectionIndex = 0;
					else if ( firstMatchingSectionIndex == -1 )
						newSectionIndex = container.find(".section").length - 1;
					else
						newSectionIndex = firstMatchingSectionIndex;
				}
				
				if ( newSectionIndex != _activeSectionIndex ){
					_this.showSectionNumber(newSectionIndex, false, true);
					navigationCallback(newSectionIndex);
				}
				else {
					// Load potential frame on visible section 
					loadVisibleIframe();
					if ( isInBuilder )
						updateEditBtnPosition();
				}
			}
			
			function loadVisibleIframe()
			{
				var scrollingContainer = container.find(".sections"),
					scrollingContainerHeight = scrollingContainer.height(),
					nbSection = container.find(".section").length,
					visibleSections = [],
					searchIndex = null,
					section = null,
					isVisible = false;
				
				//console.log("current:", _activeSectionIndex, scrollingContainerHeight)
				
				// Look for visible section before the current section
				// Search is stopped when the first non visible section is reached
				searchIndex = _activeSectionIndex;
				while( searchIndex > 0 ) {
					section = container.find(".section").eq(--searchIndex);
					isVisible = section.position().top + section.outerHeight() > 8;
					
					if ( isVisible )
						visibleSections.push(searchIndex);
					else
						break;
					
					//console.log("<look for ", searchIndex, isVisible)
				}
				
				// Look for visible section after the current section
				// Search is stopped when the first non visible section is reached
				searchIndex = _activeSectionIndex;
				while( searchIndex < nbSection - 1 ) {
					section = container.find(".section").eq(++searchIndex),
					isVisible = section.position().top < scrollingContainerHeight;
					
					if ( isVisible )
						visibleSections.push(searchIndex);
					else
						break;
					
					//console.log(">look for ", searchIndex, isVisible)
				}
				
				visibleSections.sort();
				
				//console.log("visible sections:", visibleSections);
				
				$.each(visibleSections, function(i, sectionIndex){
					StoryText.loadSectionIframe(container.find('.section').eq(sectionIndex));
				});
			}
			
			function updateEditBtnPosition(forceIndex)
			{
				var currentSectionPos = container.find(".section").eq(forceIndex !== undefined ? forceIndex : _activeSectionIndex).position().top;
				container.find(".panelEditBtn").css("top", currentSectionPos < 6 ? 6 : currentSectionPos);
			}
			
			function updateAppTitle()
			{
				var scrollingContainer = container.find(".sections"),
					scrollingContainerTop = scrollingContainer.eq(0)[0].scrollTop,
					firstSectionTitleHeight = container.find('.title:eq(0)').height(),
					anchorTitle = scrollingContainerTop >= firstSectionTitleHeight,
					titleIsAnchored = container.find('.appTitle').hasClass('anchored');
				
				if ( anchorTitle != titleIsAnchored ) {
					container.find('.appTitle').toggleClass('anchored', anchorTitle);
					container.find('.header').toggleClass('titleanchored', anchorTitle);
					setTimeout(function(){
						_this.resize({height: container.height()});
					}, 300);
				}
			}
			
			function removeScrollInvite()
			{
				container.find(".scroll").slideUp();
			}
			
			function setColor(colors)
			{
				_navDots.update({
					bgColor: colors.dotNav, 
					tooltipBgColor: colors.text, 
					tooltipFontColor: colors.panel
				});
				container.css("background-color", colors.panel);
				container.find('.scroll').css("background-color", colors.panel);
				container.find('.sections').css("color", colors.text);
				container.find('.panelEditBtn').css("background-color", colors.panel);
				
				container.find('.appTitle').css("color", colors.text);
			}
			
			function setHeader(headerCfg)
			{
				HeaderHelper.setLogo(container, headerCfg);
				HeaderHelper.setLink(container, headerCfg);
				HeaderHelper.setSocial(container, headerCfg);
				HeaderHelper.initEvents(container, "bottom");
			}
			
			/*
			 * Builder
			 */
			
			function onClickEdit()
			{
				app.builder.openEditPopup({
					sectionIndex: _activeSectionIndex,
					displayTab: 'content'
				});
			}
			
			function initEvents()
			{
				container.find('.sections').scroll(onScroll);
				
				if ( isInBuilder )
					container.find('.panelEditBtn').click(onClickEdit);
			}
		};
	}
);