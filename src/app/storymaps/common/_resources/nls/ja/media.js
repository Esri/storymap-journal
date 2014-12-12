define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "メディア",
				lblSelect2: "コンテンツ",
				lblMap: "マップ",
				lblImage: "画像",
				lblVideo: "ビデオ",
				lblExternal: "Web ページ",
				disabled: "この機能は、管理者によって無効にされています",
				url: "画像の Web アドレスを手動で入力",
				userLookup: "アルバムを読み込む",
				notImplemented: "まだ実装されていません。",
				noData: "パブリックなアルバムが見つかりませんでした"
			},
			imageSelector: {
				lblStep1: "サービスの選択",
				lblStep2: "メディアの選択",
				lblStep3: "構成"
			},
			imageSelectorHome: {
				explain: "画像をソーシャル メディアから読み込むか、<br />URL から直接読み込みます"
			},
			imageSelectorFlickr: {
				userInputLbl: "ユーザ名",
				signInMsg2: "ユーザが見つかりません",
				loadingFailed: "読み込みに失敗しました"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook ユーザ",
				rightHeader: "Facebook ページ",
				pageExplain: "Facebook ページは、<b>esrigis</b> などの、公開されたブランド/製品または著名人です。ページ URL 内の最初の「/」以降から、ページ名を取得できます。",
				pageInputLbl: "ページ名",
				lookupMsgError: "ページが見つかりません"
			},
			imageSelectorPicasa: {
				userInputLbl: "電子メールまたは Picasa/Google+ ID",
				signInMsg2: "アカウントが見つかりません",
				howToFind: "Picasa または Google+ アカウントの ID の検索方法",
				howToFind2: "任意の Picasa または Google+ のページの 1 番目と 2 番目の「/」の間の数字をコピーします。"
			},
			videoSelectorCommon: {
				check: "チェック",
				notFound: "ビデオが見つかりません",
				found: "ビデオが見つかりました",
				select: "このビデオを選択"
			},
			videoSelectorHome: {
				other: "その他"
			},
			videoSelectorYoutube: {
				url: "YouTube ビデオの URL",
				pageInputLbl: "ユーザ名",
				lookupMsgError: "ユーザが見つかりません",
				howToFind: "YouTube のユーザ名の検索方法",
				howToFind2: "ビデオの下にユーザ名が表示されます",
				found: "見つかりました",
				noData: "パブリックなビデオが見つかりませんでした"
			},
			videoSelectorVimeo: {
				url: "Vimeo ビデオの URL"
			},
			videoSelectorOther: {
				explain1: "アプリケーションは、単体のビデオファイル (avi、mpeg など) は再生できませんが、プレイヤ (YouTube または Vimeo など) が組み込まれているホストされたビデオ ファイルは再生できます。",
				explain2: "ほとんどのオンライン ビデオ ホスティング サービスは、その機能を提供しています。ビデオを埋め込み、指定のコードをコピーし、%WEBPAGE% を使用するオプションを見つける必要があります。",
				explain3: "または、ビデオを自分でホストする場合、%EXAMPLE% のようなビデオ プレイヤを使用する HTML ページを作成して、そのページをホストしたり、%WEBPAGE% を使用したりすることもできます。",
				webpage: "Web ページ フィーチャ"
			},
			webpageSelectorHome: {
				lblUrl: "Web ページ URL",
				lblEmbed: "コードの埋め込み",
				lblOR: "または",
				lblError1: "エラーです。2 つの入力フィールドの 1 つを削除してください。",
				lblError2: "コードの埋め込みには 1 つの %IFRAMETAG% だけを含めることができます",
				configure: "構成"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "画像の URL は、http:// から始まり、*.jpg または *.png で終わる必要があります。",
				lblURLError: "この画像は有効ではありません。画像ファイルへの直接のリンクを指定してください (URL の末尾は通常 *.jpg または *.png となります)。画像を含む Web ページへのリンクは機能しません。",
				lblURLCheck: "画像をチェックしています...",
				lblLabel: "画像のキャプション",
				lblLabel1: "キャプション",
				lblLabel2: "ホバー テキスト",
				lblLabel3: "なし",
				lblLabelPH: "テキストの入力...",
				lblMaximize: "画像の隅に最大化ボタンを含めます。",
				lblMaximizeHelp: "高品質の写真のみに推奨します",
				lblPosition: "位置",
				lblPosition1: "中央",
				lblPosition2: "塗りつぶし",
				lblPosition3: "調整",
				lblPosition4: "ストレッチ",
				lblPosition5: "カスタム",
				tooltipDimension: "値は「px」または「%」で指定できます",
				tooltipDimension2: "値は「px」で指定する必要があります",
				lblPosition2Explain: "(トリミングの可能性あり)",
				lblPosition3Explain: "(トリミングなし)",
				lblPosition3Explain2: "(幅は常にパネルに合わせて調整されます)",
				lblPosition4Explain: "(歪みの可能性あり)",
				unloadLbl: "ユーザが移動したときにアンロード",
				unloadHelp: "Web ページに音声やビデオ メディアが含まれている場合、このオプションをオンにすると、ユーザが移動したときにコンテンツの再生が停止されます。たとえば、ユーザが次のストーリーに進んでもサウンド トラックの再生を維持したいときはオフにします。<br />Web ページがアプリケーションである場合、ユーザが戻ってもアプリケーションが再読み込みされないようにするには、このオプションをオフにします。"
			},
			editorActionGeocode: {
				lblTitle: "住所または位置の検索",
				mapMarkerExplain: "リンクをクリックすると、マップ マーカーが表示されます"
			},
			editorActionMedia: {
				lblTitle: "メイン ステージのコンテンツを変更"
			},
			editorInlineMedia: {
				lblTitle: "画像、ビデオ、または Web ページの挿入"
			}
		}
	})
);
