app.cfg = {
	//
	// UI
	//
	
	// Header Logo
	HEADER_LOGO_URL: "resources/tpl/viewer/icons/esri-logo.png",
	HEADER_LOGO_TARGET: "http://www.esri.com",
	// Header top right link
	HEADER_LINK_TEXT: "A story map",
	HEADER_LINK_URL: "http://storymaps.arcgis.com",
	// Control display of Facebook and Twitter links
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},
	
	// Maximum number of sections
	MAX_NB_SECTIONS: 99,
	
	// Side and Floating panel dot navigation group size
	DOTNAV_GROUPSIZE: 15,
	
	// Add a 'zoom on my location' button under the +/home/- buttons
	// For example this is not supported in IE 8
	DISPLAY_LOCATE_BUTTON: false,
	
	TIMEOUT_VIEWER_LOAD: 12000,
	TIMEOUT_VIEWER_REQUEST: 12000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	SECTION_ACTION_ZOOM_MAP_MARKER: "resources/tpl/viewer/icons/map-pin-circle-blue.png",
	
	//
	// Builder
	//
	
	// Size and position of represent the value relative to the Map
	LAYOUTS: [
  		{
  			id: "side",
  			thumbnail: "resources/tpl/builder/icons/builder-layout-side.png",
  			liveApp: "http://links.esri.com/storymaps/map_journal_example_side_panel",
  			sizes: { small: '30%', medium: '40%', large: '50%' },
  			positions: ["left", "right"],
  			themes: [
  			    {name: "side-default-1", dotNav: "#777777", panel: "#FFFFFF", media: "#EEEEEE", text: "#000000", textLink: "#555", esriLogo: "black"},
  				{name: "side-default-2", dotNav: "#726458", panel: "#FFF8E9", media: "#C9C1B9", text: "#000000", textLink: "#555", esriLogo: "black"},
  				{name: "side-default-3", dotNav: "#676C7F", panel: "#F9F9EF", media: "#424D51", text: "#000000", textLink: "#555", esriLogo: "black"},
  				{name: "side-default-4", dotNav: "#5A5A5A", panel: "#000000", media: "#EEEEEE", text: "#FFFFFF", textLink: "#DDD", esriLogo: "white"},
  				{name: "side-default-5", dotNav: "#68AAE1", panel: "#FFFFFF", media: "#E8E8DF", text: "#000000", textLink: "#555", esriLogo: "black"},
  				{name: "side-default-6", dotNav: "#676C7E", panel: "#F9F9EF", media: "#C2E3EE", text: "#000000", textLink: "#555", esriLogo: "black"}         
  			]
  		},
  		{
  			id: "float",
  			thumbnail: "resources/tpl/builder/icons/builder-layout-float.png",
  			liveApp: "http://links.esri.com/storymaps/map_journal_example_floating_panel",
  			sizes: { small: '25%', medium: '35%', large: '45%' },
  			positions: ["right", "left"],
  			themes: [
  				{name: "float-default-1", dotNav: "#000000", panel: "#000000", media: "#FFFFFF", text: "#FFFFFF", textLink: "#DDD", esriLogo: "white"}
  			]
  		}
  	],
  	
  	HELP_URL: "http://storymaps.arcgis.com/en/app-list/map-journal/",
	
	// Control the authorized data source (for initialization and import screen)
	AUTHORIZED_IMPORT_SOURCE: {
		flickr: true,
		facebook: true,
		picasa: true,
		youtube: true
	},
	
	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// The Facebook ID is only valid on arcgis.com domain
	// If used on another domain, user will have an error in the Facebook popup after login
	// To use Facebook import on Portal for ArcGIS, create your own ID at https://developers.facebook.com/ 
	// or set AUTHORIZED_IMPORT_SOURCE.facebook to false
	FACEBOOK_APP_ID: "276669785846752",
	
	//
	// Builder direct creation
	//
	
	// Text to be used as the browser page title during app creation
	TPL_NAME: "Map Journal",
	WEBAPP_TAG: ["Story Map", "Map Journal"],
	WEBAPP_KEYWORD: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map", "Story Map", "Story Maps", "MapJournal"],

	//
	// Portal configuration
	//
	
	// Optional array of server that will leverage CORS (for developement or specific cross domain deployment)
	CORS_SERVER: [],
	
	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};