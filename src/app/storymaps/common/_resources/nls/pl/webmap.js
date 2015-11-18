﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mapa",
				lblLocation: "Lokalizacja",
				lblContent: "Zawartość",
				lblPopup: "Okno podręczne",
				lblControls: "Dodatki",
				lblOverview: "Mapa przeglądowa",
				lblLegend: "Legenda",
				loadingTitle: "Wczytywanie tytułu",
				entry: "Wpis",
				entries: "Wpisy",
				section: "Sekcja",
				sections: "Sekcje",
				and: "i",
				action: "Operacja w sekcji",
				actions: "Operacja w sekcjach",
				originalWebmap: "Mapa użyta do publikacji aplikacji %TPL_NAME%",
				browseMaps: "Wybierz mapę",
				createMap: "Tworzenie mapy",
				current: "Bieżąca mapa",
				select: "Wybierz lub utwórz mapę",
				newMap: "Nowo wybrana mapa",
				newCreatedMap: "Nowo utworzona mapa",
				webmapDefault: "Mapa domyślna",
				customCfg: "Konfiguracja niestandardowa",
				tooltipLocation: "Definiuj lokalizację do wyświetlania przez tę mapę.",
				tooltipContent: "Definiuj widoczne warstwy.",
				tooltipPopup: "Wybierz okno podręczne, które zostanie otwarte w momencie wyświetlenia tej mapy.",
				tooltipOverview: "Wyświetl małą mapę przeglądową wraz z mapą główną.",
				tooltipLegend: "Wyświetl legendę mapy, przydaje się ona, gdy mapa ma wiele warstw i symboli.",
				mapCfgInvite: "Użyj tych kontrolek do konfiguracji mapy",
				lblLocationAlt: "Przejęte z pierwszej mapy",
				tooltipLocationAlt: "Lokalizacja tej mapy została zsynchronizowana z pierwszej mapą w serii. Aby zmienić to zachowanie serii przejdź do menu Ustawienia > Opcje mapy."
			},
			configure: {
				btnReset: "Resetuj",
				btnCancel: "Anuluj",
				tocTitle: "Zawartość mapy",
				tocExplain: "Wybierz warstwy, które będą wyświetlane.",
				tocNoData: "Brak warstw do konfiguracji.",
				tocSave: "Zapisz zawartość mapy",
				extentTitle: "Lokalizacja mapy",
				extentExplain: "Przesuń i zmień powiększenie, aby zdefiniować wygląd mapy widoczny dla użytkowników.",
				extentSave: "Zapisz lokalizację mapy",
				popupTitle: "Okno podręczne mapy",
				popupExplain: "Kliknij obiekt, aby otworzyć pożądane okno podręczne.",
				popupSave: "Zapisz konfigurację okna podręcznego",
				hintNavigation: "Nawigacja mapy jest wyłączona."
			},
			editor: {
				loading: "Trwa wczytywanie edytora map. Czekaj.",
				newTitle: "Utwórz nową mapę",
				editTitle: "Edytuj mapę",
				titleLbl: "Tytuł",
				titlePh: "Tytuł mapy...",
				folderLbl: "Mapa zostanie utworzona w tym samym folderze, w którym znajduje się narracja.",
				creating: "Trwa tworzenie mapy",
				saving: "Trwa zapisywanie mapy",
				success: "Mapa została zapisana",
				successCreate: "Mapa została utworzona",
				cancelTitle: "Odrzucić wszystkie niezapisane zmiany?",
				errorDuplicate: "Mapa o takim tytule już istnieje",
				errorCreate: "Nie można utworzyć mapy. Spróbuj ponownie.",
				errorSave: "Nie można zapisać mapy. Spróbuj ponownie.",
				notavailable1: "Przykro nam, ale funkcja tworzenia lub edytowania mapy nie jest obsługiwana przez przeglądarkę Firefox z powodu ograniczeń technicznych. Użyj innej przeglądarki w celu zbudowania narracji lub z skorzystaj z poniższego rozwiązania zastępczego.",
				notavailable2: "Przykro nam, ale funkcja tworzenia lub edytowania mapy nie jest obsługiwana, ponieważ aplikacja mapy narracyjnej nie jest hostowana przez produkt %PRODUCT%. Aby uzyskać więcej informacji, skontaktuj się z administratorem oprogramowania ArcGIS.",
				notavailable3: "Przykro nam, ale funkcja tworzenia lub edytowania mapy nie jest obsługiwana w tej wersji witryny Portal for ArcGIS (konieczna jest wersja 10.4 lub nowsza). Aby uzyskać więcej informacji, skontaktuj się z administratorem oprogramowania ArcGIS.",
				notavailable4: "Można utworzyć mapę za pomocą produktu %MV%, następnie wrócić tutaj i dodać ją do narracji.",
				notavailable5: "Można edytować mapę za pomocą produktu %MV%, następnie wrócić tutaj i kliknąć przycisk %apply%, aby zobaczyć zmiany.",
				notavailable6: "przeglądarka map",
				notavailable7: "wczytaj ponownie mapę"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja instytucja",
					onlineLabel: "Usługa ArcGIS Online",
					contentLabel: "Moje zasoby",
					favoritesLabel: "Moje ulubione"
				},
				title: "Wybierz mapę",
				searchTitle: "Wyszukaj",
				ok: "OK",
				cancel: "Anuluj",
				placeholder: "Wpisz termin wyszukiwania lub identyfikator mapy internetowej..."
			}
		}
	})
);
