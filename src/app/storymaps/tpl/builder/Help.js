define(["lib-build/tpl!./Help",
		"lib-build/css!./Help",
		"../core/WebApplicationData"], 
	function (
		viewTpl,
		viewCss,
		WebApplicationData
	){
		return function Help(container) 
		{
			var steps = ["add", "settings", "organize", "edit", "share", "tips"],
				nbStep = 6;
			
			var _step = 0,
				_closeCallback = null;
			
			container.append(viewTpl({
				lblHelp: i18n.builder.help.lblHelp,
				lblAdd: i18n.builder.help.lblAdd,
				lblSettings: i18n.builder.help.lblSettings,
				lblOrga: i18n.builder.help.lblOrga,
				lblEdit: i18n.builder.help.lblEdit,
				lblPublish: i18n.builder.help.lblPublish,
				lblTips: i18n.builder.help.lblTips,
				lblMore: i18n.builder.help.lblMore,
				lblLink: i18n.builder.help.lblLink,
				btnNext: i18n.commonCore.common.next,
				btnClose: i18n.commonCore.common.close
			}));
			
			initEvents();
			
			this.show = function(openingStep, closeCallback) 
			{			
				var stepIndex = $.inArray(openingStep, steps);
					
				if ( stepIndex == -1 )
					stepIndex = 0;
				
				toggleMask(true);
			
				container.find('.helpFooter .btn').removeClass("btn-success");
				container.find('.helpBtn').eq(stepIndex).click();
				
				_closeCallback = closeCallback;
				
				if( WebApplicationData.getLayoutId() == "float" )
					app.ui.floatingPanel.disableSwiperKeybordEvent();
				
				container.show();
			};
			
			function drawMask()
			{
				var width   = $("body").width(),
					height  = $("body").height(),
					btnAdd  = $(".builder-content-panel:visible .builder-add"),
					btnOrga = $(".builder-content-panel:visible .builder-organize"),
					steps   = [
						btnAdd.length ? {
							left: btnAdd[0].getBoundingClientRect().left, 
							top: btnAdd[0].getBoundingClientRect().top,
							width: btnAdd.width(),
							height: btnAdd.height()
						} : { },
						{
							left: $(".builder-settings")[0].getBoundingClientRect().left, 
							top: $(".builder-settings")[0].getBoundingClientRect().top,
							width: $(".builder-settings").width(),
							height: $(".builder-settings").height()
						},
						btnOrga.length ? {
							left: btnOrga[0].getBoundingClientRect().left, 
							top: btnOrga[0].getBoundingClientRect().top,
							width: btnOrga.width(),
							height: btnOrga.height()
						} : { },
						null,
						{
							left: $(".builder-share")[0].getBoundingClientRect().left, 
							top: $(".builder-share")[0].getBoundingClientRect().top,
							width: $(".builder-share").width(),
							height: $(".builder-share").height()
						},
						null
					];
				
				$("#builderHelpMaskOverlay")
					.attr("width", width)
					.attr("height", height);
				
				var ctx = document.getElementById('builderHelpMaskOverlay').getContext("2d");
				
				ctx.globalAlpha = 0.60;
				ctx.fillStyle = "#000"; 
				ctx.fillRect(0, 0, width, height);
				
				if ( ! steps[_step] )
					return;

				ctx.globalCompositeOperation = 'destination-out'; 
				ctx.fillRect(
					steps[_step].left - 7,
					steps[_step].top - 7,
					steps[_step].width + 14,
					steps[_step].height + 12
				);
				
				ctx.globalCompositeOperation = 'source-over'; 
				ctx.lineWidth = 4;
				ctx.strokeStyle = '#428BC9';
				ctx.shadowOffsetX = 3;
				ctx.shadowOffsetY = 3;
				ctx.shadowBlur = 5;
				ctx.shadowColor = "#000";
				
				roundRect(
					ctx,
					steps[_step].left - 7,
					steps[_step].top - 7,
					steps[_step].width + 14,
					steps[_step].height + 12,
					5,
					false,
					true
				);				
			}
			
			function roundRect(ctx, x, y, width, height, radius, fill, stroke)
			{
				if (typeof stroke === "undefined" )
					stroke = true;
				if (typeof radius === "undefined")
					radius = 5;

				ctx.beginPath();
				ctx.moveTo(x + radius, y);
				ctx.lineTo(x + width - radius, y);
				ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
				ctx.lineTo(x + width, y + height - radius);
				ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
				ctx.lineTo(x + radius, y + height);
				ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
				ctx.lineTo(x, y + radius);
				ctx.quadraticCurveTo(x, y, x + radius, y);
				ctx.closePath();
				
				if (stroke)
					ctx.stroke();
				if (fill)
					ctx.fill();
			}
			
			function updateContent()
			{
				var content = [
					"<span style='font-size:0.9em'>" 
						+
						app.appCfg.getLayoutThumnail({ 
							layout: WebApplicationData.getLayoutId(),
							options: WebApplicationData.getLayoutOptions().layoutCfg,
							theme: WebApplicationData.getTheme().colors,
							contentLabel: true
						})
						+ i18n.builder.help.content1Div1
							.replace(/%LAYOUT_TITLE%/g, app.data.getCurrentLayoutStaticConfig().title)
							.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
						+ "<br /><br />"
						+ i18n.builder.help.content1Div2.replace(/%LAYOUT_TITLE%/g, app.data.getCurrentLayoutStaticConfig().title)
					+ "</span>",
					"<span>"
						+ "<img class='floatright' style='margin-top:15px' src='resources/tpl/builder/icons/builder-help-topic2.png' /><br />"
						+ i18n.builder.help.content2Div1.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
						+ "<br /><br />"
						+ i18n.builder.help.content2Div2.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
					+ "</span>",
					"<span>"
						+ "<img class='floatright' src='resources/tpl/builder/icons/builder-help-topic3.png' /><br />"
						+ i18n.builder.help.content3Div1
					+ "</span>",
					"<span>"
						+ "<img class='floatright' src='resources/tpl/builder/icons/builder-help-topic4.png' /><br />"
						+ i18n.builder.help.content4Div1.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
					+ "<span>",
					"<span>"
						+ "<img class='floatright' style='margin-top:10px' src='resources/tpl/builder/icons/builder-help-topic5.png' /><br />"
						+ i18n.builder.help.content5Div1.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)
						+ "<br /><br />"
						+ i18n.builder.help.content5Div2.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)					+ "</span>",
					"<span>"
						+ "<img class='floatright' src='resources/tpl/builder/icons/builder-help-topic6-1.gif' />"
						+ i18n.builder.help.content6Div1
						+ '<div style="clear: both; margin-top: 45px;">'
						+   i18n.builder.help.content6Div2.replace(/%LAYOUT_TITLE%/g, app.data.getCurrentLayoutStaticConfig().title)
						+ '</div>'
					+ "</span>"
				];
				
				container.find(".helpText").html(content[_step]);
			}
			
			function updateAllUI()
			{
				toggleBuilderButtons();
				drawMask();
				updateNav();
				updateContent();
				updateFooterBtn();
			}
			
			function updateNav()
			{
				container.find('.helpBtn')
					.removeClass('active')
					.eq(_step).addClass('active');
			}
			
			function updateFooterBtn()
			{
				container.find('.helpFooter .btn-next').toggle(_step != nbStep - 1);
			}
			
			function toggleMask(display)
			{
				$("#builderHelpMaskOverlay").toggle(display);
			}
			
			function toggleBuilderButtons(forceHide)
			{
				var isStepAdd  = _step === 0,
					isStepOrga = _step === 2;
				
				if ( app.data.getStoryLength() > 0 )
					return;
				
				if ( forceHide )
					isStepAdd = isStepOrga = false;
				
				$(".builder-content-panel").toggle(isStepAdd || isStepOrga);
				$("#sidePanel .builder, #floatingPanel .builder").toggleClass("large", isStepAdd || isStepOrga);
				
				if ( isStepAdd )
					$(".builder-add").addClass("active");
				else if ( isStepOrga )
					$(".builder-organize").addClass("active");
			}
			
			function close()
			{
				toggleMask(false);
				toggleBuilderButtons(true);
				container.hide();
				
				_closeCallback && _closeCallback();
				
				if( WebApplicationData.getLayoutId() == "float" )
					app.ui.floatingPanel.enableSwiperKeybordEvent();
			}
			
			function initEvents()
			{
				$("body").append('<canvas id="builderHelpMaskOverlay"></canvas>');
				
				container.find('.helpBtn').click(function(){
					_step = $(this).index();
					updateAllUI();
				});
				
				container.find('.btn-external-help').click(function(){
					window.open(app.cfg.HELP_URL, "_blank");
				});
				
				container.find('.helpFooter .btn-next').click(function(){
					_step++;
					
					if ( _step == nbStep )
						close();
					else
						updateAllUI();
				});
				
				container.find('.helpFooter .btn-close').click(close);
				
				$(document).keyup(function(e) {
					if ( e.keyCode == 27 && container.is(":visible") )
						close();
				});
				
				$(window).resize(drawMask);
			}
		};
	}
);