define(
	 ({
		builder: {
			layouts: {
				mainStage: "メイン ステージ",
				sideTitle: "サイド パネル",
				sideDescr: "テキスト中心のストーリー用のレイアウトで、写真、ビデオ、マップを組み合わせて的を絞った明快なメッセージを作成することができます。",
				floatTitle: "フローティング パネル",
				floatDescr: "カートグラフィに焦点を当てたレイアウトで、透明で簡易的な形式のテキスト パネルが、ストーリーの説明に役立ちます。"
			},
			common: {
				lblStatus1: "公開済み",
				lblStatus2: "ドラフト",
				lblStatus3: "非表示"
			},
			settingsLayoutOptions: {
				title: "レイアウト オプション",
				cfgLeft: "左",
				cfgRight: "右",
				cfgSmall: "小",
				cfgMedium: "中",
				cfgLarge: "大",
				socialLinksLabel: "各セクションの下部に共有リンクを表示",
				socialLinksDescr: "これを使用して、ユーザに %TPL_NAME% の特定のセクションを参照させたり推奨することができます。たとえば、セクションの共有アイコンを使用すると、ユーザはストーリーの最初ではなく、%TPL_NAME% の特定のセクションに移動します。ユーザは、タイトル セクションのソーシャル メディア リンクを使用して、%TPL_NAME% 全体 (ヘッダー タブ) を推奨し、%TPL_NAME% の冒頭に移動させることができます。"
			},
			settingsLayoutFonts: {
				title: "フォント",
				defaultLbl: "デフォルト",
				sectionTitleLbl: "セクション タイトル",
				sectionContentLbl: "セクション コンテンツ"
			},
			initPopup: {
				title: "ようこそ"
			},
			addEditPopup: {
				disabled: "セクションの最大許容数に達しているため、セクションの追加は無効化されています。",
				titleAdd: "セクションの追加",
				titleAddHome: "ホーム セクションの追加",
				titleEdit: "セクションの編集",
				step: "ステップ",
				stepMainStageExplain: "メイン ステージのコンテンツ",
				stepPanelExplain: "コンテンツ",
				stepMainStageNextTooltip: "セクション タイトルとメイン ステージのコンテンツを入力",
				stepMainStageNextTooltip2: "メイン ステージのコンテンツを選択",
				step2NextTooltip: "セクション タイトルと %LAYOUT-TYPE% のコンテンツを入力",
				stepNextTooltipNext: "次のステップに進みます。",
				stepNextTooltipAdd: "セクションに追加します。",
				firstAddExplain: "この最初のセクションは、ホーム セクションです。これは、ストーリーの「表紙」のようなものです。定義したタイトルは、大きなフォントで表示されます。",
				firstAddLeanMore: "詳細",
				titlePlaceholder: "セクション タイトル..."
			},
			addEditViewText: {
				editorPlaceholder: "テキスト、リンク、小さなグラフィックスをここに追加します。",
				editorActionsTitle: "メイン ステージ アクション",
				editorActionsHelpDescr: "これらのコントロールを使用して、メイン ステージを変更するリンクを作成します。たとえば、ユーザがリンクをクリックしたときに、マップを特定の位置にズームしたり、別の Web マップを表示したり、画像を表示したりします。",
				mainStageDisabled: "エディタが最大化されると、メイン ステージ アクションは無効になります。"
			},
			organizePopup: {
				title: "整理",
				lblHeader: "セクションをドラッグ アンド ドロップして、コンテンツを整理します。",
				lblColTitle: "タイトル",
				lblColPubDate: "公開日",
				lblColStatus: "ステータス",
				checkDisplayReverse: "セクションを逆順に表示",
				btnApplyWarning: "%NB% セクションの削除を確認",
				deleteTooltip: "削除",
				firstSectionExplain: "(ホーム セクションを移動できません)",
				exportMainStage: "メイン ステージのコンテンツ",
				exportPanel: "パネル コンテンツ",
				exportActions: "メイン ステージ アクション"
			},
			exportData: {
				btn: "コンテンツのエクスポート",
				tooltip: "コンテンツをエクスポートすると、コンテンツを表示したり、誤ってコンテンツを削除してしまった場合に備えてコンテンツのバックアップを作成したりできます。ページのコンテンツをワード プロセッサにコピーして貼り付けます。"
			},
			help: {
				lblHelp: "ヘルプ",
				lblAdd: "セクションの追加",
				lblSettings: "設定",
				lblOrga: "コンテンツの整理",
				lblEdit: "編集",
				lblPublish: "共有",
				lblTips: "ヒント",
				lblMore: "詳細",
				lblLink: "Esri ストーリー マップ Web サイトに移動します。",
				content1Div1: "さまざまなスタイルを統合してストーリーを作成することができます。通常、<strong>%LAYOUT_TITLE%</strong> にはテキスト、画像、ビデオが含まれ、マップは<strong>メイン ステージ</strong>に配置されることが多いですが、%TPL_NAME% を使用すると、ユーザはメイン ステージ内にも注目の画像、チャート、ビデオを表示することができます。",
				content1Div2: "セクションを追加すると、ストーリーテリングを詳細にカスタマイズできます。ユーザが %LAYOUT_TITLE% のテキストをスクロールしたときに、メイン ステージ上のマップが画面移動または主要ポイントにズームしたり、新しいマップと画像を自動的に切り替えたりして、メッセージをサポートできます。",
				content2Div1: "この設定ダイアログで %TPL_NAME% の外観を変更できます。レイアウトの変更、他の配色の選択、テキスト フォントの変更などを行います。",
				content2Div2: "また、Esri ロゴを独自のロゴに差し替えて、ブランドを表示することもできます。また、ユーザがロゴをクリックしたときに開く Web サイトを指定して、詳細を表示されるようにすることもできます。",
				content3Div1: "コンテンツは複数のセクションに整理されています。セクションは (小さな章のように考えて) 必要な数だけ作成できます。それらの章の流れは重要です。[整理] の中で、必要に応じてセクションの順序を変更したり削除したりできます。",
				content4Div1: "間違いを見つけた場合やマテリアルを変更したい場合でも簡単に編集できます。コンテンツを変更するには、アプリケーションに表示されている編集アイコンを使用します。%TPL_NAME% の開発では、編集機能を多く使用します。",
				content5Div1: "%TPL_NAME% を保存した時点ではプライベートです。他のユーザと共有するには、[共有] ボタンを使用します。すべてのユーザが %TPL_NAME% にアクセスできるようにパブリックに共有することができます。",
				content5Div2: "使用するアカウントによっては、他のユーザがアクセスできないように組織内のユーザのみと %TPL_NAME% を共有することもできます。",
				content6Div1: "ホーム セクションのタイトルは、ジャーナルのタイトルでもあります。ホーム セクションは、ストーリーの「表紙」のようなものです。ホーム セクションのタイトルは、読者がジャーナルを操作するときにも表示されます。",
				content6Div2: "%LAYOUT_TITLE% は、テキストだけでなくても構いません。写真やビデオを加えてストーリーを補強したり、テキストの長いセクションを分割することを検討してください。"
			},
			landing: {
				lblAdd: "マップ ジャーナル名",
				phAdd: "タイトルの入力...",
				lblOR: "または",
				lblHelp: "ツアーの開始"
			},
			firstAddSplash: {
				thisis: "これは",
				lblMain: "これは %BR% メイン ステージです。"
			}
        }
    })
);
