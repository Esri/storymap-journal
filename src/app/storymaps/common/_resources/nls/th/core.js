define(
	 ({
		commonCore: {
			common: {
				add: "เพิ่ม",
				edit: "แก้ไข",
				save: "จัดเก็บ",
				next: "ถัดไป",
				cancel: "ยกเลิก",
				back: "กลับ",
				apply: "นำไปใช้",
				close: "ปิด",
				open: "เปิด",
				start: "เริ่ม",
				loading: "กำลังโหลด",
				disabledAdmin: "คุณลักษณะนี้ได้ถูกปิดใช้งานโดยผู้ดูแลระบบ",
				width: "ความกว้าง",
				height: "ความสูง"
			},
			inlineFieldEdit: {
				editMe: "แก้ไขฉัน!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% สร้าง",
				buttonSaving: "การบันทึก",
				buttonSaved: "บันทึกแล้ว",
				buttonShare: "แบ่งปัน",
				buttonSettings: "การตั้งค่า",
				buttonHelp: "ช่วยเหลือ",
				buttonPreview: "ดูถ่ายทอดสด",
				tooltipFirstSave: "ฟังก์ชั่นนี้ไม่สามารถใช้ได้จนกว่าโปรแกรมจะถูกบันทึกไว้",
				tooltipNotShared: "ฟังก์ชั่นนี้ไม่สามารถใช้ได้จนกว่าจะมีการประยุกต์ใช้ร่วมกัน",
				noPendingChange: "ไม่มีการเปลี่ยนแปลง",
				unSavedChangePlural: "อยู่ระหว่างการเปลี่ยนแปลง",
				closeWithPendingChange: "คุณแน่ใจว่าจะต้องการที่จะยืนยันการดำเนินการนี้ การเปลี่ยนแปลงของคุณจะหายไป",
				saveError: "การบันทึกผิดพลาด กรุณาลองอีกครั้ง",
				shareStatus1: "โปรแกรมยังไม่ได้รับการบันทึกไว้ยัง",
				shareStatus2: "แอพพลิเคชั่นถูกแชร์ไปสู่สาธารณะ",
				shareStatus3: "แอพพลิเคชั่นถุกแชร์ภายในองค์กร",
				shareStatus4: "แอพพลิเคชั่นไม่ได้ถูกแชร์"
			},
			saveError: {
				title: "พบข้อผิดพลาดในการจัดเก็บโปรแกรมประยุกต์",
				err1Div1: "ไม่สามารถจัดเก็บโปรแกรมประยุกต์ เนื่องจากคุณมีรายการอื่นที่ชื่อเหมือนกันแล้ว (ดูของคุณ <a class='linkagolroot' target='_blank'>โฟลเดอร์เนื้อหา</a>)",
				err1Div2: "กรุณาปรับหน้าโฮมและจัดเก็บโปรแกรมประยุกต์",
				btnOk: "แก้ไขส่วนหน้าโฮม"
			},
			share: {
				firstSaveTitle: "บันทึกแอพพลิเคชั่นเรียบร้อยแล้ว",
				firstSaveHeader: "โปรแกรมของคุณได้บันทึกลงใน %PORTAL% แต่ยังไม่ได้แบ่งปัน",
				firstSavePreview: "แสดงตัวอย่าง",
				firstSaveShare: "แบ่งปัน",
				firstSaveA1: "หากคุณไม่คุ้นเคยกับ% PORTAL% หรือต้องการทางลัดในการเข้าถึงอินเตอร์เฟซการสร้างคุณสามารถบันทึกการเชื่อมโยงต่อไปนี้ Link1%%",
				firstSaveA1bis: "โปรแกรมประยุกต์สามารถพบได้ในของคุณ<a href='%LINK2%' target='_blank'>%PORTAL% โฟเดอร์เนื้อหา</a>.",
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
				shareHeader1: "แอพปริเคชั้นของคุณคือ <strong>สาธารณะสามารถเข้าถึงได้</strong>.",
				shareHeader2: "ใบสมัครของคุณสามารถเข้าถึงได้โดยสมาชิกขององค์กรของคุณ (ต้องเข้าสู่ระบบ)",
				shareLinkCopy: "คัดลอก",
				shareLinkCopied: "คัดลอก",
				shareQ0: "ฉันจะฝั่งโปรแกรมประยุกต์ไว้ในเว็บไซต์อย่างไร",
				shareQ1Opt1: "ฉันจะเก็บโปรแกรมนี้เป็นส่วนตัวได้อย่างไร?",
				shareQ1Opt2: "ฉันจะมีวิธีการประยุกต์ใช้ส่วนตัวหรือแบ่งปันต่อสาธารณชน?",
				shareA1: "ใช้ %SHAREIMG% on <a href='%LINK1%' target='_blank'>หน้ารายการโปแกรมประยุกต์</a>.",
				shareQ2bis: "ฉันจะได้รับกลับไปที่อินเตอร์เฟซที่สร้างได้อย่างไร",
				shareA2div1: "บันทึกและนำกลับมาใช้ตามลิ้ง %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>.",
				shareA2div2: "ฐานะที่เป็นเจ้าของของโปรแกรมเมื่อคุณได้ลงนามใน% PORTAL% รวมถึงการประยุกต์ใช้เพื่อเปิดสร้าง:",				
				shareQ3: "ข้อมูลของคุณเก็บไว้ที่ใด?",
				shareA3: "%TPL_NAME% ข้อมูลและการตั้งค่าที่เก็บใน <a href='%LINK2%' target='_blank'>รายการเว๊บแอพพลิเคชั่น</a> ถ้าคุณได้ใช้ Flickr, Picasa, Facebook หรือ YouTube นำเข้ารูปภาพและวิดีโอของคุณยังไม่ได้ทำซ้ำใน %PORTAL%."
			},
			settings: {
				header: "การตั้งค่า",
				tabError: "กรุณาตรวจสอบความผิดพลาดในทุกๆ แถบ"
			},
			settingsLayout: {
				title: "แบบร่าง",
				explain: "คุณต้องการใช้รูปแบบโครงสร้างแบบใด?",
				explainInit: "คุณสามารถแก้ไขโครงร่างได้ตลอดเวลาจากการตั้งค่าที่กล่องโต้ตอบ",
				viewExample: "ดูเป็นตัวอย่างจริง"
			},
			settingsTheme: {
				title: "หัวข้อ"
			},
			settingsHeader: {
				title: "ส่วนหัว",
				logoEsri: "โลโก้ Esri",
				logoNone: "ไม่มีโลโก้",
				logoCustom: "แก้ไขโลโก้",
				logoCustomPlaceholder: "URL (มากสุด 250x50 พิกเซล)",
				logoCustomTargetPlaceholder: "คลิกผ่านลิ้ง",
				logoSocialExplain: "แก้ไขหัวของลิ้ง",
				logoSocialText: "ตัวหนังสือ",
				logoSocialLink: "ลิงก์",
				lblSmallHeader: "ใช้ส่วนบนที่มีขนาดกระทัดรัด (ไม่มีชื่อเรื่อง)"
			},
			header: {
				title: "แก้ไขชื่อเรื่องของคุณ %TPL_NAME%",
				subtitle: "แก้ไขเนื้อหาด้านล่างของคุณ %TPL_NAME%"
			}
		}
	})
);
