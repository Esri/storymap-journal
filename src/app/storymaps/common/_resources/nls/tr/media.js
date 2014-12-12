define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Ortam",
				lblSelect2: "İçerik",
				lblMap: "Harita",
				lblImage: "Görüntü",
				lblVideo: "Video",
				lblExternal: "Web sayfası",
				disabled: "Bu özellik Yönetici tarafından devre dışı bırakıldı",
				url: "Bir resmin web adresine manuel olarak girmek için",
				userLookup: "Albüm yükle",
				notImplemented: "Henüz uygulanmadı.",
				noData: "Hiçbir genel albüm bulunamadı"
			},
			imageSelector: {
				lblStep1: "Servisi seç",
				lblStep2: "Ortamınızı seçin",
				lblStep3: "Yapılandır"
			},
			imageSelectorHome: {
				explain: "Sosyal medyadan ya da doğrudan <br /> bir URL\'den resim yükle"
			},
			imageSelectorFlickr: {
				userInputLbl: "Kullanıcı adı",
				signInMsg2: "Kullanıcı bulunamadı",
				loadingFailed: "Yükleme başarısız"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook Kullanıcısı",
				rightHeader: "Facebook Sayfası",
				pageExplain: "Facebook sayfası, <b>esrigis</b> gibi genel bir marka/ürün veya ünlü kişiliktir. Sayfa adını sayfa URL\'sindeki ilk \'/\' karakterinden alabilirsiniz.",
				pageInputLbl: "Sayfa adı",
				lookupMsgError: "Sayfa bulunamadı"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-posta veya Picasa/Google+ ID",
				signInMsg2: "Hesap bulunamadı",
				howToFind: "Picasa ya da Google+ hesabı kimliği nasıl bulunur",
				howToFind2: "Herhangi bir Picasa ya da G+ sayfasının ilk ve ikinci \'/\' karakterleri arasındaki rakamları kopyalayın"
			},
			videoSelectorCommon: {
				check: "Kontrol",
				notFound: "Video bulunamadı",
				found: "Video bulundu",
				select: "Bu videoyu seç"
			},
			videoSelectorHome: {
				other: "Diğer"
			},
			videoSelectorYoutube: {
				url: "Bir Youtube videosu URL\'si",
				pageInputLbl: "Kullanıcı adı",
				lookupMsgError: "Kullanıcı bulunamadı",
				howToFind: "YouTube kullanıcı adı bulma",
				howToFind2: "Kullanıcı adı bu videoların altında gösterilir",
				found: "Bulundu",
				noData: "Hiçbir genel video bulunamadı"
			},
			videoSelectorVimeo: {
				url: "Bir Vimeo videosu URL\'si"
			},
			videoSelectorOther: {
				explain1: "Uygulama ham videoları (avi, mpeg gibi) oynatamaz ancak dahili oynatıcıları olan barındırılan video dosyalarını (YouTube ya da Vimeo) oynatabilir.",
				explain2: "Çoğu çevrimiçi video barındırma hizmeti bu özelliği sunar, videoyu gömmek için geçerli seçeneği bulmalı, verilen kodu kopyalamalı ve %WEBPAGE% kullanmalısınız.",
				explain3: "Alternatif olarak videoyu kendiniz barındırmak istiyorsanız, %EXAMPLE% gibi bir video oynatıcı kullanan bir HTML sayfası oluşturabilir, sayfayı barındırabilir ve ayrıca %WEBPAGE% kullanabilirsiniz.",
				webpage: "Web sayfası özelliği"
			},
			webpageSelectorHome: {
				lblUrl: "Web sayfası URL\'si",
				lblEmbed: "Kod ekle",
				lblOR: "YA DA",
				lblError1: "Hata, iki giriş alanından birini silin.",
				lblError2: "İçe yerleştime kodu yalnızca bir %IFRAMETAG% içerebilir",
				configure: "Yapılandır"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Bir görüntü URL\'si http:// ile başlamalı ve .jpg ya da .png ile bitmelidir",
				lblURLError: "Bu görüntü geçerli gibi görünmüyor. Bir görüntü dosyasına bir doğrudan bağlantı belirtin (URL\'niz genelde .jpg ya da .png ile biter). Bir web sayfasının bağlantıları çalışmayan bir görüntü içeriyor.",
				lblURLCheck: "Görüntü denetleniyor...",
				lblLabel: "Görüntü Alt Yazısı",
				lblLabel1: "Altyazı",
				lblLabel2: "Metnin üzerinde gezin",
				lblLabel3: "Hiçbiri",
				lblLabelPH: "Metin girin...",
				lblMaximize: "Görüntünün köşesinde bir büyütme düğmesi dahil et",
				lblMaximizeHelp: "Yalnızca yüksek kaliteli fotoğraflar için önerilir",
				lblPosition: "Konum",
				lblPosition1: "Merkez",
				lblPosition2: "Dolgu",
				lblPosition3: "Sığdır",
				lblPosition4: "Esnet",
				lblPosition5: "Özel",
				tooltipDimension: "Değer \'px\' ya da \'%\' cinsinden belirtilebilir",
				tooltipDimension2: "Değer //'px//' cinsinden belirtilmelidir",
				lblPosition2Explain: "(kırpılabilir)",
				lblPosition3Explain: "(kırpılmaz)",
				lblPosition3Explain2: "(genişlik her zaman panele sığacaktır)",
				lblPosition4Explain: "(şekil değiştirebilir)",
				unloadLbl: "Okuyucu başka yere gittiğinde yüklemeyi kaldır",
				unloadHelp: "Web Sayfasında ses ya da video ortamı varsa, okuyucu başka bir yere gittiğinde içeriğin oynatımını durdurmak için bu seçeneği işaretli bırakın. Okuyucu metin boyunca ilerlerken örneğin bir arka plan müziğini oynatmaya devam etmek için işareti kaldırın.<br />Web Sayfası bir uygulamaysa, bu seçeneği kaldırarak, okuyucu geri döndüğünde uygulamanın yeniden yüklenmesini önleyebilirsiniz."
			},
			editorActionGeocode: {
				lblTitle: "Adres veya yer bul",
				mapMarkerExplain: "Kullanıcı bağlantıya tıklarken bir harita işaretçisi görür"
			},
			editorActionMedia: {
				lblTitle: "Ana Aşama içeriğini değiştir"
			},
			editorInlineMedia: {
				lblTitle: "Bir resim, video ya da web sayfası ekleme"
			}
		}
	})
);
