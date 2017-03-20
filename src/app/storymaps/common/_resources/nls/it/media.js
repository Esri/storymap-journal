define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Supporto",
      "lblSelect2": "Contenuti",
      "lblMap": "Mappa",
      "lblImage": "Immagine",
      "lblVideo": "Video",
      "lblExternal": "Pagina Web",
      "lblUpload": "Carica",
      "lblLink": "Collega",
      "disabled": "Questa feature è stata disabilitata dall'amministratore",
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
    "imageSelectorUpload": {
      "lblUploadButton": "Cerca immagine",
      "lblDrop": "Rilasciare un'immagine qui o",
      "infoUpload": "Le immagini verranno memorizzate nell'account ArcGIS e saranno accessibili solo all'interno della storia.",
      "warningFileTypes": "L'immagine può essere un file con estensione .jpg, .png, .gif o .bmp.",
      "warningOneFile": "È accettato un file alla volta.",
      "warningFileSize": "Il file supera le dimensioni massime consentite per il caricamento. Scegliere un altro file.",
      "tooltipRemove": "Eliminare questa immagine non utilizzata dall'account ArcGIS. <br> Se si decide di utilizzarla in un secondo momento, sarà necessario caricarla di nuovo."
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
      "userInputLbl": "E-mail o ID Google",
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
      "url": "Collegamento a video YouTube",
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
      "url": "Collegamento a video Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Questa Story Map non è in grado di riprodurre file video non elaborati (ad esempio, file con estensione .avi o .mpeg), ma può riprodurre video ospitati con lettori incorporati (ad esempio, YouTube o Vimeo).",
      "explain2": "La maggior parte dei servizi di hosting di video offre questa funzionalità Individuare l'opzione per incorporare il video, copiare il codice specificato e aggiungerlo alla storia utilizzando l'opzione contenuto %WEBPAGE%.",
      "explain3": "In alternativa, è possibile eseguire autonomamente l'hosting del video assieme a una pagina HTML che utilizza un lettore video come %EXAMPLE%. Eseguire quindi l'hosting dell'URL di tale pagina nella storia sotto forma di %WEBPAGE%.",
      "webpage": "Pagina Web"
    },
    "webpageSelectorHome": {
      "lblUrl": "Collegamento a pagina Web",
      "lblEmbed": "Incorpora codice",
      "lblOR": "OPPURE",
      "lblError1": "Errore, cancellare uno dei due campi di input.",
      "lblError2": "Il codice incorporato può contenere un solo %IFRAMETAG%",
      "configure": "Configura"
    },
    "mediaConfigure": {
      "lblURL": "Collegamento a immagine",
      "lblURLPH": "Il collegamento deve terminare con .jpg, .png, .gif o .bmp.",
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
      "lblURLHelp": "Per ottimizzare i risultati, le immagini devono avere dimensioni minori di 400 KB. Utilizzare immagini JPG compresse con una qualità all'80%, nonché le seguenti larghezze consigliate: 2000 pixel per i pannelli di visualizzazione principale o narrazione, 1000 pixel per i pannelli di narrazione senza il pulsante di ingrandimento.<br><br>Se la visualizzazione di un'immagine collegata risulta rallentata, caricare l'immagine nella storia per ottimizzare il risultato.",
      "tooltipDimension": "Il valore può essere specificato come 'px' o '%'",
      "tooltipDimension2": "Il valore deve essere specificato in 'px'",
      "lblPosition2Explain": "(possibile ritaglio)",
      "lblPosition3Explain": "(nessun ritaglio)",
      "lblPosition3Explain2": "(la larghezza viene sempre adattata al pannello)",
      "lblPosition4Explain": "(possibile distorsione)",
      "unloadLbl": "Scarica quando il lettore passa a un altro elemento",
      "unloadHelp": "Se la pagina Web dispone di supporti audio o video, mantenere l'opzione selezionata per arrestare la riproduzione del contenuto quando il lettore passa a un elemento diverso. Deselezionarla, per esempio, per mantenere la riproduzione di una colonna sonora mentre il lettore continua a leggere la storia.<br />Se la pagina Web è un'applicazione, deselezionare l'opzione in modo che la storia non venga ricaricata se il lettore torna alla pagina.",
      "embedProtocolLabel": "Caricare una pagina su una connessione protetta (HTTPS)",
      "embedProtocolWarning1": "Se questa pagina non viene caricata nella storia, significa che non può essere incorporata per motivi di sicurezza Web. In alternativa, aggiungere un collegamento al racconto per aprire la pagina in una nuova scheda del browser. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Ulteriori informazioni</a>",
      "embedProtocolWarning2": "Se questa pagina non viene caricata nella storia, deselezionare questa opzione e riprovare. Se il problema persiste, significa che non può essere incorporata per motivi di sicurezza Web. In alternativa, aggiungere un collegamento al racconto per aprire la pagina in una nuova scheda del browser. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Ulteriori informazioni</a>"
    },
    "editorActionGeocode": {
      "lblTitle": "Trova un indirizzo o un luogo",
      "mapMarkerExplain": "Quando l'utente fa clic sul collegamento, verrà visualizzato un marcatore di mappa"
    },
    "editorActions": {
      "navigate": "Passa a una sezione",
      "remove": "Rimuovi azione",
      "preview": "Anteprima azione"
    },
    "editorActionMedia": {
      "lblTitle": "Cambia contenuti per Visualizzazione principale"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserisci immagine, video o pagina Web"
    }
  }
});