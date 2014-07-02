define(["lib-build/tpl!./FloatingSwiperSection",
		"lib-build/css!./FloatingSwiper",
		"storymaps/common/utils/HeaderHelper",
		"lib-app/jquery",
		"lib-app/swiper/idangerous.swiper",
		"lib-build/css!lib-app/swiper/idangerous.swiper"], 
	function(
		viewSectionTpl,
		viewCss,
		HeaderHelper
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
				//
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
				
				container.find('.swiper-wrapper').html(contentHTML);
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
						if ( _sectionIndex != swiper.activeIndex )
							navigationCallback(swiper.activeIndex);
						
						_swipePane.resizeFix();
					},
					onSlideClick: function(e) {
						// Find if clicked on a link
						var closestLink = $(e.tmpTodo).closest("a").eq(0);
						/*
						if ( closestLink.length ) {
							console.log('click', closestLink)
							closestLink.click();
						}
						*/
						if ( ! closestLink.length || container.hasClass('expanded') )
							toggleDetailView();
					}
				});
			}
			
			function createSectionBlock(status, title, content)
			{
				//if(status != "Published")
					//return "";
				
				_nbSections++;
				
				return viewSectionTpl({
					title: $("<div>" + title + "</div>").text(),
					content: content,
					lblTapDetails: i18n.viewer.mobileView.tapForDetails,
					lblSwipe: i18n.viewer.mobileView.swipeToExplore,
					lblTapMap: i18n.viewer.mobileView.tapForMap
				});
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
			}
		};
	}
);