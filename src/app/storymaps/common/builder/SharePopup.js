define(["lib-build/tpl!./SharePopup",
		"lib-build/css!./SharePopup",
		"../utils/CommonHelper",
		"../ui/share/ShareURLPanel",
		"../ui/share/ShareEmbedPanel"
	], 
	function (viewTpl, viewCss, CommonHelper, ShareURLPanel, ShareEmbedPanel) {
		return function SharePopup(container)
		{
			container.append(viewTpl({
				firstSavePreview: i18n.commonCore.share.firstSavePreview,
				firstSaveShare: i18n.commonCore.share.firstSaveShare
			}));
			
			var _this = this,
				_shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
				_shareEmbedPanel = new ShareEmbedPanel(container.find('.shared-answer0'));
			
			container.find('.answer').collapse();
			
			container.on('shown.bs.modal', function () {
				_shareURLPanel.focus();
			});
			
			this.present = function(isFirstSave) 
			{			
				//isFirstSave = true;
				//app.data.getWebAppItem().access = "private";
				
				var appUrl = CommonHelper.getAppViewModeURL(),
					itemUrl = CommonHelper.getItemURL(app.indexCfg.sharingurl, app.data.getWebAppItem().id),
					// TODO support no webmap
					webmapUrl = CommonHelper.getItemURL(app.indexCfg.sharingurl, app.data.getWebMap() ? app.data.getWebMap().item.id : null),
					contentUrl = CommonHelper.getMyContentURL(app.indexCfg.sharingurl);
				
				// Clean UI
				container.find('.modal-logo').toggleClass('firstSave', isFirstSave);
				container.find('.share, .first-save, .not-shared').addClass('hide');
				container.find('.modal-footer .success, .modal-footer .error').hide();
				
				if (isFirstSave) 
					presentFirstSave(appUrl, contentUrl);
				else {
					var isPrivate = app.data.getWebAppItem().access == "private";
					if ( isPrivate ) 
						presentSharing(itemUrl, appUrl, webmapUrl, function(){
							presentShared(appUrl, itemUrl, webmapUrl, contentUrl);
						});
					else 
						presentShared(appUrl, itemUrl, webmapUrl, contentUrl);
						
					container.find('.modal-title').html(i18n.commonCore.share.shareTitle);
					displayShareDialog(isPrivate);
				}
				
				container.find('.btn-preview').off('click').click(function(){
					window.open(CommonHelper.getAppViewModeURL(), '_blank');
				});
				
				container.find('.btnClose').html(i18n.commonCore.common.close);
				container.find(".modal-header .close").attr("data-dismiss", "modal");
				container.modal({keyboard: true});
			};
			
			// First save in from scratch mode: dialog with the admin link
			function presentFirstSave(appUrl, contentUrl)
			{	
				container.find('.modal-title').html(i18n.commonCore.share.firstSaveTitle);
				container.find('.first-save .header').html(i18n.commonCore.share.firstSaveHeader.replace("%PORTAL%", app.portal.portalName));
				
				container.find('.first-save .btn-share').off('click').click(function(){
					_this.present();
				});
				
				container.find('.first-save .question1').html(i18n.commonCore.share.shareQ2bis);
					
				container.find('.first-save .answer1').html(
					i18n.commonCore.share.firstSaveA1
						.replace("%PORTAL%", app.portal.portalName)
						.replace('%LINK1%', '<div style="text-align: center; margin-top: 8px; margin-bottom: 8px;"><input type="text" class="form-control bitlylink" id="firstSavebitly2" value="' + appUrl + '&edit' + '"/></div>')
					+ i18n.commonCore.share.firstSaveA1bis
						.replace("%PORTAL%", app.portal.portalName)
						.replace('%LINK2%', contentUrl)
				);
				
				container.find('.first-save').removeClass('hide');
				
				if (app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.bitly && app.cfg.HEADER_SOCIAL.bitly.enable)
					getBitLy(appUrl + '&edit', '#firstSavebitly2');
				else
					setTimeout(function(){ $("#firstSavebitly2").focus(); }, 100);
			}
			
			// Sharing screen
			function presentSharing(itemUrl, appUrl, webmapUrl, successCallback)
			{
				container.find('.share .not-shared .header').html(i18n.commonCore.share.sharePrivateHeader);
				
				// Share public
				container.find('.not-shared .btn-sharePublic').html(i18n.commonCore.share.sharePrivateBtn1);
				if( app.portal && app.portal.canSharePublic !== undefined && ! app.portal.canSharePublic ) {
					container.find('.not-shared .btn-sharePublic').addClass("disabled");
					container.find('.not-shared .btn-sharePublicWrapper').tooltip({ placement: 'top', title: i18n.commonCore.common.disabledAdmin });
				}
				else {
					container.find('.btn-sharePublic').off('click').on('click', function() {
						share("public", successCallback);
					});
				}
				
				// Share with organization
				if( app.portal && app.portal.isOrganization ) {
					container.find('.not-shared .btn-shareOrga').html(i18n.commonCore.share.sharePrivateBtn2);
					container.find('.btn-shareOrga').off('click').on('click', function() {
						share("account", successCallback);
					});
				}
				else
					container.find('.not-shared .btn-shareOrga').remove();
					
				// If user is not webmap owner (and he hasn't disabled warning)
				if ( app.data.getWebMap() && app.data.getWebMap().item.owner != app.portal.getPortalUser().username ) {
					var sharingStatus = null;
					
					if (app.data.getWebMap().item.access == "account") {
						sharingStatus = i18n.commonCore.share.sharePrivateWarningWith1;
						container.find('.not-shared .btn-sharePublic').addClass("disabled").off('click');
					}
					else if (app.data.getWebMap().item.access == "private") {
						sharingStatus = i18n.commonCore.share.sharePrivateWarningWith2;
						container.find('.not-shared .btn-sharePublic, .not-shared .btn-shareOrga').addClass("disabled").off('click');
					}
					
					if( sharingStatus ) {
						container.find('.share-warning').html(
							i18n.commonCore.share.sharePrivateWarning
								.replace('%WITH%', sharingStatus)
								.replace('%LINK%', webmapUrl)
						).show();
					}
				}
					
				container.find('.modal-footer .error').html(
					i18n.commonCore.share.sharePrivateErr
					+ ' ' 
					+ i18n.commonCore.share.shareA1.toLowerCase()
						.replace('%shareimg%', '<div class="shareimg"></div>')
						.replace('%link1%', itemUrl)
					+ '.'
				);
			}
			
			// Alrady shared screen
			function presentShared(appUrl, itemUrl, webmapUrl, contentUrl)
			{
				_shareURLPanel.present(appUrl);
				
				// Explain
				container.find('.shared-dialog .explain').html(
					app.data.getWebAppItem().access == "public" ? i18n.commonCore.share.shareHeader1 : i18n.commonCore.share.shareHeader2
				);
				
				// Question 0
				container.find('.shared-question0')
					.html(i18n.commonCore.share.shareQ0)
					.on('click', function() { 
						container.find('.shared-answer0').collapse('toggle');
					}
				);
				
				_shareEmbedPanel.present(appUrl);
				
				// Question 1
				container.find('.shared-question1')
					.html(app.data.getWebAppItem().access == "account" ? i18n.commonCore.share.shareQ1Opt2 : i18n.commonCore.share.shareQ1Opt1)
					.on('click', function() { 
						container.find('.shared-answer1').collapse('toggle');
					}
				);
					
				container.find('.shared-answer1').html(i18n.commonCore.share.shareA1
					.replace('%SHAREIMG%', '<span class="shareImg"></span>')
					.replace('%LINK1%', itemUrl)
					.replace('%LINK2%', webmapUrl)
				);
				
				// Question 2
				container.find('.shared-question2')
					.html(i18n.commonCore.share.shareQ2bis)
					.on('click', function() { 
						container.find('.shared-answer2').collapse('toggle');
					}
				);
				
				container.find('.shared-answer2').html(i18n.commonCore.share.shareA2div1
					.replace('%LINK1%', '<input type="text" class="form-control bitlylink" id="firstSavebitly3" value="' + appUrl + '&edit' + '" style="width: 170px; margin-bottom: 0px; height: 22px; font-size: 14px;"/>')
					.replace('%LINK2%', itemUrl)
					+ '<div style="margin-top: 3px">' + i18n.commonCore.share.shareA2div2.replace("%PORTAL%", app.portal.portalName) + '</div>'
					+ '<div class="shareImgContainer"><span class="switchBuilderImg"></span></div>'
				);
				
				// Question 3
				container.find('.shared-question3')
					.html(i18n.commonCore.share.shareQ3)
					.on('click', function() { 
						container.find('.shared-answer3').collapse('toggle');
					}
				);
				container.find('.shared-answer3').html(i18n.commonCore.share.shareA3
					.replace('%TPL_NAME%', app.cfg.TPL_NAME)
					.replace('%LINK1%', webmapUrl)
					.replace('%LINK2%', itemUrl)
					.replace('%LINK3%', contentUrl)
					.replace("%PORTAL%", app.portal.portalName)
				);
				
				if (app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.bitly && app.cfg.HEADER_SOCIAL.bitly.enable) {
					getBitLy(appUrl, '#firstSavebitly1');
					getBitLy(appUrl + '&edit', '#firstSavebitly3');
				}
				else
					setTimeout(function(){ $("#firstSavebitly1").focus(); }, 100);
					
				container.find('.answer').collapse('hide');
			}
			
			function displayShareDialog(displayNotShared)
			{
				container.find('.share').removeClass('hide');
				container.find('.not-shared').toggleClass('hide', ! displayNotShared);
				container.find('.shared-dialog').toggleClass('hide', displayNotShared);
			}
			
			function share(type, successCallback)
			{
				sharePrepare();
				app.builder.shareAppAndWebmap(type, function(success){
					if (success) {
						successCallback();
						shareSuccess();
					}
					else 
						shareError();
				});
			}
			
			function sharePrepare()
			{
				container.find('.modal-footer .footer-status').hide();
				container.find('.share .btn, .btnClose').attr("disabled", "disabled");
				container.find('.modal-footer .success').html(i18n.commonCore.share.sharePrivateProgress);
				container.find('.modal-footer .success').show();
				container.find('.modal-footer .error').hide();
			}
			
			function shareSuccess()
			{
				container.find('.modal-footer .success').html(i18n.commonCore.share.sharePrivateOk);
				setTimeout(function(){
					container.find('.modal-footer .success').hide();
					displayShareDialog(false);
					container.find('.share .btn, .btnClose').removeAttr("disabled");
					$("#firstSavebitly1").focus();
				}, 1500);
			}
			
			function shareError()
			{
				container.find('.modal-footer .success').hide();
				container.find('.modal-footer .error').show();
				container.find('.share .btn, .btnClose').removeAttr("disabled");
			}
			
			function getBitLy(targetUrl, nodeSelector)
			{
				var bitlyUrls = [
					"http://api.bitly.com/v3/shorten?callback=?", 
					"https://api-ssl.bitly.com/v3/shorten?callback=?"
				];
				var bitlyUrl = location.protocol == 'http:' ? bitlyUrls[0] : bitlyUrls[1];
				
				$.getJSON(
					bitlyUrl, 
					{ 
						"format": "json",
						"apiKey": app.cfg.HEADER_SOCIAL.bitly.key,
						"login": app.cfg.HEADER_SOCIAL.bitly.login,
						"longUrl": targetUrl
					},
					function(response)
					{
						if( ! response || ! response || ! response.data.url )
							return;
							
						container.find(nodeSelector).val(response.data.url);
						
						// TODO: has to happen after the modal fading
						
						setTimeout(function(){
							container.find(nodeSelector).focus();
						}, 400);
					}
				);
			}
		};
	}
);