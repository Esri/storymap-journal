﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Karte",
				lblLocation: "Position",
				lblContent: "Inhalt",
				lblPopup: "Pop-up",
				lblControls: "Extras",
				lblOverview: "Übersichtskarte",
				lblLegend: "Legende",
				loadingTitle: "Titel wird geladen",
				entry: "Eintrag",
				entries: "Einträge",
				section: "Abschnitt",
				sections: "Abschnitte",
				and: "und",
				action: "Aktion in Abschnitt",
				actions: "Aktion in Abschnitten",
				originalWebmap: "Zum Veröffentlichen von %TPL_NAME% verwendete Karte",
				browseMaps: "Eine Karte auswählen",
				createMap: "Eine Karte erstellen",
				current: "Aktuelle Karte",
				select: "Karte auswählen oder erstellen",
				newMap: "Neu ausgewählte Karte",
				newCreatedMap: "Neu erstellte Karte",
				webmapDefault: "Kartenstandard",
				customCfg: "Benutzerdefinierte Konfiguration",
				tooltipLocation: "Die Position definieren, die diese Karte anzeigt.",
				tooltipContent: "Die sichtbaren Layer definieren.",
				tooltipPopup: "Ein Pop-up auswählen, das geöffnet werden soll, wenn diese Karte angezeigt wird.",
				tooltipOverview: "Eine kleine Übersichtskarte mit der Hauptkarte anzeigen.",
				tooltipLegend: "Die Kartenlegende auf der Karte anzeigen. Dies ist hilfreich, wenn die Karte mehrere Layer und Symbole aufweist.",
				mapCfgInvite: "Konfigurieren Sie die Karte mit diesen Steuerelementen",
				lblLocationAlt: "Von der ersten Karte übernommen",
				tooltipLocationAlt: "Die Position dieser Karte wird mit der ersten Karte in der Serie synchronisiert. Um dieses Verhalten für Ihre Serie zu ändern, wechseln Sie zu Einstellungen > Kartenoptionen."
			},
			configure: {
				btnReset: "Zurücksetzen",
				btnCancel: "Abbrechen",
				tocTitle: "Karteninhalt",
				tocExplain: "Legen Sie fest, welche Layer angezeigt werden sollen.",
				tocNoData: "Es kann kein Layer konfiguriert werden.",
				tocSave: "Karteninhalt speichern",
				extentTitle: "Kartenposition",
				extentExplain: "Die Karten schwenken und zoomen, um zu definieren, wie Sie Lesern angezeigt wird.",
				extentSave: "Kartenposition speichern",
				popupTitle: "Karten-Pop-up",
				popupExplain: "Klicken Sie auf ein Feature, um das Pop-up zu öffnen, das Sie anzeigen möchten.",
				popupSave: "Pop-up-Konfiguration speichern",
				hintNavigation: "Kartennavigation ist deaktiviert."
			},
			editor: {
				loading: "Bitte warten. Der Karten-Editor wird geladen.",
				newTitle: "Neue Karte erstellen",
				editTitle: "Karte bearbeiten",
				titleLbl: "Titel",
				titlePh: "Kartentitel...",
				folderLbl: "Die Karte wird im selben Ordner wie die Story erstellt.",
				creating: "Karte wird erstellt",
				saving: "Karte wird gespeichert",
				success: "Karte wurde gespeichert",
				successCreate: "Karte wurde erstellt",
				cancelTitle: "Alle nicht gespeicherten Änderungen verwerfen?",
				errorDuplicate: "Eine Karte mit diesem Titel ist bereits vorhanden",
				errorCreate: "Die Karte kann nicht erstellt werden. Versuchen Sie es erneut.",
				errorSave: "Die Karte kann nicht gespeichert werden. Versuchen Sie es erneut.",
				notavailable1: "Das Erstellen oder Bearbeiten von Karten ist in Firefox aus technischen Gründen nicht möglich. Verwenden Sie zum Erstellen Ihrer Story einen anderen Webbrowser oder den folgenden Workaround.",
				notavailable2: "Das Erstellen oder Bearbeiten von Karten wird nicht unterstützt, da die Story Map-Anwendung nicht in %PRODUCT% gehostet wird. Weitere Informationen erhalten Sie bei Ihrem ArcGIS-Administrator.",
				notavailable3: "Das Erstellen oder Bearbeiten von Karten wird in dieser Version von Portal for ArcGIS nicht unterstützt (Version 10.4 oder höher erforderlich). Weitere Informationen erhalten Sie bei Ihrem ArcGIS-Administrator.",
				notavailable4: "Sie können eine Karte mit %MV% erstellen und anschließend hier Ihre Story hinzufügen.",
				notavailable5: "Sie können die Karte mit %MV% bearbeiten und anschließend %apply%, um Ihre Änderungen anzuzeigen.",
				notavailable6: "Map Viewer",
				notavailable7: "die Karte neu laden"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Eigene Organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Eigene Inhalte",
					favoritesLabel: "Eigene Favoriten"
				},
				title: "Eine Karte auswählen",
				searchTitle: "Suchen",
				ok: "OK",
				cancel: "Abbrechen",
				placeholder: "Suchbegriff oder Webkarten-ID eingeben..."
			}
		}
	})
);
