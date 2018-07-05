define({
  "viewer": {
    "common": {
      "close": "Stäng",
      "focusMainstage": "Skicka tangentbordsfokus till media",
      "expandImage": "Expandera bild"
    },
    "a11y": {
      "skipToContent": "Gå till berättelse",
      "headerAria": "Berättelserubrik",
      "panelAria": "Berättelse",
      "mainStageAria": "Media för aktuellt berättelseavsnitt",
      "logoLinkAria": "Logotyplänk",
      "toTop": "Gå till början av berättelsen",
      "focusContent": "Återgå till berättelsen",
      "navAria": "Berättelseavsnitt",
      "navPreviousAria": "Föregående avsnitt",
      "navNextAria": "Nästa avsnitt",
      "toSectionAria": "Gå till avsnittet %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Nästa grupp med avsnitt (%SECTION_RANGE%)",
      "toPrevGroupAria": "Föregående grupp med avsnitt (%SECTION_RANGE%)",
      "loadingAria": "Berättelsens innehåll läses in"
    },
    "loading": {
      "step1": "Läser in berättelsen",
      "step2": "Läser in data",
      "step3": "Initierar",
      "loadBuilder": "Växlar till byggverktyget",
      "long": "Kartjournalen initieras",
      "long2": "Tack för att du väntar",
      "failButton": "Läs in berättelsen igen"
    },
    "signin": {
      "title": "Autentisering krävs",
      "explainViewer": "Logga in med ett konto på %PORTAL_LINK% om du vill få åtkomst till berättelsen.",
      "explainBuilder": "Logga in med ett konto på %PORTAL_LINK% om du vill konfigurera berättelsen."
    },
    "errors": {
      "boxTitle": "Ett fel har inträffat",
      "invalidConfig": "Ogiltig konfiguration",
      "invalidConfigNoApp": "Webbkartapplikationens identifierare anges inte i index.html.",
      "invalidConfigNoAppDev": "Ingen identifierare för en GIS-applikation för webben anges i URL-parametrarna (?appid=). I utvecklingsläge ignoreras app-ID:ts konfiguration i index.html.",
      "unspecifiedConfigOwner": "Ingen auktoriserad ägare har konfigurerats.",
      "invalidConfigOwner": "Berättelsens ägare är inte auktoriserad.",
      "createMap": "Det gick inte att skapa kartan",
      "invalidApp": "%TPL_NAME% finns inte eller går inte att komma åt.",
      "appLoadingFail": "Något gick fel, %TPL_NAME% lästes inte in korrekt.",
      "notConfiguredDesktop": "Berättelsen har inte konfigurerats ännu.",
      "notConfiguredMobile": "Byggverktyget %TPL_NAME% stöds inte för den här skärmstorleken. Ändra om möjligt storlek på webbläsaren för att få åtkomst till byggverktyget, eller bygg din berättelse på en enhet med större skärm.",
      "notConfiguredMobile2": "Rotera enheten till liggande läge om du vill använda byggverktyget %TPL_NAME%.",
      "notAuthorized": "Du är inte behörig att få åtkomst till den här berättelsen",
      "notAuthorizedBuilder": "Du har inte behörighet att använda byggverktyget %TPL_NAME%.",
      "noBuilderIE": "Byggverktyget kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
      "noViewerIE": "Den här berättelsen kan inte användas med Internet Explorer tidigare än version %VERSION%. %UPGRADE%",
      "noViewerIE2": "Du försöker visa denna berättelse med en äldre webbläsare som inte stöds. Det kan röra sig om funktioner som inte fungerar eller andra oväntade problem. Vi rekommenderar dig att uppgradera till Internet Explorer 11 eller använda en annan webbläsare, till exempel Chrome.",
      "noViewerIE3": "I slutet av 2017 kommer denna berättelse inte längre att kunna läsas in av denna webbläsare. Då måste du använda en webbläsare som stöds om du vill kunna visa den här berättelsen.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Uppdatera din webbläsare</a>.",
      "mapLoadingFail": "Något gick fel, kartan lästes inte in på rätt sätt.",
      "signOut": "Logga ut",
      "print0": "Det går tyvärr inte att skriva ut berättelsen.",
      "print1": "Om du vill skriva ut berättelsen använder du utskriftsknappen i dialogrutan Dela.",
      "print2": "Det finns vanligtvis en utskrivbar version av berättelsen tillgänglig i dialogrutan Dela, men den dialogrutan har inaktiverats av författaren.",
      "attention": "Obs!"
    },
    "mobileView": {
      "tapForDetails": "Peka för information",
      "clickForDetails": "Läs mer",
      "swipeToExplore": "Svep för att utforska",
      "tapForMap": "Tryck för att gå tillbaka",
      "clickForMap": "BAKÅT"
    },
    "floatLayout": {
      "scroll": "Bläddra"
    },
    "sideLayout": {
      "scroll": "Bläddra nedåt för att visa mer"
    },
    "mainStage": {
      "back": "Bakåt",
      "errorDeleted": "Den här länken är inte aktiv (sektionen har tagits bort)",
      "errorNotPublished": "Den här länken är inte aktiv (sektionen är inte publicerad)"
    },
    "headerFromCommon": {
      "storymapsText": "En Story Map",
      "builderButton": "Redigera",
      "facebookTooltip": "Dela på Facebook",
      "twitterTooltip": "Dela på Twitter",
      "bitlyTooltip": "Dela eller skriv ut",
      "templateTitle": "Ange malltitel",
      "templateSubtitle": "Ange underrubrik för mallen",
      "share": "Dela",
      "checking": "Kontrollerar berättelsens innehåll",
      "fix": "Lös problem i berättelsen",
      "noerrors": "Inga problem upptäcktes",
      "tooltipAutoplayDisabled": "Funktionen finns inte tillgänglig i autouppspelningsläge",
      "notshared": "Berättelsen delas inte"
    },
    "mapFromCommon": {
      "overview": "Översiktskarta",
      "legend": "Teckenförklaring",
      "home": "Zooma hem"
    },
    "shareFromCommon": {
      "copy": "Kopiera",
      "copied": "Kopierad",
      "open": "Öppna",
      "embed": "Bädda in på webbplats",
      "embedExplain": "Använd följande HTML-kod om du vill bädda in journalen på en webbplats.",
      "size": "Storlek (bredd/höjd):",
      "autoplayLabel": "Autouppspelningsläge",
      "autoplayExplain1": "Autouppspelningsläge kommer att köras på din berättelse med ett regelbundet intervall. Detta är idealiskt för informationskiosker och offentliga bildskärmar, men du bör vara medveten om att det i andra situationer kan göra berättelsen svårare att läsa. Funktionen stöds inte på små skärmar.",
      "autoplayExplain2": "När läget är aktivt finns det kontroller för att spela upp/pausa berättelsen och anpassa navigeringshastigheten.",
      "linksupdated": "Länkarna har uppdaterats",
      "print": "Skriv ut",
      "printInstruction1": "Vänta tills hela berättelsen har lästs in innan du skriver ut",
      "printInstruction1a": "Om den här sidan läses in långsamt eller vissa media inte visas kan du försöka skriva ut ett mindre antal avsnitt.",
      "printInstruction1b": "För bästa resultat kan du behöva aktivera utskrift av bakgrundselement i din webbläsares skrivarinställningar.",
      "printInstruction2": "Det går inte att dela den här sidan med andra, dela i stället ${link}",
      "link": "länken till berättelsen",
      "optionsHeader": "Alternativ",
      "printOptPageBreak": "Börja varje avsnitt på en ny sida",
      "makeTextBlack": "Gör all text svart",
      "showLinks": "Visa länk-URL:er",
      "madeWith": "Den här berättelsen skapades med ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Esris Story Map-journal",
      "readItOnline": "Läs den interaktiva versionen på webben på ${link}.",
      "printMSWarning": "länken är endast tillgänglig i onlineberättelsen",
      "printVideoWarning": "Den här videon kan bara visas i onlineversionen av berättelsekartan",
      "printRangeHeader": "Skriv ut en del av den här berättelsen",
      "sectionLabel": "Avsnitt:",
      "apply": "Verkställ",
      "resetRange": "Återställ till hela berättelsen"
    }
  }
});