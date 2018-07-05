define({
  "viewer": {
    "common": {
      "close": "Chiudi",
      "focusMainstage": "Invia focus tastiera al file multimediale",
      "expandImage": "Espandere immagine"
    },
    "a11y": {
      "skipToContent": "Saltare fino ala parte narrativa",
      "headerAria": "Intestazione della storia",
      "panelAria": "Racconto della storia",
      "mainStageAria": "Sezione media della storia corrente",
      "logoLinkAria": "Collegamento al logo",
      "toTop": "Accedere all’inizio del racconto",
      "focusContent": "Tornare al racconto",
      "navAria": "Sezioni della storia",
      "navPreviousAria": "Sezione precedente",
      "navNextAria": "Sezione successiva",
      "toSectionAria": "Accedere alla sezione %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Prossimo gruppo di sezioni (% SECTION_RANGE%)",
      "toPrevGroupAria": "Gruppo di sezioni precedente (%SECTION_RANGE%)",
      "loadingAria": "Il contenuto della storia si sta caricando"
    },
    "loading": {
      "step1": "Caricamento storia",
      "step2": "Caricamento dati",
      "step3": "Inizializzazione in corso",
      "loadBuilder": "Passaggio al generatore",
      "long": "Inizializzazione del Diario mappa in corso...",
      "long2": "Grazie per l'attesa",
      "failButton": "Ricarica la storia"
    },
    "signin": {
      "title": "Autenticazione obbligatoria",
      "explainViewer": "Per accedere alla storia, accedere con un account disponibile in %PORTAL_LINK%.",
      "explainBuilder": "Per configurare la storia, accedere con un account disponibile in %PORTAL_LINK%."
    },
    "errors": {
      "boxTitle": "Si è verificato un errore",
      "invalidConfig": "Configurazione non valida",
      "invalidConfigNoApp": "Identificatore dell'applicazione di mappatura Web non specificato in index.html.",
      "invalidConfigNoAppDev": "Nessun identificatore applicazione mappatura Web specificato nei parametri URL (?appid=). Nella modalità di sviluppo, la configurazione dell'ID dell'app in index.html viene ignorata.",
      "unspecifiedConfigOwner": "L'utente autorizzato non è stato configurato.",
      "invalidConfigOwner": "Il proprietario della storia non è autorizzato.",
      "createMap": "Impossibile creare la mappa",
      "invalidApp": "%TPL_NAME% non esiste o è inaccessibile.",
      "appLoadingFail": "Si è verificato un errore. %TPL_NAME% non è stato caricato correttamente.",
      "notConfiguredDesktop": "La storia non è ancora configurata.",
      "notConfiguredMobile": "Il generatore %TPL_NAME% non è supportato per queste dimensioni schermo. Se possibile, ridimensionare il browser per accedere al generatore o creare la storia su un dispositivo con uno schermo più grande.",
      "notConfiguredMobile2": "Ruotare il dispositivo nell'orientamento orizzontale per utilizzare il generatore %TPL_NAME%.",
      "notAuthorized": "Non si è autorizzati ad accedere alla storia.",
      "notAuthorizedBuilder": "L'utente non è autorizzato ad utilizzare il generatore %TPL_NAME%.",
      "noBuilderIE": "Il generatore non è supportato nelle versioni di Internet Explorer precedenti alla versione %VERSION%. %UPGRADE%.",
      "noViewerIE": "Questa storia non è supportata nelle versioni di Internet Explorer precedenti a %VERSION%. %UPGRADE%.",
      "noViewerIE2": "Si sta tentando di visualizzare la storia utilizzando un browser meno recente e non più supportato. Alcune funzioni potrebbero non funzionare o potrebbero verificarsi errori inattesi. Si consiglia di effettuare l'aggiornamento a Internet Explorer 11 o di utilizzare un altro browser, come Chrome.",
      "noViewerIE3": "Verso la fine del 2017, questa storia non sarà più caricata su questo browser e sarà quindi necessario utilizzare un browser supportato per visualizzarla.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Aggiornare il browser</a>.",
      "mapLoadingFail": "Si è verificato un errore. La mappa non è stata caricata correttamente.",
      "signOut": "Disconnetti",
      "print0": "Spiacenti, impossibile stampare questa storia.",
      "print1": "Per stampare questa storia, utilizzare il pulsante di stampa che si trova nella finestra di dialogo di condivisione.",
      "print2": "Spiacenti, una versione stampabile della storia è tipicamente accessibile tramite la finestra di dialogo di condivisione, questa finestra di dialogo è stata disabilita dall'autore.",
      "attention": "Attenzione."
    },
    "mobileView": {
      "tapForDetails": "Toccare per i dettagli",
      "clickForDetails": "Ulteriori informazioni",
      "swipeToExplore": "Scorrere con un dito per esplorare",
      "tapForMap": "Tocca per tornare indietro",
      "clickForMap": "INDIETRO"
    },
    "floatLayout": {
      "scroll": "Scorrimento"
    },
    "sideLayout": {
      "scroll": "Scorrere verso il basso per altre informazioni"
    },
    "mainStage": {
      "back": "Indietro",
      "errorDeleted": "Questo collegamento non è attivo (sezione eliminata)",
      "errorNotPublished": "Questo collegamento non è attivo (sezione non pubblicata)"
    },
    "headerFromCommon": {
      "storymapsText": "Story Map",
      "builderButton": "Modifica",
      "facebookTooltip": "Condividi su Facebook",
      "twitterTooltip": "Condividi su Twitter",
      "bitlyTooltip": "Condividi o stampa",
      "templateTitle": "Imposta titolo modello",
      "templateSubtitle": "Imposta sottotitolo modello",
      "share": "Condividi",
      "checking": "Verifica del contenuto della storia",
      "fix": "Risolvi problemi nella storia",
      "noerrors": "Nessun problema rilevato",
      "tooltipAutoplayDisabled": "Questo non è disponibile nella modalità di riproduzione automatica",
      "notshared": "Storia non condivisa"
    },
    "mapFromCommon": {
      "overview": "Mappa d'insieme",
      "legend": "Legenda",
      "home": "Zoom Home"
    },
    "shareFromCommon": {
      "copy": "Copia",
      "copied": "Copiato",
      "open": "Apri",
      "embed": "Incorpora nella pagina Web",
      "embedExplain": "Utilizzare il codice HTML seguente per incorporare il diario in una pagina Web.",
      "size": "Dimensioni (larghezza/altezza):",
      "autoplayLabel": "Modalità di riproduzione automatica",
      "autoplayExplain1": "La modalità di riproduzione automatica consente di avanzare nella storia a intervalli regolari. Questa soluzione è ideale in un chiosco o monitor pubblico, ma occorre tenere presente che in altre situazioni potrebbe creare problemi di lettura della storia. Questa funzione non è supportata su display di piccole dimensioni.",
      "autoplayExplain2": "Quando questa modalità è attiva, sono disponibili controlli per riprodurre/sospendere la storia e regolare la velocità di navigazione.",
      "linksupdated": "Collegamenti aggiornati",
      "print": "Stampa",
      "printInstruction1": "Attendere che il caricamento della storia sia completato prima di stampare",
      "printInstruction1a": "Se la pagina si carica lentamente o se alcuni file multimediali non vengono visualizzati, provare a stampare una selezione minore di sezioni.",
      "printInstruction1b": "Per risultati ottimali, potrebbe essere necessario abilitare la stampa degli elementi di sfondo nelle impostazioni di stampa del browser.",
      "printInstruction2": "Questa pagina non può essere condivisa con altri, condividere invece il collegamento ${link}",
      "link": "alla storia",
      "optionsHeader": "Opzioni",
      "printOptPageBreak": "Iniziare ogni sezione su una nuova pagina",
      "makeTextBlack": "Tutto il testo in nero",
      "showLinks": "Mostra URL dei link",
      "madeWith": "Questa storia è stata creata con ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Story Map Journal di Esri",
      "readItOnline": "Leggi la versione interattiva sul Web su ${link}.",
      "printMSWarning": "disponibile solo nella storia online",
      "printVideoWarning": "Questo video può essere visualizzato nella versione online di questa Story Map",
      "printRangeHeader": "Stampa una parte della storia",
      "sectionLabel": "Sezioni:",
      "apply": "Applica",
      "resetRange": "Ripristina tutta la storia"
    }
  }
});