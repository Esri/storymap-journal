define([], 
	function(){
		/**
		 * BuilderHelper
		 * @class BuilderHelper
		 * 
		 * Collection of helper functions for Builder
		 */
		return {
			getBlankAppJSON: function()
			{
				return {
					"itemType": "text",
					"guid": null,
					"name": null,
					"type": "Web Mapping Application",
					"typeKeywords": app.cfg.WEBAPP_KEYWORD_GENERIC.concat(app.cfg.WEBAPP_KEYWORD_APP),
					"description": null,
					"tags": app.cfg.WEBAPP_TAG,
					"snippet": null,
					"thumbnail": "thumbnail/ago_downloaded.png",
					"documentation": null,
					"extent": [],
					"lastModified": -1,
					"spatialReference": null,
					"accessInformation": null,
					"licenseInfo": null,
					"culture": "en-us",
					"properties": null,
					"size": 116,
					"appCategories": [],
					"industries": [],
					"languages": [],
					"largeThumbnail": null,
					"banner": null,
					"screenshots": [],
					"listed": false,
					"ownerFolder": null,
					"commentsEnabled": true,
					"numComments": 0,
					"numRatings": 0,
					"avgRating": 0.0,
					"numViews": 1
				};
			},
			getBlankWebmapJSON: function()
			{
				return {
					item: {
						"id": "",
						"guid": null,
						"name": null,
						"type": "Web Map",
						"typeKeywords": app.cfg.WEBMAP_KEYWORD,
						"description": null,
						"tags": app.cfg.WEBMAP_TAG,
						"snippet": null,
						"thumbnail": "thumbnail/ago_downloaded.png",
						"documentation": null,
						"extent": [
							[-180.0, -90],
							[180.0, 90]
						],
						"spatialReference": null,
						"accessInformation": null,
						"licenseInfo": null,
						"culture": "en-us",
						"properties": null,
						"url": null,
						"size": 233,
						"appCategories": [],
						"industries": [],
						"languages": [],
						"largeThumbnail": null,
						"banner": null,
						"screenshots": [],
						"listed": false,
						"ownerFolder": null,
						"commentsEnabled": true,
						"numComments": 0,
						"numRatings": 0,
						"avgRating": 0.0,
						"numViews": 1
					},
					itemData: {
						"operationalLayers": [],
						"baseMap": {
							"baseMapLayers": [{
								"id": "defaultBasemap",
								"opacity": 1,
								"visibility": true,
								"url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
							}],
							"title": "Topographic"
						},
						"version": "1.9"
					}
				};
			}
		};
	}
);