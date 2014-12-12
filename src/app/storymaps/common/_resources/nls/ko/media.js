define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "미디어",
				lblSelect2: "콘텐츠",
				lblMap: "맵",
				lblImage: "이미지",
				lblVideo: "동영상",
				lblExternal: "웹 페이지",
				disabled: "이 기능은 관리자가 사용하지 않도록 설정했습니다.",
				url: "이미지의 웹 주소를 수동으로 입력하려면",
				userLookup: "앨범 불러오기",
				notImplemented: "아직 구현되지 않았습니다.",
				noData: "공개 앨범을 찾을 수 없음"
			},
			imageSelector: {
				lblStep1: "서비스 선택",
				lblStep2: "미디어 선택",
				lblStep3: "구성"
			},
			imageSelectorHome: {
				explain: "소셜 미디어 또는 <br /> URL에서 직접 이미지를 로드합니다."
			},
			imageSelectorFlickr: {
				userInputLbl: "사용자 이름",
				signInMsg2: "사용자를 찾을 수 없습니다.",
				loadingFailed: "불러오기 실패"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook 사용자",
				rightHeader: "Facebook 페이지",
				pageExplain: "Facebook 페이지는 공용 브랜드/제품 또는 <b>esrigis</b>와 같은 유명 브랜드/제품입니다. 페이지 URL의 첫 번째 '/' 뒤에서 페이지 이름을 확인할 수 있습니다.",
				pageInputLbl: "페이지 이름",
				lookupMsgError: "페이지를 찾을 수 없음"
			},
			imageSelectorPicasa: {
				userInputLbl: "이메일 또는 Picasa/Google+ ID",
				signInMsg2: "계정을 찾을 수 없음",
				howToFind: "Picasa 또는 Google+ 계정 ID를 찾는 방법",
				howToFind2: "Picasa 또는 G+ 페이지의 첫 번째 '/'와 두 번째 '/' 사이의 숫자 복사"
			},
			videoSelectorCommon: {
				check: "확인",
				notFound: "비디오를 찾을 수 없음",
				found: "비디오를 찾음",
				select: "이 비디오 선택"
			},
			videoSelectorHome: {
				other: "기타"
			},
			videoSelectorYoutube: {
				url: "Youtube 비디오 URL",
				pageInputLbl: "사용자 이름",
				lookupMsgError: "사용자를 찾을 수 없습니다.",
				howToFind: "YouTube 사용자 이름을 찾는 방법",
				howToFind2: "동영상 아래에 사용자 이름 표시",
				found: "찾음",
				noData: "공개된 동영상 없음"
			},
			videoSelectorVimeo: {
				url: "Vimeo 비디오 URL"
			},
			videoSelectorOther: {
				explain1: "응용프로그램은 비디오 파일(예: avi, mpeg)를 재생할 수 없지만 기본 제공 플레이어(예: YouTube 또는 Vimeo)가 있는 호스팅 비디오 파일은 재생할 수 있습니다.",
				explain2: "대부분의 온라인 비디오 호스팅 서비스는 해당 피처를 제공하므로, 비디오를 포함할 옵션을 찾고 제공된 코드를 복사하고 %WEBPAGE%을(를) 사용해야 합니다.",
				explain3: "또는 직접 비디오를 호스팅하려면 %EXAMPLE% 등의 비디오 플레이어를 사용하는 HTML 페이지를 생성하고, 해당 페이지를 호스팅하고, %WEBPAGE%을(를) 사용할 수도 있습니다.",
				webpage: "웹 페이지 피처"
			},
			webpageSelectorHome: {
				lblUrl: "웹 페이지 URL",
				lblEmbed: "코드 포함",
				lblOR: "또는",
				lblError1: "오류가 발생했습니다. 두 개의 입력 필드 중 하나를 지우세요.",
				lblError2: "코드 포함에는 %IFRAMETAG% 하나만 포함 가능",
				configure: "구성"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "이미지 URL은 http://로 시작하고 .jpg 또는 .png로 끝나야 함",
				lblURLError: "이 이미지는 올바른 것 같지 않습니다. 이미지 파일(URL이 대개 .jpg 또는 .png로 끝남)에 대한 직접 링크를 지정하세요. 이미지를 포함하는 웹 페이지 링크는 작동하지 않습니다.",
				lblURLCheck: "이미지 확인 중...",
				lblLabel: "이미지 캡션",
				lblLabel1: "캡션",
				lblLabel2: "텍스트 가리키기",
				lblLabel3: "없음",
				lblLabelPH: "일부 텍스트 입력...",
				lblMaximize: "이미지 모서리에 최대화 버튼 포함",
				lblMaximizeHelp: "고화질 사진에만 권장됨",
				lblPosition: "위치",
				lblPosition1: "가운데",
				lblPosition2: "채우기",
				lblPosition3: "맞춤",
				lblPosition4: "늘이기",
				lblPosition5: "사용자 지정",
				tooltipDimension: "값은 'px' 또는 '%'로 지정할 수 있음",
				tooltipDimension2: "'px' 단위로 값을 지정해야 함",
				lblPosition2Explain: "(잘릴 수 있음)",
				lblPosition3Explain: "(잘리지 않음)",
				lblPosition3Explain2: "(너비는 항상 패널에 맞춤)",
				lblPosition4Explain: "(왜곡될 수 있음)",
				unloadLbl: "독자가 다른 위치를 탐색할 때 언로드",
				unloadHelp: "웹 페이지에 오디오 또는 비디오 미디어가 있는 경우 이 옵션을 선택 상태로 유지하여 독자가 다른 위치를 탐색할 때 콘텐츠가 재생되는 것을 방지할 수 있습니다. 독자가 스토리 사이를 진행할 때 사운드 트랙 재생을 유지하려면 옵션을 선택 해제합니다.<br />웹 페이지가 응용프로그램인 경우 독자가 돌아왔을 때 응용프로그램이 다시 로드되지 않도록 이 옵션을 선택 해제합니다."
			},
			editorActionGeocode: {
				lblTitle: "주소 또는 장소 찾기",
				mapMarkerExplain: "링크를 클릭하면 맵 표식이 표시됩니다."
			},
			editorActionMedia: {
				lblTitle: "기본 단계 콘텐츠 변경"
			},
			editorInlineMedia: {
				lblTitle: "이미지, 비디오 또는 웹 페이지 삽입"
			}
		}
	})
);
