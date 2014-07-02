define(
	 ({
		common: {
			common: {
				edit: "Modifica"
			},
			inlineFieldEdit: {
				editMe: "Modifica utente"
			},
			builderPanel: {
				panelHeader: "Generatore di %TPL_NAME%",
				buttonSave: "SALVA",
				buttonShare: "CONDIVIDI",
				buttonSettings: "IMPOSTAZIONI",
				buttonHelp: "GUIDA",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangeSingular: "1 modifica non salvata",
				unSavedChangePlural: "modifiche non salvate",
				popoverSaveWhenDone: "Al termine, non dimenticare di salvare",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				ok: "OK",
				savingApplication: "Salvataggio dell\'applicazione",
				saveError: "Salvataggio non riuscito. Riprovare",
				saveError3: "Specificare il titolo",
				// TODO
				signIn: "Effettuare l\'accesso con un account su",
				shareStatus1: "Applicazione non salvata",
				shareStatus2: "Applicazione condivisa pubblicamente",
				shareStatus3: "Applicazione condivisa nell\'ambito dell\'organizzazione",
				shareStatus4: "Applicazione non condivisa"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titolo",
				addPopupTitle: "Aggiungi",
				addPopupDescription: "Aggiunge una nuova visualizzazione alla serie.",
				addPopupButton: "AGGIUNGI",
				// Edit
				editPopupTitle: "Modifica",
				editPopupDescription: "Modifica la visualizzazione selezionata",
				editPopupButton: "APPLICA",
				// Add/Edit
				addEditPopupCancelButton: "ANNULLA",
				addEditPopupMyContentBtn: "Effettua la selezione da I miei contenuti",
				addEditPopupConfigureWebMapBtn: " Configura"
			},
			share: {
				firstSaveTitle: "Salvataggio dell\'applicazione completato",
				firstSaveHeader: "L\'applicazione è stata salvata in ArcGIS Online. Leggere le seguenti risposte alle domande frequenti.",
				firstSaveA1: "Se non si è esperti di ArcGIS Online o si desidera impostare una scelta rapida per accedere all\'interfaccia di modifica, salvare il collegamento seguente: %LINK1%",
				firstSaveA1bis: "L\'applicazione è disponibile anche nella <a href='%LINK2%' target='_blank'>cartella dei contenuti di ArcGIS Online</a>.",
				firstSaveQ2: "L\'applicazione è condivisa?",
				firstSaveA2: "L\'applicazione non è attualmente condivisa. Per condividerla, utilizzare il pulsante CONDIVIDI.",
				shareTitle: "Condividi applicazione",
				sharePrivateHeader: "L\'applicazione non è condivisa. Condividerla?",
				sharePrivateBtn1: "Condividi pubblicamente",
				sharePrivateBtn2: "Condividi con l\'organizzazione",
				sharePrivateWarning: "La condivisione %WITH% è stata disabilitata perché non si è proprietari della <a href='%LINK%' target='_blank'>mappa Web</a>.",
				sharePrivateWarningWith1: "con il pubblico",
				sharePrivateWarningWith2: "con il pubblico e con l\'organizzazione",
				sharePrivateProgress: "Condivisione in corso...",
				sharePrivateErr: "Condivisione non riuscita. Riprovare o",
				sharePrivateOk: "Condivisione aggiornata. Caricamento in corso...",
				sharePreviewAsUser: "Anteprima",
				shareHeader1: "L\'applicazione è <strong>accessibile pubblicamente</strong>.",
				shareHeader2: "L\'applicazione è accessibile ai membri dell\'organizzazione (accesso obbligatorio).",
				shareLinkHeader: "Condividi l\'applicazione con il pubblico",
				shareLinkOpen: "APRI",
				shareQ1Opt1: "Come si mantiene privata l\'applicazione?",
				shareQ1Opt2: "Come si mantiene privata o si condivide pubblicamente l\'applicazione?",
				shareA1: "Utilizzare %SHAREIMG% nella <a href='%LINK1%' target='_blank'>pagina degli elementi dell\'applicazione</a>. Se si desidera anche annullare la condivisione della mappa Web, utilizzare la <a href='%LINK2%' target='_blank'>pagina degli elementi della mappa Web</a>.",
				shareA1bis: "Se si desidera anche annullare la condivisione del feature service, utilizzare la <a href='%LINK1%' target='_blank'>pagina degli elementi del feature service</a>.",
				shareQ2: "Come si modifica l\'applicazione in un secondo momento?",
				shareQ2bis: "Come si torna all\'interfaccia di creazione?",
				shareA2div1: "Salvare e riutilizzare il collegamento seguente %LINK1% oppure utilizzare la <a href='%LINK2%' target='_blank'>pagina degli elementi dell\'applicazione</a>.",
				shareA2div2: "In quanto proprietari dell\'applicazione, all\'accesso in ArcGIS.com, l\'applicazione includerà un pulsante per aprire il generatore interattivo:",				
				shareQ3: "Dove vengono memorizzati i dati?",
				shareA3: "La configurazione dell\'applicazione viene memorizzata in <a href='%LINK1%' target='_blank'>questo elemento della mappa Web</a> e in <a href='%LINK2%' target='_blank'>questo elemento dell\'applicazione Web</a>. Se è stata utilizzata l\'importazione da Flickr, Picasa, Facebook o YouTube, le immagini e i video rimarranno memorizzati in tale posizione e non verranno duplicati in ArcGIS Online.",
				learnMore: "Ulteriori informazioni",
				close: "Chiudi"
			},
			settings: {
				header: "Impostazioni applicazione",
				cancel: "Annulla",
				apply: "Applica",
				tabError: "Verificare la presenza di errori in tutte le schede"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Scegliere il layout da utilizzare.",
				explainInit: "Sarà possibile modificarlo nella finestra di dialogo delle impostazioni.",
				selected: "Layout selezionato",
				select: "Seleziona il layout"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Scegliere un tema per l\'app o definire i propri colori.",
				label: "Colori sfondo intestazione e pannello laterale"
			},
			settingsHeader: {
				title: "Intestazione",
				explain: "Personalizza il logo dell\'intestazione (max 250 x 50 px).",
				logoEsri: "Logo Esri",
				logoNone: "Nessun logo",
				logoCustom: "Logo personalizzato",
				logoCustomPlaceholder: "URL immagine",
				logoCustomTargetPlaceholder: "Collegamento clickthrough",
				logoSocialExplain: "Personalizzare il collegamento in alto a destra nell\'intestazione.",
				logoSocialText: "Testo",
				logoSocialLink: "Collegamento",
				logoSocialDisabled: "Questa feature è stata disabilitata dall\'Amministratore"
			},
			mediaSelector: {
				lblMap: "Mappa",
				lblPicture: "Immagine",
				lblVideo: "Video",
				lblExternal: "Pagina esterna"
			},
			webMapSelector: {
				radioCurrentWebMap: "Mappa Web corrente",
				radioWebmapApp: "Una delle altre mappe Web utilizzate nell\'applicazione",
				radioAnotherWebmap: "Altra mappa Web",
				btnSelect: "Seleziona",
				lblOr: "oppure",
				fieldEnterWebmapId: "Immettere un ID mappa Web",
				btnConfigure: "Configura mappa"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "La mia organizzazione",
					onlineLabel: "ArcGIS Online",
					contentLabel: "I miei contenuti",
					favoritesLabel: "I miei preferiti"
				},
				title: "Seleziona mappa Web",
				searchTitle: "Cerca",
				ok: "OK",
				cancel: "Annulla",
				placeholder: "Immettere il termine da cercare"
			}
		}
	})
);
