define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Média",
      "lblSelect2": "Tartalom",
      "lblMap": "Térkép",
      "lblImage": "Kép",
      "lblVideo": "Videó",
      "lblExternal": "Weboldal",
      "lblUpload": "Feltöltés",
      "lblLink": "Hivatkozás",
      "disabled": "Ezt a vektoros elemet letiltotta az adminisztrátor",
      "userLookup": "Albumok betöltése",
      "notImplemented": "Még nincs bevezetve.",
      "noData": "Nem található nyilvános album",
      "thirdPartyTerms": "Harmadik fél szolgáltatását használva Ön elfogadja a szolgáltatás feltételeit: "
    },
    "imageSelector": {
      "lblStep1": "Válassza ki a szolgáltatást",
      "lblStep2": "Válassza ki a médiát",
      "lblStep3": "Konfigurálás"
    },
    "imageSelectorHome": {
      "explain": "Töltsön fel képeket a közösségi médiából, <br /> vagy közvetlenül egy URL-címről"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "tallózással keressen egy képet",
      "lblDrop": "Tegyen ide egy képet vagy",
      "infoUpload": "A képek az ArcGIS-fiókjában lesznek tárolva, és csak a történetében lesznek elérhetők.",
      "warningFileTypes": "A kép lehet .jpg, .png, .gif vagy .bmp",
      "warningOneFile": "Egyszerre csak egy kép tölthető fel.",
      "warningFileSize": "A kép méretének 10 MB-nál kisebbnek kell lennie.",
      "tooltipRemove": "Törölje ezt a nem használt képet az ArcGIS-fiókjából. <br> (Ha később mégis használni kívánja, újból fel kell majd töltenie.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Felhasználónév",
      "signInMsg2": "A felhasználó nem található",
      "loadingFailed": "Nem sikerült a betöltés"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-mail vagy Google-azonosító",
      "signInMsg2": "A fiók nem található",
      "howToFind": "A Picasa-azonosító megkeresése",
      "howToFind2": "Másolja ki a Picasa-oldal első és második „/” karaktere közötti számjegyeket"
    },
    "videoSelectorCommon": {
      "check": "Ellenőrzés",
      "notFound": "A videó nem található",
      "found": "Sikerült megtalálni a videót",
      "select": "A videó kiválasztása"
    },
    "videoSelectorHome": {
      "other": "Egyéb"
    },
    "videoSelectorYoutube": {
      "url": "YouTube-videó hivatkozása",
      "pageInputLbl": "Felhasználónév",
      "lookupMsgError": "A felhasználó nem található",
      "howToFind": "A YouTube-felhasználónév megkeresése",
      "howToFind2": "A felhasználónév a videók alatt jelenik meg",
      "found": "Sikerült megtalálni",
      "noData": "Nincsenek nyilvános videók",
      "videoNotChecked": "A YouTube nem ellenőrizte ezt a videót, de a címe jónak tűnik.",
      "checkFailedAPI": "Nem sikerült a YouTube ellenőrzése, ellenőrizze a YouTube API kulcsát."
    },
    "videoSelectorVimeo": {
      "url": "Vimeo-videó hivatkozása"
    },
    "videoSelectorOther": {
      "explain1": "Ez a story map nem tud nyers videoformátumokat (például avi- és mpeg-fájlokat) lejátszani, de a beépített lejátszók (például a YouTube vagy a Vimeo) használatával le tudja játszani a tárolt videókat.",
      "explain2": "A legtöbb videotárhely-szolgáltatás kínálatában szerepel ez a funkció. Keresse meg a videó beágyazási lehetőségét, másolja ki a megadott kódot, és vegye fel a történetébe a %WEBPAGE% tartalmi kapcsoló használatával.",
      "explain3": "Másik lehetőségként Ön is megoldhatja a videó tárolását egy HTML-oldallal, amely egy videolejátszót használ, például a(z) %EXAMPLE% lejátszót. Ezután felveheti a HTML-oldal URL-címét a történetbe %WEBPAGE% elemként.",
      "webpage": "Weboldal"
    },
    "webpageSelectorHome": {
      "lblUrl": "Weboldal hivatkozása",
      "lblEmbed": "Kód beágyazása",
      "lblMustUseHTTPS": "A hivatkozásnak HTTPS-sel kell kezdődnie",
      "lblOR": "VAGY",
      "lblError1": "Hiba, törölje a két beviteli mező egyikének tartalmát.",
      "lblError2": "A beágyazási kód csak egy %IFRAMETAG% elemet tartalmazhat",
      "configure": "Konfigurálás"
    },
    "mediaConfigure": {
      "lblURL": "Kép hivatkozása",
      "lblURLPH": "A hivatkozásnak .jpg, .png, .gif vagy .bmp kiterjesztéssel kell végződnie",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Ez a kép nem érvényes. Adjon egy képfájlra mutató közvetlen hivatkozást (az URL-címnek általában .jpg vagy .png kiterjesztéssel kell végződnie). A képet tartalmazó weboldalra mutató hivatkozások nem fognak működni.",
      "lblURLErrorHTTPS": "A képhivatkozás nem érvényes. Az URL-nek HTTPS-sel kell kezdődnie, és valamelyik támogatott fájlkiterjesztésre (.jpg, .png, .gif, .bmp) kell végződnie.",
      "lblURLCheck": "Kép ellenőrzése...",
      "lblLabel": "Képaláírás",
      "lblLabel1": "Képaláírás",
      "lblLabel2": "Rámutatáskori szöveg",
      "lblLabel3": "Nincs",
      "lblLabelPH": "Adjon meg szöveget...",
      "lblMaximize": "Helyezzen el egy maximális méretre állító gombot a kép sarkában",
      "lblMaximizeHelp": "Csak kiváló minőségű képekhez ajánlott",
      "lblPosition": "Helyzet",
      "lblPosition1": "Középen",
      "lblPosition2": "Kitöltés",
      "lblPosition3": "Illesztés",
      "lblPosition4": "Nyújtás",
      "lblPosition5": "Egyéni",
      "lblURLHelp": "A képhivatkozásnak HTTPS-sel kell kezdődnie.<br><br>A legjobb eredmény érdekében a képek mérete ne legyen nagyobb, mint 400 KB. Használjon tömörített JPG-képeket 80%-os minőséggel és a következő ajánlott képszélességekkel: 2000 képpont a fő szakaszhoz vagy a maximális méretre állító gombot tartalmazó történetpanelhez, 1000 képpont a maximális méretre állító gomb nélküli történetpanelhez.<br><br>Ha egy hivatkozott kép lassan jelenik meg, töltse fel a történetbe a legjobb eredmény érdekében.",
      "tooltipDimension": "Az érték megadható képpontban vagy %-ban",
      "tooltipDimension2": "Az értéket képpontban kell megadni",
      "lblPosition2Explain": "(levágás lehet)",
      "lblPosition3Explain": "(nincs levágás)",
      "lblPosition3Explain2": "(a szélesség mindig kitölti a panelt)",
      "lblPosition4Explain": "(torzulhat)",
      "unloadLbl": "Eltávolítás, amikor az olvasó továbblép",
      "unloadHelp": "Ha a weboldalon hangfájl vagy videó található, adja meg ezt a beállítást, hogy a tartalom lejátszása leálljon, amikor az olvasó elhagyja a weboldalt. Ezt a beállítást akkor kapcsolhatja ki, amikor például végig zenét szeretne lejátszani, miközben az olvasó halad előre a történetben.<br />Ha a weboldal egy alkalmazás, kapcsolja ki ezt a beállítást, hogy a történet ne töltődjön be újra, amikor az olvasó visszatér a weboldalra.",
      "embedProtocolLabel": "Oldal betöltése biztonságos kapcsolaton (HTTPS) keresztül",
      "embedProtocolWarning1": "Ha az oldalon nem töltődik be a történet, az azt jelenti, hogy webbiztonsági okok miatt nem ágyazható be. Másik megoldásként helyezzen el egy hivatkozást a történetben, amellyel az oldal új böngészőlapon nyitható meg.",
      "embedProtocolWarning2": "Ha az oldalon nem töltődik be a történet, kapcsolja ki ezt a beállítást, és próbálja meg újra. Ha az oldal továbbra sem töltődik be, az azt jelenti, hogy webbiztonsági okok miatt nem ágyazható be. Másik megoldásként helyezzen el egy hivatkozást a történetben, amellyel az oldal új böngészőlapon nyitható meg.",
      "learn": "További információk",
      "lblAltText": "Helyettesítő szöveg",
      "placeholderAltText": "Adja meg a média leírását a gyengén látó olvasók számára...",
      "tooltipAltText": "Adja meg a médiatartalom leírását, amelyet a kisegítő technológiák fognak használni, például a képernyőolvasó szoftverek. A leírás megadása nem kötelező, de ajánlott a webes hozzáférésre vonatkozó irányelveknek való megfelelés érdekében (ilyen például a WCAG és az 508. szakasz)."
    },
    "editorActionGeocode": {
      "lblTitle": "Cím vagy hely megkeresése",
      "mapMarkerExplain": "A felhasználó egy térképjelölőt fog látni, amikor a hivatkozásra kattint"
    },
    "editorActions": {
      "navigate": "Navigálás egy másik szekcióhoz",
      "remove": "Művelet eltávolítása",
      "preview": "Művelet előnézete"
    },
    "editorActionMedia": {
      "lblTitle": "A fő szakasz tartalmának módosítása"
    },
    "editorInlineMedia": {
      "lblTitle": "Kép, videó vagy weboldal beszúrása"
    }
  }
});