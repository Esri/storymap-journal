define(
	 ({
		builder: {
			layouts: {
				mainStage: "Visualizzazione principale",
				sideTitle: "Pannello laterale",
				sideDescr: "Layout per storie ricche di testo che combina in modo ottimale foto, video e mappe in un messaggio perfettamente mirato.",
				floatTitle: "Pannello mobile",
				floatDescr: "Layout per dare maggiore risalto alla cartografia includendo un pannello trasparente per testo breve in cui inserire indicazioni utili per la storia."
			},
			common: {
				lblStatus1: "Pubblicato",
				lblStatus2: "Bozza",
				lblStatus3: "Nascosto"
			},
			settingsLayoutOptions: {
				title: "Opzioni di layout",
				cfgLeft: "Sinistra",
				cfgRight: "Destra",
				cfgSmall: "Piccolo",
				cfgMedium: "Medio",
				cfgLarge: "Grande",
				socialLinksLabel: "Visualizza i collegamenti per la condivisione nella parte inferiore di ogni sezione",
				socialLinksDescr: "In questo modo i lettori possono fare riferimento e dare maggiore risalto a sezioni specifiche di %TPL_NAME%. Se ad esempio si utilizza un\'icona per condividere le sezioni, i lettori potranno passare direttamente a tale sezione specifica di %TPL_NAME% anziché partire dall\'inizio della storia. I lettori possono utilizzare il collegamento ai social media nella sezione del titolo per promuovere la scheda di intestazione di %TPL_NAME% e posizionarsi all\'inizio di %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Caratteri",
				defaultLbl: "Predefinito",
				sectionTitleLbl: "Titolo sezione",
				sectionContentLbl: "Contenuto sezione"
			},
			initPopup: {
				title: "Benvenuti a"
			},
			addEditPopup: {
				disabled: "Aggiungi sezione è disabilitato perché è stato raggiunto il numero massimo di sezioni consentite.",
				titleAdd: "Aggiungi sezione",
				titleAddHome: "Aggiungi prima sezione",
				titleEdit: "Modifica sezione",
				step: "Procedura",
				stepMainStageExplain: "Contenuti visualizzazione principale",
				stepPanelExplain: "Contenuti",
				stepMainStageNextTooltip: "Immettere il titolo della sezione e selezionare i contenuti della visualizzazione principale",
				stepMainStageNextTooltip2: "Cambiare i contenuti per Visualizzazione principale",
				step2NextTooltip: "Immettere il titolo della sezione e i contenuti di tipo %LAYOUT-TYPE%",
				stepNextTooltipNext: "per continuare con il passo successivo",
				stepNextTooltipAdd: "per aggiungere la sezione",
				firstAddExplain: "Questa prima sezione è paragonabile alla \"copertina\" della storia. Il titolo definito verrà visualizzato con caratteri di grandi dimensioni.",
				firstAddLeanMore: "Ulteriori informazioni",
				titlePlaceholder: "Titolo sezione..."
			},
			addEditViewText: {
				editorPlaceholder: "Aggiungere qui testo, collegamenti ed elementi grafici di piccole dimensioni.",
				editorActionsTitle: "Azioni visualizzazione principale",
				editorActionsHelpDescr: "Utilizzare questi controlli per creare collegamenti che consentono di cambiare la visualizzazione principale. Ad esempio, quando il lettore fa clic su un collegamento, è possibile fare in modo che venga applicato lo zoom a una posizione specifica della mappa oppure che venga visualizzata un\'altra mappa Web o un\'immagine.",
				mainStageDisabled: "Le azioni della Visualizzazione principale sono disabilitate quando l\'editor è visualizzato a schermo intero"
			},
			organizePopup: {
				title: "Organizza",
				lblHeader: "Trascinare e rilasciare le sezioni per organizzare i contenuti.",
				lblColTitle: "Titolo",
				lblColPubDate: "Data di pubblicazione",
				lblColStatus: "Stato",
				checkDisplayReverse: "Visualizza le sezioni in ordine inverso",
				btnApplyWarning: "Conferma eliminazione di %NB% sezioni",
				deleteTooltip: "Elimina",
				firstSectionExplain: "(La prima sezione non può essere spostata)",
				exportMainStage: "Contenuti visualizzazione principale",
				exportPanel: "Contenuti pannello",
				exportActions: "Azioni visualizzazione principale"
			},
			exportData: {
				btn: "Esporta contenuti",
				tooltip: "L\'esportazione dei contenuti consente di visualizzare e creare un backup dei contenuti in caso di eliminazione accidentale. È sufficiente copiare e incollare i contenuti della pagina in qualsiasi elaboratore di testi."
			},
			help: {
				lblHelp: "Guida",
				lblAdd: "Aggiungi sezione",
				lblSettings: "Impostazioni",
				lblOrga: "Organizza contenuti",
				lblEdit: "Modifiche",
				lblPublish: "Condividi",
				lblTips: "Suggerimenti",
				lblMore: "Ulteriori informazioni?",
				lblLink: "Visitare il sito Web delle story map Esri.",
				content1Div1: "Quando si crea la storia, è possibile integrare diversi stili. Lo stile di <strong>%LAYOUT_TITLE%</strong> è quello utilizzato in genere per testo, immagini e video per le mappe nella <strong>visualizzazione principale</strong>. %TPL_NAME% consente inoltre di inserire nella visualizzazione principale anche immagini, grafici e video.",
				content1Div2: "Per personalizzare l\'esperienza di storytelling, è possibile aggiungere sezioni. In tal modo quando i lettori scorrono il testo di %LAYOUT_TITLE%, una mappa nella visualizzazione principale viene ridotta/ingrandita per indicare i punti chiave oppure vengono attivate/disattivate automaticamente nuove mappe e immagini a supporto del messaggio.",
				content2Div1: "In questa finestra è possibile modificare l\'aspetto di %TPL_NAME% ridefinendo combinazioni colori, layout, larghezze e caratteri.",
				content2Div2: "È anche possibile condividere collegamenti in Facebook, Twitter e Bitly per consentire ai lettori di contribuire alla diffusione di %TPL_NAME%.",
				content3Div1: "I contenuti sono organizzati in sezioni, paragonabili a minicapitoli. È possibile disporre del numero di sezioni desiderato. Il flusso delle sezioni è importante. In Organizza è possibile riordinarle o eliminarle secondo necessità.",
				content4Div1: "È stato individuato un errore o si desidera modificare il materiale? Nessun problema. Grazie all\'icona di modifica presente nell\'applicazione, è possibile apportare modifiche ai contenuti. Durante lo sviluppo di %TPL_NAME% le funzioni di modifica verranno utilizzate spessissimo.",
				content5Div1: "%TPL_NAME% viene salvato nell\'account %PORTAL% ed è privato per impostazione predefinita. È possibile decidere di condividerlo con l\'organizzazione o con tutti. Viene inoltre fornito un URL breve per facilitarne la condivisione.",
				content6Div1: "Il titolo della prima sezione è anche il titolo del diario. La prima sezione è paragonabile alla \"copertina\" della propria storia. Il titolo della prima sezione resta visibile quando i lettori si spostano nel diario.",
				content6Div2: "%LAYOUT_TITLE% non deve comprendere solo testo. Valutare l\'inserimento di foto e video per rendere più interessante la storia e suddividere le sezioni di testo particolarmente lunghe."
			},
			landing: {
				lblAdd: "Come si desidera chiamare il Diario mappa?",
				phAdd: "Immettere il titolo...",
				lblOR: "Oppure",
				lblHelp: "Tour"
			},
			firstAddSplash: {
				thisis: "Questo è",
				lblMain: "Questa è la Visualizzazione principale di %BR%"
			}
        }
    })

);
