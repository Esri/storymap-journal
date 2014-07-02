define(
	 ({
		common: {
			common: {
				edit: "تحرير"
			},
			inlineFieldEdit: {
				editMe: "حررني !"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSave: "حفظ",
				buttonShare: "مشاركة",
				buttonSettings: "إعدادات",
				buttonHelp: "تعليمات",
				noPendingChange: "لا يوجد تغيير معلق",
				unSavedChangeSingular: "1 تغيير غير محفوظ",
				unSavedChangePlural: "تغييرات غير محفوظة",
				popoverSaveWhenDone: "لا تنسى الحفظ بعد الانتهاء",
				closeWithPendingChange: "هل تريد تأكيد الإجراء؟ سوف تخسر جميع التغييرات.",
				ok: "موافق",
				savingApplication: "حفظ التطبيق",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				saveError3: "يتعذر أن يكون العنوان فارغًا",
				// TODO
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				shareStatus1: "لم يتم حفظ التطبيق",
				shareStatus2: "تمت مشاركة التطبيق مع الجميع",
				shareStatus3: "تمت مشاركة التطبيق في المؤسسة",
				shareStatus4: "لم يتم مشاركة التطبيق"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "العنوان",
				addPopupTitle: "إضافة",
				addPopupDescription: "إضافة عرض جديد إلى السلاسل.",
				addPopupButton: "إضافة",
				// Edit
				editPopupTitle: "تحرير",
				editPopupDescription: "تحرير العرض المحدد",
				editPopupButton: "تطبيق",
				// Add/Edit
				addEditPopupCancelButton: "إلغاء الأمر",
				addEditPopupMyContentBtn: "تحديد من المحتويات",
				addEditPopupConfigureWebMapBtn: " تكوين"
			},
			share: {
				firstSaveTitle: "تم حفظ التطبيق بنجاح",
				firstSaveHeader: "يتم الآن حفظ التطبيق في ArcGIS Online. الرجاء قراءة إجابات الأسئلة التالية.",
				firstSaveA1: "إذا لم تكن متألف مع ArcGIS Online أو ترغب في الحصول على الاختصار للوصول إلى واجهة التأليف، يمكن حفظ الرابط التالي: %LINK1%",
				firstSaveA1bis: "يمكن أيضًا إيجاد التطبيق في <a href='%LINK2%' target='_blank'>مجلد محتويات ArcGIS Online</a>.",
				firstSaveQ2: "هل تمت مشاركة التطبيق؟",
				firstSaveA2: "حاليًا التطبيق غير مشترك. لمشاركته، استخدم زر مشاركة.",
				shareTitle: "مشاركة التطبيق",
				sharePrivateHeader: "لم تتم مشاركة التطبيق، هل تريد مشاركته؟",
				sharePrivateBtn1: "مشاركتها بشكل عام",
				sharePrivateBtn2: "مشاركتها مع المنظمة",
				sharePrivateWarning: "تم تعطيل مشاركة %WITH% وذلك لأنك ليس مالك <a href='%LINK%' target='_blank'>خريطة الويب</a>.",
				sharePrivateWarningWith1: "علانية",
				sharePrivateWarningWith2: "علانية ومع المنظمة",
				sharePrivateProgress: "المشاركة قيد التقدم...",
				sharePrivateErr: "فشلت المشاركة، أعد المحاولة مرة أخرى أو",
				sharePrivateOk: "تم تحديث المشاركة بنجاح، جارِ التحميل...",
				sharePreviewAsUser: "معاينة",
				shareHeader1: "يمكن الوصول إلى التطبيق<strong>من قبل الجميع</strong>.",
				shareHeader2: "يمكن الوصول إلى التطبيق من قبل أعضاء المؤسسة (يلزم تسجيل الدخول).",
				shareLinkHeader: "شارك التطبيق مع الحضور",
				shareLinkOpen: "فتح",
				shareQ1Opt1: "كيف يمكن الاحتفاظ بخصوصية التطبيق؟",
				shareQ1Opt2: "كيف يمكن الاحتفاظ بخصوصية التطبيق أو مشاركته مع الجميع؟",
				shareA1: "استخدم %SHAREIMG% على <a href='%LINK1%' target='_blank'>صفحة عنصر التطبيق</a>. إذا كنت ترغب أيضًا في عدم مشاركة خريطة الويب، استخدم <a href='%LINK2%' target='_blank'>صفحة عنصر خريطة الويب</a>.",
				shareA1bis: "إذا كنت ترغب أيضًا في عدم مشاركة خدمة المعلم، استخدم <a href='%LINK1%' target='_blank'>صفحة عنصر خدمة المعلم</a>.",
				shareQ2: "كيف يمكن تحرير التطبيق فيما بعد؟",
				shareQ2bis: "كيف يمكنني الحصول على العودة إلى واجهة التأليف؟",
				shareA2div1: "احفظ الرابط التالي وقم بإعادة استخدامه %LINK1% أو استخدم <a href='%LINK2%' target='_blank'>صفحة عنصر التطبيق</a>.",
				shareA2div2: "بصفتك مالك التطبيق، عند تسجيل الدخول على ArcGIS.com، سيتضمن التطبيق زر لفتح المنشئ التفاعلي:",				
				shareQ3: "أين يتم تخزين البيانات؟",
				shareA3: "تكوين التطبيق مُخزن في <a href='%LINK1%' target='_blank'>عنصر خريطة الويب</a> و <a href='%LINK2%' target='_blank'>عنصر تطبيق الويب الحالي</a>. عند استخدام Flickr أو Picasa أو Facebook أو YouTube، ستظل الصور ومقاطع الفيديو مُخزنة ولن يتم تكرارها في ArcGIS Online.",
				learnMore: "تعلم المزيد",
				close: "إغلاق"
			},
			settings: {
				header: "إعدادات التطبيق",
				cancel: "إلغاء الأمر",
				apply: "تطبيق",
				tabError: "يرجي التحقق من وجود أخطاء في جميع علامات التبويب"
			},
			settingsLayout: {
				title: "المخطط",
				explain: "ما هو التخطيط الطباعي الذي تريد استخدامه؟",
				explainInit: "سيصبح التغيير متاح خلال حوار الإعدادات.",
				selected: "مخطط محدد",
				select: "حدد هذا المخطط"
			},
			settingsTheme: {
				title: "سمة",
				explain: "اختر سمة التطبيق أو قم بتعريف الألوان الخاصة بك.",
				label: "ألوان خلفية اللوحة الجانبية والعنوان"
			},
			settingsHeader: {
				title: "رأس الصفحة",
				explain: "تخصيص شعار (الحد الأقصى 250 x 50 px).",
				logoEsri: "شعار Esri",
				logoNone: "لا يوجد شعار",
				logoCustom: "تخصيص الشعار",
				logoCustomPlaceholder: "عنوان URL للصورة",
				logoCustomTargetPlaceholder: "انقر فوق الرابط",
				logoSocialExplain: "تخصيص عنوان الرابط الموجود أعلى اليمين.",
				logoSocialText: "النص",
				logoSocialLink: "رابط",
				logoSocialDisabled: "لقد تم تعطيل هذا المعلم بواسطة المدير"
			},
			mediaSelector: {
				lblMap: "خريطة",
				lblPicture: "الصورة",
				lblVideo: "فيديو",
				lblExternal: "الصفحة الخارجية"
			},
			webMapSelector: {
				radioCurrentWebMap: "خريطة الويب الحالية",
				radioWebmapApp: "أحد خرائط الويب الأخرى المستخدمة في التطبيق",
				radioAnotherWebmap: "خريطة ويب أخرى",
				btnSelect: "تحديد",
				lblOr: "أو",
				fieldEnterWebmapId: "أدخل مُعرف خريطة الويب",
				btnConfigure: "تكوين الخريطة"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "المؤسسة",
					onlineLabel: "ArcGIS Online",
					contentLabel: "المحتوى",
					favoritesLabel: "المفضلات"
				},
				title: "تحديد خريطة الويب",
				searchTitle: "بحث",
				ok: "موافق",
				cancel: "إلغاء الأمر",
				placeholder: "إدخال مصطلحات البحث"
			}
		}
	})
);
