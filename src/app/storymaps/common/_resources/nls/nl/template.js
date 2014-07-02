define(
	 ({
		common: {
			common: {
				edit: "Bewerken"
			},
			inlineFieldEdit: {
				editMe: "Bewerk me!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME%-builder",
				buttonSave: "OPSLAAN",
				buttonShare: "DELEN",
				buttonSettings: "INSTELLINGEN",
				buttonHelp: "HELP",
				noPendingChange: "Geen wijziging in behandeling",
				unSavedChangeSingular: "1 niet-opgeslagen wijziging",
				unSavedChangePlural: "niet-opgeslagen wijzigingen",
				popoverSaveWhenDone: "Vergeet uw werk niet op te slaan wanneer u klaar bent",
				closeWithPendingChange: "Weet u zeker dat u de actie wilt bevestigen? Uw wijzigingen gaan verloren.",
				ok: "OK",
				savingApplication: "Applicatie opslaan",
				saveError: "Opslaan mislukt, probeer het opnieuw",
				saveError3: "De titel mag niet leeg zijn",
				// TODO
				signIn: "Meld u aan met een account op",
				shareStatus1: "Applicatie is niet opgeslagen",
				shareStatus2: "Applicatie wordt openbaar gedeeld",
				shareStatus3: "Applicatie wordt gedeeld binnen de organisatie",
				shareStatus4: "Application wordt niet gedeeld"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titel",
				addPopupTitle: "Toevoegen",
				addPopupDescription: "Voeg een nieuwe weergave toe aan uw reeks.",
				addPopupButton: "TOEVOEGEN",
				// Edit
				editPopupTitle: "Bewerken",
				editPopupDescription: "De geselecteerde weergave bewerken",
				editPopupButton: "TOEPASSEN",
				// Add/Edit
				addEditPopupCancelButton: "ANNULEREN",
				addEditPopupMyContentBtn: "Selecteren uit Mijn Content",
				addEditPopupConfigureWebMapBtn: " Configureren"
			},
			share: {
				firstSaveTitle: "Applicatie is opgeslagen",
				firstSaveHeader: "Uw applicatie is nu opgeslagen in ArcGIS Online. Lees de volgende antwoorden op veelgestelde vragen.",
				firstSaveA1: "Als u niet vertrouwd bent met ArcGIS Online of u zoekt een snelle manier om toegang te krijgen tot de ontwerpinterface, kunt u de volgende koppeling opslaan: %LINK1%",
				firstSaveA1bis: "De applicatie is ook te vinden in uw <a href='%LINK2%' target='_blank'>ArcGIS Online-contentfolder</a>.",
				firstSaveQ2: "Wordt mijn applicatie gedeeld?",
				firstSaveA2: "Momenteel wordt uw applicatie niet gedeeld. Als u deze wilt delen, gebruikt u de knop DELEN.",
				shareTitle: "Uw applicatie delen",
				sharePrivateHeader: "Uw applicatie wordt niet gedeeld. Wilt u deze delen?",
				sharePrivateBtn1: "Openbaar delen",
				sharePrivateBtn2: "Delen met Mijn Organisatie",
				sharePrivateWarning: "%WITH% delen is uitgeschakeld omdat u niet de eigenaar bent van de <a href='%LINK%' target='_blank'>webmap</a>.",
				sharePrivateWarningWith1: "Openbaar",
				sharePrivateWarningWith2: "Openbaar en met de organisatie",
				sharePrivateProgress: "Delen wordt uitgevoerd...",
				sharePrivateErr: "Delen is mislukt. Probeer het opnieuw of",
				sharePrivateOk: "Delen is bijgewerkt. Bezig met laden...",
				sharePreviewAsUser: "Voorbeeld",
				shareHeader1: "Uw applicatie is <strong>openbaar toegankelijk</strong>.",
				shareHeader2: "Uw applicatie is toegankelijk voor leden van uw organisatie (aanmelden is vereist).",
				shareLinkHeader: "De applicatie delen met uw publiek",
				shareLinkOpen: "OPENEN",
				shareQ1Opt1: "Hoe kan ik de applicatie privé houden?",
				shareQ1Opt2: "Hoe kan ik de applicatie privé houden of openbaar delen?",
				shareA1: "Gebruik %SHAREIMG% op <a href='%LINK1%' target='_blank'>de applicatie-itempagina</a>. Als u ook het delen van de webmap ongedaan wilt maken, gebruikt u <a href='%LINK2%' target='_blank'>de webmapitempagina</a>.",
				shareA1bis: "Als u het delen van de featureservice ongedaan wilt maken, gebruikt u <a href='%LINK1%' target='_blank'>de Featureservice-itempage</a>.",
				shareQ2: "Hoe kan ik de applicatie later bewerken?",
				shareQ2bis: "Hoe keer ik terug naar de ontwerpinterface?",
				shareA2div1: "Sla de volgende koppeling op %LINK1% en gebruik deze opnieuw of gebruik <a href='%LINK2%' target='_blank'>de applicatie-itempagina</a>.",
				shareA2div2: "Als u bent aangemeld bij ArcGIS.com als de eigenaar van de applicatie, bevat de applicatie een knop om de interactieve builder te openen:",				
				shareQ3: "Waar zijn de gegevens opgeslagen?",
				shareA3: "De applicatieconfiguratie wordt opgeslagen in <a href='%LINK1%' target='_blank'>dit webmapitem</a> en <a href='%LINK2%' target='_blank'>dit webapplicatie-item</a>. Als u importeren van Flickr, Picasa, Facebook of YouTube hebt gebruikt, blijven uw afbeeldingen en video\'s daar opgeslagen en worden deze niet gedupliceerd in ArcGIS Online.",
				learnMore: "Meer weten",
				close: "Sluiten"
			},
			settings: {
				header: "Applicatie-instellingen",
				cancel: "Annuleren",
				apply: "Toepassen",
				tabError: "Controleer alle tabbladen op fouten"
			},
			settingsLayout: {
				title: "Lay-out",
				explain: "Welke lay-out wilt u gebruiken?",
				explainInit: "U kunt deze wijzigen via het dialoogvenster Instellingen.",
				selected: "Geselecteerde lay-out",
				select: "Selecteer deze lay-out"
			},
			settingsTheme: {
				title: "Thema",
				explain: "Kies een appthema of definieer uw eigen kleuren.",
				label: "Achtergrondkleuren voor kop en zijvensters"
			},
			settingsHeader: {
				title: "Koptekst",
				explain: "Pas het logo van de koptekst aan (maximaal 250 x 50px).",
				logoEsri: "Esri-logo",
				logoNone: "Geen logo",
				logoCustom: "Aangepast logo",
				logoCustomPlaceholder: "Afbeeldings-URL",
				logoCustomTargetPlaceholder: "Doorklikkoppeling",
				logoSocialExplain: "Pas de koppeling in de rechterbovenhoek van de koptekst aan.",
				logoSocialText: "Tekst",
				logoSocialLink: "Koppeling",
				logoSocialDisabled: "Deze functie is uitgeschakeld door de beheerder"
			},
			mediaSelector: {
				lblMap: "Kaart",
				lblPicture: "Afbeelding",
				lblVideo: "Video",
				lblExternal: "Externe pagina"
			},
			webMapSelector: {
				radioCurrentWebMap: "Huidige webmap",
				radioWebmapApp: "Een van de andere webmaps die in de applicatie worden gebruikt",
				radioAnotherWebmap: "Andere webmap",
				btnSelect: "Selecteren",
				lblOr: "of",
				fieldEnterWebmapId: "Een webmap-ID invoeren",
				btnConfigure: "De kaart configureren"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Mijn Organisatie",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mijn Content",
					favoritesLabel: "Mijn Favorieten"
				},
				title: "Webmap selecteren",
				searchTitle: "Zoeken",
				ok: "OK",
				cancel: "Annuleren",
				placeholder: "Zoekterm invoeren"
			}
		}
	})
);
