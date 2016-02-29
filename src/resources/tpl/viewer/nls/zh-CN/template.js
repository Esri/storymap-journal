define(
	 ({
		viewer: {
			common: {
				close: "关闭"
			},
			loading: {
				step1: "正在加载故事",
				step2: "加载数据",
				step3: "正在初始化",
				loadBuilder: "切换到构建器",
				long: "Map Journal 正在初始化",
				long2: "谢谢等候",
				failButton: "重新加载故事"
			},
			signin: {
				title: "需要进行身份验证",
				explainViewer: "请登录在 %PORTAL_LINK% 上的账户，以便访问此故事。",
				explainBuilder: "请登录在 %PORTAL_LINK% 上的账户，以便配置此故事。"
			},
			errors: {
				boxTitle: "发生错误",
				invalidConfig: "配置无效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 制图应用程序标识符。",
				invalidConfigNoAppDev: "未在 URL 参数(?appid=)中指定 Web 制图应用程序标识符。在开发模式下，将忽略 index.html 中的 appid 配置。",
				unspecifiedConfigOwner: "尚未配置授权的所有者。",
				invalidConfigOwner: "未授权故事所有者。",
				createMap: "无法创建地图",
				invalidApp: "%TPL_NAME% 不存在或不可访问。",
				appLoadingFail: "发生了一些错误， %TPL_NAME% 未正确加载。",
				notConfiguredDesktop: "尚未配置此故事。",
				notConfiguredMobile: "此显示器大小不支持 %TPL_NAME% 构建器。如果可能，请调整您的浏览器尺寸以访问构建器或用更大的屏幕在设备上构建您的故事。",
				notConfiguredMobile2: "请将您的设备旋转至横向来使用 %TPL_NAME% 构建器。",
				notAuthorized: "您无权访问此故事",
				notAuthorizedBuilder: "您无权使用 %TPL_NAME% 构建器。",
				noBuilderIE: "低于版本 %VERSION% 的 Internet Explorer 不支持构建器。%UPGRADE%",
				noViewerIE: "低于版本 %VERSION%. %UPGRADE% 的 Internet Explorer 不支持此故事。",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>请更新您的浏览器</a>。",
				mapLoadingFail: "发生了一些错误，地图未正确加载。",
				signOut: "登出"
			},
			mobileView: {
				tapForDetails: "点击查看详细信息",
				clickForDetails: "了解详细信息",
				swipeToExplore: "滑动以进行浏览",
				tapForMap: "点击以返回地图",
				clickForMap: "返回到地图"
			},
			floatLayout: {
				scroll: "滚动"
			},
			sideLayout: {
				scroll: "向下滚动以查看更多信息！"
			},
			mainStage: {
				back: "返回"
			},
			headerFromCommon: {
				storymapsText: "故事地图",
				builderButton: "编辑",
				facebookTooltip: "共享至 Facebook",
				twitterTooltip: "共享至 Twitter",
				bitlyTooltip: "获取短链接",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题",
				share: "共享",
				checking: "正在检查您的故事内容",
				fix: "修复在您故事中的问题",
				noerrors: "未检测到问题",
				tooltipAutoplayDisabled: "这不适用于自动播放模式",
				notshared: "故事未共享"
			},
			overviewFromCommon: {
				title: "总览图"
			},
			legendFromCommon: {
				title: "图例"
			},
			shareFromCommon: {
				copy: "复制",
				copied: "已复制",
				open: "打开",
				embed: "嵌入到网页",
				embedExplain: "使用以下 HTML 代码将日志嵌入到网页。",
				size: "大小(宽度/高度):",
				autoplayLabel: "自动播放模式",
				autoplayExplain1: "自动播放模式将定期持续播放您的故事。该模式是广告亭或公共显示屏的理想选择，但请注意，在其他情景下会使故事难以阅读。小型显示器不支持该功能。",
				autoplayExplain2: "激活此模式时，可使用控件播放/暂停故事和调整导航速度。",
				linksupdated: "链接已更新!"
			}
        }
    })
);