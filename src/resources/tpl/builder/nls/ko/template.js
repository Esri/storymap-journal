define(
	 ({
		builder: {
			layouts: {
				mainStage: "기본 단계",
				sideTitle: "사이드 패널",
				sideDescr: "사진, 동영상 및 맵을 간결한 요약 메시지로 조합할 수 있는 텍스트가 많은 스토리의 레이아웃입니다.",
				floatTitle: "부동 패널",
				floatDescr: "지도에 포커스를 두고 간단한 양식의 투명한 텍스트 패널을 통해 스토리를 전달할 수 있는 레이아웃입니다."
			},
			common: {
				lblStatus1: "발행됨",
				lblStatus2: "드래프트",
				lblStatus3: "숨김"
			},
			settingsLayoutOptions: {
				title: "레이아웃 옵션",
				cfgLeft: "왼쪽",
				cfgRight: "오른쪽",
				cfgSmall: "소",
				cfgMedium: "중간",
				cfgLarge: "대",
				socialLinksLabel: "각 섹션의 하단에 공유 링크 표시",
				socialLinksDescr: "사용자가 %TPL_NAME%의 특정 섹션을 참조하고 홍보할 수 있도록 합니다. 예를 들어 섹션 공유 아이콘을 사용하는 경우 사용자는 스토리 시작 부분 대신 특정 %TPL_NAME% 섹션으로 이동합니다. 사용자는 제목 섹션에 있는 소셜 미디어 링크를 사용하여 전체 %TPL_NAME%(머리글 탭)을(를) 홍보하고 %TPL_NAME% 시작 부분에 둘 수 있습니다."
			},
			settingsLayoutFonts: {
				title: "글꼴",
				defaultLbl: "기본값",
				sectionTitleLbl: "섹션 제목",
				sectionContentLbl: "섹션 콘텐츠"
			},
			initPopup: {
				title: "시작"
			},
			addEditPopup: {
				disabled: "허용된 섹션의 최대 개수에 도달했으므로 섹션 추가를 사용할 수 없습니다.",
				titleAdd: "섹션 추가",
				titleAddHome: "홈 섹션 추가",
				titleEdit: "섹션 편집",
				step: "단계",
				stepMainStageExplain: "기본 단계 콘텐츠",
				stepPanelExplain: "콘텐츠",
				stepMainStageNextTooltip: "섹션 제목을 입력하고 기본 단계 콘텐츠를 선택합니다.",
				stepMainStageNextTooltip2: "기본 단계 콘텐츠를 선택하세요.",
				step2NextTooltip: "섹션 제목과 %LAYOUT-TYPE% 콘텐츠를 입력합니다.",
				stepNextTooltipNext: "다음 단계로 이동하려면",
				stepNextTooltipAdd: "섹션을 추가하려면",
				firstAddExplain: "이 첫 번째 섹션은 홈 섹션으로 스토리의 '커버 페이지'에 해당됩니다. 방금 정의한 제목이 큰 글꼴로 표시됩니다.",
				firstAddLeanMore: "자세히 보기",
				titlePlaceholder: "섹션 제목..."
			},
			addEditViewText: {
				editorPlaceholder: "여기에 텍스트, 링크 및 작은 그래픽을 추가합니다.",
				editorActionsTitle: "기본 단계 작업",
				editorActionsHelpDescr: "이 컨트롤을 사용하여 기본 단계를 변경할 링크를 생성합니다. 예를 들어, 사용자가 링크를 클릭하면 특정 위치로 맵이 확대되거나, 다른 웹 맵이 표시되거나, 이미지가 표시되도록 할 수 있습니다.",
				mainStageDisabled: "편집기가 최대화되어 있는 경우 기본 단계 작업을 사용할 수 없습니다."
			},
			organizePopup: {
				title: "구성",
				lblHeader: "섹션을 끌어서 놓고 콘텐츠를 구성합니다.",
				lblColTitle: "제목",
				lblColPubDate: "발행 날짜",
				lblColStatus: "상태",
				checkDisplayReverse: "역순으로 섹션 표시",
				btnApplyWarning: "%NB% 섹션 삭제 확인",
				deleteTooltip: "삭제",
				firstSectionExplain: "(홈 섹션은 이동할 수 없음)",
				exportMainStage: "기본 단계 콘텐츠",
				exportPanel: "패널 콘텐츠",
				exportActions: "기본 단계 작업"
			},
			exportData: {
				btn: "콘텐츠 내보내기",
				tooltip: "실수로 콘텐츠를 삭제한 경우 콘텐츠 내보내기를 통해 콘텐츠의 백업을 확인하고 생성할 수 있습니다. 페이지에서 콘텐츠를 복사하여 워드 프로세서에 붙여넣기만 하면 됩니다."
			},
			help: {
				lblHelp: "도움말",
				lblAdd: "섹션 추가",
				lblSettings: "설정",
				lblOrga: "콘텐츠 구성",
				lblEdit: "편집",
				lblPublish: "공유",
				lblTips: "팁",
				lblMore: "자세히 알아보시겠습니까?",
				lblLink: "Esri 스토리 맵 웹 사이트를 방문하세요.",
				content1Div1: "스토리를 작성할 때 다양한 스타일을 통합할 수 있습니다. <strong>%LAYOUT_TITLE%</strong>에는 일반적으로 텍스트, 이미지 및 동영상이 포함되고, 맵은 <strong>기본 단계</strong>로 이동합니다. 그러나 %TPL_NAME%을(를) 통해 이미지, 차트 및 동영상도 기본 단계에 포함할 수 있습니다.",
				content1Div2: "섹션을 추가하면 스토리텔링 환경을 사용자 정의할 수 있습니다. 사용자가 %LAYOUT_TITLE% 텍스트를 스크롤하면 기본 단계의 맵이 주요 포인트로 이동 또는 확대/축소되거나, 새 맵 및 이미지가 자동으로 전환되어 메시지를 보완합니다.",
				content2Div1: "설정 대화상자에서는 %TPL_NAME%의 모양을 조정할 수 있습니다. 레이아웃을 변경하고, 다른 색상 스키마를 선택하고, 텍스트 폰트를 변경하는 등의 작업을 수행할 수 있습니다.",
				content2Div2: "또한 Esri 로고를 사용자의 로고로 바꿔 사용자의 브랜드를 나타낼 수 있으며, 독자가 로고를 클릭할 경우 표시될 웹 사이트를 지정하여 독자에게 자세한 정보가 표시되도록 할 수도 있습니다.",
				content3Div1: "콘텐츠는 섹션으로 구성됩니다. 원하는 수의 섹션(일종의 작은 챕터)을 만들 수 있습니다. 이러한 챕터의 흐름이 중요하며, 구성에서 원하는 대로 섹션을 삭제하거나 재정렬할 수 있습니다.",
				content4Div1: "실수를 발견했거나 자료를 변경하고 싶으십니까? 걱정하지 마세요. 앱 전체에서 편집 아이콘을 찾아 콘텐츠를 변경할 수 있습니다. %TPL_NAME%을(를) 개발할 때 원하는 만큼 편집 기능을 사용할 수 있습니다.",
				content5Div1: "%TPL_NAME%은(는) 저장된 초기에는 비공개 상태입니다. 다른 사용자와 공유하려면 '공유' 버튼을 사용합니다. 모든 사용자가 %TPL_NAME%에 접근할 수 있도록 공개적으로 공유할 수 있습니다.",
				content5Div2: "계정에 따라, %TPL_NAME%을(를) 기관 구성원과만 공유하고 다른 사용자는 접근할 수 없도록 하는 옵션이 있을 수도 있습니다.",
				content6Div1: "홈 섹션의 제목은 저널의 제목이 됩니다. 홈 섹션은 스토리의 '커버 페이지'에 해당합니다. 홈 섹션 제목은 사용자가 저널을 탐색할 때 계속 표시됩니다.",
				content6Div2: "%LAYOUT_TITLE%은(는) 꼭 텍스트만이어야 할 필요는 없습니다. 사진과 비디오를 포함하여 스토리를 생동감 있게 표현하고 긴 텍스트 섹션을 나눠보세요!"
			},
			landing: {
				lblAdd: "맵 저널을 어떻게 부르고 싶으신가요?",
				phAdd: "제목을 입력하세요...",
				lblOR: "또는",
				lblHelp: "둘러보기"
			},
			firstAddSplash: {
				thisis: "이것은",
				lblMain: "이는 %BR% 기본 단계입니다."
			}
        }
    })
);
