﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Hartă",
				lblLocation: "Locaţie",
				lblContent: "Conţinut",
				lblPopup: "Fereastră pop-up",
				lblControls: "Elemente suplimentare",
				lblOverview: "Hartă de prezentare generală",
				lblLegend: "Legendă",
				loadingTitle: "Se încarcă titlul",
				entry: "Înregistrare",
				entries: "Înregistrări",
				section: "Secţiune",
				sections: "Secţiuni",
				and: "şi",
				action: "Acţiune în secţiune",
				actions: "Acţiune în secţiuni",
				originalWebmap: "Hartă utilizată pentru publicarea %TPL_NAME%",
				browseMaps: "Selectaţi o hartă",
				createMap: "Crearea unei hărţi",
				current: "Hartă curentă",
				select: "Selectaţi sau creaţi o hartă",
				newMap: "Hartă proaspăt selectată",
				newCreatedMap: "Hartă nou creată",
				webmapDefault: "Hartă implicită",
				customCfg: "Configuraţie particularizată",
				tooltipLocation: "Definiţi locaţia pe care o va afişa această hartă.",
				tooltipContent: "Definiţi straturile tematice vizibile.",
				tooltipPopup: "Alegeţi o fereastră pop-up care va fi deschisă atunci când este afişată această hartă.",
				tooltipOverview: "Afişaţi o mică hartă de prezentare generală împreună cu harta principală.",
				tooltipLegend: "Afişaţi legenda hărţii pe hartă, lucru util atunci când harta conţine multe straturi tematice şi simboluri.",
				mapCfgInvite: "Utilizaţi aceste comenzi pentru a configura harta",
				lblLocationAlt: "Moştenită de la prima hartă",
				tooltipLocationAlt: "Locaţia acestei hărţi este sincronizată cu prima hartă din serie. Pentru a modifica acest comportament pentru seria dvs. accesaţi Setări > Opţiuni hartă."
			},
			configure: {
				btnReset: "Resetare",
				btnCancel: "Anulare",
				tocTitle: "Resurse hartă",
				tocExplain: "Selectaţi ce straturi tematice vor fi afişate,",
				tocNoData: "Nu se poate configura niciun strat tematic.",
				tocSave: "Salvare resurse hartă",
				extentTitle: "Locaţie hartă",
				extentExplain: "Panoramaţi şi transfocaţi harta pentru a defini cum va arăta pentru cititori.",
				extentSave: "Salvare locaţie hartă",
				popupTitle: "Fereastră pop-up hartă",
				popupExplain: "Faceţi clic pe un obiect spaţial pentru a deschide fereastra pop-up pe care doriţi să o afişaţi.",
				popupSave: "Salvare configuraţiei pop-up",
				hintNavigation: "Navigarea în hartă este dezactivată."
			},
			editor: {
				loading: "Aşteptaţi cât timp se încarcă editorul de hartă",
				newTitle: "Creare hartă nouă",
				editTitle: "Editare hartă",
				titleLbl: "Titlu",
				titlePh: "Titlu hartă...",
				folderLbl: "Harta va fi creată în acelaşi folder ca povestea.",
				creating: "Se creează harta",
				saving: "Se salvează harta",
				success: "Hartă salvată",
				successCreate: "Hartă creată",
				cancelTitle: "Eliminaţi modificări nesalvate?",
				errorDuplicate: "Aveţi deja o hartă cu acest titlu",
				errorCreate: "Harta nu poate fi creată. Încercaţi din nou.",
				errorSave: "Harta nu poate fi salvată. Încercaţi din nou.",
				notavailable1: "Ne pare rău, creare sau editarea unei hărţi nu este acceptată în Firefox din cauza unei limitări tehnice. Poate doriţi să creaţi povestea utilizând un browser web diferit sau folosiţi următoarea soluţie ocolitoare.",
				notavailable2: "Ne pare rău, crearea sau editarea unei hărţi nu este acceptată, deoarece aplicaţia de hărţi informative nu este găzduită în %PRODUCT%. Contactaţi administratorul ArcGIS pentru informaţii suplimentare.",
				notavailable3: "Ne pare rău, crearea sau editarea unei hărţi nu este acceptată în această versiune de Portal for ArcGIS (este necesară versiunea 10.4 sau o versiune ulterioară). Contactaţi administratorul ArcGIS pentru informaţii suplimentare.",
				notavailable4: "Puteţi crea o hartă utilizând %MV%, apoi puteţi reveni aici pentru a o adăuga la povestea dvs.",
				notavailable5: "Puteţi edita harta utilizând %MV%, apoi puteţi reveni aici şi %apply% pentru a vedea modificările.",
				notavailable6: "aplicaţia de vizualizare a hărţilor",
				notavailable7: "reîncărcare hartă"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organizaţia mea",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Resursele mele",
					favoritesLabel: "Preferinţele mele"
				},
				title: "Selectaţi o hartă",
				searchTitle: "Căutare",
				ok: "OK",
				cancel: "Anulare",
				placeholder: "Introduceţi termenul sau ID-ul de hartă web de căutat..."
			}
		}
	})
);
