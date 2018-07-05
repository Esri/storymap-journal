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
				_firstGroupSize = null,
				_nbSections = null;

			this.init = function(params)
			{
				_params = params;
				_params.sections = _params.sections || [];
				_params.tooltipPosition = _params.tooltipPosition || "right";

				_nbSections = params.sections.length;
				if (_groupSize === 15 && _nbSections > 15) {
					_firstGroupSize = 14;
				}

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
				_params.activeColor = params.activeColor;

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
					placement: placement,
					trigger: 'hover'
				});
			};

			function render(sectionIndex)
			{

				var dotsHTML = "",
					prevGroupsHTML = "",
					nextGroupsHTML = "",
					groupStart = parseInt(sectionIndex / _groupSize, 10),
					startIndex = groupStart * _groupSize;
				if (_firstGroupSize) {
					if (sectionIndex === _firstGroupSize || (sectionIndex + 1) % _groupSize === 0) {
						groupStart++;
					}
					if (groupStart !== 0) {
						startIndex = _firstGroupSize + (groupStart - 1) * _groupSize;
					}
				}


				var numDots = (startIndex === 0 && _firstGroupSize) ? _firstGroupSize : _groupSize;

				for (var i = startIndex; i < _nbSections && i < startIndex + numDots; i++) {
					var title = $("<div>" + _params.sections[i].title + "</div>").text();
					title = title.replace(/"/g, '&quot;');
					var ariaLabel = i18n.viewer.a11y.toSectionAria.replace('%SECTION_NUMBER%', i+1).replace('%SECTION_TITLE%', title);

					if ( i === 0 )
						dotsHTML += '<div role="button" aria-label="' + ariaLabel + '" tabindex="0" class="dot glyphicon glyphicon-home" title="' + title + '" data-index="0"></div>';
					else
						dotsHTML += '<div role="button" aria-label="' + ariaLabel + '" tabindex="0" class="dot" title="' + title + '" data-index="' + i + '">&#9679;</div>';
				}

				if ( _nbSections > _groupSize ) {
					var firstGroupSize = _firstGroupSize || _groupSize;
					// there are groups before the dots
					if (groupStart > 0) {
						var thisGroupSize = firstGroupSize;
						for (var j = 0, m = 0; j <= startIndex - thisGroupSize; j = firstGroupSize + m * _groupSize, m++) {
							var prevGroupStart = j + 1,
									prevGroupEnd = j + thisGroupSize,
									prevGroupRange = prevGroupStart + '-' + prevGroupEnd,
									prevGroupAria = i18n.viewer.a11y.toPrevGroupAria.replace('%SECTION_RANGE%', prevGroupRange);
							thisGroupSize = _groupSize;
							prevGroupsHTML += '<div class="navGroup navGroupDown" role="button" title="' + prevGroupAria + '" aria-label="' + prevGroupAria + '" tabindex="0" data-index="' + (j+_groupSize-1) + '">' + prevGroupStart + '</div>';
						}
					}

					if (groupStart + _groupSize < _nbSections ) {
						var firstNextStart = startIndex + numDots;
						for (var k = firstNextStart, n = 1; k < _nbSections; k = firstNextStart + (n * _groupSize), n++) {
							var nextGroupStart = k + 1,
									nextGroupEnd = Math.min(k + _groupSize, _nbSections),
									nextGroupRange = nextGroupStart === nextGroupEnd ? nextGroupStart : nextGroupStart + '-' + nextGroupEnd,
									nextGroupAria = i18n.viewer.a11y.toNextGroupAria.replace('%SECTION_RANGE%', nextGroupRange),
									styleOpt = '';

							if ( nextGroupStart >= 100 && nextGroupEnd > 100 ) {
								styleOpt = "font-size: 8px;";
							}
							nextGroupsHTML += '<div class="navGroup navGroupUp" role="button" title="' + nextGroupAria + '" aria-label="' + nextGroupAria + '" tabindex="0" data-index="' + k + '" style="' + styleOpt + '">' + nextGroupStart + '</div>';
						}
					}
				}

				container.html(
					'<div class="navDotsInner" role="navigation" aria-label="' + i18n.viewer.a11y.navAria + '">'
					+ ' <div class="navDotsNav navDotsUp" role="button" tabindex="0" aria-label="' + i18n.viewer.a11y.navPreviousAria + '"></div>'
					+ ' <div class="navGroups navGroupUp' + (!prevGroupsHTML ? ' disabled' : '') + '">'
					+    prevGroupsHTML
					+ ' </div>'
					+ ' <div class="dots">'
					+    dotsHTML
					+ ' </div>'
					+ ' <div class="navGroups navGroupDown' + (!nextGroupsHTML ? ' disabled' : '') + '">'
					+    nextGroupsHTML
					+ ' </div>'
					+ ' <div class="navDotsNav navDotsDown" role="button" tabindex="0" aria-label="' + i18n.viewer.a11y.navNextAria + '"></div>'
					+ '</div>'
				);

				container.find('.dot').tooltip({
					placement: _params.tooltipPosition,
					trigger: 'hover',
					html: true
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

				// Active color
				if (_params.activeColor) {
					CommonHelper.addCSSRule(".navDots .dot.active, .navDots .dot:hover { color: " + _params.activeColor + " !important; }", "dotNavActiveColor");
				}
				else {
					$('#dotNavActiveColor').remove();
				}

				container.toggleClass('theme-black', _params.bgColor == '#FFFFFF');
			}

			function initEvents() {
				container.off('click keypress').on('click keypress', _.debounce(onClickKeypress, 200, true));
			}

			function onClickKeypress(e) {
				var target = $(e.target);

				if (target.hasClass('dot'))
					navigationCallback($(e.target).data('index'));

				if (target.hasClass('navDotsUp') && ! target.hasClass('disabled'))
					navigationCallback(container.find('.dot.active').data('index') - 1);

				if (target.hasClass('navDotsDown') && ! target.hasClass('disabled'))
					navigationCallback(container.find('.dot.active').data('index') + 1);

				if (target.hasClass('navGroupUp'))
					navigationCallback(target.data('index'));

				if (target.hasClass('navGroupDown'))
					navigationCallback(target.data('index') - 14);
			}
		};
	}
);
