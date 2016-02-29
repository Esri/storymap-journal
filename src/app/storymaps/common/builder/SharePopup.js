define([
        "lib-build/tpl!./SharePopup",
		"lib-build/css!./SharePopup",
		"./SharePopupError",
		"./MyStoriesWrapper",
		"../utils/CommonHelper",
		"../ui/share/ShareURLPanel",
		"../ui/share/ShareEmbedPanel",
		"../utils/HeaderHelper",
		"dojo/topic",
		"dojo/has"
	], 
	function (
		viewTpl, 
		viewCss, 
		SharePopupError,
		MyStoriesWrapper,
		CommonHelper, 
		ShareURLPanel, 
		ShareEmbedPanel, 
		HeaderHelper,
		topic,
		has
	) {
		return function SharePopup(container)
		{
			container.append(viewTpl({
				title: i18n.commonCore.share.shareTitle,
				// Sharing buttons
				btnPrivate: i18n.commonCore.share.btnPrivate,
				btnPrivateTooltip: i18n.commonCore.share.btnPrivateTooltip,
				btnOrg: i18n.commonCore.share.btnOrg,
				btnOrgTooltip: i18n.commonCore.share.btnOrgTooltip,
				btnPublic: i18n.commonCore.share.btnPublic,
				btnPublicTooltip: i18n.commonCore.share.btnPublicTooltip,
				// Loading
				loadingMessage: i18n.commonCore.share.loadingMessage,
				// View toggle
				btnToggle: i18n.commonCore.share.viewToggle1,
				// Socialize
				socialize: i18n.commonCore.share.socialize,
				embedTitle: i18n.viewer.shareFromCommon.embed,
				mystoriesinvite2: i18n.commonCore.share.mystoriesinvite2
					.replace("${MYSTORIES}", '<a href="' + CommonHelper.getMyStoriesURL() + '" target="_blank">' + i18n.commonCore.common.mystories + '</a>'),
				// Footer
				close: i18n.commonCore.common.close
			}));
			
			var _this = this,
				_errorPopup = new SharePopupError($('#sharePopupError')),
				_shareURLPanel = new ShareURLPanel(container.find('.share-url-panel')),
				_shareEmbedPanel = new ShareEmbedPanel(container.find('.share-embed-panel'));
			
			initEvents();
			
			topic.subscribe("MY-STORIES-REFRESH", function(){
				refreshMyStories({
					isRefresh: true
				});
			});
			
			this.present = function(isFirstSave, headerCfg) 
			{			
				var appUrl = CommonHelper.getAppViewModeURL();
				
				// Handle My Stories not being available
				// app.portal.hasMyStories tells if My Stories is accessible (using PortalVersionTest which is using an image)
				if ( ! app.portal.hasMyStories || ! app.isProduction || ! MyStoriesWrapper.myStoriesIsSameDomain() ) {
					var error = "";
					
					//app.isProduction = true;
					//app.isPortal = true;
					
					// Development mode
					if ( ! app.isProduction && ! app.portal.hasMyStories ) {
						error = "DEV";
					}
					// Same domain but no My Stories it has to be a Portal < 10.4 that has been updated
					else if ( app.isProduction && app.isPortal && MyStoriesWrapper.myStoriesIsSameDomain() && ! app.portal.hasMyStories ) {
						error = "PORTAL";
					}
					// Sane error it has to be cross-domain (either on Portal or AGOL)
					else if ( app.isProduction && (! app.portal.hasMyStories || ! MyStoriesWrapper.myStoriesIsSameDomain()) ) {
						error = "DOMAIN";
					}
					
					if ( error ) {
						_errorPopup.present({
							error: error,
							isPortal: app.isPortal,
							itemURL: CommonHelper.getItemURL(app.data.getWebAppItem().id),
							mycontentURL: CommonHelper.getMyContentURL(),
							mystoriesURL: CommonHelper.getMyStoriesURL()
						});
						
						return;
					}
				}
				

				/*
				 * Socialize
				 */
				
				_shareURLPanel.present(appUrl, false);
				_shareEmbedPanel.present(appUrl);
				HeaderHelper.setSocial(container, headerCfg);
				HeaderHelper.initEvents(container, "bottom");
				
				/*
				 * My Stories
				 */
				
				if ( app.mystories ) {
					container.find('.app-sharing-icon').tooltip({ 
						placement: 'top',
						container: '.app-sharing-container',
						trigger: 'hover'
					});
					refreshMyStories();
					
					var msg = '<a href="' + CommonHelper.getMyStoriesURL() + '" target="_blank">' + i18n.commonCore.share.mystoriesinvite + '</a>';
					container.find('.footer-msg').html(msg);
				}
				else {
					container.find('.app-sharing-icon')
						.removeClass('active')
						.addClass('locked');
				}
				
				container.find('.sharing-action-result').addClass('hide');
				
				// Toggle the share buttons
				var isOrg = app.portal.isOrganization !== false,
					enableOrg = isOrg && $.inArray("portal:user:shareToOrg", app.portal.getPortalUser().privileges) > -1,
					enablePub = ! isOrg ||  $.inArray("portal:user:shareToPublic", app.portal.getPortalUser().privileges) > -1,
					itemControl = app.data.getWebAppItem().itemControl,
					storyIsPrivate = app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared",
					storyIsOrg = app.data.getWebAppItem().access == "account",
					userIsOwner = app.data.getWebAppItem().owner == app.portal.getPortalUser().username;
				
				// TODO: to review with 4.2
				// Group with shared ownership and custom role with admin:update
				if (itemControl == "update") {
					enableOrg = false;
					enablePub = false;
				}
				// TODO checking if the privilege is here directly would be enough if builder was not opening if user don't have proper update priv (only admin view all)
				else if (itemControl == "admin" && ! userIsOwner) {
					enableOrg = $.inArray("portal:admin:shareToOrg", app.portal.getPortalUser().privileges) > -1;
					enablePub = $.inArray("portal:admin:shareToPublic", app.portal.getPortalUser().privileges) > -1;
				}
					
				// TODO: in some case the button may need to be disabled
				if (storyIsOrg) {
					enableOrg = true;
				}
				else if (! storyIsPrivate) {
					enablePub = true;
				}
				
				container.find('.app-sharing-wrapper').eq(0).addClass('enabled');
				container.find('.app-sharing-wrapper').eq(1).toggleClass('enabled', enableOrg);
				container.find('.app-sharing-wrapper').eq(2).toggleClass('enabled', enablePub);
				container.find('.app-sharing-wrapper.enabled:last').addClass('lastBtn');
				
				container.modal({keyboard: true});
			};
			
			function toggleViews()
			{
				var isPrivate = app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared";
				
				if ( container.find('.views .view-my-stories').hasClass('active') ) {
					if ( isPrivate ) {
						container.find('.views .view-share').toggleClass('active', false);
						container.find('.views .view-my-stories').toggleClass('active', false);
						container.find('.views .view-private-story').toggleClass('active', true);
						
						container.find('.view-toggle-btn').html(i18n.commonCore.share.viewToggle1);
					}
					else {
						container.find('.views .view-share').toggleClass('active', true);
						container.find('.views .view-my-stories').toggleClass('active', false);
						container.find('.views .view-private-story').toggleClass('active', false);
						
						container.find('.view-toggle-btn').html(i18n.commonCore.share.viewToggle1);
					}
					
					if ( has("ff") ) {
						$("#my-stories-hidden-container").removeClass("active");
					}
				}
				else {
					container.find('.views .view-share').toggleClass('active', false);
					container.find('.views .view-my-stories').toggleClass('active', true);
					container.find('.views .view-private-story').toggleClass('active', false);
					
					container.find('.view-toggle-btn').html(i18n.commonCore.share.viewToggle2);
					
					_this.updateMyStoriesPosition();
				}
			}
			
			this.updateMyStoriesPosition = function()
			{
				// Firefox can't load MyStories if the dialog is not visible
				// So MyStories is loaded as a div outside the boundary of the screen
				// It's display as an overlay of the dialog when user wants it
				if ( has("ff") ) {
					var containerPos = container.find(".view-my-stories")[0].getBoundingClientRect();
					$("#my-stories-hidden-container")
						.addClass("active")
						.css({
							top: containerPos.top,
							left: containerPos.left,
							width: containerPos.right - containerPos.left,
							height: container.find(".story-status").is(":visible") ? 270 : 300
						});
				}
			};
			
			/*
			 * My Stories
			 */
			
			function onChangeAppSharing()
			{
				var level = $(this).data('sharing'),
					levelIndex = level == 'private' ? 0 : (level == 'organization' ? 1 : 2),
					actualLevelIndex = container.find('.app-sharing-icon.active').index();
			
				console.log('Changing sharing level to:', level);
				
				container.find('.app-sharing-icon').removeClass('active');
				$(this).addClass('active');
				
				container.find('.app-sharing-icon').addClass('locked');
				container.find('.sharing-action-result').addClass('hide');
				container.find('.app-sharing-wrapper').eq(levelIndex).find('.app-sharing-loading').show();
				container.find('.btn-open').addClass('disabled');
				
				app.mystories.share(
					level
				).then(
					onChangeAppSharingSuccess,
					function(result){
						if ( result.needsUserInput && result.delayPromise ){
							app.mystories.hasCheckErrors = true;
							
							result.delayPromise.then(
								onChangeAppSharingSuccess,
								function(result){ onChangeAppSharingError(result, actualLevelIndex); }
							);

							refreshMyStories({
								postSharing: true,
								previousLevelIndex: actualLevelIndex,
								targetLevelIndex: levelIndex,
								needsUserInput: true
							});
						}
						else {
							onChangeAppSharingError(result, actualLevelIndex);
						}
						
						// TODO
						//container.find('.sharing-action-result').html(result.message);
					}
				);
			}
			
			function onChangeAppSharingSuccess(result)
			{
				console.log(result);
				
				app.mystories.hasCheckErrors = ! result.allClear;
				
				container.find('.app-sharing-icon').removeClass('locked');
				container.find('.app-sharing-loading').hide();
				container.find('.btn-open').removeClass('disabled');
				
				// Some content has been shared up in the process
				if ( result.storyAndContent ) {
					container.find('.sharing-action-result')
						.removeClass('hide')
						.addClass('status-ok')
						.html(result.message);
				}
				
				if ( result.targetAccess == 'private')
					app.data.getWebAppItem().access = 'private';
				else if ( result.targetAccess == 'organization')
					app.data.getWebAppItem().access = 'account';
				else if ( result.targetAccess == 'public')
					app.data.getWebAppItem().access = 'public';
				
				refreshMyStories();
			}
			
			function onChangeAppSharingError(result, actualLevelIndex)
			{
				console.error('sharing failed');
				
				app.mystories.hasCheckErrors = ! result.allClear;
				
				container.find('.app-sharing-icon').removeClass('locked active');
				container.find('.app-sharing-icon').eq(actualLevelIndex).addClass('active');
				container.find('.app-sharing-loading').hide();
				container.find('.btn-open').removeClass('disabled');
				container.find('.sharing-action-result').removeClass('hide status-ok').html(result.message);
			}
			
			function refreshMyStories(params)
			{
				var isPrivate = app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared",
					isOrg = app.data.getWebAppItem().access == "account",
					isFromScratch = app.isDirectCreationFirstSave || app.isGalleryCreation,
					sharingLevelIndex = isPrivate ? 0 : (isOrg ? 1 : 2),
					status = "";
				
				params = params || {};
			
				/*
				 * Container
				 */
				container.find('.story-checked-container').toggleClass('hide', app.mystories.isChecking);
				container.find('.story-checking-container').toggleClass('hide', ! app.mystories.isChecking);

				/*
				 * Sharing buttons
				 */
				container.find('.app-sharing-icon').removeClass('locked active');
				
				if ( isFromScratch ) {
					container.find('.app-sharing-icon').addClass('locked');
				}
				else if ( isPrivate || params.needsUserInput && params.targetLevelIndex === 0 ) {
					container.find('.app-sharing-icon').eq(0).addClass('active');
				}
				else if ( isOrg || params.needsUserInput && params.targetLevelIndex === 1 ) {
					container.find('.app-sharing-icon').eq(1).addClass('active');
				}
				else {
					container.find('.app-sharing-icon').eq(2).addClass('active');
				}
				
				var lvl;
				if ( ! isFromScratch && ! app.mystories.forcedIgnoreIssues ) {
					if ( params.needsUserInput ) {
						lvl = params.targetLevelIndex;
						
						container.find('.app-sharing-loading').hide();
						
						if ( lvl == 2 ) {
							container.find('.app-sharing-icon').eq(2).toggleClass('locked', true);
						}
						else if ( lvl == 1 ) {
							container.find('.app-sharing-icon').eq(2).toggleClass('locked', true);
							container.find('.app-sharing-icon').eq(1).toggleClass('locked', true);
						}
						else if ( lvl === 0 ) {
							container.find('.app-sharing-icon').eq(0).toggleClass('locked', true);
						}
					}
					else if ( app.mystories.hasCheckErrors ) {
						lvl = params.postSharing ? params.previousLevelIndex : sharingLevelIndex;
						
						if ( lvl == 2 ) {
							container.find('.app-sharing-icon').toggleClass('locked', false);
						}
						else if ( lvl == 1 ) {
							container.find('.app-sharing-icon').toggleClass('locked', true);
							container.find('.app-sharing-icon').eq(0). toggleClass('locked', false);
						}
						else if ( lvl === 0 ) {
							container.find('.app-sharing-icon').toggleClass('locked', true);
						}
					}
					else {
						container.find('.app-sharing-icon').toggleClass('locked', app.mystories.isChecking);
					}
				}
				
				/*
				 * Label and view
				 */
				
				if ( ! app.mystories.isChecking ) {
					if ( app.mystories.hasCheckErrors || app.mystories.forcedIgnoreIssues ) {
						status +=  i18n.commonCore.share.statusError;
					}
					
					container.find('.story-status').hide();
					
					if ( app.mystories.hasCheckErrors || app.mystories.forcedIgnoreIssues ) {
						container.find('.story-status').html(status).show();
						
						if ( isPrivate ) {
							var status2 = i18n.commonCore.share.statusPrivate;
							status2 += "<br />";
							status2 += i18n.commonCore.share.statusNoErrPrivate;
							
							container.find('.private-story-call-to-action').html(status2);
						}
					}
					else if ( isPrivate ) {
						status += i18n.commonCore.share.statusPrivate;
						status += "<br />";
						status += i18n.commonCore.share.statusNoErrPrivate;
						
						container.find('.private-story-call-to-action').html(status);
					}
					
					if ( ! params.isRefresh || app.mystories.forcedIgnoreIssues ) {
						var myStoriesActive = !! ( (app.mystories.hasCheckErrors && !app.mystories.forcedIgnoreIssues) || params.needsUserInput || isFromScratch);
						
						container.find('.views .view-share').toggleClass('active', ! (app.mystories.hasCheckErrors && !app.mystories.forcedIgnoreIssues) && ! params.needsUserInput && ! isPrivate && ! isFromScratch);
						container.find('.views .view-my-stories').toggleClass('active', myStoriesActive);
						container.find('.views .view-private-story').toggleClass('active', (! app.mystories.hasCheckErrors || app.mystories.forcedIgnoreIssues) && ! params.needsUserInput && isPrivate);
						
						if ( has("ff") ) {
							$("#my-stories-hidden-container").toggleClass("active", myStoriesActive);
							if ( myStoriesActive ) {
								_this.updateMyStoriesPosition();
							}
						}
					}
				}
				
				/*
				 * Preview / view live
				 */
				
				container.find('.btn-open').toggle(! isFromScratch);
				container.find('.btn-open').html(isPrivate ? i18n.commonCore.share.preview : i18n.commonCore.share.viewlive);
				
				/*
				 * View toggle
				 */
				
				container.find('.view-toggle-container').toggleClass('hide', (app.mystories.hasCheckErrors && ! app.mystories.forcedIgnoreIssues) || isFromScratch);
				container.find('.view-toggle-btn').html(i18n.commonCore.share.viewToggle1);
				
				/*
				 * Refresh builder header
				 */
				
				topic.publish(
					"MYSTORIES_SCAN", 
					app.mystories.hasCheckErrors || params.needsUserInput ? "error" : null
				);
			}
			
			/*
			 * Init
			 */
			
			function initEvents()
			{
				container.find('.app-sharing-icon').click(onChangeAppSharing);
				container.find('.view-toggle-btn').click(toggleViews);
				
				container.find('.btn-open').off('click').click(function(){
					window.open(CommonHelper.getAppViewModeURL(), '_blank');
				});
				
				container.on('hide.bs.modal', function(){
					if ( has("ff") ) {
						$("#my-stories-hidden-container").removeClass("active");
					}
				});
				
				container.on('shown.bs.modal', function(){
					if ( has("ff") ) {
						_this.updateMyStoriesPosition();
					}
				});
			}
		};
	}
);