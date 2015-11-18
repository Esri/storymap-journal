﻿define(
	 ({
		commonCore: {
			common: {
				add: "إضافة",
				edit: "تحرير",
				save: "حفظ",
				next: "التالي",
				cancel: "إلغاء الأمر",
				back: "السابق",
				apply: "تطبيق",
				close: "إغلاق",
				open: "فتح",
				start: "بدء",
				loading: "تحميل",
				disabledAdmin: "لقد تم تعطيل هذا المعلم بواسطة المدير",
				width: "العرض",
				height: "الارتفاع",
				create: "إنشاء",
				yes: "نعم",
				no: "لا"
			},
			inlineFieldEdit: {
				editMe: "تحرير!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSaving: "حفظ",
				buttonSaved: "تم الحفظ",
				buttonShare: "مشاركة",
				buttonSettings: "الإعدادات",
				buttonHelp: "تعليمات",
				buttonPreview: "عرض مباشر",
				tooltipFirstSave: "غير متاح حتى يتم حفظ التطبيق.",
				tooltipNotShared: "غير متاح حتى يتم حفظ التطبيق.",
				noPendingChange: "لا يوجد تغيير معلق",
				unSavedChangePlural: "تغييرات معلقة",
				closeWithPendingChange: "هل أنت متأكد من تأكيد هذا الإجراء؟ سيتم فقدان التغييرات.",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				status1: "تم مشاركة القصة، ولكنها تحتوي على مشكلات",
				status2: "لم يتم مشاركة القصة، ولكنها تحتوي على مشكلات",
				status3: "القصة عامة لكل المستخدمين",
				status4: "تم مشاركة القصة في المؤسسة",
				status5: "القصة خاصة",
				status6: "لم يتم حفظ القصة بعد",
				checking: "التحقق",
				fix: "تصحيح"
			},
			saveError: {
				title: "خطأ في حفظ القصة",
				err1Div1: "يتعذر حفظ القصة لأنه يوجد لديك عنصر آخر بنفس الاسم بالفعل.",
				err1Div2: "يرجى تعديل عنوان القصة ثم حفظه.",
				btnOk: "تحرير عنوان القصة"
			},
			share: {
				shareTitle: "مشاركة القصة",
				preview: "معاينة",
				viewlive: "عرض مباشر",
				btnPrivate: "خاص",
				btnPrivateTooltip: "يمكنك رؤية القصة فقط",
				btnOrg: "مؤسسة",
				btnOrgTooltip: "يمكن لأعضاء المؤسسة فقط رؤية القصة",
				btnPublic: "عام",
				btnPublicTooltip: "يمكن لكل المستخدمين رؤية القصة",
				loadingMessage: "فحص مشكلات تواجه القصة",
				viewToggle1: "عرض محتوى القصة",
				viewToggle2: "إغلاق محتوى القصة",
				socialize: "التواصل الاجتماعي",
				statusPrivate: "القصة خاصة، ويمكنك أنت فقط رؤيتها.",
				statusError: "توجد مشكلات في محتوى القصة سيلحظها القُرّاء، ويمكنك تعريفها وإصلاحها أدناه.",
				statusNoErrPrivate: "مشاركة قصتك بمجرد أن تكون مستعدًا!",
				mystoriesinvite: "إدارة كل القصص",
				notavailable1: "عذرًا، مشاركة القصة من \"المنشئ\" غير مدعومة لأن هذا التطبيق غير مستضاف في %PRODUCT%.",
				notavailable2: "عذرًا، مشاركة القصة من \"المنشئ\" غير مدعومة في هذا الإصدار من Portal for ArcGIS (يتطلب الإصدار 10.4 أو أحدث).",
				notavailable3: "يمكنك مشاركة هذه القصة من %LINK%.",
				notavailable4: "قصتي",
				notavailable5: "عنصر صفحة",
				notavailable6: "عذرًا، هذه الميزة غير مدعومة بالكامل في وضع التطوير. واستنادًا إلى سيناريو النشر، قد يتم دعم هذه الميزة عند النشر.",
				notavailable7: "تأكد من زيارة %MYCONTENT% للتأكيد على مشاركة الخرائط والطبقات المستخدمة في القصة.",
				notavailable8: "الخاص"
			},
			settings: {
				header: "الإعدادات",
				tabError: "الرجاء التحقق من جميع علامات التبويب لاكتشاف الأخطاء"
			},
			settingsLayout: {
				title: "المخطط",
				explain: "أي التخطيطات الطباعية تريد استخدامها؟",
				explainInit: "يمكن تغيير التخطيط الطباعي في أي وقت من مربع حوار الإعدادات.",
				viewExample: "عرض مثال حي"
			},
			settingsTheme: {
				title: "سمة"
			},
			settingsHeader: {
				title: "رأس الصفحة",
				logoEsri: "شعار Esri",
				logoNone: "لا يوجد شعار",
				logoCustom: "تخصيص الشعار",
				logoCustomPlaceholder: "عنوان URL (بحد أقصى 250x50 بكسل)",
				logoCustomTargetPlaceholder: "انقر فوق الرابط",
				logoSocialExplain: "تخصيص رابط العنوان.",
				logoSocialText: "النص",
				logoSocialLink: "رابط",
				lblSmallHeader: "استخدم عنوان صغير (لا تستخدم عنوان فرعي)"
			},
			header: {
				title: "تحرير عنوان %TPL_NAME%",
				subtitle: "تحرير العنوان الفرعي لـ %TPL_NAME%"
			}
		}
	})
);
