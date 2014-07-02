define(
	 ({
		common: {
			common: {
				edit: "Rediger"
			},
			inlineFieldEdit: {
				editMe: "Rediger meg!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME%-bygger",
				buttonSave: "LAGRE",
				buttonShare: "DEL",
				buttonSettings: "INNSTILLINGER",
				buttonHelp: "HJELP",
				noPendingChange: "Ingen ventende endring",
				unSavedChangeSingular: "1 ulagret endring",
				unSavedChangePlural: "ulagrede endringer",
				popoverSaveWhenDone: "Ikke glem å lagre når du er ferdig",
				closeWithPendingChange: "Er du sikker på at du vil bekrefte handlingen? Du mister da endringene du har gjort.",
				ok: "Ok",
				savingApplication: "Lagrer applikasjonen",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				saveError3: "Tittelen må fylles ut",
				// TODO
				signIn: "Logg på med en konto på",
				shareStatus1: "Programmet er ikke lagret",
				shareStatus2: "Programmet er delt offentlig",
				shareStatus3: "Programmet er delt innenfor organisasjonen",
				shareStatus4: "Programmet er ikke delt"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Tittel",
				addPopupTitle: "Legg til",
				addPopupDescription: "Legg til en ny visning i serien.",
				addPopupButton: "LEGG TIL",
				// Edit
				editPopupTitle: "Rediger",
				editPopupDescription: "Rediger den valgte visningen",
				editPopupButton: "BRUK",
				// Add/Edit
				addEditPopupCancelButton: "AVBRYT",
				addEditPopupMyContentBtn: "Velg fra mitt innhold",
				addEditPopupConfigureWebMapBtn: " Konfigurer"
			},
			share: {
				firstSaveTitle: "Programmet er lagret",
				firstSaveHeader: "Programmet er nå lagret i ArcGIS Online. Les disse svarene på vanlige spørsmål.",
				firstSaveA1: "Hvis du er ukjent med ArcGIS Online eller vil opprette en snarvei til grensesnittet for opprettere, kan du lagre følgende kobling: %LINK1%",
				firstSaveA1bis: "Du finner også programmet i <a href='%LINK2%' target='_blank'>innholdsmappen din i ArcGIS Online</a>.",
				firstSaveQ2: "Er programmet mitt delt?",
				firstSaveA2: "For øyeblikket er ikke programmet ditt delt. Hvis du vil dele det, bruker du DEL-knappen.",
				shareTitle: "Del applikasjonen din",
				sharePrivateHeader: "Programmet ditt er ikke delt. Har du lyst til å dele det?",
				sharePrivateBtn1: "Del offentlig",
				sharePrivateBtn2: "Del med min organisasjon",
				sharePrivateWarning: "Deling av %WITH% er deaktivert fordi du ikke eier <a href='%LINK%' target='_blank'>webkartet</a>.",
				sharePrivateWarningWith1: "offentlig",
				sharePrivateWarningWith2: "offentlig og med organisasjonen",
				sharePrivateProgress: "Deling pågår ...",
				sharePrivateErr: "Deling mislyktes. Prøv på nytt, eller",
				sharePrivateOk: "Delingen er blitt oppdatert, lastes inn ...",
				sharePreviewAsUser: "Forhåndsvisning",
				shareHeader1: "Programmet er <strong>offentlig tilgjengelig</strong>.",
				shareHeader2: "Programmet ditt er tilgjengelig for medlemmer av organisasjonen din (krever pålogging).",
				shareLinkHeader: "Del programmet med publikum",
				shareLinkOpen: "ÅPNE",
				shareQ1Opt1: "Hvordan holder jeg programmet privat?",
				shareQ1Opt2: "Hvordan holder jeg programmet privat eller deler det offentlig?",
				shareA1: "Bruk %SHAREIMG% på <a href='%LINK1%' target='_blank'>siden for programelementer</a>. Hvis du vil oppheve delingen av webkartet, kan du bruke<a href='%LINK2%' target='_blank'>siden for webkartelementer</a>.",
				shareA1bis: "Hvis du også vil oppheve delingen av geoobjektstjenesten, kan du bruke <a href='%LINK1%' target='_blank'>siden for geoobjektstjenesteelementer</a>.",
				shareQ2: "Hvordan kan jeg redigere programmet senere?",
				shareQ2bis: "Hvordan kommer jeg tilbake til grensesnittet for opprettere?",
				shareA2div1: "Lagre og bruk følgende kobling på nytt, %LINK1% eller bruk <a href='%LINK2%' target='_blank'>siden for programelementer</a>.",
				shareA2div2: "Når du har logget på ArcGIS.com som eier av programmet, får du tilgang til en knapp for å åpne det interaktive byggeverktøyet:",				
				shareQ3: "Hvor lagres dataene?",
				shareA3: "Programmets konfigurasjon er lagret i <a href='%LINK1%' target='_blank'>dette webkartelementet</a> og <a href='%LINK2%' target='_blank'>dette webprogramelementet</a>. Hvis du har importert fra Flickr, Picasa, Facebook eller YouTube, forblir bildene og videoene dine lagret der og dupliseres ikke i ArcGIS Online.",
				learnMore: "Få mer informasjon",
				close: "Lukk"
			},
			settings: {
				header: "Applikasjonsinnstillinger",
				cancel: "Avbryt",
				apply: "Bruk",
				tabError: "Se etter feil i alle faner"
			},
			settingsLayout: {
				title: "Utforming",
				explain: "Hva slags oppsett vil du bruke?",
				explainInit: "Det er mulig å endre dette gjennom dialogboksen for innstillinger.",
				selected: "Valgt utforming",
				select: "Velg denne utformingen"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Velg et app-tema eller angi dine egne farger.",
				label: "Bakgrunnsfarger for overskrift og sidepaneler"
			},
			settingsHeader: {
				title: "Overskrift",
				explain: "Tilpass logoen øverst (maks. 250 x 50 piksler).",
				logoEsri: "Esri-logo",
				logoNone: "Ingen logo",
				logoCustom: "Tilpasset logo",
				logoCustomPlaceholder: "Bilde-URL",
				logoCustomTargetPlaceholder: "Gjennomklikkingskobling",
				logoSocialExplain: "Tilpass overskriftkoblingen øverst til høyre.",
				logoSocialText: "Tekst",
				logoSocialLink: "Kobling",
				logoSocialDisabled: "Administratoren har deaktivert denne funksjonen"
			},
			mediaSelector: {
				lblMap: "Kart",
				lblPicture: "Bilde",
				lblVideo: "Video",
				lblExternal: "Ekstern side"
			},
			webMapSelector: {
				radioCurrentWebMap: "Gjeldende webkart",
				radioWebmapApp: "Ett av de andre webkartene som er brukt i programmet",
				radioAnotherWebmap: "Et annet webkart",
				btnSelect: "Velg",
				lblOr: "eller",
				fieldEnterWebmapId: "Angi en webkart-ID",
				btnConfigure: "Konfigurer kartet"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisasjon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "Velg webkart",
				searchTitle: "Søk",
				ok: "Ok",
				cancel: "Avbryt",
				placeholder: "Angi søkeord"
			}
		}
	})
);
