define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medier",
				lblSelect2: "Indhold",
				lblMap: "Kort",
				lblImage: "Billede",
				lblVideo: "Video",
				lblExternal: "Webside",
				disabled: "Dette objekt er blevet deaktiveret af administratoren",
				url: "Hvis du vil angive webadressen til et billede manuelt",
				userLookup: "Indlæs albummer",
				notImplemented: "Ikke implementeret endnu.",
				noData: "Intet offentligt album fundet"
			},
			imageSelector: {
				lblStep1: "Vælg tjeneste",
				lblStep2: "Vælg dine medier",
				lblStep3: "Konfigurér"
			},
			imageSelectorHome: {
				explain: "Indlæs billeder fra sociale medier <br /> eller direkte fra en URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Brugernavn",
				signInMsg2: "Bruger ikke fundet",
				loadingFailed: "Indlæsning mislykkedes"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-bruger",
				rightHeader: "Facebook-side",
				pageExplain: "En Facebook-side er et offentligt varemærke//produkt eller en celebritet ligesom <b>esrigis</b>. Du kan få sidenavnet efter den første \'\/\' i sidens URL.",
				pageInputLbl: "Sidenavn",
				lookupMsgError: "Side ikke fundet"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-mail eller Picasa/Google+ ID",
				signInMsg2: "Kontoen kunne ikke findes",
				howToFind: "Sådan findes et Picasa- eller Google+ konto-ID",
				howToFind2: "Kopier tal mellem første og anden \'\/\' på Picasa eller en G+-side"
			},
			videoSelectorCommon: {
				check: "Kontrollér",
				notFound: "Video ikke fundet",
				found: "Video fundet",
				select: "Vælg denne video"
			},
			videoSelectorHome: {
				other: "Andet"
			},
			videoSelectorYoutube: {
				url: "URL til en Youtube-video",
				pageInputLbl: "Brugernavn",
				lookupMsgError: "Bruger ikke fundet",
				howToFind: "Sådan finder du et YouTube-brugernavn",
				howToFind2: "Brugernavnet vises under videoer",
				found: "Fundet",
				noData: "Ingen offentlige videoer fundet"
			},
			videoSelectorVimeo: {
				url: "URL til en Vimeo-video"
			},
			videoSelectorOther: {
				explain1: "Applikationen kan ikke afspille \"rå\" videoer (f.eks. avi, mpeg), men den kan afspille \"hostede\" videofiler, der har indbyggede afspillere (f.eks. YouTube eller Vimeo).",
				explain2: "De fleste online-videoværtstjenester tilbyder denne funktion. Du skal finde indstillingen til indlejring af videoen, kopiere den givne kode og bruge %WEBPAGE%.",
				explain3: "Hvis du ønsker selv at være vært for videoen, kan du også oprette en HTML-side, der bruger en videoafspiller som %EXAMPLE%, være vært for den pågældende side og også bruge %WEBPAGE%.",
				webpage: "Websideobjekt"
			},
			webpageSelectorHome: {
				lblUrl: "Webside-URL",
				lblEmbed: "Indlejr kode",
				lblOR: "ELLER",
				lblError1: "Fejl. Ryd et af de to indtastningsfelter.",
				lblError2: "Indlejret kode kan kun indeholde én %IFRAMETAG%",
				configure: "Konfigurér"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "En billede-URL skal starte med http:// og slutte med .jpg eller .png",
				lblURLError: "Dette billede er tilsyneladende ikke gyldigt. Angiv et direkte link til en billedfil (din URL skal normalt slutte med .jpg eller .png). Links til en webside, der indeholder et billede, fungerer ikke.",
				lblURLCheck: "Kontrollerer billedet...",
				lblLabel: "Billedtekst",
				lblLabel1: "Billedtekst",
				lblLabel2: "Hold musen over teksten",
				lblLabel3: "Ingen",
				lblLabelPH: "Indtast noget tekst...",
				lblMaximize: "Medtag en maksimér-knap i hjørnet af billedet",
				lblMaximizeHelp: "Anbefales kun for højkvalitetsfotos",
				lblPosition: "Position",
				lblPosition1: "Midt",
				lblPosition2: "Fyld",
				lblPosition3: "Tilpas",
				lblPosition4: "Stræk",
				lblPosition5: "Tilpasset",
				tooltipDimension: "Værdien kan angives i \'px\' eller \'%\'",
				tooltipDimension2: "Værdien skal angives i \"px\"",
				lblPosition2Explain: "(kan beskæres)",
				lblPosition3Explain: "(kan ikke beskæres)",
				lblPosition3Explain2: "(bredden vil altid passe til panelet)",
				lblPosition4Explain: "(kan forvrænges)",
				unloadLbl: "Udlæs, når læseren navigerer væk",
				unloadHelp: "Bevar markeringen af denne indstilling, hvis websiden har medier med lyd eller video, for at forhindre, at indholdet afspilles, når læseren navigerer til en anden sektion. Fjern markeringen, hvis lydsporet skal afspilles, mens læseren gennemgår historien.<br />Fjern markeringen af denne indstilling, hvis websiden er en applikation, så genindlæses applikationen ikke, hvis læseren vender tilbage til den pågældende sektion."
			},
			editorActionGeocode: {
				lblTitle: "Find en adresse eller et sted",
				mapMarkerExplain: "Brugeren får vist en kortmarkør ved at klikke på linket"
			},
			editorActionMedia: {
				lblTitle: "Redigér indholdet i hovedområdet"
			},
			editorInlineMedia: {
				lblTitle: "Indsæt et billede, en video eller en webside"
			}
		}
	})
);
