define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Meedia",
				lblSelect2: "Sisu",
				lblMap: "Kaart",
				lblImage: "Pilt",
				lblVideo: "Video",
				lblExternal: "Veebileht",
				disabled: "See funktsioon on administraatori poolt välja lülitatud",
				url: "Pildi veebiaadressi käsitsi sisestamiseks",
				userLookup: "Laadi albumid",
				notImplemented: "Pole veel kasutusele võetud.",
				noData: "Avalikku albumit ei leitud"
			},
			imageSelector: {
				lblStep1: "Valige teenus",
				lblStep2: "Valige meedium",
				lblStep3: "Seadista"
			},
			imageSelectorHome: {
				explain: "Pildid saate laadida sotsiaalmeediast <br /> või otse kindlalt URL-ilt"
			},
			imageSelectorFlickr: {
				userInputLbl: "Kasutajanimi",
				signInMsg2: "Kasutajat ei leitud",
				loadingFailed: "Laadimine nurjus"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebooki kasutajanimi",
				rightHeader: "Facebooki leht",
				pageExplain: "Facebooki leht on avalik kaubamärk/toode nagu <b>esrigis</b>. Saad lehe nime pärast esimest \'/\' lehekülje URL-il.",
				pageInputLbl: "Lehe nimi",
				lookupMsgError: "Lehte ei leitud"
			},
			imageSelectorPicasa: {
				userInputLbl: "e-post või Picasa/Google+ ID",
				signInMsg2: "Kontot ei leitud",
				howToFind: "Kuidas leida Picasa või Google+ konto ID-d",
				howToFind2: "Kopeeri numbrikohad esimese ja teise \'/\' vahelt Picasa või G+ lehelt"
			},
			videoSelectorCommon: {
				check: "Kontrolli",
				notFound: "Videot ei leitud",
				found: "Video leiti",
				select: "Vali see video"
			},
			videoSelectorHome: {
				other: "Muu"
			},
			videoSelectorYoutube: {
				url: "Youtube video URL",
				pageInputLbl: "Kasutajanimi",
				lookupMsgError: "Kasutajat ei leitud",
				howToFind: "Kuidas leida YouTube’i kasutajanime",
				howToFind2: "Kasutajanime kuvatakse videote all",
				found: "Leitud",
				noData: "Avalikke videoid ei leitud"
			},
			videoSelectorVimeo: {
				url: "Vimeo video URL"
			},
			videoSelectorOther: {
				explain1: "Rakendus ei saa esitada töötlemata videoid (nt .avi, .mpeg), kuid saab esitada majutatud videoid sisseehitatud pleierites (nt YouTube või Vimeo).",
				explain2: "Enamik veebis olevaid videomajutusteenuseid pakub seda funktsiooni. Peate leidma video lisamise võimaluse, kopeerima antud koodi ja kasutama veebilehte %WEBPAGE%.",
				explain3: "Kui soovite aga videot ise majutada, saate luua HTML-lehe, mis kasutab näiteks videopleierit %EXAMPLE%, selle lehe majutada ning kasutada ka veebilehte %WEBPAGE%.",
				webpage: "Veebilehe funktsioon"
			},
			webpageSelectorHome: {
				lblUrl: "Veebilehe URL",
				lblEmbed: "Lisa kood",
				lblOR: "VÕI",
				lblError1: "Viga, tühjendage üks kahest sisendväljast.",
				lblError2: "Lisatud kood võib sisaldada ainult ühte märksõna %IFRAMETAG%",
				configure: "Seadista"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Pildi URL-i alguses peaks olema http:// ja lõpus laiend .jpg või .png",
				lblURLError: "See pilt paistab olevat vigane. Määrake pildifaili otselink (URL-i lõpus on üldiselt laiend .jpg või .png). Pilti sisaldava veebilehe lingid ei tööta.",
				lblURLCheck: "Pildi kontrollimine...",
				lblLabel: "Pildi alapealkiri",
				lblLabel1: "Alapealkiri",
				lblLabel2: "Hõljuktekst",
				lblLabel3: "Pole",
				lblLabelPH: "Sisestage teksti...",
				lblMaximize: "Lisa pildi nurka maksimeerimise nupp",
				lblMaximizeHelp: "Soovitatud ainult kvaliteetsete piltide puhul",
				lblPosition: "Paigutus",
				lblPosition1: "Keskel",
				lblPosition2: "Täida",
				lblPosition3: "Sobita",
				lblPosition4: "Venita",
				lblPosition5: "Kohandatud",
				tooltipDimension: "Väärtuse ühikuks võib olla px või %",
				tooltipDimension2: "Väärtuse ühikuks peab olema px",
				lblPosition2Explain: "(võib kärpida)",
				lblPosition3Explain: "(ei kärbita)",
				lblPosition3Explain2: "(laius on alati paneelile vastav)",
				lblPosition4Explain: "(võib moonutada)",
				unloadLbl: "Laadi maha, kui lugeja liigub mujale",
				unloadHelp: "Kui veebileht sisaldab audio- või videosisu, märkige see valik, et takistada selle sisu esitamist siis, kui lugeja liigub mujale. Tühjendage see valik näiteks siis, kui soovite, et heliriba esitataks siis, kui lugeja läbi loo liigub.<br />Kui veebileht on rakendus, tühjendage see valik, et rakendust ei laaditaks uuesti siis, kui lugeja selle juurde naaseb."
			},
			editorActionGeocode: {
				lblTitle: "Märgi aadress või asukoht",
				mapMarkerExplain: "Kasutajad näevad lingi klõpsamisel kaardil tähist"
			},
			editorActionMedia: {
				lblTitle: "Põhietapi sisu muutmine"
			},
			editorInlineMedia: {
				lblTitle: "Pildi, video või veebilehe lisamine"
			}
		}
	})
);
