define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Multimedia",
      "lblSelect2": "Zasoby",
      "lblMap": "Mapa",
      "lblImage": "Obraz",
      "lblVideo": "Wideo",
      "lblExternal": "Strona internetowa",
      "lblUpload": "Prześlij",
      "lblLink": "Połącz",
      "disabled": "Opcja ta została wyłączona przez Administratora",
      "userLookup": "Wczytaj albumy",
      "notImplemented": "Jeszcze nie wprowadzone",
      "noData": "Nie znaleziono żadnych albumów publicznych",
      "thirdPartyTerms": "Używając usługi innych producentów, zgadzasz się na warunki jej użytkowania: "
    },
    "imageSelector": {
      "lblStep1": "Wybierz usługę",
      "lblStep2": "Wybierz nośnik",
      "lblStep3": "Konfiguruj"
    },
    "imageSelectorHome": {
      "explain": "Wczytaj obrazy z portalu społecznościowego <br /> lub bezpośrednio z adresu URL"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "znajdź obraz",
      "lblDrop": "Upuść obraz tutaj lub",
      "infoUpload": "Obrazy zostaną zapisane na Twoim koncie na platformie ArcGIS i będą dostępne tylko w narracji.",
      "warningFileTypes": "Obraz może mieć format .jpg, .png, .gif lub .bmp",
      "warningOneFile": "Można przesyłać tylko jeden obraz na raz.",
      "warningFileSize": "Obraz musi być mniejszy niż 10 MB.",
      "tooltipRemove": "Usuń nieużywany obraz z konta na platformie ArcGIS. <br> (Jeśli zechcesz ponownie go użyć w późniejszym czasie, konieczne będzie ponowne jego przesłanie)."
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nazwa użytkownika",
      "signInMsg2": "Nie odnaleziono użytkownika",
      "loadingFailed": "Wczytywanie zakończyło się niepowodzeniem"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Adres e-mail lub identyfikator z serwisu Google",
      "signInMsg2": "Nie odnaleziono konta",
      "howToFind": "Jak znaleźć identyfikator Picasa",
      "howToFind2": "Skopiuj cyfry znajdujące się między pierwszym a drugim znakiem „/” dowolnej strony Picasa"
    },
    "videoSelectorCommon": {
      "check": "Zaznacz",
      "notFound": "Nie znaleziono pliku wideo",
      "found": "Znaleziono plik wideo",
      "select": "Wybierz ten plik wideo"
    },
    "videoSelectorHome": {
      "other": "Inne"
    },
    "videoSelectorYoutube": {
      "url": "Łącze filmu w witrynie YouTube",
      "pageInputLbl": "Nazwa użytkownika",
      "lookupMsgError": "Nie odnaleziono użytkownika",
      "howToFind": "W jaki sposób wyszukać nazwę użytkownika serwisu YouTube",
      "howToFind2": "Nazwa użytkownika jest wyświetlana pod każdym filmem",
      "found": "Znaleziono",
      "noData": "Nie znaleziono żadnych filmów publicznych",
      "videoNotChecked": "Materiał wideo nie został sprawdzony w serwisie YouTube, ale jego adres wygląda na poprawny.",
      "checkFailedAPI": "Podczas sprawdzania YouTube wystąpił błąd. Sprawdź klucz YouTube API."
    },
    "videoSelectorVimeo": {
      "url": "Łącze filmu w witrynie Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Na tej mapie narracyjnej nie można odtwarzać zwykłych plików wideo (np. w formacie avi lub mpeg), ale można na niej odtwarzać hostowane pliki wideo, które mają wbudowane odtwarzacze (np. pliki dostępne w serwisie YouTube lub Vimeo).",
      "explain2": "Funkcja ta jest dostępna w większości usług hostowania plików wideo. Konieczne jest znalezienie opcji umożliwiającej osadzenie pliku wideo, skopiowanie udostępnionego kodu i dodanie go do narracji za pomocą opcji zasobów %WEBPAGE%.",
      "explain3": "Alternatywnie można hostować plik wideo samodzielnie wraz ze stroną w języku HTML, która korzysta z odtwarzacza wideo, np. %EXAMPLE%. Następnie należy dodać adres URL tej strony w języku HTML do narracji przy użyciu opcji %WEBPAGE%.",
      "webpage": "Strona internetowa"
    },
    "webpageSelectorHome": {
      "lblUrl": "Łącze witryny internetowej",
      "lblEmbed": "Kod do osadzenia",
      "lblMustUseHTTPS": "Łącza do zasobów internetowych muszą rozpoczynać się od HTTPS",
      "lblOR": "LUB",
      "lblError1": "Błąd, wyczyść jedno z dwóch pól danych wejściowych.",
      "lblError2": "Kod do osadzenia może zawierać tylko jedną ramkę %IFRAMETAG%",
      "configure": "Konfiguruj"
    },
    "mediaConfigure": {
      "lblURL": "Łącze obrazu",
      "lblURLPH": "Łącze powinno kończyć się rozszerzeniem .jpg, .png, .gif lub .bmp",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Prawdopodobnie ten obraz nie jest prawidłowy. Podaj bezpośredni adres łącza do pliku obrazu (wtedy adres URL zwykle kończy się rozszerzeniem .jpg lub .png). Adresy łączy do witryn internetowych zawierających dany obraz są nieobsługiwane.",
      "lblURLErrorHTTPS": "To łącze do obrazu nie jest prawidłowe. Adres URL musi rozpoczynać się od HTTPS i kończyć obsługiwanym rozszerzeniem nazwy pliku obrazu (.jpg, .png, .gif, .bmp).",
      "lblURLCheck": "Sprawdzanie obrazu...",
      "lblLabel": "Legenda do obrazu",
      "lblLabel1": "Podpis",
      "lblLabel2": "Aktywuj tekst",
      "lblLabel3": "Brak",
      "lblLabelPH": "Wprowadź tekst",
      "lblMaximize": "Wstaw przycisk maksymalizacji w rogu obrazu",
      "lblMaximizeHelp": "Zalecany tylko w przypadku zdjęć o wysokiej jakości",
      "lblPosition": "Położenie",
      "lblPosition1": "Wyśrodkuj",
      "lblPosition2": "Wypełnij",
      "lblPosition3": "Dopasuj",
      "lblPosition4": "Rozciągnij",
      "lblPosition5": "Niestandardowy",
      "lblURLHelp": "Łącze do obrazu musi rozpoczynać się od HTTPS.<br><br>Aby uzyskać najlepsze rezultaty, wielkość obrazów powinna być mniejsza niż 400 KB. Należy używać skompresowanych obrazów w formacie JPG przy jakości zachowanej na poziomie 80% i następujących zalecanych szerokości obrazów: 2000 pikseli dla obszaru głównego lub panelu narracji z przyciskiem maksymalizacji, 1000 pikseli dla panelu narracji bez przycisku maksymalizacji.<br><br>Jeśli obraz dostępny za pomocą łącza jest wyświetlany powoli, prześlij go do narracji dla lepszego efektu.",
      "tooltipDimension": "Wartość można podać w „px” lub „%”",
      "tooltipDimension2": "Wartość należy podać w „px”",
      "lblPosition2Explain": "(obraz może zostać przycięty)",
      "lblPosition3Explain": "(obraz nie zostanie przycięty)",
      "lblPosition3Explain2": "(szerokość będzie zawsze dopasowana do panelu)",
      "lblPosition4Explain": "(obraz może zostać zniekształcony)",
      "unloadLbl": "Usuń, gdy czytelnik przechodzi dalej",
      "unloadHelp": "Jeśli w witrynie internetowej są udostępniane materiały audio lub wideo, ta opcja powinna być zaznaczona, aby po przejściu czytelnika dalej odtwarzanie tych treści było przerywane. Należy wyłączyć zaznaczenie opcji, aby na przykład podczas czytania tekstu przez czytelnika odtwarzane były utwory muzyczne.<br />Jeżeli ta witryna internetowa jest aplikacją, tę opcję należy wyłączyć, aby uniknąć ponownego wczytywania tej narracji, gdy czytelnik do niej wróci.",
      "embedProtocolLabel": "Wczytywanie strony przez bezpieczne połączenie (HTTPS)",
      "embedProtocolWarning1": "Jeśli ta strona nie jest wczytywana w narracji, nie można jej osadzać ze względów bezpieczeństwa internetowego. Alternatywnie można dodać łącze w narracji umożliwiające otwarcie tej strony na nowej karcie przeglądarki.",
      "embedProtocolWarning2": "Jeśli ta strona nie jest wczytywana w narracji, wyłącz zaznaczenie tej opcji i spróbuj ponownie. Jeśli ta strona nadal nie jest wczytywana, nie można jej osadzać ze względów bezpieczeństwa internetowego. Alternatywnie można dodać łącze w narracji umożliwiające otwarcie tej strony na nowej karcie przeglądarki.",
      "learn": "Dowiedz się więcej",
      "lblAltText": "Tekst alternatywny",
      "placeholderAltText": "Wprowadź opis tego medium dla odbiorców niedowidzących...",
      "tooltipAltText": "Podaj opis zawartości tego medium, który będzie używany przez technologie wspomagające, takie jak oprogramowanie do czytania tekstu z ekranu. Opis jest opcjonalny, ale zalecany w celu spełnienia wytycznych dotyczących dostępności zawartości internetowej, takich jak WCAG oraz artykuł 508."
    },
    "editorActionGeocode": {
      "lblTitle": "Lokalizuj adres lub miejsce",
      "mapMarkerExplain": "Po kliknięciu łącza na mapie wyświetlony zostanie znak"
    },
    "editorActions": {
      "navigate": "Przejdź do innej sekcji",
      "remove": "Działanie usunięcia",
      "preview": "Działanie podglądu"
    },
    "editorActionMedia": {
      "lblTitle": "Zmień zasoby w obszarze głównym"
    },
    "editorInlineMedia": {
      "lblTitle": "Wstaw obraz, film wideo lub witrynę internetową"
    }
  }
});