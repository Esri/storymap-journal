define([
        "lib-build/css!./DotNavBar", 
        "storymaps/common/utils/CommonHelper"
    ],
	function(
		viewCss,
		CommonHelper
	){
		return function DotNavBar(container, navigationCallback)
		{
			var _this = this,
				_groupSize = app.cfg.DOTNAV_GROUPSIZE || 15,
				_sections = null,
				_nbSections = null,
				_tooltipPosition = null;
			
			this.init = function(sections, sectionIndex, bgColor, tooltipBgColor, tooltipFontColor, tooltipPosition)
			{
				_sections = sections;
				_nbSections = sections.length;
				_tooltipPosition = tooltipPosition || "right";
				
				setColor(bgColor, tooltipBgColor, tooltipFontColor);
				render(sectionIndex || 0);
				
				initEvents();
			};
			
			this.setActive = function(index)
			{
				container.find(".navDotsNav").toggle(!! _nbSections);
				
				if ( ! _nbSections )
					return;
				
				if ( ! container.find('.dot[data-index='+index+']').length ){
					render(index);
					return;
				}
				
				container.find('.dot').removeClass('active');
				container.find('.dot[data-index='+index+']').addClass('active');
				
				container.find('.navDotsUp').toggleClass('disabled', index === 0);
				container.find('.navDotsDown').toggleClass('disabled', index == _nbSections - 1);
			};
			
			this.update = function(bgColor, tooltipBgColor, tooltipFontColor)
			{
				setColor(bgColor, tooltipBgColor, tooltipFontColor);
			};
			
			this.resize = function()
			{
				//
			};

			this.destroy = function()
			{
				container.off('click');
				container.empty();
			};
			
			this.updateTooltipPlacement = function(placement)
			{
				container.find('.dot').tooltip('destroy').tooltip({
					placement: placement
				});
			};
			
			function render(sectionIndex)
			{
				var dotsHTML = "",
					prevGroupsHTML = "",
					nextGroupsHTML = "",
					groupStart = parseInt(sectionIndex / _groupSize, 10),
					startIndex = groupStart * _groupSize;
				
				for(var i=startIndex; i < _nbSections && i < startIndex + _groupSize; i++){
					dotsHTML += '<div class="dot" title="' + $("<div>" + _sections[i].title + "</div>").text() + '" data-index="' + i + '">●</div>';
				}

				if ( _nbSections > _groupSize ) {
					if ( groupStart > 0 ) {
						for(var j=0; j <= startIndex - _groupSize; j += _groupSize) {
							prevGroupsHTML += '<div class="navGroup" data-index="' + (j+_groupSize-1) + '">' + (j+1) + '-' + (j+_groupSize) + '</div>'; 
						}
					}
					
					if ( groupStart + _groupSize < _nbSections ) {
						for(var k=startIndex + _groupSize; k < _nbSections; k += _groupSize){
							nextGroupsHTML += '<div class="navGroup" data-index="' + k + '">' + (k+1) + '-' + Math.min(k+_groupSize, _nbSections) + '</div>'; 
						}
					}
				}
				
				container.html(
					'<div class="navDotsInner">' 
					+ ' <div class="navDotsNav navDotsUp"></div>'
					+ ' <div class="navGroups navGroupUp' + (!prevGroupsHTML ? ' disabled' : '') + '">'
					+    prevGroupsHTML
					+ ' </div>'
					+ ' <div>'
					+    dotsHTML 
					+ ' </div>'
					+ ' <div class="navGroups navGroupDown' + (!nextGroupsHTML ? ' disabled' : '') + '">'
					+    nextGroupsHTML
					+ ' </div>'
					+ ' <div class="navDotsNav navDotsDown"></div>'
					+ '</div>'
				);
				
				container.find('.dot').tooltip({
					placement: _tooltipPosition
				});
				
				_this.setActive(sectionIndex);
			}
			
			function setColor(bgColor, tooltipBgColor, tooltipFontColor)
			{
				container.css("background-color", bgColor);
				CommonHelper.addCSSRule(".navDots .tooltip-inner { background-color: " + tooltipBgColor + "; color: " + tooltipFontColor + "; }");
				CommonHelper.addCSSRule(".navDots .tooltip-arrow { border-left-color: " + tooltipBgColor + " !important; border-right-color: " + tooltipBgColor + " !important; }");
			}
			
			function initEvents()
			{
				container.off('click').click(function(e){
					var target = $(e.target);
					
					if (target.hasClass('dot'))
						navigationCallback($(e.target).data('index'));
					
					if (target.hasClass('navDotsUp') && ! target.hasClass('disabled'))
						navigationCallback(container.find('.dot.active').data('index') - 1);
				
					if (target.hasClass('navDotsDown') && ! target.hasClass('disabled'))
						navigationCallback(container.find('.dot.active').data('index') + 1);
				
					if (target.hasClass('navGroup'))
						navigationCallback(target.data('index'));
				});
				
				
			}
		};
	}
);