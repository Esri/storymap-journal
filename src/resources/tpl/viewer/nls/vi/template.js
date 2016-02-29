define(
	 ({
		viewer: {
			common: {
				close: "Đóng"
			},
			loading: {
				step1: "Đang tải câu chuyện",
				step2: "Đang tải dữ liệu",
				step3: "Đang khởi tạo",
				loadBuilder: "Chuyển sang chế độ bộ thiết lập",
				long: "Map Journal đang khởi tạo",
				long2: "Cảm ơn bạn đã đợi",
				failButton: "Tải lại câu chuyện"
			},
			signin: {
				title: "Yêu cầu xác thực",
				explainViewer: "Vui lòng đăng nhập bằng một tài khoản trên %PORTAL_LINK% để truy cập câu chuyện.",
				explainBuilder: "Vui lòng đăng nhập bằng một tài khoản trên %PORTAL_LINK% để cấu hình câu chuyện."
			},
			errors: {
				boxTitle: "Đã xảy ra lỗi",
				invalidConfig: "Cấu hình không hợp lệ",
				invalidConfigNoApp: "Định danh Ứng dụng Lập bản đồ Web không được chỉ định trong index.html.",
				invalidConfigNoAppDev: "Không có mã định danh Ứng dụng Thành lập bản đồ Web được xác định trong thông số URL (?appid=). Trong chế độ phát triển, cấu hình id ứng dụng trong index.html bị bỏ qua.",
				unspecifiedConfigOwner: "Chủ sở hữu được ủy quyền chưa được cấu hình.",
				invalidConfigOwner: "Chủ sở hữu câu chuyện chưa được ủy quyền.",
				createMap: "Không thể tạo bản đồ",
				invalidApp: "%TPL_NAME% không tồn tại hoặc không thể truy cập được.",
				appLoadingFail: "Đã xảy ra sự cố, %TPL_NAME% không tải đúng.",
				notConfiguredDesktop: "Câu chuyện chưa được cấu hình.",
				notConfiguredMobile: "Bộ thiết lập %TPL_NAME% không được hỗ trợ với kích cỡ hiển thị này. Nếu có thể, hãy thay đổi kích cỡ trình duyệt của bạn để truy cập bộ thiết lập hoặc vui lòng thiết lập câu chuyện của bạn trên thiết bị có màn hình lớn hơn.",
				notConfiguredMobile2: "Vui lòng xoay thiết bị của bạn theo hướng ngang để sử dụng bộ thiết lập %TPL_NAME%.",
				notAuthorized: "Bạn không được phép truy cập vào câu chuyện này",
				notAuthorizedBuilder: "Bạn không có quyền sử dụng bộ thiết lập %TPL_NAME%.",
				noBuilderIE: "Bộ thiết lập không được hỗ trợ trên Internet Explorer trước phiên bản %VERSION%. %UPGRADE%",
				noViewerIE: "Câu chuyện này không được hỗ trợ trong Internet Explorer trước phiên bản %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Vui lòng cập nhật trình duyệt của bạn</a>.",
				mapLoadingFail: "Đã xảy ra lỗi, bản đồ không tải đúng.",
				signOut: "Đăng xuất"
			},
			mobileView: {
				tapForDetails: "Chạm nhẹ vào để biết chi tiết",
				clickForDetails: "Tìm hiểu thêm",
				swipeToExplore: "Vuốt để khám phá",
				tapForMap: "Chạm nhẹ để quay lại Bản đồ",
				clickForMap: "QUAY LẠI BẢN ĐỒ"
			},
			floatLayout: {
				scroll: "Cuộn"
			},
			sideLayout: {
				scroll: "Cuộn xuống để xem thêm!"
			},
			mainStage: {
				back: "Quay lại"
			},
			headerFromCommon: {
				storymapsText: "Story map",
				builderButton: "Chỉnh sửa",
				facebookTooltip: "Chia sẻ trên Facebook",
				twitterTooltip: "Chia sẻ trên Twitter",
				bitlyTooltip: "Tải liên kết ngắn",
				templateTitle: "Thiết lập tiêu đề mẫu",
				templateSubtitle: "Thiết lập phụ đề mẫu",
				share: "Chia sẻ",
				checking: "Kiểm tra nội dung câu chuyện của bạn",
				fix: "Khắc phục sự cố trong câu chuyện của bạn",
				noerrors: "Không phát hiện sự cố",
				tooltipAutoplayDisabled: "Tính năng này không khả dụng trong chế độ phát tự động",
				notshared: "Câu chuyện không được chia sẻ"
			},
			overviewFromCommon: {
				title: "Bản đồ Toàn cảnh"
			},
			legendFromCommon: {
				title: "Chú giải"
			},
			shareFromCommon: {
				copy: "Sao chép",
				copied: "Đã sao chép",
				open: "Mở",
				embed: "Nhúng vào trang web",
				embedExplain: "Sử dụng mã HTML sau để nhúng bài viết vào một trang web.",
				size: "Kích thước (chiều rộng/chiều cao):",
				autoplayLabel: "Chế độ phát tự động",
				autoplayExplain1: "Chế độ phát tự động sẽ chuyển qua câu chuyện của bạn theo khoảng thời gian định kỳ. Đây là tính năng lý tưởng đối với màn hình hiển thị nơi công cộng hoặc của ki-ốt, tuy nhiên, hãy lưu ý rằng trong các trường hợp khác, câu chuyện có thể trở nên khó đọc hơn. Tính năng này không được hỗ trợ trên các màn hình hiển thị nhỏ.",
				autoplayExplain2: "Khi chế độ này được kích hoạt, có các nút điều khiển để phát/tạm dừng câu chuyện và điều chỉnh tốc độ điều hướng.",
				linksupdated: "Liên kết đã được cập nhật!"
			}
        }
    })
);