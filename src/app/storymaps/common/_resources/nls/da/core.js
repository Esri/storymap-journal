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
				height: "Højde"
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
				buttonPreview: "Vis Live",
				tooltipFirstSave: "Er ikke tilgængelig, før du har gemt.",
				tooltipNotShared: "Er ikke tilgængelig, før du har delt.",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangePlural: "Ventende ændringer",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				saveError: "Lagring mislykkedes, prøv igen",
				shareStatus1: "Applikationen er endnu ikke blevet gemt",
				shareStatus2: "Applikationen er delt offentligt",
				shareStatus3: "Applikationen er delt inden for organisationen",
				shareStatus4: "Applikationen er ikke delt"
			},
			saveError: {
				title: "Layout",
				err1Div1: "Applikationen kan ikke gemmes, fordi du har et andet element med samme navn (se din <a class='linkagolroot' target='_blank'>indholdsmappe</a>).",
				err1Div2: "Redigér titlen på din applikation, og gem den.",
				btnOk: "Redigér applikationstitlen"
			},
			share: {
				firstSaveTitle: "Applikationen er gemt",
				firstSaveHeader: "Din applikation er nu blevet gemt i %PORTAL%, men den er endnu ikke blevet delt.",
				firstSavePreview: "Forhåndsvisning",
				firstSaveShare: "Del",
				firstSaveA1: "Hvis du ikke er fortrolig med %PORTAL% eller ønsker en genvej til at få adgang til builder-grænsefladen, kan du gemme dette link: %LINK1%",
				firstSaveA1bis: "Applikationen findes også i din <a href='%LINK2%' target='_blank'>%PORTAL% indholdsmappe</a>.",
				shareTitle: "Del din applikation",
				sharePrivateHeader: "Din applikation er ikke blevet delt, vil du dele den?",
				sharePrivateBtn1: "Del offentligt",
				sharePrivateBtn2: "Del med min organisation",
				sharePrivateWarning: "Deling %WITH% er blevet deaktiveret, fordi du ikke er ejer af <a href='%LINK%' target='_blank'>webkortet</a>.",
				sharePrivateWarningWith1: "offentligt",
				sharePrivateWarningWith2: "offentligt og med organiaationen",
				sharePrivateProgress: "Deling i gang...",
				sharePrivateErr: "Deling mislykkedes, prøv igen eller",
				sharePrivateOk: "Deling blev opdateret med succes, indlæser...",
				shareHeader1: "Din applikation er <strong>offentligt tilgængelig</strong>.",
				shareHeader2: "Din applikation er tilgængelig for dine organisationsmedlemmer (der kræves login).",
				shareLinkCopy: "Kopiér",
				shareLinkCopied: "Kopieret",
				shareQ0: "Hvordan indlejrer jeg applikationen i en webside?",
				shareQ1Opt1: "Hvordan kan jeg holde min applikation privat?",
				shareQ1Opt2: "Hvordan kan jeg holde applikationen privat eller dele den offentligt?",
				shareA1: "Brug %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens elementside</a>.",
				shareQ2bis: "Hvordan kommer jeg tilbage til builder-grænsefladen?",
				shareA2div1: "Gem og genbrug følgende link %LINK1%, eller brug <a href='%LINK2%' target='_blank'>applikationens elementoplysningsside</a>.",
				shareA2div2: "Når du som ejer af applikationen er logget ind på %PORTAL%, indeholder applikationen en knap til åbning af builder-programmet:",				
				shareQ3: "Hvor er dataene gemt?",
				shareA3: "%TPL_NAME%-data og -konfiguration er gemt i <a href='%LINK2%' target='_blank'>dette webapplikationselement</a>. Hvis du har brugt Flickr-, Picasa-, Facebook- eller YouTube-import, er dine billeder og videoer ikke blevet duplikeret i %PORTAL%."
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
