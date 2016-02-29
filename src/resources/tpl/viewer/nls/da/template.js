define(
	 ({
		viewer: {
			common: {
				close: "Luk"
			},
			loading: {
				step1: "Indlæser historie",
				step2: "Indlæser data",
				step3: "Initialiserer",
				loadBuilder: "Skifter til builder-programmet",
				long: "Kortjournal starter",
				long2: "Tak, fordi du venter",
				failButton: "Genindlæs historie"
			},
			signin: {
				title: "Godkendelse kræves",
				explainViewer: "Log ind med en konto på %PORTAL_LINK% for at få adgang til historien.",
				explainBuilder: "Log ind med en konto på %PORTAL_LINK% for at konfigurere historien."
			},
			errors: {
				boxTitle: "Der opstod en fejl",
				invalidConfig: "Ugyldig konfiguration",
				invalidConfigNoApp: "Webkortapplikation-identifikatoren er ikke angivet i index.html.",
				invalidConfigNoAppDev: "Ingen webkortapplikation-identifikator er angivet i URL-parametrene (?appid=). I udviklertilstand tilsidesættes appid-konfigurationen i index.html.",
				unspecifiedConfigOwner: "Der er ikke konfigureret en uautoriseret ejer.",
				invalidConfigOwner: "Historieejeren er ikke autoriseret.",
				createMap: "Kan ikke oprette kort",
				invalidApp: "%TPL_NAME% findes ikke, eller der er ikke adgang.",
				appLoadingFail: "Der er noget galt, for %TPL_NAME% blev ikke indlæst korrekt.",
				notConfiguredDesktop: "Historien er endnu ikke blevet konfigureret.",
				notConfiguredMobile: "%TPL_NAME%-builder-programmet understøttes ikke ved denne skærmstørrelse. Hvis det er muligt, skal du ændre størrelse på din browser for at få adgang til builder-programmet, eller du kan udvikle din historie på en enhed med en større skærm.",
				notConfiguredMobile2: "Rotér din enhed til liggende retning for at bruge %TPL_NAME%-builder-programmet.",
				notAuthorized: "Du er ikke autoriseret til at få adgang til denne historie",
				notAuthorizedBuilder: "Du har ikke autorisation til at bruge %TPL_NAME%-builder-programmet.",
				noBuilderIE: "Builder-programmet understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
				noViewerIE: "Denne historie understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Opdatér din browser</a>.",
				mapLoadingFail: "Noget gik galt, kortet blev ikke indlæst korrekt.",
				signOut: "Log ud"
			},
			mobileView: {
				tapForDetails: "Tryk for at få oplysninger",
				clickForDetails: "Find ud af mere",
				swipeToExplore: "Stryg med fingeren for at udforske",
				tapForMap: "Tryk for at vende tilbage til kortet",
				clickForMap: "TILBAGE TIL KORT"
			},
			floatLayout: {
				scroll: "Rul"
			},
			sideLayout: {
				scroll: "Rul ned for at se mere!"
			},
			mainStage: {
				back: "Tilbage"
			},
			headerFromCommon: {
				storymapsText: "Et historiekort",
				builderButton: "Redigér",
				facebookTooltip: "Del på Facebook",
				twitterTooltip: "Del på Twitter",
				bitlyTooltip: "Hent et kort link",
				templateTitle: "Indstil skabelontitel",
				templateSubtitle: "Indstil skabelonundertitel",
				share: "Del",
				checking: "Kontrollerer dit historieindhold",
				fix: "Ret fejl i din historie",
				noerrors: "Ingen problemer registreret",
				tooltipAutoplayDisabled: "Dette er ikke tilgængeligt i autoplay-tilstand.",
				notshared: "Historien deles ikke"
			},
			overviewFromCommon: {
				title: "Oversigtskort"
			},
			legendFromCommon: {
				title: "Signaturforklaring"
			},
			shareFromCommon: {
				copy: "Kopiér",
				copied: "Kopieret",
				open: "Åbn",
				embed: "Indlejr i webside",
				embedExplain: "Brug følgende HTML-kode til at indlejre journalen i en webside.",
				size: "Størrelse (bredde/højde):",
				autoplayLabel: "Autoplay-tilstand",
				autoplayExplain1: "Autoplay-tilstand vil gå frem igennem din historie med et regelmæssigt interval. Dette er ideelt på en kiosk-skærm eller offentlig tilgængelig skærm, men du skal være opmærksom på, at dette kan gøre din historie vanskeligere at læse i andre situationer. Denne funktion understøttes ikke på små skærme.",
				autoplayExplain2: "Når denne tilstand er aktiv, er der knapper til at afspille din historie eller sætte den på pause og til at justere navigationshastigheden.",
				linksupdated: "Links opdateret!"
			}
        }
    })
);