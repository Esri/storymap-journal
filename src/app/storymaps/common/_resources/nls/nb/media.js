define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Medier",
      "lblSelect2": "Innhold",
      "lblMap": "Kart",
      "lblImage": "Bilde",
      "lblVideo": "Video",
      "lblExternal": "Webside",
      "lblUpload": "Opplasting",
      "lblLink": "Kobling",
      "disabled": "Administratoren har deaktivert denne funksjonen",
      "userLookup": "Last inn albumer",
      "notImplemented": "Ikke implementert ennå.",
      "noData": "Finner ingen offentlige albumer",
      "thirdPartyTerms": "Når du bruker en tredjepartstjeneste, godtar du dennes tjenestevilkår: "
    },
    "imageSelector": {
      "lblStep1": "Velg tjeneste",
      "lblStep2": "Velg medier",
      "lblStep3": "Konfigurer"
    },
    "imageSelectorHome": {
      "explain": "Last inn bilder fra sosiale medier <br /> eller direkte fra en URL-adresse"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "bla etter et bilde",
      "lblDrop": "Slipp et bilde her eller",
      "infoUpload": "Bildene lagres i ArcGIS-kontoen og er kun tilgjengelige inne i historien.",
      "warningFileTypes": "Bildet kan være JPG, PNG, GIF eller BMP",
      "warningOneFile": "Bare ett bilde kan lastes opp om gangen.",
      "warningFileSize": "Bildet må være mindre enn 10 MB.",
      "tooltipRemove": "Slett dette ubrukte bildet fra ArcGIS-kontoen. <br> (Du må laste det opp på nytt hvis du bestemmer deg for å bruke det senere.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Brukernavn",
      "signInMsg2": "Finner ikke bruker",
      "loadingFailed": "Innlasting mislyktes"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-post eller Google-ID",
      "signInMsg2": "Finner ikke kontoen",
      "howToFind": "Slik finner du en Picasa-ID",
      "howToFind2": "Kopier tallene mellom første og andre / på en tilfeldig side på Picasa"
    },
    "videoSelectorCommon": {
      "check": "Kontroller",
      "notFound": "Fant ikke videoen",
      "found": "Fant videoen",
      "select": "Velg denne videoen"
    },
    "videoSelectorHome": {
      "other": "Annet"
    },
    "videoSelectorYoutube": {
      "url": "Kobling til YouTube-video",
      "pageInputLbl": "Brukernavn",
      "lookupMsgError": "Finner ikke bruker",
      "howToFind": "Slik finner du et YouTube-brukernavn",
      "howToFind2": "Brukernavnet vises under videoer",
      "found": "Funnet",
      "noData": "Finner ingen offentlige videoer",
      "videoNotChecked": "Videoen er ikke kontrollert på YouTube, men adressen ser riktig ut.",
      "checkFailedAPI": "YouTube-kontrollen mislyktes. Sjekk YouTube API-nøkkelen."
    },
    "videoSelectorVimeo": {
      "url": "Kobling til Vimeo-video"
    },
    "videoSelectorOther": {
      "explain1": "Historiekartet kan ikke spille av råvideofiler (f.eks. AVI- eller MPEG-filer), men den kan spille av hostede videofiler som har innebygde spillere (f.eks. YouTube eller Vimeo).",
      "explain2": "De fleste hosttjenestene for video tilbyr denne funksjonen. Finn alternativet for å bygge inn videoen, kopier den aktuelle koden og legg den til i historien ved hjelp av alternativet for %WEBPAGE%-innhold.",
      "explain3": "Alternativt kan du hoste videoen selv sammen med en HTML-side som bruker en videospiller som %EXAMPLE%. Du legger deretter til URL-en til denne HTML-siden som en %WEBPAGE% i historien.",
      "webpage": "Webside"
    },
    "webpageSelectorHome": {
      "lblUrl": "Kobling til nettside",
      "lblEmbed": "Bygg inn kode",
      "lblMustUseHTTPS": "Koblinger til webinnhold må begynne med HTTPS",
      "lblOR": "ELLER",
      "lblError1": "Feil, fjern ett av de to inndatafeltene.",
      "lblError2": "Innbygging av kode kan inneholde bare én %IFRAMETAG%",
      "configure": "Konfigurer"
    },
    "mediaConfigure": {
      "lblURL": "Kobling til bilde",
      "lblURLPH": "Koblinger må slutte med  .jpg, .png, .gif, eller .bmp.",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Dette bildet ser ikke ut til å være gyldig. Angi en direkte kobling til en bildefil (URL-adressen skal normalt ende på .jpg eller .png). Koblinger til en webside som inneholder et bilde, kommer ikke til å fungere.",
      "lblURLErrorHTTPS": "Denne bildekoblingen er ikke gyldig. URL-en må begynne med HTTPS og slutte med en støttet filtype (JPG, PNG, GIF eller BMP).",
      "lblURLCheck": "Kontrollerer bilde...",
      "lblLabel": "Bildetekst",
      "lblLabel1": "Undertekst",
      "lblLabel2": "Tekst med musepekeren over",
      "lblLabel3": "Ingen",
      "lblLabelPH": "Skriv inn noe tekst...",
      "lblMaximize": "Ta med en maksimeringsknapp i bildehjørnet",
      "lblMaximizeHelp": "Anbefales bare for bilder av høy kvalitet",
      "lblPosition": "Posisjon",
      "lblPosition1": "Midtstill",
      "lblPosition2": "Fyll",
      "lblPosition3": "Tilpass",
      "lblPosition4": "Strekk",
      "lblPosition5": "Tilpasset",
      "lblURLHelp": "Bildekoblingen må begynne med HTTPS.<br><br>Du får best resultat når bildene er mindre enn 400 KB. Bruk komprimerte JPG-bilder med 80 % kvalitet og følgende anbefalte bildebredder: 200 piksler for hovedområde- og fortellingspanel med maksimeringsknapp og 1000 piksler for fortellingspanel uten maksimeringsknapp.<br><br>Hvis et koblet bilde tegnes sakte, laster du det opp til historien for å få bedre resultat.",
      "tooltipDimension": "Verdien kan angis i 'px' eller '%'",
      "tooltipDimension2": "Verdien må angis i piksler",
      "lblPosition2Explain": "(kan bli beskåret)",
      "lblPosition3Explain": "(blir ikke beskåret)",
      "lblPosition3Explain2": "(bredden passer alltid med panelet)",
      "lblPosition4Explain": "(kan bli forvrengt / vises skjevt)",
      "unloadLbl": "Last ut når leseren navigerer bort",
      "unloadHelp": "Hvis nettsiden har lyd- eller videomedier, beholder du dette alternativet avmerket for å forhindre at det innholdet spilles av når leseren navigerer bort. Fjern merket for eksempel for å la et lydspor fortsette å spilles av mens leseren går gjennom historien.<br />Hvis websiden er et program, fjerner du avmerkingen for dette alternativet, slik at historien ikke lastes inn på nytt hvis leseren går tilbake til den.",
      "embedProtocolLabel": "Last inn scenen med en sikker tilkobling (HTTPS)",
      "embedProtocolWarning1": "Hvis denne siden ikke lastes inn i historien, kan den ikke bygges inn av hensyn til nettsikkerheten. Du kan eventuelt legge til en kobling i fortellingen som åpner siden i en ny fane i nettleseren.",
      "embedProtocolWarning2": "Hvis denne siden ikke lastes inn i historien, fjerner du merket for dette alternativet og prøver på nytt. Hvis den fremdeles ikke lastes inn, kan den ikke bygges inn av hensyn til nettsikkerheten. Du kan eventuelt legge til en kobling i fortellingen som åpner siden i en ny fane i nettleseren.",
      "learn": "Mer informasjon",
      "lblAltText": "Alternativ tekst",
      "placeholderAltText": "Angi en beskrivelse av dette mediet for brukere med nedsatt syn...",
      "tooltipAltText": "Angi en beskrivelse av dette medieinnholdet som brukes av hjelpeteknologi som skjermleserprogramvare. Beskrivelsen er valgfri, men anbefales for å oppfylle retningslinjene for tilgjengelig nettinnhold, som WCAG og Section 508."
    },
    "editorActionGeocode": {
      "lblTitle": "Finn en adresse eller et sted",
      "mapMarkerExplain": "Brukeren ser en kartmarkør når han/hun klikker på koblingen"
    },
    "editorActions": {
      "navigate": "Naviger til et annet avsnitt",
      "remove": "Fjern handling",
      "preview": "Forhåndsvis handling"
    },
    "editorActionMedia": {
      "lblTitle": "Endre innholdet for hovedstadiet"
    },
    "editorInlineMedia": {
      "lblTitle": "Sett inn et bilde, en video eller en webside"
    }
  }
});