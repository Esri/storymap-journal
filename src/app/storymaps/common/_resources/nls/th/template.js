define(
	 ({
		common: {
			common: {
				edit: "แก้ไข"
			},
			inlineFieldEdit: {
				editMe: "แก้ไขฉัน !"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% สร้าง",
				buttonSave: "บันทึก",
				buttonShare: "แบ่งปัน",
				buttonSettings: "ตั้งค่า",
				buttonHelp: "ช่วย",
				noPendingChange: "ไม่มีการเปลี่ยนแปลง",
				unSavedChangeSingular: "1 ยังไม่ได้บันทึกการเปลี่ยนแปลง",
				unSavedChangePlural: "ไม่ได้บันทึกการเปลี่ยนแปลง",
				popoverSaveWhenDone: "ไม่ได้ลืมที่จะบันทึกเมือคุณเสร็จแล้ว",
				closeWithPendingChange: "คุณแน่ใจว่าจะต้องการที่จะยืนยันการดำเนินการหรือไม่ การเปลี่ยนแปลงของคุณจะหายไป",
				ok: "ตกลง",
				savingApplication: "กำลังบันทึกโปรแกรม",
				saveError: "การบันทึกผิดพลาด กรุณาลองอีกครั้ง",
				saveError3: "หัวเรื่องไม่สามารถปล่อยว่างได้",
				// TODO
				signIn: "กรุณาลงชื่อเข้าใช้ด้วยบัญชี",
				shareStatus1: "แอพพลิเคชั่นไม่ได้ถูกบันทึก",
				shareStatus2: "แอพพลิเคชั่นถูกแชร์ไปสู่สาธารณะ",
				shareStatus3: "แอพพลิเคชั่นถุกแชร์ภายในองค์กร",
				shareStatus4: "แอพพลิเคชั่นไม่ได้ถูกแชร์"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "หัวเรื่อง",
				addPopupTitle: "เพิ่ม",
				addPopupDescription: "เพิ่มมุมมองใหม่ให้กับซีรีย์ของคุณ",
				addPopupButton: "เพิ่ม",
				// Edit
				editPopupTitle: "แก้ไข",
				editPopupDescription: "แก้ไขวิวที่เลือก",
				editPopupButton: "นำไปใช้",
				// Add/Edit
				addEditPopupCancelButton: "ยกเลิก",
				addEditPopupMyContentBtn: "เลือกจากรายการของฉัน",
				addEditPopupConfigureWebMapBtn: " การตั้งค่า"
			},
			share: {
				firstSaveTitle: "บันทึกแอพพลิเคชั่นเรียบร้อยแล้ว",
				firstSaveHeader: "โปรแกรมของคุณได้บันทึกใน ArcGIS Online กรุณาอ่านคำตอบเพื่อไปยังคำถามที่พบบ่อย",
				firstSaveA1: "ถ้าคุณไม่ใช่สมาชิกของ ArcGIS Online หรือต้องการทางลัดในการเข้าถึงหน้าการยอมรับ คุณสามารถบันทึกตามลิงก์: %LINK1%",
				firstSaveA1bis: "โปรแกรมสามารถค้นพบในของคุณ <a href='%LINK2%' target='_blank'>ArcGIS Online โฟเดอร์เนื้อหา</a>.",
				firstSaveQ2: "นี่เป็นโปรแกรมของฉันที่ถูกแบ่งปัน ?",
				firstSaveA2: "โปรแกรมปัจจุบันของคุณยังไม่ได้แบ่งปัน ต้องการแบ่งปันให้กดปุ่ม แบ่งปัน",
				shareTitle: "แชร์แอพพลิเคชั่นของคุณ",
				sharePrivateHeader: "โปรแกรมของคุณยังไม่ได้แบ่งปัน คุณต้องการจะแบ่งปันหรือไม่ ?",
				sharePrivateBtn1: "แบ่งปันสู่สาธารณะ",
				sharePrivateBtn2: "แบ่งปันด้วยองค์กรของฉัน",
				sharePrivateWarning: "แบ่งปัน %WITH% ไม่สามารถปรากฏได้เพราะคุณไม่ได้เป็นเจ้าของ <a href='%LINK%' target='_blank'>เว็ปแมพ</a>.",
				sharePrivateWarningWith1: "โดยสาธารณะ",
				sharePrivateWarningWith2: "โดยสาธารณะและสำหรับองค์กร",
				sharePrivateProgress: "การแบ่งปันอยู่ในดำเนินการ ...",
				sharePrivateErr: "การแบ่งปันผิดพลาด ลองอีกครั้ง หรือ",
				sharePrivateOk: "แบ่งปันอัพเดทสำเร็จ กำลังโหลด...",
				sharePreviewAsUser: "แสดงตัวอย่าง",
				shareHeader1: "แอพปริเคชั้นของคุณคือ <strong>สาธารณะสามารถเข้าถึงได้</strong>.",
				shareHeader2: "ใบสมัครของคุณสามารถเข้าถึงได้โดยสมาชิกในองค์กรของคุณ (ต้องเข้าสู่ระบบ)",
				shareLinkHeader: "แบ่งปันโปรแกรมของคุณให้กับผู้ฟังของคุณ",
				shareLinkOpen: "เปิด",
				shareQ1Opt1: "ฉันจะเก็บโปรแกรมนี้เป็นส่วนตัวได้อย่างไร?",
				shareQ1Opt2: "ฉันจะมีวิธีการประยุกต์ใช้ส่วนตัวหรือแบ่งปันต่อสาธารณชน?",
				shareA1: "ใช้ %SHAREIMG% on <a href='%LINK1%' target='_blank'>หน้ารายการแอพพลิเคชั่น/a>. ถ้าคุณต้องการแบ่งปันเว็บแมพนี้ <a href='%LINK2%' target='_blank'>หน้ารายการเว็บแมพ</a>.",
				shareA1bis: "ถ้าคุณไม่ต้องการที่จะแบ่งปัน , ใช้ <a href='%LINK1%' target='_blank'>ในหน้ารายการฟีเจอร์เซอร์วิส</a>.",
				shareQ2: "ฉันแก้ไขโปรแกรมของฉันที่หลังได้ไหม ?",
				shareQ2bis: "ฉันจะกลับไปยังหน้าการเขียนมุมองหน้าได้อย่างไร ?",
				shareA2div1: "บันทึกและนำกลับมาใช้ตามลิ้ง %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>.",
				shareA2div2: "หากเป็นเจ้าของโปรแกรม เมื่อคุณลงชื่อเข้าใช้ใน ArcGIS.com โปรแกรมจะเปิดหน้าและปุ่มสำหรับการพัฒนาให้",				
				shareQ3: "ข้อมูลของคุณเก็บไว้ที่ใด?",
				shareA3: "การตั้งค่าโปรแกรมเก็บอยู่ใน  <a href='%LINK1%' target='_blank'>this webmap item</a> และ <a href='%LINK2%' target='_blank'>รายการเว็บแอพปริเคชั่น</a>ถ้าคุณใช้ Flickr, Picasa, Facebook หรือ YouTubeในการนำเข้ารูปภาพหรือวิดีโอของคุณยังคงเก็บอยู่ในที่เก็บและไม่สามารถลงซ้ำใน ArcGIS Online",
				learnMore: "เรียนรู้เพิ่มเติม",
				close: "ปิด"
			},
			settings: {
				header: "การตั้งค่าโปรแกรมประยุกต์",
				cancel: "ยกเลิก",
				apply: "นำไปใช้",
				tabError: "กรุณาตรวจสอบความผิดพลาดในทุกๆ แถบ"
			},
			settingsLayout: {
				title: "แบบร่าง",
				explain: "คุณต้องการใช้รูปแบบโครงสร้างแบบใด?",
				explainInit: "การเปลี่ยนจะเปลี่ยนได้ผ่านหน้าต่างโต้ตอบของการตั้งค่า",
				selected: "เลือกรูปแบบ",
				select: "เลือกรูปแบบนี้"
			},
			settingsTheme: {
				title: "หัวข้อ",
				explain: "เลือกธีมของแอพฯ หรือเลือกสีด้วยตัวเอง",
				label: "สีพื้นหลังของเฮดเดอร์และแถบด้านข้าง"
			},
			settingsHeader: {
				title: "ส่วนหัว",
				explain: "แก้ไขโลโก้ส่วนหัว (ค่ามากที่สุดคือ 250 x 50px).",
				logoEsri: "โลโก้ Esri",
				logoNone: "ไม่มีโลโก้",
				logoCustom: "แก้ไขโลโก้",
				logoCustomPlaceholder: "URL รูปภาพ",
				logoCustomTargetPlaceholder: "คลิกผ่านลิ้ง",
				logoSocialExplain: "แก้ไขลิ้งส่วนหัวด้านบนขวา",
				logoSocialText: "ตัวหนังสือ",
				logoSocialLink: "ลิงก์",
				logoSocialDisabled: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ"
			},
			mediaSelector: {
				lblMap: "แผนที่",
				lblPicture: "รูปภาพ",
				lblVideo: "วิดีโอ",
				lblExternal: "หน้าต่างด้านนอก"
			},
			webMapSelector: {
				radioCurrentWebMap: "เว็ปแมพปัจจุบัน",
				radioWebmapApp: "หนึ่งจากเว็ปแมพอื่นๆที่ใช้ในโปรแกรม",
				radioAnotherWebmap: "เว็บแมพอื่น",
				btnSelect: "เลือก",
				lblOr: "หรือ",
				fieldEnterWebmapId: "เข้าไปเว็บแมพไอดี",
				btnConfigure: "ตั้งค่าแผนที่"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "องค์กรของฉัน",
					onlineLabel: "ArcGIS Online",
					contentLabel: "เนื้อหาของฉัน",
					favoritesLabel: "รายการโปรด"
				},
				title: "เลือกเว็บแมพ",
				searchTitle: "ค้นหา",
				ok: "ตกลง",
				cancel: "ยกเลิก",
				placeholder: "เพิ่มคำค้นหา"
			}
		}
	})
);
