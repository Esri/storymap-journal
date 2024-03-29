define({
	root: ({
		builder: {
			layouts: {
				mainStage: "Main Stage",
				sideTitle: "Side Panel",
				sideDescr: "A layout for a text intensive story that excels at combining your photos, videos, and maps in a clear focused message.",
				floatTitle: "Floating Panel",
				floatDescr: "A layout that puts your cartography in focus while allowing a transparent short form text panel to help tell the story."
			},
			common: {
				lblStatus1: "Published",
				lblStatus2: "Draft",
				lblStatus3: "Hidden"
			},
			settingsLayoutOptions: {
				title: "Layout options",
				cfgLeft: "Left",
				cfgRight: "Right",
				cfgSmall: "Small",
				cfgMedium: "Medium",
				cfgLarge: "Large",
				socialLinksLabel: "Display sharing links at the bottom of each section",
				socialLinksDescr: "This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%.",
				socialDisabled: "This feature is only available with Floating Panel layout",
				socialWarning: "Your story is using Side Panel layout, but we now recommend using this option only with Floating Panel layout to avoid an issue where the panel may not position itself to the desired section for narratives with images. You may continue to use this option, but if you disable it, it will then only be available when using Floating Panel layout."
			},
			settingsLayoutFonts: {
				title: "Fonts",
				defaultLbl: "Default",
				sectionTitleLbl: "Section title",
				sectionContentLbl: "Section content"
			},
			settingsThemeOptions: {
				lblOrgTheme: "Organization Theme",
				lblModTheme: "Current Theme"
			},
			initPopup: {
				title: "Welcome to"
			},
			addEditPopup: {
				disabled: "Add Section is disabled because the maximum number of allowed sections has been reached.",
				titleAdd: "Add Section",
				titleAddHome: "Add Home Section",
				titleEdit: "Edit Section",
				step: "Step",
				stepMainStageExplain: "Main Stage Content",
				stepPanelExplain: "Content",
				stepMainStageNextTooltip: "Enter the section title and select the Main Stage content",
				stepMainStageNextTooltip2: "Select the Main Stage content",
				step2NextTooltip: "Enter the section title and %LAYOUT-TYPE% content",
				stepNextTooltipNext: "to go to the next step",
				stepNextTooltipAdd: "to add the section",
				firstAddExplain: "This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts.",
				firstAddLeanMore: "Learn More",
				titlePlaceholder: "Section title..."
			},
			addEditViewText: {
				editorPlaceholder: "Add text, links, and small graphics here.",
				editorActionsTitle: "Story Actions",
				editorActionsHelpDescr: "Create links in your narrative that help tell your story. A Story Action can link to another section or change the main stage. For example, you can configure an action to move the map to another location, toggle map layers on/off, or change the main stage media to a different image, video, map, or web page.",
				mainStageDisabled: "Story Actions are disabled when the editor is maximized"
			},
			organizePopup: {
				title: "Organize",
				lblHeader: "Drag and drop sections to organize your story.",
				lblColTitle: "Title",
				lblColPubDate: "Publication date",
				lblColStatus: "Status",
				checkDisplayReverse: "Display sections in reverse order",
				btnApplyWarning: "Confirm deletion of %NB% section(s)",
				deleteTooltip: "Delete",
				firstSectionExplain: "(The home section cannot be moved)",
				exportMainStage: "Main Stage content",
				exportPanel: "Panel content",
				exportActions: "Story actions"
			},
			exportData: {
				btn: "Export content",
				tooltip: "Exporting your content allows you to view and create a back-up of your content should you accidentally delete it. Simply copy and paste the content from the page into any word processor."
			},
			help: {
				lblHelp: "Help",
				lblAdd: "Add Section",
				lblSettings: "Settings",
				lblOrga: "Organize content",
				lblEdit: "Edits",
				lblPublish: "Share",
				lblTips: "Tips",
				lblMore: "Want more?",
				lblLink: "Visit the Esri Story Maps website.",
				content1Div1: "You can integrate a variety of styles when building your story. The <strong>%LAYOUT_TITLE%</strong> typically holds your text, images, and video while your maps tend go on the <strong>Main Stage</strong>. However, the %TPL_NAME% allows you to feature images, charts, and video within the main stage as well.",
				content1Div2: "Adding sections allows you to truly customize your storytelling experience. As readers scroll through your %LAYOUT_TITLE% text, a map on the Main Stage can pan or zoom to key points, or new maps and images can automatically toggle to support your message.",
				content2Div1: "The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc.",
				content2Div2: "You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information.",
				content3Div1: "Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish.",
				content4Div1: "Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. You’ll use the edit functions many times as you develop your %TPL_NAME%!",
				content5Div1: "When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it.",
				content5Div2: "Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it.",
				content6Div1: "The title of your Home section is also the title of your journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal.",
				content6Div2: "Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!"
			},
			landing: {
				lblAdd: "What do you want to call your Map Journal?",
				phAdd: "Enter your title...",
				lblOR: "Or",
				lblHelp: "Take a Tour",
				quote0: "There's always room for a story that can transport people to another place.",
				quote1: "Storytelling is the most powerful way to put ideas into the world today.",
				quote2: "The stories we tell literally make the world. If you want to change the world, you need to change your story. This truth applies both to individuals and institutions.",
				quote3: "The shortest distance between a human being and the truth is a story.",
				quote4: "People don’t want more information. They are up to their eyeballs in information. They want faith–faith in you, your goals, your success, in the story you tell.",
				quote5: "I truly believe that people are looking for stories that really mean something–stories that are redemptive, inspiring, and bigger than an individual.",
				quote6: "If you wish to influence an individual or a group to embrace a particular value in their daily lives, tell them a compelling story.",
				quote7: "If you tell me, it’s an essay. If you show me, it’s a story.",
				quote8: "If you don’t know the trees you may be lost in the forest, but if you don’t know the stories you may be lost in life.",
				quote9: "Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience. They are the currency of human contact.",
				quote10: "There is no greater agony than bearing an untold story inside you.",
				quote11: "Maybe stories are just data with a soul.",
				quote12: "Stories are the single most powerful weapon in a leader’s arsenal.",
				quote13: "It is the nature of stories to leave out far more than they include."
			},
			firstAddSplash: {
				thisis: "This is the",
				lblMain: "This is the %BR% Main Stage"
			}
        }
    }),
	"ar": 1,
	"bg": 1,
	"bs": 1,
	"ca": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hr": 1,
	"hu": 1,
	"id": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sl": 1,
	"sk": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"uk": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
