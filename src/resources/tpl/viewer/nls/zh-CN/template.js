define({
  "viewer": {
    "common": {
      "close": "关闭",
      "focusMainstage": "向介质发送键盘焦点",
      "expandImage": "展开图像"
    },
    "a11y": {
      "skipToContent": "跳至叙述",
      "headerAria": "故事标题",
      "panelAria": "故事叙述",
      "mainStageAria": "当前故事章节媒体",
      "logoLinkAria": "徽标链接",
      "toTop": "转至叙述开头",
      "focusContent": "返回到叙述",
      "navAria": "故事章节",
      "navPreviousAria": "上一章节",
      "navNextAria": "下一章节",
      "toSectionAria": "转至章节 %SECTION_NUMBER%：%SECTION_TITLE%",
      "toNextGroupAria": "下一组章节(%SECTION_RANGE%)",
      "toPrevGroupAria": "上一组章节(%SECTION_RANGE%)",
      "loadingAria": "故事内容正在加载中"
    },
    "loading": {
      "step1": "正在加载故事",
      "step2": "加载数据",
      "step3": "正在初始化",
      "loadBuilder": "切换到构建器",
      "long": "Map Journal 正在初始化",
      "long2": "谢谢等候",
      "failButton": "重新加载故事"
    },
    "signin": {
      "title": "需要进行身份验证",
      "explainViewer": "请登录在 %PORTAL_LINK% 上的账户，以便访问此故事。",
      "explainBuilder": "请登录在 %PORTAL_LINK% 上的账户，以便配置此故事。"
    },
    "errors": {
      "boxTitle": "发生错误",
      "invalidConfig": "配置无效",
      "invalidConfigNoApp": "未在 index.html 中指定 Web 制图应用程序标识符。",
      "invalidConfigNoAppDev": "未在 URL 参数(?appid=)中指定 Web 制图应用程序标识符。在开发模式下，将忽略 index.html 中的 appid 配置。",
      "unspecifiedConfigOwner": "尚未配置授权的所有者。",
      "invalidConfigOwner": "未授权故事所有者。",
      "createMap": "无法创建地图",
      "invalidApp": "%TPL_NAME% 不存在或不可访问。",
      "appLoadingFail": "发生了一些错误， %TPL_NAME% 未正确加载。",
      "notConfiguredDesktop": "尚未配置此故事。",
      "notConfiguredMobile": "此显示器大小不支持 %TPL_NAME% 构建器。如果可能，请调整您的浏览器尺寸以访问构建器或用更大的屏幕在设备上构建您的故事。",
      "notConfiguredMobile2": "请将您的设备旋转至横向来使用 %TPL_NAME% 构建器。",
      "notAuthorized": "您无权访问此故事",
      "notAuthorizedBuilder": "您无权使用 %TPL_NAME% 构建器。",
      "noBuilderIE": "低于版本 %VERSION% 的 Internet Explorer 不支持构建器。%UPGRADE%",
      "noViewerIE": "低于版本 %VERSION%. %UPGRADE% 的 Internet Explorer 不支持此故事。",
      "noViewerIE2": "您尝试查看故事所使用的浏览器版本过旧，不受支持。某些要素可能无法正常运行或出现非预期问题。我们建议您将浏览器更新至 Internet Explorer 11 或使用 Chrome 等其他浏览器。",
      "noViewerIE3": "2017 年底，将无法在此浏览器中加载此故事。届时，您必须使用受支持的浏览器查看此故事。",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>请更新您的浏览器</a>。",
      "mapLoadingFail": "发生了一些错误，地图未正确加载。",
      "signOut": "登出",
      "print0": "抱歉，此故事无法打印。",
      "print1": "如需打印此故事，请使用共享对话框中的打印按钮。",
      "print2": "抱歉，通常可通过共享对话框得到故事的可打印版本，但该对话框已经被作者禁用。",
      "attention": "注意!"
    },
    "mobileView": {
      "tapForDetails": "点击查看详细信息",
      "clickForDetails": "了解详细信息",
      "swipeToExplore": "滑动以进行浏览",
      "tapForMap": "点击以返回",
      "clickForMap": "返回"
    },
    "floatLayout": {
      "scroll": "滚动"
    },
    "sideLayout": {
      "scroll": "向下滚动以查看更多信息！"
    },
    "mainStage": {
      "back": "返回",
      "errorDeleted": "此链接为非活动链接(分区已被删除)",
      "errorNotPublished": "此链接为非活动链接(分区未发布)"
    },
    "headerFromCommon": {
      "storymapsText": "故事地图",
      "builderButton": "编辑",
      "facebookTooltip": "共享至 Facebook",
      "twitterTooltip": "共享至 Twitter",
      "bitlyTooltip": "共享或打印",
      "templateTitle": "设置模板标题",
      "templateSubtitle": "设置模板子标题",
      "share": "共享",
      "checking": "正在检查您的故事内容",
      "fix": "修复在您故事中的问题",
      "noerrors": "未检测到问题",
      "tooltipAutoplayDisabled": "这不适用于自动播放模式",
      "notshared": "故事未共享"
    },
    "mapFromCommon": {
      "overview": "鹰眼图",
      "legend": "图例",
      "home": "缩放主页"
    },
    "shareFromCommon": {
      "copy": "复制",
      "copied": "已复制",
      "open": "打开",
      "embed": "嵌入到网页",
      "embedExplain": "使用以下 HTML 代码将日志嵌入到网页。",
      "size": "大小(宽度/高度):",
      "autoplayLabel": "自动播放模式",
      "autoplayExplain1": "自动播放模式将定期持续播放您的故事。该模式是广告亭或公共显示屏的理想选择，但请注意，在其他情景下会使故事难以阅读。小型显示器不支持该功能。",
      "autoplayExplain2": "激活此模式时，可使用控件播放/暂停故事和调整导航速度。",
      "linksupdated": "链接已更新!",
      "print": "打印",
      "printInstruction1": "请待整个故事加载完毕再进行打印",
      "printInstruction1a": "如果此页面加载速度缓慢或某些媒体未显示，请尝试打印较小范围的部分。",
      "printInstruction1b": "为获得最佳效果，您可能需要在浏览器的打印设置中启用背景元素的打印。",
      "printInstruction2": "无法将此页面与他人共享，而是将 ${link} 进行共享",
      "link": "故事的链接",
      "optionsHeader": "选项",
      "printOptPageBreak": "在新页面上开始每个章节",
      "makeTextBlack": "将所有文本设置为黑色",
      "showLinks": "显示链接 URL",
      "madeWith": "此故事由 ${JOURNAL_LINK_TEXT} 完成。",
      "journalLinkText": "Esri 的 Story Map Journal",
      "readItOnline": "请访问 ${link} 阅读 web 上的互动版本。",
      "printMSWarning": "链接仅适用于在线故事",
      "printVideoWarning": "此视频可在此故事地图的在线版本中查看",
      "printRangeHeader": "打印此故事的一部分",
      "sectionLabel": "章节：",
      "apply": "应用",
      "resetRange": "重置为整个故事"
    }
  }
});