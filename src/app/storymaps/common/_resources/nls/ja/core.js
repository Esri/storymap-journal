define(
	 ({
		commonCore: {
			common: {
				add: "追加",
				edit: "編集",
				save: "保存",
				next: "次へ",
				cancel: "キャンセル",
				back: "戻る",
				apply: "適用",
				close: "閉じる",
				open: "開く",
				start: "開始",
				loading: "読み込んでいます",
				disabledAdmin: "この機能は、管理者によって無効にされています",
				width: "幅",
				height: "高さ",
				create: "作成",
				yes: "はい",
				no: "いいえ",
				mystories: "マイ ストーリー"
			},
			inlineFieldEdit: {
				editMe: "編集"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% ビルダ",
				buttonSaving: "保存中",
				buttonSaved: "保存完了",
				buttonShare: "共有",
				buttonSettings: "設定",
				buttonHelp: "ヘルプ",
				buttonPreview: "ストーリーの表示",
				tooltipFirstSave: "これは保存するまで利用できません。",
				tooltipNotShared: "これは共有するまで利用できません。",
				tooltipNotShared2: "ストーリーは共有されていません。このストーリーにアクセスできるのはあなただけです。",
				noPendingChange: "保留中の変更はありません",
				unSavedChangePlural: "保留中の変更",
				closeWithPendingChange: "このアクションを確認しますか？変更内容は失われます。",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				status1: "ストーリーは共有されていますが、問題があります",
				status2: "ストーリーは共有されていませんが、問題があります",
				status3: "ストーリーはパブリックです",
				status4: "ストーリーは組織サイト内で共有されています",
				status5: "ストーリーはプライベートです",
				status6: "ストーリーはまだ保存されていません",
				checking: "チェック中",
				fix: "修正"
			},
			saveError: {
				title: "ストーリーの保存中にエラーが発生しました",
				err1Div1: "同じ名前の別のアイテムがすでに存在するため、ストーリーを保存できません。",
				err1Div2: "ストーリーのタイトルを変更して保存してください。",
				btnOk: "ストーリー タイトルの編集"
			},
			saveErrorSocial: {
				title: "ソーシャル メディアでの共有の更新",
				panel1: "ソーシャル メディアでのストーリーの外観が改善されていますが、ArcGIS Web アプリケーション アイテムのタイトルがストーリーのタイトルと同じではありません。",
				panel1tooltip: "タイトル、サマリー、およびサムネイル画像を定義すると、ストーリーは次のように表示されます。",
				panel2:	"ソーシャル メディアで使用するタイトル:",
				panel2q1: "ストーリーのタイトル (推奨)",
				panel2q1tooltip: "このオプションを選択すると、アイテムのタイトルは、ストーリーのタイトルと一致するように変更され、ビルダーでの追加の変更が同期するようになります。",
				panel2q2: "アイテムのタイトル",
				panel3: "ソーシャル メディアでのストーリーの外観をさらに改善するには、${MYSTORIES} を使用してサマリーとサムネイル画像を追加します。",
				panel4: "今後、ストーリーについて警告しない"
			},
			share: {
				shareTitle: "ストーリーの共有",
				preview: "プレビュー",
				viewlive: "ストーリーの表示",
				btnPrivate: "プライベート",
				btnPrivateTooltip: "このストーリーを表示できるのはあなただけです",
				btnOrg: "組織",
				btnOrgTooltip: "このストーリーを表示できるのは組織サイトのメンバーだけです",
				btnPublic: "パブリック",
				btnPublicTooltip: "すべてのユーザーがこのストーリーを表示できます",
				loadingMessage: "ストーリーの問題をチェックしています",
				viewToggle1: "ストーリーのコンテンツの表示",
				viewToggle2: "ストーリーのコンテンツを閉じる",
				socialize: "ソーシャライズ",
				statusPrivate: "ストーリーはプライベートです。このストーリーを表示できるのはあなただけです。",
				statusError: "ストーリーのコンテンツには、ユーザーに目立つ問題があります。それらの問題は、以下より特定して修正できます。",
				statusNoErrPrivate: "準備ができたら、ストーリーを共有しましょう。",
				mystoriesinvite: "すべてのストーリーの管理",
				notavailable1: "このアプリケーションは %PRODUCT% でホストされていないため、ビルダーからのストーリーの共有はサポートされていません。",
				notavailable2: "Portal for ArcGIS のこのバージョンでは、ビルダーからのストーリーの共有はサポートされていません (10.4以降が必要です)。",
				notavailable3: "このストーリーを %LINK% から共有できます。",
				notavailable4: "マイ ストーリー",
				notavailable5: "これはアイテム ページです",
				notavailable6: "開発モードでは、この機能は一部サポートされません。配置シナリオによっては、配置時にこの機能がサポートされる場合があります。",
				notavailable7: "必ず %MYCONTENT% を参照し、ストーリーで使用されているマップとレイヤーも共有されていることを確認してください。",
				notavailable8: "マイ コンテンツ",
				mystoriesinvite2: "ソーシャル ネットワークでのストーリーの外観を改善するには、${MYSTORIES} を使用してサマリーとサムネイル画像を追加します。"
			},
			settings: {
				header: "設定",
				tabError: "すべてのタブでエラーを確認してください"
			},
			settingsLayout: {
				title: "レイアウト",
				explain: "使用するレイアウト",
				explainInit: "レイアウトは、設定ダイアログからいつでも変更できます。",
				viewExample: "最新例を表示"
			},
			settingsTheme: {
				title: "テーマ"
			},
			settingsHeader: {
				title: "ヘッダー",
				logoEsri: "Esri ロゴ",
				logoNone: "ロゴなし",
				logoCustom: "カスタム ロゴ",
				logoCustomPlaceholder: "URL (最大 250x50 ピクセル)",
				logoCustomTargetPlaceholder: "クリックスルー リンク",
				logoSocialExplain: "ヘッダー リンクをカスタマイズします。",
				logoSocialText: "テキスト",
				logoSocialLink: "リンク",
				lblSmallHeader: "コンパクトなヘッダーを使用 (サブタイプなし)"
			},
			header: {
				title: "%TPL_NAME% のタイトルの編集",
				subtitle: "%TPL_NAME% のサブタイトルの編集"
			}
		}
	})
);
