define(["lib-build/tpl!./FloatingPanelSection",
		"lib-build/css!./FloatingPanel",
		"lib-build/css!./Common",
		"lib-build/css!storymaps/common/builder/InlineFieldEdit",
		"./DotNavBar",
		"storymaps/common/utils/HeaderHelper",
		"storymaps/common/utils/CommonHelper",
		"dojo/has",
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
		HeaderHelper,
		CommonHelper,
		has
	){		
		return function FloatingPanel(container, isInBuilder, navigationCallback)
		{
			var _this = this,
				_swipePane = null,
				_swipeOnWheelReady = true,
				_scrollDelayed = true,
				_lastTouchMoveOffset = null,
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

				_navDots.init(
					sections, 
					sectionIndex, 
					colors.dotNav, 
					colors.text,
					colors.panel,
					layoutOptions.layoutCfg.position == "left" ? "right" : "left"
				);
				
				if ( ! isInBuilder && sections.length == 1 ) {
					container.find(".navDots").hide();
					container.css({
						paddingLeft: 0,
						paddingRight: 0
					});
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
					_navDots.setActive(index);
					_swipePane.swipeTo(index);
					_sectionIndex = index;
					
					// Scroll up
					if ( container.find('.swiper-slide-visible').length )
						container.find('.swiper-slide-visible')[0].scrollTop = 0;
				}
				
				updateAppTitle();
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

				$("body").off('mousewheel');

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
				container.find('.switchBuilder')
					.html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton)
					.off('click')
					.click(CommonHelper.switchToBuilder)
					.toggle(state);
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
				container.find('.swiper-wrapper').html(contentHTML);
				container.show();

				container.find('.panelEditBtn').click(onClickEdit);
				
				initSwipePane(sectionIndex);
				
				_this.resize();
				_swipePane.resizeFix();
				
				container.find('.scroll-down').click(function(){
					_swipePane.swipeNext();
					navigationCallback(_swipePane.activeIndex);
				});
				container.find('.scroll-up').click(function(){
					_swipePane.swipePrev();
					navigationCallback(_swipePane.activeIndex);
				});
			}
			
			function createSectionBlock(index, status, content, title)
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
					shareURL: CommonHelper.getAppViewModeURL() + "&section=" + (index+1),
					scroll: i18n.viewer.floatLayout.scroll
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
					onSlideChangeEnd: function(swiper){
						if ( _sectionIndex != swiper.activeIndex )
							navigationCallback(swiper.activeIndex);
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
				_navDots.update(colors.dotNav, colors.text, colors.panel);
				container.find('.backdrop').css("background-color", colors.panel);
				container.css("color", colors.text);
			}
			
			/*
			 * Story navigation
			 */
			
			function onDotNavigation(index)
			{
				_this.showSectionNumber(index, true);
				navigationCallback(index);
			}
			
			function onMouseWheel(event){
				var delta = event.deltaY * -1;
				
				// Inertia
				if ( has("mac") )
					delta /= 40;
				
				// Don't catch scroll wheel in builder when a modal is open
				//if ( $("body").hasClass("modal-open") )
					//return;

				// if configuring the MAP
				if ( container.find(".builder-mask").is(":visible") )
					return;
				
				if (_swipeOnWheelReady) {
					var slide = container.find(".swiper-slide.swiper-slide-active"),
						slideHeight = slide.outerHeight(),
						scrollTop = slide.scrollTop(),
						scrollHeight = slide.prop('scrollHeight');
					
					//console.log(slide, slideHeight, scrollTop, scrollHeight, delta);
					
					// Going down and reach bottom
					if (delta < 0 && slideHeight + scrollTop >= scrollHeight){
						// Scroll has been delayed once
						if(_scrollDelayed) {
							_swipePane.swipeNext();
							delayScroll2();
						}
						else
							delayScroll();
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
					}
					// Up or down 30px
					else {
						_scrollDelayed = false;
						slide.scrollTop(scrollTop - (30 * delta));
					}
				}
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
					setTimeout(function(){
						_this.resize();
					}, 350);
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
				var section = $(this).parents('.section');
				if ( ! section.hasClass('swiper-slide-active') )
					return;
				
				app.builder.openEditPopup({
					sectionIndex: section.index(),
					displayTab: 'content'
				});
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
				// Touch and mouse drag scroll
				//

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


				// Social sharing
				HeaderHelper.initEvents(container);
			}
		};
	}
);