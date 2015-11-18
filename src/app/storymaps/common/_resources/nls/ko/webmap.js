﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "맵",
				lblLocation: "위치",
				lblContent: "콘텐츠",
				lblPopup: "팝업",
				lblControls: "추가",
				lblOverview: "개요 맵",
				lblLegend: "범례",
				loadingTitle: "제목을 불러오는 중",
				entry: "항목",
				entries: "항목",
				section: "섹션",
				sections: "섹션",
				and: "및",
				action: "섹션의 작업",
				actions: "섹션의 작업",
				originalWebmap: "%TPL_NAME%을(를) 발행하는 데 사용된 맵",
				browseMaps: "맵 선택",
				createMap: "맵 생성",
				current: "현재 맵",
				select: "맵 선택 또는 생성",
				newMap: "새로 선택한 맵",
				newCreatedMap: "새로 생성한 맵",
				webmapDefault: "맵 기본값",
				customCfg: "사용자 정의 구성",
				tooltipLocation: "이 맵이 표시될 위치를 정의합니다.",
				tooltipContent: "가시 레이어를 정의합니다.",
				tooltipPopup: "이 맵이 표시될 때 열릴 팝업을 선택합니다.",
				tooltipOverview: "기본 맵과 함께 소형 개요보기 맵을 표시합니다.",
				tooltipLegend: "레이어 및 심볼이 맵에 많이 포함되어 있는 경우에 유용한 맵 범례를 맵에 표시합니다.",
				mapCfgInvite: "이 컨트롤을 사용하여 맵 구성",
				lblLocationAlt: "첫 번째 맵으로부터 상속됨",
				tooltipLocationAlt: "이 맵의 위치는 맵 시리즈의 첫 번째 맵과 동기화됩니다. 시리즈에 대한 이 동작을 변경하려면 설정 > 맵 옵션으로 이동합니다."
			},
			configure: {
				btnReset: "재설정",
				btnCancel: "취소",
				tocTitle: "맵 콘텐츠",
				tocExplain: "표시할 레이어를 선택합니다.",
				tocNoData: "레이어를 구성할 수 없습니다.",
				tocSave: "맵 콘텐츠 저장",
				extentTitle: "맵 위치",
				extentExplain: "맵을 이동 및 확대/축소하여 사용자에게 표시되는 모양을 정의합니다.",
				extentSave: "맵 위치 저장",
				popupTitle: "맵 팝업",
				popupExplain: "표시하려는 팝업을 열려면 피처를 클릭하세요.",
				popupSave: "팝업 구성 저장",
				hintNavigation: "맵 탐색을 사용할 수 없습니다."
			},
			editor: {
				loading: "맵 편집자를 불러오는 동안 잠시 기다려 주세요.",
				newTitle: "새 맵 생성",
				editTitle: "맵 편집",
				titleLbl: "제목",
				titlePh: "맵 제목...",
				folderLbl: "맵은 스토리와 같은 폴더에 생성됩니다.",
				creating: "맵을 생성하는 중",
				saving: "맵을 저장하는 중",
				success: "맵 저장됨",
				successCreate: "맵 생성됨",
				cancelTitle: "저장하지 않은 변경사항을 취소하시겠습니까?",
				errorDuplicate: "해당 제목의 맵이 이미 있습니다.",
				errorCreate: "맵을 생성할 수 없습니다. 다시 시도하세요.",
				errorSave: "맵을 저장할 수 없습니다. 다시 시도하세요.",
				notavailable1: "죄송합니다. 기술적 제한으로 인해 Firefox에서는 맵을 생성하거나 편집할 수 없습니다. 다른 웹 브라우저를 사용하여 스토리를 만들거나 다음 해결 방법을 사용할 수 있습니다.",
				notavailable2: "죄송합니다. 스토리 맵 응용프로그램이 %PRODUCT%에서 호스팅되지 않으므로 맵을 생성하거나 편집할 수 없습니다. 자세한 내용은 ArcGIS 관리자에게 문의하세요.",
				notavailable3: "죄송합니다. 이 Portal for ArcGIS 버전에서는 맵을 생성하거나 편집할 수 없습니다(10.4 이상 필요). 자세한 내용은 ArcGIS 관리자에게 문의하세요.",
				notavailable4: "%MV%을(를) 사용하여 맵을 생성한 다음 여기로 돌아와서 스토리에 맵을 추가할 수 있습니다.",
				notavailable5: "%MV%을(를) 사용하여 맵을 생성한 다음 여기로 돌아와서 %apply%하면 변경사항을 확인할 수 있습니다.",
				notavailable6: "맵 뷰어",
				notavailable7: "맵 다시 불러오기"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "내 기관",
					onlineLabel: "ArcGIS Online",
					contentLabel: "내 콘텐츠",
					favoritesLabel: "내 즐겨찾기"
				},
				title: "맵 선택",
				searchTitle: "검색",
				ok: "확인",
				cancel: "취소",
				placeholder: "검색어 또는 웹 맵 ID 입력..."
			}
		}
	})
);
