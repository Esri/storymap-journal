define({
  "builder": {
    "layouts": {
      "mainStage": "Visualizzazione principale",
      "sideTitle": "Pannello laterale",
      "sideDescr": "Layout per storie ricche di testo che combina in modo ottimale foto, video e mappe in un messaggio perfettamente mirato.",
      "floatTitle": "Pannello mobile",
      "floatDescr": "Layout per dare maggiore risalto alla cartografia includendo un pannello trasparente per testo breve in cui inserire indicazioni utili per la storia."
    },
    "common": {
      "lblStatus1": "Pubblicato",
      "lblStatus2": "Bozza",
      "lblStatus3": "Nascosto"
    },
    "settingsLayoutOptions": {
      "title": "Opzioni di layout",
      "cfgLeft": "Sinistra",
      "cfgRight": "Destra",
      "cfgSmall": "Piccolo",
      "cfgMedium": "Medio",
      "cfgLarge": "Grande",
      "socialLinksLabel": "Visualizza i collegamenti per la condivisione nella parte inferiore di ogni sezione",
      "socialLinksDescr": "In questo modo i lettori possono fare riferimento e dare maggiore risalto a sezioni specifiche di %TPL_NAME%. Se ad esempio si utilizza un'icona per condividere le sezioni, i lettori potranno passare direttamente a tale sezione specifica di %TPL_NAME% anziché partire dall'inizio della storia. I lettori possono utilizzare il collegamento ai social media nella sezione del titolo per promuovere la scheda di intestazione di %TPL_NAME% e posizionarsi all'inizio di %TPL_NAME%.",
      "socialDisabled": "Questa feature è disponibile solo con layout Pannello mobile",
      "socialWarning": "La storia utilizza il layout Pannello laterale, ma si consiglia attualmente di utilizzare questa opzione solo con layout Pannello mobile per evitare un problema quando il pannello potrebbe non posizionarsi automaticamente nella sezione desiderata per racconti con immagini. È possibile continuare a utilizzare questa opzione, ma se viene disabilitata, sarà solo disponibile quando si utilizza il layout Pannello mobile."
    },
    "settingsLayoutFonts": {
      "title": "Caratteri",
      "defaultLbl": "Predefinito",
      "sectionTitleLbl": "Titolo sezione",
      "sectionContentLbl": "Contenuto sezione"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Tema organizzazione",
      "lblModTheme": "Tema corrente"
    },
    "initPopup": {
      "title": "Benvenuti a"
    },
    "addEditPopup": {
      "disabled": "Aggiungi sezione è disabilitato perché è stato raggiunto il numero massimo di sezioni consentite.",
      "titleAdd": "Aggiungi sezione",
      "titleAddHome": "Aggiungi prima sezione",
      "titleEdit": "Modifica sezione",
      "step": "Procedura",
      "stepMainStageExplain": "Contenuti visualizzazione principale",
      "stepPanelExplain": "Contenuti",
      "stepMainStageNextTooltip": "Immettere il titolo della sezione e selezionare i contenuti della visualizzazione principale",
      "stepMainStageNextTooltip2": "Cambiare i contenuti per Visualizzazione principale",
      "step2NextTooltip": "Immettere il titolo della sezione e i contenuti di tipo %LAYOUT-TYPE%",
      "stepNextTooltipNext": "per continuare con il passo successivo",
      "stepNextTooltipAdd": "per aggiungere la sezione",
      "firstAddExplain": "Questa prima sezione è paragonabile alla \"copertina\" della storia. Il titolo definito verrà visualizzato con caratteri di grandi dimensioni.",
      "firstAddLeanMore": "Ulteriori informazioni",
      "titlePlaceholder": "Titolo sezione..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Aggiungere qui testo, collegamenti ed elementi grafici di piccole dimensioni.",
      "editorActionsTitle": "Azioni storia",
      "editorActionsHelpDescr": "Creare collegamenti all'interno della narrazione per facilitare la descrizione della storia. L'azione storia può essere collegata a un'altra sezione oppure modificare la visualizzazione principale. Ad esempio, è possibile configurare un'azione in modo da spostare la mappa in una posizione diversa, attivare/disattivare i layer mappa oppure modificare il supporto della visualizzazione principale su un'immagine, un video, una mappa o una pagina Web diversi.",
      "mainStageDisabled": "Le azioni storia sono disabilitate quando l'editor è visualizzato a schermo intero"
    },
    "organizePopup": {
      "title": "Organizza",
      "lblHeader": "Trascinare e rilasciare le sezioni per organizzare la storia.",
      "lblColTitle": "Titolo",
      "lblColPubDate": "Data di pubblicazione",
      "lblColStatus": "Stato",
      "checkDisplayReverse": "Visualizza le sezioni in ordine inverso",
      "btnApplyWarning": "Conferma eliminazione di %NB% sezioni",
      "deleteTooltip": "Elimina",
      "firstSectionExplain": "(La prima sezione non può essere spostata)",
      "exportMainStage": "Contenuti visualizzazione principale",
      "exportPanel": "Contenuti pannello",
      "exportActions": "Azioni storia"
    },
    "exportData": {
      "btn": "Esporta contenuti",
      "tooltip": "L'esportazione dei contenuti consente di visualizzare e creare un backup dei contenuti in caso di eliminazione accidentale. È sufficiente copiare e incollare i contenuti della pagina in qualsiasi elaboratore di testi."
    },
    "help": {
      "lblHelp": "Guida",
      "lblAdd": "Aggiungi sezione",
      "lblSettings": "Impostazioni",
      "lblOrga": "Organizza contenuti",
      "lblEdit": "Modifiche",
      "lblPublish": "Condividi",
      "lblTips": "Suggerimenti",
      "lblMore": "Ulteriori informazioni?",
      "lblLink": "Visitare il sito Web delle story map Esri.",
      "content1Div1": "Quando si crea la storia, è possibile integrare diversi stili. Lo stile di <strong>%LAYOUT_TITLE%</strong> è quello utilizzato in genere per testo, immagini e video per le mappe nella <strong>visualizzazione principale</strong>. %TPL_NAME% consente inoltre di inserire nella visualizzazione principale anche immagini, grafici e video.",
      "content1Div2": "Per personalizzare l'esperienza di storytelling, è possibile aggiungere sezioni. In tal modo quando i lettori scorrono il testo di %LAYOUT_TITLE%, una mappa nella visualizzazione principale viene ridotta/ingrandita per indicare i punti chiave oppure vengono attivate/disattivate automaticamente nuove mappe e immagini a supporto del messaggio.",
      "content2Div1": "Nella finestra di dialogo Impostazioni è possibile modificare l'aspetto di %TPL_NAME%. È possibile modificare il layout, scegliere una combinazione di colori diversa, modificare i caratteri del testo e così via.",
      "content2Div2": "È anche possibile sostituire il logo Esri con un logo personalizzato in base al marchio, nonché specificare il sito Web che verrà aperto quando i lettori fanno clic su tale logo per visualizzare ulteriori informazioni.",
      "content3Div1": "I contenuti sono organizzati in sezioni, paragonabili a minicapitoli. È possibile disporre del numero di sezioni desiderato. Il flusso delle sezioni è importante. In Organizza è possibile riordinarle o eliminarle secondo necessità.",
      "content4Div1": "Se è stato rilevato un errore o si desidera modificare il materiale, è sufficiente individuare l'icona di modifica nell'applicazione per apportare modifiche al contenuto. Durante la fase di sviluppo di %TPL_NAME%, è possibile utilizzare le funzioni di modifica ogni volta che è necessario.",
      "content5Div1": "Quando viene salvato, %TPL_NAME% inizialmente è privato. Utilizzare il pulsante Condividi per condividerlo con altri utenti. È possibile condividere %TPL_NAME% pubblicamente in modo che tutti gli utenti possano accedervi.",
      "content5Div2": "A seconda dell'account, è anche possibile condividere %TPL_NAME% con gli utenti all'interno della propria organizzazione in modo che gli altri utenti non possano accedervi.",
      "content6Div1": "Il titolo della prima sezione è anche il titolo del diario. La prima sezione è paragonabile alla \"copertina\" della propria storia. Il titolo della prima sezione resta visibile quando i lettori si spostano nel diario.",
      "content6Div2": "%LAYOUT_TITLE% non deve comprendere solo testo. Valutare l'inserimento di foto e video per rendere più interessante la storia e suddividere le sezioni di testo particolarmente lunghe."
    },
    "landing": {
      "lblAdd": "Come si desidera chiamare il Diario mappa?",
      "phAdd": "Immettere il titolo...",
      "lblOR": "Oppure",
      "lblHelp": "Tour",
      "quote0": "C'è sempre spazio per una storia in grado di trasportare le persone in luoghi diversi.",
      "quote1": "Storytelling è il modo attualmente più efficace per proporre idee al mondo intero.",
      "quote2": "Le storie che raccontiamo modellano letteralmente il mondo. Se si desidera cambiare il mondo, si deve cominciare cambiando le storie. Questa verità è valida per le istituzioni e per ciascun individuo.",
      "quote3": "La distanza più breve tra un essere umano e la verità è una storia.",
      "quote4": "Le persone non hanno bisogno di più informazioni, ne hanno fin sopra i capelli delle informazioni. Quello che vogliono è avere fede in qualcuno, nei suoi obiettivi, nei suoi successi e nella storia che racconta.",
      "quote5": "Sono alla ricerca di storie che abbiano un significato vero, che siano redentrici e servano d’ispirazione e che siano più grandi del singolo individuo.",
      "quote6": "Se si desidera influenzare un singolo individuo o un intero gruppo affinché abbracci un determinato valore nella vita di tutti i giorni, è necessario raccontare una storia avvincente.",
      "quote7": "Un saggio descrive un avvenimento. Una storia lo mostra.",
      "quote8": "Se non si conoscono gli alberi ci si può perdere nella foresta, ma se non si conoscono le storie ci si può perdere nella vita.",
      "quote9": "Le storie sono la trasformazione creativa della vita stessa in un’esperienza più potente, chiara e significativa. Sono la valuta del contatto umano.",
      "quote10": "Non esiste agonia più profonda di quella di chi ha dentro di sé una storia non raccontata.",
      "quote11": "Forse non sono altro che dati con un’anima.",
      "quote12": "Ma le storie sono l'arma più potente nell'arsenale di un leader.",
      "quote13": "Ed è nella loro natura lasciare all’esterno più di quanto ci sia al loro interno."
    },
    "firstAddSplash": {
      "thisis": "Questo è",
      "lblMain": "Questa è la Visualizzazione principale di %BR%"
    }
  }
});