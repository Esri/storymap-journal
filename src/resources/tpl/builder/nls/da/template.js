define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hovedområde",
				sideTitle: "Sidepanel",
				sideDescr: "Et layout til en tekstintensiv historie, der udmærker sig ved at kombinere dine fotos, videoer og kort i et klart fokuseret budskab.",
				floatTitle: "Flydende panel",
				floatDescr: "Et layout, der sætter din kartografi i centrum og samtidig gør det muligt at fortælle historien ved hjælp af et transparent, kort tekstpanel."
			},
			common: {
				lblStatus1: "Udgivet",
				lblStatus2: "Kladde",
				lblStatus3: "Skjult"
			},
			settingsLayoutOptions: {
				title: "Layoutindstillinger",
				cfgLeft: "Venstre",
				cfgRight: "Højre",
				cfgSmall: "Lille",
				cfgMedium: "Mellem",
				cfgLarge: "Stor",
				socialLinksLabel: "Vis delings-links nederst i hver sektion",
				socialLinksDescr: "Dette gør det muligt for læserne henvise til og fremhæve bestemte sektioner i din %TPL_NAME%. Hvis du f.eks. bruger et sektionsdelingsikon, vil læserne lande på den specifikke %TPL_NAME%-sektion i stedet for på begyndelsen af historien. Dine læsere kan bruge linket til sociale medier i titelsektionen til at fremhæve hele din %TPL_NAME% (header-fane) og få dem til at lande i starten af %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Skrifttyper",
				defaultLbl: "Standard",
				sectionTitleLbl: "Sektionstitel",
				sectionContentLbl: "Sektionsindhold"
			},
			initPopup: {
				title: "Velkommen til"
			},
			addEditPopup: {
				disabled: "Tilføj sektion er deaktiveret, fordi det maksimale antal tilladte sektioner er nået.",
				titleAdd: "Tilføj sektion",
				titleAddHome: "Tilføj startsektion",
				titleEdit: "Redigér sektion",
				step: "Trin",
				stepMainStageExplain: "Indhold i hovedområdet",
				stepPanelExplain: "Indhold",
				stepMainStageNextTooltip: "Indtast sektionstitlen, og vælg indholdet til hovedområdet",
				stepMainStageNextTooltip2: "Vælg indhold til hovedområdet",
				step2NextTooltip: "Indtast sektionstitlen og %LAYOUT-TYPE%-indholdet",
				stepNextTooltipNext: "for at gå til næste trin",
				stepNextTooltipAdd: "for at tilføje sektionen",
				firstAddExplain: "Den første sektion er din startsektion. Tænk på den som \'forsiden\' til din historie. Den titel, du lige har defineret, vil blive vist med store skrifttyper.",
				firstAddLeanMore: "Lær mere",
				titlePlaceholder: "Sektionstitel..."
			},
			addEditViewText: {
				editorPlaceholder: "Tilføj tekst, links og små billeder her.",
				editorActionsTitle: "Handlinger i hovedområdet",
				editorActionsHelpDescr: "Brug disse knapper til at oprette links, der redigerer hovedområdet. Når læseren f.eks. klikker på et link, vil du måske zoome kortet til en bestemt position, vise et andet webkort eller vise et billede.",
				mainStageDisabled: "Handlinger for hovedområdet er deaktiveret, når tekstredigeringsprogrammet  er maksimeret"
			},
			organizePopup: {
				title: "Organisér",
				lblHeader: "Træk og slip sektioner for at organisere dit indhold.",
				lblColTitle: "Titel",
				lblColPubDate: "Udgivelsesdato",
				lblColStatus: "Status",
				checkDisplayReverse: "Vis sektioner i omvendt rækkefølge",
				btnApplyWarning: "Bekræft sletning af %NB% sektion(er)",
				deleteTooltip: "Slet",
				firstSectionExplain: "(Startsektionen kan ikke flyttes)",
				exportMainStage: "Hovedområdets indhold",
				exportPanel: "Panelindhold",
				exportActions: "Handlinger for hovedområdet"
			},
			exportData: {
				btn: "Eksportér indhold",
				tooltip: "Eksport af dit indhold gør det muligt at få vist og oprette en sikkerhedskopi af dit indhold, hvis du kommer til at slette det ved en fejl. Du skal blot kopiere og indsætte sideindholdet i et tekstbehandlingsprogram."
			},
			help: {
				lblHelp: "Hjælp",
				lblAdd: "Tilføj sektion",
				lblSettings: "Indstillinger",
				lblOrga: "Organisér indhold",
				lblEdit: "Redigeringer",
				lblPublish: "Del",
				lblTips: "Tips",
				lblMore: "Ønsker du mere?",
				lblLink: "Besøg Esri Story Maps-webstedet.",
				content1Div1: "Du kan integrere en række forskellige typografier, når du skaber din historie. <strong>%LAYOUT_TITLE%</strong> indeholder typisk din tekst, dine billeder og videoer, mens dine kort ofte befinder sig i <strong>hovedområdet</strong>. Men %TPL_NAME% gør det også muligt for dig at bringe billeder, diagrammer og videoer i hovedområdet.",
				content1Div2: "Ved at tilføje sektioner kan du virkelig tilpasse din historiefortælling. Som læser kan du rulle ned igennem din %LAYOUT_TITLE% tekst, et kort i hovedområdet kan panorere eller zoome til vigtige punkter, eller nye kort og billeder kan skifte automatisk for at understøtte dit budskab.",
				content2Div1: "I dialogboksen Indstillinger kan du ændre udseendet af dit %TPL_NAME%. Du kan ændre layout, vælge et andet farveskema, ændre skrifttype osv.",
				content2Div2: "Du kan også erstatte Esri-logoet med dit eget logo for at gengive dit brand. Du kan også angive det websted, der vil blive vist, hvis læseren klikker på logoet, så den pågældende læser kan få flere oplysninger.",
				content3Div1: "Dit indhold er organiseret i sektioner. Du kan have så mange sektioner, som du ønsker (tænk på dem som på mini-kapitler). Flowet i disse kapitler er vigtigt. Så inden for Organisér kan du ændre sektionsrækkefølge efter eget valg.",
				content4Div1: "Har du fundet en fejl, eller ønsker du at redigere i dit materiale? Ingen grund til bekymring. Se efter redigeringsikonet i hele app’en for at foretage ændringer i dit indhold. Du vil komme til at bruge redigeringsfunktionerne mange gange, mens du udvikler din %TPL_NAME%!",
				content5Div1: "Når du gemmer dit %TPL_NAME% er det til at begynde med privat. Brug knappen Del til at dele det med andre. Du kan også dele dit %TPL_NAME% offentligt, så alle kan få adgang til det.",
				content5Div2: "Afhængigt af din konto kan du muligvis også dele dit %TPL_NAME% med personer inden for din organisation, så andre ikke kan få adgang.",
				content6Div1: "Titlen på din startsektion er også titlen på din journal. Tænk på startsektionen som \"forsiden\" til din historie. Titlen på startsektionen forbliver synlig, når dine læsere navigerer i journalen.",
				content6Div2: "Din %LAYOUT_TITLE% behøver ikke kun at være tekst. Overvej at medtage fotos og videoer, så din historie bliver levende, og at opbryde lange tekstafsnit!"
			},
			landing: {
				lblAdd: "Hvad vil du kalde din kortjournal?",
				phAdd: "Indtast din titel...",
				lblOR: "Eller",
				lblHelp: "Tag en tur"
			},
			firstAddSplash: {
				thisis: "Dette er",
				lblMain: "Dette er %BR%-hovedområdet"
			}
        }
    })
);
