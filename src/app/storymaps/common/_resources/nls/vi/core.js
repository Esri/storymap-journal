define(
	 ({
		commonCore: {
			common: {
				add: "Thêm",
				edit: "Chỉnh sửa",
				save: "Lưu",
				next: "Tiếp theo",
				cancel: "Hủy",
				back: "Quay lại",
				apply: "Áp dụng",
				close: "Đóng",
				open: "Mở",
				start: "Bắt đầu",
				loading: "Đang tải",
				disabledAdmin: "Người quản trị đã vô hiệu hóa tính năng này",
				width: "Chiều rộng",
				height: "Chiều cao",
				create: "Tạo",
				yes: "Có",
				no: "Không",
				mystories: "Câu chuyện của Tôi"
			},
			inlineFieldEdit: {
				editMe: "Chỉnh sửa tôi!"
			},
			builderPanel: {
				panelHeader: "Bộ thiết lập %TPL_NAME%",
				buttonSaving: "Đang lưu",
				buttonSaved: "Đã lưu",
				buttonShare: "Chia sẻ",
				buttonSettings: "Thiết lập",
				buttonHelp: "Trợ giúp",
				buttonPreview: "Xem câu chuyện",
				tooltipFirstSave: "Ứng dụng này không khả dụng cho đến khi bạn lưu.",
				tooltipNotShared: "Ứng dụng này không khả dụng cho đến khi bạn chia sẻ.",
				tooltipNotShared2: "Câu chuyện của bạn không được chia sẻ, chỉ có bạn mới được truy cập câu chuyện này.",
				noPendingChange: "Không có thay đổi chờ xử lý",
				unSavedChangePlural: "Thay đổi chờ xử lý",
				closeWithPendingChange: "Bạn có chắc chắn muốn xác nhận hành động này không? Các thay đổi của bạn sẽ bị mất.",
				saveError: "Lưu thất bại, vui lòng thử lại",
				status1: "Câu chuyện được chia sẻ nhưng có sự cố",
				status2: "Câu chuyện không được chia sẻ nhưng có sự cố",
				status3: "Câu chuyện ở chế độ công khai",
				status4: "Câu chuyện được chia sẻ trong tổ chức của bạn",
				status5: "Câu chuyện ở chế độ riêng tư",
				status6: "Câu chuyện chưa được lưu",
				checking: "Đang kiểm tra",
				fix: "Sửa"
			},
			saveError: {
				title: "Lỗi khi lưu câu chuyện",
				err1Div1: "Không thể lưu câu chuyện do bạn đã có mục khác có cùng tên.",
				err1Div2: "Vui lòng sửa đổi tiêu đề câu chuyện của bạn, sau đó lưu lại.",
				btnOk: "Chỉnh sửa tiêu đề câu chuyện"
			},
			saveErrorSocial: {
				title: "Cập nhật chia sẻ trên mạng xã hội",
				panel1: "Hình dạng câu chuyện của bạn trên mạng xã hội đã được cải thiện, tuy nhiên, tiêu đề mục ứng dụng web ArcGIS của bạn không giống với tiêu đề câu chuyện của bạn.",
				panel1tooltip: "Bằng cách xác định tiêu đề, phần tổng kết và hình thu nhỏ, câu chuyện của bạn sẽ trông như thế này:",
				panel2:	"Bạn muốn sử dụng tiêu đề nào trên mạng xã hội:",
				panel2q1: "Tiêu đề câu chuyện (khuyến nghị)",
				panel2q1tooltip: "Bằng cách chọn tùy chọn này, tiêu đề mục của bạn sẽ được điều chỉnh cho khớp với tiêu đề câu chuyện của bạn và các thay đổi tiếp theo trong bộ thiết lập sẽ được đồng bộ hóa.",
				panel2q2: "Tiêu đề mục",
				panel3: "Để cải thiện hơn nữa hình dạng của câu chuyện của bạn trên mạng xã hội, hãy sử dụng ${MYSTORIES} để thêm phần tổng kết và hình thu nhỏ.",
				panel4: "Đừng cảnh báo lại đối với câu chuyện này"
			},
			share: {
				shareTitle: "Chia sẻ câu chuyện của bạn",
				preview: "Xem trước",
				viewlive: "Xem câu chuyện",
				btnPrivate: "Riêng tư",
				btnPrivateTooltip: "Chỉ có bạn được quyền xem câu chuyện",
				btnOrg: "Tổ chức",
				btnOrgTooltip: "Chỉ có thành viên tổ chức của bạn được quyền xem câu chuyện",
				btnPublic: "Công khai",
				btnPublicTooltip: "Ai cũng có thể xem câu chuyện",
				loadingMessage: "Kiểm tra câu chuyện của bạn để phát hiện sự cố",
				viewToggle1: "Hiển thị nội dung câu chuyện",
				viewToggle2: "Đóng nội dung câu chuyện",
				socialize: "Xã hội hóa",
				statusPrivate: "Câu chuyện của bạn đang ở chế độ riêng tư, chỉ có bạn được quyền xem câu chuyện.",
				statusError: "Có sự cố trong nội dung câu chuyện của bạn mà người đọc sẽ nhận thấy. Bạn có thể xác định và sửa các sự cố này bên dưới.",
				statusNoErrPrivate: "Hãy chia sẻ câu chuyện của bạn khi bạn đã sẵn sàng!",
				mystoriesinvite: "Quản lý tất cả các câu chuyện của bạn",
				notavailable1: "Xin lỗi, chia sẻ câu chuyện của bạn từ Bộ thiết lập không được hỗ trợ do ứng dụng story map không được lưu trữ trong %PRODUCT%.",
				notavailable2: "Xin lỗi, chia sẻ câu chuyện của bạn từ Bộ thiết lập không được hỗ trợ trên phiên bản Portal for ArcGIS này (yêu cầu phiên bản 10.4 trở lên).",
				notavailable3: "Bạn có thể chia sẻ câu chuyện từ %LINK%.",
				notavailable4: "Câu chuyện của Tôi",
				notavailable5: "trang mục của câu chuyện",
				notavailable6: "Xin lỗi, tính năng này không được hỗ trợ đầy đủ trong chế độ phát triển. Tùy theo kịch bản triển khai của bạn, tính năng này có thể được hỗ trợ khi được triển khai.",
				notavailable7: "Hãy bảo đảm truy cập %MYCONTENT% để xác nhận bản đồ và lớp được sử dụng trong câu chuyện của bạn cũng được chia sẻ.",
				notavailable8: "Nội dung của tôi",
				mystoriesinvite2: "Để cải thiện hình dạng của câu chuyện của bạn trên mạng xã hội, hãy sử dụng ${MYSTORIES} để thêm phần tổng kết và hình thu nhỏ."
			},
			settings: {
				header: "Thiết lập",
				tabError: "Vui lòng kiểm tra lỗi trong tất cả các tab"
			},
			settingsLayout: {
				title: "Bố cục",
				explain: "Bạn muốn sử dụng bố cục nào?",
				explainInit: "Bạn có thể thay đổi bố cục bất kỳ lúc nào từ hộp thoại thiết lập.",
				viewExample: "Xem ví dụ trực tiếp"
			},
			settingsTheme: {
				title: "Chủ đề"
			},
			settingsHeader: {
				title: "Đầu trang",
				logoEsri: "Logo Esri",
				logoNone: "Không có logo",
				logoCustom: "Logo tùy chỉnh",
				logoCustomPlaceholder: "URL (tối đa 250x50 điểm ảnh)",
				logoCustomTargetPlaceholder: "Bấm vào liên kết",
				logoSocialExplain: "Tùy chỉnh liên kết đầu mục.",
				logoSocialText: "Văn bản",
				logoSocialLink: "Liên kết",
				lblSmallHeader: "Sử dụng đầu trang ngắn gọn (không có phụ đề)"
			},
			header: {
				title: "Chỉnh sửa tiêu đề %TPL_NAME% của bạn",
				subtitle: "Chỉnh sửa phụ đề %TPL_NAME% của bạn"
			}
		}
	})
);
