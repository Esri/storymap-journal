define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "媒体",
      "lblSelect2": "内容",
      "lblMap": "地图",
      "lblImage": "图像",
      "lblVideo": "视频",
      "lblExternal": "Web 页面",
      "lblUpload": "上传",
      "lblLink": "链接",
      "disabled": "此功能已被管理员禁用",
      "userLookup": "加载图片集",
      "notImplemented": "尚未实现。",
      "noData": "未找到公共图片集",
      "thirdPartyTerms": "使用第三方服务即表示您同意其服务条款。 "
    },
    "imageSelector": {
      "lblStep1": "选择服务",
      "lblStep2": "选择媒体",
      "lblStep3": "配置"
    },
    "imageSelectorHome": {
      "explain": "从社交媒体加载图像，<br /> 或直接从 URL 进行加载"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "浏览图像",
      "lblDrop": "将图像放置到此处或",
      "infoUpload": "图像将存储到您的 ArcGIS 帐户，并且仅能通过您的故事进行访问。",
      "warningFileTypes": "图像可以为 .jpg、.png、.gif 或 .bmp 格式",
      "warningOneFile": "一次只能上传一个图像。",
      "warningFileSize": "图像必须小于10 MB。",
      "tooltipRemove": "从您的 ArcGIS 帐户中删除该未使用图像。<br>(如果稍后决定使用该图像，则需要重新上传。)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "用户名",
      "signInMsg2": "未找到用户",
      "loadingFailed": "加载失败"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "电子邮件或 Google ID",
      "signInMsg2": "未找到帐户",
      "howToFind": "如何查找 Picasa ID",
      "howToFind2": "复制任何 Picasa 页面的第一个和第二个 '/' 之间的数字"
    },
    "videoSelectorCommon": {
      "check": "选中",
      "notFound": "未找到视频",
      "found": "已找到视频",
      "select": "选择此视频"
    },
    "videoSelectorHome": {
      "other": "其他"
    },
    "videoSelectorYoutube": {
      "url": "YouTube 视频链接",
      "pageInputLbl": "用户名",
      "lookupMsgError": "未找到用户",
      "howToFind": "如何查找 YouTube 用户名",
      "howToFind2": "用户名显示在视频下方",
      "found": "已找到",
      "noData": "未找到公开视频",
      "videoNotChecked": "未在 YouTube 上检查该视频，但其地址看起来一切正常。",
      "checkFailedAPI": "YouTube 检查失败，请检查 YouTube API 密钥。"
    },
    "videoSelectorVimeo": {
      "url": "Vimeo 视频链接"
    },
    "videoSelectorOther": {
      "explain1": "该故事地图无法播放原始视频文件(例如 avi 和 mpeg)，但是可以播放使用内置播放器的托管视频(例如 YouTube 或 Vimeo)。",
      "explain2": "大部分视频托管服务均提供此功能。请查找嵌入视频的选项、复制提供的代码，然后使用 %WEBPAGE% 内容选项将其添加到故事。",
      "explain3": "或者，您也可以通过使用视频播放器(例如 %EXAMPLE%)的 HTML 页面自己托管视频。随后，您可以将该 HTML 页面的 URL 作为 %WEBPAGE% 添加到故事。",
      "webpage": "Web 页面"
    },
    "webpageSelectorHome": {
      "lblUrl": "网页链接",
      "lblEmbed": "嵌入代码",
      "lblMustUseHTTPS": "web 内容的链接必须以 HTTPS 开头",
      "lblOR": "或",
      "lblError1": "错误，请清除其中一个输入字段。",
      "lblError2": "嵌入代码仅可包含一个 %IFRAMETAG%",
      "configure": "配置"
    },
    "mediaConfigure": {
      "lblURL": "图像链接",
      "lblURLPH": "链接应以 .jpg、.png、.gif 或 .bmp 结尾",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "此图像可能无效。请指定图像文件的直接链接(URL 通常以 .jpg 或 .png 结尾)。包含图像的网页链接无法使用。",
      "lblURLErrorHTTPS": "此图片链接无效。URL 必须以 HTTPS 开头，并以受支持的图像文件扩展名(.jpg、.png、.gif、.bmp)结尾。",
      "lblURLCheck": "正在检查图像...",
      "lblLabel": "图像标题",
      "lblLabel1": "说明文字",
      "lblLabel2": "悬停文本",
      "lblLabel3": "无",
      "lblLabelPH": "请输入文本...",
      "lblMaximize": "在图像拐角位置放置一个最大化按钮",
      "lblMaximizeHelp": "建议仅用于高质量照片",
      "lblPosition": "位置",
      "lblPosition1": "居中",
      "lblPosition2": "填充",
      "lblPosition3": "适应",
      "lblPosition4": "拉伸",
      "lblPosition5": "自定义",
      "lblURLHelp": "徽标图像链接必须以 HTTPS 开头。<br><br>为获得最佳效果，图像大小应小于 400 KB。请使用经过压缩的 JPG 图像(质量为 80%)，建议对具有最大化按钮的主要部分或叙述性面板采取 2000 像素的图像宽度，对不具有最大化按钮的叙述性面板采取 1000 像素的宽度。<br><br>如果已链接图像的加载速度缓慢，可以将这些图像上传到您的故事，以获得更好的加载效果。",
      "tooltipDimension": "可使用 'px' 或 '%' 指定值",
      "tooltipDimension2": "值必须在 'px'中指定",
      "lblPosition2Explain": "（可裁切）",
      "lblPosition3Explain": "（不裁切）",
      "lblPosition3Explain2": "(宽度将始终适应面板)",
      "lblPosition4Explain": "（可变形）",
      "unloadLbl": "读者定位到其他部分时进行卸载",
      "unloadHelp": "如果网页中包含音频或视频介质，请将该选项选中以在读者定位到其他部分时停止内容播放。取消选中该选项可使读者在浏览故事的同时持续播放音轨。<br />如果网页是应用程序，请取消选中该选项，这样应用程序不必在读者返回此部分时重新加载。",
      "embedProtocolLabel": "通过安全连接(HTTPS)加载页面",
      "embedProtocolWarning1": "如果您的故事未加载此页面，则出于 web 安全性的因素，无法嵌入该页面。但是可在叙述中添加链接以在新浏览器选项卡中打开页面。",
      "embedProtocolWarning2": "如果您的故事未加载此页面，请取消选中该选项并重试。如果仍未加载该页面，则出于 web 安全性的因素，无法嵌入该页面。但是可在叙述中添加链接以在新浏览器选项卡中打开页面。",
      "learn": "了解详细信息",
      "lblAltText": "备选文本",
      "placeholderAltText": "针对视觉障碍的读者，输入该媒体的描述...",
      "tooltipAltText": "请提供辅助性技术(例如屏幕阅读软件)将使用的该媒体内容的描述。描述为可选内容，但是建议符合 web 可及性原则，例如 WCAG 和 Section 508。"
    },
    "editorActionGeocode": {
      "lblTitle": "定位地址或地点",
      "mapMarkerExplain": "用户在单击链接时会看到地图标记"
    },
    "editorActions": {
      "navigate": "导航到另一部分",
      "remove": "移除操作",
      "preview": "预览操作"
    },
    "editorActionMedia": {
      "lblTitle": "更改主舞台内容"
    },
    "editorInlineMedia": {
      "lblTitle": "插入图像、视频或网页"
    }
  }
});