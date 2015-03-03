define(
	 ({
		builder: {
			layouts: {
				mainStage: "Sân khấu Chính",
				sideTitle: "Bảng điều khiển Bên",
				sideDescr: "Bố cục cho một câu chuyện tỉ mỉ bằng chữ vượt trội nhờ kết hợp hình ảnh, video và bản đồ của bạn trong một thông điệp tập trung và rõ ràng.",
				floatTitle: "Bảng điều khiển Nổi",
				floatDescr: "Một bố cục tập trung vào đồ họa của bạn cùng với việc cho phép một bảng điều khiển dạng văn bản ngắn trong suốt để giúp kể câu chuyện."
			},
			common: {
				lblStatus1: "Đã xuất bản",
				lblStatus2: "Bản thảo",
				lblStatus3: "Đã ẩn"
			},
			settingsLayoutOptions: {
				title: "Tùy chọn bố cục",
				cfgLeft: "Trái",
				cfgRight: "Phải",
				cfgSmall: "Nhỏ",
				cfgMedium: "Trung bình",
				cfgLarge: "Lớn",
				socialLinksLabel: "Hiển thị liên kết chia sẻ ở cuối mỗi phần",
				socialLinksDescr: "Điều này cho phép người đọc tham chiếu và thúc đẩy các phần cụ thể của %TPL_NAME%. Ví dụ: nếu bạn sử dụng một biểu tượng trong phần chia sẻ, người đọc sẽ dừng ở phần %TPL_NAME% cụ thể đó chứ không phải là khi bắt đầu câu chuyện của bạn. Người đọc có thể sử dụng liên kết truyền thông xã hội trong phần tiêu đề để thúc đẩy toàn bộ %TPL_NAME% (tab đầu trang) và dừng tại thời điểm bắt đầu %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Phông chữ",
				defaultLbl: "Mặc định",
				sectionTitleLbl: "Tiêu đề phần",
				sectionContentLbl: "Nội dung phần"
			},
			initPopup: {
				title: "Chào mừng đến với"
			},
			addEditPopup: {
				disabled: "Thêm Phần bị vô hiệu hóa bởi vì đã đạt số lượng phần được tối đa.",
				titleAdd: "Thêm Phần",
				titleAddHome: "Thêm Phần Trang chủ",
				titleEdit: "Chỉnh sửa Phần",
				step: "Bước",
				stepMainStageExplain: "Nội dung Sân khấu Chính",
				stepPanelExplain: "Nội dung",
				stepMainStageNextTooltip: "Nhập tiêu đề phần và chọn nội dung Sân khấu Chính",
				stepMainStageNextTooltip2: "Chọn nội dung Sân khấu chính",
				step2NextTooltip: "Nhập tiêu đề phần và nội dung %LAYOUT-TYPE%",
				stepNextTooltipNext: "để chuyển sang bước tiếp theo",
				stepNextTooltipAdd: "để thêm phần",
				firstAddExplain: "Phần đầu này là Mục Trang chủ của bạn, hãy xem đó là ' trang bìa' cho câu chuyện của bạn. Tiêu đề bạn vừa xác định sẽ được hiển thị bằng phông chữ lớn.",
				firstAddLeanMore: "Tìm hiểu thêm",
				titlePlaceholder: "Tiêu đề phần..."
			},
			addEditViewText: {
				editorPlaceholder: "Thêm văn bản, liên kết và đồ họa nhỏ ở đây.",
				editorActionsTitle: "Hành động trong Sân khấu Chính",
				editorActionsHelpDescr: "Sử dụng các điều khiển này để tạo ra các liên kết sẽ thay đổi giai đoạn chính. Ví dụ: khi người đọc bấm vào một liên kết, bạn có thể muốn phóng to bản đồ đến một vị trí cụ thể, hiển thị một bản đồ web hay hiển thị một hình ảnh.",
				mainStageDisabled: "Các hành động của Sân khấu chính được hiển thị khi trình biên tập được tối đa hóa"
			},
			organizePopup: {
				title: "Tổ chức",
				lblHeader: "Kéo và thả các phần để tổ chức nội dung của bạn.",
				lblColTitle: "Tiêu đề",
				lblColPubDate: "Ngày xuất bản",
				lblColStatus: "Trạng thái",
				checkDisplayReverse: "Hiển thị các phần theo thứ tự đảo ngược",
				btnApplyWarning: "Xác nhận xóa (các) phần %NB%",
				deleteTooltip: "Xóa",
				firstSectionExplain: "(Không thể di chuyển phần trang chủ)",
				exportMainStage: "Nội dung của Sân khấu chính",
				exportPanel: "Nội dung của Bảng điều khiển",
				exportActions: "Hành động của Sân khấu chính"
			},
			exportData: {
				btn: "Xuất nội dung",
				tooltip: "Xuất nội dung sẽ cho phép bạn xem và tạo bản sao lưu nội dung nếu bạn vô tình xóa nó đi. Chỉ cần sao chép và dán nội dung từ trang vào bất kỳ bộ xử lý văn bản nào."
			},
			help: {
				lblHelp: "Trợ giúp",
				lblAdd: "Thêm Phần",
				lblSettings: "Thiết lập",
				lblOrga: "Tổ chức nội dung",
				lblEdit: "Các chỉnh sửa",
				lblPublish: "Chia sẻ",
				lblTips: "Mẹo",
				lblMore: "Bạn muốn biết thêm?",
				lblLink: "Truy cập trang web Esri Story Maps.",
				content1Div1: "Bạn có thể tích hợp một loạt phong cách khi xây dựng câu chuyện của mình. <strong>%LAYOUT_TITLE%</strong> thường giữ văn bản, hình ảnh và video trong khi bản đồ của bạn có xu hướng đi đến <strong>Sân khấu Chính</strong>. Tuy nhiên, %TPL_NAME% cũng cho phép bạn mô tả các hình ảnh, biểu đồ và video trong sân khấu chính.",
				content1Div2: "Thêm các phần cho phép bạn thực sự tuỳ chỉnh trải nghiệm kể chuyện của mình. Khi người đọc cuộn qua văn bản %LAYOUT_TITLE%, một bản đồ về Sân khấu Chính có thể quay hoặc phóng to đến các điểm chính hoặc các bản đồ và hình ảnh mới có thể tự động chuyển đổi để hỗ trợ thông báo của bạn.",
				content2Div1: "Hộp thoại Thiết lập là nơi bạn có thể thay đổi giao diện của %TPL_NAME%. Bạn có thể thay đổi bố cục, chọn phối màu khác, thay đổi phông chữ văn bản, v.v.",
				content2Div2: "Bạn cũng có thể thay thế logo Esri bằng logo của riêng bạn để phản ánh thương hiệu của bạn. Bạn cũng có thể chỉ định trang web sẽ được khởi chạy nếu người đọc bấm vào logo của bạn, để họ có thể nhận thêm thông tin.",
				content3Div1: "Nội dung của bạn được tổ chức thành các phần. Bạn có thể có nhiều phần như bạn muốn (xem chúng là các chương nhỏ). Điều quan trọng là các chương đó phải liền mạch; trong Tổ chức bạn có thể sắp xếp lại hoặc xóa các phần như bạn muốn.",
				content4Div1: "Phát hiện một lỗi hoặc muốn thay đổi tài liệu của bạn? Đừng lo lắng. Hãy tìm biểu tượng chỉnh sửa trong ứng dụng để thay đổi nội dung của bạn. Bạn có thể sử dụng các chức năng chỉnh sửa nhiều lần khi bạn phát triển %TPL_NAME% của bạn!",
				content5Div1: "Khi bạn lưu %TPL_NAME%, ban đầu nó là riêng tư. Sử dụng nút Chia sẻ để chia sẻ với người khác. Bạn có thể chia sẻ %TPL_NAME% của mình công khai để mọi người đều có thể truy cập.",
				content5Div2: "Tùy thuộc vào tài khoản của bạn, bạn cũng có thể có tùy chọn chỉ chia sẻ %TPL_NAME% với những người trong tổ chức của bạn, để người khác không thể truy cập vào.",
				content6Div1: "Tiêu đề của phần Trang chủ cũng là tiêu đề bài viết của bạn; coi phần Trang chủ là 'trang bìa' cho câu chuyện của bạn. Tiêu đề Phần Trang chủ sẽ vẫn hiển thị khi người đọc điều hướng Bài viết.",
				content6Div2: "%LAYOUT_TITLE% của bạn không nhất thiết chỉ là văn bản, xem xét hình ảnh và video kèm theo để giúp mang lại câu chuyện sống và để ngắt các phần dài của văn bản!"
			},
			landing: {
				lblAdd: "Bạn muốn gọi Map Journal của bạn là gì?",
				phAdd: "Nhập tiêu đề của bạn...",
				lblOR: "Hoặc",
				lblHelp: "Tham quan một Hành trình"
			},
			firstAddSplash: {
				thisis: "Đây là",
				lblMain: "Đây là Sân khấu Chính %BR%"
			}
        }
    })
);
