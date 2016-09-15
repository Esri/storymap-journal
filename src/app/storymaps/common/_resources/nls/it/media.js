define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Supporto",
      "lblSelect2": "Contenuti",
      "lblMap": "Mappa",
      "lblImage": "Immagine",
      "lblVideo": "Video",
      "lblExternal": "Pagina Web",
      "disabled": "Questa feature è stata disabilitata dall'amministratore",
      "url": "Per immettere manualmente l'indirizzo Web di un'immagine",
      "userLookup": "Carica album",
      "notImplemented": "Non ancora implementato.",
      "noData": "Nessun album pubblico trovato"
    },
    "imageSelector": {
      "lblStep1": "Scegli il servizio",
      "lblStep2": "Seleziona il file multimediale",
      "lblStep3": "Configura"
    },
    "imageSelectorHome": {
      "explain": "Caricare le immagini da social media, <br /> o direttamente da un URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nome utente",
      "signInMsg2": "Utente non trovato",
      "loadingFailed": "Caricamento non riuscito"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Utente Facebook",
      "rightHeader": "Pagina Facebook",
      "pageExplain": "Una pagina Facebook è un marchio/prodotto pubblico o un personaggio pubblico come <b>esrigis</b>. È possibile ottenere il nome della pagina dopo il primo '/' nell'URL della pagina.",
      "pageInputLbl": "Nome pagina",
      "lookupMsgError": "Pagina non trovata",
      "warning": "Il supporto Facebook è stato interrotto, ${learn}.",
      "learn": "ulteriori informazioni"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-mail o ID Picasa",
      "signInMsg2": "Account non trovato",
      "howToFind": "Come trovare un ID Picasa",
      "howToFind2": "Copiare le cifre tra il primo e il secondo \"/\" di qualsiasi pagina Picasa"
    },
    "videoSelectorCommon": {
      "check": "Seleziona",
      "notFound": "Video non trovato",
      "found": "Video trovato",
      "select": "Seleziona questo video"
    },
    "videoSelectorHome": {
      "other": "Altro"
    },
    "videoSelectorYoutube": {
      "url": "URL di un video Youtube",
      "pageInputLbl": "Nome utente",
      "lookupMsgError": "Utente non trovato",
      "howToFind": "Come trovare un nome utente di YouTube",
      "howToFind2": "Il nome utente è visualizzato sotto i video",
      "found": "Trovato",
      "noData": "Nessun video pubblico trovato.",
      "videoNotChecked": "Il video non è stato verificato su YouTube, ma l'indirizzo sembra corretto.",
      "checkFailedAPI": "Verifica YouTube non superata. Controllare il codice API di YouTube."
    },
    "videoSelectorVimeo": {
      "url": "URL di un video Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "La storia non è in grado di riprodurre video non elaborati (ad esempio, avi o mpeg), ma può riprodurre video in hosting con lettori incorporati (ad esempio, YouTube o Vimeo).",
      "explain2": "La maggior parte dei servizi di hosting di video online offre tale feature. È necessario individuare l'opzione per incorporare il video, copiare il codice specificato e utilizzare %WEBPAGE%.",
      "explain3": "In alternativa, se si desidera eseguire autonomamente l'hosting del video, è possibile creare una pagina HTML che utilizza un lettore video come %EXAMPLE%, eseguire l'hosting di tale pagina e utilizzare %WEBPAGE%.",
      "webpage": "Feature pagina Web"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL pagina Web",
      "lblEmbed": "Incorpora codice",
      "lblOR": "OPPURE",
      "lblError1": "Errore, cancellare uno dei due campi di input.",
      "lblError2": "Il codice incorporato può contenere un solo %IFRAMETAG%",
      "configure": "Configura"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Un URL di immagine deve iniziare con http:// e terminare con .jpg o .png",
      "lblURLError": "Questa immagine non sembra valida. Specificare un collegamento diretto a un file immagine (l'URL in genere termina con .jpg o .png). I collegamenti a una pagina Web che contiene un'immagine non funzioneranno.",
      "lblURLCheck": "Verifica immagine in corso...",
      "lblLabel": "Didascalia immagine",
      "lblLabel1": "Didascalia",
      "lblLabel2": "Testo al passaggio del mouse",
      "lblLabel3": "Nessuno",
      "lblLabelPH": "Immettere un testo...",
      "lblMaximize": "Includere un pulsante Ingrandisci nell'angolo dell'immagine",
      "lblMaximizeHelp": "Consigliato solo per le foto di alta qualità",
      "lblPosition": "Posizione",
      "lblPosition1": "Al centro",
      "lblPosition2": "Riempimento",
      "lblPosition3": "Adatta",
      "lblPosition4": "Estendi",
      "lblPosition5": "Personalizza",
      "tooltipDimension": "Il valore può essere specificato come 'px' o '%'",
      "tooltipDimension2": "Il valore deve essere specificato in 'px'",
      "lblPosition2Explain": "(possibile ritaglio)",
      "lblPosition3Explain": "(nessun ritaglio)",
      "lblPosition3Explain2": "(la larghezza viene sempre adattata al pannello)",
      "lblPosition4Explain": "(possibile distorsione)",
      "unloadLbl": "Scarica quando il lettore passa a un altro elemento",
      "unloadHelp": "Se la pagina Web dispone di supporti audio o video, mantenere l'opzione selezionata per arrestare la riproduzione del contenuto quando il lettore passa a un elemento diverso. Deselezionarla, per esempio, per mantenere la riproduzione di una colonna sonora mentre il lettore continua a leggere la storia.<br />Se la pagina Web è un'applicazione, deselezionare l'opzione in modo che la storia non venga ricaricata se il lettore torna alla pagina.",
      "embedProtocolLabel": "Caricare una pagina su una connessione protetta (HTTPS)",
      "embedProtocolWarning1": "La storia è configurata per il caricamento su una connessione protetta (https), pertanto anche la pagina Web mostrata nella storia deve utilizzare una connessione protetta. Se la pagina non si carica, è possibile che non sia disponibile su una connessione protetta o che non possa essere inclusa nella storia (alcuni siti Web pongono delle limitazioni). Potrebbe essere necessario creare una collegamento ipertestuale per aprire la pagina in una nuova scheda del browser.",
      "embedProtocolWarning2": "La storia è configurata per il caricamento su una connessione non protetta (http), pertanto è possibile scegliere di caricare questa pagina su una connessione protetta (scelta consigliata) o non protetta. Se la pagina non si carica, è possibile che non supporti il tipo di connessione selezionato o che non possa essere inclusa nella storia (alcuni siti Web pongono delle limitazioni). Potrebbe essere necessario creare una collegamento ipertestuale per aprire la pagina in una nuova scheda del browser."
    },
    "editorActionGeocode": {
      "lblTitle": "Trova un indirizzo o un luogo",
      "mapMarkerExplain": "Quando l'utente fa clic sul collegamento, verrà visualizzato un marcatore di mappa"
    },
    "editorActionMedia": {
      "lblTitle": "Cambia contenuti per Visualizzazione principale"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserisci immagine, video o pagina Web"
    }
  }
});