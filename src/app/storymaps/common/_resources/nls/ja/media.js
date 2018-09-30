define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "メディア",
      "lblSelect2": "コンテンツ",
      "lblMap": "マップ",
      "lblImage": "画像",
      "lblVideo": "ビデオ",
      "lblExternal": "Web ページ",
      "lblUpload": "アップロード",
      "lblLink": "リンク",
      "disabled": "この機能は、管理者によって無効にされています",
      "userLookup": "アルバムを読み込む",
      "notImplemented": "まだ実装されていません。",
      "noData": "パブリックなアルバムが見つかりませんでした",
      "thirdPartyTerms": "サードパーティのサービスを使用することによって、そのサービスの利用条件に同意します。 "
    },
    "imageSelector": {
      "lblStep1": "サービスの選択",
      "lblStep2": "メディアの選択",
      "lblStep3": "構成"
    },
    "imageSelectorHome": {
      "explain": "画像をソーシャル メディアから読み込むか、<br />URL から直接読み込みます"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "画像の参照",
      "lblDrop": "ここで画像を削除する",
      "infoUpload": "画像は、ArcGIS アカウントで格納され、ストーリー内でのみアクセスできます。",
      "warningFileTypes": "画像には、*.jpg、*.png、*.gif、*.bmp のいずれかを使用できます。",
      "warningOneFile": "一度にアップロードできる画像は 1 つだけです。",
      "warningFileSize": "画像の大きさは 10 MB 未満でなければなりません。",
      "tooltipRemove": "この未使用の画像を ArcGIS アカウントから削除します。<br>(この画像を後で使用する場合は、再びアップロードする必要があります。)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "ユーザ名",
      "signInMsg2": "ユーザが見つかりません",
      "loadingFailed": "読み込みに失敗しました"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "電子メールまたは Google ID",
      "signInMsg2": "アカウントが見つかりません",
      "howToFind": "Picasa ID を見つける方法",
      "howToFind2": "任意の Picasa のページの 1 番目と 2 番目の「/」の間の数字をコピーします。"
    },
    "videoSelectorCommon": {
      "check": "チェック",
      "notFound": "ビデオが見つかりません",
      "found": "ビデオが見つかりました",
      "select": "このビデオを選択"
    },
    "videoSelectorHome": {
      "other": "その他"
    },
    "videoSelectorYoutube": {
      "url": "YouTube ビデオ リンク",
      "pageInputLbl": "ユーザ名",
      "lookupMsgError": "ユーザが見つかりません",
      "howToFind": "YouTube のユーザ名の検索方法",
      "howToFind2": "ビデオの下にユーザ名が表示されます",
      "found": "見つかりました",
      "noData": "パブリックなビデオが見つかりませんでした",
      "videoNotChecked": "このビデオは YouTube でチェックされていませんが、アドレスに問題はないようです。",
      "checkFailedAPI": "YouTube のチェックが失敗しました。YouTube の API キーを確認してください。"
    },
    "videoSelectorVimeo": {
      "url": "Vimeo ビデオ リンク"
    },
    "videoSelectorOther": {
      "explain1": "このストーリー マップは、単体のビデオファイル (avi、mpeg など) は再生できませんが、プレイヤー (YouTube または Vimeo など) が組み込まれているホストされたビデオは再生できます。",
      "explain2": "ほとんどのビデオ ホスティング サービスが、この機能を提供しています。ビデオを埋め込むオプションを見つけ、提供されたコードをコピーし、それを %WEBPAGE% コンテンツ オプションを使用してストーリーに追加します。",
      "explain3": "あるいは、ビデオ プレイヤー (%EXAMPLE% など) を使用する HTML ページとともにビデオを自分でホストすることもできます。その後、その HTML ページの URL を %WEBPAGE% としてストーリーに追加します。",
      "webpage": "Web ページ"
    },
    "webpageSelectorHome": {
      "lblUrl": "Web ページ リンク",
      "lblEmbed": "コードの埋め込み",
      "lblMustUseHTTPS": "Web コンテンツへのリンクは、HTTPS で始まる必要があります",
      "lblOR": "または",
      "lblError1": "エラーです。2 つの入力フィールドの 1 つを削除してください。",
      "lblError2": "コードの埋め込みには 1 つの %IFRAMETAG% だけを含めることができます",
      "configure": "構成"
    },
    "mediaConfigure": {
      "lblURL": "画像リンク",
      "lblURLPH": "リンクの末尾は、*.jpg、*.png、*.gif、*.bmp のいずれかである必要があります。",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "この画像は有効ではありません。画像ファイルへの直接のリンクを指定してください (URL の末尾は通常 *.jpg または *.png となります)。画像を含む Web ページへのリンクは機能しません。",
      "lblURLErrorHTTPS": "この画像リンクは有効ではありません。URL の先頭は HTTPS で始まり、末尾はサポートされている画像ファイルの拡張子 (*.jpg、*.png、*.gif、*.bmp) で終わる必要があります。",
      "lblURLCheck": "画像をチェックしています...",
      "lblLabel": "画像のキャプション",
      "lblLabel1": "キャプション",
      "lblLabel2": "ホバー テキスト",
      "lblLabel3": "なし",
      "lblLabelPH": "テキストの入力...",
      "lblMaximize": "画像の隅に最大化ボタンを含めます。",
      "lblMaximizeHelp": "高品質の写真のみに推奨します",
      "lblPosition": "位置",
      "lblPosition1": "中央",
      "lblPosition2": "塗りつぶし",
      "lblPosition3": "調整",
      "lblPosition4": "ストレッチ",
      "lblPosition5": "カスタム",
      "lblURLHelp": "画像リンクは HTTPS で始まる必要があります。<br><br>最善の結果を得るために、画像は 400 KB 未満にすることを推奨します。80% の品質で圧縮された JPG 画像を使用します。推奨される画像の幅は、メイン ステージまたは最大化ボタン付きの注釈パネルの場合は 2000 ピクセル、最大化ボタンのない注釈パネルの場合は 1000 ピクセルです。<br><br>リンク付き画像の描画が遅い場合、画像をストーリーにアップロードすると早くなります。",
      "tooltipDimension": "値は「px」または「%」で指定できます",
      "tooltipDimension2": "値は「px」で指定する必要があります",
      "lblPosition2Explain": "(トリミングの可能性あり)",
      "lblPosition3Explain": "(トリミングなし)",
      "lblPosition3Explain2": "(幅は常にパネルに合わせて調整されます)",
      "lblPosition4Explain": "(歪みの可能性あり)",
      "unloadLbl": "ユーザが移動したときにアンロード",
      "unloadHelp": "Web ページに音声やビデオ メディアが含まれている場合、このオプションをオンにすると、ユーザーが移動したときにコンテンツの再生が停止されます。たとえば、ユーザーが次のストーリーに進んでもサウンド トラックの再生を維持したいときはオフにします。<br />Web ページがアプリケーションである場合、ユーザーが戻ってもストーリーが再読み込みされないようにするには、このオプションをオフにします。",
      "embedProtocolLabel": "セキュリティで保護された接続 (HTTPS) を介してページを読み込みます",
      "embedProtocolWarning1": "このページがストーリーに読み込まれない場合、Web セキュリティ上の理由からこのページを埋め込むことはできません。代替操作として、注釈のリンクを追加して、新しいブラウザー タブでそのページを開きます。",
      "embedProtocolWarning2": "このページがストーリーに読み込まれない場合、このオプションをオフにしてもう一度試行してください。それでもまだページが読み込まれない場合は、Web セキュリティ上の理由からこのページを埋め込むことはできません。代替操作として、注釈のリンクを追加して、新しいブラウザー タブでそのページを開きます。",
      "learn": "詳細",
      "lblAltText": "代替テキスト",
      "placeholderAltText": "視覚障害者向けに、このメディアの説明を入力します...",
      "tooltipAltText": "このメディア コンテンツの説明を入力します。これは、スクリーン リーダー ソフトウェアなどの補助テクノロジで使用されます。説明はオプションですが、WCAG や Section 508 などの Web アクセシビリティ ガイドラインを満たすために推奨されます。"
    },
    "editorActionGeocode": {
      "lblTitle": "住所または位置の検索",
      "mapMarkerExplain": "リンクをクリックすると、マップ マーカーが表示されます"
    },
    "editorActions": {
      "navigate": "別のセクションに移動",
      "remove": "アクションの削除",
      "preview": "アクションのプレビュー"
    },
    "editorActionMedia": {
      "lblTitle": "メイン ステージのコンテンツを変更"
    },
    "editorInlineMedia": {
      "lblTitle": "画像、ビデオ、または Web ページの挿入"
    }
  }
});