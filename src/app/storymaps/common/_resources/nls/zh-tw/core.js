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
				height: "高度"
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
				buttonPreview: "即時檢視",
				tooltipFirstSave: "儲存後，此功能才可用。",
				tooltipNotShared: "分享後，此功能才可用。",
				noPendingChange: "無待決的變更",
				unSavedChangePlural: "待決變更",
				closeWithPendingChange: "是否確定要確認此操作？您的變更將遺失。",
				saveError: "儲存失敗，請重試",
				shareStatus1: "應用程式尚未儲存",
				shareStatus2: "應用程式已公開分享",
				shareStatus3: "應用程式已在組織中分享",
				shareStatus4: "應用程式未分享"
			},
			saveError: {
				title: "儲存應用程式時出錯",
				err1Div1: "無法儲存該應用程式，因為您具有相同名稱的其他項目(請參閱您的<a class='linkagolroot' target='_blank'>內容文件夾</a>)。",
				err1Div2: "請修改應用程式的標題，然後將其儲存。",
				btnOk: "編輯應用程式標題"
			},
			share: {
				firstSaveTitle: "應用程式已成功儲存",
				firstSaveHeader: "應用程式現已儲存在 %PORTAL% 中，但尚未進行分享。",
				firstSavePreview: "預覽",
				firstSaveShare: "分享",
				firstSaveA1: "如果不熟悉 %PORTAL% 或需要使用捷徑存取建構器介面，則可以儲存以下連結：%LINK1%",
				firstSaveA1bis: "也可在 <a href='%LINK2%' target='_blank'>%PORTAL% 內容文件夾</a>中找到應用程式。",
				shareTitle: "分享應用程式",
				sharePrivateHeader: "應用程式尚未分享，是否要進行分享？",
				sharePrivateBtn1: "公開分享",
				sharePrivateBtn2: "與我的組織分享",
				sharePrivateWarning: "已禁止分享 %WITH%，因為您不是 <a href='%LINK%' target='_blank'>webmap</a> 的擁有者。",
				sharePrivateWarningWith1: "公開",
				sharePrivateWarningWith2: "公開並在組織內分享",
				sharePrivateProgress: "正在進行分享...",
				sharePrivateErr: "分享失敗，請重試或",
				sharePrivateOk: "分享更新成功，正在載入...",
				shareHeader1: "應用程式<strong>可公開存取</strong>。",
				shareHeader2: "組織成員（需要登錄）可存取應用程式。",
				shareLinkCopy: "複製",
				shareLinkCopied: "已複製",
				shareQ0: "如何在網頁中嵌入應用程式?",
				shareQ1Opt1: "如何將應用程式私用?",
				shareQ1Opt2: "如何將應用程式私用或公開分享?",
				shareA1: "在<a href='%LINK1%' target='_blank'>應用程式項目頁面</a>上使用 %SHAREIMG%。",
				shareQ2bis: "如何返回建構器介面？",
				shareA2div1: "儲存並重新使用以下連結 %LINK1%，或使用<a href='%LINK2%' target='_blank'>應用程式項目頁面</a>。",
				shareA2div2: "做為應用程式擁有者，登錄到 %PORTAL% 後，應用程式將包括用於打開建構器的按鈕：",				
				shareQ3: "資料儲存在哪兒?",
				shareA3: "%TPL_NAME% 資料和設定均儲存在<a href='%LINK2%' target='_blank'>此 web 應用程式項目</a>中。如果已使用 Flickr、Picasa、Facebook 或 YouTube 進行匯入，則圖像和影片不會複製到 %PORTAL% 中。"
			},
			settings: {
				header: "設定",
				tabError: "請檢查所有索引標籤中的錯誤"
			},
			settingsLayout: {
				title: "版面設定",
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
