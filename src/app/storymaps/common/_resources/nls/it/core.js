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
				height: "Altezza",
				create: "Crea",
				yes: "Sì",
				no: "No",
				mystories: "My Stories"
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
				buttonPreview: "Visualizza storia",
				tooltipFirstSave: "Questa funzione è disponibile solo dopo il salvataggio.",
				tooltipNotShared: "Questa funzione è disponibile solo dopo la condivisione.",
				tooltipNotShared2: "La storia non è condivisa, è accessibile solo dall\'utente corrente.",
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangePlural: "Modifiche in sospeso",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				saveError: "Salvataggio non riuscito. Riprovare",
				status1: "La storia è condivisa ma presenta problemi",
				status2: "La storia non è condivisa ma presenta problemi",
				status3: "Storia pubblica",
				status4: "Storia condivisa nell\'ambito dell\'organizzazione",
				status5: "Storia privata",
				status6: "Storia non ancora salvata",
				checking: "Verifica in corso",
				fix: "Correzione"
			},
			saveError: {
				title: "Errore durante il salvataggio della storia",
				err1Div1: "Impossibile salvare la storia perché è già presente un altro elemento con lo stesso nome.",
				err1Div2: "Modificare il titolo della storia, quindi salvarla.",
				btnOk: "Modifica il titolo della storia"
			},
			saveErrorSocial: {
				title: "Aggiornamento condivisione con social media",
				panel1: "L\'aspetto della storia sui social media è stata migliorata, ma il titolo dell\'elemento applicazione Web ArcGIS è diverso dal titolo della storia.",
				panel1tooltip: "Se si definisce un titolo, un riepilogo e un\'immagine di anteprima, l\'aspetto della storia sarà:",
				panel2:	"Specificare il titolo che si desidera utilizzare sui social media:",
				panel2q1: "Titolo della storia (consigliato)",
				panel2q1tooltip: "Se si sceglie questa opzione, il titolo dell\'elemento verrà modificato per corrispondere al titolo della storia e ulteriori modifiche nel generatore verranno sincronizzate.",
				panel2q2: "Titolo elemento",
				panel3: "Per migliorare ulteriormente l\'aspetto della storia sui social media utilizzare ${MYSTORIES} per aggiungere un riepilogo e un\'immagine di anteprima.",
				panel4: "Non visualizzare più avvisi per questa storia"
			},
			share: {
				shareTitle: "Condividi la storia",
				preview: "Anteprima",
				viewlive: "Visualizza storia",
				btnPrivate: "Privato",
				btnPrivateTooltip: "La storia può essere visualizzata solo dall\'utente corrente",
				btnOrg: "Organizzazione",
				btnOrgTooltip: "La storia può essere visualizzata solo dai membri dell\'organizzazione",
				btnPublic: "Pubblico",
				btnPublicTooltip: "La storia può essere visualizzata da tutti gli utenti",
				loadingMessage: "Verifica della presenza di problemi nella storia",
				viewToggle1: "Mostra contenuto storia",
				viewToggle2: "Chiudi contenuto storia",
				socialize: "Socializza",
				statusPrivate: "La storia è privata è può essere vista solo dall\'utente corrente.",
				statusError: "Il contenuto della storia presenta dei problemi che saranno notati dai lettori. È possibile identificare e risolvere questi problemi di seguito.",
				statusNoErrPrivate: "Condividere la storia appena pronti",
				mystoriesinvite: "Gestisci tutte le storie",
				notavailable1: "Spiacenti, la condivisione della storia dal Generatore non è supportata poiché l\'applicazione non è ospitata in %PRODUCT%.",
				notavailable2: "Spiacenti, la condivisione della storia dal Generatore non è supportata in questa versione di Portal for ArcGIS (richiede 10.4 o versioni successive).",
				notavailable3: "È possibile condividere questa storia da %LINK%.",
				notavailable4: "My Stories",
				notavailable5: "la sua pagina degli elementi",
				notavailable6: "Spiacenti, questa feature non è completamente supportata in modalità di sviluppo. In base allo scenario di sviluppo, essa potrebbe essere sviluppata quando viene distribuita.",
				notavailable7: "Accertarsi di visitare %MYCONTENT% per confermare che anche le mappe e i layer utilizzati nella storia siano condivisi.",
				notavailable8: "Contenuto personale",
				mystoriesinvite2: "Per migliorare ulteriormente l\'aspetto della storia sulle reti social utilizzare ${MYSTORIES} per aggiungere un riepilogo e un\'immagine di anteprima."
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
