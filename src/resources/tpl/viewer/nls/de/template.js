﻿define(
	 ({
		viewer: {
			common: {
				close: "Schließen"
			},
			loading: {
				step1: "Story wird geladen",
				step2: "Daten werden geladen",
				step3: "Wird initialisiert",
				loadBuilder: "Es wird zum Builder gewechselt",
				long: "Map Journal wird initialisiert",
				long2: "Vielen Dank für Ihre Geduld.",
				failButton: "Story erneut laden"
			},
			signin: {
				title: "Authentifizierung ist erforderlich",
				explainViewer: "Melden Sie sich mit einem Konto bei %PORTAL_LINK% an, um auf die Story zuzugreifen.",
				explainBuilder: "Melden Sie sich mit einem Konto bei %PORTAL_LINK% an, um die Story zu konfigurieren."
			},
			errors: {
				boxTitle: "Ein Fehler ist aufgetreten",
				invalidConfig: "Ungültige Konfiguration",
				invalidConfigNoApp: "Keine Web Mapping-Anwendungskennung in index.html angegeben.",
				unspecifiedConfigOwner: "Autorisierter Besitzer wurde nicht konfiguriert.",
				invalidConfigOwner: "Besitzer der Story ist nicht autorisiert.",
				createMap: "Karte kann nicht erstellt werden",
				invalidApp: "%TPL_NAME% ist nicht vorhanden oder es kann nicht darauf zugegriffen werden.",
				appLoadingFail: "Ein Fehler ist aufgetreten. %TPL_NAME% wurde nicht korrekt geladen.",
				notConfiguredDesktop: "Die Story ist noch nicht konfiguriert.",
				notConfiguredMobile: "Der %TPL_NAME% Builder wird bei dieser Anzeigegröße nicht unterstützt.",
				notAuthorized: "Sie sind nicht autorisiert, auf diese Story zuzugreifen.",
				noBuilderIE: "Der Builder wird von Internet Explorer vor Version %VERSION% nicht unterstützt. %UPGRADE%",
				noViewerIE: "Diese Story wird von Internet Explorer vor Version %VERSION% nicht unterstützt. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Aktualisieren Sie Ihren Browser</a>.",
				mapLoadingFail: "Ein Fehler ist aufgetreten. Die Karte wurde nicht korrekt geladen.",
				signOut: "Abmelden"
			},
			mobileView: {
				tapForDetails: "Zum Anzeigen von Details tippen",
				clickForDetails: "Weitere Informationen",
				swipeToExplore: "Zum Erkunden streichen",
				tapForMap: "Zum Zurückkehren zur Karte tippen",
				clickForMap: "ZURÜCK ZUR KARTE"
			},
			floatLayout: {
				scroll: "Bildlauf durchführen"
			},
			sideLayout: {
				scroll: "Führen Sie den Bildlauf nach unten durch, um weitere Informationen zu erhalten!"
			},
			mainStage: {
				back: "Zurück"
			},
			headerFromCommon: {
				storymapsText: "Eine Story Map",
				builderButton: "Bearbeiten",
				facebookTooltip: "Auf Facebook freigeben",
				twitterTooltip: "Auf Twitter freigeben",
				bitlyTooltip: "Kurzlink abrufen",
				templateTitle: "Vorlagentitel festlegen",
				templateSubtitle: "Untertitel der Vorlage festlegen",
				share: "Freigeben",
				checking: "Der Inhalt Ihrer Story wird überprüft",
				fix: "Probleme in der Story beheben",
				noerrors: "Keine Probleme erkannt"
			},
			overviewFromCommon: {
				title: "Übersichtskarte"
			},
			legendFromCommon: {
				title: "Legende"
			},
			shareFromCommon: {
				copy: "Kopieren",
				copied: "Kopiert",
				open: "Öffnen",
				embed: "In Webseite einbetten",
				embedExplain: "Verwenden Sie den folgenden HTML-Code, um das Journal in eine Webseite einzubetten.",
				size: "Größe (Breite/Höhe):"
			}
        }
    })
);