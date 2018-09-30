define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Conţinut",
      "lblMap": "Hartă",
      "lblImage": "Imagine",
      "lblVideo": "Video",
      "lblExternal": "Pagină web",
      "lblUpload": "Încărcare",
      "lblLink": "Link",
      "disabled": "Acest obiect spaţial a fost dezactivat de administrator",
      "userLookup": "Încărcare albume",
      "notImplemented": "Neimplementat încă.",
      "noData": "Nu a fost găsit niciun album public",
      "thirdPartyTerms": "Utilizând un serviciu terț, sunteți de acord cu termenii săi asociați serviciilor: "
    },
    "imageSelector": {
      "lblStep1": "Alegere serviciu",
      "lblStep2": "Selectare media",
      "lblStep3": "Configurare"
    },
    "imageSelectorHome": {
      "explain": "Încărcare imagini din servicii de socializare <br /> sau direct dintr-un URL"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "navigare la o imagine",
      "lblDrop": "Fixaţi o imagine aici sau",
      "infoUpload": "Imaginile vor fi stocate în contul ArcGIS şi vor fi accesibile doar în relatarea dvs.",
      "warningFileTypes": "Imaginile pot fi .jpg, .png, .gif sau .bmp",
      "warningOneFile": "Se poate încărca o singură imagine în același timp.",
      "warningFileSize": "Imaginea trebuie să aibă mai puțin de 10 MB.",
      "tooltipRemove": "Ştergeţi această imagine neutilizată din contul ArcGIS. <br> (Va trebui să o încărcaţi din nou dacă decideţi să o utilizaţi mai târziu.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nume utilizator",
      "signInMsg2": "Utilizator negăsit",
      "loadingFailed": "Încărcare eşuată"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-mail sau ID Google",
      "signInMsg2": "Cont negăsit",
      "howToFind": "Găsirea unui ID Picasa",
      "howToFind2": "Copiaţi cifrele dintre primul şi al doilea caracter „/” al oricărei pagini Picasa"
    },
    "videoSelectorCommon": {
      "check": "Bifaţi",
      "notFound": "Clip video negăsit",
      "found": "Clip video găsit",
      "select": "Selectaţi acest clip video"
    },
    "videoSelectorHome": {
      "other": "Altul"
    },
    "videoSelectorYoutube": {
      "url": "Link video YouTube",
      "pageInputLbl": "Nume utilizator",
      "lookupMsgError": "Utilizator negăsit",
      "howToFind": "Cum găsiţi un nume de utilizator YouTube",
      "howToFind2": "Numele de utilizator este afişat sub videoclipuri",
      "found": "Găsit",
      "noData": "Nu a fost găsit niciun videoclip public",
      "videoNotChecked": "Clipul video nu a fost verificat pe YouTube, dar adresa pare bună.",
      "checkFailedAPI": "Verificarea YouTube a eşuat, verificaţi cheia API de YouTube."
    },
    "videoSelectorVimeo": {
      "url": "Link video Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Această hartă informativă nu poate reda fişiere video brute (de ex., avi, mpeg), însă poate reda fişiere video găzduite cu aplicaţii de redare încorporate (de ex., YouTube sau Vimeo).",
      "explain2": "Majoritatea serviciilor de găzduire video oferă această funcţie. Găsiţi opţiunea de a încorpora clipul video, copiaţi codul furnizat şi adăugaţi-l la relatarea dvs. utilizând opţiunea de conţinut %WEBPAGE%.",
      "explain3": "Alternativ, puteţi să găzduiţi voi înşivă clipul video, împreună cu o pagină HTML care utilizează o aplicaţie de redare video, cum ar fi %EXAMPLE%. Apoi, adăugaţi URL-ul respectivei pagini HTML la relatarea dvs., sub forma unei %WEBPAGE%.",
      "webpage": "Pagină web"
    },
    "webpageSelectorHome": {
      "lblUrl": "Link pagină web",
      "lblEmbed": "Încorporare cod",
      "lblMustUseHTTPS": "Link-urile către conţinut web trebuie să înceapă cu HTTPS",
      "lblOR": "SAU",
      "lblError1": "Eroare, eliminaţi unul sau două câmpuri de intrare.",
      "lblError2": "Codul încorporat poate conţine numai un %IFRAMETAG%",
      "configure": "Configurare"
    },
    "mediaConfigure": {
      "lblURL": "Link imagine",
      "lblURLPH": "Linkul trebuie să se termine cu .jpg, .png, .gif sau .bmp",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Această imagine nu pare validă. Specificaţi un link direct către un fişier imagine (adresa URL se va termina de regulă cu .jpg sau .png). Linkurile către o pagină web care conţine o imagine nu vor funcţiona.",
      "lblURLErrorHTTPS": "Acest link de imagine nu este valid. Adresa URL trebuie să înceapă cu HTTPS şi să se termine cu o extensie de fişier imagine acceptată (.jpg, .png, .gif, .bmp).",
      "lblURLCheck": "Se verifică imaginea...",
      "lblLabel": "Comentariu imagine",
      "lblLabel1": "Subtitlu",
      "lblLabel2": "Text informativ",
      "lblLabel3": "Niciunul",
      "lblLabelPH": "Introduceţi text...",
      "lblMaximize": "Includeţi un buton de maximizare în colţul imaginii",
      "lblMaximizeHelp": "Recomandat numai pentru fotografii la calitate ridicată",
      "lblPosition": "Poziţie",
      "lblPosition1": "Centru",
      "lblPosition2": "Umplere",
      "lblPosition3": "Potrivire",
      "lblPosition4": "Întindere",
      "lblPosition5": "Particularizat",
      "lblURLHelp": "Link-ul imaginii trebuie să înceapă cu HTTPS.<br><br>Pentru cele mai bune rezultate, imaginile trebuie să aibă mai puţin de 400 KB. Utilizaţi imagini JPG comprimate la calitate de 80 % şi următoarele lăţimi de imagini recomandate: 2.000 de pixeli pentru scena principală sau panoul narativ cu buton de maximizare, 1.000 de pixeli pentru panoul narativ fără buton de maximizare.<br><br>Dacă o imagine conectată este trasată lent, încărcaţi-o în povestea dvs. pentru rezultate mai bune.",
      "tooltipDimension": "Valoarea poate fi specificată în „px” sau „%”",
      "tooltipDimension2": "Valoarea trebuie să fie specificată în „px”",
      "lblPosition2Explain": "(poate fi decupat)",
      "lblPosition3Explain": "(nu poate fi decupat)",
      "lblPosition3Explain2": "(lăţimea va corespunde întotdeauna panoului)",
      "lblPosition4Explain": "(poate fi distorsionat)",
      "unloadLbl": "Se revocă încărcarea când cititorul trece în altă secţiune",
      "unloadHelp": "Dacă pagina web conţine materiale audio sau video, păstraţi această opţiune bifată pentru a opri redarea în momentul în care cititorul trece în altă secţiune. Debifaţi-o, de exemplu, pentru a continua redarea unei melodii când cititorul avansează în jurnal.<br />Dacă pagina web este o aplicaţie, debifaţi această opţiune pentru ca povestea să nu fie nevoită să se încarce din nou când cititorul revine în secţiunea respectivă.",
      "embedProtocolLabel": "Încărcaţi pagina printr-o conexiune securizată (HTTPS)",
      "embedProtocolWarning1": "Dacă pagina nu se încarcă în povestea dvs., nu poate fi încorporată din motive de securitate web. Ca alternativă, adăugaţi un link la naraţiunea dvs. pentru a deschide pagina într-o filă de browser nouă.",
      "embedProtocolWarning2": "Dacă pagina nu se încarcă în povestea dvs., debifaţi această opţiune şi încercaţi din nou. Dacă pagina tot nu se încarcă, nu poate fi încorporată din motive de securitate web. Alternativ, adăugaţi un link la naraţiunea dvs. pentru a deschide pagina într-o filă de browser nouă.",
      "learn": "Aflaţi mai multe",
      "lblAltText": "Text alternativ",
      "placeholderAltText": "Introduceţi o descriere a mediilor pentru cititorii cu probleme de vedere...",
      "tooltipAltText": "Oferiţi o descriere a conţinutului mediilor care va fi folosită de tehnologiile de asistenţă, cum ar fi programul de citire a ecranului. Descrierea este opţională, dar recomandată pentru a respecta liniile directoare privind accesibilitatea, cum ar fi WCAG şi Secţiunea 508."
    },
    "editorActionGeocode": {
      "lblTitle": "Localizaţi o adresă sau un loc",
      "mapMarkerExplain": "Utilizatorul va vedea un marcaj pe hartă când va face clic pe link"
    },
    "editorActions": {
      "navigate": "Navigare la o altă secţiune",
      "remove": "Eliminare acţiune",
      "preview": "Previzualizare acţiune"
    },
    "editorActionMedia": {
      "lblTitle": "Modificare conţinut pentru Nivelul principal"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserare imagine, videoclip sau pagină web"
    }
  }
});