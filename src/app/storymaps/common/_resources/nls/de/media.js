define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Medien",
      "lblSelect2": "Inhalt",
      "lblMap": "Karte",
      "lblImage": "Bild",
      "lblVideo": "Video",
      "lblExternal": "Webseite",
      "lblUpload": "Hochladen",
      "lblLink": "Link",
      "disabled": "Diese Funktion wurde vom Administrator deaktiviert",
      "userLookup": "Alben laden",
      "notImplemented": "Noch nicht implementiert.",
      "noData": "Kein öffentliches Album gefunden",
      "thirdPartyTerms": "Durch die Verwendung eines Drittanbieter-Service stimmen Sie dessen Geschäftsbedingungen zu: "
    },
    "imageSelector": {
      "lblStep1": "Service auswählen",
      "lblStep2": "Medien auswählen",
      "lblStep3": "Konfigurieren"
    },
    "imageSelectorHome": {
      "explain": "Bilder über soziale Medien <br /> oder direkt über eine URL laden"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "Bild suchen",
      "lblDrop": "Bild hierhin ziehen oder",
      "infoUpload": "Bilder werden in Ihrem ArcGIS-Konto gespeichert und können nur innerhalb Ihrer Story abgerufen werden.",
      "warningFileTypes": "Bild kann eine JPG-, PNG-, GIF- oder BMP-Datei sein.",
      "warningOneFile": "Es kann nur ein Bild gleichzeitig hochgeladen werden.",
      "warningFileSize": "Das Bild muss kleiner als 10 MB sein.",
      "tooltipRemove": "Löschen Sie dieses nicht genutzte Bild aus Ihrem ArcGIS-Konto. <br> (Wenn Sie es später verwenden möchten, müssen Sie es erneut hochladen.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Benutzername",
      "signInMsg2": "Benutzer nicht gefunden",
      "loadingFailed": "Fehler beim Laden"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "E-Mail oder Google-ID",
      "signInMsg2": "Konto nicht gefunden",
      "howToFind": "Eine Picasa-ID suchen",
      "howToFind2": "Ziffern zwischen dem ersten und zweiten '/' einer beliebigen Picasa-Seite kopieren"
    },
    "videoSelectorCommon": {
      "check": "Aktivieren",
      "notFound": "Video nicht gefunden",
      "found": "Video gefunden",
      "select": "Dieses Video auswählen"
    },
    "videoSelectorHome": {
      "other": "Andere"
    },
    "videoSelectorYoutube": {
      "url": "YouTube-Video-Link",
      "pageInputLbl": "Benutzername",
      "lookupMsgError": "Benutzer nicht gefunden",
      "howToFind": "So finden Sie einen Youtube-Benutzernamen",
      "howToFind2": "Benutzername wird unter Videos angezeigt",
      "found": "Gefunden",
      "noData": "Keine öffentlichen Videos gefunden",
      "videoNotChecked": "Das Video wurde nicht auf YouTube überprüft, die Adresse ist jedoch in Ordnung.",
      "checkFailedAPI": "Die YouTube-Überprüfung konnte nicht durchgeführt werden. Überprüfen Sie den YouTube-API-Schlüssel."
    },
    "videoSelectorVimeo": {
      "url": "Vimeo-Video-Link"
    },
    "videoSelectorOther": {
      "explain1": "Diese Story Map kann keine unverarbeiteten Videodateien (z. B. AVI, MPEG), sondern nur gehostete Videos mit integrierten Playern (z. B. YouTube oder Vimeo) wiedergeben.",
      "explain2": "Die meisten Video-Hostingdienste bieten diese Funktionalität an. Suchen Sie die Option zum Einbetten von Videos, kopieren Sie den angegebenen Code, und fügen Sie ihn über die %WEBPAGE%-Inhaltsoption zu Ihrer Story hinzu.",
      "explain3": "Alternativ können Sie das Video mit einer HTML-Seite, die einen Video-Player wie %EXAMPLE% verwendet, selbst hosten. Dazu fügen Sie die URL dieser HTML-Seite als %WEBPAGE% zu Ihrer Story hinzu.",
      "webpage": "Webseite"
    },
    "webpageSelectorHome": {
      "lblUrl": "Webseiten-Link",
      "lblEmbed": "Eingebundener Code",
      "lblMustUseHTTPS": "Links zu Webinhalten müssen mit HTTPS beginnen",
      "lblOR": "ODER",
      "lblError1": "Fehler. Löschen Sie den Inhalt eines der beiden Eingabefelder.",
      "lblError2": "Der eingebettete Code darf nur ein %IFRAMETAG% enthalten",
      "configure": "Konfigurieren"
    },
    "mediaConfigure": {
      "lblURL": "Bild-Link",
      "lblURLPH": "Link sollte mit .jpg, .png, .gif oder .bmp enden",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Dieses Bild ist scheinbar nicht gültig. Geben Sie einen direkten Link zu einer Bilddatei an (die URL endet in der Regel mit .jpg oder .png). Links zu einer Webseite, die Bilder enthält, funktionieren nicht.",
      "lblURLErrorHTTPS": "Dieser Bildlink ist nicht gültig. Die URL muss mit HTTPS beginnen und mit einer unterstützten Erweiterung für Bilddateien (.jpg, .png, .gif, .bmp) enden.",
      "lblURLCheck": "Bild wird überprüft...",
      "lblLabel": "Bildüberschrift",
      "lblLabel1": "Beschriftung",
      "lblLabel2": "Hovertext",
      "lblLabel3": "Keine",
      "lblLabelPH": "Text eingeben...",
      "lblMaximize": "Fügen Sie eine Schaltfläche zum Maximieren in der Ecke des Bildes ein",
      "lblMaximizeHelp": "Nur für Fotos mit hoher Qualität empfohlen",
      "lblPosition": "Position",
      "lblPosition1": "Zentrieren",
      "lblPosition2": "Füllung",
      "lblPosition3": "Einpassen",
      "lblPosition4": "Strecken",
      "lblPosition5": "Benutzerdefiniert",
      "lblURLHelp": "Bild-Link muss mit HTTPS beginnen.<br><br>Für optimale Ergebnisse sollten Bilder kleiner als 400 KB sein. Verwenden Sie komprimierte JPG-Bilder mit einer Qualität von 80 % sowie folgenden empfohlenen Bildbreiten: 2000 Pixel für den Haupt- oder Präsentationsbereich mit Vergrößerungsschaltfläche, 1000 Pixel für den Präsentationsbereich ohne Vergrößerungsschaltfläche.<br><br>Wenn ein verknüpftes Bild langsam aufgebaut wird, können Sie es in Ihre Story hochladen, um bessere Ergebnisse zu erzielen.",
      "tooltipDimension": "Der Wert kann in \"Px\" oder \"%\" angegeben werden",
      "tooltipDimension2": "Der Wert muss in \"Px\" angegeben werden",
      "lblPosition2Explain": "(Zuschneiden möglich)",
      "lblPosition3Explain": "(Zuschneiden nicht möglich)",
      "lblPosition3Explain2": "(Breite wird immer an den Bereich angepasst)",
      "lblPosition4Explain": "(Verzerren möglich)",
      "unloadLbl": "Wird angehalten, wenn Leser zu einem anderen Ort navigiert",
      "unloadHelp": "Wenn die Webseite über Audio- oder Video-Medien verfügt, lassen Sie diese Option aktiviert, um die Wiedergabe dieses Inhalts zu beenden, wenn der Leser zu einem anderen Ort navigiert. Deaktivieren Sie sie, um beispielsweise die Wiedergabe eines Soundtracks fortzusetzen, während der Leser durch die Story blättert.<br />Wenn es sich bei der Webseite um eine Anwendung handelt, deaktivieren Sie diese Option, damit die Story nicht erneut geladen wird, wenn der Leser zu ihr zurückkehrt.",
      "embedProtocolLabel": "Seite über eine sichere Verbindung (HTTPS) laden",
      "embedProtocolWarning1": "Wenn diese Seite nicht in Ihre Story geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden. Alternativ können Sie Ihrer Zusammenfassung einen Link hinzufügen, um die Seite in einer neuen Browser-Registerkarte zu öffnen.",
      "embedProtocolWarning2": "Wenn diese Seite nicht in Ihre Story geladen werden kann, deaktivieren Sie diese Option, und versuchen Sie es erneut. Wenn die Seite trotzdem nicht geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden. Alternativ können Sie Ihrer Zusammenfassung einen Link hinzufügen, um die Seite in einer neuen Browser-Registerkarte zu öffnen.",
      "learn": "Weitere Informationen",
      "lblAltText": "Alternativer Text",
      "placeholderAltText": "Geben Sie für sehbehinderte Leser eine Beschreibung dieser Medien ein...",
      "tooltipAltText": "Stellen Sie eine Beschreibung dieses Medieninhalts bereit, der von Hilfstechnologien wie Sprachausgabe-Software verwendet wird. Eine Beschreibung ist optional, wird jedoch empfohlen, um den Richtlinien für barrierefreie Webinhalte gemäß WCAG und Abschnitt 508 zu entsprechen."
    },
    "editorActionGeocode": {
      "lblTitle": "Adresse oder Ort suchen",
      "mapMarkerExplain": "Beim Klicken auf den Link wird ein Karten-Marker angezeigt"
    },
    "editorActions": {
      "navigate": "Zu einem anderen Abschnitt navigieren",
      "remove": "Aktion entfernen",
      "preview": "Vorschau der Aktion anzeigen"
    },
    "editorActionMedia": {
      "lblTitle": "Inhalt der Hauptanzeige ändern"
    },
    "editorInlineMedia": {
      "lblTitle": "Bild, Video oder Webseite einfügen"
    }
  }
});