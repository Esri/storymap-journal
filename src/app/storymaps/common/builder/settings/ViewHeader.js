define(["lib-build/tpl!./ViewHeader",
		"lib-build/css!./ViewHeader",
		"../../utils/CommonHelper"], 
	function (viewTpl, viewCss, CommonHelper) {
		return function ViewHeader() 
		{
			var _titleContainer = null,
				_contentContainer = null;
				
			var _logoInput = null,
				_logoTargetInput = null,
				_badLogo = false;
	
			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;
				
				_contentContainer.append(viewTpl({
					explain: i18n.commonCore.settingsHeader.explain,
					logoEsri: i18n.commonCore.settingsHeader.logoEsri,
					logoNone: i18n.commonCore.settingsHeader.logoNone,
					logoCustom: i18n.commonCore.settingsHeader.logoCustom,
					logoCustomlbl: "Image" + ":",
					logoLinkLbl: i18n.commonCore.settingsHeader.logoSocialLink + ":",
					logoCustomHelp: i18n.commonCore.settingsHeader.logoCustomPlaceholder,
					logoTargetHelp: i18n.commonCore.settingsHeader.logoCustomTargetPlaceholder,
					socialExplain: i18n.commonCore.settingsHeader.logoSocialExplain,
					socialText: i18n.commonCore.settingsHeader.logoSocialText + ":",
					socialLink: i18n.commonCore.settingsHeader.logoSocialLink + ":"
				}));
				
				_logoInput = _contentContainer.find("#logoInput");
				_logoTargetInput = _contentContainer.find("#logoTargetInput");
				
				_logoInput.keydown(onLogoInputEnter);
				_logoInput.blur(loadCustomLogo);
				_logoTargetInput.keydown(onTargetInputEnter);
		
				$("input[type=radio]", _contentContainer).click(onLogoRadioClick);
				$("#imgLogo", _contentContainer).error(onLogoLoadError);
				$("#imgLogo", _contentContainer).load(onLogoLoadComplete);
			};
			
			this.present = function(settings) 
			{			
				var logoURL = settings.logoURL,
					themeColor = app.data.getWebAppData().getColors();
				
				_logoInput.attr("disabled", "true");
				_logoTargetInput.attr("disabled", "true");
				
				$("input[name='optionsLogo']", _contentContainer).change(function () {
					var logoOption = $("input[name='optionsLogo']:checked", _contentContainer).val();
					if (logoOption == "none" || logoOption == "esri" ) {
						_logoInput.attr("disabled", "true");
						_logoTargetInput.attr("disabled", "true");
					}
					else {
						_logoInput.removeAttr("disabled");
						_logoTargetInput.removeAttr("disabled");
					}
				});
				
				$("#headerSimulator", _contentContainer).css("background-color", themeColor);
				if (logoURL == app.cfg.HEADER_LOGO_URL || logoURL == null) {
					$('input[name=optionsLogo]:eq(0)', _contentContainer).attr('checked', 'checked');
					$("#imgLogo", _contentContainer).show();
					_logoInput.val("");
					_logoTargetInput.val("");
				}
				else if (logoURL === "NO_LOGO") {
					$('input[name=optionsLogo]:eq(1)', _contentContainer).attr('checked', 'checked');
					_logoInput.val("");
					_logoTargetInput.val("");
				}
				else {
					$('input[name=optionsLogo]:eq(2)', _contentContainer).attr('checked', 'checked');
					$("#imgLogo", _contentContainer).attr("src", logoURL);
					$("#imgLogo", _contentContainer).show();
					$("#logoInput", _contentContainer).val(logoURL);
					_logoTargetInput.val(settings.logoTarget);
					_logoInput.removeAttr("disabled");
					_logoTargetInput.removeAttr("disabled");
				}
				
				$("#selectSocialText", _contentContainer).val(settings.linkText === undefined ? app.cfg.HEADER_LINK_TEXT : settings.linkText);
				$("#selectSocialLink", _contentContainer).val(settings.linkURL === undefined ? app.cfg.HEADER_LINK_URL : settings.linkURL);
				
				// iPad keyboard workaround
				$("#selectSocialText", _contentContainer).blur(function(){ $(window).scrollTop(0); });
				$("#selectSocialLink", _contentContainer).blur(function(){ $(window).scrollTop(0); });
				$("#logoInput", _contentContainer).blur(function(){ $(window).scrollTop(0); });
				_logoTargetInput.blur(function(){ $(window).scrollTop(0); });
				
				// Social sharing
				if ( ! app.cfg.HEADER_SOCIAL.facebook )
					$(".enableFB", _contentContainer)
						.attr("disabled", "disabled")
						.parent()
						.addClass("disabled")
						.attr("title", i18n.commonCore.common.disabledAdmin);
				else if ( ! settings.social || settings.social.facebook )
					$(".enableFB", _contentContainer).prop('checked', true);
				
				if ( ! app.cfg.HEADER_SOCIAL.twitter )
					$(".enableTwitter", _contentContainer)
						.attr("disabled", "disabled")
						.parent()
						.addClass("disabled")
						.attr("title", i18n.commonCore.common.disabledAdmin);
				else if ( ! settings.social || settings.social.twitter )
					$(".enableTwitter", _contentContainer).prop('checked', true);
				
				if( ! app.cfg.HEADER_SOCIAL.bitly || ! app.cfg.HEADER_SOCIAL.bitly.enable || ! app.cfg.HEADER_SOCIAL.bitly.login || ! app.cfg.HEADER_SOCIAL.bitly.key )
					$(".enableBitly", _contentContainer)
						.attr("disabled", "disabled")
						.parent()
						.addClass("disabled")
						.attr("title", i18n.commonCore.common.disabledAdmin);
				else if ( ! settings.social || settings.social.bitly )
					$(".enableBitly", _contentContainer).prop('checked', true);
				
				updateForm();
			};
			
			this.show = function()
			{
				setTimeout(function(){
					var lblMaxWidth = Math.max.apply(Math, _contentContainer.find(".td-lbl").map(function(){ return $(this).width(); }).get());
					_contentContainer.find(".td-lbl").css("min-width", lblMaxWidth);
				}, 200);
			};
			
			this.save = function()
			{		
				var logoOption = _contentContainer.find("input[name=optionsLogo]:checked").val();
				var logoURL;
				var logoTarget;
				
				if (logoOption == "none") {
					logoURL = "NO_LOGO";
					logoTarget = "";
				}
				else if (logoOption == "esri") {
					logoURL = null;
					logoTarget = "";
				}
				else {
					logoURL = _badLogo ? app.cfg.HEADER_LOGO_URL : CommonHelper.prependURLHTTP(_contentContainer.find(".imgLogo").attr("src"));
					logoTarget = _logoTargetInput.val();
				}
				
				// Basic XSS check
				var linkText = $("#selectSocialText", _contentContainer).val() || '';
				linkText = linkText.replace(/<\/?script>/g,'');
				
				var linkURL = $("#selectSocialLink", _contentContainer).val() || '';
				linkURL = linkURL.replace(/<\/?script>/g,'');
				
				return {
					linkText: linkText,
					linkURL: CommonHelper.prependURLHTTP(linkURL),
					logoURL: logoURL,
					logoTarget: CommonHelper.prependURLHTTP(logoTarget),
					social: {
						facebook: $(".enableFB").prop('checked'),
						twitter: $(".enableTwitter").prop('checked'),
						bitly: $(".enableBitly").prop('checked')
					}
				};				
			};
			
			function onLogoRadioClick()
			{
				updateForm();
			}
			
			function onLogoLoadComplete()
			{
			}
			
			function onLogoLoadError() 
			{
				_badLogo = true;			
				_contentContainer.find(".imgLogo").hide();
			}
			
			function onLogoInputEnter(event)
			{
				if (event.keyCode == 13) {
					_badLogo = false;
					loadCustomLogo();
					return false;
				}
				// Fix for webkit browser - if the text exceeded the input size, after hitting backspace the modal shifted
				// Focusing the field after backspace the field is the only fix found
				else if (event.keyCode == 8 ) {
					$("#logoTargetInput").focus();
					$("#logoInput").focus();
				}
			}
			
			function loadCustomLogo()
			{
				var logoUrl = $.trim($("#logoInput", _contentContainer).val());
				_contentContainer.find(".imgLogo").attr("src", CommonHelper.prependURLHTTP(logoUrl)).show();
			}
			
			function onTargetInputEnter(event)
			{
				// Fix for webkit browser - if the text exceeded the input size, after hitting backspace the modal shifted
				// Focusing the field after backspace the field is the only fix found
				if (event.keyCode == 8 ) {
					$("#logoInput").focus();
					$("#logoTargetInput").focus();
				}
			}		
			
			function updateForm()
			{	
				var logoOption = $("input[name=optionsLogo]:checked", _contentContainer).val();
	
				_contentContainer.find(".imgLogo").hide();
	
				if (logoOption == "custom")
					loadCustomLogo();
				else if (logoOption == "esri")
					_contentContainer.find(".imgLogo").attr("src", "resources/tpl/viewer/icons/esri-logo.png").show();
			}
			
			this.initLocalization = function()
			{
				_titleContainer.html(i18n.commonCore.settingsHeader.title);
			};
		};
	}
);