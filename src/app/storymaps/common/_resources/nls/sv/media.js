define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Media",
				lblSelect2: "Innehåll",
				lblMap: "Karta",
				lblImage: "Bild",
				lblVideo: "Video",
				lblExternal: "Webbsida",
				disabled: "Den här funktionen har inaktiverats av administratören",
				url: "Ange webbadressen för en bild manuellt",
				userLookup: "Läs in album",
				notImplemented: "Inte infört ännu.",
				noData: "Inget offentligt album hittades"
			},
			imageSelector: {
				lblStep1: "Välj tjänst",
				lblStep2: "Välj media",
				lblStep3: "Konfigurera"
			},
			imageSelectorHome: {
				explain: "Läs in bilder från sociala media <br /> eller direkt från en URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Användarnamn",
				signInMsg2: "Det gick inte att hitta användaren",
				loadingFailed: "Det gick inte att läsa in"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-användare",
				rightHeader: "Facebook-sida",
				pageExplain: "En Facebook-sida är ett offentligt varumärke/produkt eller en kändis, till exempel <b>esrigis</b>. Du kan hitta sidnamnet efter det första '/'-tecknet i sidans webbadress.",
				pageInputLbl: "Sidnamn",
				lookupMsgError: "Det gick inte att hitta sidan"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-postadress eller ID för Picasa/Google+",
				signInMsg2: "Det gick inte att hitta kontot",
				howToFind: "Så här hittar du ett konto-ID för Picasa eller Google+",
				howToFind2: "Kopiera siffrorna mellan det första och andra '/'-tecknet på en Picasa- eller G+-sida"
			},
			videoSelectorCommon: {
				check: "Kontroll",
				notFound: "Det gick inte att hitta videon",
				found: "Video hittad",
				select: "Välj den här videon"
			},
			videoSelectorHome: {
				other: "Annat"
			},
			videoSelectorYoutube: {
				url: "URL till en Youtube-video",
				pageInputLbl: "Användarnamn",
				lookupMsgError: "Det gick inte att hitta användaren",
				howToFind: "Så här hittar du ett YouTube-användarnamn",
				howToFind2: "Användarnamnet visas under videoklippen",
				found: "Hittade",
				noData: "Inga offentliga videoklipp hittades"
			},
			videoSelectorVimeo: {
				url: "URL till en Vimeo-video"
			},
			videoSelectorOther: {
				explain1: "Applikationen kan inte spela upp obearbetade videoklipp (till exempel avi och mpeg), men kan spela driftade videofiler som har inbyggda spelare (till exempel YouTube eller Vimeo).",
				explain2: "De flesta tjänster som driftar videoklipp online erbjuder den här funktionen. Du måste hitta alternativet för att bädda in videon, kopiera den angivna koden och använda %WEBPAGE%.",
				explain3: "Om du själv vill drifta videon kan du skapa en HTML-sida som använder en videospelare som %EXAMPLE%, drifta sidan och använda %WEBPAGE%.",
				webpage: "Webbsidefunktion"
			},
			webpageSelectorHome: {
				lblUrl: "Webbsidans URL",
				lblEmbed: "Bädda in kod",
				lblOR: "ELLER",
				lblError1: "Fel, rensa ett av de båda inmatningsfälten.",
				lblError2: "Inbäddad kod kan endast innehålla en %IFRAMETAG%",
				configure: "Konfigurera"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "En bild-URL bör börja med http:// och slutar med .jpg eller .png",
				lblURLError: "Den här bilden verkar inte vara giltig. Ange en direktlänk till en bildfil (din URL slutar vanligtvis med en .jpg eller .png). Länkar till en webbsida som innehåller en bild fungerar inte.",
				lblURLCheck: "Kontrollerar bild ...",
				lblLabel: "Bildtext",
				lblLabel1: "Bildtext",
				lblLabel2: "Hovringstext",
				lblLabel3: "Inga",
				lblLabelPH: "Ange text ...",
				lblMaximize: "Ta med knappen Maximera i hörnet av bilden",
				lblMaximizeHelp: "Rekommenderas endast för bilder av hög kvalitet",
				lblPosition: "Position",
				lblPosition1: "Centrera",
				lblPosition2: "Fyllning",
				lblPosition3: "Anpassa",
				lblPosition4: "Sträck",
				lblPosition5: "Anpassad",
				tooltipDimension: "Värdet kan anges i \"px\" eller \"%\"",
				tooltipDimension2: "Värdet måste anges i \"px\"",
				lblPosition2Explain: "(kan beskäras)",
				lblPosition3Explain: "(kan inte beskäras)",
				lblPosition3Explain2: "(bredden kommer alltid att fylla rutan)",
				lblPosition4Explain: "(kan förvrängas)",
				unloadLbl: "Ta bort när användaren navigerar vidare",
				unloadHelp: "Om webbsidan innehåller ljud- eller videomedia behåller du det här alternativet markerat så att innehållet inte spelas när användaren navigerar vidare. Avmarkera det till exempel om du vill att ett ljudspår ska spelas när användaren bläddrar vidare genom berättelsen.<br />Om webbplatsen är en applikation avmarkerar du alternativet så att applikationen inte läses in på nytt om användaren återvänder till den."
			},
			editorActionGeocode: {
				lblTitle: "Hitta en adress eller plats",
				mapMarkerExplain: "Användare ser en kartmarkör när de klickar på länken"
			},
			editorActionMedia: {
				lblTitle: "Ändra innehåll för huvudscenen"
			},
			editorInlineMedia: {
				lblTitle: "Infoga en bild, ett videoklipp eller en webbsida"
			}
		}
	})
);
