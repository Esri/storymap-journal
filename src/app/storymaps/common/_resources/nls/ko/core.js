define(
	 ({
		commonCore: {
			common: {
				add: "추가",
				edit: "편집",
				save: "저장",
				next: "다음",
				cancel: "취소",
				back: "뒤로",
				apply: "적용",
				close: "닫기",
				open: "열기",
				start: "시작",
				loading: "불러오는 중",
				disabledAdmin: "이 기능은 관리자가 사용하지 않도록 설정했습니다.",
				width: "너비",
				height: "높이",
				create: "생성",
				yes: "예",
				no: "아니요",
				mystories: "내 스토리"
			},
			inlineFieldEdit: {
				editMe: "편집!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% 빌더",
				buttonSaving: "저장",
				buttonSaved: "저장됨",
				buttonShare: "공유",
				buttonSettings: "설정",
				buttonHelp: "도움말",
				buttonPreview: "스토리 보기",
				tooltipFirstSave: "저장하기 전까지 사용할 수 없습니다.",
				tooltipNotShared: "공유하기 전까지 사용할 수 없습니다.",
				tooltipNotShared2: "스토리가 비공유 상태이므로 사용자 본인만 접근할 수 있습니다.",
				noPendingChange: "보류 중인 변경 사항 없음",
				unSavedChangePlural: "보류 중인 변경 내용",
				closeWithPendingChange: "이 작업을 확인하시겠습니까? 변경 내용이 손실됩니다.",
				saveError: "저장하지 못했습니다. 다시 시도하세요.",
				status1: "스토리가 공유되지만 문제가 있음",
				status2: "스토리가 공유되지 않으며 문제가 있음",
				status3: "스토리가 공개 상태임",
				status4: "스토리가 내 기관 내에서 공유됨",
				status5: "스토리가 비공개 상태임",
				status6: "스토리가 아직 저장되지 않음",
				checking: "확인 중",
				fix: "수정"
			},
			saveError: {
				title: "스토리를 저장하는 중 오류 발생",
				err1Div1: "같은 이름을 가진 다른 항목이 이미 있으므로 스토리를 저장할 수 없습니다.",
				err1Div2: "스토리 제목을 수정한 후에 스토리를 저장하세요.",
				btnOk: "스토리 제목 편집"
			},
			saveErrorSocial: {
				title: "소셜 미디어 공유 업데이트",
				panel1: "소셜 미디어에서의 스토리의 외관이 향상되었지만 ArcGIS 웹 응용프로그램 항목 제목이 스토리 제목과 같지 않습니다.",
				panel1tooltip: "제목, 요약 및 섬네일 이미지를 정의하면 스토리가 다음과 같이 보입니다:",
				panel2:	"소셜 미디어에서 사용할 제목:",
				panel2q1: "스토리 제목(권장됨)",
				panel2q1tooltip: "이 옵션을 선택하면 항목 제목이 스토리 제목과 일치하도록 수정되며 빌더에서의 후속 변경 사항이 동기화됩니다.",
				panel2q2: "항목 제목",
				panel3: "소셜 미디어에서의 스토리의 외관을 더욱 향상시키려면 ${MYSTORIES}을(를) 사용하여 요약 및 섬네일 이미지를 추가합니다.",
				panel4: "이 스토리에 대해 다시 경고 안 함"
			},
			share: {
				shareTitle: "스토리 공유",
				preview: "미리 보기",
				viewlive: "스토리 보기",
				btnPrivate: "비공개",
				btnPrivateTooltip: "사용자 본인만 스토리를 볼 수 있음",
				btnOrg: "기관",
				btnOrgTooltip: "내 기관의 구성원만 스토리를 볼 수 있음",
				btnPublic: "공개",
				btnPublicTooltip: "모든 사람이 스토리를 볼 수 있음",
				loadingMessage: "스토리에서 문제를 확인하는 중",
				viewToggle1: "스토리 콘텐츠 보기",
				viewToggle2: "스토리 콘텐츠 닫기",
				socialize: "소셜 미디어에서 공유",
				statusPrivate: "스토리가 비공개 상태이므로 사용자 본인만 볼 수 있습니다.",
				statusError: "스토리 콘텐츠에 독자가 확인 가능한 문제가 있습니다. 아래에서 이러한 문제를 확인하고 해결할 수 있습니다.",
				statusNoErrPrivate: "준비가 되면 스토리를 공유하세요.",
				mystoriesinvite: "모든 스토리 관리",
				notavailable1: "죄송합니다. 이 응용프로그램은 %PRODUCT%에서 호스팅되지 않으므로 빌더에서는 스토리를 공유할 수 없습니다.",
				notavailable2: "죄송합니다. 이 버전의 Portal for ArcGIS에는 빌더에서 스토리를 공유할 수 없습니다(10.4 이상 필요).",
				notavailable3: "%LINK%에서 이 스토리를 공유할 수 있습니다.",
				notavailable4: "내 스토리",
				notavailable5: "항목 페이지",
				notavailable6: "죄송합니다. 개발 모드에서는 이 피처가 완전히 지원되지는 않습니다. 배포 시나리오에 따라 배포 시에 이 피처가 지원될 수도 있습니다.",
				notavailable7: "%MYCONTENT%에 방문하여 내 스토리에 사용된 맵과 레이어도 공유되는지 확인하세요.",
				notavailable8: "내 콘텐츠",
				mystoriesinvite2: "소셜 미디어에서의 스토리의 외관을 더욱 향상시키려면 ${MYSTORIES}을(를) 사용하여 요약 및 섬네일 이미지를 추가합니다."
			},
			settings: {
				header: "설정",
				tabError: "오류가 있는지 모든 탭을 확인하세요."
			},
			settingsLayout: {
				title: "레이아웃",
				explain: "어떤 레이아웃을 사용하시겠습니까?",
				explainInit: "언제든지 설정 대화상자에서 레이아웃을 변경할 수 있습니다.",
				viewExample: "실시간 예 보기"
			},
			settingsTheme: {
				title: "테마"
			},
			settingsHeader: {
				title: "헤더",
				logoEsri: "Esri 로고",
				logoNone: "로고 없음",
				logoCustom: "사용자 지정 로고",
				logoCustomPlaceholder: "URL(최대 250x50픽셀)",
				logoCustomTargetPlaceholder: "클릭 이동 링크",
				logoSocialExplain: "머리글 링크를 사용자 정의합니다.",
				logoSocialText: "텍스트",
				logoSocialLink: "링크",
				lblSmallHeader: "압축 머리글 사용(부제목 없음)"
			},
			header: {
				title: "%TPL_NAME% 제목 편집",
				subtitle: "%TPL_NAME% 부제목 편집"
			}
		}
	})
);
