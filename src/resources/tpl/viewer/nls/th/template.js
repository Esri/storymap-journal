define(
	 ({
		viewer: {
			common: {
				close: "ปิด"
			},
			loading: {
				step1: "กำลังโหลดเรื่องราว",
				step2: "กำลังโหลดข้อมูล",
				step3: "กำลังดำเนินการ",
				loadBuilder: "ปรับเปลี่ยนการสร้าง",
				long: "แมพเจอร์นัลกำลังเริ่ม",
				long2: "ขอบคุณที่รอ",
				failButton: "โหลดเรื่องราวอีกครั้ง"
			},
			signin: {
				title: "ต้องการยอมรับ",
				explainViewer: "กรุณาเข้าระบบด้วยบัญชีบน %PORTAL_LINK% เพื่อเข้าใช้งานเรื่องราว",
				explainBuilder: "กรุณาลงชื่อด้วยบัญชีบน  %PORTAL_LINK% เพื่อปรับแต่งเรื่องราว"
			},
			errors: {
				boxTitle: "เกิดข้อผิดพลาด",
				invalidConfig: "ข้อผิดพลาดร้ายแรง: การตั้งค่าที่ไม่ถูกต้อง",
				invalidConfigNoApp: "ข้อผิดพลาดร้ายแรง: เว็บแผนที่ระบุการใช้งานไม่ได้ระบุใน index.html",
				invalidConfigNoAppDev: "ไม่ได้ระบุตัวโปรแกรมการสร้างแผนที่บนเว็บ ไว้ในพารามิเตอร์ URL (?appid = หรือ ?Webmap =) ในโหมดการพัฒนา การกำหนดค่า appid  และ แผนที่บนเว็บใน index.html จะถูกละเลย",
				unspecifiedConfigOwner: "ไม่มีการกำหนดอำนาจในการปรับแต่ง",
				invalidConfigOwner: "เจ้าของเรื่องราวไม่ได้รับอนุญาต",
				createMap: "ไม่สามารถสร้างแผนที่",
				invalidApp: "ข้อผิดพลาดร้ายแรง: โปรแกรมไม่สามารถโหลด",
				appLoadingFail: "มีบางอย่างผิดพลาด   %TPL_NAME% ไม่ถูกโหลดอย่างถูกต้อง",
				notConfiguredDesktop: "เรื่องราวนี้ยังไม่ได้รับการปรับแต่ง",
				notConfiguredMobile: "ไม่รองรับ %TPL_NAME% builder ในการแสดงผลด้วยขนาดนี้ หากเป็นไปได้ ลดขนาดเบราเซอร์ของคุณเพื่อที่จะสามารถใช้งาน builder หรือกรุณาสร้างสตอรี่ของคุณเองบนอุปกรณ์ที่ใหญ่ขึ้น",
				notConfiguredMobile2: "กรุณาหมุนอุปกรณ์ของคุณเป็นแนวนอนเพื่อใช้งาน %TPL_NAME% builder",
				notAuthorized: "คุณไม่ได้รับสิทธิ์ในการใช้งานเรื่องราว",
				notAuthorizedBuilder: "คุณไม่มีสิทธิ์ในการใช้งาน %TPL_NAME% builder",
				noBuilderIE: "ตัวสร้างที่ไม่ได้รับการสนับสนุนบน Internet Explorer ก่อนรุ่น %VERSION%  %UPGRADE%",
				noViewerIE: "เรื่องนี้ไม่ได้รับการสนับสนุนใน Internet Explorer รุ่นก่อน %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>กรุณาอัพเดทเบราว์เซอร์ของคุณ</a>.",
				mapLoadingFail: "มีบางอย่างไม่ถูกต้อง โหลดแผนที่ไม่ถูกต้อง",
				signOut: "ลงชื่อออก"
			},
			mobileView: {
				tapForDetails: "เลือกสำหรับรายละเอียด",
				clickForDetails: "ศึกษาเพิ่มเติม",
				swipeToExplore: "เลื่อนเพื่อดุรายละเอียด",
				tapForMap: "แตะเพื่อกลับเข้าสู่แผนที่",
				clickForMap: "กลับไปสู่แผนที่"
			},
			floatLayout: {
				scroll: "เลื่อน"
			},
			sideLayout: {
				scroll: "เลื่อนลงเพิ่มเติม"
			},
			mainStage: {
				back: "กลับ"
			},
			headerFromCommon: {
				storymapsText: "A story map",
				builderButton: "แก้ไข",
				facebookTooltip: "แชร์ผ่าน Facebook",
				twitterTooltip: "แชร์ผ่าน Twitter",
				bitlyTooltip: "รับเป็นลิงค์สั้นๆ",
				templateTitle: "ตั้งค่าหัวเรื่องเทมเพลต",
				templateSubtitle: "ตั้งค่าชื่อรองของเทมเพลต",
				share: "แบ่งปัน",
				checking: "กำหลังตรวจสอบสาระในเรื่องราวของคุณ",
				fix: "ปรับปรุงประเด็นในเรื่องราวของคุณ",
				noerrors: "ไม่มีประเด็นที่ตรวจพบ",
				tooltipAutoplayDisabled: "สิ่งนี้ไม่สามารถใช้ได้ในโหมดเล่นอัตโนมัติ",
				notshared: "ไม่ได้แชร์สตอรี่"
			},
			overviewFromCommon: {
				title: "ภาพรวมของแผนที่"
			},
			legendFromCommon: {
				title: "สัญลักษณ์"
			},
			shareFromCommon: {
				copy: "คัดลอก",
				copied: "คัดลอก",
				open: "เปิด",
				embed: "ฝังลงในเว็บไซต์",
				embedExplain: "ใช้รหัส HTML ต่อไปนี้ ในการฝังลงในเว็บไซต์การเดินทาง",
				size: "ขนาด (กว้าง/สูง):",
				autoplayLabel: "โหมดเล่นอัตโนมัติ",
				autoplayExplain1: "โหมดการเล่นอัตโนมัติจะเลื่อนผ่านสตอรี่ของคุณในช่วงเวลาปกติ นี้เหมาะในตู้คีออสหรือแสดงบนจอภาพสาธารณะ แต่ทราบว่าในสถานการณ์อื่น ๆ ก็อาจจะทำให้เรื่องยากที่จะอ่าน คุณลักษณะนี้ไม่รองรับบนจอแสดงผลขนาดเล็ก",
				autoplayExplain2: "เมื่อโหมดนี้มีการใช้งานยังมีการควบคุมการเล่น / หยุดชั่วคราวเรื่องราวและปรับความเร็วลูกศร",
				linksupdated: "ลิงค์นี้อัพเดทแล้ว"
			}
        }
    })
);