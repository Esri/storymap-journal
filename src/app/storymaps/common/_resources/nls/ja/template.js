define(
	 ({
		common: {
			common: {
				edit: "編集"
			},
			inlineFieldEdit: {
				editMe: "編集"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% ビルダ",
				buttonSave: "保存",
				buttonShare: "共有",
				buttonSettings: "設定",
				buttonHelp: "ヘルプ",
				noPendingChange: "保留中の変更はありません",
				unSavedChangeSingular: "1 つの保存されていない変更",
				unSavedChangePlural: "複数の保存されていない変更",
				popoverSaveWhenDone: "完了したら必ず保存してください",
				closeWithPendingChange: "アクションを確認しますか？変更内容は失われます。",
				ok: "OK",
				savingApplication: "アプリケーションを保存しています",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				saveError3: "タイトルは必ず入力してください",
				// TODO
				signIn: "アカウントでサイン インして",
				shareStatus1: "アプリケーションが保存されていません",
				shareStatus2: "アプリケーションがパブリックに共有されています",
				shareStatus3: "アプリケーションが組織サイト内で共有されています",
				shareStatus4: "アプリケーションが共有されていません"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "タイトル",
				addPopupTitle: "追加",
				addPopupDescription: "新しいビューをシリーズに追加します。",
				addPopupButton: "追加",
				// Edit
				editPopupTitle: "編集",
				editPopupDescription: "選択したビューの編集",
				editPopupButton: "適用",
				// Add/Edit
				addEditPopupCancelButton: "キャンセル",
				addEditPopupMyContentBtn: "マイ コンテンツから選択",
				addEditPopupConfigureWebMapBtn: " 構成"
			},
			share: {
				firstSaveTitle: "アプリケーションが保存されました",
				firstSaveHeader: "アプリケーションが ArcGIS Online に保存されました。次のよくある質問の答えをお読みください。",
				firstSaveA1: "ArcGIS Online の操作に慣れていない、または作成インタフェースに簡単にアクセスしたい場合は、次のリンクを保存できます: %LINK1%",
				firstSaveA1bis: "アプリケーションは、<a href='%LINK2%' target='_blank'>ArcGIS Online のコンテンツ フォルダ</a>内にもあります。",
				firstSaveQ2: "アプリケーションは共有されていますか？",
				firstSaveA2: "現在、アプリケーションは共有されていません。共有するには、[共有] ボタンを使用します。",
				shareTitle: "アプリケーションの共有",
				sharePrivateHeader: "アプリケーションが共有されていません。共有しますか？",
				sharePrivateBtn1: "パブリックに共有",
				sharePrivateBtn2: "組織サイト内で共有",
				sharePrivateWarning: "<a href='%LINK%' target='_blank'>Web マップ</a>の所有者でないため、%WITH% の共有は無効化されています。",
				sharePrivateWarningWith1: "パブリック",
				sharePrivateWarningWith2: "パブリックおよび組織",
				sharePrivateProgress: "共有の実行中...",
				sharePrivateErr: "共有に失敗しました。もう一度行ってください。",
				sharePrivateOk: "共有の更新に成功しました。読み込んでいます...",
				sharePreviewAsUser: "プレビュー",
				shareHeader1: "アプリケーションには<strong>一般ユーザがアクセスできます</strong>。",
				shareHeader2: "アプリケーションには組織のメンバーがアクセスできます (ログインが必要)。",
				shareLinkHeader: "アプリケーションをユーザと共有",
				shareLinkOpen: "オープン",
				shareQ1Opt1: "アプリケーションをプライベートにする方法",
				shareQ1Opt2: "アプリケーションのプライベート使用とパブリック使用を切り替える方法",
				shareA1: "<a href='%LINK1%' target='_blank'>アプリケーション アイテム ページ</a>で %SHAREIMG% を使用します。Web マップの共有も解除する場合は、<a href='%LINK2%' target='_blank'>Web マップ アイテム ページ</a>を使用します。",
				shareA1bis: "フィーチャ サービスの共有も解除する場合は、<a href='%LINK1%' target='_blank'>フィーチャ サービス アイテム ページ</a>を使用します。",
				shareQ2: "アプリケーションを後で編集する方法",
				shareQ2bis: "作成インタフェースに戻る方法",
				shareA2div1: "次のリンク %LINK1% を保存および再利用するか、<a href='%LINK2%' target='_blank'>アプリケーション アイテム ページ</a>を使用します。",
				shareA2div2: "アプリケーションの所有者として ArcGIS.com にサイン インした場合、アプリケーションに対話型ビルダを開くボタンが含まれます。",				
				shareQ3: "データの保存場所は？",
				shareA3: "アプリケーション構成は、<a href='%LINK1%' target='_blank'>この Web マップ アイテム</a>と<a href='%LINK2%' target='_blank'>この Web アプリケーション アイテム</a>内に保存されています。Flickr、Picasa、Facebook、または YouTube のインポートを使用した場合、画像とビデオはそのままそこに保存され、ArcGIS Online に複製されることはありません。",
				learnMore: "詳細",
				close: "閉じる"
			},
			settings: {
				header: "アプリケーション設定",
				cancel: "キャンセル",
				apply: "適用",
				tabError: "すべてのタブでエラーを確認してください"
			},
			settingsLayout: {
				title: "レイアウト",
				explain: "使用するレイアウト",
				explainInit: "変更は設定ダイアログから実行できます。",
				selected: "選択したレイアウト",
				select: "このレイアウトを選択"
			},
			settingsTheme: {
				title: "主題",
				explain: "アプリケーションの主題を選択したり、独自の色を定義したりします。",
				label: "ヘッダーとサイド パネルの背景色"
			},
			settingsHeader: {
				title: "ヘッダー",
				explain: "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
				logoEsri: "Esri ロゴ",
				logoNone: "ロゴなし",
				logoCustom: "カスタム ロゴ",
				logoCustomPlaceholder: "画像の URL",
				logoCustomTargetPlaceholder: "クリックスルー リンク",
				logoSocialExplain: "ヘッダー右上にあるリンクのカスタマイズ",
				logoSocialText: "テキスト",
				logoSocialLink: "リンク",
				logoSocialDisabled: "この機能は、管理者によって無効にされています"
			},
			mediaSelector: {
				lblMap: "マップ",
				lblPicture: "写真",
				lblVideo: "ビデオ",
				lblExternal: "外部ページ"
			},
			webMapSelector: {
				radioCurrentWebMap: "現在の Web マップ",
				radioWebmapApp: "アプリケーションで使用されるその他の Web マップの 1 つ",
				radioAnotherWebmap: "別の Web マップ",
				btnSelect: "選択",
				lblOr: "または",
				fieldEnterWebmapId: "Web マップ ID の入力",
				btnConfigure: "マップの構成"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "組織",
					onlineLabel: "ArcGIS Online",
					contentLabel: "マイ コンテンツ",
					favoritesLabel: "お気に入り"
				},
				title: "Web マップの選択",
				searchTitle: "検索",
				ok: "OK",
				cancel: "キャンセル",
				placeholder: "検索語句の入力"
			}
		}
	})
);
