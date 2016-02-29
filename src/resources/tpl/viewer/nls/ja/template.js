define(
	 ({
		viewer: {
			common: {
				close: "閉じる"
			},
			loading: {
				step1: "ストーリーの読み込み",
				step2: "データを読み込んでいます",
				step3: "初期化しています",
				loadBuilder: "ビルダに切り替えています",
				long: "マップ ジャーナルを初期化しています",
				long2: "お待ちください",
				failButton: "ストーリーの再読み込み"
			},
			signin: {
				title: "認証が必要です",
				explainViewer: "ストーリーにアクセスするには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。",
				explainBuilder: "ストーリーを構成するには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				invalidConfig: "無効な構成",
				invalidConfigNoApp: "Web マッピング アプリケーションの識別子が index.html で指定されていません。",
				invalidConfigNoAppDev: "Web マッピング アプリケーション ID が URL パラメーター (?appid=) で指定されていません。開発モードでは、index.html の appid 構成は無視されます。",
				unspecifiedConfigOwner: "権限のある所有者が構成されていません。",
				invalidConfigOwner: "ストーリーの所有者に権限がありません。",
				createMap: "マップを作成できません",
				invalidApp: "%TPL_NAME% が存在しないか、アクセスできません。",
				appLoadingFail: "問題が発生しました。%TPL_NAME% を正しく読み込みませんでした。",
				notConfiguredDesktop: "このストーリーは、まだ構成されていません。",
				notConfiguredMobile: "この表示サイズでは、%TPL_NAME% ビルダーはサポートされません。可能な場合、ブラウザーのサイズを変更してビルダーにアクセスするか、さらに大きい画面を持つデバイス上でストーリーを構築してください。",
				notConfiguredMobile2: "使用しているデバイスを横方向に回転して %TPL_NAME% ビルダーを使用してください。",
				notAuthorized: "このストーリーにアクセスする権限が与えられていません。",
				notAuthorizedBuilder: "%TPL_NAME% ビルダーを使用する権限がありません。",
				noBuilderIE: "ビルダは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%アップグレード%",
				noViewerIE: "このストーリーは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>ブラウザを更新してください</a>。",
				mapLoadingFail: "問題が発生しました。マップを正しく読み込みませんでした。",
				signOut: "サイン アウト"
			},
			mobileView: {
				tapForDetails: "タップして詳細を表示",
				clickForDetails: "詳細",
				swipeToExplore: "スワイプして探索",
				tapForMap: "タップしてマップに戻る",
				clickForMap: "マップに戻る"
			},
			floatLayout: {
				scroll: "スクロール"
			},
			sideLayout: {
				scroll: "下にスクロールして詳細を表示"
			},
			mainStage: {
				back: "戻る"
			},
			headerFromCommon: {
				storymapsText: "ストーリー マップ",
				builderButton: "編集",
				facebookTooltip: "Facebook で共有",
				twitterTooltip: "Twitter で共有",
				bitlyTooltip: "ショート リンクを取得",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定",
				share: "共有",
				checking: "ストーリーのコンテンツをチェックしています",
				fix: "ストーリーの問題を修正する",
				noerrors: "問題は見つかりませんでした",
				tooltipAutoplayDisabled: "これは、自動再生モードでは使用できません",
				notshared: "ストーリーが共有されていません"
			},
			overviewFromCommon: {
				title: "概観図"
			},
			legendFromCommon: {
				title: "凡例"
			},
			shareFromCommon: {
				copy: "コピー",
				copied: "コピー",
				open: "開く",
				embed: "Web ページに埋め込む",
				embedExplain: "ジャーナルを Web ページに埋め込むには、次の HTML コードを使用します。",
				size: "サイズ (幅/高さ):",
				autoplayLabel: "自動再生モード",
				autoplayExplain1: "自動再生モードでは、ストーリーが一定の間隔で進みます。このモードは、売店や公共の表示モニターでは理想的ですが、その他の状況では、ストーリーを読むのを難しくする場合があることに注意してください。この機能は、小さいディスプレイではサポートされません。",
				autoplayExplain2: "このモードがアクティブの場合、ストーリーの再生/一時停止および再生速度の調整を行うコントロールが表示されます。",
				linksupdated: "リンクが更新されました"
			}
        }
    })
);