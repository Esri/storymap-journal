define(
	 ({
		viewer: {
			common: {
				close: "Zamknij"
			},
			loading: {
				step1: "Trwa wczytywanie narracji",
				step2: "Wczytywanie danych",
				step3: "Inicjowanie",
				loadBuilder: "Przełączanie do trybu kreatora",
				long: "Inicjalizacja Dziennika mapy",
				long2: "Dziękujemy za cierpliwość",
				failButton: "Wczytaj ponownie narrację"
			},
			signin: {
				title: "Wymagane jest uwierzytelnienie",
				explainViewer: "Aby uzyskać dostęp do narracji, zaloguj się na konto w portalu %PORTAL_LINK%.",
				explainBuilder: "Aby skonfigurować narrację, zaloguj się na konto w portalu %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				invalidConfig: "Nieprawidłowa konfiguracja",
				invalidConfigNoApp: "Identyfikator aplikacji tworzenia map internetowych nie został określony w pliku index.html.",
				invalidConfigNoAppDev: "W parametrach adresu URL nie określono identyfikatora aplikacji map internetowych (?appid=). W trybie deweloperskim konfiguracja parametru appid w pliku index.html jest ignorowana.",
				unspecifiedConfigOwner: "Nie skonfigurowano autoryzowanego właściciela.",
				invalidConfigOwner: "Właściciel narracji nie jest autoryzowany.",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "%TPL_NAME% nie istnieje lub jest niedostępna.",
				appLoadingFail: "Wystąpił pewien problem, nie wczytano prawidłowo %TPL_NAME%.",
				notConfiguredDesktop: "Narracja nie została jeszcze skonfigurowana.",
				notConfiguredMobile: "Kreator %TPL_NAME% nie jest obsługiwany dla wyświetlacza w tym rozmiarze. Jeśli to możliwe, zmień rozmiar okna przeglądarki, aby uzyskać dostęp do kreatora, lub buduj narrację na urządzeniu z większym ekranem.",
				notConfiguredMobile2: "Aby korzystać z kreatora %TPL_NAME%, obróć urządzenie do orientacji poziomej.",
				notAuthorized: "Nie masz uprawnień dostępu do tej narracji",
				notAuthorizedBuilder: "Nie masz uprawnień do korzystania z kreatora %TPL_NAME%.",
				noBuilderIE: "Kreator nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż %VERSION%. %UPGRADE%",
				noViewerIE: "Ta narracja nie jest obsługiwana przez przeglądarkę Internet Explorer w wersji starszej niż %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Zaktualizuj przeglądarkę</a>.",
				mapLoadingFail: "Wystąpił pewien problem, nie wczytano mapy prawidłowo.",
				signOut: "Wyloguj się"
			},
			mobileView: {
				tapForDetails: "Wskaż, aby uzyskać szczegółowe informacje",
				clickForDetails: "Dowiedz się więcej",
				swipeToExplore: "Przesuń, aby przejrzeć",
				tapForMap: "Wskaż, aby powrócić do mapy",
				clickForMap: "POWRÓT DO MAPY"
			},
			floatLayout: {
				scroll: "Przewiń"
			},
			sideLayout: {
				scroll: "Przewiń w dół, aby uzyskać więcej informacji!"
			},
			mainStage: {
				back: "Wstecz"
			},
			headerFromCommon: {
				storymapsText: "Mapa narracji (Story Map)",
				builderButton: "Edytuj",
				facebookTooltip: "Udostępnij na Facebooku",
				twitterTooltip: "Udostępnij na Twitterze",
				bitlyTooltip: "Utwórz skrócone łącze",
				templateTitle: "Skonfiguruj tytuł szablonu",
				templateSubtitle: "Skonfiguruj podtytuł szablonu",
				share: "Udostępnij",
				checking: "Trwa sprawdzanie zawartości narracji",
				fix: "Rozwiąż problemy z narracją",
				noerrors: "Nie wykryto problemów",
				tooltipAutoplayDisabled: "To nie jest dostępne w trybie automatycznego odtwarzania",
				notshared: "Narracja nieudostępniona"
			},
			overviewFromCommon: {
				title: "Mapa przeglądowa"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopiuj",
				copied: "Skopiowane",
				open: "Otwórz",
				embed: "Osadzanie na stronie internetowej",
				embedExplain: "Aby umieścić Dziennik na stronie internetowej, skorzystaj z poniższego kodu HTML.",
				size: "Rozmiar (szerokość/wysokość):",
				autoplayLabel: "Tryb automatycznego odtwarzania",
				autoplayExplain1: "W trybie automatycznego odtwarzania narracja jest prezentowana w stałym tempie. Ten tryb doskonale nadaje się do monitora kiosku internetowego lub wyświetlacza publicznego, ale należy pamiętać, że w innych sytuacjach może pogorszyć czytelność narracji. Ta funkcja nie jest obsługiwana na małych wyświetlaczach.",
				autoplayExplain2: "Po włączeniu tego trybu udostępniane są elementy sterujące do włączania odtwarzania/wstrzymywania narracji oraz do regulacji szybkości nawigacji.",
				linksupdated: "Zaktualizowano łącza!"
			}
        }
    })
);