﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "マップ",
				lblLocation: "位置",
				lblContent: "コンテンツ",
				lblPopup: "ポップアップ",
				lblControls: "その他",
				lblOverview: "概観図",
				lblLegend: "凡例",
				loadingTitle: "タイトルを読み込んでいます",
				entry: "エントリ",
				entries: "エントリ",
				section: "セクション",
				sections: "セクション",
				and: "および",
				action: "セクション内のアクション",
				actions: "セクション内のアクション",
				originalWebmap: "%TPL_NAME% の公開に使用されるマップ",
				browseMaps: "マップの選択",
				createMap: "マップの作成",
				current: "現在のマップ",
				select: "マップの選択または作成",
				newMap: "新しく選択したマップ",
				newCreatedMap: "新しく作成したマップ",
				webmapDefault: "マップのデフォルト",
				customCfg: "カスタム構成",
				tooltipLocation: "このマップが表示される場所を定義します。",
				tooltipContent: "表示レイヤを定義します。",
				tooltipPopup: "このマップを表示するときに開くポップアップを選択します。",
				tooltipOverview: "メインのマップと一緒に小さいオーバービュー マップを表示します。",
				tooltipLegend: "マップの凡例をマップ上に表示します。マップに多くのレイヤとシンボルが存在する場合に役立ちます。",
				mapCfgInvite: "これらのコントロールを使用してマップを構成",
				lblLocationAlt: "最初のマップから継承",
				tooltipLocationAlt: "このマップの場所は一連のマップ内の最初のマップと同期します。この動作を変更するには、[設定] → [マップ オプション] の順に移動します。"
			},
			configure: {
				btnReset: "リセット",
				btnCancel: "キャンセル",
				tocTitle: "マップ コンテンツ",
				tocExplain: "表示するレイヤを選択します。",
				tocNoData: "レイヤを構成できません。",
				tocSave: "マップ コンテンツの保存",
				extentTitle: "マップ位置",
				extentExplain: "マップを移動および拡大/縮小して、ユーザに対する外観を定義します。",
				extentSave: "マップ位置の保存",
				popupTitle: "マップ ポップアップ",
				popupExplain: "フィーチャをクリックして、表示するポップアップを開きます。",
				popupSave: "ポップアップ構成の保存",
				hintNavigation: "マップ ナビゲーションは無効化されています。"
			},
			editor: {
				loading: "マップ エディターを読み込んでいます。しばらくお待ちください",
				newTitle: "マップの新規作成",
				editTitle: "マップの編集",
				titleLbl: "タイトル",
				titlePh: "マップ タイトル...",
				folderLbl: "マップは、ストーリーと同じフォルダーに作成されます。",
				creating: "マップを作成しています",
				saving: "マップを保存しています",
				success: "マップが保存されました",
				successCreate: "マップが作成されました",
				cancelTitle: "保存されていない変更内容をすべて破棄しますか？",
				errorDuplicate: "そのタイトルのマップはすでに存在しています。",
				errorCreate: "マップを作成できません。もう一度やり直してください。",
				errorSave: "マップを保存できません。もう一度やり直してください。",
				notavailable1: "技術的な制限のため、マップの作成または編集は Firefox ではサポートされていません。別の Web ブラウザーを使用してストーリーを作成するか、次の回避策を適用してください。",
				notavailable2: "ストーリー マップ アプリケーションが %PRODUCT% でホストされていないため、マップの作成または編集がサポートされていません。詳細については、ArcGIS 管理者に問い合わせてください。",
				notavailable3: "このバージョンの Portal for ArcGIS では、マップの作成または編集はサポートされていません (10.4 以降が必要です)。詳細については、ArcGIS 管理者に問い合わせてください。",
				notavailable4: "%MV% を使用してマップを作成し、その後、ここに戻ってそのマップをストーリーに追加できます。",
				notavailable5: "%MV% を使用してマップを編集し、その後、ここに戻って%apply%し、変更内容を表示できます。",
				notavailable6: "マップ ビューアー",
				notavailable7: "マップの再読み込み"
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
				title: "マップの選択",
				searchTitle: "検索",
				ok: "OK",
				cancel: "キャンセル",
				placeholder: "検索語句または Web マップ ID を入力..."
			}
		}
	})
);
