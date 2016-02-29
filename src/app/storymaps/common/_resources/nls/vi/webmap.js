define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Bản đồ",
				lblLocation: "Vị trí",
				lblContent: "Nội dung",
				lblPopup: "Cửa sổ pop-up",
				lblControls: "Ứng dụng phụ",
				lblOverview: "Bản đồ Toàn cảnh",
				lblLegend: "Chú giải",
				lblGeocoder: "Trình Tìm kiếm Địa chỉ hoặc Địa điểm",
				tooltipGeocoder: "Cho phép người dùng tìm địa chỉ và địa điểm trên các bản đồ của bạn.",
				loadingTitle: "Đang tải tiêu đề",
				entry: "Mục nhập",
				entries: "Các mục nhập",
				section: "Phần",
				sections: "Các phần",
				and: "và",
				action: "Hành động trong phần",
				actions: "Hành động trong các phần",
				originalWebmap: "Bản đồ được dùng để xuất bản %TPL_NAME%",
				browseMaps: "Chọn bản đồ",
				createMap: "Tạo bản đồ",
				current: "Bản đồ hiện tại",
				select: "Chọn hoặc tạo bản đồ",
				newMap: "Bản đồ mới được chọn",
				newCreatedMap: "Bản đồ mới được tạo",
				webmapDefault: "Mặc định bản đồ",
				customCfg: "Cầu hình tùy chỉnh",
				tooltipLocation: "Xác định vị trí bản đồ này sẽ hiển thị.",
				tooltipContent: "Xác định các lớp nhìn thấy được.",
				tooltipPopup: "Chọn một cửa sổ pop-up sẽ được mở khi bản đồ này được hiển thị.",
				tooltipOverview: "Hiển thị một bản đồ toàn cảnh nhỏ cùng với bản đồ chính.",
				tooltipLegend: "Hiển thị chú giải bản đồ trên bản đồ, hữu ích khi bản đồ có nhiều lớp và biểu tượng.",
				mapCfgInvite: "Sử dụng các điều khiển này để cấu hình bản đồ của bạn",
				lblLocationAlt: "Được kế thừa từ bản đồ đầu tiên",
				tooltipLocationAlt: "Vị trí của bản đồ này được đồng bộ hóa với bản đồ đầu tiên trong chuỗi. Để thay đổi hành vi này cho các chuỗi của bạn, đi tới Thiết lập > Tùy chọn Bản đồ."
			},
			configure: {
				btnReset: "Thiết lập lại",
				btnCancel: "Hủy",
				tocTitle: "Nội dung bản đồ",
				tocExplain: "Chọn các lớp sẽ được hiển thị.",
				tocNoData: "Không có lớp nào có thể được cấu hình.",
				tocSave: "Lưu nội dung bản đồ",
				extentTitle: "Vị trí bản đồ",
				extentExplain: "Quay và phóng to bản đồ để xác định giao diện của bản đồ cho người đọc của bạn.",
				extentSave: "Lưu vị trí Bản đồ",
				popupTitle: "Cửa sổ pop-up bản đồ",
				popupExplain: "Bấm vào một đối tượng để mở cửa sổ popup mà bạn muốn hiển thị.",
				popupSave: "Lưu cấu hình cửa sổ pop-up",
				hintNavigation: "Điều hướng bản đồ bị tắt."
			},
			editor: {
				loading: "Vui long chờ trong khi trình biên tập bản đồ đang được tải",
				newTitle: "Tạo bản đồ mới",
				editTitle: "Chỉnh sửa bản đồ",
				titleLbl: "Tiêu đề",
				titlePh: "Tiêu đề bản đồ...",
				folderLbl: "Bản đồ sẽ được tạo trong cùng thư mục với câu chuyện.",
				creating: "Đang tạo bản đồ",
				saving: "Đang lưu bản đồ",
				success: "Bản đồ đã được lưu",
				successCreate: "Bản đồ đã được tạo",
				cancelTitle: "Bạn có muốn hủy mọi thay đổi chưa được lưu không?",
				errorDuplicate: "Bạn đã có bản đồ với tiêu đề đó",
				errorCreate: "Không thể tạo bản đồ. Vui lòng thử lại.",
				errorSave: "Không thể lưu bản đồ. Vui lòng thử lại.",
				notavailable1: "Xin lỗi, tạo hoặc chỉnh sửa bản đồ không được hỗ trợ trong Firefox do hạn chế kỹ thuật. Có thể bạn sẽ muốn xây dựng câu chuyện của mình bằng cách sử dụng trình duyệt web khác hoặc sử dụng cách khắc phục sau.",
				notavailable2: "Xin lỗi, tạo hoặc chỉnh sửa bản đồ không được hỗ trợ do ứng dụng story map không được lưu trữ trong %PRODUCT%. Vui lòng liên hệ người quản trị ArcGIS của bạn để biết thêm thông tin.",
				notavailable3: "Xin lỗi, tạo hoặc chỉnh sửa bản đồ không được hỗ trợ trong phiên bản Portal for ArcGIS này (yêu cầu phiên bản 10.4 trở lên). Vui lòng liên hệ người quản trị ArcGIS của bạn để biết thêm thông tin.",
				notavailable4: "Bạn có thể tạo bản đồ bằng cách sử dụng %MV%, rồi quay lại đây để thêm vào câu chuyện của bạn.",
				notavailable5: "Bạn có thể chỉnh sửa bản đồ bằng cách sử dụng %MV%, rồi quay lại đây và %áp dụng% các thay đổi của bạn.",
				notavailable6: "trình xem bản đồ",
				notavailable7: "tải lại bản đồ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Tổ chức của tôi",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Nội dung của tôi",
					favoritesLabel: "Yêu thích của tôi"
				},
				title: "Chọn bản đồ",
				searchTitle: "Tìm kiếm",
				ok: "Ok",
				cancel: "Hủy",
				placeholder: "Nhập cụm từ tìm kiếm hoặc ID bản đồ web..."
			}
		}
	})
);
