define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Phương tiện",
				lblSelect2: "Nội dung",
				lblMap: "Bản đồ",
				lblImage: "Hình ảnh",
				lblVideo: "Video",
				lblExternal: "Trang web",
				disabled: "Người quản trị đã vô hiệu hóa tính năng này",
				url: "Để nhập địa chỉ trang web của một hình ảnh theo cách thủ công",
				userLookup: "Tải album",
				notImplemented: "Chưa được thực hiện.",
				noData: "Không tìm thấy album công khai nào"
			},
			imageSelector: {
				lblStep1: "Chọn dịch vụ",
				lblStep2: "Chọn phương tiện của bạn",
				lblStep3: "Cấu hình"
			},
			imageSelectorHome: {
				explain: "Tải ảnh từ mạng xã hội <br /> hoặc trực tiếp từ URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Tên đăng nhập",
				signInMsg2: "Không tìm thấy người dùng",
				loadingFailed: "Tải thất bại"
			},
			imageSelectorFacebook: {
				leftHeader: "Người dùng Facebook",
				rightHeader: "Trang Facebook",
				pageExplain: "Trang Facebook là một thương hiệu/sản phẩm công cộng hay nổi tiếng như <b>esrigis</b>. Bạn có thể lấy tên trang sau '/' đầu tiên trong URL trang.",
				pageInputLbl: "Tên trang",
				lookupMsgError: "Không tìm thấy trang"
			},
			imageSelectorPicasa: {
				userInputLbl: "ID Email hoặc ID Picasa/Google+",
				signInMsg2: "Không tìm thấy tài khoản",
				howToFind: "Cách tìm ID tài khoản Picasa hoặc Google+",
				howToFind2: "Sao chép chữ số giữa '/' đầu tiên và thứ hai của bất kỳ trang Picasa hoặc G+ nào"
			},
			videoSelectorCommon: {
				check: "Kiểm tra",
				notFound: "Không tìm thấy video",
				found: "Đã tìm thấy video",
				select: "Chọn video này"
			},
			videoSelectorHome: {
				other: "Khác"
			},
			videoSelectorYoutube: {
				url: "URL của một video trên Youtube",
				pageInputLbl: "Tên đăng nhập",
				lookupMsgError: "Không tìm thấy người dùng",
				howToFind: "Cách tìm tên đăng nhập Youtube",
				howToFind2: "Tên đăng nhập được hiển thị dưới video",
				found: "Tìm thấy",
				noData: "Không tìm thấy video công khai"
			},
			videoSelectorVimeo: {
				url: "URL của một video trên Vimeo"
			},
			videoSelectorOther: {
				explain1: "Ứng dụng không thể phát các video thô (ví dụ: avi, mpeg) nhưng nó có thể phát các tệp video được lưu trữ có trình phát tích hợp (ví dụ: YouTube hoặc Vimeo).",
				explain2: "Hầu hết dịch vụ lưu trữ video trực tuyến đều cung cấp tính năng này, bạn cần phải tìm tùy chọn để nhúng video, sao chép mã đã cung cấp và sử dụng %WEBPAGE%.",
				explain3: "Ngoài ra, nếu bạn muốn tự lưu trữ video, bạn có thể tạo một trang HTML sử dụng một trình phát video như %EXAMPLE%, lưu trữ trang đó và cũng sử dụng %WEBPAGE%.",
				webpage: "Tính năng của trang web"
			},
			webpageSelectorHome: {
				lblUrl: "URL trang web",
				lblEmbed: "Mã nhúng",
				lblOR: "HOẶC",
				lblError1: "Lỗi, xóa một trong hai trường nhập.",
				lblError2: "Mã nhúng chỉ có thể chứa một %IFRAMETAG%",
				configure: "Cấu hình"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "URL Hình ảnh nên bắt đầu bằng http:// và kết thúc bằng .jpg hoặc .png",
				lblURLError: "Hình ảnh này dường như không hợp lệ. Vui lòng chỉ định một liên kết trực tiếp đến tệp hình ảnh (URL của bạn thường sẽ kết thúc bằng .jpg hoặc .png). Các liên kết đến trang web chứa một hình ảnh sẽ không hoạt động.",
				lblURLCheck: "Đang kiểm tra hình ảnh...",
				lblLabel: "Chú thích Hình ảnh",
				lblLabel1: "Chú thích",
				lblLabel2: "Di chuột qua văn bản",
				lblLabel3: "Không có",
				lblLabelPH: "Nhập một số chữ...",
				lblMaximize: "Bao gồm một nút phóng đại ở góc hình ảnh",
				lblMaximizeHelp: "Chỉ dành cho hình ảnh chất lượng cao",
				lblPosition: "Vị trí",
				lblPosition1: "Căn giữa",
				lblPosition2: "Tô",
				lblPosition3: "Đặt vừa",
				lblPosition4: "Kéo giãn",
				lblPosition5: "Tùy chỉnh",
				tooltipDimension: "Giá trị có thể được chỉ định theo 'px' hoặc '%'",
				tooltipDimension2: "Giá trị phải được chỉ định bằng 'px'",
				lblPosition2Explain: "(có thể xén)",
				lblPosition3Explain: "(không xén)",
				lblPosition3Explain2: "(chiều rộng sẽ luôn luôn vừa với bảng điều khiển)",
				lblPosition4Explain: "(có thể bóp méo)",
				unloadLbl: "Không tải khi người đọc điều hướng ra ngoài",
				unloadHelp: "Nếu Trang Web có phương tiện âm thanh hoặc video, tiếp tục chọn tùy chọn này để dừng phát nội dung đó khi người đọc điều hướng ra ngoài. Ví dụ: bỏ chọn để tiếp tục phát rãnh âm thanh khi trình đọc chuyển qua câu chuyện.<br />Nếu Trang Web là một ứng dụng, bỏ chọn tùy chọn này để ứng dụng không tải lại nếu người đọc quay lại."
			},
			editorActionGeocode: {
				lblTitle: "Định vị một địa chỉ hoặc địa điểm",
				mapMarkerExplain: "Người dùng sẽ thấy một điểm đánh dấu trên bản đồ khi bấm vào liên kết"
			},
			editorActionMedia: {
				lblTitle: "Thay đổi nội dung Tầng Chính"
			},
			editorInlineMedia: {
				lblTitle: "Chèn hình ảnh, video hoặc trang web"
			}
		}
	})
);
