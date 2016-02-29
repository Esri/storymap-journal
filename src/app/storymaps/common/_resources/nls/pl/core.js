define(
	 ({
		commonCore: {
			common: {
				add: "Dodaj",
				edit: "Edytuj",
				save: "Zapisz",
				next: "Dalej",
				cancel: "Anuluj",
				back: "Wstecz",
				apply: "Zastosuj",
				close: "Zamknij",
				open: "Otwórz",
				start: "Początek",
				loading: "Wczytywanie",
				disabledAdmin: "Opcja ta została wyłączona przez Administratora",
				width: "Szerokość",
				height: "Wysokość",
				create: "Utwórz",
				yes: "Tak",
				no: "Nie",
				mystories: "Moje narracje"
			},
			inlineFieldEdit: {
				editMe: "Edytuj!"
			},
			builderPanel: {
				panelHeader: "Kreator szablonu %TPL_NAME%",
				buttonSaving: "Zapisywanie",
				buttonSaved: "Zapisane",
				buttonShare: "Udostępnij",
				buttonSettings: "Ustawienia",
				buttonHelp: "Pomoc",
				buttonPreview: "Wyświetl narrację",
				tooltipFirstSave: "Z tego elementu można skorzystać dopiero po zapisaniu.",
				tooltipNotShared: "Z tego elementu można skorzystać dopiero po udostępnieniu.",
				tooltipNotShared2: "Twoja narracja nie jest udostępniana, tylko Ty masz do niej dostęp.",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangePlural: "Oczekujące zmiany",
				closeWithPendingChange: "Czy na pewno chcesz potwierdzić tę operację? Zmiany zostaną utracone.",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				status1: "Narracja została udostępniona, ale wystąpiły problemy",
				status2: "Narracja nie została udostępniona, ale wystąpiły problemy",
				status3: "Narracja jest publiczna",
				status4: "Narracja została udostępniana w obrębie Twojej instytucji",
				status5: "Narracja jest prywatna",
				status6: "Narracja nie została jeszcze zapisana",
				checking: "Trwa sprawdzanie",
				fix: "Napraw"
			},
			saveError: {
				title: "Błąd podczas zapisywania narracji",
				err1Div1: "Nie można zapisać narracji, ponieważ istnieje już inny element o tej samej nazwie.",
				err1Div2: "Zmodyfikuj tytuł narracji i ponownie ją zapisz.",
				btnOk: "Edytuj tytuł narracji"
			},
			saveErrorSocial: {
				title: "Udostępnianie aktualizacji w serwisach społecznościowych",
				panel1: "Wygląd narracji w serwisach społecznościowych został poprawiony, ale tytuł elementu aplikacji internetowej ArcGIS jest inny niż tytuł narracji.",
				panel1tooltip: "Po zdefiniowaniu tytułu, podsumowania i obrazu miniatury, narracja będzie wyglądała następująco:",
				panel2:	"Którego tytułu chcesz używać w serwisach społecznościowych:",
				panel2q1: "Tytuł narracji (zalecane)",
				panel2q1tooltip: "Po wybraniu tej opcji tytuł elementu zostanie zmodyfikowany zgodnie z tytułem narracji, a dodatkowe zmiany w kreatorze zostaną zsynchronizowane.",
				panel2q2: "Tytuł elementu",
				panel3: "Aby dodatkowo poprawić wygląd narracji w serwisach społecznościowych, użyj karty ${MYSTORIES} w celu dodania podsumowania i obrazu miniatury.",
				panel4: "Nie ostrzegaj ponownie dla tej narracji"
			},
			share: {
				shareTitle: "Udostępnij narrację",
				preview: "Zobacz podgląd",
				viewlive: "Wyświetl narrację",
				btnPrivate: "Prywatny",
				btnPrivateTooltip: "Tylko Ty widzisz narrację",
				btnOrg: "Instytucja",
				btnOrgTooltip: "Tylko członkowie Twojej instytucji widzą narrację",
				btnPublic: "Publiczny",
				btnPublicTooltip: "Każdy widzi narrację",
				loadingMessage: "Sprawdzanie narracji pod kątem problemów",
				viewToggle1: "Wyświetl zawartość narracji",
				viewToggle2: "Zamknij zawartość narracji",
				socialize: "Udostępnij w mediach społecznościowych",
				statusPrivate: "Twoja narracja jest prywatna. Tylko Ty ją widzisz.",
				statusError: "W zawartości Twojej narracji wystąpiły problemy, które będą widoczne dla czytelników. Poniżej możesz je znaleźć i rozwiązać.",
				statusNoErrPrivate: "Udostępnij narrację, gdy będzie gotowa!",
				mystoriesinvite: "Zarządzaj narracjami",
				notavailable1: "Przykro nam, ale nie można udostępnić narracji z poziomu Kreatora, ponieważ ta aplikacja nie jest hostowana przez produkt %PRODUCT%.",
				notavailable2: "Przykro nam, ale z poziomu Kreatora nie można udostępnić narracji w tej wersji witryny Portal for ArcGIS (wymagana jest wersja 10.4 lub nowsza).",
				notavailable3: "Można udostępnić narrację tutaj: %LINK%.",
				notavailable4: "Moje narracje",
				notavailable5: "to jest strona elementu",
				notavailable6: "Przykro nam, ale ta funkcja nie jest obsługiwana w trybie deweloperskim. W zależności od planu wdrożenia ta funkcja może być obsługiwana po jej wdrożeniu.",
				notavailable7: "Sprawdź na karcie %MYCONTENT%, czy mapy i warstwy wykorzystane w narracji zostały również udostępnione.",
				notavailable8: "Moje zasoby",
				mystoriesinvite2: "Aby poprawić wygląd narracji w sieciach społecznościowych, użyj karty ${MYSTORIES} w celu dodania podsumowania i obrazu miniatury."
			},
			settings: {
				header: "Ustawienia",
				tabError: "Sprawdź, czy poszczególne karty nie zawierają błędnych danych"
			},
			settingsLayout: {
				title: "Kompozycja",
				explain: "Jakiego układu chcesz użyć?",
				explainInit: "W oknie dialogowym ustawień możesz zmienić układ w dowolnej chwili.",
				viewExample: "Wyświetl przykład online"
			},
			settingsTheme: {
				title: "Motyw"
			},
			settingsHeader: {
				title: "Nagłówek",
				logoEsri: "Logo firmy Esri",
				logoNone: "Brak logo",
				logoCustom: "Logo niestandardowe",
				logoCustomPlaceholder: "Adres URL (maks. 250x50 pikseli)",
				logoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				logoSocialExplain: "Dostosuj łącze w nagłówku.",
				logoSocialText: "Tekst",
				logoSocialLink: "Łącze",
				lblSmallHeader: "Użyj nagłówka kompaktowego (bez podtytułu)"
			},
			header: {
				title: "Zmień tytuł swojej aplikacji %TPL_NAME%",
				subtitle: "Zmień podtytuł swojej aplikacji %TPL_NAME%"
			}
		}
	})
);
