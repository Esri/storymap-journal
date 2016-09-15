define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Mediji",
      "lblSelect2": "Sadržaj",
      "lblMap": "Karta",
      "lblImage": "Slika",
      "lblVideo": "Videozapis",
      "lblExternal": "Web-stranica",
      "disabled": "Administrator je onemogućio ovu značajku.",
      "url": "Ručni unos web-adrese slike",
      "userLookup": "Učitaj albume",
      "notImplemented": "Još nije implementirano.",
      "noData": "Nije pronađen javni album"
    },
    "imageSelector": {
      "lblStep1": "Odaberite uslugu",
      "lblStep2": "Odaberite medij",
      "lblStep3": "Konfiguriraj"
    },
    "imageSelectorHome": {
      "explain": "Učitajte slike s društvenih medija, <br /> ili izravno s URL-a"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Korisničko ime",
      "signInMsg2": "Korisnik nije pronađen",
      "loadingFailed": "Učitavanje nije uspješno"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Korisnik Facebooka",
      "rightHeader": "Stranica Facebooka",
      "pageExplain": "Stranica na Facebooku javni je brand/proizvod ili poznati subjekt kao <b>esrigis</b>. Možete vidjeti naziv stranice nakon '/' na URL-u stranice.",
      "pageInputLbl": "Naziv stranice",
      "lookupMsgError": "Stranica nije pronađena",
      "warning": "Prekinuta je podrška za Facebook, ${learn}.",
      "learn": "saznaj više"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "ID za e-poštu ili Picasu",
      "signInMsg2": "Račun nije pronađen",
      "howToFind": "Kako pronaći ID za Picasu",
      "howToFind2": "Kopirajte znamenke između prvog i posljednjeg znaka „/” bilo koje stranice Picasa"
    },
    "videoSelectorCommon": {
      "check": "Provjera",
      "notFound": "Videozapis nije pronađen",
      "found": "Videozapis je pronađen",
      "select": "Odaberite ovaj videozapis"
    },
    "videoSelectorHome": {
      "other": "Ostalo"
    },
    "videoSelectorYoutube": {
      "url": "URL videozapisa na Youtubeu",
      "pageInputLbl": "Korisničko ime",
      "lookupMsgError": "Korisnik nije pronađen",
      "howToFind": "Kako pronaći YouTube korisničko ime",
      "howToFind2": "Korisničko ime prikazano je ispod videozapisa",
      "found": "Pronađeno",
      "noData": "Nije pronađen nijedan javni videozapis",
      "videoNotChecked": "Videozapis nije pregledan na YouTubeu, ali adresa izgleda ispravno.",
      "checkFailedAPI": "Provjera na YouTubeu nije uspješna, provjerite YouTube API ključ."
    },
    "videoSelectorVimeo": {
      "url": "URL videozapisa s Vimea"
    },
    "videoSelectorOther": {
      "explain1": "Priča ne može reproducirati neobrađene videozapise (npr. avi, mpeg), ali može reproducirati datoteke videozapisa s ugrađenim reproduktorima (npr. YouTube ili Vimeo).",
      "explain2": "Većina mrežnih hosting usluga videozapisa nudi tu značajku, morate pronaći opciju za umetanje videozapisa, kopirati dobiveni kod i upotrijebiti %WEBPAGE%.",
      "explain3": "Ako želite sami hostirati videozapis, možete napraviti HTML stranicu koja će upotrebljavati reproduktor videozapisa kao što je %EXAMPLE%, hostirati tu stranicu i također upotrijebiti %WEBPAGE%.",
      "webpage": "Značajka web-stranice"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL web-stranice",
      "lblEmbed": "Ugradi kod",
      "lblOR": "ILI",
      "lblError1": "Pogreška, očistite jedno od dvaju polja za unos.",
      "lblError2": "Ugrađeni kod može sadržavati samo jednu %IFRAMETAG%",
      "configure": "Konfiguriraj"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "URL slike treba početi s http:// i završiti s .jpg ili .png",
      "lblURLError": "Čini se da ova slika nije ispravna. Odredite izravnu poveznicu do slikovne datoteke (vaš URL obično završava s .jpg ili .png). Poveznice na web-stranicu koja sadrži slike neće raditi.",
      "lblURLCheck": "Provjera slike...",
      "lblLabel": "Natpis slike",
      "lblLabel1": "Natpis",
      "lblLabel2": "Lebdeći tekst",
      "lblLabel3": "Nema",
      "lblLabelPH": "Unesite tekst...",
      "lblMaximize": "Uključite gumb za povećavanje u kut slike",
      "lblMaximizeHelp": "Preporučeno samo za fotografije visoke kvalitete",
      "lblPosition": "Položaj",
      "lblPosition1": "Središte",
      "lblPosition2": "Ispuni",
      "lblPosition3": "Prilagodi",
      "lblPosition4": "Rastegni",
      "lblPosition5": "Prilagođeno",
      "tooltipDimension": "Vrijednost se može odrediti u „px” ili „%”",
      "tooltipDimension2": "Vrijednost se može odrediti u „px”",
      "lblPosition2Explain": "(može se obrezati)",
      "lblPosition3Explain": "(neće se obrezati)",
      "lblPosition3Explain2": "(širina će uvijek stati na ploču)",
      "lblPosition4Explain": "(može se iskriviti)",
      "unloadLbl": "Uklonite kada se čitatelj udalji",
      "unloadHelp": "Ako web-stranica sadrži zvučne medije ili videozapise, označite ovu opciju da biste zaustavili reprodukciju sadržaja kada se čitatelj udalji. Odznačite je, primjerice, ako želite da svira pozadinska glazba dok čitatelj napreduje kroz priču.<br />Ako je web-stranica aplikacija, odznačite ovu opciju tako da se priča ne učita ponovno kad se čitatelj vrati na nju.",
      "embedProtocolLabel": "Učitajte stranicu preko sigurne veze (HTTPS)",
      "embedProtocolWarning1": "Vaša je priča konfigurirana tako da se učita preko sigurne veze (https), stoga web-stranice prikazane u priči također moraju koristiti sigurnu vezu. Ako se stranica ne učita, do toga je možda došlo jer nije dostupna preko sigurne veze ili se ne može uključiti u vašu priču (neka web-mjesta to ograničavaju). Možda ćete trebati stvoriti hipervezu kako biste otvorili stranicu u novoj kartici preglednika.",
      "embedProtocolWarning2": "Vaša je priča konfigurirana tako da se učita preko nesigurne veze (http), stoga možete odabrati učitavanje ove stranice preko sigurne (preporučeno) ili nesigurne veze. Ako se stranica ne učita, do toga je možda došlo jer ne podržava vrstu veze koju ste odabrali ili se ne može uključiti u vašu priču (neka web-mjesta to ograničavaju). Možda ćete trebati stvoriti hipervezu kako biste otvorili stranicu u novoj kartici preglednika."
    },
    "editorActionGeocode": {
      "lblTitle": "Pronađite adresu ili mjesto",
      "mapMarkerExplain": "Korisnik će vidjeti oznaku na karti kada klikne na poveznicu"
    },
    "editorActionMedia": {
      "lblTitle": "Promijenite sadržaj glavnog prozora"
    },
    "editorInlineMedia": {
      "lblTitle": "Umetnite sliku, videozapis ili web-stranicu"
    }
  }
});