define(
	 ({
		viewer: {
			common: {
				close: "إغلاق"
			},
			loading: {
				step1: "تحميل القصة",
				step2: "تحميل البيانات",
				step3: "التهيئة",
				loadBuilder: "التحويل إلى المُنشئ",
				long: "يتم الأن تهيئة دفتر يومية الخريطة",
				long2: "شكرًا على الانتظار",
				failButton: "إعادة تحميل القصة"
			},
			signin: {
				title: "يلزم وجود المصادقة",
				explainViewer: "يرجى تسجيل الدخول بحساب في %PORTAL_LINK% للوصول إلى القصة.",
				explainBuilder: "يرجى تسجيل الدخول بحساب في %PORTAL_LINK% لتكوين القصة."
			},
			errors: {
				boxTitle: "حدث خطأ",
				invalidConfig: "تكوين غير صحيح",
				invalidConfigNoApp: "معرف تطبيق رسم الخرائط على الويب غير محدد في index.html.",
				invalidConfigNoAppDev: "لم يتم تحديد مُعرّف تطبيق تخطيط الويب في معلمات عنوان URL (?appid=). في وضع التطوير، يتم تجاهل تكوين المُعرف في index.html.",
				unspecifiedConfigOwner: "لم يتم تكوين المالك المعتمد",
				invalidConfigOwner: "مالك القصة غير مُعتمد.",
				createMap: "يتعذر إنشاء الخريطة",
				invalidApp: "%TPL_NAME% غير موجود أو لا يمكن الوصول إليه.",
				appLoadingFail: "وقع خطأ ما، لم يتم تحميل %TPL_NAME% بشكل صحيح.",
				notConfiguredDesktop: "لم يتم تكوين القصة بعد.",
				notConfiguredMobile: "مُنشئ %TPL_NAME% غير مدعوم في حجم العرض الحالي. إذا أمكن، قم بتغيير حجم المستعرض للوصول إلى المُنشئ أو يرجى إنشاء القصة على جهاز بشاشة أكبر.",
				notConfiguredMobile2: "يُرجى تدوير الجهاز للتوجيه الأفقي لاستخدام مُنشئ %TPL_NAME%.",
				notAuthorized: "يجب أن تكون مُعتمدًا للوصول إلى هذه القصة",
				notAuthorizedBuilder: "أنت غير معتمد لاستخدام منشئ %TPL_NAME%.",
				noBuilderIE: "لم يتم دعم المنشيء في Internet Explorer قبل الإصدار %VERSION%. %UPGRADE%",
				noViewerIE: "هذه القصة غير مدعومة في Internet Explorer قبل الإصدار %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>الرجاء تحديث المستعرض</a>.",
				mapLoadingFail: "‏‏حدث خطأ ما، لم يتم تحميل الخريطة بشكل صحيح.",
				signOut: "تسجيل الخروج"
			},
			mobileView: {
				tapForDetails: "الضغط للحصول على التفاصيل",
				clickForDetails: "تعلم المزيد",
				swipeToExplore: "السحب للاستكشاف",
				tapForMap: "الضغط للرجوع إلى الخريطة",
				clickForMap: "الرجوع إلى الخريطة"
			},
			floatLayout: {
				scroll: "التمرير"
			},
			sideLayout: {
				scroll: "قم بالتمرير لأسفل للمزيد!"
			},
			mainStage: {
				back: "السابق"
			},
			headerFromCommon: {
				storymapsText: "قصة داخل خريطة",
				builderButton: "تحرير",
				facebookTooltip: "مشاركة على الفيس بوك",
				twitterTooltip: "مشاركة على تويتر",
				bitlyTooltip: "الحصول على رابط قصير",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب",
				share: "مشاركة",
				checking: "فحص محتوى القصة",
				fix: "إصلاح المشكلات في القصة",
				noerrors: "لم يتم الكشف عن المشكلات",
				tooltipAutoplayDisabled: "وهو غير متوفر في عرض التشغيل التلقائي",
				notshared: "لم يتم مشاركة القصة"
			},
			overviewFromCommon: {
				title: "خريطة النظرة العامة"
			},
			legendFromCommon: {
				title: "مفتاح الخريطة"
			},
			shareFromCommon: {
				copy: "نسخ",
				copied: "تم النسخ",
				open: "فتح",
				embed: "تضمين في صفحة ويب",
				embedExplain: "استخدم كود HTML التالي لتضمين دفتر اليومية في صفحة الويب.",
				size: "الحجم (الاتساع/الارتفاع):",
				autoplayLabel: "وضع التشغيل التلقائي",
				autoplayExplain1: "يتقدّم وضع التشغيل التلقائي خلال القصة في فواصل منتظمة، وهو مثالي في عارض بيانات أو مراقبة عرض عام، ولكن انتبه، ففي مواقف أخرى، قد يجعل القصة أصعب في القراءة. ولا يتم دعم هذا المعلم في عروض صغيرة.",
				autoplayExplain2: "عندما يكون هذا الوضع نشطًا، تتوفر عناصر تحكم تشغيل/إيقاف تشغيل القصة وتعديل سرعة الانتقال.",
				linksupdated: "تم تحديث الروابط!"
			}
        }
    })
);