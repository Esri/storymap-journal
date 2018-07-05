define({
  "viewer": {
    "common": {
      "close": "Luk",
      "focusMainstage": "Send tastaturfokus til medier",
      "expandImage": "Udvid billede"
    },
    "a11y": {
      "skipToContent": "Udelad fortælling",
      "headerAria": "Historieoverskrift",
      "panelAria": "Historiefortælling",
      "mainStageAria": "Aktuelle historiesektionsmedier",
      "logoLinkAria": "Logo-link",
      "toTop": "Gå til fortællingens begyndelse",
      "focusContent": "Vend tilbage til fortælling",
      "navAria": "Historiesektioner",
      "navPreviousAria": "Forrige sektion",
      "navNextAria": "Næste sektion",
      "toSectionAria": "Gå til sektion %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Næste gruppe af sektioner (%SECTION_RANGE%)",
      "toPrevGroupAria": "Forrige gruppe af sektioner (%SECTION_RANGE%)",
      "loadingAria": "Historieindhold indlæses"
    },
    "loading": {
      "step1": "Indlæser historie",
      "step2": "Indlæser data",
      "step3": "Initialiserer",
      "loadBuilder": "Skifter til builder-programmet",
      "long": "Kortjournal starter",
      "long2": "Tak, fordi du venter",
      "failButton": "Genindlæs historie"
    },
    "signin": {
      "title": "Godkendelse kræves",
      "explainViewer": "Log ind med en konto på %PORTAL_LINK% for at få adgang til historien.",
      "explainBuilder": "Log ind med en konto på %PORTAL_LINK% for at konfigurere historien."
    },
    "errors": {
      "boxTitle": "Der opstod en fejl",
      "invalidConfig": "Ugyldig konfiguration",
      "invalidConfigNoApp": "Webkortapplikation-identifikatoren er ikke angivet i index.html.",
      "invalidConfigNoAppDev": "Ingen webkortapplikation-identifikator er angivet i URL-parametrene (?appid=). I udviklertilstand tilsidesættes appid-konfigurationen i index.html.",
      "unspecifiedConfigOwner": "Der er ikke konfigureret en uautoriseret ejer.",
      "invalidConfigOwner": "Historieejeren er ikke autoriseret.",
      "createMap": "Kan ikke oprette kort",
      "invalidApp": "%TPL_NAME% findes ikke, eller der er ikke adgang.",
      "appLoadingFail": "Der er noget galt, for %TPL_NAME% blev ikke indlæst korrekt.",
      "notConfiguredDesktop": "Historien er endnu ikke blevet konfigureret.",
      "notConfiguredMobile": "%TPL_NAME%-builder-programmet understøttes ikke ved denne skærmstørrelse. Hvis det er muligt, skal du ændre størrelse på din browser for at få adgang til builder-programmet, eller du kan udvikle din historie på en enhed med en større skærm.",
      "notConfiguredMobile2": "Rotér din enhed til liggende retning for at bruge %TPL_NAME%-builder-programmet.",
      "notAuthorized": "Du er ikke autoriseret til at få adgang til denne historie",
      "notAuthorizedBuilder": "Du har ikke autorisation til at bruge %TPL_NAME%-builder-programmet.",
      "noBuilderIE": "Builder-programmet understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
      "noViewerIE": "Denne historie understøttes ikke i Internet Explorer før version %VERSION%. %UPGRADE%",
      "noViewerIE2": "Du forsøger at få vist denne historie ved hjælp af en ældre, ikke-understøttet browser. Der kan være funktioner, der ikke fungerer, eller andre uventede problemer. Vi foreslår, at du opgraderer til Internet Explorer 11 eller benytter en anden browser, f.eks. Chrome.",
      "noViewerIE3": "I slutningen af 2017 vil denne historie ikke længere kunne vises i denne browser. På det tidspunkt skal du benytte en understøttet browser til at vise denne historie.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Opdatér din browser</a>.",
      "mapLoadingFail": "Noget gik galt, kortet blev ikke indlæst korrekt.",
      "signOut": "Log ud",
      "print0": "Beklager, denne historie kan ikke udskrives.",
      "print1": "Hvis du vil udskrive denne historie, skal du bruge udskrivningsknappen i delingsdialogboksen.",
      "print2": "Beklager, en udskrivningsparat version af historien er typisk tilgængelig via delingsdialogboksen, men denne dialogboks er blevet deaktiveret af forfatteren.",
      "attention": "Bemærk!"
    },
    "mobileView": {
      "tapForDetails": "Tryk for at få oplysninger",
      "clickForDetails": "Find ud af mere",
      "swipeToExplore": "Stryg med fingeren for at udforske",
      "tapForMap": "Tryk for at gå tilbage",
      "clickForMap": "TILBAGE"
    },
    "floatLayout": {
      "scroll": "Rul"
    },
    "sideLayout": {
      "scroll": "Rul ned for at se mere!"
    },
    "mainStage": {
      "back": "Tilbage",
      "errorDeleted": "Dette link er ikke aktivt (sektionen er blevet slettet)",
      "errorNotPublished": "Dette link er ikke aktivt (sektionen er blevet publiceret)"
    },
    "headerFromCommon": {
      "storymapsText": "Et Story Map",
      "builderButton": "Redigér",
      "facebookTooltip": "Del på Facebook",
      "twitterTooltip": "Del på Twitter",
      "bitlyTooltip": "Del eller udskriv",
      "templateTitle": "Indstil skabelontitel",
      "templateSubtitle": "Indstil skabelonundertitel",
      "share": "Del",
      "checking": "Kontrollerer dit historieindhold",
      "fix": "Ret fejl i din historie",
      "noerrors": "Ingen problemer registreret",
      "tooltipAutoplayDisabled": "Dette er ikke tilgængeligt i autoplay-tilstand.",
      "notshared": "Historien deles ikke"
    },
    "mapFromCommon": {
      "overview": "Oversigtskort",
      "legend": "Signaturforklaring",
      "home": "Zoom hjem"
    },
    "shareFromCommon": {
      "copy": "Kopiér",
      "copied": "Kopieret",
      "open": "Åbn",
      "embed": "Indlejr i webside",
      "embedExplain": "Brug følgende HTML-kode til at indlejre journalen i en webside.",
      "size": "Størrelse (bredde/højde):",
      "autoplayLabel": "Autoplay-tilstand",
      "autoplayExplain1": "Autoplay-tilstand vil gå frem igennem din historie med et regelmæssigt interval. Dette er ideelt på en kiosk-skærm eller offentlig tilgængelig skærm, men du skal være opmærksom på, at dette kan gøre din historie vanskeligere at læse i andre situationer. Denne funktion understøttes ikke på små skærme.",
      "autoplayExplain2": "Når denne tilstand er aktiv, er der knapper til at afspille din historie eller sætte den på pause og til at justere navigationshastigheden.",
      "linksupdated": "Links opdateret!",
      "print": "Udskriv",
      "printInstruction1": "Vent, til hele historien er blevet indlæst, før du udskriver",
      "printInstruction1a": "Hvis denne side indlæses langsomt, eller nogle medier ikke vises, kan du prøve at udskrive færre afsnit",
      "printInstruction1b": "For at opnå de bedste resultater skal du muligvis aktivere udskrivning af baggrundselementer i din browserens udskriftsindstillinger",
      "printInstruction2": "Denne side kan ikke deles med andre. Del i stedet for ${link}",
      "link": "link til historie",
      "optionsHeader": "Indstillinger",
      "printOptPageBreak": "Start hver sektion på en ny side",
      "makeTextBlack": "Gør al tekst sort",
      "showLinks": "Vis link-URL’er",
      "madeWith": "Denne historie er lavet med ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Esri's Historiekortjournal",
      "readItOnline": "Læs den interaktive version på nettet her ${link}.",
      "printMSWarning": "link er kun tilgængeligt i onlinehistorie",
      "printVideoWarning": "Denne video kan vises i onlineversionen af dette historiekort",
      "printRangeHeader": "Udskriv en del af denne historie",
      "sectionLabel": "Afsnit:",
      "apply": "Anvend",
      "resetRange": "Nulstil til hele historien"
    }
  }
});