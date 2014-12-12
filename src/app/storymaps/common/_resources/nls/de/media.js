define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medien",
				lblSelect2: "Inhalt",
				lblMap: "Karte",
				lblImage: "Bild",
				lblVideo: "Video",
				lblExternal: "Webseite",
				disabled: "Diese Funktion wurde vom Administrator deaktiviert",
				url: "Zur manuellen Eingabe der Web-Adresse eines Bildes",
				userLookup: "Alben laden",
				notImplemented: "Noch nicht implementiert.",
				noData: "Kein öffentliches Album gefunden"
			},
			imageSelector: {
				lblStep1: "Service auswählen",
				lblStep2: "Medien auswählen",
				lblStep3: "Konfigurieren"
			},
			imageSelectorHome: {
				explain: "Bilder über soziale Medien <br /> oder direkt über eine URL laden"
			},
			imageSelectorFlickr: {
				userInputLbl: "Benutzername",
				signInMsg2: "Benutzer nicht gefunden",
				loadingFailed: "Fehler beim Laden"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-Benutzer",
				rightHeader: "Facebook-Seite",
				pageExplain: "Eine Facebook-Seite entspricht einer öffentlichen Marke/einem Produkt oder einer prominenten Person wie <b>esrigis</b>. Den Seitennamen können sie dem Text nach dem ersten Schrägstrich (\'/\') in der Seiten-URL entnehmen.",
				pageInputLbl: "Seitenname",
				lookupMsgError: "Seite nicht gefunden"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-Mail-Adresse oder Picasa/Google+-ID",
				signInMsg2: "Konto nicht gefunden",
				howToFind: "So finden Sie eine Picasa- oder Google+-Konto-ID",
				howToFind2: "Kopieren Sie die Ziffern zwischen dem ersten und zweiten Schrägstrich (\'/\') einer Picasa- oder G+-Seite"
			},
			videoSelectorCommon: {
				check: "Aktivieren",
				notFound: "Video nicht gefunden",
				found: "Video gefunden",
				select: "Dieses Video auswählen"
			},
			videoSelectorHome: {
				other: "Andere"
			},
			videoSelectorYoutube: {
				url: "URL eines Youtube-Videos",
				pageInputLbl: "Benutzername",
				lookupMsgError: "Benutzer nicht gefunden",
				howToFind: "So finden Sie einen Youtube-Benutzernamen",
				howToFind2: "Benutzername wird unter Videos angezeigt",
				found: "Gefunden",
				noData: "Keine öffentlichen Videos gefunden"
			},
			videoSelectorVimeo: {
				url: "URL eines Vimeo-Videos"
			},
			videoSelectorOther: {
				explain1: "Die Anwendung kann keine unverarbeiteten Videos (z. B. avi, mpeg) wiedergeben. Sie kann jedoch gehostete Videodateien mit integrierten Playern (z. B. YouTube oder Vimeo) wiedergeben.",
				explain2: "Diese Funktion wird von den meisten Online-Services, die Videos hosten, bereitgestellt. Sie müssen die Option zum Einbetten des Videos suchen, den angegebenen Code kopieren und %WEBPAGE% verwenden.",
				explain3: "Wenn Sie das Video selbst hosten möchten, können Sie auch eine HTML-Seite erstellen, die einen Videoplayer wie %EXAMPLE% verwendet, diese Seite hosten und auch %WEBPAGE% verwenden.",
				webpage: "Webseitenfunktion"
			},
			webpageSelectorHome: {
				lblUrl: "Webseiten-URL",
				lblEmbed: "Eingebundener Code",
				lblOR: "ODER",
				lblError1: "Fehler - löschen Sie den Inhalt eines der beiden Eingabefelder.",
				lblError2: "Der eingebettete Code darf nur ein %IFRAMETAG% enthalten",
				configure: "Konfigurieren"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Eine Bild-URL muss mit \"http://\" beginnen und mit \".jpg\" oder \".png\" enden",
				lblURLError: "Dieses Bild ist scheinbar nicht gültig. Geben Sie einen direkten Link zu einer Bilddatei an (die URL endet in der Regel mit .jpg oder .png). Links zu einer Webseite, die Bilder enthält, funktionieren nicht.",
				lblURLCheck: "Bild wird überprüft...",
				lblLabel: "Bildüberschrift",
				lblLabel1: "Beschriftung",
				lblLabel2: "Hovertext",
				lblLabel3: "Keine",
				lblLabelPH: "Text eingeben...",
				lblMaximize: "Fügen Sie eine Schaltfläche zum Maximieren in der Ecke des Bildes ein",
				lblMaximizeHelp: "Nur für Fotos mit hoher Qualität empfohlen",
				lblPosition: "Position",
				lblPosition1: "Zentrieren",
				lblPosition2: "Füllung",
				lblPosition3: "Einpassen",
				lblPosition4: "Strecken",
				lblPosition5: "Benutzerdefiniert",
				tooltipDimension: "Der Wert kann in \"Px\" oder \"%\" angegeben werden",
				tooltipDimension2: "Der Wert muss in \"Px\" angegeben werden",
				lblPosition2Explain: "(Zuschneiden möglich)",
				lblPosition3Explain: "(Zuschneiden nicht möglich)",
				lblPosition3Explain2: "(Breite wird immer an das Fenster angepasst)",
				lblPosition4Explain: "(Verzerren möglich)",
				unloadLbl: "Wird angehalten, wenn Leser zu einem anderen Ort navigiert",
				unloadHelp: "Wenn die Webseite über Audio- oder Video-Medien verfügt, lassen Sie diese Option aktiviert, um die Wiedergabe dieses Inhalts zu beenden, wenn der Leser zu einem anderen Ort navigiert. Deaktivieren Sie sie, um beispielsweise die Wiedergabe eines Soundtracks fortzusetzen, während der Leser durch die Story blättert.<br />Wenn es sich bei der Webseite um eine Anwendung handelt, deaktivieren Sie diese Option, damit die Anwendung nicht erneut geladen wird, wenn der Leser zu ihr zurückkehrt."
			},
			editorActionGeocode: {
				lblTitle: "Adresse oder Ort suchen",
				mapMarkerExplain: "Beim Klicken auf den Link wird ein Karten-Marker angezeigt"
			},
			editorActionMedia: {
				lblTitle: "Inhalt der Hauptanzeige ändern"
			},
			editorInlineMedia: {
				lblTitle: "Bild, Video oder Webseite einfügen"
			}
		}
	})
);
