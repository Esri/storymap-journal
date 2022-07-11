define({
  "builder": {
    "layouts": {
      "mainStage": "Obszar główny",
      "sideTitle": "Panel boczny",
      "sideDescr": "Układ dla opowiadania z dużą ilością tekstu, doskonały do połączenia zdjęć, filmów wideo oraz map w przejrzystą prezentację.",
      "floatTitle": "Panel przestawny",
      "floatDescr": "Układ umożliwiający wyróżnienie map, którym towarzyszy przezroczysty panel z krótkimi informacjami tekstowymi pomagającymi w przedstawieniu opowiadania."
    },
    "common": {
      "lblStatus1": "Opublikowane",
      "lblStatus2": "Wersja robocza",
      "lblStatus3": "Ukryte"
    },
    "settingsLayoutOptions": {
      "title": "Opcje układu",
      "cfgLeft": "Lewy",
      "cfgRight": "Prawy",
      "cfgSmall": "Mały",
      "cfgMedium": "Średni",
      "cfgLarge": "Duży",
      "socialLinksLabel": "Wyświetlaj łącza do udostępniania u dołu każdej sekcji",
      "socialLinksDescr": "Umożliwia to użytkownikom tworzenie odnośników do określonych sekcji aplikacji %TPL_NAME% i ich promowanie. Na przykład, jeżeli użyjesz ikony udostępniania sekcji, użytkownicy zostaną przekierowani do określonej sekcji aplikacji %TPL_NAME%, zamiast do początku opowiadania. Użytkownicy mogą skorzystać z łącza mediów społecznościowych w sekcji tytułu, aby promować całą aplikację %TPL_NAME% (karta nagłówka) — w tym przypadku użytkownicy są przekierowywani do początku aplikacji %TPL_NAME%.",
      "socialDisabled": "Ta funkcja jest dostępna tylko w kompozycji Panel przestawny",
      "socialWarning": "Twoja narracja używa kompozycji Panel boczny, ale obecnie zalecamy korzystanie z tej opcji tylko z kompozycją Panel przestawny, aby uniknąć problemu w sytuacji, gdy panel nie ustawi się w odpowiedniej sekcji narracji ze zdjęciami. Możesz w dalszym ciągu korzystać z tej opcji, ale jeśli ją wyłączysz, będzie ona ponownie dostępna tylko z kompozycją Panel przestawny."
    },
    "settingsLayoutFonts": {
      "title": "Czcionki",
      "defaultLbl": "Domyślnie",
      "sectionTitleLbl": "Tytuł sekcji",
      "sectionContentLbl": "Treść sekcji"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Motyw instytucji",
      "lblModTheme": "Bieżący motyw"
    },
    "initPopup": {
      "title": "Witamy w"
    },
    "addEditPopup": {
      "disabled": "Opcja Dodaj sekcję jest wyłączona, ponieważ osiągnięto maksymalną liczbę dozwolonych sekcji.",
      "titleAdd": "Dodaj sekcję",
      "titleAddHome": "Dodaj sekcję Start",
      "titleEdit": "Edytuj sekcję",
      "step": "Etap",
      "stepMainStageExplain": "Zawartość obszaru głównego",
      "stepPanelExplain": "Zawartość",
      "stepMainStageNextTooltip": "Wpisz tytuł sekcji i wybierz zawartość, która znajdzie się w obszarze głównym",
      "stepMainStageNextTooltip2": "Wybierz zawartość, która znajdzie się w obszarze głównym",
      "step2NextTooltip": "Wpisz tytuł sekcji i zawartość, która będzie wyświetlana w układzie %LAYOUT-TYPE%",
      "stepNextTooltipNext": "aby przejść do kolejnego etapu",
      "stepNextTooltipAdd": "aby dodać sekcję",
      "firstAddExplain": "Pierwsza sekcja to sekcja Start, którą należy postrzegać jako „okładkę” swojej historii. Zdefiniowany tytuł będzie wyświetlony dużą czcionką.",
      "firstAddLeanMore": "Dowiedz się więcej",
      "titlePlaceholder": "Tytuł sekcji..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Tutaj możesz dodać tekst, łącza oraz niewielkie elementy graficzne.",
      "editorActionsTitle": "Działania narracji",
      "editorActionsHelpDescr": "W narracji twórz łącza, które pomogą przedstawić Twoją opowieść. Działanie narracji może odsyłać do innej sekcji lub zmieniać obszar główny. Możesz na przykład skonfigurować działanie, aby przenieść mapę do innej lokalizacji, włączać/wyłączać warstwy mapy lub zmieniać multimedia obszaru głównego na inny obraz, wideo, mapę lub stronę internetową.",
      "mainStageDisabled": "Działania narracji są wyłączone, gdy okno edytora jest zmaksymalizowane."
    },
    "organizePopup": {
      "title": "Organizuj",
      "lblHeader": "Przeciągaj i upuszczaj sekcje, aby zorganizować narrację.",
      "lblColTitle": "Tytuł",
      "lblColPubDate": "Data publikacji",
      "lblColStatus": "Status",
      "checkDisplayReverse": "Wyświetlaj sekcje w odwrotnej kolejności",
      "btnApplyWarning": "Potwierdź usunięcie %NB% sekcji",
      "deleteTooltip": "Usuń",
      "firstSectionExplain": "(Sekcji Start nie można przenieść).",
      "exportMainStage": "Zawartość obszaru głównego",
      "exportPanel": "Zawartość panelu",
      "exportActions": "Działania narracji"
    },
    "exportData": {
      "btn": "Eksportuj zasoby",
      "tooltip": "Dzięki eksportowaniu zawartości możesz przeglądać i utworzyć jej kopię zapasową na wypadek, gdyby została ona przez przypadek usunięta. Wystarczy skopiować zawartość strony i wkleić ją do dowolnego edytora tekstu."
    },
    "help": {
      "lblHelp": "Pomoc",
      "lblAdd": "Dodaj sekcję",
      "lblSettings": "Ustawienia",
      "lblOrga": "Organizuj zawartość",
      "lblEdit": "Edycje",
      "lblPublish": "Udostępnij",
      "lblTips": "Wskazówki",
      "lblMore": "Chcesz mieć więcej możliwości?",
      "lblLink": "Odwiedź witrynę Esri Story Maps.",
      "content1Div1": "Podczas tworzenia opowiadania możesz łączyć różne style. W układzie <strong>%LAYOUT_TITLE%</strong> zwykle znajduje się tekst, obrazy oraz filmy wideo, mapy natomiast są na ogół widoczne w <strong>obszarze głównym</strong>. Jednak aplikacja %TPL_NAME% pozwala również na umieszczenie w obszarze głównym także obrazów obiektów, diagramów i filmów wideo.",
      "content1Div2": "Dodanie sekcji umożliwia personalizację korzystania z aplikacji opowiadania. Możliwe jest dostosowanie aplikacji tak, aby podczas przewijania tekstu w układzie %LAYOUT_TITLE% mapa znajdująca się w obszarze głównym była przesuwana i powiększana do najważniejszych punktów lub automatycznie przełączane były nowe mapy i obrazy, stanowiące kontekst dla przekazywanych treści.",
      "content2Div1": "W Ustawieniach można dokonać zmiany wyglądu aplikacji %TPL_NAME%. Możesz zmienić układ, wybrać inny schemat kolorów, zmienić czcionkę itd.",
      "content2Div2": "Możesz również zmienić logo Esri na logo własnej marki. Możesz też podać witrynę internetową, która zostanie uruchomiona, jeśli czytelnicy klikną Twoje logo, aby uzyskać więcej informacji.",
      "content3Div1": "Zawartość jest podzielona na sekcje. Liczba sekcji, które można dodać jest nieograniczona (sekcje są w postaci niewielkich rozdziałów). Sposób i kolejność prezentacji rozdziałów są bardzo ważne. Na ekranie Organizuj można zmieniać kolejność sekcji lub usuwać je wedle uznania.",
      "content4Div1": "Znaleziono błąd lub konieczna jest zmiana materiału? Bez obaw. Znajdź ikonę edycji, która jest dostępna w całej aplikacji, aby zmodyfikować zasoby. Podczas tworzenia %TPL_NAME% funkcje edycji będą używane wielokrotnie.",
      "content5Div1": "Po zapisaniu aplikacja %TPL_NAME% pozostaje aplikacją prywatną. Aby udostępnić ją innym, należy kliknąć przycisk Udostępnij. Jeśli upublicznisz aplikację %TPL_NAME%, wszyscy będą mogli mieć do niej dostęp.",
      "content5Div2": "W zależności od rodzaju konta istnieje też możliwość udostępnienia aplikacji %TPL_NAME% jedynie osobom w danej instytucji tak, aby osoby trzecie nie miały do niej dostępu.",
      "content6Div1": "Tytuł sekcji Start jest także tytułem Twojego Dziennika; sekcję Start należy postrzegać jako „okładkę” swojego opowiadania. Tytuł sekcji Start będzie widoczny, gdy użytkownicy będą poruszali się po Dzienniku.",
      "content6Div2": "%LAYOUT_TITLE% nie musi mieć wyłącznie formy tekstowej, pomyśl o dodaniu zdjęć, dzięki którym ożywisz opowiadanie oraz o podzieleniu długiego tekstu!"
    },
    "landing": {
      "lblAdd": "Jak chcesz nazwać Dziennik mapy?",
      "phAdd": "Wpisz tytuł...",
      "lblOR": "Lub",
      "lblHelp": "Dowiedz się więcej",
      "quote0": "Zawsze mamy możliwość opowiedzenia historii, która może przenieść odbiorców w nieznane miejsca.",
      "quote1": "Tworzenie ciekawych narracji to najbardziej efektywny sposób przekazywania swoich pomysłów w dzisiejszym świecie.",
      "quote2": "Historie przez nas opowiadane dosłownie mają wpływ na świat. Chcąc zmieniać otaczający nas świat, powinniśmy dostosować sposoby przekazywania narracji. Dotyczy to zarówno osób, jak i instytucji.",
      "quote3": "Narracja — najbardziej efektywny sposób przekazywania informacji.",
      "quote4": "Ludzie nie chcą kolejnych informacji. Mają powyżej uszu informacji. Chcą wiary, wiary w Ciebie, Twoje cele, Twój sukces i w opowiadaną przez Ciebie historię.",
      "quote5": "Naprawdę wierzę, że ludzie poszukują historii, które rzeczywiście coś znaczą — inspirują, dają się uogólnić i pokazują rozwiązania problemów.",
      "quote6": "Jeśli chcesz wpłynąć na osobę lub grupę i wnieść jakąś wartość w ich życie codzienne, opowiedz im ciekawą historię.",
      "quote7": "Kiedy mi opowiadasz — to esej. Kiedy pokazujesz — to coś więcej, to narracja.",
      "quote8": "Jeśli nie rozpoznajesz drzew, możesz zgubić drogę w lesie, ale jeśli nie poznajesz opowieści i doświadczeń innych ludzi, możesz zagubić się w życiu.",
      "quote9": "Narracje to kreatywne pokazanie samego życia poprzez przekazanie własnych doświadczeń w formie prostych opowieści, jasnych i bardziej zrozumiałych dla odbiorców. Stają się one wartościową walutą w kontaktach międzyludzkich.",
      "quote10": "Brak możliwości efektywnego przekazywania informacji i wiedzy jest jednym z większych problemów jakich doświadczamy współcześnie.",
      "quote11": "Być może narracje są po prostu danymi, które mają duszę.",
      "quote12": "Narracje należy traktować jako ważne narzędzie w przekazywaniu istotnych informacji także w zarządzaniu.",
      "quote13": "Istotą narracji jest to, że poza przekazywaną treścią skłania do refleksji."
    },
    "firstAddSplash": {
      "thisis": "To jest",
      "lblMain": "To jest %BR% obszar główny"
    }
  }
});