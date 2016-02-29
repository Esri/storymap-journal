app.cfg = {
	//
	// General UI
	//
	
	// Maximum number of sections
	MAX_NB_SECTIONS: 101,
	
	// Side and Floating panel dot navigation group size
	DOTNAV_GROUPSIZE: 15,
	
	TIMEOUT_VIEWER_LOAD: 5000,
	TIMEOUT_VIEWER_REQUEST: 12000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	SECTION_ACTION_ZOOM_MAP_MARKER: "resources/tpl/viewer/icons/map-pin-circle-blue.png",
	
	// Control the social button configuration in builder
	// If disabled author won't be able to activate them
	// if disabled after a journal has been created, this will override the settings
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},
	
	//
	// Layouts
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
				{name: "side-default-1", themeMajor: "white", dotNav: "#777777", panel: "#FFFFFF", media: "#EEEEEE", text: "#000000", textLink: "#555", softText: "#c0c0c0", softBtn: "#444",    esriLogo: "black"},
				{name: "side-default-2", themeMajor: "white", dotNav: "#726458", panel: "#FFF8E9", media: "#C9C1B9", text: "#000000", textLink: "#555", softText: "#c0c0c0", softBtn: "#444",    esriLogo: "black"},
				{name: "side-default-3", themeMajor: "white", dotNav: "#676C7F", panel: "#F9F9EF", media: "#424D51", text: "#000000", textLink: "#555", softText: "#c0c0c0", softBtn: "#aaa",    esriLogo: "black"},
				{name: "side-default-4", themeMajor: "black", dotNav: "#5A5A5A", panel: "#000000", media: "#EEEEEE", text: "#FFFFFF", textLink: "#DDD", softText: "#FFF",    softBtn: "#AAA",    esriLogo: "white"},
				{name: "side-default-5", themeMajor: "white", dotNav: "#68AAE1", panel: "#FFFFFF", media: "#E8E8DF", text: "#000000", textLink: "#555", softText: "#FFF",    softBtn: "#4D4D4D", esriLogo: "black"},
				{name: "side-default-6", themeMajor: "white", dotNav: "#676C7E", panel: "#F9F9EF", media: "#C2E3EE", text: "#000000", textLink: "#555", softText: "#c0c0c0", softBtn: "#AAA",    esriLogo: "black"}
			]
		},
		{
			id: "float",
			thumbnail: "resources/tpl/builder/icons/builder-layout-float.png",
			liveApp: "http://links.esri.com/storymaps/map_journal_example_floating_panel",
			sizes: { small: '25%', medium: '35%', large: '45%' },
			positions: ["right", "left"],
			themes: [
				{name: "float-default-1", themeMajor: "black", dotNav: "#000000", panel: "#000000", media: "#FFFFFF", text: "#FFFFFF", textLink: "#DDD", softText: "#FFF",    softBtn: "#AAA", esriLogo: "white"}
			]
		}
	],
	
	FONTS: {
		sectionTitle: [
			{ id: "default", 	lbl: "Open Sans", 				value: "font-family:'open_sansregular', sans-serif;" },
			{ id: "arial", 		lbl: "Arial", 					value: "font-family:arial,helvetica,sans-serif;" },
			{ id: "georgia", 	lbl: "Georgia", 				value: "font-family:georgia,serif;" },
			{ id: "lucida", 	lbl: "Lucida Sans Unicode", 	value: "font-family:lucida sans unicode,lucida grande,sans-serif;" },
			{ id: "tahoma", 	lbl: "Tahoma", 					value: "font-family:tahoma,geneva,sans-serif;" },
			{ id: "times", 		lbl: "Times New Roman", 		value: "font-family:times new roman,times,serif;" },
			{ id: "trebuchet", 	lbl: "Trebuchet MS", 			value: "font-family:trebuchet ms,helvetica,sans-serif;" },
			{ id: "verdana", 	lbl: "Verdana", 				value: "font-family:verdana,geneva,sans-serif;" }
		],
		sectionContent: [
			{ id: "default", 	lbl: "Open Sans", 				value: "font-family:'open_sansregular', sans-serif;" },
			{ id: "arial", 		lbl: "Arial", 					value: "font-family:arial,helvetica,sans-serif;" },
			{ id: "georgia", 	lbl: "Georgia", 				value: "font-family:georgia,serif;" },
			{ id: "lucida", 	lbl: "Lucida Sans Unicode", 	value: "font-family:lucida sans unicode,lucida grande,sans-serif;" },
			{ id: "tahoma", 	lbl: "Tahoma", 					value: "font-family:tahoma,geneva,sans-serif;" },
			{ id: "times", 		lbl: "Times New Roman", 		value: "font-family:times new roman,times,serif;" },
			{ id: "trebuchet", 	lbl: "Trebuchet MS", 			value: "font-family:trebuchet ms,helvetica,sans-serif;" },
			{ id: "verdana", 	lbl: "Verdana", 				value: "font-family:verdana,geneva,sans-serif;" }     
		]
	},
	
	/*
	 * Builder
	 */
	
	HELP_URL: "http://storymaps.arcgis.com/en/app-list/map-journal/",
	HELP_URL_PORTAL: "#/Story_Map_Journal/0193000000v4000000/",
	
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
	// This Youtube key is valid for application running on arcgis.com and esri.com domains
	// If the application is deployed on Portal for ArcGIS or your own server, the Youtube api call 
	//  won't be perfomed until you set the following flag and provide your own key
	YOUTUBE_DISABLE_ON_PORTAL: true,
	YOUTUBE_API_KEY: "AIzaSyDevTFP16nz6sA-akiOVi6wWXiplJnQ4qw",
	
	//
	// Builder direct creation
	//
	
	// Text to be used as the browser page title during app creation
	TPL_NAME: "Map Journal",
	TPL_ID: "mapjournal",
	WEBAPP_TAG: ["Story Map", "Map Journal"],
	WEBAPP_KEYWORD_GENERIC: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map"],
	WEBAPP_KEYWORD_APP: ["Story Map", "Story Maps", "MapJournal"],

	//
	// Portal configuration
	//
	
	// Optional array of servers that will leverage CORS (for development or specific cross domain deployment)
	CORS_SERVER: [],
	
	// Optional array of proxy rules
	PROXY_RULES: [
		/*{  
			urlPrefix: "http://services.arcgis.com/",
			proxyUrl: "http://myserver.domain.com/DotNet/proxy.ash"  
		}*/
	],
	
	BING_MAPS_KEY: "",
	HELPER_SERVICES: {
		geometry: {
			//url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
		},
		geocode: [
			/*
			{
				url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
				name: "My Geocoder"
			}
			*/
		]
	},
	
	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};