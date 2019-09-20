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

	// Date to enforce HTML sanitization for apps created after (06/27/18)
	HTML_SANITIZER_DATE: 1530072000000,
	JUNE_RELEASE_DATE: 1530072000000,

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
        {name: "cdi-africa", themeMajor: "white", primary: "#6F9364", secondary: "#475E40", background: "#F1F5F0", dotNav: "#777777", panel: "#F1F5F0", media: "#EEEEEE", text: "#475E40", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: "cdi-americas", themeMajor: "white", primary: "#7890B0", secondary: "#4D5C71", background: "#f0f2f5", dotNav: "#777777", panel: "#f0f2f5", media: "#EEEEEE", text: "#4D5C71", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: "cdi-caribbean", themeMajor: "white", primary: "#D8CFAF", secondary: "#767160", background: "#f7f5ee", dotNav: "#777777", panel: "#f7f5ee", media: "#EEEEEE", text: "#767160", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'cdi-europe', themeMajor: "white", primary: "#BE6E46", secondary: "#8B5133", background: "#f8f0ec", dotNav: "#777777", panel: "#f8f0ec", media: "#EEEEEE", text: "#8B5133", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'cdi-asia', themeMajor: "white", primary: "#A57548", secondary: "#795635", background: "#f7f2ed", dotNav: "#777777", panel: "#f7f2ed", media: "#EEEEEE", text: "#795635", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'cdi-region-6', themeMajor: "white", primary: "#885053", secondary: "#633B3D", background: "#f5efef", dotNav: "#777777", panel: "#f5efef", media: "#EEEEEE", text: "#633B3D", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'cdi-region-7', themeMajor: "white", primary: "#508484", secondary: "#335454", background: "#eff5f5", dotNav: "#777777", panel: "#eff5f5", media: "#EEEEEE", text: "#335454", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'cdi-region-8', themeMajor: "white", primary: "#CCA43B", secondary: "#826926", background: "#faf6eb", dotNav: "#777777", panel: "#faf6eb", media: "#EEEEEE", text: "#826926", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'what-is-leaf', themeMajor: "white", primary: "#C84107", secondary: "#923006", background: "#FAEDE8", dotNav: "#777777", panel: "#FAEDE8", media: "#EEEEEE", text: "#923006", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'schools-streets', themeMajor: "white", primary: "#E5C031", secondary: "#A08722", background: "#fcf8e8", dotNav: "#777777", panel: "#fcf8e8", media: "#EEEEEE", text: "#A08722", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'leaf-international', themeMajor: "white", primary: "#C65F20", secondary: "#8C4417", background: "#fbf0e9", dotNav: "#777777", panel: "#fbf0e9", media: "#EEEEEE", text: "#8C4417", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'leaf-festival', themeMajor: "white", primary: "#53B048", secondary: "#3E8436", background: "#eef8ed", dotNav: "#777777", panel: "#eef8ed", media: "#EEEEEE", text: "#3E8436", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'leaf-downtown', themeMajor: "white", primary: "#5DC5C7", secondary: "#449091", background: "#ecf8f8", dotNav: "#777777", panel: "#ecf8f8", media: "#EEEEEE", text: "#449091", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'leaf-global', themeMajor: "white", primary: "#B6AA82", secondary: "#857C5F", background: "#f6f4ef", dotNav: "#777777", panel: "#f6f4ef", media: "#EEEEEE", text: "#857C5F", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
        {name: 'more-about-leaf', themeMajor: "white", primary: "#715035", secondary: "#533B27", background: "#f7f2ee", dotNav: "#777777", panel: "#f7f2ee", media: "#EEEEEE", text: "#533B27", textLink: "#555", softText: "#c0c0c0", softBtn: "#444", esriLogo: "black"},
      ],
		},
		{
			id: "float",
			thumbnail: "resources/tpl/builder/icons/builder-layout-float.png",
			liveApp: "http://links.esri.com/storymaps/map_journal_example_floating_panel",
			sizes: { small: '25%', medium: '35%', large: '45%' },
			positions: ["right", "left"],
			themes: [
				{name: "float-default-1", themeMajor: "black", dotNav: "#000000", panel: "#000000", media: "#a0a0a0", text: "#FFFFFF", textLink: "#DDD", softText: "#FFF",    softBtn: "#AAA", esriLogo: "white"},
				{name: "float-default-2", themeMajor: "white", dotNav: "#FFFFFF", panel: "#FFFFFF", media: "#EEEEEE", text: "#000000", textLink: "#555", softText: "#c0c0c0", softBtn: "#737373", esriLogo: "black", panelOpa: 0.95, dotNavActive: "#000"}
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

	HELP_URL: "https://storymaps.arcgis.com/en/app-list/map-journal/",
	HELP_URL_PORTAL: "#/Story_Map_Journal/0193000000v4000000/",

	// links to third-party terms of service
	YOUTUBE_TERMS_LINK: "http://links.esri.com/storymaps/youtube-terms",
	VIMEO_TERMS_LINK: "http://links.esri.com/storymaps/vimeo-terms",
	FLICKR_TERMS_LINK: "http://links.esri.com/storymaps/flickr-terms",

	// Control the authorized data source (for initialization and import screen)
	AUTHORIZED_IMPORT_SOURCE: {
		flickr: true,
		facebook: true,
		picasa: true,
		youtube: true
	},

	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// This Youtube key is valid for application running on arcgis.com and esri.com domains
	// If the application is deployed on Portal for ArcGIS or your own server, the Youtube api call
	//  won't be perfomed until you set the following flag and provide your own key
	YOUTUBE_DISABLE_ON_PORTAL: true,
	YOUTUBE_API_KEY: "",

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
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/rest/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/rest/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};
