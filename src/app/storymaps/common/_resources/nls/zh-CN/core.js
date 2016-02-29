define(
	 ({
		commonCore: {
			common: {
				add: "添加",
				edit: "编辑",
				save: "保存",
				next: "下一步",
				cancel: "取消",
				back: "返回",
				apply: "应用",
				close: "关闭",
				open: "打开",
				start: "开始",
				loading: "正在加载",
				disabledAdmin: "此功能已被管理员禁用",
				width: "宽度",
				height: "高度",
				create: "创建",
				yes: "是",
				no: "否",
				mystories: "我的故事"
			},
			inlineFieldEdit: {
				editMe: "编辑！"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% 构建器",
				buttonSaving: "正在保存",
				buttonSaved: "已保存",
				buttonShare: "共享",
				buttonSettings: "设置",
				buttonHelp: "帮助",
				buttonPreview: "查看故事",
				tooltipFirstSave: "保存后，此功能才可用。",
				tooltipNotShared: "共享后，此功能才可用。",
				tooltipNotShared2: "您的故事尚未共享，只有您可以进行访问。",
				noPendingChange: "无待决的更改",
				unSavedChangePlural: "待决更改",
				closeWithPendingChange: "是否确定要确认此操作？您的更改将丢失。",
				saveError: "保存失败，请重试",
				status1: "故事已共享，但存在问题",
				status2: "故事未共享，但存在问题",
				status3: "故事是公开的",
				status4: "故事已在组织内共享",
				status5: "故事是私有的",
				status6: "尚未保存故事",
				checking: "正在检查",
				fix: "定位"
			},
			saveError: {
				title: "保存故事时出错",
				err1Div1: "无法保存故事，因为已存在同名项。",
				err1Div2: "请修改故事的标题，然后将其保存。",
				btnOk: "编辑故事标题"
			},
			saveErrorSocial: {
				title: "社交媒体共享更新",
				panel1: "您的故事在社交媒体上的外观已改善，但您的 ArcGIS web 应用程序项目标题与故事标题不一致。",
				panel1tooltip: "通过定义标题、摘要和缩略图，您的故事将显示如下:",
				panel2:	"您希望在社交媒体上使用的标题:",
				panel2q1: "故事标题(建议)",
				panel2q1tooltip: "通过选择此选项，可将您的项目标题修改为与故事标题相匹配的标题并同步对构建器所做的进一步更改。",
				panel2q2: "项目标题",
				panel3: "要进一步改善您的故事在社交媒体上的外观，请使用 ${MYSTORIES} 添加摘要和缩略图。",
				panel4: "此故事不再提醒"
			},
			share: {
				shareTitle: "共享您的故事",
				preview: "预览",
				viewlive: "查看故事",
				btnPrivate: "私有",
				btnPrivateTooltip: "仅限您个人可查看故事",
				btnOrg: "组织",
				btnOrgTooltip: "仅限您组织内的成员可查看故事",
				btnPublic: "公共",
				btnPublicTooltip: "所有人可查看故事",
				loadingMessage: "正在检查您故事中的问题",
				viewToggle1: "显示故事内容",
				viewToggle2: "关闭故事内容",
				socialize: "社会化",
				statusPrivate: "您的故事是私有的，仅限您个人可以查看。",
				statusError: "在您的故事内容中存在问题，将会被您的读者注意到。您可在下面找出并改正这些错误。",
				statusNoErrPrivate: "请在您准备就绪后共享您的故事！",
				mystoriesinvite: "管理您的所有故事",
				notavailable1: "抱歉，不支持从“构建器”共享您的故事，因为此应用程序未托管在 %PRODUCT% 上。",
				notavailable2: "抱歉，此版本的 Portal for ArcGIS 不支持从“构建器”共享您的故事(需要 10.4 或更高版本)。",
				notavailable3: "您可从 %LINK% 共享此故事。",
				notavailable4: "我的故事",
				notavailable5: "其项目页面",
				notavailable6: "抱歉，在开发模式下无法完全支持此要素。根据您的部署方案，此要素在部署后可能被支持。",
				notavailable7: "请务必访问 %MYCONTENT%，以确认在您的故事中使用的地图和图层同样被共享。",
				notavailable8: "我的内容",
				mystoriesinvite2: "要改善您的故事在社交网络上的外观，请使用 ${MYSTORIES} 添加摘要和缩略图。"
			},
			settings: {
				header: "设置",
				tabError: "请检查所有选项卡中的错误"
			},
			settingsLayout: {
				title: "布局",
				explain: "想要使用哪种布局？",
				explainInit: "可随时在设置对话框中更改布局。",
				viewExample: "查看实时示例"
			},
			settingsTheme: {
				title: "主题"
			},
			settingsHeader: {
				title: "页眉",
				logoEsri: "Esri 徽标",
				logoNone: "无徽标",
				logoCustom: "自定义徽标",
				logoCustomPlaceholder: "URL（最大 250x50 像素）",
				logoCustomTargetPlaceholder: "点击链接",
				logoSocialExplain: "自定义标题链接。",
				logoSocialText: "文本",
				logoSocialLink: "链接",
				lblSmallHeader: "使用紧凑型标题(无副标题)"
			},
			header: {
				title: "编辑 %TPL_NAME% 的标题",
				subtitle: "编辑 %TPL_NAME% 的副标题"
			}
		}
	})
);
