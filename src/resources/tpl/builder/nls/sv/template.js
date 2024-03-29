define({
  "builder": {
    "layouts": {
      "mainStage": "Huvudscen",
      "sideTitle": "Sidopanel",
      "sideDescr": "En layout för en textintensiv berättelse som passar utmärkt när du vill kombinera bilder, videoklipp och kartor till ett tydligt fokuserat meddelande.",
      "floatTitle": "Flytande panel",
      "floatDescr": "En layout som sätter kartografin i fokus och samtidigt ger utrymme för en kort transparent textpanel som hjälper till att berätta historien."
    },
    "common": {
      "lblStatus1": "Publicerad",
      "lblStatus2": "Utkast",
      "lblStatus3": "Dold"
    },
    "settingsLayoutOptions": {
      "title": "Layoutalternativ",
      "cfgLeft": "Vänster",
      "cfgRight": "Höger",
      "cfgSmall": "Liten",
      "cfgMedium": "Medium",
      "cfgLarge": "Stor",
      "socialLinksLabel": "Visa delningslänkar längst ned i varje avsnitt",
      "socialLinksDescr": "Detta gör att användaren kan referera till och framhålla specifika avsnitt av din %TPL_NAME%. Om du till exempel använder en ikon för avsnittsdelning kommer användaren till det specifika %TPL_NAME%-avsnittet i stället för till början av berättelsen. Användarna kan använda länken till sociala media i rubrikavsnittet för att framhålla hela din %TPL_NAME% (rubrikfliken) och komma till början av %TPL_NAME%.",
      "socialDisabled": "Funktionen är endast tillgänglig med layouten Flytande panel",
      "socialWarning": "Din berättelse använder layouten Sidopanel, men vi rekommenderar nu att du bara använder det här alternativet med layouten Flytande panel för att undvika ett problem där panelen kanske inte placeras vid den önskade avdelningen för berättelser med bilder. Du kan fortsätta använda alternativet, men om du inaktiverar det är det sedan bara tillgängligt när du använder layouten Flytande panel."
    },
    "settingsLayoutFonts": {
      "title": "Teckensnitt",
      "defaultLbl": "Standard",
      "sectionTitleLbl": "Avsnittets rubrik",
      "sectionContentLbl": "Avsnittets innehåll"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Organisationstema",
      "lblModTheme": "Aktuellt tema"
    },
    "initPopup": {
      "title": "Välkommen till"
    },
    "addEditPopup": {
      "disabled": "Lägg till avsnitt är inaktiverat eftersom det maximala antalet avsnitt har uppnåtts.",
      "titleAdd": "Lägg till avsnitt",
      "titleAddHome": "Lägg till startavsnitt",
      "titleEdit": "Redigera avsnitt",
      "step": "Steg",
      "stepMainStageExplain": "Innehåll på huvudscenen",
      "stepPanelExplain": "Innehåll",
      "stepMainStageNextTooltip": "Ange avsnittets rubrik och välj innehåll för huvudscenen",
      "stepMainStageNextTooltip2": "Välj innehåll på huvudscenen",
      "step2NextTooltip": "Ange avsnittets rubrik och %LAYOUT-TYPE%-innehåll",
      "stepNextTooltipNext": "för att gå till nästa steg",
      "stepNextTooltipAdd": "för att lägga till avsnittet",
      "firstAddExplain": "Det första avsnittet är startavsnittet. Det kan du tänka dig som försättsbladet till berättelsen. Den titel du just har definierat visas med stora tecken.",
      "firstAddLeanMore": "Lär dig mer",
      "titlePlaceholder": "Avsnittets rubrik ..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Lägg till texter, länkar och små bilder här.",
      "editorActionsTitle": "Berättelseåtgärder",
      "editorActionsHelpDescr": "Skapa länkar i berättelsen som hjälper dig framföra din historia. En berättelseåtgärd kan länka till en annan sektion eller ändra huvudscenen. Du kan till exempel konfigurera en åtgärd för att flytta kartan till en annan plats, växla kartlager av/på eller ändra media för huvudscenen till en annan bild, video, karta eller webbsida.",
      "mainStageDisabled": "Berättelseåtgärder är inaktiverade när redigeraren är maximerad"
    },
    "organizePopup": {
      "title": "Organisera",
      "lblHeader": "Organisera berättelsen genom att dra och släppa avsnitt.",
      "lblColTitle": "Titel",
      "lblColPubDate": "Publiceringsdatum",
      "lblColStatus": "Status",
      "checkDisplayReverse": "Visa avsnitten i omvänd ordning",
      "btnApplyWarning": "Bekräfta borttagning av %NB%-avsnitt",
      "deleteTooltip": "Ta bort",
      "firstSectionExplain": "(Startasvsnittet går inte att flytta)",
      "exportMainStage": "Innehåll på huvudscenen",
      "exportPanel": "Panelinnehåll",
      "exportActions": "Berättelseåtgärder"
    },
    "exportData": {
      "btn": "Exportera innehåll",
      "tooltip": "Om du exporterar ditt innehåll kan du visa och skapa en säkerhetskopia av innehållet om du skulle råka ta bort det av misstag. Kopiera innehållet från sidan och klistra in det i valfritt ordbehandlingsprogram."
    },
    "help": {
      "lblHelp": "Hjälp",
      "lblAdd": "Lägg till avsnitt",
      "lblSettings": "Inställningar",
      "lblOrga": "Ordna innehåll",
      "lblEdit": "Ändringar",
      "lblPublish": "Dela",
      "lblTips": "Tips",
      "lblMore": "Vill du ha mer?",
      "lblLink": "Besök webbplatsen för Esris berättelsekartor.",
      "content1Div1": "Du kan integrera flera olika stilar när du skapar din berättelse. <strong>%LAYOUT_TITLE%</strong> innehåller text, bilder och videoklipp medan kartorna oftast hamnar i <strong>huvudscenen</strong>. Med %TPL_NAME% kan du dock ta med bilder, tabeller och videoklipp även i huvudscenen.",
      "content1Div2": "Genom att lägga till avsnitt kan du anpassa berättelseupplevelsen. När användarna bläddrar igenom %LAYOUT_TITLE%-texten kan en karta i huvudscenen panorera eller zooma till viktiga punkter, eller så kan nya kartor och bilder växlas automatiskt för att understryka ditt budskap.",
      "content2Div1": "I dialogrutan Inställningar kan du ändra utseendet för %TPL_NAME%. Du kan ändra layout, välja ett annat färgschema, ändra teckensnitt o.s.v.",
      "content2Div2": "Du kan även byta ut Esri-logotypen mot din egen logotyp för att visa ditt varumärke. Du kan också ange vilken webbplats som ska öppnas när läsarna klickar på logotypen så att de kan få mer information.",
      "content3Div1": "Ditt innehåll är ordnat i avsnitt. Du kan ha så många avsnitt du vill (tänk dig dem som minikapitel). Flödet för kapitlen är viktigt. Med Organisera kan du ändra ordning på eller ta bort avsnitt som du vill.",
      "content4Div1": "Hittade du ett fel eller vill du ändra ditt material? Inga problem. Sök efter redigeringsikonen i appen om du vill göra ändringar av ditt innehåll. Du kommer att använda redigeringsfunktionerna många gånger när du utvecklar din %TPL_NAME%!",
      "content5Div1": "När du sparar din %TPL_NAME% är den privat i början. Använd knappen Dela om du vill dela den med andra. Du kan dela din %TPL_NAME% offentligt så alla kan komma åt den.",
      "content5Div2": "Beroende på konto kanske du också kan dela din %TPL_NAME% enbart med personer inom din organisation så att andra inte kommer åt den.",
      "content6Div1": "Titeln på startavsnittet är också titeln på din journal. Du kan tänka dig startavsnittet som försättsbladet för din berättelse. Titeln på startavsnittet fortsätter att visas när läsarna navigerar i journalen.",
      "content6Div2": "Din %LAYOUT_TITLE% behöver inte bara bestå av text, du kan även ta med foton och videoklipp för att göra berättelsen mer levande och dela upp långa stycken text!"
    },
    "landing": {
      "lblAdd": "Vad vill du kalla kartjournalen?",
      "phAdd": "Ange en titel ...",
      "lblOR": "Or",
      "lblHelp": "Ta en rundtur",
      "quote0": "Det finns alltid ett behov av berättelser som kan ta oss med till en annan plats.",
      "quote1": "Berättelser är ett av de mest kraftfulla sätten att presentera idéer för världen idag.",
      "quote2": "Våra berättelser skapar bokstavligt talat världen. Om du vill förändra världen behöver du också tänka på hur din berättelse ser ut. Det gäller både individer och institutioner.",
      "quote3": "Sanningen om en människa ryms oftast i en berättelse.",
      "quote4": "Människor vill inte ha mer information. De drunknar redan i den. De vill kunna känna tilltro – till dig, dina mål, dina framgångar och din berättelse.",
      "quote5": "Jag är övertygad om att många längtar efter berättelser som verkligen betyder något och vars budskap är försonande, inspirerande och större än individen.",
      "quote6": "Om du vill nå enskilda människor eller en grupp och påverka deras värderingar är det viktigt att din berättelse är övertygande.",
      "quote7": "Om du redovisar något för mig är det en uppsats. Om du visar mig något är det en berättelse.",
      "quote8": "Om du inte hittar i skogen kan du gå vilse, men utan berättelser kan du gå vilse i livet.",
      "quote9": "Berättelser är som livet själv men kraftfullare och mer koncentrerade. De är medel för mänsklig kontakt.",
      "quote10": "Det kan vara plågsamt att hålla inne med sin berättelse.",
      "quote11": "Berättelser kan kanske beskrivas som information med själ.",
      "quote12": "Berättelser kan vara ett värdefullt verktyg för att påverka.",
      "quote13": "Det ligger i berättelsens natur att inte avslöja allt."
    },
    "firstAddSplash": {
      "thisis": "Det här är",
      "lblMain": "Det här är %BR% huvudscenen"
    }
  }
});