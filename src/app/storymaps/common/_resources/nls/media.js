define({
	root: ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Content",
				lblMap: "Map",
				lblImage: "Image",
				lblVideo: "Video",
				lblExternal: "Web page",
				lblUpload: "Upload",
				lblLink: "Link",
				disabled: "This feature has been disabled by the Administrator",
				userLookup: "Load albums",
				notImplemented: "Not implemented yet.",
				noData: "No public album found",
				thirdPartyTerms: "By using a third-party service, you agree to its terms of service: "
			},
			imageSelector: {
				lblStep1: "Choose the service",
				lblStep2: "Select your media",
				lblStep3: "Configure"
			},
			imageSelectorHome: {
				explain: "Load images from social media, <br /> or directly from a URL"
			},
			imageSelectorUpload: {
				lblUploadButton: "browse for an image",
				lblDrop: "Drop an image here or",
				infoUpload: "Images will be stored in your ArcGIS account and accessible only inside your story.",
				warningFileTypes: "Image can be .jpg, .png, .gif, or .bmp",
				warningOneFile: "Only one image may be uploaded at a time.",
				warningFileSize: "Image must be smaller than 10 MB.",
				tooltipRemove: "Delete this unused image from your ArcGIS account. <br> (You'll need to upload it again if you decide to use it later.)"
			},
			imageSelectorFlickr: {
				userInputLbl: "User name",
				signInMsg2: "User not found",
				loadingFailed: "Loading failed"
			},
			imageSelectorPicasa: {
				userInputLbl: "Email or Google ID",
				signInMsg2: "Account not found",
				howToFind: "How to find a Picasa ID",
				howToFind2: "Copy digits between the first and second '/' of any Picasa page"
			},
			videoSelectorCommon: {
				check: "Check",
				notFound: "Video not found",
				found: "Video found",
				select: "Select this video"
			},
			videoSelectorHome: {
				other: "Other"
			},
			videoSelectorYoutube: {
				url: "YouTube video link",
				pageInputLbl: "User name",
				lookupMsgError: "User not found",
				howToFind: "How to find a YouTube user name",
				howToFind2: "User name is displayed under videos",
				found: "Found",
				noData: "No public videos found",
				videoNotChecked: "The video hasn't been checked on YouTube but its address looks good.",
				checkFailedAPI: "YouTube check has failed, please check YouTube API key."
			},
			videoSelectorVimeo: {
				url: "Vimeo video link"
			},
			videoSelectorOther: {
				explain1: "This story map cannot play raw video files (e.g., avi, mpeg), but it can play hosted videos with built-in players (e.g., YouTube or Vimeo).",
				explain2: "Most video hosting services offer this feature. Find the option to embed the video, copy the code provided, and add it to your story using the %WEBPAGE% content option.",
				explain3: "Alternatively, you can host the video yourself along with an HTML page that uses a video player like %EXAMPLE%. You'd then add the URL of that HTML page to your story as a %WEBPAGE%.",
				webpage: "Web page"
			},
			webpageSelectorHome: {
				lblUrl: "Web page link",
				lblEmbed: "Embed code",
				lblMustUseHTTPS: "Links to web content must begin with HTTPS",
				lblOR: "OR",
				lblError1: "Error, clear one of the two input fields.",
				lblError2: "Embed code can only contain one %IFRAMETAG%",
				configure: "Configure"
			},
			mediaConfigure: {
				lblURL: "Image link",
				lblURLPH: "Link should end with .jpg, .png, .gif, or .bmp",
				lblURLPHHTTPS: "https://www.example.com/image.jpg",
				lblURLError: "This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work.",
				lblURLErrorHTTPS: "This image link is not valid. The URL must begin with HTTPS and end with a supported image file extension (.jpg, .png, .gif, .bmp).",
				lblURLCheck: "Checking image...",
				lblLabel: "Image caption",
				lblLabel1: "Caption",
				lblLabel2: "Hover text",
				lblLabel3: "None",
				lblLabelPH: "Enter some text...",
				lblMaximize: "Include a maximize button in the corner of the image",
				lblMaximizeHelp: "Recommended only for high quality photos",
				lblPosition: "Position",
				lblPosition1: "Center",
				lblPosition2: "Fill",
				lblPosition3: "Fit",
				lblPosition4: "Stretch",
				lblPosition5: "Custom",
				lblURLHelp: "Image link must begin with HTTPS.<br><br>For best results, images should be less than 400 KB. Use compressed JPG images at 80% quality and these recommended image widths: 2000 pixels for main stage or narrative panel with maximize button, 1000 pixels for narrative panel without maximize button.<br><br>If a linked image draws slowly, upload it to your story for better results.",
				tooltipDimension: "The value can be specified in 'px' or '%'",
				tooltipDimension2: "The value has to be specified in 'px'",
				lblPosition2Explain: "(may crop)",
				lblPosition3Explain: "(won't crop)",
				lblPosition3Explain2: "(width will always fit the panel)",
				lblPosition4Explain: "(may distort)",
				unloadLbl: "Unload when reader navigates away",
				unloadHelp: "If the web page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the web page is an application, uncheck this option so that the story does not reload if the reader returns to it.",
				embedProtocolLabel: "Load page over a secure connection (HTTPS)",
				embedProtocolWarning1: "If this page does not load in your story, it can't be embedded for web security reasons. As an alternative, add a link in your narrative to open the page in a new browser tab.",
				embedProtocolWarning2: "If this page does not load in your story, uncheck this option and try again. If the page still does not load, it can't be embedded for web security reasons. As an alternative, add a link in your narrative to open the page in a new browser tab.",
				learn: "Learn more",
				lblAltText: "Alternative Text",
				placeholderAltText: "Enter a description of this media for visually impaired readers...",
				tooltipAltText: "Provide a description of this media content that will be used by assistive technologies such as screen reader software. A description is optional but recommended to meet web accessibility guidelines such as WCAG and Section 508."
			},
			editorActionGeocode: {
				lblTitle: "Locate an address or place",
				mapMarkerExplain: "User will see a map marker when clicking the link"
			},
			editorActions: {
				navigate: "Navigate to another section",
				remove: "Remove action",
				preview: "Preview action"
			},
			editorActionMedia: {
				lblTitle: "Change the Main Stage content"
			},
			editorInlineMedia: {
				lblTitle: "Insert an image, video or web page"
			}
		}
	}),
	"ar": 1,
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
	"hi": 1,
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
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
