define(
	 ({
		commonCore: {
			common: {
				add: "Tilføj",
				edit: "Redigér",
				save: "Gem",
				next: "Næste",
				cancel: "Annullér",
				back: "Tilbage",
				apply: "Anvend",
				close: "Luk",
				open: "Åbn",
				start: "Start",
				loading: "Indlæser",
				disabledAdmin: "Dette objekt er blevet deaktiveret af administratoren",
				width: "Bredde",
				height: "Højde",
				create: "Opret",
				yes: "Ja",
				no: "Nej",
				mystories: "Mine historier"
			},
			inlineFieldEdit: {
				editMe: "Redigér mig!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSaving: "Gemmer",
				buttonSaved: "Gemt",
				buttonShare: "Del",
				buttonSettings: "Indstillinger",
				buttonHelp: "Hjælp",
				buttonPreview: "Vis historie",
				tooltipFirstSave: "Er ikke tilgængelig, før du har gemt.",
				tooltipNotShared: "Er ikke tilgængelig, før du har delt.",
				tooltipNotShared2: "Din historie er ikke delt. Kun du kan få adgang til den.",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangePlural: "Ventende ændringer",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				saveError: "Lagring mislykkedes, prøv igen",
				status1: "Historien deles, men der er problemer med den",
				status2: "Historien deles ikke, men der er problemer med den",
				status3: "Historien er offentlig",
				status4: "Historien deles inden for din organisation",
				status5: "Historien er privat",
				status6: "Historien er endnu ikke gemt",
				checking: "Kontrollerer",
				fix: "Ret"
			},
			saveError: {
				title: "Fejl under lagring af historie",
				err1Div1: "Historien kan ikke gemmes, fordi du allerede har et andet element med det samme navn.",
				err1Div2: "Redigér titlen på din historie, og gem den.",
				btnOk: "Redigér historiens titel"
			},
			saveErrorSocial: {
				title: "Opdatering af deling på sociale medier",
				panel1: "Visningen af din historie på de sociale medier er blevet forbedret, men din ArcGIS-webapplikations elementtitel er ikke identisk med din historietitel.",
				panel1tooltip: "Ved at definere en titel, et resumé og et miniaturebillede kan din historie komme til at se sådan ud:",
				panel2:	"Hvilken titel vil du gerne bruge på de sociale medier:",
				panel2q1: "Historietitel (anbefales)",
				panel2q1tooltip: "Når du vælger denne indstilling, vil din elementtitel blive ændret, så den matcher din historietitel, og yderligere ændringer i builder-programmet vil blive synkroniserede.",
				panel2q2: "Elementtitel",
				panel3: "Hvis du vil forbedre visningen af din historie på de sociale medier yderligere, kan du bruge ${MYSTORIES} til at tilføje et resumé og et miniaturebillede.",
				panel4: "Giv mig ikke igen besked om denne historie"
			},
			share: {
				shareTitle: "Del din historie",
				preview: "Eksempel",
				viewlive: "Vis historie",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Kun du kan se historien",
				btnOrg: "Organisation",
				btnOrgTooltip: "Kun medlemmer af din organisation kan se historien",
				btnPublic: "Offentlig",
				btnPublicTooltip: "Alle kan se historien",
				loadingMessage: "Kontrollerer din historie for problemer",
				viewToggle1: "Vis historieindhold",
				viewToggle2: "Luk historieindhold",
				socialize: "Vær social",
				statusPrivate: "Din historie er privat, kun du kan se den.",
				statusError: "Der er problemer i historiens indhold, som dine læsere vil lægge mærke til. Du kan identificere og rette disse fejl nedenfor.",
				statusNoErrPrivate: "Del din historie, når du er klar!",
				mystoriesinvite: "Administrér alle dine historier",
				notavailable1: "Beklager, men deling af din historie via builder-programmet understøttes ikke, fordi denne applikation ikke er \"hosted\" i %PRODUCT%.",
				notavailable2: "Beklager, men deling af din historie via builder-programmet understøttes ikke på denne version af Portal for ArcGIS (kræver version 10.4 eller nyere).",
				notavailable3: "Du kan dele denne historie via %LINK%.",
				notavailable4: "Mine historier",
				notavailable5: "Dens elementside",
				notavailable6: "Beklager, men denne funktion understøttes ikke fuldt ud i udviklertilstand. Afhængigt af dit installationsscenarie understøttes denne funktion muligvis, når den installeres.",
				notavailable7: "Sørg for at besøge %MYCONTENT% for at få bekræftet, om de kort og lag, der benyttes i din historie, også deles.",
				notavailable8: "Mit indhold",
				mystoriesinvite2: "Hvis du vil forbedre visningen af din historie på de sociale medier, kan du bruge ${MYSTORIES} til at tilføje et resumé og et miniaturebillede."
			},
			settings: {
				header: "Indstillinger",
				tabError: "Kontrollér alle faner for fejl"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Hvilket layout ønsker du at bruge?",
				explainInit: "Du kan altid ændre layoutet fra indstillingsdialogboksen.",
				viewExample: "Vis et live-eksempel"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Logo",
				logoEsri: "Esri-logo",
				logoNone: "Intet logo",
				logoCustom: "Brugerdefineret logo",
				logoCustomPlaceholder: "URL (maks. 250x50 pixels)",
				logoCustomTargetPlaceholder: "Klik gennem-link",
				logoSocialExplain: "Tilpas header-linket.",
				logoSocialText: "Tekst",
				logoSocialLink: "Link",
				lblSmallHeader: "Brug kompakt header (ingen undertitel)"
			},
			header: {
				title: "Redigér titlen på din %TPL_NAME%",
				subtitle: "Redigér undertitlen på din %TPL_NAME%"
			}
		}
	})
);
