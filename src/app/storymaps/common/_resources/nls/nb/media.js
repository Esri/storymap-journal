define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medier",
				lblSelect2: "Innhold",
				lblMap: "Kart",
				lblImage: "Bilde",
				lblVideo: "Video",
				lblExternal: "Webside",
				disabled: "Administratoren har deaktivert denne funksjonen",
				url: "For å angi webadressen til et bilde manuelt",
				userLookup: "Last inn albumer",
				notImplemented: "Ikke implementert ennå.",
				noData: "Finner ingen offentlige albumer"
			},
			imageSelector: {
				lblStep1: "Velg tjeneste",
				lblStep2: "Velg medier",
				lblStep3: "Konfigurer"
			},
			imageSelectorHome: {
				explain: "Last inn bilder fra sosiale medier <br /> eller direkte fra en URL-adresse"
			},
			imageSelectorFlickr: {
				userInputLbl: "Brukernavn",
				signInMsg2: "Finner ikke bruker",
				loadingFailed: "Innlasting mislyktes"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-bruker",
				rightHeader: "Facebook-side",
				pageExplain: "En Facebook-side er for et offisielt merke, et produkt eller en kjendis, for eksempel <b>esrigis</b>. Du finner navnet på siden etter første / i sidens URL-adresse.",
				pageInputLbl: "Sidenavn",
				lookupMsgError: "Finner ikke siden"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-postadresse eller Picasa-/Google+-ID",
				signInMsg2: "Finner ikke kontoen",
				howToFind: "Slik finner du en konto-ID for Picasa eller Google+",
				howToFind2: "Kopier tallene mellom første og andre/ på en tilfeldig side på Picasa eller G+"
			},
			videoSelectorCommon: {
				check: "Kontroller",
				notFound: "Fant ikke videoen",
				found: "Fant videoen",
				select: "Velg denne videoen"
			},
			videoSelectorHome: {
				other: "Annet"
			},
			videoSelectorYoutube: {
				url: "Nettadressen for en Youtube-video",
				pageInputLbl: "Brukernavn",
				lookupMsgError: "Finner ikke bruker",
				howToFind: "Slik finner du et YouTube-brukernavn",
				howToFind2: "Brukernavnet vises under videoer",
				found: "Funnet",
				noData: "Finner ingen offentlige videoer",
				videoNotChecked: "Videoen er ikke kontrollert på YouTube, men adressen ser riktig ut.",
				checkFailedAPI: "YouTube-kontrollen mislyktes. Sjekk YouTube API-nøkkelen."
			},
			videoSelectorVimeo: {
				url: "Nettadressen for en Vimeo-video"
			},
			videoSelectorOther: {
				explain1: "Historien kan ikke spille av råvideoer (f.eks. AVI- eller MPEG-filer), men den kan spille av hostede videofiler som har innebygde spillere (f.eks. YouTube eller Vimeo).",
				explain2: "De fleste nettbaserte videotjenester har denne funksjonen. Du må finne alternativet for å bygge inn videoen, kopiere den oppgitte koden og bruke %WEBPAGE%.",
				explain3: "Du kan eventuelt være lagre og administrere videoen selv. Da må du lage en HTML-side som bruker en videospiller som %EXAMPLE%, være vert for den siden og også bruke %WEBPAGE%.",
				webpage: "Nettsidefunksjon"
			},
			webpageSelectorHome: {
				lblUrl: "Nettside-URL",
				lblEmbed: "Bygg inn kode",
				lblOR: "ELLER",
				lblError1: "Feil, fjern ett av de to inndatafeltene.",
				lblError2: "Innbygging av kode kan inneholde bare én %IFRAMETAG%",
				configure: "Konfigurer"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "En bilde-URL bør starte med http:// og slutte med .jpg eller .png",
				lblURLError: "Dette bildet ser ikke ut til å være gyldig. Angi en direkte kobling til en bildefil (URL-adressen skal normalt ende på .jpg eller .png). Koblinger til en webside som inneholder et bilde, kommer ikke til å fungere.",
				lblURLCheck: "Kontrollerer bilde...",
				lblLabel: "Bildetekst",
				lblLabel1: "Undertekst",
				lblLabel2: "Tekst med musepekeren over",
				lblLabel3: "Ingen",
				lblLabelPH: "Skriv inn noe tekst...",
				lblMaximize: "Ta med en maksimeringsknapp i bildehjørnet",
				lblMaximizeHelp: "Anbefales bare for bilder av høy kvalitet",
				lblPosition: "Posisjon",
				lblPosition1: "Midtstill",
				lblPosition2: "Fyll",
				lblPosition3: "Tilpass",
				lblPosition4: "Strekk",
				lblPosition5: "Tilpasset",
				tooltipDimension: "Verdien kan angis i \'px\' eller \'%\'",
				tooltipDimension2: "Verdien må angis i piksler",
				lblPosition2Explain: "(kan bli beskåret)",
				lblPosition3Explain: "(blir ikke beskåret)",
				lblPosition3Explain2: "(bredden passer alltid med panelet)",
				lblPosition4Explain: "(kan bli forvrengt / vises skjevt)",
				unloadLbl: "Last ut når leseren navigerer bort",
				unloadHelp: "Hvis websiden har lyd- eller videomedier, beholder du dette alternativet avmerket for å forhindre at det innholdet spilles av når leseren navigerer bort. Fjern merket for eksempel for å la et lydspor fortsette å spilles av mens leseren går gjennom historien.<br />Hvis websiden er et program, fjerner du avmerkingen for dette alternativet, slik at historien ikke lastes inn på nytt hvis leseren går tilbake til den."
			},
			editorActionGeocode: {
				lblTitle: "Finn en adresse eller et sted",
				mapMarkerExplain: "Brukeren ser en kartmarkør når han/hun klikker på koblingen"
			},
			editorActionMedia: {
				lblTitle: "Endre innholdet for hovedstadiet"
			},
			editorInlineMedia: {
				lblTitle: "Sett inn et bilde, en video eller en webside"
			}
		}
	})
);
