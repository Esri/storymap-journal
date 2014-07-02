define(["lib-build/tpl!./SidePanelSection",
		"lib-build/css!./SidePanel",
		"lib-build/css!storymaps/common/builder/InlineFieldEdit",
		"./DotNavBar",
		"storymaps/common/utils/HeaderHelper",
		"storymaps/common/utils/CommonHelper"
	], 
	function(
		viewSectionTpl,
		viewCss,
		inlineEditCss,
		DotNavBar,
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
				render(sections);
				initEvents();
				
				_navDots.init(
					sections, 
					sectionIndex, 
					colors.dotNav,
					colors.text,
					colors.panel,
					layoutOptions.layoutCfg.position == "left" ? "right" : "left"
				);
				
				// Visual scroll invitation in viewer
				if ( ! app.isInBuilder ) {
					setTimeout(function() {
						displayScrollInvite(colors);
					}, 0);
					
					if ( sections.length == 1 ) {
						container.find(".navDots").hide();
						container.css({
							paddingLeft: 0,
							paddingRight: 0
						});
						container.find(".scroll").css({
							paddingLeft: 0,
							paddingRight: 0
						});
					}
				}
				
				// For Firefox who remember and apply scroll position on page reload
				setTimeout(function(){
					container.find('.sections')[0].scrollTop = 0;
					if ( _isFirstLoad )
						_selectReady = true;
					_isFirstLoad = false;
				}, 0);
				
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
					- $("#sidePanel .sections").position().top 
					- $(".builder-content-panel:visible").outerHeight()
				);
				updateAppTitle();
				// TODO should make sure that the current section continue to be visible?
			};
			
			this.showSectionNumber = function(index, forceDisplay, skipScrolling)
			{
				if ( ! container.is(':visible') )
					return;
				
				if ( _activeSectionIndex != index || forceDisplay ){
					_activeSectionIndex = index;
					container.find('.section').removeClass('active').eq(_activeSectionIndex).addClass('active');
					_navDots.setActive(_activeSectionIndex);
					
					if ( ! skipScrolling ) {
						_selectReady = false;
						
						if ( ! container.find('.sections').length || ! container.find('.section').length )
							return;

						setTimeout(function(){
							container.find('.sections').animate(
								{
									scrollTop: container.find('.sections').eq(0)[0].scrollTop 
										+ container.find('.section').eq(index).position().top
								},
								{
									duration: 500,
									complete: function(){
										updateAppTitle(true);
										removeScrollInvite();
										// need to wait for the title to be updated...
										setTimeout(function(){
											_selectReady = true;
										}, 100);
									},
									progress: function(){
										updateAppTitle();
										removeScrollInvite();
									}
								}
							);
						}, 0); // Needed when section defined by url parameter...
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
			function render(sections)
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
				container.find('.sections').html(contentHTML);
				container.find('.section')
					.click(onClickSection)
					.eq(0).addClass('active');
				
				if ( isInBuilder )
					container.find('.panelEditBtn').click(onClickEdit);
				
				container.show();
				setTimeout(function(){
					container.find(".sections").focus();
				}, 0);
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
					title: title,
					content: content,
					isInBuilder: isInBuilder,
					lblEdit: isInBuilder ? i18n.commonCore.common.edit : '',
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
				
				if ( $(this).hasClass('active') )
					return;
				
				_this.showSectionNumber(index);
				navigationCallback(index);
			}
			
			function selectPostByScrollPosition()
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
					
					if ( lastSectionTopPosition + container.find(".section").last().outerHeight() == scrollingContainerHeight )
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
				_navDots.update(colors.dotNav, colors.text, colors.panel);
				container.css("background-color", colors.panel);
				container.find('.scroll').css("background-color", colors.panel);
				container.find('.sections').css("color", colors.text);
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
				var section = $(this).parents('.section');
				if ( ! section.hasClass('active') )
					return;
				
				app.builder.openEditPopup({
					sectionIndex: section.index(),
					displayTab: 'content'
				});
			}
			
			function initEvents()
			{
				container.find('.sections').scroll(selectPostByScrollPosition);
			}
		};
	}
);