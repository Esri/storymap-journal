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
				_params = null,
				_nbSections = null;
			
			this.init = function(params)
			{
				_params = params;
				_params.sections = _params.sections || [];
				_params.tooltipPosition = _params.tooltipPosition || "right";
				
				_nbSections = params.sections.length;
				
				render(params.sectionIndex || 0);
				setColor();
				
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
			
			this.update = function(params)
			{
				if ( ! _params )
					return;
				
				params = params || {};

				_params.bgColor = params.bgColor || _params.bgColor;
				_params.tooltipBgColor = params.tooltipBgColor || _params.tooltipBgColor;
				_params.tooltipFontColor = params.tooltipFontColor || _params.tooltipFontColor;
				_params.dotColor = params.dotColor || _params.dotColor;
				
				setColor();
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
					var title = $("<div>" + _params.sections[i].title + "</div>").text();
					
					if ( i === 0 )
						dotsHTML += '<div class="dot glyphicon glyphicon-home" title="' + title + '" data-index="0"></div>';
					else
						dotsHTML += '<div class="dot" title="' + title + '" data-index="' + i + '">&#9679;</div>';
				}

				if ( _nbSections > _groupSize ) {
					if ( groupStart > 0 ) {
						for(var j=0; j <= startIndex - _groupSize; j += _groupSize) {
							prevGroupsHTML += '<div class="navGroup" data-index="' + (j+_groupSize-1) + '">' + (j+1) + '-' + (j+_groupSize) + '</div>'; 
						}
					}
					
					if ( groupStart + _groupSize < _nbSections ) {
						for(var k=startIndex + _groupSize; k < _nbSections; k += _groupSize){
							var groupStartLbl = k+1,
								groupEndLbl = Math.min(k+_groupSize, _nbSections),
								label = groupStartLbl != groupEndLbl ? groupStartLbl + '-' + groupEndLbl : groupStartLbl,
								styleOpt = "";
							
							if ( groupStartLbl >= 100 && groupEndLbl > 100 )
								styleOpt = "font-size: 8px;";
							
							nextGroupsHTML += '<div class="navGroup" data-index="' + k + '" style="' + styleOpt + '">' + label + '</div>';
						}
					}
				}
				
				container.html(
					'<div class="navDotsInner">' 
					+ ' <div class="navDotsNav navDotsUp"></div>'
					+ ' <div class="navGroups navGroupUp' + (!prevGroupsHTML ? ' disabled' : '') + '">'
					+    prevGroupsHTML
					+ ' </div>'
					+ ' <div class="dots">'
					+    dotsHTML 
					+ ' </div>'
					+ ' <div class="navGroups navGroupDown' + (!nextGroupsHTML ? ' disabled' : '') + '">'
					+    nextGroupsHTML
					+ ' </div>'
					+ ' <div class="navDotsNav navDotsDown"></div>'
					+ '</div>'
				);
				
				container.find('.dot').tooltip({
					placement: _params.tooltipPosition
				});
				
				setColor();
				
				_this.setActive(sectionIndex);
			}
			
			function setColor()
			{
				container.css("background-color", _params.bgColor);
				container.find(".dot, .navGroups").css("color", _params.dotColor);
				
				// Tooltip
				CommonHelper.addCSSRule(".navDots .tooltip-inner { background-color: " + _params.tooltipBgColor + "; color: " + _params.tooltipFontColor + "; }");
				if ( _params.tooltipPosition && _params.tooltipPosition != "left" && _params.tooltipPosition != "right" )
					CommonHelper.addCSSRule(".navDots .tooltip-arrow { border-top-color: " + _params.tooltipBgColor + " !important; border-bottom-color: " + _params.tooltipBgColor + " !important; }");
				else
					CommonHelper.addCSSRule(".navDots .tooltip-arrow { border-left-color: " + _params.tooltipBgColor + " !important; border-right-color: " + _params.tooltipBgColor + " !important; }");
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