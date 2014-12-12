define(
	 ({
		builder: {
			layouts: {
				mainStage: "Ana Aşama",
				sideTitle: "Kenar Panosu",
				sideDescr: "Fotoğraflarınızı, videolarınızı ve haritalarınızı açık ve net bir mesajda mükemmel biçimde birleştiren metin yoğun hikaye düzeni.",
				floatTitle: "Kayar Pano",
				floatDescr: "Kartografinizi odağa koyarken, öykü anlamına yardımcı olan saydam kısa formlu bir metin paneline izin veren bir çıktı görünümü."
			},
			common: {
				lblStatus1: "Yayınlananlar",
				lblStatus2: "Taslak",
				lblStatus3: "Gizli"
			},
			settingsLayoutOptions: {
				title: "Düzen seçenekleri",
				cfgLeft: "Sol",
				cfgRight: "Sağ",
				cfgSmall: "Küçük",
				cfgMedium: "Orta",
				cfgLarge: "Büyük",
				socialLinksLabel: "Paylaşma bağlantılarını her bölümün en altında görüntüle",
				socialLinksDescr: "Bu, okuyuculara %TPL_NAME% öğenizin belirli bölümlerine başvuru yapma ve bunları tanıtma olanağı sağlar. Örneğin, bölüm paylaşımlı simge kullanıyorsanız, okuyucular hikayenizin başlangıcı yerine o belirli %TPL_NAME% bölümüne gider. okuyucularınız başlık bölümündeki sosyal medya bağlantısını kullanarak %TPL_NAME% (başlık sekmesi) öğenizin tamamını tanıtabilir ve %TPL_NAME% başlangıcına gidilmesini sağlayabilir."
			},
			settingsLayoutFonts: {
				title: "Yazı Tipleri",
				defaultLbl: "Varsayılan",
				sectionTitleLbl: "Bölüm başlığı",
				sectionContentLbl: "Bölüm içeriği"
			},
			initPopup: {
				title: "Hoş geldiniz:"
			},
			addEditPopup: {
				disabled: "Bölüm Ekle özelliği devre dışı çünkü maksimum izin verilen bölüm sayısı aşılmış.",
				titleAdd: "Bölüm Ekle",
				titleAddHome: "Ana Bölüm Ekle",
				titleEdit: "Bölüm Düzenle",
				step: "Adım",
				stepMainStageExplain: "Ana Aşama İçeriği",
				stepPanelExplain: "İçerik",
				stepMainStageNextTooltip: "Bölüm başlığı gir ve Ana Aşama içeriğini belirle",
				stepMainStageNextTooltip2: "Ana Aşama içeriğini seç",
				step2NextTooltip: "Bölüm başlığını ve %LAYOUT-TYPE% içeriğini gir",
				stepNextTooltipNext: "sonraki adıma gitmek için",
				stepNextTooltipAdd: "bölüm eklemek için",
				firstAddExplain: "Bu birinci bölüm Ana Bölümünüzdür, bunu öykünüzün \'kapak sayfası\' olarak düşünün. Henüz tanımladığınız başlık büyük yazı tipinde görüntülenecektir.",
				firstAddLeanMore: "Daha Fazla Bilgi",
				titlePlaceholder: "Bölüm başlığı..."
			},
			addEditViewText: {
				editorPlaceholder: "Buraya metin, bağlantı ve küçük grafikler ekleyin.",
				editorActionsTitle: "Ana Aşama Eylemleri",
				editorActionsHelpDescr: "Bu denetimleri kullanarak ana aşamayı değiştirecek bağlantıları oluşturun. Örneğin, okuyucu bir bağlantıya tıkladığında haritayı belirli bir konuma yakınlaştırmak, başka bir web haritası görüntülemek veya bir resim göstermek isteyebilirsiniz.",
				mainStageDisabled: "Ana Aşama Eylemleri, düzenleyici maksimuma getirildiğinde devre dışı bırakılır"
			},
			organizePopup: {
				title: "Düzenle",
				lblHeader: "İçeriğinizi düzenlemek için sürükleyip bırakın.",
				lblColTitle: "Başlık",
				lblColPubDate: "Yayımlanma tarihi",
				lblColStatus: "Durum",
				checkDisplayReverse: "Bölümleri ters sırada göster",
				btnApplyWarning: "%NB% bölümlerinin silinmesini onayla",
				deleteTooltip: "Sil",
				firstSectionExplain: "(Ana sayfa bölümü taşınamaz)",
				exportMainStage: "Ana Aşama içeriği",
				exportPanel: "Panel içeriği",
				exportActions: "Ana Aşama eylemleri"
			},
			exportData: {
				btn: "İçeriği dışa aktar",
				tooltip: "İçeriğinizin dışa aktarılması, içeriğinizi yanlışlıkla silmeniz durumunda gerekecek bir yedek oluşturmanızı ve görüntülemenizi sağlar. İçeriği sayfadan kopyalamanız ve bir kelime işlemciye yapıştırmanız yeterlidir."
			},
			help: {
				lblHelp: "Yardım",
				lblAdd: "Bölüm Ekle",
				lblSettings: "Ayarlar",
				lblOrga: "İçeriği düzenle",
				lblEdit: "Düzenlemeler",
				lblPublish: "Paylaş",
				lblTips: "İpuçları",
				lblMore: "Daha çok mu istiyorsunuz?",
				lblLink: "Esri Story Maps web sitesini ziyaret edin.",
				content1Div1: "Hikayenizi oluştururken çeşitli stiller kullanabilirsiniz. <strong>%LAYOUT_TITLE%</strong> genellikle metninizi, resimlerinizi ve videonuzu saklar, haritalarınız ise <strong>Ana Aşama</strong> içindedir. Bununla birlikte %TPL_NAME%, size resimleri, grafikleri ve videoyu da ana aşama içinde gösterme olanağı tanır.",
				content1Div2: "Bölüm ekleme, hikaye aktarma deneyiminizi gerçek anlamda özelleştirmenize olanak tanır. Okuyucular %LAYOUT_TITLE% metninizde ilerledikçe, Ana Aşama üzerindeki bir harita temel noktalara genişleyerek veya yakınlaşarak ya da yeni haritalara ve resimlere otomatik geçiş yaparak mesajınızı destekler.",
				content2Div1: "Ayarlar iletişiminde %TPL_NAME% adınızın görünümünü değiştirebilirsiniz. Düzeni değiştirebilir, farklı bir renk şeması seçebilir, metin yazı tipini değiştirebilirsiniz vb.",
				content2Div2: "Ayrıca Esri logosunu kendi logonuzla değiştirerek markanızı yansıtabilirsiniz. Ayrıca okuyucular logonuza tıkladığında açılacak web sitesini belirleyebilirsiniz, bu sayede daha fazla bilgi alabilirler.",
				content3Div1: "İçeriğiniz bölümlere ayrılmıştır. İstediğiniz kadar çok bölüm oluşturabilirsiniz (bunları alt bölümler olarak düşünün). Bu alt bölümlerin akışı önemlidir; bölümleri Düzenle içinden istediğiniz gibi yeniden sıralayabilir veya silebilirsiniz.",
				content4Div1: "Bir hata mı buldunuz ya da malzemenizi mi değiştirmek istiyorsunuz? Hiç sorun değil. İçeriğinizde değişiklik yapmak için uygulama içinde düzenle simgesini arayın. %TPL_NAME% uygulamanızı geliştirirken düzenleme işlevlerini çok sık kullanacaksınız!",
				content5Div1: "%TPL_NAME% adınızı kaydettiğinizde, başlangıçta özeldir. Paylaş düğmesini kullanarak bunu başkalarıyla paylaşabilirsiniz. %TPL_NAME% adınızı genel olarak paylaşabilirsiniz, bu sayede verinize herkes erişebilir.",
				content5Div2: "Hesabınıza bağlı olarak ayrıca %TPL_NAME% adınızı yalnızca kuruluşunuzdaki insanlarla paylaşma seçeneğiniz olabilir, bu sayede başkalarının erişimi olmayacaktır.",
				content6Div1: "Ana bölümünüzün başlığı ayrıca bülteninizin de başlığıdır. Ana bölümünüzü bülteninizin \'kapak sayfası\' olarak düşünün. Ana Bölüm başlığı, okuyucularınız bültende gezerken görünür kalacaktır.",
				content6Div2: "%LAYOUT_TITLE% başlığınız yalnızca metin olmak zorunda değildir, fotoğraflar ve videolar da ekleyerek öyküyü daha canlı hale getirebilir ve uzun metin kısımlarını ayırabilirsiniz!"
			},
			landing: {
				lblAdd: "Harita Bülteninize ne ad vermek istersiniz?",
				phAdd: "Başlığınızı girin...",
				lblOR: "Veya",
				lblHelp: "Tanıtım Gezisi"
			},
			firstAddSplash: {
				thisis: "Burası:",
				lblMain: "Bu %BR% Ana Aşamasıdır"
			}
        }
    })
);
