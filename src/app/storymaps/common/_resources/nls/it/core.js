define(
	 ({
		commonCore: {
			common: {
				add: "Aggiungi",
				edit: "Modifica",
				save: "Salva",
				next: "Avanti",
				cancel: "Annulla",
				back: "Indietro",
				apply: "Applica",
				close: "Chiudi",
				open: "Apri",
				start: "Avvia",
				loading: "Caricamento in corso",
				disabledAdmin: "Questa feature è stata disabilitata dall\'amministratore",
				width: "Larghezza",
				height: "Altezza"
			},
			inlineFieldEdit: {
				editMe: "Modifica utente"
			},
			builderPanel: {
				panelHeader: "Generatore di %TPL_NAME%",
				buttonSaving: "Salvataggio",
				buttonSaved: "Salvato",
				buttonShare: "Condividi",
				buttonSettings: "Impostazioni",
				buttonHelp: "Guida",
				buttonPreview: "Visualizza in tempo reale",
				tooltipFirstSave: "Questa funzione è disponibile solo dopo il salvataggio.",
				tooltipNotShared: "Questa funzione è disponibile solo dopo la condivisione.",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangePlural: "Modifiche in sospeso",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				saveError: "Salvataggio non riuscito. Riprovare",
				shareStatus1: "L\'applicazione non è stata ancora salvata",
				shareStatus2: "Applicazione condivisa pubblicamente",
				shareStatus3: "Applicazione condivisa nell\'ambito dell\'organizzazione",
				shareStatus4: "Applicazione non condivisa"
			},
			saveError: {
				title: "Errore durante il salvataggio dell\'applicazione",
				err1Div1: "Non è possibile salvare l\'applicazione perché è già presente un altro elemento con lo stesso nome (vedere la <a class='linkagolroot' target='_blank'>cartella dei contenuti</a>).",
				err1Div2: "Modificare il titolo dell\'applicazione, quindi salvare.",
				btnOk: "Modifica il titolo dell\'applicazione"
			},
			share: {
				firstSaveTitle: "Salvataggio dell\'applicazione riuscito",
				firstSaveHeader: "L\'applicazione è stata salvata in %PORTAL% ma non è ancora condivisa.",
				firstSavePreview: "Anteprima",
				firstSaveShare: "Condividi",
				firstSaveA1: "Se non si è esperti di %PORTAL% o si desidera impostare una scelta rapida per accedere all\'interfaccia del generatore, salvare il collegamento seguente: %LINK1%",
				firstSaveA1bis: "L\'applicazione è disponibile anche nella <a href='%LINK2%' target='_blank'>cartella dei contenuti di %PORTAL%</a>.",
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
				shareHeader1: "L\'applicazione è <strong>accessibile pubblicamente</strong>.",
				shareHeader2: "L\'applicazione è accessibile ai membri dell\'organizzazione (accesso obbligatorio).",
				shareLinkCopy: "Copia",
				shareLinkCopied: "Copiato",
				shareQ0: "Come si incorpora l\'applicazione in una pagina Web?",
				shareQ1Opt1: "Come si mantiene privata l\'applicazione?",
				shareQ1Opt2: "Come si mantiene privata o si condivide pubblicamente l\'applicazione?",
				shareA1: "Utilizzare %SHAREIMG% nella <a href='%LINK1%' target='_blank'>pagina degli elementi dell\'applicazione</a>.",
				shareQ2bis: "Come si torna all\'interfaccia del generatore?",
				shareA2div1: "Salvare e riutilizzare il collegamento seguente %LINK1% oppure utilizzare la <a href='%LINK2%' target='_blank'>pagina degli elementi dell\'applicazione</a>.",
				shareA2div2: "In quanto proprietari dell\'applicazione, all\'accesso in %PORTAL%, l\'applicazione includerà un pulsante per aprire il generatore:",				
				shareQ3: "Dove vengono memorizzati i dati?",
				shareA3: "La configurazione e i dati di %TPL_NAME% vengono memorizzati in <a href='%LINK2%' target='_blank'>questo elemento dell\'applicazione Web</a>. Se è stata utilizzata l\'importazione da Flickr, Picasa, Facebook o YouTube, le immagini e i video non sono stati duplicati in %PORTAL%."
			},
			settings: {
				header: "Impostazioni",
				tabError: "Verificare la presenza di errori in tutte le schede"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Scegliere il layout da utilizzare.",
				explainInit: "È possibile modificare il layout in qualsiasi momento nella finestra di dialogo delle impostazioni.",
				viewExample: "Visualizza un esempio in tempo reale"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Intestazione",
				logoEsri: "Logo Esri",
				logoNone: "Nessun logo",
				logoCustom: "Logo personalizzato",
				logoCustomPlaceholder: "URL (max 250x50 pixel)",
				logoCustomTargetPlaceholder: "Collegamento clickthrough",
				logoSocialExplain: "Personalizzare il collegamento nell\'intestazione.",
				logoSocialText: "Testo",
				logoSocialLink: "Collegamento",
				lblSmallHeader: "Usa intestazione compressa (senza sottotitolo)"
			},
			header: {
				title: "Modifica il titolo di %TPL_NAME%",
				subtitle: "Modifica il sottotitolo di %TPL_NAME%"
			}
		}
	})
);
