﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mapa",
				lblLocation: "Umístění",
				lblContent: "Obsah",
				lblPopup: "Vyskakovací okno",
				lblControls: "Doplňky",
				lblOverview: "Mapa přehledu",
				lblLegend: "Legenda",
				loadingTitle: "Načítání nadpisu",
				entry: "Záznam",
				entries: "Záznamy",
				section: "Část",
				sections: "Části",
				and: "a",
				action: "Akce v části",
				actions: "Akce v částech",
				originalWebmap: "Mapa použitá při publikaci %TPL_NAME%",
				browseMaps: "Vybrat mapu",
				createMap: "Vytvořit mapu",
				current: "Současná mapa",
				select: "Vybrat nebo vytvořit mapu",
				newMap: "Nově vybraná mapa",
				newCreatedMap: "Nově vytvořená mapa",
				webmapDefault: "Výchozí nastavení mapy",
				customCfg: "Vlastní konfigurace",
				tooltipLocation: "Určete oblast, kterou bude tato mapa zobrazovat.",
				tooltipContent: "Určete viditelné vrstvy.",
				tooltipPopup: "Vyberte vyskakovací okno, které se zobrazí po otevření mapy.",
				tooltipOverview: "Zobrazí spolu s hlavní mapou malou přehledovou mapu.",
				tooltipLegend: "Zobrazí v mapě její legendu. Užitečné v případě, kdy mapa obsahuje velké množství vrstev a symbolů.",
				mapCfgInvite: "Pomocí těchto ovládacích prvků můžete konfigurovat mapu.",
				lblLocationAlt: "Převzato z první mapy",
				tooltipLocationAlt: "Oblast zobrazení této mapy bude synchronizována s první mapou v sérii map. Chcete-li změnit toto chování série, přejděte do nabídky Nastavení > Možnosti mapy."
			},
			configure: {
				btnReset: "Resetovat",
				btnCancel: "Storno",
				tocTitle: "Obsah mapy",
				tocExplain: "Vyberte, které vrstvy se zobrazí.",
				tocNoData: "Žádnou vrstvu není možné konfigurovat.",
				tocSave: "Uložit obsah mapy",
				extentTitle: "Umístění mapy",
				extentExplain: "Pomocí posunutí a přiblížení mapy můžete nastavit, jak se zobrazí čtenářům.",
				extentSave: "Uložit umístění mapy",
				popupTitle: "Vyskakovací okno mapy",
				popupExplain: "Kliknutím na prvek otevřete vyskakovací okno, s informacemi, které chcete o prvku zobrazit.",
				popupSave: "Uložit konfiguraci vyskakovacího okna",
				hintNavigation: "Navigace mapy je vypnuta."
			},
			editor: {
				loading: "Počkejte, dokud se nenahraje editor mapy",
				newTitle: "Vytvořit novou mapu",
				editTitle: "Upravit mapu",
				titleLbl: "Nadpis",
				titlePh: "Název mapy...",
				folderLbl: "Mapa bude vytvořena ve stejné složce jako příběh.",
				creating: "Vytváření mapy",
				saving: "Ukládání mapy",
				success: "Mapa uložena",
				successCreate: "Mapa vytvořena",
				cancelTitle: "Zrušit všechny neuložené změny?",
				errorDuplicate: "Již máte jednu mapu s tímto názvem",
				errorCreate: "Nepodařilo se vytvořit mapu. Zkuste to prosím znovu.",
				errorSave: "Nepodařilo se uložit mapu. Zkuste to prosím znovu.",
				notavailable1: "Je nám líto, vytváření a upravování mapy není v prohlížeči Firefox z důvodu technických omezení podporováno. Můžete zkusit svůj příběh vytvořit v jiném webovém prohlížeči nebo použít následující alternativní řešení.",
				notavailable2: "Je nám líto, vytváření a upravování mapy není podporováno, jelikož aplikace mapy s příběhem není hostována v %PRODUCT%. Pro více informací se obraťte na svého správce ArcGIS.",
				notavailable3: "Je nám líto, vytváření a upravování mapy není v této verzi Portal for ArcGIS podporováno (vyžaduje 10.4 nebo novější). Pro více informací se obraťte na svého správce ArcGIS.",
				notavailable4: "Můžete vytvořit mapu pomocí %MV% a potom se vrátit sem a přidat ji do svého příběhu.",
				notavailable5: "Můžete upravit mapu pomocí %MV% a potom se vrátit sem a %apply%, abyste viděli změny.",
				notavailable6: "prohlížeč map",
				notavailable7: "znovu nahrát mapu"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moje organizace",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Můj obsah",
					favoritesLabel: "Moje oblíbené"
				},
				title: "Vybrat mapu",
				searchTitle: "Hledat",
				ok: "OK",
				cancel: "Storno",
				placeholder: "Zadejte výraz pro vyhledávání nebo identifikátor webové mapy..."
			}
		}
	})
);
