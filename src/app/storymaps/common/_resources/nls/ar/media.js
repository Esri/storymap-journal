define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "الوسائط",
				lblSelect2: "المحتوى",
				lblMap: "خريطة",
				lblImage: "صورة",
				lblVideo: "فيديو",
				lblExternal: "صفحة الويب",
				disabled: "لقد تم تعطيل هذا المعلم بواسطة المدير",
				url: "لإدخال عناوين الصورة على الويب يدويًا",
				userLookup: "تحميل الألبومات",
				notImplemented: "لم يتم تنفيذها بعد.",
				noData: "لم يتم العثور على ألبوم عام"
			},
			imageSelector: {
				lblStep1: "اختيار الخدمة",
				lblStep2: "تحديد الوسائط",
				lblStep3: "تكوين"
			},
			imageSelectorHome: {
				explain: "تحميل الصور من الوسائط الاجتماعية أو <br /> مباشرًة من عنوان URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "اسم المستخدم",
				signInMsg2: "لم يتم العثور على المستخدم",
				loadingFailed: "فشل التحميل"
			},
			imageSelectorFacebook: {
				leftHeader: "مستخدم Facebook",
				rightHeader: "صفحة Facebook",
				pageExplain: "صفحة Facebook هي علامة تجارية/منتج عام أو ذات شهرة مثل <b>esrigis</b>. يمكنك الحصول على اسم الصفحة بعد  \'/\' الأول في عنوان URL للصفحة.",
				pageInputLbl: "اسم الصفحة",
				lookupMsgError: "لم يتم العثور على الصفحة"
			},
			imageSelectorPicasa: {
				userInputLbl: "البريد الإلكتروني أو Picasa/Google+ ID",
				signInMsg2: "لم يتم العثور على الحساب",
				howToFind: "كيفية إيجاد Picasa أو Google+ أو معرف الحساب",
				howToFind2: "نسخ الأرقام بين الأول والثاني \'/\'  لأي من Picasa او صفحة G+"
			},
			videoSelectorCommon: {
				check: "فحص",
				notFound: "لم يتم العثور على الفيديو",
				found: "تم العثور على الفيديو",
				select: "حدد الفيديو الحالي"
			},
			videoSelectorHome: {
				other: "أخرى"
			},
			videoSelectorYoutube: {
				url: "عنوان URL لفيديو اليوتيوب",
				pageInputLbl: "اسم المستخدم",
				lookupMsgError: "لم يتم العثور على المستخدم",
				howToFind: "كيفية إيجاد اسم مستخدم YouTube",
				howToFind2: "يتم عرض اسم المستخدم أسفل الفيديوهات",
				found: "تم العثور",
				noData: "لم يتم العثور على الفيديوهات العامة"
			},
			videoSelectorVimeo: {
				url: "عنوان URL لفيديو Vimeo"
			},
			videoSelectorOther: {
				explain1: "يتعذر على التطبيق تشغيل مقاطع فيديو بسيطة (مثل avi وmpeg)، إلا أنه يمكنه تشغيل ملفات فيديو مُستضافة ذات مُشغلات مدمجة (مثل YouTube أو Vimeo).",
				explain2: "توفر معظم خدمات استضافة الفيديو على الإنترنت تلك الميزة، ويمكنك العثور على خيار تضمين هذا الفيديو ونسخ الكود المُعطى واستخدام %WEBPAGE%.",
				explain3: "وبدلاً من ذلك، إذا أردت استضافة الفيديو بنفسك، يمكنك إنشاء صفحة HTML تستخدم مُشغل فيديو مثل %EXAMPLE% واستضافة الصفحة واستخدام %WEBPAGE% أيضًا.",
				webpage: "معالم صفحة الويب"
			},
			webpageSelectorHome: {
				lblUrl: "عنوان URL لصفحة الويب",
				lblEmbed: "تضمين كود",
				lblOR: "أو",
				lblError1: "خطأ، امسح أحد حقلي الإدخال.",
				lblError2: "يمكن أن تحتوي عملية تضمين كود على أحد %IFRAMETAG%",
				configure: "تكوين"
			},
			mediaConfigure: {
				lblURL: "محدد موقع معلومات (URL)",
				lblURLPH: "يجب أن يبدأ عنوان URL للصورة بـ http:// و ينتهي بـ .jpg أو .png",
				lblURLError: "لا يبدوا أن تكون هذه الصورة صحيحة، الرجاء تحديد رابط مباشر إلى ملف صورة (سوف ينتهي عادةً عنوان URL بـ .jpg أو .png). لن تعمل الروابط على صفحة الويب التي تحتوي على صورة.",
				lblURLCheck: "جارِ فحص الصورة...",
				lblLabel: "التسمية التوضيحية الصورة",
				lblLabel1: "تسمية وضيحية",
				lblLabel2: "التحويم حول النص",
				lblLabel3: "لا شيء",
				lblLabelPH: "إدخال النص...",
				lblMaximize: "تشمل زر تكبير في زاوية الصورة",
				lblMaximizeHelp: "يكون مفضل فقط للصور عالية الجودة",
				lblPosition: "الموضع",
				lblPosition1: "المركز",
				lblPosition2: "تعبئة",
				lblPosition3: "احتواء",
				lblPosition4: "توسيع",
				lblPosition5: "مخصص",
				tooltipDimension: "يمكن تحديد القيمة بـ \'px\' أو \'%\'",
				tooltipDimension2: "يجب تحديد القيمة \'بالبكسل\'",
				lblPosition2Explain: "(يمكن القص)",
				lblPosition3Explain: "(لا يتم القص)",
				lblPosition3Explain2: "(سوف يناسب دائما العرض اللوحة)",
				lblPosition4Explain: "(يمكن الإتلاف)",
				unloadLbl: "إلغاء التحميل عندما ينتقل القارئ بعيدًا",
				unloadHelp: "إذا كانت صفحة الويب تحتوي على وسائط صوت أو فيديو، احتفظ بتحديد هذا الخيار لإيقاف ذلك المحتوى من التشغيل عندما ينتقل القارئ بعيدًا إلى مقطع آخر. قم بإلغاء التأشير على سبيل المثال للاحتفاظ بتشغيل مسار الصوت عندما يتقدم القارئ خلال القصة.<br />إذا كانت صفحة الويب عبارة عن تطبيق، قم بإلغاء تحديد هذا الخيار حتى لا يتم إعادة تحميل التطبيق إذا رجع القارئ إليه."
			},
			editorActionGeocode: {
				lblTitle: "تحديد موقع العنوان أو المكان",
				mapMarkerExplain: "سيرى المستخدم علامة الخريطة عند النقر على الرابط"
			},
			editorActionMedia: {
				lblTitle: "تغيير محتويات المرحلة الأساسية"
			},
			editorInlineMedia: {
				lblTitle: "إدراج صورة أو مقطع فيديو أو صفحة ويب"
			}
		}
	})
);
