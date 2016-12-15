define([
        "./PortalVersionTest",
        "esri/IdentityManager",
        "storymaps/common/utils/CommonHelper",
        "dojo/topic"
    ],
	function(
		PortalVersionTest,
		IdentityManager,
		CommonHelper,
		topic
	) {
		// Load My Stories frame
		function loadMyStories()
		{
			/*
			try {
				document.domain = "arcgis.com";
			} catch(e) { }
			*/

			// Make sure My Stories is available
			// This test is just checking if it's there but it won't detect if it's cross domain or not
			PortalVersionTest.run().then(
				function(){
					// Check if cross domain are authorized
					if ( app.isProduction && ! myStoriesIsSameDomain() ) {
						loadMyStoriesError();
					}
					else {
						loadMyStoriesStep2();
					}
				},
				loadMyStoriesError
			);
		}

		function loadMyStoriesError()
		{
			$(".check-story").hide();
		}

		function loadMyStoriesStep2()
		{
			// My Stories hook that My Stories will call that function when ready to use
			window.myStoriesInit = myStoriesInit;

			// So that the panel appear to be in loading state
			topic.publish("MYSTORIES_SCAN", "start");

			var url = '../MyStories/index.html?fromBuilder';
			url += '&locale=' + dojo.locale;

			setTimeout(function(){
				$("#my-stories-frame").attr(
					'src',
					url
				);
			}, 1000);
		}

		// Called when My Stories has loaded and is ready to be initialized
		function myStoriesInit()
		{
			var myStories = $("#my-stories-frame")[0].contentWindow;

			// Check that the API is available
			if ( ! myStories || ! myStories.init || ! myStories.check || ! myStories.share ) {
				console.error('Failed to load My Stories');
				return;
			}

			if ( ! app.data.getStoryLength() ) {
				console.log('Skipping the initialization of My Stories until the story has content');
				return;
			}

			/*
			 * init(identity manager, app item) -> Deferred
			 *  - resolve: ok
			 *  - reject: ko
			 * check(app data) -> Deferred
			 *  - resolve: ok
			 *  - reject(result)
			 *    - result == true: the story has been scanned and there is error
			 *    - result == false: the story hasn't been scanned successfully
			 *  - callback to edit a section/entry
			 *  - callback to trigger a rescan / UI refresh
			 * share(level) -> Deferred
			 *  - resolve(result)
			 *    - shared sucessfully at that level
			 *    - can display result.message to the user
			 *  - reject(result)
			 *    - result.needsUserInput == true : user need to confirm something
			 *       - use result.delayPromise to know when user confirm
			 *    - result.needsUserInput == false : somethign went wrong
			 */
			app.mystories = {
				init: myStories.init,
				check: myStories.check,
				share: myStories.share,
				isChecking: false,
				hasCheckErrors: false,
				hasScanErrors: false
			};

			// Init with the Identity and App Item
			// This is the only time this is passed to MyStories
			app.mystories.init(
				app.isInBuilder ? IdentityManager.toJson() : null,
				app.isDirectCreationFirstSave || app.isGalleryCreation ? null : app.data.getWebAppItem(),
				app.cfg.TPL_ID,
				app.isPortal,
				// Open a section/entry configuration
				function(index, type, actionId){
					// type = "main-stage" || "main-stage-action" || "description"
					topic.publish("MY-STORIES-EDIT-MEDIA", {
						index: index,
						type: type,
						actionId: actionId
					});
				},
				// Edit a map
				function(id){
					topic.publish("MY-STORIES-EDIT-MAP", {
						id: id
					});
				},
				// A check has been performed by the user through My Stories dialog and succeeded
				function(){
					app.mystories.hasCheckErrors = false;
					topic.publish("MY-STORIES-REFRESH");
				},
				// A check has been performed by the user through My Stories dialog and failed
				function(params){
					params = params || {
						completed: false,
						ignoreAllIssues: false
					};

					app.mystories.hasCheckErrors = ! params.ignoreAllIssues;
					app.mystories.forcedIgnoreIssues = params.ignoreAllIssues;
					topic.publish("MY-STORIES-REFRESH");
				}
			).then(
				scanStory,
				function() {
					console.error('Failed to initialize My Stories');
				}
			);
		}

		function scanStory()
		{
			if ( ! app.mystories || ! app.mystories.check )
				return;

			app.mystories.isChecking = true;
			app.mystories.hasCheckErrors = false;

			topic.publish("MYSTORIES_SCAN", "start");

			app.mystories.check(
				app.data.getWebAppData().get()
			).then(
				function(params)
				{
					params = params || {
						ignoreAllIssues: false
					};


					app.mystories.isChecking = false;
					app.mystories.hasCheckErrors = false;
					app.mystories.forcedIgnoreIssues = params.ignoreAllIssues;

					topic.publish("MYSTORIES_SCAN", "success");

					// Refresh the share dialog if open
					if ( $('#sharePopup').is(':visible') ) {
						app.builder.openSharePopup();
					}
				},
				function(params)
				{
					params = params || {
						completed: false,
						ignoreAllIssues: false
					};

					app.mystories.isChecking = false;
					app.mystories.hasCheckErrors = true;
					app.mystories.forcedIgnoreIssues = params.ignoreAllIssues;

					topic.publish("MYSTORIES_SCAN", "error");

					// Refresh the share dialog if open
					if ( $('#sharePopup').is(':visible') ) {
						app.builder.openSharePopup();
					}
				}
			);
		}

		function myStoriesIsSameDomain()
		{
			var mapViewerDomain = CommonHelper.getPortalURL().split('//').slice(-1)[0],
				mapViewerDomainSplit = mapViewerDomain.split('.'),
				host = document.location.host,
				hostSplit = host.split('.');

			if ( mapViewerDomain == host
					// For Portal Web Adaptor
					|| (mapViewerDomain.split('/').length > 1 && mapViewerDomain.split('/')[0] == host)
			) {
				return true;
			}
			else if ( hostSplit.length < 3 ) {
				return host == mapViewerDomain;
			}
			else {
				return hostSplit.slice(1).join('.') == mapViewerDomainSplit.slice(-2).join('.');
			}
		}

		return {
			loadMyStories: loadMyStories,
			scanStory: scanStory,
			myStoriesIsSameDomain: myStoriesIsSameDomain
		};
	}
);
