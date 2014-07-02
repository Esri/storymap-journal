define(
	 ({
		common: {
			common: {
				edit: "Redigér"
			},
			inlineFieldEdit: {
				editMe: "Redigér mig!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSave: "GEM",
				buttonShare: "DEL",
				buttonSettings: "INDSTILLINGER",
				buttonHelp: "HJÆLP",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangeSingular: "1 ikke-gemt ændring",
				unSavedChangePlural: "ikke-gemte ændringer",
				popoverSaveWhenDone: "Glem ikke at gemme, når du er færdig",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				ok: "OK",
				savingApplication: "Gemmer applikation",
				saveError: "Lagring mislykkedes, prøv igen",
				saveError3: "Titlen kan ikke være tom",
				// TODO
				signIn: "Log ind med en konto på",
				shareStatus1: "Applikationen er ikke gemt",
				shareStatus2: "Applikationen er delt offentligt",
				shareStatus3: "Applikationen er delt inden for organisationen",
				shareStatus4: "Applikationen er ikke delt"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titel",
				addPopupTitle: "Tilføj",
				addPopupDescription: "Tilføj en ny visning til din serie.",
				addPopupButton: "TILFØJ",
				// Edit
				editPopupTitle: "Redigér",
				editPopupDescription: "Redig\ér den valgte visning",
				editPopupButton: "ANVEND",
				// Add/Edit
				addEditPopupCancelButton: "ANNULLÉR",
				addEditPopupMyContentBtn: "Vælg fra Mit indhold",
				addEditPopupConfigureWebMapBtn: " Konfigur\ér"
			},
			share: {
				firstSaveTitle: "Applikationen er gemt",
				firstSaveHeader: "Din applikation er nu blevet gemt i ArcGIS Online. Læs venligst følgende svar på ofte forekommende spørgsmål.",
				firstSaveA1: "Hvis du ikke er fortrolig med ArcGIS Online, eller hvis du ønsker en genvej for at få adgang til forfattergrænsefladen, kan du gemme dette link: %LINK1%",
				firstSaveA1bis: "Applikationen findes også i din <a href='%LINK2%' target='_blank'>ArcGIS Online-indholdsmappe</a>.",
				firstSaveQ2: "Er min applikation blevet delt?",
				firstSaveA2: "På nuværende tidspunkt er din applikation ikke blevet delt. But DEL-knappen for at dele den.",
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
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Din applikation er <strong>offentligt tilgængelig</strong>.",
				shareHeader2: "Din applikation er tilgængelig for dine organisationsmedlemmer (der kræves login).",
				shareLinkHeader: "Del applikationen med dit publikum",
				shareLinkOpen: "ÅBN",
				shareQ1Opt1: "Hvordan kan jeg holde min applikation privat?",
				shareQ1Opt2: "Hvordan kan jeg holde applikationen privat eller dele den offentligt?",
				shareA1: "Brug %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens elementoplysningsside</a>. Hvis du vil ophæve deling af webkortet, skal du bruge <a href='%LINK2%' target='_blank'>webkortets elementoplysningsside</a>.",
				shareA1bis: "Hvis du også vil ophæve deling af featuretjenesten, skal du bruge <a href='%LINK1%' target='_blank'>featuretjenestens elementoplysningsside</a>.",
				shareQ2: "Hvordan kan jeg redigere applikationen senere?",
				shareQ2bis: "Hvordan kommer jeg tilbage til redigeringsgrænsefladen?",
				shareA2div1: "Gem og genbrug følgende link %LINK1%, eller brug <a href='%LINK2%' target='_blank'>applikationens elementoplysningsside</a>.",
				shareA2div2: "Når du som ejer af applikationen er logget ind på ArcGIS.com, indeholder applikationen en knap, der åbner det interaktive builder-program:",				
				shareQ3: "Hvor er dataene gemt?",
				shareA3: "Applikationskonfigurationen er gemt i <a href='%LINK1%' target='_blank'>dette webkortelement</a> og <a href='%LINK2%' target='_blank'>dette webapplikationselement</a>. Hvis du har importeret fra Flickr, Picasa, Facebook eller YouTube, forbliver dine billeder og videoer gemt d\ér, og de duplikeres ikke i ArcGIS Online.",
				learnMore: "Find ud af mere",
				close: "Luk"
			},
			settings: {
				header: "Applikationsindstillinger",
				cancel: "Annullér",
				apply: "Anvend",
				tabError: "Kontrollér for fejl på alle faner"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Hvilket layout vil du bruge?",
				explainInit: "Du kan redigere via indstillingsdialogboksen.",
				selected: "Vælg layout",
				select: "Vælg dette layout"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Vælg et app-tema, eller definer dine egne farver.",
				label: "Baggrundsfarver til header og side panel"
			},
			settingsHeader: {
				title: "Logo",
				explain: "Tilpas toptekstlogoet  (maks. 250 x 50 pixel).",
				logoEsri: "Esri-logo",
				logoNone: "Intet logo",
				logoCustom: "Brugerdefineret logo",
				logoCustomPlaceholder: "Billede-URL",
				logoCustomTargetPlaceholder: "Klik gennem-link",
				logoSocialExplain: "Tilpas header-linket øverst til højre.",
				logoSocialText: "Tekst",
				logoSocialLink: "Link",
				logoSocialDisabled: "Dette objekt er blevet deaktiveret af administratoren"
			},
			mediaSelector: {
				lblMap: "Kort",
				lblPicture: "Billede",
				lblVideo: "Video",
				lblExternal: "Ekstern side"
			},
			webMapSelector: {
				radioCurrentWebMap: "Aktuelt webkort",
				radioWebmapApp: "Et af de andre webkort, der benyttes i applikationen",
				radioAnotherWebmap: "Et andet webkort",
				btnSelect: "Vælg",
				lblOr: "eller",
				fieldEnterWebmapId: "Angiv webkort-ID",
				btnConfigure: "Konfigur\ér kortet"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mit indhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "Vælg webkort",
				searchTitle: "Søg",
				ok: "OK",
				cancel: "Annullér",
				placeholder: "Angiv søgeterm"
			}
		}
	})
);
