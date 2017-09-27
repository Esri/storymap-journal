define(["lib-build/tpl!./SidePanelSection",
		"lib-build/css!./SidePanel",
		"lib-build/css!storymaps/common/builder/InlineFieldEdit",
		"./DotNavBar",
		"../StoryText",
		"storymaps/common/utils/HeaderHelper",
		"storymaps/common/utils/CommonHelper",
		"storymaps/common/utils/SocialSharing",
		"dojo/topic",
		"dojo/has"
	],
	function(
		viewSectionTpl,
		viewCss,
		inlineEditCss,
		DotNavBar,
		StoryText,
		HeaderHelper,
		CommonHelper,
		SocialSharing,
		topic,
		has
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

				container.find('.sections .shareIcon').toggleClass('active', layoutOptions.socialLinks);

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

				var urlParams = CommonHelper.getUrlParams();
				var isPreview = (urlParams.preview === 'true' || urlParams.preview === '');
				var isAutoplay = (urlParams.autoplay === 'true' || urlParams.autoplay === '');
				if ( ! app.isInBuilder && app.userCanEdit && has("ie") != 9 && !isPreview && !isAutoplay) {
					container.find('.error-status').addClass('enabled');
					topic.subscribe("MYSTORIES_SCAN", updateErrorStatus);
					updateErrorStatus("start");
				}
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

			this.focusSection = function(index) {
				container.find('.section').eq(index).find('.focus-mainstage').focus();
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
				var switchBuilderBtn = container.find('.switchBuilder')
					.html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton + '<span aria-hidden="true" class="switch-builder-close">×</span>')
					.off('click')
					.click(CommonHelper.switchToBuilder)
					.toggle(state);

				var switchBg = switchBuilderBtn.css('background-color');
				var colors = app.data.getWebAppData().getTheme().colors;
				if (switchBg && colors && colors.panel && CommonHelper.colorsAreSimilar(switchBg, colors.panel)) {
					switchBuilderBtn.css('box-shadow', '0 0 2px 1px white');
				}

				if ( has("ff") || has("ie") || has("trident") == 7) {
					switchBuilderBtn.find('.switch-builder-close').hide();
				}
				else {
					switchBuilderBtn.find('.switch-builder-close').click(function(){
						switchBuilderBtn.hide();
						$(window).resize();
						return false;
					});
				}
			};

			this.enableAutoplay = function()
			{
				HeaderHelper.disableSocialBtnAppSharingAutoplay(container);
			};

			this.toggleSocialBtnAppSharing = function(disable)
			{
				HeaderHelper.toggleSocialBtnAppSharing(container, disable);
			};

			this.attachTabEvents = function() {
				container.find('button,a')
					.on('focus', function() {
						var parentSection = $(this).parents('.section');
						if (!parentSection.length) {
							return;
						}
						onTabToSection(parentSection[0], this);
					});
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
						section.status,
						section.content,
						section.title,
						section.OBJECTID
					);
				});

				container.find('.appTitle').html(sections.length ? sections[0].title : '');
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
						// Focus out when embedded
						if (window != window.top) {
							return true;
						}

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

				var shareURL = SocialSharing.cleanURL(document.location.href, true);
				shareURL += shareURL.match(/\?/) ? '&' : '?';
				shareURL += "section=" + (index+1);

				return viewSectionTpl({
					optHtmlClass: optHtmlClass,
					title: StoryText.prepareEditorContent(title),
					content: StoryText.prepareEditorContent(content, true),
					lblShare: i18n.viewer.headerFromCommon.share,
					lblMainstageBtn: i18n.viewer.common.focusMainstage,
					shareURL: shareURL
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
					title: i18n.viewer.sideLayout.scroll,
					trigger: 'hover'
				});

				CommonHelper.addCSSRule(".scroll .tooltip-inner { background-color: " + colors.text + "; color: " + colors.panel + "; }");
				CommonHelper.addCSSRule(".scroll .tooltip-arrow { border-top-color: " + colors.text + " !important; }");

				container.find(".scroll")
					.click(function(){
						container.find(".scroll .tooltip").remove();
						removeScrollInvite();
						container.find('.sections').animate({scrollTop: '300px'});
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

			function onTabToSection(section) {
				var index = $(section).index();

				if (index >= _activeSectionIndex) {
					onClickSection.bind(section)();
				} else {
					_this.showSectionNumber(index, false, true);
					navigationCallback(index);
				}
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

				if (scrollingContainerTop === 0) {
					newSectionIndex = 0;
				} else {
					// TODO!
					var firstMatchingSectionIndex = -1,
						lastSectionTopPosition = -1;

					container.find(".section").each(function(){
						var sectionPos = $(this).position().top;
						if ( sectionPos < scrollingContainerHeight / 2.5 ) {
							firstMatchingSectionIndex = $(this).index();
						}

						lastSectionTopPosition = sectionPos;
					});

					if ( Math.round(lastSectionTopPosition + container.find(".section").last().outerHeight()) == scrollingContainerHeight ) {
						newSectionIndex = container.find(".section").length - 1;
					}
					else if ( firstMatchingSectionIndex == -1 && lastSectionTopPosition > 0 ) {
						newSectionIndex = 0;
					}
					else if ( firstMatchingSectionIndex == -1 ) {
						newSectionIndex = container.find(".section").length - 1;
					}
					else {
						newSectionIndex = firstMatchingSectionIndex;
					}
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
				var transparentPanel = CommonHelper.getRgba(colors.panel, 0.001);
				container.find('.scroll').css({
					'background': 'linear-gradient(' + transparentPanel + ', ' + colors.panel + ')'
				});
				container.find('.sections').css("color", colors.text);
				container.find('.panelEditBtn').css("background-color", colors.panel);

				container.find('.appTitle').css("color", colors.text);
			}

			/*
			function convertToRgba(hex, a) {
				var test;
				if (hex.length === 3 || hex.length === 4) {
					test = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i;
				} else {
					test = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
				}
				var result = test.exec(hex);
				if (!result) {
					return null;
				}
				return 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + a + ')';
			}
			*/

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
				$('body').on('keydown', function(evt) {
					$('body').off('keydown');
					if ((evt.keyCode === 40 || evt.keyCode === 34) && $('.scroll').is(':visible')) {
						$('.section .title').eq(0).focus();
						container.find('.scroll').trigger('click');
					}
				});

				if ( isInBuilder )
					container.find('.panelEditBtn').off('click').click(onClickEdit);
			}

			/*
			 * My Stories
			 */

			function removeErrorStatus()
			{
				container.find('.check-story').hide();
				if ( ! container.find('.check-story').is(":visible") && ! container.find('.share-story').is(":visible") ) {
					container.find('.error-status').removeClass("enabled");
				}
				return false;
			}

			function removeErrorStatus2()
			{
				container.find('.share-story').hide();
				if ( ! container.find('.check-story').is(":visible") && ! container.find('.share-story').is(":visible") ) {
					container.find('.error-status').removeClass("enabled");
				}
				return false;
			}

			function updateErrorStatus(status)
			{
				var checkBtn = container.find('.check-story'),
					closeBtn = $('<span aria-hidden="true" class="check-story-close">×</span>'),
					closeBtn2 = $('<span aria-hidden="true" class="check-story-close">×</span>');

				checkBtn.off('click').removeClass("forceEvent").show();

				closeBtn.click(removeErrorStatus);
				closeBtn2.click(removeErrorStatus2);

				if ( status == "start" ) {
					checkBtn
						.html('<span class="small-loader"></span>' +  i18n.viewer.headerFromCommon.checking)
						.append(closeBtn)
						.css("cursor", "default");
				}
				else if ( status == "error" ) {
					checkBtn
						.html(i18n.viewer.headerFromCommon.fix)
						.append(closeBtn)
						.css("cursor", "pointer")
						.click(CommonHelper.switchToBuilder)
						.removeClass('btn-warning')
						.addClass('btn-danger');
				}
				else {
					checkBtn
						.html(i18n.viewer.headerFromCommon.noerrors)
						.append(closeBtn)
						.removeClass('btn-warning')
						.addClass('btn-success');
				}

				// IE and FF has trouble with the close button being inside a button
				if ( (has("ff") || has("ie") || has("trident") == 7) && status != "error" ) {
					checkBtn
						.click(removeErrorStatus)
						.addClass("forceEvent");
				}

				//
				// Sharing
				//

				var shareBtn = container.find('.share-story')
					.html(i18n.viewer.headerFromCommon.notshared)
					.append(closeBtn2)
					.toggle(app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared");

				var shareBg = shareBtn.css('background-color');
				var colors = app.data.getWebAppData().getTheme().colors;
				if (shareBg && colors && colors.panel && CommonHelper.colorsAreSimilar(shareBg, colors.panel)) {
					shareBtn.css('box-shadow', '0 0 2px 1px white');
				}
			}
		};
	}
);
