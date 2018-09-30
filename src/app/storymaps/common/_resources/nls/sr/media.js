define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Mediji",
      "lblSelect2": "Sadržaj",
      "lblMap": "Mapa",
      "lblImage": "Snimak",
      "lblVideo": "Video zapis",
      "lblExternal": "Veb stranica",
      "lblUpload": "Otpremi",
      "lblLink": "Link",
      "disabled": "Ova funkcija je onemogućena od strane administratora",
      "userLookup": "Učitaj albume",
      "notImplemented": "Još nije primenjeno.",
      "noData": "Nijedan javni album nije pronađen",
      "thirdPartyTerms": "Korišćenjem usluge treće strane prihvatate odgovarajuće uslove korišćenja usluge: "
    },
    "imageSelector": {
      "lblStep1": "Odaberite servis",
      "lblStep2": "Izaberite medije",
      "lblStep3": "Konfiguriši"
    },
    "imageSelectorHome": {
      "explain": "Učitajte snimke sa društvenih medija, <br /> ili direktno sa URL adrese"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "potražite sliku",
      "lblDrop": "Otpustite sliku ovde ili",
      "infoUpload": "Slike se čuvaju na ArcGIS nalog i dostupne su samo u okviru priče.",
      "warningFileTypes": "Snimak može da bude .jpg, .png, .gif ili .bmp",
      "warningOneFile": "U datom trenutku je moguće otpremanje samo jednog snimka.",
      "warningFileSize": "Snimak mora biti manji od 10 MB.",
      "tooltipRemove": "Izbrišite ovu nekorišćenu sliku sa ArcGIS naloga. <br> (Moraćete ponovo da je postavite ako ponovo poželite da je upotrebite.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Korisničko ime",
      "signInMsg2": "Korisnik nije pronađen",
      "loadingFailed": "Učitavanje nije uspelo"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-pošta ili Google ID",
      "signInMsg2": "Nalog nije pronađen",
      "howToFind": "Kako da pronađete ID naloga za stranicu Picasa",
      "howToFind2": "Kopirajte cifre između prvog i drugog znaka „/” na bilo kojoj Picasa stranici"
    },
    "videoSelectorCommon": {
      "check": "Proverite",
      "notFound": "Video zapis nije pronađen",
      "found": "Video zapis je pronađen",
      "select": "Izaberite video zapis"
    },
    "videoSelectorHome": {
      "other": "Ostalo"
    },
    "videoSelectorYoutube": {
      "url": "Link Youtube video snimka",
      "pageInputLbl": "Korisničko ime",
      "lookupMsgError": "Korisnik nije pronađen",
      "howToFind": "Kako da pronađete YouTube korisničko ime",
      "howToFind2": "Korisničko ime je prikazano ispod video zapisa",
      "found": "Pronađeno",
      "noData": "Nijedan javni video zapis nije pronađen",
      "videoNotChecked": "Video zapis nije proveren na stranici You Tube ali adresa deluje dobro.",
      "checkFailedAPI": "Provera na YouTube stranici nije uspela, proverite API ključ stranice YouTube."
    },
    "videoSelectorVimeo": {
      "url": "Link Vimeo video snimka"
    },
    "videoSelectorOther": {
      "explain1": "Ova mapa priče ne može da reprodukuje neobrađene video datoteke (npr. avi, mpeg) ali može da reprodukuje hostovane video zapise koje imaju ugrađene programe za reprodukciju (npr. Youtube ili Vimeo).",
      "explain2": "Većina usluga za hostovanje video zapisa nudi ovu funkciju. Pronađite opciju za umetanje video zapisa, kopirajte priloženi kod i dodajte ga u priču pomoću %WEBPAGE% opcije za sadržaj.",
      "explain3": "Pored toga, možete i sami da hostujete video uz HTML stranicu koja koristi video plejer kao što je %EXAMPLE%. Zatim možete da dodate URL adresu te HTML stranice u priču kao %WEBPAGE%.",
      "webpage": "Veb stranica"
    },
    "webpageSelectorHome": {
      "lblUrl": "Link veb stranice",
      "lblEmbed": "Ugradi kôd",
      "lblMustUseHTTPS": "Linkovi ka veb sadržaju moraju da počinju sa HTTPS",
      "lblOR": "ILI",
      "lblError1": "Greška, obrišite jedno od dva polja za unos.",
      "lblError2": "Ugrađeni kôd može da sadrži samo jedan %IFRAMETAG%",
      "configure": "Konfiguriši"
    },
    "mediaConfigure": {
      "lblURL": "Link snimka",
      "lblURLPH": "Link bi trebalo da se završava sa .jpg, .png, .gif ili .bmp",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Ovaj snimak nije validan. Odredite direktnu vezu na datoteku snimka (URL adresa se obično završava sa .jpg ili .png). Veze ka veb stranici koja sadrži snimak ne rade.",
      "lblURLErrorHTTPS": "Ovaj link snimka nije validan. URL mora da počinje sa HTTPS i da se završava sa podržanom ekstenzijom datoteke snimka (.jpg, .png, .gif, .bmp).",
      "lblURLCheck": "Proveravanje snimka...",
      "lblLabel": "Natpis snimka",
      "lblLabel1": "Natpis",
      "lblLabel2": "Zadrži pokazivač iznad teksta",
      "lblLabel3": "Ništa",
      "lblLabelPH": "Unesite neki tekst...",
      "lblMaximize": "Uključite dugme za uvećanje u uglu snimka",
      "lblMaximizeHelp": "Preporučuje se samo za fotografije visokog kvaliteta",
      "lblPosition": "Pozicija",
      "lblPosition1": "Centar",
      "lblPosition2": "Popuna",
      "lblPosition3": "Uklapanje",
      "lblPosition4": "Rastezanje",
      "lblPosition5": "Prilagođeno",
      "lblURLHelp": "Link snimka mora da počinje sa HTTPS.<br><br>Za najbolje rezultate, snimci bi trebalo da budu manji od 400 KB. Koristite komprimovane JPG snimke pri kvalitetu od 80% i preporučenim širinama: 2000 piksela za centralni deo ili narativni panel sa dugmetom za uvećavanje, 1000 piksela za narativni panel bez dugmeta za uvećavanje.<br><br>Ako se linkovani snimak sporo iscrtava, otpremite ga u svoju priču za bolje rezultate.",
      "tooltipDimension": "Vrednost može da bude određena u „px“ ili „%“",
      "tooltipDimension2": "Vrednost mora da bude određena u „px“ ili „%“",
      "lblPosition2Explain": "(rezanje moguće)",
      "lblPosition3Explain": "(rezanje nije moguće)",
      "lblPosition3Explain2": "(širina će se uvek uklopiti u tablu)",
      "lblPosition4Explain": "(izobličenje je moguće)",
      "unloadLbl": "Poništi učitavanje kada čitalac napusti stranicu",
      "unloadHelp": "Ako veb stranica ima sadržaje audio ili video formata, označite ovu opciju kao potvrđenu da zaustavite reprodukciju tog sadržaja kada čitalac napusti stranicu. Označite je kao nepotvrđenu da zvuk nastavi sa reprodukcijom kako čitalac „ide“ kroz priču.<br />Ako je veb stranica aplikacija, označite ovu opciju kao nepotvrđenu tako da se priča ne učitava ponovo kada se čitalac vrati na nju.",
      "embedProtocolLabel": "Učitaj stranicu preko bezbedne veze (HTTPS)",
      "embedProtocolWarning1": "Ako se ova stranica ne učitava u vašoj priči, može da bude ugrađena iz veb sigurnosnih razloga. Kao alternativu, dodajte link u svom narativu da biste otvorili stranicu u novoj kartici pregledača.",
      "embedProtocolWarning2": "Ako se ova stranica ne učitava u vašoj priči, poništite izbor ove opcije i pokušajte ponovo. Ako se stranica i dalje ne učitava, može da bude ugrađena iz veb sigurnosnih razloga. Kao alternativu, dodajte link u svom narativu da biste otvorili stranicu u novoj kartici pregledača.",
      "learn": "Saznaj više",
      "lblAltText": "Alternativni tekst",
      "placeholderAltText": "Unesite opis ovih medija za osobe oštećenog vida...",
      "tooltipAltText": "Unesite opis sadržaja ovih medija koji će koristiti pomoćne tehnologije, kao što je softver čitača ekrana. Opis je opcioni, ali se preporučuje radi ispunjavanja uputstava za veb pristupačnost poput WCAG i Odeljak 508."
    },
    "editorActionGeocode": {
      "lblTitle": "Locirajte adresu ili mesto",
      "mapMarkerExplain": "Korisnik će videti označivač mape kada klikne na link"
    },
    "editorActions": {
      "navigate": "Posetite drugi odeljak",
      "remove": "Ukloni radnju",
      "preview": "Pregledaj radnju"
    },
    "editorActionMedia": {
      "lblTitle": "Promenite sadržaj centralnog dela"
    },
    "editorInlineMedia": {
      "lblTitle": "Umetnite snimak, video zapis ili veb stranicu"
    }
  }
});