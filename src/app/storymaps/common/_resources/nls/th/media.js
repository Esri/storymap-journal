define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "สื่อ",
				lblSelect2: "เนื้อหา",
				lblMap: "แผนที่",
				lblImage: "รูปภาพ",
				lblVideo: "วิดีโอ",
				lblExternal: "เว็บเพจ",
				disabled: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ",
				url: "ในการป้อนที่อยู่เว็บของภาพด้วยตนเอง",
				userLookup: "โหลดอัลบัม",
				notImplemented: "ยังไม่ได้ดำเนินการ"
			},
			imageSelector: {
				lblStep1: "เลือกการบริการ",
				lblStep2: "เลือกมีเดียของคุณ",
				lblStep3: "การตั้งค่า"
			},
			imageSelectorHome: {
				explain: "โหลดรูปภาพจากโซเชียลมีเดีย <br /> หรือตรงจาก URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "ชื่อผู้ใช้งาน",
				signInMsg2: "ไม่พบผู้ใช้งาน",
				loadingFailed: "โหดลผิดพลาด"
			},
			imageSelectorFacebook: {
				leftHeader: "ผู้ใช้เฟสบุค",
				rightHeader: "เพจเฟสบุค",
				pageExplain: "หน้าเฟสบุคเป็นที่นิยมสำหรับการแสดงแบรนด์สินค้าและผู้มีชื่อเสียง<b>esrigis</b>. คุณสามารถให้ชื่อเพจหลัง'/' ในหน้า URL ได้",
				pageInputLbl: "ชื่อเพจ",
				lookupMsgError: "ไม่พบหน้านี้"
			},
			imageSelectorPicasa: {
				userInputLbl: "อีเมล์  หรือ  Picasa/Google+ ID",
				signInMsg2: "ไม่พบชื่อบัญชี",
				signInMsg3: "ไม่มีแฟ้มภาพสาธารณะ",
				howToFind: "วิธีการค้นหา Picasa หรือ บัญชี ID Google+",
				howToFind2: "คัดลอกตัวเลขระหว่างลำดับที่หนึ่งและสอง  / ของ Picasa หรือ หน้า G+"
			},
			videoSelectorCommon: {
				check: "ตรวจสอบ",
				notFound: "ไม่พบวิดีโอ",
				found: "พบวิดีโอ",
				select: "เลือกวิดีโอนี้"
			},
			videoSelectorHome: {
				other: "อื่นๆ"
			},
			videoSelectorYoutube: {
				url: "URL ของวิดีโอจากยูทูบ",
				pageInputLbl: "ชื่อผู้ใช้งาน",
				lookupMsgError: "ไม่พบผู้ใช้งาน",
				howToFind: "วิธีการค้นหาชื่อ YouTube",
				howToFind2: "ชื่อผู้ใช้ไม่แสดงอยู่ด้านล่างวิดีโอ",
				found: "พบ",
				noData: "ไม่พบวิดีโอสาธารณะ"
			},
			videoSelectorVimeo: {
				url: "URL ของวิดีโอจาก Vimeo"
			},
			videoSelectorOther: {
				explain1: "แผนที่การเดินทางไม่สามารถเล่นไฟล์วิดีโอต้นฉบับได้ เช่น avi, mpeg ได้ แต่สามารถเล่นไฟล์วิดีโอที่ฝากไว้กับเว็บไซต์ต่างๆ เช่น  YouTube หรือ Vimeo ได้",
				explain2: "วิดีโอออนไลน์บริการโฮสติ้งส่วนมากมีคุณสมบัติที่คุณจะต้องไปหาตัวเลือกที่จะฝังวิดีโอคัดลอกโค้ดที่กำหนดและใช้ %WEBPAGE%",
				explain3: "หรือถ้าคุณต้องการโฮสต์วิดีโอตัวคุณเองคุณสามารถสร้างเพจ HTML ที่ใช้เครื่องเล่นวิดีโอ เช่น %EXAMPLE% เจ้าของหน้านั้นและยังใช้%WEBPAGE%",
				webpage: "ฟีเจอร์ของหน้าเว็บ"
			},
			webpageSelectorHome: {
				lblUrl: "เว็บเพจ URL",
				lblEmbed: "รหัสที่ฝัง",
				lblOR: "หรือ",
				lblError1: "ข้อผิดพลาด ยกเลิกหนึ่งในสองฟิลด์ที่นำเข้า",
				lblError2: "รหัสที่ฝังสามารถมีได้เพียงชุดเดียวเท่านั้น <iframe>"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "URL ของรูปภาพควรเริ่มต้นด้วย http:// และลงท้ายด้วย .jpg หรือ .png",
				lblLabel: "คำอธิบายรูปภาพ",
				lblLabel1: "คำบรรยายภาพ",
				lblLabel2: "เลื่อนข้อความ",
				lblLabel3: "ไม่ใช่",
				lblLabelPH: "เพิ่มข้อความ...",
				lblMaximize: "รวมถึงปุ่มขยายที่อยู่บริเวณมุมของรูป",
				lblMaximizeHelp: "แนะนำรูปภาพที่มีความละเอียดสูงเท่านั้น",
				lblPosition: "ตำแหน่ง",
				lblPosition1: "ศูนย์กลาง",
				lblPosition2: "กรอก",
				lblPosition3: "พอดี",
				lblPosition4: "ยืด",
				lblPosition5: "ปรับแต่ง",
				tooltipDimension: "ระบุค่าด้วย px หรือ %",
				lblPosition2Explain: "(อาจจะตัด)",
				lblPosition3Explain: "(ไม่ตัด)",
				lblPosition3Explain2: "(ความกว้างจะต้องพอดีกับแผงข้อมูล)",
				lblPosition4Explain: "(อาจจะเบี้ยว)"
			},
			editorActionGeocode: {
				lblTitle: "ตำแหน่งของที่อยู่หรือสถานที่",
				mapMarkerExplain: "ผู้ใช้จะมองเห็นตัวชี้แผนที่เมื่อคลิกที่ลิ้ง"
			},
			editorActionMedia: {
				lblTitle: "เปลี่ยนเนื้อหาที่สือเวทีหลัก"
			},
			editorInlineMedia: {
				lblTitle: "เพิ่มภาพหรือวิดีโอ"
			}
		}
	})

);
