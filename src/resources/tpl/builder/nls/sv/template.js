define(
	 ({
		builder: {
			layouts: {
				mainStage: "Huvudscen",
				sideTitle: "Sidopanel",
				sideDescr: "En layout för en textintensiv berättelse som passar utmärkt när du vill kombinera bilder, videoklipp och kartor till ett tydligt fokuserat meddelande.",
				floatTitle: "Flytande panel",
				floatDescr: "En layout som sätter kartografin i fokus och samtidigt ger utrymme för en kort transparent textpanel som hjälper till att berätta historien."
			},
			common: {
				lblStatus1: "Publicerad",
				lblStatus2: "Utkast",
				lblStatus3: "Dold"
			},
			settingsLayoutOptions: {
				title: "Layoutalternativ",
				cfgLeft: "Vänster",
				cfgRight: "Höger",
				cfgSmall: "Liten",
				cfgMedium: "Medium",
				cfgLarge: "Stor",
				socialLinksLabel: "Visa delningslänkar längst ned i varje avsnitt",
				socialLinksDescr: "Detta gör att användaren kan referera till och framhålla specifika avsnitt av din %TPL_NAME%. Om du till exempel använder en ikon för avsnittsdelning kommer användaren till det specifika %TPL_NAME%-avsnittet i stället för till början av berättelsen. Användarna kan använda länken till sociala media i rubrikavsnittet för att framhålla hela din %TPL_NAME% (rubrikfliken) och komma till början av %TPL_NAME%."
			},
			initPopup: {
				title: "Välkommen till"
			},
			addEditPopup: {
				disabled: "Lägg till avsnitt är inaktiverat eftersom det maximala antalet avsnitt har uppnåtts.",
				titleAdd: "Lägg till avsnitt",
				titleAddHome: "Lägg till startavsnitt",
				titleEdit: "Redigera avsnitt",
				step: "Steg",
				stepMainStageExplain: "Innehåll på huvudscenen",
				stepPanelExplain: "Innehåll",
				stepMainStageNextTooltip: "Ange avsnittets rubrik och välj innehåll för huvudscenen",
				step2NextTooltip: "Ange avsnittets rubrik och %LAYOUT-TYPE%-innehåll",
				stepNextTooltipNext: "för att gå till nästa steg",
				stepNextTooltipAdd: "för att lägga till avsnittet",
				firstAddExplain: "Det första avsnittet är startavsnittet. Det kan du tänka dig som försättsbladet till berättelsen. Den titel du just har definierat visas med stora tecken.",
				firstAddLeanMore: "Lär dig mer",
				titlePlaceholder: "Avsnittets rubrik ..."
			},
			addEditViewText: {
				editorPlaceholder: "Lägg till texter, länkar och små bilder här.",
				editorActionsTitle: "Åtgärder på huvudscenen",
				editorActionsHelpDescr: "Använd dessa kontroller för att skapa länkar som förändrar huvudscenen. Om användaren till exempel klickar på en länk kan du låta kartan zoomas in till en viss plats, visa en annan webbkarta eller visa en bild."
			},
			organizePopup: {
				title: "Organisera",
				lblHeader: "Organisera innehållet genom att dra och släppa avsnitt.",
				lblColTitle: "Titel",
				lblColPubDate: "Publiceringsdatum",
				lblColStatus: "Status",
				checkDisplayReverse: "Visa avsnitten i omvänd ordning",
				btnApplyWarning: "Bekräfta borttagning av %NB%-avsnitt",
				deleteTooltip: "Ta bort",
				firstSectionExplain: "(Startasvsnittet går inte att flytta)"
			},
			exportData: {
				btn: "Exportera innehåll",
				tooltip: "Om du exporterar ditt innehåll kan du visa och skapa en säkerhetskopia av din journal om du skulle råka ta bort den av misstag. Kopiera sidans innehåll och klistra in det i valfritt ordbehandlingsprogram."
			},
			help: {
				lblHelp: "Hjälp",
				lblAdd: "Lägg till avsnitt",
				lblSettings: "Inställningar",
				lblOrga: "Ordna innehåll",
				lblEdit: "Ändringar",
				lblPublish: "Dela",
				lblTips: "Tips",
				lblMore: "Vill du ha mer?",
				lblLink: "Besök webbplatsen för berättelsekartor.",
				content1Div1: "Du kan integrera flera olika stilar när du skapar din berättelse. <strong>%LAYOUT_TITLE%</strong> innehåller text, bilder och videoklipp medan kartorna oftast hamnar i <strong>huvudscenen</strong>. Med %TPL_NAME% kan du dock ta med bilder, tabeller och videoklipp även i huvudscenen.",
				content1Div2: "Genom att lägga till avsnitt kan du anpassa berättelseupplevelsen. När användarna bläddrar igenom %LAYOUT_TITLE%-texten kan en karta i huvudscenen panorera eller zooma till viktiga punkter, eller så kan nya kartor och bilder växlas automatiskt för att understryka ditt budskap.",
				content2Div1: "Här kan du ändra utseendet för %TPL_NAME%. Färgscheman, layout och bredd anges här.",
				content2Div2: "Du kan även lägga till delningslänkar till Facebook, Twitter och Bitly så att användarna enkelt kan sprida din %TPL_NAME% till andra.",
				content3Div1: "Ditt innehåll är ordnat i avsnitt. Du kan ha så många avsnitt du vill (tänk dig dem som minikapitel). Flödet för kapitlen är viktigt. Med Organisera kan du ändra ordning på eller ta bort avsnitt som du vill.",
				content4Div1: "Har du hittat ett fel eller vill du ändra ditt material? Inga problem. Titta efter redigeringsikonen i appen om du vill göra ändringar i innehållet. Du kommer att använda redigeringsfunktionerna många gånger medan du utvecklar din %TPL_NAME%!",
				content5Div1: "Din %TPL_NAME% sparas i ditt %PORTAL%-konto. Som standard är den privat, men du kan välja att dela den med din organisation eller låta den vara öppen för världen. Vi tillhandahåller till och med en förkortad URL för att det ska vara enklare att dela.",
				content6Div1: "Titeln på startavsnittet är också titeln på din journal. Du kan tänka dig startavsnittet som försättsbladet för din berättelse. Titeln på startavsnittet fortsätter att visas när läsarna navigerar i journalen.",
				content6Div2: "Din %LAYOUT_TITLE% behöver inte bara bestå av text, du kan även ta med foton och videoklipp för att göra berättelsen mer levande och dela upp långa stycken text!"
			},
			landing: {
				lblAdd: "Vad vill du kalla kartjournalen?",
				phAdd: "Ange en titel ...",
				lblOR: "Or",
				lblHelp: "Ta en rundtur"
			},
			firstAddSplash: {
				thisis: "Det här är"
			}
        }
    })

);
