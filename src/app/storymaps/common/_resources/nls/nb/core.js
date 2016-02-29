define(
	 ({
		commonCore: {
			common: {
				add: "Legg til",
				edit: "Rediger",
				save: "Lagre",
				next: "Neste",
				cancel: "Avbryt",
				back: "Bak",
				apply: "Bruk",
				close: "Lukk",
				open: "Åpne",
				start: "Start",
				loading: "Laster inn",
				disabledAdmin: "Administratoren har deaktivert denne funksjonen",
				width: "Bredde",
				height: "Høyde",
				create: "Opprette",
				yes: "Ja",
				no: "Nei",
				mystories: "Mine historier"
			},
			inlineFieldEdit: {
				editMe: "Rediger meg!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME%-bygger",
				buttonSaving: "Lagrer",
				buttonSaved: "Lagret",
				buttonShare: "Del",
				buttonSettings: "Innstillinger",
				buttonHelp: "Hjelp",
				buttonPreview: "Vis historie",
				tooltipFirstSave: "Dette er ikke tilgjengelig før du har lagret.",
				tooltipNotShared: "Dette er ikke tilgjengelig før du har delt.",
				tooltipNotShared2: "Historien er ikke delt. Det er bare du som har tilgang til den.",
				noPendingChange: "Ingen ventende endring",
				unSavedChangePlural: "Ventende endringer",
				closeWithPendingChange: "Er du sikker på at du vil bekrefte denne handlingen? Du mister endringene du har gjort.",
				saveError: "Lagringen mislyktes. Prøv på nytt.",
				status1: "Historien er delt, men den har problemer",
				status2: "Historien er ikke delt, men den har problemer",
				status3: "Historien er offentlig",
				status4: "Historien er delt innenfor organisasjonen",
				status5: "Historien er privat",
				status6: "Historien er ikke lagret ennå",
				checking: "Kontrollerer",
				fix: "Fiks"
			},
			saveError: {
				title: "Feil under lagring av historien",
				err1Div1: "Historien kan ikke lagres fordi du allerede har et annet element med samme navn.",
				err1Div2: "Endre tittelen på historien, og deretter lagrer du den.",
				btnOk: "Rediger historietittelen"
			},
			saveErrorSocial: {
				title: "Oppdater deling på sosiale medier",
				panel1: "Historien vises på en bedre måte på sosiale medier, men tittelen på ArcGIS-webapplikasjonselementet er ikke den samme som historietittelen.",
				panel1tooltip: "Når du angir en tittel, et sammendrag og et miniatyrbilde, vil historien se slik ut:",
				panel2:	"Hvilken tittel vil du bruke på sosiale medier:",
				panel2q1: "Historietittel (anbefales)",
				panel2q1tooltip: "Når du velger dette alternativet, endres elementtittelen slik at den er identisk med historietittelen og andre endringer i byggeverktøyet synkroniseres.",
				panel2q2: "Elementtittel",
				panel3: "Hvis du vil forbedre hvordan historien vises på sosiale medier, bruker du ${MYSTORIES} til å legge til et sammendrag og et miniatyrbilde.",
				panel4: "Ikke vis denne advarselen igjen for denne historien"
			},
			share: {
				shareTitle: "Del historien",
				preview: "Forhåndsvisning",
				viewlive: "Vis historie",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Bare du kan se historien",
				btnOrg: "Organisasjon",
				btnOrgTooltip: "Bare medlemmer av organisasjonen kan se historien",
				btnPublic: "Felles",
				btnPublicTooltip: "Alle kan se historien",
				loadingMessage: "Ser etter problemer med historien",
				viewToggle1: "Vis historieinnhold",
				viewToggle2: "Lukk historieinnhold",
				socialize: "Sosialiser",
				statusPrivate: "Historien din er privat, bare du kan se den.",
				statusError: "Det er problemer i historieinnholdet som leserne dine kommer til å merke. Du kan finne og løse disse problemene nedenfor.",
				statusNoErrPrivate: "Del historien din så snart du er klar!",
				mystoriesinvite: "Administrer alle historiene dine",
				notavailable1: "Beklager, deling av historien din fra byggeverktøyet er ikke støttet, ettersom dette programmet ikke er hostet i %PRODUCT%.",
				notavailable2: "Beklager, deling av historien din fra byggeverktøyet er ikke støttet i denne versjonen av Portal for ArcGIS (krever versjon 10.4 eller nyere).",
				notavailable3: "Du kan dele denne historien fra %LINK%.",
				notavailable4: "Mine historier",
				notavailable5: "elementsiden",
				notavailable6: "Beklager, denne funksjonen er ikke støttet fullt ut i utviklermodus. Avhengig av scenarioet ditt, kan det hende denne funksjonen støttes når den distribueres.",
				notavailable7: "Sørg for å gå til %MYCONTENT% for å bekrefte at kartene og lagene som er brukt i historien din, også er delt.",
				notavailable8: "Mitt innhold",
				mystoriesinvite2: "Hvis du vil forbedre hvordan historien vises på sosiale nettverk, bruker du ${MYSTORIES} til å legge til et sammendrag og et miniatyrbilde."
			},
			settings: {
				header: "Innstillinger",
				tabError: "Se etter feil i alle faner"
			},
			settingsLayout: {
				title: "Oppsett",
				explain: "Hva slags oppsett vil du bruke?",
				explainInit: "Du kan når som helst endre oppsettet fra innstillingdialogen.",
				viewExample: "Vis et eksempel"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Overskrift",
				logoEsri: "Esri-logo",
				logoNone: "Ingen logo",
				logoCustom: "Tilpasset logo",
				logoCustomPlaceholder: "URL-adresse (maks. 250 x 50 piksler)",
				logoCustomTargetPlaceholder: "Gjennomklikkingskobling",
				logoSocialExplain: "Tilpass overskriftskoblingen.",
				logoSocialText: "Tekst",
				logoSocialLink: "Kobling",
				lblSmallHeader: "Bruk kompakt overskrift (ingen undertittel)"
			},
			header: {
				title: "Rediger tittelen på %TPL_NAME%",
				subtitle: "Rediger undertittelen på din %TPL_NAME%"
			}
		}
	})
);
