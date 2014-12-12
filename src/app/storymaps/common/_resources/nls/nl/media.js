define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Content",
				lblMap: "Kaart",
				lblImage: "Afbeelding",
				lblVideo: "Video",
				lblExternal: "Webpagina",
				disabled: "Deze functie is uitgeschakeld door de beheerder",
				url: "Om het webadres van een afbeelding handmatig in te voeren",
				userLookup: "Albums laden",
				notImplemented: "Nog niet geïmplementeerd.",
				noData: "Geen openbaar album gevonden"
			},
			imageSelector: {
				lblStep1: "Kies de service",
				lblStep2: "Selecteer uw media",
				lblStep3: "Configureren"
			},
			imageSelectorHome: {
				explain: "Laad afbeeldingen vanaf sociale media, <br /> of direct vanaf een URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Gebruikersnaam",
				signInMsg2: "Gebruiker niet gevonden",
				loadingFailed: "Laden mislukt"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-gebruiker",
				rightHeader: "Facebook-pagina",
				pageExplain: "Een Facebook-pagina is een openbaar merk/product of beroemdheid zoals <b>esrigis</b>. U vindt de naam van de pagina achter de eerste  \'/\' in de URL van de pagina.",
				pageInputLbl: "Paginanaam",
				lookupMsgError: "Pagina niet gevonden"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-mail of Picasa-/Google+-ID",
				signInMsg2: "Account niet gevonden",
				howToFind: "Zoeken naar een Picasa- of Google+-account-ID",
				howToFind2: "Kopieer getallen tussen de eerste en tweede \'/\' van een pagina van Picasa of G+"
			},
			videoSelectorCommon: {
				check: "Controleren",
				notFound: "Video niet gevonden",
				found: "Video gevonden",
				select: "Deze video selecteren"
			},
			videoSelectorHome: {
				other: "Anders"
			},
			videoSelectorYoutube: {
				url: "URL van een Youtube-video",
				pageInputLbl: "Gebruikersnaam",
				lookupMsgError: "Gebruiker niet gevonden",
				howToFind: "Hoe een YouTube-gebruikersnaam vinden",
				howToFind2: "Gebruikersnaam wordt weergegeven onder video\'s",
				found: "Gevonden",
				noData: "Geen openbare video\'s gevonden"
			},
			videoSelectorVimeo: {
				url: "URL van een Vimeo-video"
			},
			videoSelectorOther: {
				explain1: "De applicatie kan geen onbewerkte video afspelen (zoals avi of mpeg), maar het kan wel gehoste videobestanden met ingebouwde spelers afspelen (zoals YouTube of Vimeo).",
				explain2: "De meeste online videoservices bieden deze functie. U moet de optie vinden om de video in te kunnen sluiten, de verstrekte code kopieren en de %WEBPAGE% gebruiken.",
				explain3: "Als u de video zelf wilt hosten, kunt u een HTML-pagina maken die een videospeler gebruikt zoals %EXAMPLE%. Host die pagina en gebruik tevens de %WEBPAGE%.",
				webpage: "Functie webpagina"
			},
			webpageSelectorHome: {
				lblUrl: "URL webpagina",
				lblEmbed: "Code voor inbedden",
				lblOR: "OF",
				lblError1: "Fout: maak een van de twee velden leeg.",
				lblError2: "Invoegcode kan maar één %IFRAMETAG% bevatten",
				configure: "Configureren"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Een afbeeldings-URL moet beginnen met http:// en met .jpg of .png eindigen",
				lblURLError: "Deze afbeelding is blijkbaar niet geldig. Geef een directe koppeling naar een afbeeldingsbestand op (uw URL eindigt doorgaans op .jpg of .png). Koppelingen naar een webpagina die een afbeelding bevat, functioneren niet.",
				lblURLCheck: "Afbeelding bekijken...",
				lblLabel: "Bijschrift afbeelding",
				lblLabel1: "Bijschrift",
				lblLabel2: "Over tekst bewegen",
				lblLabel3: "Geen",
				lblLabelPH: "Voer wat tekst in...",
				lblMaximize: "Voeg een knop voor maximaliseren in de hoek van de afbeelding toe",
				lblMaximizeHelp: "Alleen aanbevolen voor foto\'s van hoge kwaliteit",
				lblPosition: "Positie",
				lblPosition1: "Centreren",
				lblPosition2: "Vulling",
				lblPosition3: "Passend maken",
				lblPosition4: "Uitrekken",
				lblPosition5: "Aangepast",
				tooltipDimension: "De waarde kan in 'px' of '%' worden gespecificeerd",
				tooltipDimension2: "De waarde moet worden opgegeven in \'px\'",
				lblPosition2Explain: "(kan worden bijgesneden)",
				lblPosition3Explain: "(wordt niet bijgesneden)",
				lblPosition3Explain2: "(breedte past altijd in het deelvenster)",
				lblPosition4Explain: "(kan worden vervormd)",
				unloadLbl: "Laden ongedaan maken als de lezer weggaat",
				unloadHelp: "Als de webpagina audio of video bevat, laat u deze optie aangevinkt om het afspelen van deze inhoud te stoppen wanneer de lezer naar een andere sectie gaat. Vink de optie uit als u bijvoorbeeld wilt dat een soundtrack blijft spelen wanneer de lezer door het verhaal bladert.<br />Als de webpagina een applicatie is, vinkt u deze optie uit zodat de applicatie niet opnieuw wordt geladen als de lezer er naar terugkeert."
			},
			editorActionGeocode: {
				lblTitle: "Een adres of plaats zoeken",
				mapMarkerExplain: "De gebruiker ziet een kaartmarkering wanneer hij/zij op de koppeling klikt"
			},
			editorActionMedia: {
				lblTitle: "De inhoud van het hoofdvenster wijzigen"
			},
			editorInlineMedia: {
				lblTitle: "Een afbeelding, video of webpagina invoegen"
			}
		}
	})
);
