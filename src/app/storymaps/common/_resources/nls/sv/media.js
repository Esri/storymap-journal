define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Innehåll",
      "lblMap": "Karta",
      "lblImage": "Bild",
      "lblVideo": "Video",
      "lblExternal": "Webbsida",
      "lblUpload": "Överför",
      "lblLink": "Länk",
      "disabled": "Den här funktionen har inaktiverats av administratören",
      "userLookup": "Läs in album",
      "notImplemented": "Inte infört ännu.",
      "noData": "Inget offentligt album hittades"
    },
    "imageSelector": {
      "lblStep1": "Välj tjänst",
      "lblStep2": "Välj media",
      "lblStep3": "Konfigurera"
    },
    "imageSelectorHome": {
      "explain": "Läs in bilder från sociala media <br /> eller direkt från en URL"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "bläddra efter en bild",
      "lblDrop": "Släpp en bild här eller",
      "infoUpload": "Bilderna lagras i ditt ArcGIS-konto och är endast tillgängliga i din berättelse.",
      "warningFileTypes": "Bilden kan vara .jpg, .png, .gif eller .bmp",
      "warningOneFile": "En fil i taget accepteras.",
      "warningFileSize": "Filen överstiger maximal tillåten storlek för överföring. Välj en annan fil.",
      "tooltipRemove": "Ta bort den här bilden som inte används från ditt ArcGIS-konto. <br> (Du behöver kanske överföra den igen om du bestämmer dig för att använda den senare.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Användarnamn",
      "signInMsg2": "Det gick inte att hitta användaren",
      "loadingFailed": "Det gick inte att läsa in"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Facebook-användare",
      "rightHeader": "Facebook-sida",
      "pageExplain": "En Facebook-sida är ett offentligt varumärke/produkt eller en kändis, till exempel <b>esrigis</b>. Du kan hitta sidnamnet efter det första '/'-tecknet i sidans webbadress.",
      "pageInputLbl": "Sidnamn",
      "lookupMsgError": "Det gick inte att hitta sidan",
      "warning": "Facebook-stödet har avslutats, ${learn}.",
      "learn": "läs mer"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-post- eller Google-ID",
      "signInMsg2": "Det gick inte att hitta kontot",
      "howToFind": "Hitta ett Picasa-ID",
      "howToFind2": "Kopiera siffrorna mellan det första och andra \"/\"-tecknet på en Picasa-sida"
    },
    "videoSelectorCommon": {
      "check": "Kontroll",
      "notFound": "Det gick inte att hitta videon",
      "found": "Video hittad",
      "select": "Välj den här videon"
    },
    "videoSelectorHome": {
      "other": "Annat"
    },
    "videoSelectorYoutube": {
      "url": "Länk till YouTube-video",
      "pageInputLbl": "Användarnamn",
      "lookupMsgError": "Det gick inte att hitta användaren",
      "howToFind": "Så här hittar du ett YouTube-användarnamn",
      "howToFind2": "Användarnamnet visas under videoklippen",
      "found": "Hittade",
      "noData": "Inga offentliga videoklipp hittades",
      "videoNotChecked": "Videon har inte kontrollerats på YouTube, men adressen ser bra ut.",
      "checkFailedAPI": "YouTube-kontrollen har misslyckats, kontrollera din YouTube API-nyckel."
    },
    "videoSelectorVimeo": {
      "url": "Länk till Vimeo-video"
    },
    "videoSelectorOther": {
      "explain1": "Den här berättelsekartan kan inte spela upp obearbetade videofiler (till exempel .avi och .mpeg), men kan spela driftade videor som har inbyggda spelare (till exempel YouTube eller Vimeo).",
      "explain2": "De flesta tjänster som driftar videoklipp erbjuder den här funktionen. Du måste hitta alternativet för att bädda in videon, kopiera den angivna koden och lägga till den i berättelsen med innehållsalternativet %WEBPAGE%.",
      "explain3": "Alternativt kan du drifta videon själv tillsammans med en HTML-sida som använder en videospelare som %EXAMPLE%. Därefter kan du lägga till webbadressen för denna HTML-sida i din berättelse som en %WEBPAGE%.",
      "webpage": "Webbsida"
    },
    "webpageSelectorHome": {
      "lblUrl": "Länk till webbsida",
      "lblEmbed": "Bädda in kod",
      "lblOR": "ELLER",
      "lblError1": "Fel, rensa ett av de båda inmatningsfälten.",
      "lblError2": "Inbäddad kod kan endast innehålla en %IFRAMETAG%",
      "configure": "Konfigurera"
    },
    "mediaConfigure": {
      "lblURL": "Bildlänk",
      "lblURLPH": "Länken bör sluta med .jpg, .png, .gif eller .bmp",
      "lblURLError": "Den här bilden verkar inte vara giltig. Ange en direktlänk till en bildfil (din URL slutar vanligtvis med en .jpg eller .png). Länkar till en webbsida som innehåller en bild fungerar inte.",
      "lblURLCheck": "Kontrollerar bild ...",
      "lblLabel": "Bildtext",
      "lblLabel1": "Bildtext",
      "lblLabel2": "Hovringstext",
      "lblLabel3": "Inga",
      "lblLabelPH": "Ange text ...",
      "lblMaximize": "Ta med knappen Maximera i hörnet av bilden",
      "lblMaximizeHelp": "Rekommenderas endast för bilder av hög kvalitet",
      "lblPosition": "Position",
      "lblPosition1": "Centrera",
      "lblPosition2": "Fyllning",
      "lblPosition3": "Anpassa",
      "lblPosition4": "Sträck",
      "lblPosition5": "Anpassad",
      "lblURLHelp": "För bästa resultat bör bilderna vara mindre än 400 kB. Använd komprimerade JPG-bilder vid 80 % kvalitet och följande rekommenderade bildbredder: 2 000 pixlar för huvudscenen och berättelsepaneler med knappen Maximera, eller 1 000 pixlar för berättelsepaneler utan knappen Maximera.<br><br>Om en länkad bild är långsam kan du överföra den till din berättelse för bättre resultat.",
      "tooltipDimension": "Värdet kan anges i \"px\" eller \"%\"",
      "tooltipDimension2": "Värdet måste anges i \"px\"",
      "lblPosition2Explain": "(kan beskäras)",
      "lblPosition3Explain": "(kan inte beskäras)",
      "lblPosition3Explain2": "(bredden kommer alltid att fylla rutan)",
      "lblPosition4Explain": "(kan förvrängas)",
      "unloadLbl": "Ta bort när användaren navigerar vidare",
      "unloadHelp": "Om webbsidan innehåller ljud- eller videomedia behåller du det här alternativet markerat så att innehållet inte spelas när användaren navigerar vidare. Avmarkera det till exempel om du vill att ett ljudspår ska spelas när användaren bläddrar vidare genom berättelsen.<br />Om webbplatsen är en applikation avmarkerar du alternativet så att berättelsen inte läses in på nytt om användaren återvänder till den.",
      "embedProtocolLabel": "Läs in sidan via en säker anslutning (HTTPS)",
      "embedProtocolWarning1": "Om sidan inte läses in till din berättelse kan den inte bäddas in av webbsäkerhetsskäl. Som ett alternativ kan du lägga till en länk i din berättelse för att öppna sidan på en ny webbläsarflik. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Läs mer</a>",
      "embedProtocolWarning2": "Om sidan inte läses in till din berättelse avmarkerar du alternativet och försöker igen. Om sidan fortfarande inte läses in kan den inte bäddas in av webbsäkerhetsskäl. Som ett alternativ kan du lägga till en länk i din berättelse för att öppna sidan på en ny webbläsarflik. <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Läs mer</a>"
    },
    "editorActionGeocode": {
      "lblTitle": "Hitta en adress eller plats",
      "mapMarkerExplain": "Användare ser en kartmarkör när de klickar på länken"
    },
    "editorActions": {
      "navigate": "Navigera till en sektion",
      "remove": "Ta bort åtgärd",
      "preview": "Förhandsgranska åtgärd"
    },
    "editorActionMedia": {
      "lblTitle": "Ändra innehåll för huvudscenen"
    },
    "editorInlineMedia": {
      "lblTitle": "Infoga en bild, ett videoklipp eller en webbsida"
    }
  }
});