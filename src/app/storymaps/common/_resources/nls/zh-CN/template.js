define(
	 ({
		common: {
			common: {
				edit: "编辑"
			},
			inlineFieldEdit: {
				editMe: "编辑!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% 构建器",
				buttonSave: "保存",
				buttonShare: "共享",
				buttonSettings: "设置",
				buttonHelp: "帮助",
				noPendingChange: "无待决的更改",
				unSavedChangeSingular: "1 个未保存的更改",
				unSavedChangePlural: "未保存的更改",
				popoverSaveWhenDone: "完成后请不要忘记保存",
				closeWithPendingChange: "确定要执行此操作吗? 您的更改将丢失。",
				ok: "确定",
				savingApplication: "保存应用程序",
				saveError: "保存失败，请重试",
				saveError3: "标题不能为空",
				// TODO
				signIn: "请使用帐户登录",
				shareStatus1: "应用程序未保存",
				shareStatus2: "应用程序已公开共享",
				shareStatus3: "应用程序已在组织中共享",
				shareStatus4: "应用程序未共享"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "标题",
				addPopupTitle: "添加",
				addPopupDescription: "将新视图添加到系列中。",
				addPopupButton: "添加",
				// Edit
				editPopupTitle: "编辑",
				editPopupDescription: "编辑所选视图",
				editPopupButton: "应用",
				// Add/Edit
				addEditPopupCancelButton: "取消",
				addEditPopupMyContentBtn: "从我的内容中选择",
				addEditPopupConfigureWebMapBtn: " 配置"
			},
			share: {
				firstSaveTitle: "应用程序已成功保存",
				firstSaveHeader: "应用程序现已保存在 ArcGIS Online 中。请阅读以下常见问题的解答。",
				firstSaveA1: "如果您不熟悉 ArcGIS Online，或需要访问创作界面的快捷方式，则可以保存以下链接: %LINK1%",
				firstSaveA1bis: "还可在 <a href='%LINK2%' target='_blank'>ArcGIS Online 内容文件夹</a>中找到应用程序。",
				firstSaveQ2: "应用程序是否已共享？",
				firstSaveA2: "应用程序当前尚未共享。要进行共享，请使用\“共享\”按钮。",
				shareTitle: "共享应用程序",
				sharePrivateHeader: "应用程序尚未共享，是否要进行共享？",
				sharePrivateBtn1: "公开共享",
				sharePrivateBtn2: "与我的组织共享",
				sharePrivateWarning: "已禁止共享 %WITH%，因为您不是 <a href='%LINK%' target='_blank'>webmap</a> 的所有者。",
				sharePrivateWarningWith1: "公开",
				sharePrivateWarningWith2: "公开并在组织内共享",
				sharePrivateProgress: "正在进行共享...",
				sharePrivateErr: "共享失败，请重试或",
				sharePrivateOk: "共享更新成功，正在加载...",
				sharePreviewAsUser: "预览",
				shareHeader1: "应用程序<strong>可公开访问</strong>。",
				shareHeader2: "组织成员（需要登录帐户）可访问应用程序。",
				shareLinkHeader: "与受众共享应用程序",
				shareLinkOpen: "打开",
				shareQ1Opt1: "如何将应用程序私有化?",
				shareQ1Opt2: "如何将应用程序私有化或公开共享？",
				shareA1: "请使用<a href='%LINK1%' target='_blank'>应用程序项目页面</a>上的 %SHAREIMG%。如果还想要取消共享 web 地图，请使用 <a href='%LINK2%' target='_blank'>web 地图项目页面</a>。",
				shareA1bis: "如果还想要取消共享要素服务，请使用<a href='%LINK1%' target='_blank'>要素服务项目页面</a>。",
				shareQ2: "如何在稍后对应用程序进行编辑?",
				shareQ2bis: "如何返回制作界面？",
				shareA2div1: "保存并重新使用以下链接 %LINK1%，或使用<a href='%LINK2%' target='_blank'>应用程序项目页面</a>。",
				shareA2div2: "作为应用程序所有者，当您登录到 ArcGIS.com 后，可使用应用程序中的按钮来打开交互式构建器:",				
				shareQ3: "数据存储在哪儿？",
				shareA3: "应用程序配置存储在<a href='%LINK1%' target='_blank'>此 webmap 项目</a>和<a href='%LINK2%' target='_blank'>此 web 应用程序项目</a>中。如果使用 Flickr、Picasa、Facebook 或 YouTube 进行导入，则图像和视频仍将存储在上述位置，并且不会复制到 ArcGIS Online。",
				learnMore: "了解详细信息",
				close: "关闭"
			},
			settings: {
				header: "应用程序设置",
				cancel: "取消",
				apply: "应用",
				tabError: "请检查所有选项卡中的错误"
			},
			settingsLayout: {
				title: "布局",
				explain: "希望使用哪种布局？",
				explainInit: "可通过设置对话框进行更改。",
				selected: "选中的布局",
				select: "选择此布局"
			},
			settingsTheme: {
				title: "专题",
				explain: "选择应用程序专题或定义自己的颜色。",
				label: "页眉和侧面板背景颜色"
			},
			settingsHeader: {
				title: "标题",
				explain: "自定义页眉徽标(不超过 250 x 50px)。",
				logoEsri: "Esri 徽标",
				logoNone: "无徽标",
				logoCustom: "自定义徽标",
				logoCustomPlaceholder: "图像 URL",
				logoCustomTargetPlaceholder: "点击链接",
				logoSocialExplain: "自定义标题右上方的链接。",
				logoSocialText: "文本",
				logoSocialLink: "链接",
				logoSocialDisabled: "此功能已被管理员禁用"
			},
			mediaSelector: {
				lblMap: "地图",
				lblPicture: "图片",
				lblVideo: "视频",
				lblExternal: "外部页面"
			},
			webMapSelector: {
				radioCurrentWebMap: "当前 web 地图",
				radioWebmapApp: "用于应用程序的其他 web 地图之一",
				radioAnotherWebmap: "其他 webmap",
				btnSelect: "选择",
				lblOr: "或者",
				fieldEnterWebmapId: "输入 web 地图 id",
				btnConfigure: "配置地图"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "我的组织",
					onlineLabel: "ArcGIS Online",
					contentLabel: "我的内容",
					favoritesLabel: "我的收藏夹"
				},
				title: "选择 Web 地图",
				searchTitle: "搜索",
				ok: "确定",
				cancel: "取消",
				placeholder: "输入搜索词"
			}
		}
	})
);
