define(
	 ({
		common: {
			common: {
				edit: "Edytuj"
			},
			inlineFieldEdit: {
				editMe: "Zmodyfikuj mnie!"
			},
			builderPanel: {
				panelHeader: "Kreator szablonu %TPL_NAME%",
				buttonSave: "ZAPISZ",
				buttonShare: "UDOSTĘPNIJ",
				buttonSettings: "USTAWIENIA",
				buttonHelp: "POMOC",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangeSingular: "1 niezapisana zmiana",
				unSavedChangePlural: "niezapisane zmiany",
				popoverSaveWhenDone: "Nie zapomnij zapisać po zakończeniu pracy",
				closeWithPendingChange: "Na pewno chcesz zatwierdzić czynność? Twoje zmiany zostaną utracone.",
				ok: "OK",
				savingApplication: "Zapisywanie aplikacji",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				saveError3: "Tytuł nie może być pusty",
				// TODO
				signIn: "Zaloguj się na konto,",
				shareStatus1: "Aplikacja nie została zapisana",
				shareStatus2: "Aplikacja jest udostępniania publicznie",
				shareStatus3: "Aplikacja jest udostępniana w obrębie tej instytucji",
				shareStatus4: "Aplikacja nie jest udostępniana"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Tytuł",
				addPopupTitle: "Dodaj",
				addPopupDescription: "Dodanie nowego widoku do serii",
				addPopupButton: "DODAJ",
				// Edit
				editPopupTitle: "Edytuj",
				editPopupDescription: "Edycja wybranego widoku",
				editPopupButton: "ZASTOSUJ",
				// Add/Edit
				addEditPopupCancelButton: "ANULUJ",
				addEditPopupMyContentBtn: "Wybierz z Moich zasobów",
				addEditPopupConfigureWebMapBtn: " Konfiguruj"
			},
			share: {
				firstSaveTitle: "Aplikacja zapisana pomyślnie",
				firstSaveHeader: "Aplikacja została zapisana w serwisie ArcGIS Online. Zapoznaj się z następującymi odpowiedziami na często zadawane pytania.",
				firstSaveA1: "Jeżeli nie znasz jeszcze serwisu ArcGIS Online lub chcesz korzystać ze skrótu do interfejsu dla autorów, możesz zapisać następujące łącze: %LINK1%",
				firstSaveA1bis: "Aplikację można również znaleźć w <a href='%LINK2%' target='_blank'>folderze zasobów w serwisie ArcGIS Online</a>.",
				firstSaveQ2: "Czy moja aplikacja jest udostępniona?",
				firstSaveA2: "Obecnie aplikacja nie jest udostępniona. Aby ją udostępnić, użyj przycisku UDOSTĘPNIJ.",
				shareTitle: "Udostępnij swoją aplikację",
				sharePrivateHeader: "Aplikacja nie jest udostępniona, czy chcesz ją udostępnić?",
				sharePrivateBtn1: "Udostępnij publicznie",
				sharePrivateBtn2: "Udostępnij mojej instytucji",
				sharePrivateWarning: "Udostępnianie %WITH% zostało wyłączone, ponieważ nie jesteś właścicielem <a href='%LINK%' target='_blank'>mapy internetowej</a>.",
				sharePrivateWarningWith1: "publicznie",
				sharePrivateWarningWith2: "publicznie i instytucji",
				sharePrivateProgress: "Trwa udostępnianie...",
				sharePrivateErr: "Udostępnianie nie powiodło się. Spróbuj ponownie lub",
				sharePrivateOk: "Aktualizacja udostępniania powiodła się. Trwa wczytywanie...",
				sharePreviewAsUser: "Ogólnie",
				shareHeader1: "Aplikacja jest <strong>dostępna publicznie</strong>.",
				shareHeader2: "Aplikacja jest dostępna dla członków instytucji (wymagane logowanie).",
				shareLinkHeader: "Udostępnij aplikację odbiorcom",
				shareLinkOpen: "OTWÓRZ",
				shareQ1Opt1: "Jak mogę zachować prywatny status aplikacji?",
				shareQ1Opt2: "W jaki sposób mogę zachować prywatny status aplikacji lub udostępnić ją publicznie?",
				shareA1: "Użyj elementu %SHAREIMG% na <a href='%LINK1%' target='_blank'>stronie elementu aplikacji</a>. Jeżeli chcesz przestać udostępniać mapę internetową, użyj <a href='%LINK2%' target='_blank'>strony elementu mapy internetowej</a>.",
				shareA1bis: "Jeśli chcesz przestać udostępniać Usługę obiektową, użyj <a href='%LINK1%' target='_blank'>strony elementu Usługi obiektowej</a>.",
				shareQ2: "W jaki sposób mogę edytować aplikację w późniejszym czasie?",
				shareQ2bis: "W jaki sposób mogę wrócić do interfejsu tworzenia?",
				shareA2div1: "Zapisz i użyj ponownie następującego łącza %LINK1% lub <a href='%LINK2%' target='_blank'>strony elementu aplikacji</a>.",
				shareA2div2: "Kiedy właściciel aplikacji zaloguje się w serwisie ArcGIS.com, aplikacja zawiera przycisk do otwierania interaktywnego kreatora:",				
				shareQ3: "Gdzie są przechowywane dane?",
				shareA3: "Konfiguracja aplikacji jest przechowywana w <a href='%LINK1%' target='_blank'>tej mapie internetowej</a> oraz <a href='%LINK2%' target='_blank'>tej aplikacji internetowej</a>. Jeżeli użyto opcji importu danych z serwisu Flickr, Picasa, Facebook lub You Tube, zdjęcia i filmy wideo są tam nadal przechowywane i nie zostają skopiowane do serwisu ArcGIS Online.",
				learnMore: "Dowiedz się więcej",
				close: "Zamknij"
			},
			settings: {
				header: "Ustawienia aplikacji",
				cancel: "Anuluj",
				apply: "Zastosuj",
				tabError: "Sprawdź, czy dane w poszczególnych kartach nie zawierają błędów"
			},
			settingsLayout: {
				title: "Układ",
				explain: "Jakiego układu chcesz użyć?",
				explainInit: "Zmian można dokonać w oknie dialogowym ustawień.",
				selected: "Wybrany układ",
				select: "Wybierz ten układ"
			},
			settingsTheme: {
				title: "Motyw",
				explain: "Wybierz motyw aplikacji lub zdefiniuj własną kolorystykę.",
				label: "Kolory nagłówka i tła panelu bocznego"
			},
			settingsHeader: {
				title: "Nagłówek",
				explain: "Dostosuj logo w nagłówku (maksymalny rozmiar to 250 x 50 pikseli).",
				logoEsri: "Logo firmy Esri",
				logoNone: "Brak logo",
				logoCustom: "Logo niestandardowe",
				logoCustomPlaceholder: "Adres URL obrazu",
				logoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				logoSocialExplain: "Dostosuj łącze nagłówka wyświetlane u góry po prawej.",
				logoSocialText: "Tekst",
				logoSocialLink: "Łącze",
				logoSocialDisabled: "Opcja ta została wyłączona przez Administratora"
			},
			mediaSelector: {
				lblMap: "Mapa",
				lblPicture: "Obraz",
				lblVideo: "Wideo",
				lblExternal: "Strona zewnętrzna"
			},
			webMapSelector: {
				radioCurrentWebMap: "Bieżąca mapa internetowa",
				radioWebmapApp: "Jedna spośród innych map internetowych używanych w aplikacji",
				radioAnotherWebmap: "Inna mapa internetowa",
				btnSelect: "Wybierz",
				lblOr: "lub",
				fieldEnterWebmapId: "Wprowadź identyfikator mapy internetowej",
				btnConfigure: "Konfiguruj mapę"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja instytucja",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Moje zasoby",
					favoritesLabel: "Moje ulubione"
				},
				title: "Wybór mapy internetowej",
				searchTitle: "Wyszukaj",
				ok: "OK",
				cancel: "Anuluj",
				placeholder: "Wprowadź wyszukiwane wyrażenie"
			}
		}
	})
);
