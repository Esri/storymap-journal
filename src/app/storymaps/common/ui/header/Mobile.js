define(["lib-build/css!./Mobile",
		"lib-app/hammer",
		"dojo/topic"], 
	function(
		viewCss,
		Hammer,
		topic
	){
		return function Mobile(container, isInBuilder)
		{
			this.init = function(title, subtitle, bgColor)
			{
				container.find('.title').html(title);
				container.find('.subtitle').html(subtitle);
	
				$(window).scroll(this.hideMobileBanner);
				container.find(".banner").click(this.hideMobileBanner);
	
				container.find(".navBar span").click(function(){
					if( ! $(this).hasClass("current") )
						location.hash = $(this).data("viewid");
				});
				
				var el = document.getElementById('headerMobile');
				/* jshint -W064 */
				Hammer(el, {swipe_velocity: 0.1}).on("swipedown", function() {
					showMobileHeader();
				});
				Hammer(el, {swipe_velocity: 0.1}).on("swipeup", function() {
					hideMobileBanner();
				});
				
				setColor(bgColor);
				
				if( isInBuilder )
					topic.subscribe("HEADER_EDITED", headerEdited);
			};
			
			this.resize = function()
			{
				//
			};
			
			this.update = function(bgColor)
			{
				setColor(bgColor);
			};
	
			this.mobileHeaderIsInFirstState = function()
			{
				return container.hasClass("firstDisplay");
			};
	
			this.setTitleAndSubtitle = function(title, subtitle)
			{
				container.find('.title').html(title);
				container.find('.subtitle').html(subtitle);				
			};
			
			function setColor(bgColor)
			{
				container.css("background-color", bgColor);
			}
			
			function showMobileHeader(immediate)
			{
				container.find(".banner").slideDown(immediate === true ? 0 : 250);
			}
			
			function hideMobileBanner(immediate)
			{
				container.find(".banner").slideUp(immediate === true ? 0 : 250);
				container.removeClass("firstDisplay");
			}
			
			function headerEdited(param)
			{
				container.find('.banner .' + param.src).html(param.value);
			}
			
			this.initLocalization = function()
			{
				container.find('.leftLink').html(i18n.viewer.mobile.navList);
				container.find('.centerLink').html(i18n.viewer.mobile.navMap);
				container.find('.rightLink').html(i18n.viewer.mobile.navDetail);
			};
		};
	}
);