﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mappa",
				lblLocation: "Posizione",
				lblContent: "Contenuti",
				lblPopup: "Popup",
				lblControls: "Extra",
				lblOverview: "Mappa d\'insieme",
				lblLegend: "Legenda",
				loadingTitle: "Caricamento titolo in corso",
				entry: "Voce",
				entries: "Voci",
				section: "Sezione",
				sections: "Sezioni",
				and: "e",
				action: "Azione nella sezione",
				actions: "Azione nelle sezioni",
				originalWebmap: "Mappa utilizzata per pubblicare %TPL_NAME%",
				browseMaps: "Selezionare una mappa",
				createMap: "Creare una mappa",
				current: "Mappa corrente",
				select: "Seleziona o crea mappa",
				newMap: "Nuova mappa selezionata",
				newCreatedMap: "Mappa appena creata",
				webmapDefault: "Impostazioni predefinite mappa",
				customCfg: "Configurazione personalizzata",
				tooltipLocation: "Definisce la posizione visualizzata da questa mappa.",
				tooltipContent: "Definisce i layer visibili.",
				tooltipPopup: "Consente di scegliere un popup da aprire quando viene visualizzata questa mappa.",
				tooltipOverview: "Consente di visualizzare una piccola mappa d\'insieme assieme alla mappa principale.",
				tooltipLegend: "Consente di visualizzare la legenda della mappa, utile quando la mappa contiene numerosi layer e simboli.",
				mapCfgInvite: "Utilizzare questi controlli per configurare la mappa",
				lblLocationAlt: "Ereditata dalla prima mappa",
				tooltipLocationAlt: "La posizione di questa mappa viene sincronizzata in base alla prima mappa della serie. Per modificare questo funzionamento per la serie, scegliere Impostazioni > Opzioni mappa."
			},
			configure: {
				btnReset: "Reimposta",
				btnCancel: "Annulla",
				tocTitle: "Contenuti mappa",
				tocExplain: "Consente di selezionare i layer che verranno visualizzati.",
				tocNoData: "Non è possibile configurare nessun layer.",
				tocSave: "Salva contenuti mappa",
				extentTitle: "Posizione mappa",
				extentExplain: "Consente di applicare pan e zoom alla mappa per definirne l\'aspetto per i lettori.",
				extentSave: "Salva posizione mappa",
				popupTitle: "Popup mappa",
				popupExplain: "Fare clic su una feature per aprire il popup da visualizzare.",
				popupSave: "Salva la configurazione del popup",
				hintNavigation: "Navigazione mappa disabilitata."
			},
			editor: {
				loading: "Attendere. Caricamento editor mappa in corso...",
				newTitle: "Crea nuova mappa",
				editTitle: "Modifica mappa",
				titleLbl: "Titolo",
				titlePh: "Titolo mappa...",
				folderLbl: "La mappa verrà creata nella stessa cartella della storia.",
				creating: "Creazione della mappa",
				saving: "Salvataggio della mappa",
				success: "Mappa salvata",
				successCreate: "Mappa creata",
				cancelTitle: "Ignorare le modifiche non salvate?",
				errorDuplicate: "Esiste già una mappa con questo titolo",
				errorCreate: "Impossibile creare la mappa. Riprovare.",
				errorSave: "Impossibile salvare la mappa. Riprovare.",
				notavailable1: "Spiacenti, la creazione o la modifica di una mappa non è supportata in Firefox a causa di una limitazione tecnica. Potrebbe essere necessario creare la storia utilizzando un browser Web diverso o la seguente soluzione alternativa.",
				notavailable2: "Spiacenti, la creazione o la modifica di una mappa non è supportata poiché la Story Map non è ospitata in %PRODUCT%. Per ulteriori informazioni, contattare l\'amministratore di ArcGIS.",
				notavailable3: "Spiacenti, la creazione o la modifica di una mappa non è supportata in questa versione di Portal for ArcGIS (richiede 10.4 o successive). Per ulteriori informazioni, contattare l\'amministratore di ArcGIS.",
				notavailable4: "È possibile creare una mappa utilizzando %MV% e poi tornare in questo punto per aggiungerla alla storia.",
				notavailable5: "È possibile modificare la mappa utilizzando %MV% e poi tornare in questo punto e fare clic su %applicay% per vedere le modifiche.",
				notavailable6: "Map Viewer",
				notavailable7: "ricaricare la mappa"
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
				title: "Selezionare una mappa",
				searchTitle: "Cerca",
				ok: "OK",
				cancel: "Annulla",
				placeholder: "Immettere termine di ricerca o ID mappa Web..."
			}
		}
	})
);
