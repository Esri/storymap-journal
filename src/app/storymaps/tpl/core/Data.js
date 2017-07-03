define(["./WebApplicationData",
		"storymaps/common/utils/CommonHelper",
		"storymaps/tpl/core/Helper",
		"dojo/topic",
		"esri/arcgis/utils"],
	function(
		WebApplicationData,
		CommonHelper,
		Helper,
		topic,
		arcgisUtils
	){
		return function Data()
		{
			// Web map item and item data
			var _webmapItem = null;
			// Web app item
			var _appItem = null;
			// A cache for webmap title and sharing in builder mode for Add/Edit dialog
			var _webmapsTitleAndSharingCache = {};
			// App proxies
			var _appProxies = null;

			/*
			 * Template common get/set
			 */

			this.getWebMap = function()
			{
				return _webmapItem;
			};

			this.setWebMap = function(webmapItem)
			{
				_webmapItem = webmapItem;
			};

			this.getWebAppItem = function()
			{
				return _appItem || {};
			};

			this.setWebAppItem = function(appItem)
			{
				_appItem = appItem;
			};

			this.getWebAppData = function()
			{
				return WebApplicationData;
			};

			this.updateAfterSave = function()
			{
				WebApplicationData.updateAfterSave();
			};

			this.userIsAppOwner = function()
			{
				var portalUser = app.portal ? app.portal.getPortalUser() : null;

				return  (portalUser && portalUser.username == this.getWebAppItem().owner)
						|| (CommonHelper.getPortalUser() != null && CommonHelper.getPortalUser() == this.getWebAppItem().owner)
						// Admin privilege
						|| (portalUser && portalUser.privileges && $.inArray("portal:admin:updateItems", portalUser.privileges) > -1 )
						|| this.getWebAppItem().itemControl == "admin"
						// Group with shared ownership
						|| this.getWebAppItem().itemControl == "update";
			};

			this.checkUserItemPrivileges = function()
			{
				var portalUser = app.portal ? app.portal.getPortalUser() : null;

				return (portalUser && ! portalUser.orgId && ! portalUser.privileges)
						|| (portalUser && portalUser.privileges && $.inArray("portal:user:createItem", portalUser.privileges) > -1);
			};

			this.isOrga = function()
			{
				if ( ! app.portal || ! app.portal.getPortalUser() )
					return false;

				return !! app.portal.getPortalUser().orgId;
			};

			this.getAppProxies = function()
			{
				return _appProxies;
			};

			this.setAppProxies = function(appProxies)
			{
				_appProxies = appProxies;
			};

			/*
			 * Map Journal
			 */

			var _storyStorage = null,
				_currentStoryIndex = null;

			/*
			 * Storage type
			 */

			this.getStoryStorage = function()
			{
				return _storyStorage;
			};

			this.setStoryStorage = function(storyStorage)
			{
				_storyStorage = storyStorage;
			};

			/*
			 * Data read
			 */

			/**
			 * Get story sections and reverse flag
			 * {
			 *   sections: [section1, section2, ...],
			 *   reversed: true|false
			 * }
			 *
			 * Section are ordered but not filtered by status
			 */
			this.getStory = function()
			{
				if ( _storyStorage == "WEBAPP" )
					return WebApplicationData.getStory() || {};
				return {};
			};

			/**
			 * Get story sections:
			 *  - in user defined order
			 *  - in builder: get all sections
			 *  - in viewer: get only published section with a past publication date
			 */
			this.getStorySections = function()
			{
				var allSections = [],
					filteredSections = [];

				if ( _storyStorage == "WEBAPP" )
					allSections = WebApplicationData.getStorySections();

				// Apply maximum number of sections limitation
				allSections = allSections.slice(0, app.cfg.MAX_NB_SECTIONS);

				if ( app.isInBuilder )
					return allSections || [];

				// Filter by status
				$.each(allSections || [], function(i, section){
					if ( section.status == "PUBLISHED" && section.pubDate <= Date.now() )
						filteredSections.push(section);
				});

				return filteredSections;
			};

			this.cleanSectionsNarrativeMarkup = function()
			{
				$.each(this.getStorySections(), function(i, section) {
					this.cleanSectionNarrativeMarkup(section);
				}.bind(this));
			};

			this.cleanSectionNarrativeMarkup = function(section)
			{
				if (! section) {
					return;
				}

				var result = this.cleanNarrativeMarkup(section.content);

				if (! section.contentActions) {
					section.contentActions = [];
				}

				section.content = result.markup;
				section.contentActions = section.contentActions.concat(result.actions);
			};

			this.getUID = function()
			{
				var s4 = function() {
					return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
				};

				return Date.now()
					+ '-' + s4()
					+ '-' + s4()
					+ '-' + s4()
					+ '-' + s4()
					+ '-' + s4();
			};

			this.cleanNarrativeMarkup = function(markup)
			{
				if (! markup) {
					return;
				}

				var cleanMarkup = $('<div>' + markup + '</div>'),
					actions = [];

				cleanMarkup.find('a[onclick]').each(function(i, el) {
					var link = $(el),
						attr = link.attr('onclick'),
						match = attr.match(/\.publish\([ ]*\'story-navigate-section\'[ ]*,[ ]*([0-9]+)/);

					if (match && match.length == 2) {
						link.removeAttr('onclick');
						link.removeAttr('target');

						var uid = 'MJ-ACTION-' + this.getUID(); // Cannot just use Date.now like other Actions to avoid conflict
						link.attr('data-storymaps', uid);
						link.attr('data-storymaps-type', 'navigate');

						actions.push({
							id: uid,
							type: 'navigate',
							index: parseInt(match[1], 10)
						});
					}
				}.bind(this));

				cleanMarkup.find('img').each(function(i, imgDiv) {
					var $imgDiv = $(imgDiv);
					$imgDiv.attr('src', Helper.possiblyAddToken($imgDiv.attr('src')));
				});

				return {
					markup: cleanMarkup.html(),
					actions: actions
				};
			};

			this.getStoryLength = function()
			{
				return this.getStorySections().length;
			};

			this.getStoryByIndex = function(index)
			{
				return this.getStorySections()[index];
			};

			this.getCurrentSection = function()
			{
				return WebApplicationData.getStorySections()[_currentStoryIndex];
			};

			/*
			 * Index
			 */

			this.getCurrentSectionIndex = function()
			{
				return _currentStoryIndex;
			};

			this.setCurrentSectionIndex = function(storyIndex)
			{
				_currentStoryIndex = storyIndex;
			};

			/*
			 * Add
			 */

			this.addStorySection = function(section)
			{
				app.data.cleanSectionNarrativeMarkup(section);

				if ( _storyStorage == "WEBAPP" ) {
					if ( this.getStory().reversed ) {
						WebApplicationData.getStorySections().splice(1, 0, section);
						this.setCurrentSectionIndex(this.getStoryLength() >= 2 ? 1 : 0);
					}
					else {
						WebApplicationData.setStorySections(this.getStorySections().concat(section));
						this.setCurrentSectionIndex(this.getStoryLength() - 1);
					}
				}
			};

			/*
			 * Edit
			 */

			this.editSection = function(sectionIndex, updatedSection)
			{
				app.data.cleanSectionNarrativeMarkup(updatedSection);

				if ( _storyStorage == "WEBAPP" ) {
					var sections = this.getStorySections();
					sections[sectionIndex] = updatedSection;
					WebApplicationData.setStorySections(sections);
				}
			};

			/*
			 * Organize
			 */

			this.organizeStory = function(sections, newSectionIndex, reversed)
			{
				if ( _storyStorage == "WEBAPP" )
					WebApplicationData.setStorySections(sections, reversed);

				if ( newSectionIndex == -1 )
					newSectionIndex = 0;

				this.setCurrentSectionIndex(newSectionIndex);
			};

			/*
			 * Utils
			 */

			/*
			 * Get an array of webmaps id used in the journal (sections media and actions)
			 */
			this.getWebmaps = function()
			{
				// Story Main Stage webmaps
				var webmaps = $.map(this.getStorySections(), function(section){
					return section.media && section.media.type == "webmap" && section.media.webmap ? section.media.webmap.id : null;
				});

				// Story actions webmaps
				$.each(this.getStorySections(), function(i, section){
					if ( section.contentActions ) {
						$.each(section.contentActions, function(j, action){
							if ( action.type == "media" && action.media.webmap )
								webmaps.push(action.media.webmap.id);
						});
					}
				});

				// Make the array unique
				webmaps = $.grep(webmaps, function(webmap, index) {
					if ( ! webmap || webmap.length != 32 )
						return false;
					return index == $.inArray(webmap, webmaps);
				});

				return webmaps;
			};

			/*
			 * Get extented infos about webmaps used in the journal
			 *  [
			 *    {
			 *      id: 'XYZ',
			 *      title: ''			// Webmap title (grabbed from the item)
			 *      sharing: '',		// Webmap sharing (grabbed from the item)
			 *      sections: [1,2,3],	// Sections index the webmap is used in (computed on request)
			 *      actions: [4,5,6]	// Sections index the webmap is used as an actions (computed on request)
			 *    },
			 *    ...
			 *  ]
			 *
			 *  Properties grabbed from the item on first request may not be present on the first method call
			 *  If the value is null, the value will be emitted through
			 *  topic.subsribe("LOADED_WEBMAP_INFOS", {
			 *    id: '',
			 *    title: '',
			 *    sharing: ''
			 *	});
			 */
			this.getWebmapsInfo = function()
			{
				var webmapsInfoArray = [],
					webmapsInfoHash  = {};

				var store = function(id, type, value)
				{
					if ( webmapsInfoHash[id] ){
						if ( webmapsInfoHash[id][type].indexOf(value) == -1 )
							webmapsInfoHash[id][type].push(value);
					}
					else {
						webmapsInfoHash[id] = {
							sections: [],
							actions:  []
						};
						webmapsInfoHash[id][type].push(value);
					}
				};

				$.each(this.getStorySections(), function(i, section){
					if ( section.media && section.media.type == "webmap" && section.media.webmap )
						store(section.media.webmap.id, "sections", i+1);

					if ( section.contentActions ) {
						$.each(section.contentActions, function(j, action){
							if ( action.type == "media" && action.media.webmap )
								store(action.media.webmap.id, "actions", i+1);
						});
					}
				});

				// Also add the eventual webmap the application have been published with
				//  when starting from a webmap in AGOL Map Viewer
				// (but only if we're in builder! otherwise, a private webmap could ruin a public app. -als)
				if (app.isInBuilder) {
					var sourceWebmap = WebApplicationData.getSourceWebmap();
					if ( sourceWebmap && ! webmapsInfoHash[sourceWebmap] ) {
						webmapsInfoHash[sourceWebmap] = {};
					}
				}

				$.each(Object.keys(webmapsInfoHash), function(i, webmap){
					var webmapCache = _webmapsTitleAndSharingCache[webmap];

					if ( ! webmapCache ) {
						// If webmap already loaded through standard map loading
						if ( app.maps[webmap] ) {
							_webmapsTitleAndSharingCache[webmap] = {
								title:   app.maps[webmap].response.itemInfo.item.title,
								sharing: app.maps[webmap].response.itemInfo.item.access.toUpperCase()
							};
							webmapsInfoArray.push({
								id: webmap,
								title: app.maps[webmap].response.itemInfo.item.title,
								sharing: app.maps[webmap].response.itemInfo.item.access.toUpperCase(),
								sections: webmapsInfoHash[webmap].sections,
								actions: webmapsInfoHash[webmap].actions
							});
							return;
						}
						else
							requestWebmapInfos(webmap);
					}

					webmapsInfoArray.push({
						id: webmap,
						title: webmapCache ? webmapCache.title : null,
						sharing: webmapCache ? webmapCache.sharing : null,
						sections: webmapsInfoHash[webmap].sections,
						actions: webmapsInfoHash[webmap].actions
					});
				});

				return webmapsInfoArray;
			};

			this.getWebmapTitle = function(id)
			{
				return _webmapsTitleAndSharingCache[id] ? _webmapsTitleAndSharingCache[id].title : '';
			};

			this.getWebmapSharing = function(id)
			{
				return _webmapsTitleAndSharingCache[id] ? _webmapsTitleAndSharingCache[id].sharing : '';
			};

			function requestWebmapInfos(webmap)
			{
				arcgisUtils.getItem(webmap).then(function(response){
					_webmapsTitleAndSharingCache[webmap] = {
						title:   response.item.title,
						sharing: response.item.access.toUpperCase()
					};

					topic.publish("LOADED_WEBMAP_INFOS", {
						id: webmap,
						title: response.item.title,
						sharing: response.item.access.toUpperCase()
					});
				});
			}

			// TODO those three functions should be refactored
			this.getImages = function()
			{
				// Story Main Stage images
				var images = $.map(this.getStorySections(), function(section){
					return section.media && section.media.type == "image" && section.media.image ? section.media.image.url : null;
				});

				// Story actions images
				$.each(this.getStorySections(), function(i, section){
					if ( section.contentActions ) {
						$.each(section.contentActions, function(j, action){
							if ( action.type == "media" && action.media.image )
								images.push(action.media.image.url);
						});
					}
				});

				// Make the array unique
				images = $.grep(images, function(image, index) {
					return index == $.inArray(image, images);
				});

				return images;
			};

			this.getAllImageUrls = function() {
				return _.map(this.getImages().concat(this.getSidebarImages().concat([WebApplicationData.getLogoURL()])), this.getNonProtocolNonDoubleSlashUrl);
			};

			this.getSidebarImages = function() {
				var sections = this.getStorySections();
				var imgUrls = [];
				_.each(sections, function(section) {
					var jqSection = $(section.content);
					_.each(jqSection.find('img'), function(img) {
						imgUrls.push(Helper.possiblyRemoveToken(img.src));
					});
				});
				return imgUrls;
			};

			this.getNonProtocolNonDoubleSlashUrl = function(url) {
				return url.replace(/http[s]?\:\/\//, '').replace('//', '/');
			};

			// TODO those three functions should be refactored
			this.getEmbeds = function()
			{
				// Story Main Stage embeds
				var embeds = $.map(this.getStorySections(), function(section){
					if ( ! section || ! section.media || (section.media.type != "video" && section.media.type != "webpage") || ! section.media[section.media.type] )
						return null;

					return section.media[section.media.type];
				});

				// Story actions embeds
				$.each(this.getStorySections(), function(i, section){
					if ( section.contentActions ) {
						$.each(section.contentActions, function(j, action){
							if ( action.type != "media" || ! action.media.type || (action.media.type != "video" && action.media.type != "webpage") || ! action.media[action.media.type] )
								return;

							embeds.push(action.media[action.media.type]);
						});
					}
				});

				// Make the array unique
				embeds = $.grep(embeds, function(embed, index) {
					return index == $.inArray(embed, embeds);
				});

				return embeds;
			};

			this.getContentActions = function()
			{
				var actions = [];
				$.each(this.getStorySections(), function(i, section){
					$.each(section.contentActions, function(j, action){
						actions.push(action);
					});
				});
				return actions;
			};

			this.getCurrentLayoutStaticConfig = function()
			{
				return this.getLayoutStaticConfig(WebApplicationData.getLayoutId());
			};

			this.getLayoutStaticConfig = function(layoutId)
			{
				var layoutCfg = $.grep(app.cfg.LAYOUTS, function(l){ return l.id == layoutId; });

				if ( ! layoutCfg || ! layoutCfg.length )
					return null;

				return layoutCfg[0];
			};

			this.debug = function()
			{
				console.table && console.table(app.data.getStorySections());

				$.each(app.data.getStorySections(), function(i, section){
					console.log("%c%s", "font-weight: bold; font-size: 18px;", '[' + i + '-' + section.title + "]");
					console.log("%c%s", "font-weight: bold; font-size: 16px;", "> MEDIA");
					console.log(JSON.stringify(section.media, null, '\t'));
					console.log("%c%s", "font-weight: bold; font-size: 16px;", "> ACTIONS");
					console.log(JSON.stringify(section.contentActions, null, '\t'));
				});
			};

			this.checkTokens = function() {
				var sections = this.getStorySections();
				_.each(sections, function(section) {
					duplicateSectionProcessing(section);
				});
				var imageUrls = this.getImages().concat([WebApplicationData.getLogoURL()]);
				_.each(imageUrls, function(url) {
					checkStr(url);
				});
			};

			function duplicateSectionProcessing(section) {
				var strToCheck = section.content;
				var jqSection = $(section.content);
				_.each(jqSection.find('img'), function(img) {
					var originalUrl = img.src;
					var untokenizedUrl = Helper.possiblyRemoveToken(img.src);
					if (originalUrl !== untokenizedUrl) {
						var splitOriginal = originalUrl.split('?');
						if (strToCheck.match(splitOriginal[0] + '\\?' + splitOriginal[1])) {
							strToCheck = strToCheck.replace(splitOriginal[0] + '?' + splitOriginal[1], untokenizedUrl);
						} else {
							strToCheck = strToCheck.replace(decodeURI(splitOriginal[0]) + '?' + splitOriginal[1], untokenizedUrl);
						}
					}
					checkStr(strToCheck);
				});

			}

			function checkStr(str) {
				var tokenIndex = str.indexOf('token=');
				if (tokenIndex >= 0) {
					console.warn('token stored for', str.slice(str.lastIndexOf('/', tokenIndex), tokenIndex - 1));
					checkStr(str.slice(tokenIndex + 6));
				}

			}

		};
	}
);
