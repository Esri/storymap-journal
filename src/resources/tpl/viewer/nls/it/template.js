define(
	 ({
		viewer: {
			common: {
				close: "Chiudi"
			},
			loading: {
				step1: "Caricamento storia",
				step2: "Caricamento dati",
				step3: "Inizializzazione in corso",
				loadBuilder: "Passaggio al generatore",
				long: "Inizializzazione del Diario mappa in corso...",
				long2: "Grazie per l\'attesa",
				failButton: "Ricarica la storia"
			},
			signin: {
				title: "Autenticazione obbligatoria",
				explainViewer: "Per accedere alla storia, accedere con un account disponibile in %PORTAL_LINK%.",
				explainBuilder: "Per configurare la storia, accedere con un account disponibile in %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				invalidConfig: "Configurazione non valida",
				invalidConfigNoApp: "Identificatore dell\'applicazione di mappatura Web non specificato in index.html.",
				invalidConfigNoAppDev: "Nessun identificatore applicazione mappatura Web specificato nei parametri URL (?appid=). Nella modalità di sviluppo, la configurazione dell\'ID dell\'app in index.html viene ignorata.",
				unspecifiedConfigOwner: "L\'utente autorizzato non è stato configurato.",
				invalidConfigOwner: "Il proprietario della storia non è autorizzato.",
				createMap: "Impossibile creare la mappa",
				invalidApp: "%TPL_NAME% non esiste o è inaccessibile.",
				appLoadingFail: "Si è verificato un errore. %TPL_NAME% non è stato caricato correttamente.",
				notConfiguredDesktop: "La storia non è ancora configurata.",
				notConfiguredMobile: "Il generatore %TPL_NAME% non è supportato per queste dimensioni schermo. Se possibile, ridimensionare il browser per accedere al generatore o creare la storia su un dispositivo con uno schermo più grande.",
				notConfiguredMobile2: "Ruotare il dispositivo nell\'orientamento orizzontale per utilizzare il generatore %TPL_NAME%.",
				notAuthorized: "Non si è autorizzati ad accedere alla storia.",
				notAuthorizedBuilder: "L\'utente non è autorizzato ad utilizzare il generatore %TPL_NAME%.",
				noBuilderIE: "Il generatore non è supportato nelle versioni di Internet Explorer precedenti alla versione %VERSION%. %UPGRADE%.",
				noViewerIE: "Questa storia non è supportata nelle versioni di Internet Explorer precedenti a %VERSION%. %UPGRADE%.",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aggiornare il browser</a>.",
				mapLoadingFail: "Si è verificato un errore. La mappa non è stata caricata correttamente.",
				signOut: "Disconnetti"
			},
			mobileView: {
				tapForDetails: "Toccare per i dettagli",
				clickForDetails: "Ulteriori informazioni",
				swipeToExplore: "Scorrere con un dito per esplorare",
				tapForMap: "Toccare per tornare alla mappa",
				clickForMap: "TORNA ALLA MAPPA"
			},
			floatLayout: {
				scroll: "Scorrimento"
			},
			sideLayout: {
				scroll: "Scorrere verso il basso per altre informazioni"
			},
			mainStage: {
				back: "Indietro"
			},
			headerFromCommon: {
				storymapsText: "Mappa collegata a una storia",
				builderButton: "Modifica",
				facebookTooltip: "Condividi su Facebook",
				twitterTooltip: "Condividi su Twitter",
				bitlyTooltip: "Crea un link breve",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello",
				share: "Condividi",
				checking: "Verifica del contenuto della storia",
				fix: "Risolvi problemi nella storia",
				noerrors: "Nessun problema rilevato",
				tooltipAutoplayDisabled: "Questo non è disponibile nella modalità di riproduzione automatica",
				notshared: "Storia non condivisa"
			},
			overviewFromCommon: {
				title: "Mappa d\'insieme"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copia",
				copied: "Copiato",
				open: "Apri",
				embed: "Incorpora nella pagina Web",
				embedExplain: "Utilizzare il codice HTML seguente per incorporare il diario in una pagina Web.",
				size: "Dimensioni (larghezza/altezza):",
				autoplayLabel: "Modalità di riproduzione automatica",
				autoplayExplain1: "La modalità di riproduzione automatica consente di avanzare nella storia a intervalli regolari. Questa soluzione è ideale in un chiosco o monitor pubblico, ma occorre tenere presente che in altre situazioni potrebbe creare problemi di lettura della storia. Questa funzione non è supportata su display di piccole dimensioni.",
				autoplayExplain2: "Quando questa modalità è attiva, sono disponibili controlli per riprodurre/sospendere la storia e regolare la velocità di navigazione.",
				linksupdated: "Collegamenti aggiornati"
			}
        }
    })
);