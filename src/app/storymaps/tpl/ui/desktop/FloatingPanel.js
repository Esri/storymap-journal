define(["lib-build/tpl!./FloatingPanelSection",
		"lib-build/css!./FloatingPanel",
		"lib-build/css!./Common",
		"lib-build/css!storymaps/common/builder/InlineFieldEdit",
		"./DotNavBar",
		"../StoryText",
		"storymaps/common/utils/HeaderHelper",
		"storymaps/common/utils/CommonHelper",
		"storymaps/common/utils/SocialSharing",
		"dojo/has",
		"dojo/topic",
		"lib-app/jquery.hammer.min",
		"lib-app/jquery",
		"lib-app/swiper/idangerous.swiper",
		"lib-build/css!lib-app/swiper/idangerous.swiper",
		"lib-app/jquery.mousewheel"
	],
	function(
		viewSectionTpl,
		viewCss,
		commonCss,
		inlineEditCss,
		DotNavBar,
		StoryText,
		HeaderHelper,
		CommonHelper,
		SocialSharing,
		has,
		topic
	){
		return function FloatingPanel(container, isInBuilder, navigationCallback)
		{
			var _this = this,
				_swipePane = null,
				_swipeOnWheelReady = true,
				_scrollDelayed = true,
				_lastTouchMoveOffset = null,
				_scrollInviteDisplayed = false,
				_sectionIndex = null,
				_navDots = new DotNavBar(container.find('.navDots'), onDotNavigation);

			this.init = function(sections, sectionIndex, layoutOptions, headerCfg, colors)
			{
				if ( _swipePane != null )
					this.destroy();

				_sectionIndex = null;

				setLayout(layoutOptions);
				setColor(colors);
				setHeader(headerCfg);

				initEvents();
				render(sections, sectionIndex);
				isInBuilder && initBuilder();

				_navDots.init({
					sections: sections,
					sectionIndex: sectionIndex,
					bgColor: colors.dotNav,
					tooltipBgColor: colors.text,
					tooltipFontColor: colors.panel,
					dotColor: colors.softBtn,
					activeColor: colors.dotNavActive || '',
					tooltipPosition: layoutOptions.layoutCfg.position == "left" ? "right" : "left"
				});

				container.find('.sections .shareIcon').toggleClass('active', layoutOptions.socialLinks);

				// Visual scroll invitation in viewer
				if ( ! isInBuilder ) {
					setTimeout(function() {
						displayScrollInvite(colors, sectionIndex == sections.length - 1);
					}, 50);

					if ( sections.length == 1 ) {
						container.find(".navDots").hide();
						container.find('.sections').css(layoutOptions.layoutCfg.position == "left" ? "padding-left" : "padding-right", "3%");
					}

					var urlParams = CommonHelper.getUrlParams();
					var isPreview = (urlParams.preview === 'true' || urlParams.preview === '');
					var isAutoplay = (urlParams.autoplay === 'true' || urlParams.autoplay === '');
					if ( app.userCanEdit && has("ie") != 9 && !isPreview && !isAutoplay ) {
						container.find('.error-status').addClass('enabled');
						topic.subscribe("MYSTORIES_SCAN", updateErrorStatus);
						updateErrorStatus("start");
					}
				}
			};

			this.update = function(layoutOptions, headerCfg, colors)
			{
				setLayout(layoutOptions);
				setColor(colors);
				setHeader(headerCfg);
				_navDots.updateTooltipPlacement(layoutOptions.layoutCfg.position == "left" ? "right" : "left");
			};

			this.resize = function()
			{
				var height = container.height()
					- container.find(".separator").position().top
					- (isInBuilder ? container.find(".builder-content-panel").outerHeight() + 12 : 3);

				if ( _scrollInviteDisplayed )
					updateSwiperWrapperForScrollInvite();


				container.find('.swiper-container, .sections, .section').css("height", height);

				container.find('.sections').css(
					'bottom',
					isInBuilder ? container.find(".builder-content-panel").outerHeight() + 4 : 1
				);
				_swipePane && _swipePane.resizeFix();
			};

			this.showSectionNumber = function(index, forceDisplay)
			{
				if ( ! _swipePane )
					return;

				if ( ! container.is(':visible') )
					return;

				if ( _sectionIndex != index || forceDisplay ){
					// Show potential iframe not loaded yet
					StoryText.loadSectionIframe(container.find('.section').eq(index));

					_navDots.setActive(index);
					_swipePane.swipeTo(index);
					_sectionIndex = index;
					this.focusSection(index);

					// Scroll up
					if ( container.find('.swiper-slide-visible').length )
						container.find('.swiper-slide-visible')[0].scrollTop = 0;

					// Fix content scrolling under the title sometimes when navigating fast btw section
					setTimeout(function(){
						_swipePane && _swipePane.resizeFix();
					}, 50);

					removeScrollInvite();
				}

				updateAppTitle();
			};

			this.focusSection = function(index) {
				var sectionTitle = container.find('.section').eq(index).find('.title').eq(0);
				setTimeout(function() {
					sectionTitle.focus();
				}, 200);
			};

			this.getSectionNumber = function()
			{
				return _swipePane ? _swipePane.activeIndex : null;
			};

			this.destroy = function()
			{
				_swipePane = null;
				_swipeOnWheelReady = true;
				_scrollDelayed = true;
				_navDots.destroy();

				container.off('mousewheel');
				$(document).unbind('keyup', onKeyboardEvent);

				if (app.map) {
					app.map.enableScrollWheelZoom();
					app.map.enableKeyboardNavigation();
				}

				container.find(".share_facebook").off('click');
				container.find(".share_twitter").off('click');
				container.find(".share_bitly").off('click');

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

			this.enableSwiperKeybordEvent = function()
			{
				if (_swipePane && !_swipePane.params.keyboardControl) {
					_swipePane.enableKeyboardControl();
					$(document).keyup(onKeyboardEvent);
				}
			};

			this.disableSwiperKeybordEvent = function()
			{
				if (_swipePane && _swipePane.params.keyboardControl) {
					_swipePane.disableKeyboardControl();
					$(document).unbind('keyup', onKeyboardEvent);
				}
			};

			this.attachTabEvents = function() {
				var titles = container.find('.title');

				titles.each(function(i, title) {
					var $title = $(title),
						sectionLastContent = $title,
						tabableContent = $title.parent().find("[tabindex=0]:not(.title),button,a");

					if ( tabableContent.length ) {
						sectionLastContent = tabableContent.last();
					}

					sectionLastContent.on('keydown', function(e) {
						if( e.keyCode === 9 && ! e.shiftKey ) {
							// Focus out when embedded
							if (window != window.top) {
								return true;
							}

							if ( i < titles.length - 1 ) {
								onDotNavigation(i + 1);
								setTimeout(function(){
									titles.eq(i + 1).focus();
								}, 200);
							}
							else {
								focusHeader();
							}
							return false;
						}
					});
				});
			};

			/*
			 * Sections rendering
			 */

			/* jshint -W069 */
			function render(sections, sectionIndex)
			{
				var contentHTML = "";

				$.each(sections, function(i, section) {
					contentHTML += createSectionBlock(
						i,
						section["status"],
						section["content"],
						section["title"],
						section["OBJECTID"]
					);
				});

				container.find('.appTitle').html(sections.length ? sections[0]["title"] : '');
				container.find('.swiper-wrapper').html(StoryText.prepareSectionPanelContent(contentHTML));
				container.show();

				initSwipePane(sectionIndex);

				_this.resize();
				_swipePane.resizeFix();

				// Fix weird issue on Chrome where home section title wasn't appearing
				// TODO this should be cleaned-up
				if ( has("chrome") ) {
					setTimeout(function(){
						container.find('.section').eq(0).find('.title').css(
							"margin-top",
							container.find('.section').eq(0).find('.title').css("margin-top")
						);
					}, 200);
				}


				// Builder edit btn
				container.find(".panelEditBtn").toggle(!! (isInBuilder && sections && sections.length));

				var titles = container.find('.title');

				// Fire a click event when focusing through keyboard and prevent double event when clicking with mouse
				titles
					.focus(function(){
						if (!$(this).data("mouseDown")  && ! $(this).parents('.section').hasClass("swiper-slide-active")){
							onDotNavigation($(this).parents(".section").index());
						}
					})
					.mousedown(function(){
						$(this).data("mouseDown", true);
					})
					.mouseup(function(){
						$(this).removeData("mouseDown");
					});

				titles.each(function(i, title){
					var $title = $(title);

					$title.on('keydown', function(e) {
						if( e.keyCode === 9 ) {
							if ( e.shiftKey ) {
								if ( i > 0 ) {
									onDotNavigation(i - 1);
									setTimeout(function(){
										titles.eq(i - 1).focus();
									}, 200);
								}
								else {
									focusHeader();
								}
								return false;
							}
						}
					});
				});
			}

			function focusHeader()
			{
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
			}

			function createSectionBlock(index, status, content, title)
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
					shareURL: shareURL,
					scroll: i18n.viewer.floatLayout.scroll,
					lblMainstageBtn: i18n.viewer.common.focusMainstage
				});
			}

			function initSwipePane(sectionIndex)
			{
				_swipePane = new Swiper(container.find('.swiper-container')[0], {
					mode: 'vertical',
					loop: false,
					keyboardControl: true,
					cssWidthAndHeight: true,
					onlyExternal: true,
					onSlideNext: function(swiper){
						// Regression with Swiper 2.6.1?
						if ( swiper.activeIndex == 1 )
							return false;

						updateAppTitle();
						unloadActiveIframe(container.find('.swiper-slide').eq(swiper.previousIndex));
						removeScrollInvite();
					},
					onSlidePrev: function(swiper){
						updateAppTitle();
						unloadActiveIframe(container.find('.swiper-slide').eq(swiper.previousIndex));
						removeScrollInvite();
					},
					onSlideChangeEnd: function(swiper){
						if ( _sectionIndex != swiper.activeIndex ) {
							unloadActiveIframe(container.find('.swiper-slide').eq(_sectionIndex));
							StoryText.loadSectionIframe(container.find('.section').eq(swiper.activeIndex));
							navigationCallback(swiper.activeIndex);
						}
					},
					onSlideClick: function(){
						//
					},
					initialSlide: sectionIndex
				});
			}

			function setLayout(layoutOptions)
			{
				container.toggleClass("section-social-links", layoutOptions.socialLinks);

				container.css("width", layoutOptions.layoutCfg.sizeVal);
				$("body")
					.removeClass("layout-float-left layout-float-right")
					.addClass(layoutOptions.layoutCfg.position == "right" ? "layout-float-right" : "layout-float-left");
			}

			function unloadActiveIframe(slide)
			{
				var activeSectionIFrame = slide.find('.content iframe[data-unload=true]');
				if ( activeSectionIFrame.length ) {
					setTimeout(function(){
						activeSectionIFrame.each(function(i, frame){
							var $frame = $(frame);
							$frame.attr('src', '');
						});
					}, 150);
				}
			}

			/*
			 * Header init/update
			 */

			function setHeader(headerCfg)
			{
				HeaderHelper.setLogo(container, headerCfg);
				HeaderHelper.setLink(container, headerCfg);
				HeaderHelper.setSocial(container, headerCfg);
				HeaderHelper.initEvents(container, "bottom");
			}

			function setColor(colors)
			{
				_navDots.update({
					bgColor: colors.dotNav,
					tooltipBgColor: colors.text,
					tooltipFontColor: colors.panel,
					activeColor: colors.dotNavActive || ''
				});
				container.find('.backdrop, .panelEditBtn').css("background-color", colors.panel);
				container.css("color", colors.text);
				container.find('.backdrop').css("opacity", colors.panelOpa || '');
				container.find('.scroll').css({
					'background': 'linear-gradient(transparent, ' + colors.panel + ')'
				});

			}

			function displayScrollInvite(colors, startOnLastSection)
			{
				var swiperWrapperHeight = container.find('.swiper-container').height();

				// Exit if content fully fits in container
				if ( startOnLastSection && container.find('.swiper-slide-active .section-inner').height() < swiperWrapperHeight )
					return;

				_scrollInviteDisplayed = true;

				updateSwiperWrapperForScrollInvite();

				container.find(".scroll").show();
				container.find(".scrollInner").tooltip({
					title: i18n.viewer.sideLayout.scroll,
					trigger: 'hover'
				});

				CommonHelper.addCSSRule(".scroll .tooltip-inner { background-color: " + colors.text + "; color: " + colors.panel + "; }");
				CommonHelper.addCSSRule(".scroll .tooltip-arrow { border-top-color: " + colors.text + " !important; }");

				container.find(".scroll").click(function(){
					container.find(".scroll .tooltip").remove();
					onMouseWheel({ deltaY:1 }, true);
				});
			}

			function updateSwiperWrapperForScrollInvite()
			{
				/*
				var swiperWrapperHeight = container.find('.swiper-container').height();

				container.find('.swiper-wrapper').css({
					height: container.find('.swiper-slide-active').position().top + swiperWrapperHeight - container.find('.scroll').outerHeight(),
					overflow: 'hidden'
				});
				*/
			}

			function removeScrollInvite()
			{
				if ( _scrollInviteDisplayed ) {
					container.find(".scroll").slideUp();
					setTimeout(function(){
						container.find('.swiper-wrapper').css({
							height: 'initial',
							overflow: 'initial'
						});
					}, 200);
					_scrollInviteDisplayed = false;
				}
			}

			/*
			 * Story navigation
			 */

			function onDotNavigation(index)
			{
				unloadActiveIframe(container.find('.swiper-slide-visible'));
				removeScrollInvite();
				_this.showSectionNumber(index, true);
				navigationCallback(index);
			}

			function onMouseWheel(event, forceNextIfReady){
				var delta = event.deltaY * -1,
					returnValue = false;

				// Inertia
				if ( has("mac") )
					delta /= 40;

				// Don't catch scroll wheel in builder when a modal is open
				//if ( $("body").hasClass("modal-open") )
					//return;

				// if configuring the MAP
				if ( container.find(".builder-mask").is(":visible") )
					return false;

				removeScrollInvite();

				if (_swipeOnWheelReady) {
					var slide = container.find(".swiper-slide.swiper-slide-active"),
						slideHeight = slide.outerHeight(),
						scrollTop = slide.scrollTop(),
						scrollHeight = slide.prop('scrollHeight');

					//console.log(slide, slideHeight, scrollTop, scrollHeight, delta);

					// Going down and reach bottom
					if (delta < 0 && slideHeight + scrollTop >= (scrollHeight-1)){
						// Scroll has been delayed once
						if(_scrollDelayed || forceNextIfReady) {
							_swipePane.swipeNext();
							delayScroll2();
						}
						else
							delayScroll();

						// Reached bottom of last section
						if ( slide.index() == slide.parent().children().length -1 )
							returnValue = true;
					}
					// Going up and reach top
					else if(delta > 0 && scrollTop === 0) {
						// Scroll has been delayed once
						if(_scrollDelayed) {
							_swipePane.swipePrev();
							delayScroll2();
						}
						else
							delayScroll();

						// Reached top of home section
						if ( slide.index() === 0 )
							returnValue = true;
					}
					// Up or down 30px
					else {
						_scrollDelayed = false;
						slide.scrollTop(scrollTop - (30 * delta));
					}
				}

				// Return false except on top of home section/bottom last section to allow eventual parent page that embed a MJ to scroll
				return returnValue;
			}

			function delayScroll()
			{
				_scrollDelayed = true;
				_swipeOnWheelReady = false;
				setTimeout(function(){
					_swipeOnWheelReady = true;
				}, has("mac") ? 1400 : 500);
			}

			function delayScroll2()
			{
				if ( has("mac") ) {
					_swipeOnWheelReady = false;
					setTimeout(function(){
						_swipeOnWheelReady = true;
					}, 1200);
				}
			}

			function delayScroll3()
			{
				_scrollDelayed = true;
				_swipeOnWheelReady = false;
				setTimeout(function(){
					_swipeOnWheelReady = true;
				}, 700);
			}

			function updateAppTitle()
			{
				var anchorTitle = $('.swiper-slide-active').index() > 0,
					titleIsAnchored = container.find('.appTitle').hasClass('anchored');

				if ( anchorTitle != titleIsAnchored ) {
					container.find('.appTitle').toggleClass('anchored', anchorTitle);
					container.find('.header').toggleClass('titleanchored', anchorTitle);

					setTimeout(function(){ _this.resize(); }, 350);
					setTimeout(function(){ _this.resize(); }, 500);
				}
			}

			function onKeyboardEvent(e)
			{
				if ( ! _swipePane )
					return;

				if ( e.keyCode == 34 ) {
					_swipePane.swipeNext();
				} else if ( e.keyCode == 33 ) {
					_swipePane.swipePrev();
				} else if ( e.keyCode == 36 ) {
					_swipePane.swipeTo(0);
				} else if ( e.keyCode == 35 ) {
					_swipePane.swipeTo(container.find('.swiper-slide').length - 1);
				} else if (e.keyCode === 9) {
					$('body').addClass('user-is-tabbing');
				}
			}

			/*
			 * Builder
			 */

			function initBuilder()
			{
				//
			}

			function onClickEdit()
			{
				app.builder.openEditPopup({
					sectionIndex: _this.getSectionNumber(),
					displayTab: 'content'
				});
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

				var shareBtn = container.find(".share-story")
					.html(i18n.viewer.headerFromCommon.notshared)
					.append(closeBtn2)
					.toggle(app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared");

				var shareBg = shareBtn.css('background-color');
				var colors = app.data.getWebAppData().getTheme().colors;
				if (shareBg && colors && colors.panel && CommonHelper.colorsAreSimilar(shareBg, colors.panel)) {
					shareBtn.css('box-shadow', '0 0 2px 1px white');
				}

			}


			/*
			 * Init events
			 * Performed once at component creation
			 */

			function initEvents()
			{
				// Swiper doesn't scrolling inside one slide (it manage well scrolling between slide when there is no inner scrolling)

				// Desktop scroll
				container.on('mousewheel', onMouseWheel);

				//
				// Touch scroll
				//

				if ( has("touch") ) {
					/* jshint -W064 */
					/* jshint -W117 */
					Hammer(container.find('.swiper-container')[0], {}).on("dragstart", function() {
						_lastTouchMoveOffset = 0;
						_scrollDelayed = false;
					});

					Hammer(container.find('.swiper-container')[0], {}).on("drag", function(e) {
						var slide = container.find(".swiper-slide.swiper-slide-active"),
							slideHeight = slide.outerHeight(),
							scrollTop = slide.scrollTop(),
							scrollHeight = slide.prop('scrollHeight');

						if ( ! _swipeOnWheelReady )
							return;

						container.find(".swiper-slide.swiper-slide-active").scrollTop(
							container.find(".swiper-slide.swiper-slide-active").scrollTop()
							- e.gesture.deltaY
							+ _lastTouchMoveOffset
						);

						// Reach bottom & going down
						if (slideHeight + scrollTop >= scrollHeight && e.gesture.deltaY < 0){
							// Have waited or is first "move of the drag"
							if ( _scrollDelayed || _lastTouchMoveOffset === 0 )
								_swipePane.swipeNext();
							else
								delayScroll3();
						}
						// Reach top & going up
						else if(scrollTop === 0 && e.gesture.deltaY > 0) {
							// Have waited or is first "move of the drag"
							if( _scrollDelayed || _lastTouchMoveOffset === 0 )
								_swipePane.swipePrev();
							else
								delayScroll3();
						}

						_lastTouchMoveOffset = e.gesture.deltaY;
					});
				}

				// Social sharing
				HeaderHelper.initEvents(container);

				// Disable map keybopard navigation
				// To fix conflict with the Swiper component
				// That guy listen to even on document and I haven't find the proper way to not mess them up
				// ALS 9/2017 -- note we're gonna enable keyboard nav on mainstage focus then disable on exit
				app.map && app.map.disableKeyboardNavigation();

				if ( isInBuilder )
					container.find('.panelEditBtn').off('click').click(onClickEdit);

				$(document).keyup(onKeyboardEvent);
			}
		};
	}
);
