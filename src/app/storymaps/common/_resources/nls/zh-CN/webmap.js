define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "地图",
				lblLocation: "位置",
				lblContent: "内容",
				lblPopup: "弹出窗口",
				lblControls: "额外部分",
				lblOverview: "鹰眼图",
				lblLegend: "图例",
				lblGeocoder: "地址或地点查找器",
				tooltipGeocoder: "允许用户在地图上查找地址和地点。",
				loadingTitle: "加载标题",
				entry: "条目",
				entries: "条目",
				section: "节",
				sections: "节",
				and: "和",
				action: "节中的操作",
				actions: "节中的操作",
				originalWebmap: "用于发布 %TPL_NAME% 的地图",
				browseMaps: "选择地图",
				createMap: "创建地图",
				current: "当前地图",
				select: "选择或创建地图",
				newMap: "新选择的地图",
				newCreatedMap: "新创建的地图",
				webmapDefault: "默认地图",
				customCfg: "自定义配置",
				tooltipLocation: "定义此地图将显示的位置。",
				tooltipContent: "定义可见图层。",
				tooltipPopup: "选择将在显示此地图时打开的弹出窗口。",
				tooltipOverview: "显示主地图的同时显示一个小总览图。",
				tooltipLegend: "在地图上显示地图图例，地图具有许多图层和符号的情况下非常有用。",
				mapCfgInvite: "使用这些控件来配置地图",
				lblLocationAlt: "继承自第一张地图",
				tooltipLocationAlt: "此地图的位置与系列中的第一张地图保持同步。要更改系列的此行为，请转到\“设置 > 地图选项\”。"
			},
			configure: {
				btnReset: "重置",
				btnCancel: "取消",
				tocTitle: "地图内容",
				tocExplain: "选择将显示哪些图层。",
				tocNoData: "无法配置任何图层。",
				tocSave: "保存地图内容",
				extentTitle: "地图位置",
				extentExplain: "平移并缩放地图以定义供读者观看的地图外观。",
				extentSave: "保存地图位置",
				popupTitle: "地图弹出窗口",
				popupExplain: "单击要素以打开您要显示的弹出窗口。",
				popupSave: "保存弹出窗口配置",
				hintNavigation: "地图导航已禁用。"
			},
			editor: {
				loading: "正在加载地图编辑器，请稍候",
				newTitle: "创建新地图",
				editTitle: "编辑地图",
				titleLbl: "标题",
				titlePh: "地图标题...",
				folderLbl: "将在故事所在的文件夹内创建地图。",
				creating: "正在创建地图",
				saving: "正在保存地图",
				success: "已保存地图",
				successCreate: "已创建地图",
				cancelTitle: "是否放弃所有未保存更改?",
				errorDuplicate: "已经存在具有相同标题的地图",
				errorCreate: "无法创建地图。请重试。",
				errorSave: "无法保存地图。请重试。",
				notavailable1: "抱歉，因为技术限制，无法在 Firefox 中创建或编辑地图。您可使用其他不同的 Web 浏览器或使用以下的解决方案来构建您的故事。",
				notavailable2: "抱歉，因为故事地图应用程序未托管在 %PRODUCT% 中，所以不支持创建或编辑地图。有关详细信息，请联系您的 ArcGIS 管理员。",
				notavailable3: "抱歉，此版本的 Portal for ArcGIS 不支持创建或编辑地图(需要 10.4 或更高版本)。有关详细信息，请联系您的 ArcGIS 管理员。",
				notavailable4: "您可使用 %MV% 创建地图，然后返回此处将其添加到您的故事中。",
				notavailable5: "您可使用 %MV% 编辑地图，然后返回此处并 %apply% 以查看您的更改。",
				notavailable6: "地图查看器",
				notavailable7: "重新加载地图"
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
				title: "选择地图",
				searchTitle: "搜索",
				ok: "确定",
				cancel: "取消",
				placeholder: "输入搜索词或 Web 地图 ID..."
			}
		}
	})
);
