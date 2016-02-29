define(
	 ({
		viewer: {
			common: {
				close: "關閉"
			},
			loading: {
				step1: "正在載入故事",
				step2: "載入資料",
				step3: "正在初始化",
				loadBuilder: "切換到建構器",
				long: "Map Journal 正在初始化",
				long2: "謝謝等候",
				failButton: "重新載入故事"
			},
			signin: {
				title: "需要進行身份驗證",
				explainViewer: "請使用帳戶登入 %PORTAL_LINK% 以存取故事。",
				explainBuilder: "請使用帳戶登入 %PORTAL_LINK% 以設定故事。"
			},
			errors: {
				boxTitle: "發生錯誤",
				invalidConfig: "設定無效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 製圖應用程式識別碼。",
				invalidConfigNoAppDev: "未在 URL 參數 (?appid=) 中指定 Web 製圖應用程式識別碼。在開發模式中，會忽略 index.html 中的 appid 配置。",
				unspecifiedConfigOwner: "尚未設定授權的擁有者。",
				invalidConfigOwner: "未授權故事擁有者。",
				createMap: "無法建立地圖",
				invalidApp: "%TPL_NAME% 不存在或不可存取。",
				appLoadingFail: "發生了一些錯誤， %TPL_NAME% 未正確載入。",
				notConfiguredDesktop: "故事尚未設定。",
				notConfiguredMobile: "%TPL_NAME% 建構器不支援此顯示大小。如果可行，請重新調整瀏覽器大小來存取建立器，或請在裝置上使用較大的畫面建立您的故事。",
				notConfiguredMobile2: "請將裝置旋轉為橫向以使用 %TPL_NAME% 建立器。",
				notAuthorized: "您未取得存取該故事的授權",
				notAuthorizedBuilder: "您未取得使用 %TPL_NAME% 建立器的授權。",
				noBuilderIE: "低於版本 %VERSION% 的 Internet Explorer 不支援建構器。%UPGRADE%",
				noViewerIE: "低於版本 %VERSION% 的 Internet Explorer 不支援該故事。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>請更新您的瀏覽器</a>。",
				mapLoadingFail: "發生了一些錯誤，地圖未正確載入。",
				signOut: "登出"
			},
			mobileView: {
				tapForDetails: "點選查看詳細資訊",
				clickForDetails: "瞭解詳細資訊",
				swipeToExplore: "滑動以進行瀏覽",
				tapForMap: "點選以返回地圖",
				clickForMap: "返回到地圖"
			},
			floatLayout: {
				scroll: "捲動"
			},
			sideLayout: {
				scroll: "向下捲動以查看更多資訊！"
			},
			mainStage: {
				back: "上一步"
			},
			headerFromCommon: {
				storymapsText: "故事地圖",
				builderButton: "編輯",
				facebookTooltip: "在 Facebook 上分享",
				twitterTooltip: "在 Twitter 上分享",
				bitlyTooltip: "取得短連結",
				templateTitle: "設置範本標題",
				templateSubtitle: "設置範本子標題",
				share: "分享",
				checking: "正在檢查您的故事內容",
				fix: "修復您故事中的問題",
				noerrors: "偵測不到問題",
				tooltipAutoplayDisabled: "這不適用於自動播放模式",
				notshared: "未分享故事"
			},
			overviewFromCommon: {
				title: "總覽圖"
			},
			legendFromCommon: {
				title: "圖例"
			},
			shareFromCommon: {
				copy: "複製",
				copied: "已複製",
				open: "打開",
				embed: "嵌入到網頁",
				embedExplain: "使用以下 HTML 代碼將日誌嵌入到網頁。",
				size: "大小(寬度/高度):",
				autoplayLabel: "自動播放模式",
				autoplayExplain1: "自動播放模式將以一定間隔向前播放您的故事。這很適用於書報攤或公共顯示器，但請注意，在其他情況下可能會使得故事更難閱讀。此圖徵不支援小畫面。",
				autoplayExplain2: "啟用此模式時，可使用控制項來播放/暫停故事和調整瀏覽速度。",
				linksupdated: "已更新連結!"
			}
        }
    })
);