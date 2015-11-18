define(
	 ({
		builder: {
			layouts: {
				mainStage: "主舞台",
				sideTitle: "側面板",
				sideDescr: "文字密集型故事的版面設定，以焦點明確的訊息結合照片、影片和地圖，將會非常突出。",
				floatTitle: "浮動面板",
				floatDescr: "一種版面設定，以製圖為重點，同時借助格式簡單明瞭的文字面板來講述故事。"
			},
			common: {
				lblStatus1: "已發佈",
				lblStatus2: "草稿",
				lblStatus3: "隱藏"
			},
			settingsLayoutOptions: {
				title: "版面設定選項",
				cfgLeft: "左對齊",
				cfgRight: "右對齊",
				cfgSmall: "小",
				cfgMedium: "中",
				cfgLarge: "大",
				socialLinksLabel: "在每節底部顯示分享連結",
				socialLinksDescr: "這使讀者可以引用並提升 %TPL_NAME% 的特定章節。例如，如果使用章節分享圖示，讀者將會定位到該特定 %TPL_NAME% 章節，而並非定位到故事的開頭。讀者可使用標題章節中的社交媒體連結來提升整個 %TPL_NAME%（標題索引標籤）並定位到 %TPL_NAME% 的開頭。"
			},
			settingsLayoutFonts: {
				title: "字體",
				defaultLbl: "預設",
				sectionTitleLbl: "章節標題",
				sectionContentLbl: "章節內容"
			},
			initPopup: {
				title: "歡迎使用"
			},
			addEditPopup: {
				disabled: "由於允許的部分已達到最大數量，因此停用\“新增部分\”。",
				titleAdd: "新增章節",
				titleAddHome: "新增首頁章節",
				titleEdit: "編輯章節",
				step: "步驟",
				stepMainStageExplain: "主舞台內容",
				stepPanelExplain: "內容",
				stepMainStageNextTooltip: "輸入章節標題並選擇主舞台內容",
				stepMainStageNextTooltip2: "選擇主舞台內容",
				step2NextTooltip: "輸入章節標題和 %LAYOUT-TYPE% 內容",
				stepNextTooltipNext: "要進行下一步",
				stepNextTooltipAdd: "要新增章節",
				firstAddExplain: "第一部分是首頁章節，可將其看做故事\“封面\”。剛剛定義的標題將顯示為大號字體。",
				firstAddLeanMore: "瞭解詳細資訊",
				titlePlaceholder: "章節標題..."
			},
			addEditViewText: {
				editorPlaceholder: "在此新增文字、連結和小圖形。",
				editorActionsTitle: "主舞台操作",
				editorActionsHelpDescr: "使用這些控制項來建立將變更主舞台的連結。例如，當讀者按一下某連結時，您會希望地圖縮放至特定位置，顯示其他 Web 地圖或顯示圖像。",
				mainStageDisabled: "編輯器最大化時將停用主舞台操作"
			},
			organizePopup: {
				title: "組織",
				lblHeader: "拖放章節以組織故事。",
				lblColTitle: "標題",
				lblColPubDate: "發佈日期",
				lblColStatus: "狀態",
				checkDisplayReverse: "以相反順序顯示章節",
				btnApplyWarning: "確認刪除 %NB% 章節",
				deleteTooltip: "刪除",
				firstSectionExplain: "(無法移動首頁章節)",
				exportMainStage: "主舞台內容",
				exportPanel: "面板內容",
				exportActions: "主舞台操作"
			},
			exportData: {
				btn: "匯出內容",
				tooltip: "透過匯出內容您可以查看並建立意外刪除內容的備份。只需將頁面內容複製貼上文書處理器中即可。"
			},
			help: {
				lblHelp: "說明",
				lblAdd: "新增章節",
				lblSettings: "設定",
				lblOrga: "組織內容",
				lblEdit: "編輯",
				lblPublish: "分享",
				lblTips: "提示",
				lblMore: "是否想瞭解更多資訊?",
				lblLink: "存取 Esri Story Maps 網站。",
				content1Div1: "建構故事時，可集成各種風格。<strong>%LAYOUT_TITLE%</strong> 通常在地圖要發佈在<strong>主舞台</strong>時會保留文字、圖像和影片。但 %TPL_NAME% 也可以在主舞台中展示圖像、圖表和影片。",
				content1Div2: "新增章節可以使您真正自訂提供資訊的經驗。在讀者捲動 %LAYOUT_TITLE% 文字時，主舞台上的地圖可平移或縮放至關鍵點或新地圖，圖像也可以自動切換以支援訊息。",
				content2Div1: "可在\“設置\”對話方塊中變更 %TPL_NAME% 的外觀。變更版面設定，選擇其他配色方案和變更文字字體等等。",
				content2Div2: "您還可以使用自己的標誌取代 Esri 標誌，以反映您的品牌。也可以指定當讀者按一下您的標誌時所啟動的網站，以便讀者取得詳細資訊。",
				content3Div1: "您的內容將組織成章節。您可擁有任意數量的章節(可將其視為微型章節)。這些章節流十分重要；可在組織內根據需要重新排序或刪除章節。",
				content4Div1: "發現錯誤或需要變更內容？別擔心。在整個應用程式中查詢編輯圖示，以對內容進行變更。在開發 %TPL_NAME% 時，您可多次使用編輯功能！",
				content5Div1: "儲存 %TPL_NAME% 時，最初狀態為私有。使用“分享”按鈕將其分享給其他人。您可以將 %TPL_NAME% 公開分享，讓所有人都可對其進行存取。",
				content5Div2: "根據您的帳戶，您還可以選擇將 %TPL_NAME% 僅分享給組織內的人員，這樣其他人便無法對其進行存取。",
				content6Div1: "主目錄章節的標題也是您日誌的標題；將主目錄章節做為故事的\“封面\”。讀者瀏覽日誌時仍然可見主目錄章節標題。",
				content6Div2: "您的 %LAYOUT_TITLE% 無需僅包含文字，可考慮納入照片和影片，更生動地展現故事並穿插於長篇文字章節之間!"
			},
			landing: {
				lblAdd: "您的地圖日誌要取什麼名稱?",
				phAdd: "輸入標題...",
				lblOR: "或",
				lblHelp: "進行導覽"
			},
			firstAddSplash: {
				thisis: "這是",
				lblMain: "這是 %BR% 主舞台"
			}
        }
    })
);
