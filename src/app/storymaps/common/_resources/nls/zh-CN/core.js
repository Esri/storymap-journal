define({
  "commonCore": {
    "common": {
      "add": "添加",
      "edit": "编辑",
      "save": "保存",
      "next": "下一步",
      "cancel": "取消",
      "back": "返回",
      "apply": "应用",
      "close": "关闭",
      "open": "打开",
      "start": "开始",
      "loading": "正在加载",
      "disabledAdmin": "此功能已被管理员禁用",
      "width": "宽度",
      "height": "高度",
      "create": "创建",
      "yes": "是",
      "no": "否",
      "mystories": "我的故事"
    },
    "inlineFieldEdit": {
      "editMe": "编辑！"
    },
    "builderPanel": {
      "panelHeader": "%TPL_NAME% 构建器",
      "buttonSaving": "正在保存",
      "buttonSaved": "已保存",
      "buttonShare": "共享",
      "buttonSettings": "设置",
      "buttonHelp": "帮助",
      "buttonPreview": "查看故事",
      "tooltipFirstSave": "保存后，此功能才可用。",
      "tooltipNotShared": "共享后，此功能才可用。",
      "tooltipNotShared2": "您的故事尚未共享，只有您可以进行访问。",
      "noPendingChange": "无待决的更改",
      "unSavedChangePlural": "待决更改",
      "closeWithPendingChange": "是否确定要确认此操作？您的更改将丢失。",
      "saveError": "保存失败，请重试",
      "status1": "故事已共享，但存在问题",
      "status2": "故事未共享，但存在问题",
      "status3": "故事是公开的",
      "status4": "故事已在组织内共享",
      "status5": "故事是私有的",
      "status6": "尚未保存故事",
      "checking": "正在检查",
      "fix": "定位"
    },
    "saveError": {
      "title": "保存故事时出错",
      "err1Div1": "无法保存故事，因为已存在同名项。",
      "err1Div2": "请修改故事的标题，然后将其保存。",
      "btnOk": "编辑故事标题"
    },
    "saveErrorSocial": {
      "title": "社交媒体共享更新",
      "panel1": "您的故事在社交媒体上的外观已改善，但您的 ArcGIS web 应用程序项目标题与故事标题不一致。",
      "panel1tooltip": "通过定义标题、摘要和缩略图，您的故事将显示如下:",
      "panel2": "您希望在社交媒体上使用的标题:",
      "panel2q1": "故事标题(建议)",
      "panel2q1tooltip": "通过选择此选项，可将您的项目标题修改为与故事标题相匹配的标题并同步对构建器所做的进一步更改。",
      "panel2q2": "项目标题",
      "panel3": "要进一步改善您的故事在社交媒体上的外观，请使用 ${MYSTORIES} 添加摘要和缩略图。",
      "panel4": "此故事不再提醒"
    },
    "share": {
      "shareTitle": "共享您的故事",
      "preview": "预览",
      "viewlive": "查看故事",
      "btnPrivate": "私有",
      "btnPrivateTooltip": "仅限您个人可查看故事",
      "btnOrg": "组织",
      "btnOrgTooltip": "仅限您组织内的成员可查看故事",
      "btnPublic": "公共",
      "btnPublicTooltip": "所有人可查看故事",
      "loadingMessage": "正在检查您故事中的问题",
      "viewToggle1": "显示故事内容",
      "viewToggle2": "关闭故事内容",
      "socialize": "社会化",
      "statusPrivate": "您的故事是私有的，仅限您个人可以查看。",
      "statusError": "在您的故事内容中存在问题，将会被您的读者注意到。您可在下面找出并改正这些错误。",
      "statusNoErrPrivate": "请在您准备就绪后共享您的故事！",
      "mystoriesinvite": "管理您的所有故事",
      "notavailable1": "抱歉，不支持从“构建器”共享您的故事，因为此应用程序未托管在 %PRODUCT% 上。",
      "notavailable2": "抱歉，此版本的 Portal for ArcGIS 不支持从“构建器”共享您的故事(需要 10.4 或更高版本)。",
      "notavailable3": "您可从 %LINK% 共享此故事。",
      "notavailable4": "我的故事",
      "notavailable5": "其项目页面",
      "notavailable6": "抱歉，在开发模式下无法完全支持此要素。根据您的部署方案，此要素在部署后可能被支持。",
      "notavailable7": "请务必访问 %MYCONTENT%，以确认在您的故事中使用的地图和图层同样被共享。",
      "notavailable8": "我的内容",
      "mystoriesinvite2": "要改善您的故事在社交网络上的外观，请使用 ${MYSTORIES} 添加摘要和缩略图。"
    },
    "settings": {
      "header": "设置",
      "tabError": "请检查所有选项卡中的错误"
    },
    "settingsLayout": {
      "title": "布局",
      "explain": "想要使用哪种布局？",
      "explainInit": "可随时在设置对话框中更改布局。",
      "viewExample": "查看实时示例"
    },
    "settingsTheme": {
      "title": "主题"
    },
    "settingsHeader": {
      "title": "页眉",
      "logoEsriRadio": "Esri 徽标",
      "logoNoneRadio": "无徽标",
      "logoOrgRadio": "组织徽标",
      "logoCustomRadio": "我的徽标",
      "logoCustomLabel": "图像：",
      "logoCustomUploadHelp": "徽标图像链接必须以 HTTPS 开头。当徽标的宽高比在 1:1 到 5:1 之间时，其显示效果最佳。如果已链接徽标绘制缓慢，请保存其副本并在此处上传。",
      "logoCustomUploadTooltip": "使用已上传徽标",
      "logoCustomUploadButton": "上传徽标",
      "logoUploadSizeError": "GIF 尺寸过大。请将尺寸的宽度重新调整为 ${PIXEL-WIDTH} 像素。",
      "logoCustomLinkHTTPSError": "链接必须以 HTTPS 开头",
      "logoCustomLinkTooltip": "链接到徽标",
      "logoCustomLinkPlaceholder": "图像 URL",
      "logoCustomLinkPlaceholderHTTPS": "https://example.com/logo.jpg",
      "logoUploadGenericError": "徽标可以是 .bmp、.gif、.jpg、.jpeg 或 .png 文件。Gif 文件的尺寸和大小必须小于 250px 和 10Mb。",
      "logoCustomTargetPlaceholder": "单击徽标时打开的 web 页面",
      "logoSocialText": "标语：",
      "logoLink": "链接：",
      "lblSmallHeader": "使用紧凑型标题(无副标题)"
    },
    "header": {
      "title": "编辑 %TPL_NAME% 的标题",
      "subtitle": "编辑 %TPL_NAME% 的副标题"
    },
    "sectionNavigation": {
      "select": "选择一个分区...",
      "section": "分区",
      "thisSection": "此分区",
      "homeSection": "主页分区",
      "hiddenSection": "隐藏分区"
    },
    "bannerNotification": {
      "learnMore": "更多信息",
      "close": "关闭",
      "dontShowAgain": "不再显示此消息"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "关于网络安全和故事地图的重要消息",
      "s1h1": "Esri 将增强故事地图的安全性",
      "s1p1": "您的故事地图将显示在 web 上，web 社区始终致力于建立并实施更好的安全性措施。 HTTPS (可为通过 Internet 传输的内容提供安全连接)正逐渐成为访问 web 内容的首选方式。 当使用 HTTP 而非 HTTPS 时，大多数现代浏览器现在会显示警告消息。 鉴于这一新兴标准，我们强烈建议您使用 HTTPS 链接来创作和共享 Story Maps，并且仅在嵌入 web 内容或链接到 Story Map 中的影像时才使用 HTTPS URL。",
      "s1p2": "实际上，这意味着 Story Map 及其所有内容(包括影像、图层、嵌入式应用程序和网站)应使用以 HTTPS 而非 HTTP 开头的链接进行访问。 这可确保为读者提供最佳体验，因为大多数 web 浏览器都会指示您的故事是安全的。",
      "s2h1": "我需要做什么?",
      "s2p1": "Esri 致力于使故事地图的作者和读者轻松实现过渡。 Story Map 构建器和 My Stories 中现已提供工具，可帮助您在故事中查找非安全内容(HTTP)，并就如何解决提出建议。 请检查您的故事是否存在非安全内容，并尽快更新为 HTTPS。",
      "action1": "关闭",
      "action2": "立即检查我的故事",
      "action3": "了解详细信息"
    },
    "embedBar": {
      "share": "共享",
      "fullScreen": "全屏",
      "exitFullScreen": "退出全屏",
      "enlarge": "最大化",
      "newTab": "在新选项卡中打开",
      "tagline": "故事地图"
    },
    "licenseChange2018": {
      "noAccess": "您的帐户(%USER_NAME%)无权打开非公共 Story Map。 请联系您的组织管理员为您分配包含 Story Maps 或附加基本应用程序许可的用户类型。"
    }
  }
});