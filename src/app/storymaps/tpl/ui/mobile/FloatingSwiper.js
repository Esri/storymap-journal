define(["lib-build/tpl!./FloatingSwiperSection",
		"lib-build/css!./FloatingSwiper",
		"../StoryText",
		"storymaps/common/utils/HeaderHelper",
		"dojo/has",
		"lib-app/jquery",
		"lib-app/swiper/idangerous.swiper",
		"lib-build/css!lib-app/swiper/idangerous.swiper"], 
	function(
		viewSectionTpl,
		viewCss,
		StoryText,
		HeaderHelper,
		has
	){
		return function FloatingSwiper(container, isInBuilder, navigationCallback)
		{
			var _swipePane = null,
				_sectionIndex = null,
				_nbSections = -1;
			
			this.init = function(sections, sectionIndex, headerCfg, colors)
			{
				setColor(colors);
				setHeader(headerCfg);
				
				if ( ! $("body").hasClass("hasTouch") )
					container.addClass("hasDesktopBtn");
				
				render(sections);
				initEvents();
				
				if ( ! isInBuilder && sections.length == 1 )
					container.find(".swipe-invite").hide();
			};
			
			this.update = function(headerCfg, colors)
			{
				setColor(colors);
				setHeader(headerCfg);
			};
			
			this.resize = function()
			{
				_swipePane && _swipePane.resizeFix();
			};
			
			this.showSectionNumber = function(index)
			{
				if ( ! _swipePane )
					return;
				
				if ( ! container.is(':visible') )
					return;
				
				/*
				// Loop mode crappiness
				if ( (_swipePane.activeIndex-1) != index ) {
					if ( (_swipePane.activeIndex-1) == _nbSections && index === 0)
						return;
					if ( _swipePane.activeIndex === 0 && index == _nbSections-1)
						return;
					
					_swipePane.swipeTo(index);
				}
				*/
				
				if ( _sectionIndex != index ) {
					// Show potential iframe not loaded yet
					StoryText.loadSectionIframe(container.find('.section').eq(index));
					
					_swipePane.swipeTo(index);
					_sectionIndex = index;
				}
			};
			
			this.getSectionNumber = function()
			{
				return _swipePane ? _swipePane.activeIndex : null;
			};
			
			this.setView = function(view)
			{
				container.toggleClass('expanded', view == "detail");
				$('body').toggleClass('mobile-view-expanded', view == "detail");
				_swipePane && _swipePane.resizeFix();
			};
			
			/*
			 * Sections rendering
			 */
			
			/* jshint -W069 */
			function render(sections)
			{
				var contentHTML = "";
				
				_nbSections = 0;
				_sectionIndex = null;
				
				$.each(sections, function(i, section) {
					contentHTML += createSectionBlock(
						section["status"],
						section["title"],
						section["content"]
					);
				});
				
				container.find('.swiper-wrapper').html(StoryText.prepareSectionPanelContent(contentHTML));
				container.find('.section').eq(0).addClass('active');
				container.find('.swiper-container, .header').show();
				
				_swipePane = new Swiper(container.find('.swiper-container')[0], {
					mode: 'horizontal',
					// loop mode create an issue on MacOS/Safari when the panel content contains iframe (tested w/ YouTube and Vimeo)
					loop: false,
					keyboardControl: false,
					onSlideChangeEnd: function(swiper) {
						/*
						// Loop mode crappiness
						var index = swiper.activeIndex - 1;
						
						if ( index == -1 )
							index = _nbSections - 1;
						else if ( index == _nbSections ) 
							index = 0;
						*/
						
						if ( _sectionIndex != swiper.activeIndex ) {
							unloadActiveIframe(container.find('.swiper-slide').eq(_sectionIndex));
							navigationCallback(swiper.activeIndex);
						}
						
						updateMouseNavButtons();
						
						_swipePane.resizeFix();
					},
					onSlideClick: function(e) {
						// Find if clicked on a link
						//var closestLink = $(e.clickedTarget).closest("a").eq(0);
						// required to modify setClickedSlide
						// and add _this.clickedTarget = event.target
						
						/*
						if ( closestLink.length ) {
							console.log('click', closestLink)
							closestLink.click();
						}
						*/
						//if ( ! closestLink.length || container.hasClass('expanded') )
						
						// In the embed detail view, allow to click on the previous/next buttons
						// This require to modify iDangero.us swiper too add the clickedTarget property
						if ( container.hasClass("hasDesktopBtn") && container.hasClass("expanded") && $(e.clickedTarget).hasClass("embed-btn2") )
							return;
						
						// An alternative that don't require to modify the lib but it to disable the ability to close in expanded view 
						// if ( !  container.hasClass("hasDesktopBtn") || ! container.hasClass("expanded") )
						toggleDetailView();
					}
				});
				
				updateMouseNavButtons();
				
				// Temporary fix #428 - this is an issue of the component
				if ( has("ie") || has("trident") ) {
					container.find(".title, .help-embed").css("padding-right", 0);
				}
			}
			
			function createSectionBlock(status, title, content)
			{
				//if(status != "Published")
					//return "";
				
				_nbSections++;
				
				return viewSectionTpl({
					title: $("<div>" + StoryText.prepareEditorContent(title) + "</div>").text(),
					content: StoryText.prepareEditorContent(content),
					lblTapDetails: i18n.viewer.mobileView.tapForDetails,
					lblClickDetails: i18n.viewer.mobileView.clickForDetails.toUpperCase(),
					lblSwipe: i18n.viewer.mobileView.swipeToExplore,
					lblTapMap: i18n.viewer.mobileView.tapForMap,
					lblClickMap: i18n.viewer.mobileView.clickForMap
				});
			}
			
			function updateMouseNavButtons()
			{
				container.find(".embed-btn-left, .embed-btn2-left").toggleClass("disabled", _swipePane.activeIndex === 0);
				container.find(".embed-btn-right, .embed-btn2-right").toggleClass("disabled", _swipePane.activeIndex === _swipePane.slides.length - 1);
			}
			
			// TODO common all UI
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
				HeaderHelper.setSocial(container, headerCfg);
				HeaderHelper.setLink(container, headerCfg);

				container.find('.header').toggle(
					!! (headerCfg.linkText 
					|| headerCfg.linkURL 
					|| headerCfg.socialBtn.bitly
					|| headerCfg.socialBtn.facebook 
					|| headerCfg.socialBtn.twitter)
				);
			}
			
			function setColor(colors)
			{
				container.find('.backdrop').css("background-color", colors.panel);
				container.find('.linkContainer').css("color", colors.text);
				container.css("color", colors.text);
			}
			
			/*
			 * Story navigation
			 */
			
			function toggleDetailView()
			{
				//container.toggleClass('expanded');
				//_swipePane.resizeFix();
				//location.hash = container.hasClass('expanded') ? "detail" : "map";
				location.hash = container.hasClass('expanded') ? "map" : "detail";
			}
			
			/*
			 * Init events 
			 * Performed once at component creation
			 */
			
			function initEvents()
			{
				// Social sharing
				HeaderHelper.initEvents(container, "top");
				
				// Embed buttons 
				container.find(".embed-btn, .embed-btn2").click(function(){
					var btnContainer = $(this).parent();
					if ( ! btnContainer.hasClass("disabled") ) {
						if ( btnContainer.hasClass("embed-btn-left") || $(this).hasClass("embed-btn2-left"))
							_swipePane.swipePrev();
						else
							_swipePane.swipeNext();
					}
				});
			}
		};
	}
);