define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Conţinut",
				lblMap: "Hartă",
				lblImage: "Imagine",
				lblVideo: "Video",
				lblExternal: "Pagină web",
				disabled: "Acest obiect spaţial a fost dezactivat de administrator",
				url: "Pentru introducerea manuală a adresei web a unei imagini",
				userLookup: "Încărcare albume",
				notImplemented: "Neimplementat încă.",
				noData: "Nu a fost găsit niciun album public"
			},
			imageSelector: {
				lblStep1: "Alegere serviciu",
				lblStep2: "Selectare media",
				lblStep3: "Configurare"
			},
			imageSelectorHome: {
				explain: "Încărcare imagini din servicii de socializare <br /> sau direct dintr-un URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nume utilizator",
				signInMsg2: "Utilizator negăsit",
				loadingFailed: "Încărcare eşuată"
			},
			imageSelectorFacebook: {
				leftHeader: "Utilizator Facebook",
				rightHeader: "Pagină Facebook",
				pageExplain: "O pagină de Facebook este o marcă sau un produs public sau o celebritate precum <b>esrigis</b>. Puteţi prelua numele paginii după primul caracter „/” din URL-ul paginii.",
				pageInputLbl: "Nume pagină",
				lookupMsgError: "Pagină negăsită"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-mail sau ID Picasa/Google+",
				signInMsg2: "Cont negăsit",
				howToFind: "Găsirea unui ID de cont Picasa sau Google+",
				howToFind2: "Copiaţi cifrele dintre primul şi al doilea caracter „/” a unei pagini Picasa sau G+"
			},
			videoSelectorCommon: {
				check: "Bifaţi",
				notFound: "Clip video negăsit",
				found: "Clip video găsit",
				select: "Selectaţi acest clip video"
			},
			videoSelectorHome: {
				other: "Altul"
			},
			videoSelectorYoutube: {
				url: "URL al unui clip video de pe Youtube",
				pageInputLbl: "Nume utilizator",
				lookupMsgError: "Utilizator negăsit",
				howToFind: "Cum găsiţi un nume de utilizator YouTube",
				howToFind2: "Numele de utilizator este afişat sub videoclipuri",
				found: "Găsit",
				noData: "Nu a fost găsit niciun videoclip public"
			},
			videoSelectorVimeo: {
				url: "URL al unui clip video de pe Vimeo"
			},
			videoSelectorOther: {
				explain1: "Aplicaţia nu poate reda clipuri video brute (de ex., avi, mpeg) însă poate reda fişiere video găzduite, care au aplicaţii de redare încorporate (de ex., YouTube sau Vimeo).",
				explain2: "Majoritatea serviciilor de găzduire video online oferă această funcţie; trebuie să găsiţi opţiunea de a încorpora clipul video, copiaţi codul dat şi utilizaţi %WEBPAGE%.",
				explain3: "Alternativ, dacă doriţi să găzduiţi voi înşivă clipul video, puteţi crea o pagină HTML care să utilizeze o aplicaţie de redare video, cum ar fi %EXAMPLE%, găzduiţi pagina şi utilizaţi %WEBPAGE%.",
				webpage: "Obiect spaţial pagină web"
			},
			webpageSelectorHome: {
				lblUrl: "URL pagină web",
				lblEmbed: "Încorporare cod",
				lblOR: "SAU",
				lblError1: "Eroare, eliminaţi unul sau două câmpuri de intrare.",
				lblError2: "Codul încorporat poate conţine numai un %IFRAMETAG%",
				configure: "Configurare"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Un URL de imagine trebuie să înceapă cu http:// şi să se încheie cu .jpg sau .png",
				lblURLError: "Această imagine nu pare validă. Specificaţi un link direct către un fişier imagine (adresa URL se va termina de regulă cu .jpg sau .png). Linkurile către o pagină web care conţine o imagine nu vor funcţiona.",
				lblURLCheck: "Se verifică imaginea...",
				lblLabel: "Subtitlu imagine",
				lblLabel1: "Subtitlu",
				lblLabel2: "Text informativ",
				lblLabel3: "Niciunul",
				lblLabelPH: "Introduceţi text...",
				lblMaximize: "Includeţi un buton de maximizare în colţul imaginii",
				lblMaximizeHelp: "Recomandat numai pentru fotografii la calitate ridicată",
				lblPosition: "Poziţie",
				lblPosition1: "Centru",
				lblPosition2: "Umplere",
				lblPosition3: "Potrivire",
				lblPosition4: "Întindere",
				lblPosition5: "Particularizat",
				tooltipDimension: "Valoarea poate fi specificată în „px” sau „%”",
				tooltipDimension2: "Valoarea trebuie să fie specificată în „px”",
				lblPosition2Explain: "(poate fi decupat)",
				lblPosition3Explain: "(nu poate fi decupat)",
				lblPosition3Explain2: "(lăţimea va corespunde întotdeauna panoului)",
				lblPosition4Explain: "(poate fi distorsionat)",
				unloadLbl: "Se revocă încărcarea când cititorul trece în altă secţiune",
				unloadHelp: "Dacă pagina web conţine materiale audio sau video, păstraţi această opţiune bifată pentru a opri redarea în momentul în care cititorul trece în altă secţiune. Debifaţi-o, de exemplu, pentru a continua redarea unei melodii când cititorul avansează în jurnal.<br />Dacă pagina web este o aplicaţie, debifaţi această opţiune pentru ca aplicaţia să nu fie nevoită să se încarce din nou când cititorul revine în secţiunea respectivă."
			},
			editorActionGeocode: {
				lblTitle: "Localizaţi o adresă sau un loc",
				mapMarkerExplain: "Utilizatorul va vedea un marcaj pe hartă când va face clic pe link"
			},
			editorActionMedia: {
				lblTitle: "Modificare conţinut pentru Nivelul principal"
			},
			editorInlineMedia: {
				lblTitle: "Inserare imagine, videoclip sau pagină web"
			}
		}
	})
);
