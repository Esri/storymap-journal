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
				height: "高度"
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
				buttonPreview: "实时查看",
				tooltipFirstSave: "保存后，此功能才可用。",
				tooltipNotShared: "共享后，此功能才可用。",
				noPendingChange: "无待决的更改",
				unSavedChangePlural: "待决更改",
				closeWithPendingChange: "是否确定要确认此操作？您的更改将丢失。",
				saveError: "保存失败，请重试",
				shareStatus1: "应用程序尚未保存",
				shareStatus2: "应用程序已公开共享",
				shareStatus3: "应用程序已在组织中共享",
				shareStatus4: "应用程序未共享"
			},
			saveError: {
				title: "保存应用程序时出错",
				err1Div1: "无法保存该应用程序，因为您具有相同名称的其他项目(请参阅您的<a class='linkagolroot' target='_blank'>内容文件夹</a>)。",
				err1Div2: "请修改应用程序标题并将其保存。",
				btnOk: "编辑应用程序标题"
			},
			share: {
				firstSaveTitle: "应用程序已成功保存",
				firstSaveHeader: "应用程序现已保存在 %PORTAL% 中，但尚未进行共享。",
				firstSavePreview: "预览",
				firstSaveShare: "共享",
				firstSaveA1: "如果不熟悉 %PORTAL% 或需要使用快捷方式来访问构建器界面，则可以保存以下链接：%LINK1%",
				firstSaveA1bis: "也可在 <a href='%LINK2%' target='_blank'>%PORTAL% 内容文件夹</a>中找到应用程序。",
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
				shareHeader1: "应用程序<strong>可公开访问</strong>。",
				shareHeader2: "组织成员（需要登录帐户）可访问应用程序。",
				shareLinkCopy: "复制",
				shareLinkCopied: "已复制",
				shareQ0: "如何在网页中嵌入应用程序?",
				shareQ1Opt1: "如何将应用程序设置为私有？",
				shareQ1Opt2: "如何将应用程序设置为私有或公开共享？",
				shareA1: "在<a href='%LINK1%' target='_blank'>应用程序项目页面</a>上使用 %SHAREIMG%。",
				shareQ2bis: "如何返回构建器界面？",
				shareA2div1: "保存并重新使用以下链接 %LINK1%，或使用<a href='%LINK2%' target='_blank'>应用程序项目页面</a>。",
				shareA2div2: "作为应用程序所有者，登录到 %PORTAL% 后，应用程序将包括用于打开构建器的按钮：",				
				shareQ3: "数据的存储位置在哪里？",
				shareA3: "%TPL_NAME% 数据和配置均存储在<a href='%LINK2%' target='_blank'>此 web 应用程序项目</a>中。如果已使用 Flickr、Picasa、Facebook 或 YouTube 进行导入，则图像和视频不会复制到 %PORTAL% 中。"
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
				title: "专题"
			},
			settingsHeader: {
				title: "标题",
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
