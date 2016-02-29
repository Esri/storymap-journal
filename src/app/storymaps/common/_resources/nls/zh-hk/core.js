define(
	 ({
		commonCore: {
			common: {
				add: "新增",
				edit: "編輯",
				save: "儲存",
				next: "下一步",
				cancel: "取消",
				back: "上一步",
				apply: "套用",
				close: "關閉",
				open: "打開",
				start: "開始",
				loading: "正在載入",
				disabledAdmin: "管理員已停用此功能",
				width: "寬度",
				height: "高度",
				create: "建立(C)",
				yes: "是",
				no: "否",
				mystories: "我的經驗"
			},
			inlineFieldEdit: {
				editMe: "編輯!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% 建構器",
				buttonSaving: "儲存",
				buttonSaved: "已儲存",
				buttonShare: "分享",
				buttonSettings: "設定",
				buttonHelp: "說明",
				buttonPreview: "檢視故事",
				tooltipFirstSave: "儲存後，此功能才可用。",
				tooltipNotShared: "分享後，此功能才可用。",
				tooltipNotShared2: "您的故事未分享，只有您可以存取。",
				noPendingChange: "無待決的變更",
				unSavedChangePlural: "待決變更",
				closeWithPendingChange: "是否確定要確認此操作？您的變更將遺失。",
				saveError: "儲存失敗，請重試",
				status1: "故事已分享但發生問題",
				status2: "故事未分享但發生問題",
				status3: "故事已公開",
				status4: "故事已在您的組織內部分享",
				status5: "故事為私有",
				status6: "故事尚未儲存",
				checking: "正在檢查",
				fix: "修復"
			},
			saveError: {
				title: "儲存故事時出錯",
				err1Div1: "無法儲存故事，因為您具有相同名稱的其他項目。",
				err1Div2: "請修改故事的標題，然後將其儲存。",
				btnOk: "編輯故事標題"
			},
			saveErrorSocial: {
				title: "社交媒體分享更新",
				panel1: "您在社交媒體上的故事外觀已優化，但您的 ArcGIS Web 應用程式項目標題不同於您的故事標題。",
				panel1tooltip: "藉由定義標題、摘要和縮圖圖片，您的故事外觀類似於：",
				panel2:	"您要在社交媒體上使用哪個標題:",
				panel2q1: "故事標題（建議）",
				panel2q1tooltip: "藉由選擇此選項，將修改您的項目標題來符合您的故事標題，並在將同步的建立器中進一步變更。",
				panel2q2: "項目標題",
				panel3: "要進一步優化您在社交媒體上的故事外觀，請使用 ${MYSTORIES} 以新增摘要和縮圖圖片。",
				panel4: "請勿再針對此故事發出警告"
			},
			share: {
				shareTitle: "分享您的故事",
				preview: "預覽",
				viewlive: "檢視故事",
				btnPrivate: "私有",
				btnPrivateTooltip: "只有您能看到故事",
				btnOrg: "組織",
				btnOrgTooltip: "只有您的組織成員能看到故事",
				btnPublic: "公共",
				btnPublicTooltip: "每個人都能看到故事",
				loadingMessage: "正在檢查您故事中的問題",
				viewToggle1: "顯示故事內容",
				viewToggle2: "關閉故事內容",
				socialize: "社會化",
				statusPrivate: "您的故事為私有，只能您會看到。",
				statusError: "您的故事內容存在會嚴重影響您讀者的問題。您可以識別並修復下列問題。",
				statusNoErrPrivate: "就緒後分享您的故事!",
				mystoriesinvite: "管理您的所有故事",
				notavailable1: "很抱歉，不支援從構建器分享您的故事，因為此應用程式不是在 %PRODUCT% 中託管。",
				notavailable2: "很抱歉，此版本的 Portal for ArcGIS (需要 10.4 或更新版本) 不支援從構建器分享您的故事。",
				notavailable3: "您可以從 %LINK% 分享此故事。",
				notavailable4: "我的經驗",
				notavailable5: "其項目頁面",
				notavailable6: "很抱歉，開發模式不完全支援此圖徵。依據您的部署情況，可能在部署時支援此圖徵。",
				notavailable7: "請務必造訪 %MYCONTENT%，確認另外分享您故事中使用的地圖和圖層。",
				notavailable8: "我的內容",
				mystoriesinvite2: "要優化您在社交網路上的故事外觀，請使用 ${MYSTORIES} 以新增摘要和縮圖圖片。"
			},
			settings: {
				header: "設定",
				tabError: "請檢查所有索引標籤中的錯誤"
			},
			settingsLayout: {
				title: "版面配置",
				explain: "想要使用哪種版面設定？",
				explainInit: "可隨時在設定對話方塊中變更版面設定。",
				viewExample: "查看即時範例"
			},
			settingsTheme: {
				title: "主題"
			},
			settingsHeader: {
				title: "頁眉",
				logoEsri: "Esri 標誌",
				logoNone: "無標誌",
				logoCustom: "自訂標誌",
				logoCustomPlaceholder: "URL（最大 250x50 像素）",
				logoCustomTargetPlaceholder: "點選連結",
				logoSocialExplain: "自訂標題連結。",
				logoSocialText: "文字",
				logoSocialLink: "連結",
				lblSmallHeader: "使用壓縮標題(無副標題)"
			},
			header: {
				title: "編輯 %TPL_NAME% 的標題",
				subtitle: "編輯 %TPL_NAME% 的副標題"
			}
		}
	})
);
