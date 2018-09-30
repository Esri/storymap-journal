define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "媒體",
      "lblSelect2": "內容",
      "lblMap": "地圖",
      "lblImage": "影像",
      "lblVideo": "影片",
      "lblExternal": "Web 頁面",
      "lblUpload": "上傳",
      "lblLink": "連結",
      "disabled": "管理員已停用此功能",
      "userLookup": "載入圖片集",
      "notImplemented": "尚未實作。",
      "noData": "未找到公開圖片集",
      "thirdPartyTerms": "使用協力廠商服務時，即表示您同意其服務條款。 "
    },
    "imageSelector": {
      "lblStep1": "選擇服務",
      "lblStep2": "選擇媒體",
      "lblStep3": "設定"
    },
    "imageSelectorHome": {
      "explain": "從社交媒體載入圖像，<br /> 或直接從 URL 進行載入"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "瀏覽圖片",
      "lblDrop": "在這裡放置圖片，或",
      "infoUpload": "圖片將儲存在您的 ArcGIS 帳號中，並可在您的故事中存取。",
      "warningFileTypes": "圖片可為 .jpg、.png、.gif 或 .bmp",
      "warningOneFile": "一次只能上傳一張圖片。",
      "warningFileSize": "圖片必須小於 10 MB。",
      "tooltipRemove": "從您的 ArcGIS 帳號刪除此未使用的圖片 <br>(如果決定稍後使用它，您將需要重新上傳它)。"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "使用者名稱",
      "signInMsg2": "未找到使用者",
      "loadingFailed": "載入失敗"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "電子郵件或 Google ID",
      "signInMsg2": "未找到帳戶",
      "howToFind": "如何尋找 Picasa ID",
      "howToFind2": "複製任何 Picasa 頁面第一個和第二個 '/' 之間的數字"
    },
    "videoSelectorCommon": {
      "check": "勾選",
      "notFound": "未找到影片",
      "found": "已找到影片",
      "select": "選擇此影片"
    },
    "videoSelectorHome": {
      "other": "其他"
    },
    "videoSelectorYoutube": {
      "url": "YouTube 影片連結",
      "pageInputLbl": "使用者名稱",
      "lookupMsgError": "未找到使用者",
      "howToFind": "如何查詢 YouTube 使用者名稱",
      "howToFind2": "使用者名稱顯示在影片下方",
      "found": "已找到",
      "noData": "未找到公開影片",
      "videoNotChecked": "此影片在 YouTube 上未經檢查，但影片的位址看似正常。",
      "checkFailedAPI": "YouTube 檢查已失敗，請檢查 YouTube API 金鑰。"
    },
    "videoSelectorVimeo": {
      "url": "Vimeo 影片連結"
    },
    "videoSelectorOther": {
      "explain1": "此故事地圖無法播放原始影片檔 (例如 avi、mpeg)，但可以播放帶有內建播放器的託管影片 (例如 YouTube 或 Vimeo)。",
      "explain2": "大多數影片託管服務皆提供此功能。尋找選項來嵌入影片，複製提供的代碼，並使用 %WEBPAGE% 內容選項將它新增至您的故事。",
      "explain3": "或者，您可以使用影片播放器 (如 %EXAMPLE%) 的 HTML 頁面來自行託管影片。接著可將該 HTML 頁面的 URL 新增至您的故事作為 %WEBPAGE%。",
      "webpage": "Web 頁面"
    },
    "webpageSelectorHome": {
      "lblUrl": "Web 頁面連結",
      "lblEmbed": "嵌入代碼",
      "lblMustUseHTTPS": "連結到 Web 內容時必須以 HTTPS 開頭",
      "lblOR": "OR",
      "lblError1": "錯誤，請清除其中一個輸入欄位。",
      "lblError2": "嵌入代碼僅可包含一個 %IFRAMETAG%",
      "configure": "設定"
    },
    "mediaConfigure": {
      "lblURL": "圖片連結",
      "lblURLPH": "連結應以 .jpg、.png、.gif 或 .bmp 結尾",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "此圖像可能無效。請指定圖像文件的直接連結(URL 通常以 .jpg 或 .png 結尾)。包含圖像的網頁連結無法使用。",
      "lblURLErrorHTTPS": "此圖片連結無效。URL 必須以 HTTPS 開頭，並以支援的圖片檔的副檔名結尾 (.jpg、.png、.gif、.bmp)。",
      "lblURLCheck": "正在檢查圖像...",
      "lblLabel": "圖片標號",
      "lblLabel1": "說明文字",
      "lblLabel2": "懸停文字",
      "lblLabel3": "無",
      "lblLabelPH": "請輸入文字...",
      "lblMaximize": "在圖像角落位置放置一個最大化按鈕",
      "lblMaximizeHelp": "建議僅用於高品質照片",
      "lblPosition": "位置",
      "lblPosition1": "中心",
      "lblPosition2": "填充",
      "lblPosition3": "適合",
      "lblPosition4": "自動縮放",
      "lblPosition5": "自訂",
      "lblURLHelp": "圖片連結必須以 HTTPS 開頭。<br><br>為了獲得最佳結果，圖片必須小於 400 KB。請使用 80% 品質的壓縮 JPG 圖片及這些建議的圖片寬度：為主舞台或包含最大化按鈕的敘述面板使用 2000 像素，為不含最大化按鈕的敘述面板使用 1000 像素。<br><br>如果連結的圖片繪製緩慢，會將它上傳到您的故事以獲得更好的結果。",
      "tooltipDimension": "可使用 'px' 或 '%' 指定值",
      "tooltipDimension2": "值必須在 'px'中指定",
      "lblPosition2Explain": "（可裁切）",
      "lblPosition3Explain": "（不裁切）",
      "lblPosition3Explain2": "(寬度將始終適合面板)",
      "lblPosition4Explain": "（可變形）",
      "unloadLbl": "讀者定位到其他部分時進行卸載",
      "unloadHelp": "如果網頁中包含音頻或影片介質，請將該選項選中以在讀者定位到其他部分時停止內容播放。取消勾選該選項可使讀者在瀏覽故事的同時持續播放音軌。<br />如果網頁是應用程式，請取消勾選該選項，這樣故事不必在讀者返回此部分時重新載入。",
      "embedProtocolLabel": "透過安全連線 (HTTPS) 載入頁面",
      "embedProtocolWarning1": "若您的故事未載入此網頁，則基於 Web 安全性原因將無法內嵌它。替代方案是在敘述中新增連結，以便在新的瀏覽器頁籤中開啟網頁。",
      "embedProtocolWarning2": "若您的故事未載入此網頁，請取消勾選此選項並再試一次。若仍未載入此網頁，則基於 Web 安全性原因將無法內嵌它。替代方案是在敘述中新增連結，以便在新的瀏覽器頁籤中開啟網頁。",
      "learn": "瞭解詳細資訊",
      "lblAltText": "替代文字",
      "placeholderAltText": "為視障讀者輸入此媒體的說明。",
      "tooltipAltText": "提供此媒體內容的說明，供輔助技術 (如螢幕助讀程式軟體) 使用。描述是選用的，但建議您符合 WCAG 和第 508 節之類的 Web 協助工具指導方針。"
    },
    "editorActionGeocode": {
      "lblTitle": "定位地址或地點",
      "mapMarkerExplain": "使用者在按一下連結時會看到地圖標記"
    },
    "editorActions": {
      "navigate": "導覽至其他部分",
      "remove": "移除動作",
      "preview": "預覽動作"
    },
    "editorActionMedia": {
      "lblTitle": "變更主舞台內容"
    },
    "editorInlineMedia": {
      "lblTitle": "插入圖像、影片或網頁"
    }
  }
});