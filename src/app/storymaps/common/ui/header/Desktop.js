define(["lib-build/css!./Desktop",
		"../../utils/HeaderHelper",
		"../../builder/InlineFieldEdit",
		"../../utils/CommonHelper",
		"dojo/has", 
		"dojo/topic"], 
	function(
		viewCss,
		HeaderHelper,
		InlineFieldEdit,
		CommonHelper, 
		has, 
		topic
	){
		return function Desktop(container, isInBuilder)
		{
			this.init = function(hide, title, subtitle, socialCfg, bgColor, displaySwitchBuilderButton)
			{
				if (hide) {
					container.addClass('hideDesktop');
					return;
				}
	
				// Desktop builder
				if( isInBuilder ) {
					container.addClass('isBuilder');
					title =  "<div class='text_edit_label'>" + (title || i18n.commonCore.inlineFieldEdit.editMe) + "</div>";
					title += "<div class='text_edit_icon' title='"+i18n.viewer.commonHeader.templateTitle+"'></div>";
					title += "<textarea rows='1' class='text_edit_input form-control' type='text'></textarea>";
	
					subtitle =  "<span class='text_edit_label'>" + (subtitle || i18n.commonCore.inlineFieldEdit.editMe) + "</span>";
					subtitle += "<div class='text_edit_icon' title='"+i18n.viewer.commonHeader.templateSubtitle+"'></div>";
					subtitle += "<textarea rows='2' class='text_edit_input form-control' type='text'></textarea>";
				}
	
				container.find('.title').html(title);
				container.find('.subtitle').html(subtitle);
	
				// Desktop builder
				if( isInBuilder )
					new InlineFieldEdit(container, editFieldsEnterEvent, editFieldsExitEvent);
				
				if( ! isInBuilder && ! subtitle ) {
					container.find('.title').css("padding-top", 40);
					container.find('.subtitle').css("height", 32);
				}
	
				if ( displaySwitchBuilderButton )
					container.find(".switchBuilder").click(CommonHelper.switchToBuilder).show();
	
				setSocialArea(socialCfg);
				setColor(bgColor);
				HeaderHelper.initEvents(container);
			};
			
			this.resize = function(widthViewport)
			{
				var rightAreaWidth = Math.max(container.find(".logoImg").outerWidth() + 50, container.find(".rightArea").outerWidth() + 20);
				container.find(".textArea").width(widthViewport - rightAreaWidth - 15);
			};
			
			this.update = function(socialCfg, bgColor)
			{
				setColor(bgColor);
				setSocialArea(socialCfg);
			};
			
			this.getTitle = function()
			{
				if ( isInBuilder )
					return container.find('.title .text_edit_label').html();
				else
					return container.find('.title').html();
			};
			
			this.getSubtitle = function()
			{
				if ( isInBuilder )
					return container.find('.subtitle .text_edit_label').html();
				else
					return container.find('.subtitle').html();
			};
			
			this.setTitleAndSubtitle = function(title, subtitle)
			{
				var defaultText = isInBuilder ? i18n.commonCore.inlineFieldEdit.editMe : '';
				
				container.find('.title' + (isInBuilder ? ' .text_edit_label' : '')).html(title || defaultText);
				container.find('.subtitle' + (isInBuilder ? ' .text_edit_label' : '')).html(subtitle || defaultText);
			};
			
			function setColor(bgColor)
			{
				container.css("background-color", bgColor);
				container.find("#builderPanel").css("background-color", bgColor);
			}
			
			/*
			 * Social area init/update
			 */
			
			function setSocialArea(socialCfg)
			{
				HeaderHelper.setLogo(container, socialCfg);
				HeaderHelper.setLink(container, socialCfg);
				HeaderHelper.setSocial(container, socialCfg);
			}
	
			/*
			 * Builder
			 */
	
			function editFieldsEnterEvent()
			{
				//
			}
			
			function editFieldsExitEvent(src, value)
			{
				setTimeout(function(){ 
					topic.publish("HEADER_EDITED", {
						src: $(src).attr("class"), 
						value: value
					});
				}, has("ios") || has("ie") >= 10 ? 700 : 0);
				
				app.builder.hideSaveConfirmation();
			}
	
			this.initLocalization = function()
			{
				container.find('.switchBuilder').html('<div class="text_edit_icon editIcon"></div>' + i18n.viewer.commonHeader.builderButton);
				container.find('.share_bitly').attr("title", i18n.viewer.commonHeader.bitlyTooltip);
			};
		};
	}
);