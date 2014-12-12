define(
	 ({
		viewer: {
			common: {
				close: "Stäng"
			},
			loading: {
				step1: "Läser in applikation",
				step2: "Läser in data",
				step3: "Initierar",
				loadBuilder: "Växlar till byggverktyget",
				long: "Kartjournalen initieras",
				long2: "Tack för att du väntar",
				failButton: "Läs in applikationen igen"
			},
			signin: {
				title: "Autentisering krävs",
				explainViewer: "Logga in med ett konto på %PORTAL_LINK% om du vill få åtkomst till applikationen.",
				explainBuilder: "Logga in med ett konto på %PORTAL_LINK% om du vill konfigurera applikationen."
			},
			errors: {
				boxTitle: "Ett fel har inträffat",
				invalidConfig: "Ogiltig konfiguration",
				invalidConfigNoApp: "Webbkartapplikationens identifierare anges inte i index.html.",
				unspecifiedConfigOwner: "Ingen auktoriserad ägare har konfigurerats.",
				invalidConfigOwner: "Applikationens ägare är inte auktoriserad.",
				createMap: "Det gick inte att skapa kartan",
				invalidApp: "%TPL_NAME% finns inte eller går inte att komma åt.",
				appLoadingFail: "Något gick fel, %TPL_NAME% lästes inte in korrekt.",
				notConfiguredDesktop: "Applikationen har inte konfigurerats ännu.",
				notConfiguredMobile: "%TPL_NAME%-byggverktyget går inte att använda med den här skärmupplösningen.",
				notAuthorized: "Du är inte behörig att konfigurera det här programmet",
				noBuilderIE: "Byggverktyget kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
				noViewerIE: "Det här programmet kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Uppdatera din webbläsare</a>.",
				mapLoadingFail: "Något gick fel, kartan lästes inte in på rätt sätt.",
				signOut: "Logga ut"
			},
			mobileView: {
				tapForDetails: "Peka för information",
				clickForDetails: "Läs mer",
				swipeToExplore: "Svep för att utforska",
				tapForMap: "Peka för att återgå till kartan",
				clickForMap: "TILLBAKA TILL KARTAN"
			},
			floatLayout: {
				scroll: "Bläddra"
			},
			sideLayout: {
				scroll: "Bläddra nedåt för att visa mer"
			},
			mainStage: {
				back: "Bakåt"
			},
			headerFromCommon: {
				storymapsText: "En berättelsekarta",
				builderButton: "Redigera",
				bitlyTooltip: "Hämta en kort länk till applikationen",
				templateTitle: "Ange malltitel",
				templateSubtitle: "Ange underrubrik för mallen",
				share: "Dela"
			},
			overviewFromCommon: {
				title: "Översiktskarta"
			},
			legendFromCommon: {
				title: "Teckenförklaring"
			},
			shareFromCommon: {
				copy: "Kopiera",
				copied: "Kopierad",
				open: "Öppna",
				embed: "Bädda in på webbplats",
				embedExplain: "Använd följande HTML-kod om du vill bädda in journalen på en webbplats.",
				size: "Storlek (bredd/höjd):"
			}
        }
    })
);