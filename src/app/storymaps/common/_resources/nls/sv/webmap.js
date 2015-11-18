﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Karta",
				lblLocation: "Plats",
				lblContent: "Innehåll",
				lblPopup: "Popup-fönster",
				lblControls: "Extra",
				lblOverview: "Översiktskarta",
				lblLegend: "Teckenförklaring",
				loadingTitle: "Läser in titel",
				entry: "Post",
				entries: "Poster",
				section: "Avsnitt",
				sections: "Avsnitt",
				and: "och",
				action: "Åtgärd i avsnitt",
				actions: "Åtgärd i avsnitt",
				originalWebmap: "Karta som används för att publicera %TPL_NAME%",
				browseMaps: "Välj en karta",
				createMap: "Skapa en karta",
				current: "Aktuell karta",
				select: "Välj eller skapa en karta",
				newMap: "Nyligen vald karta",
				newCreatedMap: "Nyligen skapad karta",
				webmapDefault: "Standardkarta",
				customCfg: "Anpassad konfiguration",
				tooltipLocation: "Definiera vilken plats som kartan ska visa.",
				tooltipContent: "Definiera synliga lager.",
				tooltipPopup: "Välj ett popupfönster som ska öppnas när den här kartan visas.",
				tooltipOverview: "Visa en liten översiktskarta tillsammans med huvudkartan.",
				tooltipLegend: "Visa en teckenförklaring på kartan, vilket kan vara användbart om den innehåller många lager och symboler.",
				mapCfgInvite: "Konfigurera kartan med dessa kontroller",
				lblLocationAlt: "Ärvd från den första kartan",
				tooltipLocationAlt: "Kartans plats synkroniseras med den första kartan i serien. Om du vill ändra det här beteendet för din serie går du till Inställningar > Kartalternativ."
			},
			configure: {
				btnReset: "Återställ",
				btnCancel: "Avbryt",
				tocTitle: "Kartinnehåll",
				tocExplain: "Välj vilka lager som ska visas.",
				tocNoData: "Det går inte att konfigurera något lager.",
				tocSave: "Spara kartinnehåll",
				extentTitle: "Kartplats",
				extentExplain: "Panorera och zooma kartan för att definiera hur användarna ska se den.",
				extentSave: "Spara kartplats",
				popupTitle: "Kartpopupfönster",
				popupExplain: "Klicka på ett geoobjekt för att öppna det popupfönster du vill visa.",
				popupSave: "Spara konfigurationen av popupfönstret",
				hintNavigation: "Kartnavigeringen är inaktiverad."
			},
			editor: {
				loading: "Vänta medan kartredigeraren läses in",
				newTitle: "Skapa ny karta",
				editTitle: "Redigera karta",
				titleLbl: "Titel",
				titlePh: "Karttitel ...",
				folderLbl: "Kartan skapas i samma mapp som berättelsen.",
				creating: "Skapar kartan",
				saving: "Sparar kartan",
				success: "Kartan har sparats",
				successCreate: "Kartan har skapats",
				cancelTitle: "Ignorera alla osparade ändringar?",
				errorDuplicate: "Du har redan en karta med den titeln",
				errorCreate: "Det gick inte att skapa kartan. Försök igen.",
				errorSave: "Det gick inte att spara kartan. Försök igen.",
				notavailable1: "Det går tyvärr inte att skapa eller redigera en karta i Firefox på grund av en teknisk begränsning. Du kanske vill bygga din berättelse med hjälp av en annan webbläsare eller använda följande lösning.",
				notavailable2: "Det går tyvärr inte att skapa eller redigera en karta eftersom applikationen berättelsekartor inte driftas på %PRODUCT%. Kontakta ArcGIS-administratören om du vill veta mer.",
				notavailable3: "Det går tyvärr inte att skapa eller redigera en karta i denna version av Portal for ArcGIS (kräver 10.4 eller senare). Kontakta ArcGIS-administratören om du vill veta mer.",
				notavailable4: "Du kan skapa en karta med hjälp av %MV% och sedan gå tillbaka hit för att lägga till den i din berättelse.",
				notavailable5: "Du kan skapa en karta med hjälp av %MV% och sedan gå tillbaka hit och %apply% för att visa ändringarna.",
				notavailable6: "kartvy",
				notavailable7: "läs in kartan igen"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innehåll",
					favoritesLabel: "Mina favoriter"
				},
				title: "Välj en karta",
				searchTitle: "Sök",
				ok: "OK",
				cancel: "Avbryt",
				placeholder: "Ange en sökterm eller ett webbkart-ID ..."
			}
		}
	})
);
