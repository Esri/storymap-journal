﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Harita",
				lblLocation: "Konum",
				lblContent: "İçerik",
				lblPopup: "Açılır Menü",
				lblControls: "Ekstralar",
				lblOverview: "Genel Bakış Haritası",
				lblLegend: "Gösterim",
				loadingTitle: "Başlık yükleniyor",
				entry: "Giriş",
				entries: "Girişler",
				section: "Bölüm",
				sections: "Bölümler",
				and: "ve",
				action: "Bölümdeki eylem",
				actions: "Bölümlerdeki eylem",
				originalWebmap: "%TPL_NAME% yayınlamak için kullanılan harita",
				browseMaps: "Harita seç",
				createMap: "Harita oluştur",
				current: "Geçerli harita",
				select: "Harita seçin veya oluşturun",
				newMap: "Yeni seçilen harita",
				newCreatedMap: "Yeni oluşturulan harita",
				webmapDefault: "Harita varsayılanı",
				customCfg: "Özel yapılandırma",
				tooltipLocation: "Bu haritanın görüntüleyeceği konumu tanımlayın.",
				tooltipContent: "Görünür katmanları tanımlayın.",
				tooltipPopup: "Bu harita görüntülendiğinde açılacak bir açılır pencere seçin.",
				tooltipOverview: "Ana haritayla birlikte küçük bir genel bakış haritası görüntüleyin.",
				tooltipLegend: "Harita gösterimini harita üzerinde görüntüleyin, haritada bir çok katman ve sembol olduğunda yararlıdır.",
				mapCfgInvite: "Haritanızı yapılandırmak için şu denetimleri kullanın",
				lblLocationAlt: "Bu haritadan alındı",
				tooltipLocationAlt: "Bu haritanın konumu dizideki birinci harita ile eşitlenir. Dizileriniz için bu davranışı değiştirmek amacıyla Ayarlar > Harita Seçenekleri\'ne gidin."
			},
			configure: {
				btnReset: "Sıfırla",
				btnCancel: "İptal",
				tocTitle: "Harita içeriği",
				tocExplain: "Gösterilecek katmanları seçin.",
				tocNoData: "Herhangi bir katman yapılandırılamadı.",
				tocSave: "Harita içeriğini kaydedin",
				extentTitle: "Harita konumu",
				extentExplain: "Okuyucularınıza görüntüleneceği biçimi tanımlamak için haritayı genişletin ve yakınlaştırın.",
				extentSave: "Harita konumunu kaydet",
				popupTitle: "Harita açılır penceresi",
				popupExplain: "Görüntülemek istediğiniz açılır pencereyi açmak için bir detaya tıklayın.",
				popupSave: "Açılır pencere yapılandırmasını kaydet",
				hintNavigation: "Harita navigasyonu devre dışı bırakıldı."
			},
			editor: {
				loading: "Harita düzenleyici yüklenirken bekleyin",
				newTitle: "Yeni harita oluştur",
				editTitle: "Harita düzenle",
				titleLbl: "Başlık",
				titlePh: "Harita başlığı...",
				folderLbl: "Harita, hikaye ile aynı klasörde oluşturulacak.",
				creating: "Harita oluşturuluyor",
				saving: "Harita kaydediliyor",
				success: "Harita kaydedildi",
				successCreate: "Harita oluşturuldu",
				cancelTitle: "Kaydedilmemiş değişiklikler atılsın mı?",
				errorDuplicate: "Bu başlığa sahip bir haritanız zaten var",
				errorCreate: "Harita oluşturulamıyor. Yeniden deneyin.",
				errorSave: "Harita kaydedilemiyor. Yeniden deneyin.",
				notavailable1: "Üzgünüz, teknik bir sınırlama nedeniyle Firefox\'ta harita oluşturma veya düzenleme desteklenmez. Hikayenizi farklı bir web tarayıcısı kullanarak oluşturmak isteyebilirsiniz veya aşağıdaki çözümü kullanabilirsiniz.",
				notavailable2: "Üzgünüz, story map uygulaması %PRODUCT% içinde barındırılmadığından harita oluşturma veya düzenleme desteklemez. Daha fazla bilgi için ArcGIS yöneticinize başvurun.",
				notavailable3: "Üzgünüz, harita oluşturma veya düzenleme Portal for ArcGIS (10.4 veya üstü gerekir) uygulamasının bu sürümünde desteklenmez. Daha fazla bilgi için ArcGIS yöneticinize başvurun.",
				notavailable4: "%MV% kullanarak bir harita oluşturabilir, daha sonra buraya gelerek bunu hikayenize ekleyebilirsiniz.",
				notavailable5: "%MV% kullanarak haritayı düzenleyebilir, daha sonra buraya gelerek %apply% işlemi ile değişikliklerinizi görebilirsiniz.",
				notavailable6: "harita görüntüleyici",
				notavailable7: "haritayı yeniden yükle"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Kuruluşum",
					onlineLabel: "ArcGIS Online",
					contentLabel: "İçeriğim",
					favoritesLabel: "Favorilerim"
				},
				title: "Harita seç",
				searchTitle: "Ara",
				ok: "Tamam",
				cancel: "İptal",
				placeholder: "Arama terimini veya web haritası kimliğini girin..."
			}
		}
	})
);
