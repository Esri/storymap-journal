define(["lib-build/css!./Builder",
		"esri/arcgis/Portal",
		"./BuilderPanel",
		"./settings/SettingsPopup",
		"./BuilderHelper",
		"../utils/CommonHelper",
		"../utils/WebMapHelper",
		"dojo/_base/lang",
		"dojo/has",
		"esri/arcgis/utils",
		"esri/IdentityManager",
		"esri/request",
		"dojo/topic",
		"lib-app/history.min"],
	function(
		viewCss,
		esriPortal, 
		BuilderPanel, 
		SettingsPopup, 
		BuilderHelper, 
		CommonHelper, 
		WebMapHelper, 
		lang, 
		has, 
		arcgisUtils,
		IdentityManager, 
		esriRequest,
		topic)
	{
		var _core = null,
			_builderView = null,
			_builderPanel = new BuilderPanel(
				$('#builderPanel'),
				saveAppThenWebmap,
				builderDirectCreationFirstSave,
				builderGalleryCreationFirstSave
			),
			_settingsPopup = null;

		function init(core, builderView)
		{
			_core = core;
			_builderView = builderView;
			_settingsPopup = new SettingsPopup($("#settingsPopup"));
			
			console.log("common.builder.Builder - init");
		
			if( ! CommonHelper.getAppID(_core.isProd()) && ! app.isDirectCreation ) {
				console.error("common.builder.Builder - abort builder initialization, no appid supplied");
				return;
			}
			else if ( app.isDirectCreation )
				console.log("common.builder.Builder - Builder start in direct creation mode");
			else if ( app.isGalleryCreation )
				console.log("common.builder.Builder - Builder start in gallery creation mode");
			
			$("body").addClass("builder-mode");
			
			// Add the default StoryMaps theme
			//app.cfg.COLOR_SCHEMES.splice(0, 0, app.cfg.COLORS);
			
			_builderView.init(_settingsPopup);
			_builderPanel.init(_builderView);
			
			// TODO
			_settingsPopup.init(_builderView);
			_settingsPopup.initLocalization();
			
			topic.subscribe("BUILDER_INCREMENT_COUNTER", _builderPanel.incrementSaveCounter);	
			topic.subscribe("HEADER_EDITED", headerEdited);
			
			// Reload / close confirmation if there is unsaved change
			window.onbeforeunload = function (e) {
				e = e || window.event;
				
				if( ! _builderPanel.hasPendingChange() )
					return;
				
				if (e)
					e.returnValue = i18n.commonCore.builderPanel.closeWithPendingChange;
		
				return i18n.commonCore.builderPanel.closeWithPendingChange;
			};
			
			app.builder.cleanApp = cleanApp;
		}
		
		function appInitComplete()
		{
			_builderPanel.updateSharingStatus();
			_builderView.appInitComplete(saveApp);
		}
		
		function resize(cfg)
		{
			_builderPanel.resize();
			_builderView.resize(cfg);
		}
		
		//
		// Header
		//
		
		function headerEdited(param)
		{
			// Title and subtile initially comes from the web map
			// They are saved in web app data only if they are edited
			// So if they are never edited in the app, web map edition are reflected in the app			
			if( param.src == "title" ) {
				if( ! app.data.getWebMap() || param.value != app.data.getWebMap().item.title ) {
					if( param.value != app.data.getWebAppData().getTitle() ) {
						app.data.getWebAppData().setTitle(param.value);
						_builderPanel.incrementSaveCounter();
					}
				}
				else
					app.data.getWebAppData().setTitle("");
			}
			else if ( param.src == "subtitle" ) {
				if(  ! app.data.getWebMap() || (param.value != app.data.getWebMap().item.snippet && param.value != i18n.commonCore.inlineFieldEdit.editMe) ) {
					if( param.value != app.data.getWebAppData().getSubtitle() ) {
						app.data.getWebAppData().setSubtitle(param.value);
						_builderPanel.incrementSaveCounter();
					}
				}
				else
					app.data.getWebAppData().setSubtitle("");
			}
		}
		
		//
		// Save
		//
		
		function saveAppThenWebmap()
		{			
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				appSaveFailed("APP");
				return;
			}
			
			app.portal.signIn().then(
				function(){
					saveApp(function(response){
						if (!response || !response.success) {
							appSaveFailed("APP");
							return;
						}
						
						saveWebmap(function(response2){
							if (!response2 || !response2.success) {
								appSaveFailed("WEBMAP");
								return;
							}
							
							appSaveSucceeded({ success: true });
						});
					});
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		function builderDirectCreationFirstSave(title, subtitle)
		{
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				appSaveFailed("APP");
				return;
			}
			
			var uid = IdentityManager.findCredential(getPortalURL()).userId;
			
			// Create the app item
			app.data.setWebAppItem(
				lang.mixin(
					BuilderHelper.getBlankAppJSON(),
					{
						title: title,
						snippet: subtitle,
						uploaded: Date.now(),
						modified: Date.now(),
						owner: uid,
						access: 'private'
					}
				)
			);
			
			// Update the webmap item
			/*
			var webMapItem = app.data.getWebMap();
			lang.mixin(
				webMapItem.item, 
				{
					title: title,
					snippet: subtitle,
					uploaded: Date.now(),
					modified: Date.now(),
					owner: uid,
					access: 'private'
				}
			);
			*/
			
			app.portal.signIn().then(
				function(){ 
					// TODO : support app that rely on webmap and app that don't
					/*saveWebmap(function(response){
						if( ! response || ! response.success ) {
							appSaveFailed("WEBMAP");
							return;
						}
						
						// Save the webmp id in the app definition
						app.data.getWebAppData().setWebmap(response.id);
						
						// Update the webmap item
						var webMapItem = app.data.getWebMap();
						lang.mixin(
							webMapItem.item, 
							{
								id: response.id,
								item: response.item
							}
						);
					*/	
						// Save the app
						saveApp(function(response2){
							if (!response2 || !response2.success) {
								appSaveFailed("APP");
								return;
							}
							
							// Update the app item
							app.data.setWebAppItem(
								lang.mixin(
									app.data.getWebAppItem(),
									{
										id: response2.id,
										item: response2.item,
										url: document.location.protocol + '//' + document.location.host + document.location.pathname + '?appid=' + response2.id
									}
								)
							);
														
							// Save the app a second time
							saveApp(function(response3){
								if (!response3 || !response3.success) {
									appSaveFailed("APP");
									return;
								} 
								
								console.log('common.builder.Builder - firstSaveForDirectCreation - appid:', response3.id, ' webmap:', /*typeof response != "undefined" ? response.id :*/ null);
							
								appSaveSucceeded({ success: true });
								app.isDirectCreationFirstSave = false;
								_builderPanel.updateSharingStatus();
							
								History.replaceState({}, "", "?appid=" + response3.id + "&edit");
							});
						});
					//});
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		// TODO this is only used in Map Tour (MJ doesn't goes there because of app.appCfg.useWebmapInApp)
		// The flag is never set properly in MJ. Should be more generic, MJ doesn't save a webmap...
		function builderGalleryCreationFirstSave()
		{
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				appSaveFailed("APP");
				return;
			}
			
			var uid = IdentityManager.findCredential(getPortalURL()).userId;
			
			// Update the webmap item
			var webMapItem = app.data.getWebMap();
			lang.mixin(
				webMapItem.item, 
				{
					title: app.data.getWebAppItem().title,
					uploaded: Date.now(),
					modified: Date.now(),
					owner: uid
				}
			);
			
			// Save the webmap in the same folder than the app
			if( app.data.getWebAppItem().ownerFolder )
				webMapItem.item.ownerFolder = app.data.getWebAppItem().ownerFolder;

			app.portal.signIn().then(
				function(){ 
					saveWebmap(function(response){
						if( ! response || ! response.success || ! response.id ) {
							appSaveFailed("WEBMAP");
							return;
						}
						
						// Save the webmp id in the app definition
						app.data.getWebAppData().setWebmap(response.id);
						
						// Update the webmap item
						var webMapItem = app.data.getWebMap();
						lang.mixin(
							webMapItem.item, 
							{
								id: response.id,
								item: response.item
							}
						);
						
						// Save the app
						saveApp(function(response2){
							if (!response2 || !response2.success) {
								appSaveFailed("APP");
								return;
							}
							
							var successCallback = function() {
								console.log('common.builder.Builder - builderGalleryCreationFirstSave - appid:', response2.id, ' webmap:', response.id);
						
								appSaveSucceeded({ success: true });
								app.isGalleryCreation = false;
								_builderPanel.updateSharingStatus();
						
								History.replaceState({}, "", "?appid=" + response2.id + "&edit");
							};
							
							// Share the webmap and eventual FS if the app isn't private
							var sharingMode = app.data.getWebAppItem().access;
							if( sharingMode != 'private' ) {
								var targetItems = [app.data.getWebMap().item.id];
								
								shareItems(targetItems.join(','), sharingMode).then(function(response){
									var success = response 
										&& response.results 
										&& response.results.length == targetItems.length;
									
									if (success) {
										$.each(response.results, function(i, result){
											if( ! result.success )
												success = false;
										});
										
										if ( success )
											successCallback();
										else
											appSaveFailed("WEBMAP");
									}
									else
										appSaveFailed("WEBMAP");
								});
							}
							else
								successCallback();
						});
					});
				},
				function(error) {
					appSaveFailed("APP", error);
				}
			);
		}
		
		//
		// Web mapping application save
		//

		function saveApp(nextFunction)
		{
			var portalUrl = getPortalURL(),
				uid = IdentityManager.findCredential(portalUrl).userId,
				token  = IdentityManager.findCredential(portalUrl).token,
				appItem = lang.clone(app.data.getWebAppItem());

			// Remove properties that don't have to be committed
			delete appItem.avgRating;
			delete appItem.modified;
			delete appItem.numComments;
			delete appItem.numRatings;
			delete appItem.numViews;
			delete appItem.size;
			
			//
			// Add/edit the typeKeyword property to be able to identify the app and the layout
			//
			
			if ( ! appItem.typeKeywords )
				appItem.typeKeywords = [];
			
			// App not created through the builder fromScratch mode don't get those keywords
			appItem.typeKeywords = appItem.typeKeywords.concat(app.cfg.WEBAPP_KEYWORD_APP);
			
			// Those should only be necessary to be able to convert an appid that wasn't already selfConfigured
			appItem.typeKeywords = appItem.typeKeywords.concat(app.cfg.WEBAPP_KEYWORD_GENERIC);
			
			// Layout
			var layouts = $.map(app.cfg.LAYOUTS, function(layout){ return "layout-" + layout.id; });
			// Filter previous layout keyword
			appItem.typeKeywords = $.grep(appItem.typeKeywords, function(keyword) {
				return $.inArray(keyword, layouts) == -1; 
			});
			// Add actual layout keyword
			appItem.typeKeywords.push("layout-" + app.data.getWebAppData().getLayoutId());
			
			// Make the typeKeywords array unique
			appItem.typeKeywords = $.grep(appItem.typeKeywords, function(keyword, index) {
				return index == $.inArray(keyword, appItem.typeKeywords);
			});
			
			// Transform arrays
			appItem.tags = appItem.tags ? appItem.tags.join(',') : '';
			appItem.typeKeywords = appItem.typeKeywords.join(',');
			
			appItem = lang.mixin(appItem, {
				f: "json",
				token: token,
				overwrite: true,
				text: JSON.stringify(app.data.getWebAppData().get())
			});
			
			var saveRq = esriRequest(
				{
					url: portalUrl + "/sharing/content/users/" + uid + (appItem.ownerFolder ? ("/" + appItem.ownerFolder) : "") + "/addItem",
					handleAs: 'json',
					content: appItem
				},
				{
					usePost: true
				}
			);
			
			saveRq.then(nextFunction, appSaveFailed);
		}
		
		//
		// Web Map save
		//
		
		function saveWebmap(nextFunction)
		{
			if( app.isDirectCreationFirstSave || (app.appCfg.useWebmapInApp && app.isGalleryCreation) ) {				
				WebMapHelper.saveWebmap(app.data.getWebMap(), app.portal).then(
					function(response){
						nextFunction(response);
					},
					appSaveFailed
				);
			}
			else
				nextFunction({success: true});
		}
		
		//
		// Sharing
		//
		
		function shareAppAndWebmap(sharingMode, callback)
		{
			// Can only be used to add more privilege
			// Looks like sharing to private imply a unshareItems request first 
			// => don't use it that code to share private without more test
			if ( sharingMode != "public" && sharingMode != "account" )
				sharingMode = "public";
			
			// Find items to share - only if they aren't already shared to the proper level 
			var targetItems = [];
			if( sharingMode == "account" ) {
				if( app.data.getWebMap() && app.data.getWebMap().item.access == "private" && app.data.getWebMap().item.owner == app.portal.getPortalUser().username )
					targetItems.push(app.data.getWebMap().item.id);
				if ( app.data.getWebAppItem().access == "private" )
					targetItems.push(app.data.getWebAppItem().id);
			}
			else {
				if( app.data.getWebMap() && app.data.getWebMap().item.access != "public" && app.data.getWebMap().item.owner == app.portal.getPortalUser().username )
					targetItems.push(app.data.getWebMap().item.id);
				if ( app.data.getWebAppItem().access != "public" )
					targetItems.push(app.data.getWebAppItem().id);
			}
			
			shareItems(targetItems.join(','), sharingMode).then(function(response){
				var success = response 
					&& response.results 
					&& response.results.length == targetItems.length;
				
				if (success) {
					$.each(response.results, function(i, result){
						if( ! result.success )
							success = false;
					});
					
					if ( app.data.getWebMap() )
						app.data.getWebMap().item.access = sharingMode;
					app.data.getWebAppItem().access = sharingMode;
					_builderPanel.updateSharingStatus();
				}
				
				callback(success);
			});	
		}
		
		function shareItems(items, sharing)
		{
			var portalUrl = getPortalURL(),
				uid = IdentityManager.findCredential(portalUrl).userId,
				token  = IdentityManager.findCredential(portalUrl).token;

			var params = {
				f: "json",
				token: token,
				items: items,
				groups: '',
				everyone: '',
				account: ''
			};
			
			if ( sharing == "public" )
				params.everyone = true;
			if ( sharing == "account" )
				params.account = true;

			return esriRequest(
				{
					url: portalUrl + "/sharing/content/users/" + uid + "/shareItems",
					handleAs: 'json',
					content: params
				},
				{
					usePost: true
				}
			);
		}

		//
		// Save callbacks
		//

		function appSaveSucceeded(response)
		{
			if (response && response.success) {
				_builderPanel.saveSucceeded();
				app.data.updateAfterSave();
				app.isGalleryCreation = false;
				_builderPanel.updateSharingStatus();
			}
			else
				appSaveFailed();
		}

		function appSaveFailed(source, error)
		{
			_builderPanel.saveFailed(source, error);
		}
		
		//
		// Misc
		//
		
		function getPortalURL()
		{
			return arcgisUtils.arcgisUrl.split('/sharing/')[0];
		}
		
		function cleanApp()
		{
			if ( ! app.portal ) {
				console.error("Fatal error - not signed in");
				return;
			}
			
			app.portal.signIn().then(
				function(){
					var portalUrl = getPortalURL(),
						uid = IdentityManager.findCredential(portalUrl).userId,
						token  = IdentityManager.findCredential(portalUrl).token,
						appItem = lang.clone(app.data.getWebAppItem());

					// Remove properties that don't have to be committed
					delete appItem.avgRating;
					delete appItem.modified;
					delete appItem.numComments;
					delete appItem.numRatings;
					delete appItem.numViews;
					delete appItem.size;

					appItem = lang.mixin(appItem, {
						f: "json",
						token: token,
						overwrite: true,
						text: JSON.stringify(app.data.getWebAppData().getBlank())
					});

					var saveRq = esriRequest(
						{
							url: portalUrl + "/sharing/content/users/" + uid + (appItem.ownerFolder ? ("/" + appItem.ownerFolder) : "") + "/addItem",
							handleAs: 'json',
							content: appItem
						},
						{
							usePost: true
						}
					);
					
					saveRq.then(
						function(){
							console.log("Web Application data cleaned successfully");
						}, function(){
							console.log("Web Application data cleaning has failed");
						}
					);
				},
				function(error) {
					console.error("Web Application data cleaning has failed", error);
				}
			);
			
			return "Cleaning ...";
		}
		
		return {
			init: init,
			resize: resize,
			appInitComplete: appInitComplete,
			shareAppAndWebmap: shareAppAndWebmap
		};
	}
);