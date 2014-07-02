define(
	 ({
		common: {
			common: {
				edit: "Bearbeiten"
			},
			inlineFieldEdit: {
				editMe: "Bearbeiten!"
			},
			builderPanel: {
				panelHeader: "Builder für %TPL_NAME%",
				buttonSave: "SPEICHERN",
				buttonShare: "FREIGEBEN",
				buttonSettings: "EINSTELLUNGEN",
				buttonHelp: "HILFE",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangeSingular: "1 nicht gespeicherte Änderung",
				unSavedChangePlural: "nicht gespeicherte Änderungen",
				popoverSaveWhenDone: "Vergessen Sie nicht zu speichern, wenn Sie fertig sind",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				ok: "OK",
				savingApplication: "Anwendung wird gespeichert",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				saveError3: "Der Titel darf nicht leer sein",
				// TODO
				signIn: "Melden Sie sich mit einem Konto an auf",
				shareStatus1: "Anwendung ist nicht gespeichert",
				shareStatus2: "Anwendung ist öffentlich freigegeben",
				shareStatus3: "Anwendung ist innerhalb der Organisation freigegeben",
				shareStatus4: "Anwendung ist nicht freigegeben"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titel",
				addPopupTitle: "Hinzufügen",
				addPopupDescription: "Fügen Sie der Reihe eine neue Ansicht hinzu.",
				addPopupButton: "HINZUFÜGEN",
				// Edit
				editPopupTitle: "Bearbeiten",
				editPopupDescription: "Die ausgewählte Ansicht bearbeiten",
				editPopupButton: "ÜBERNEHMEN",
				// Add/Edit
				addEditPopupCancelButton: "ABBRECHEN",
				addEditPopupMyContentBtn: "Aus \"Eigene Inhalte\" auswählen",
				addEditPopupConfigureWebMapBtn: " Konfigurieren"
			},
			share: {
				firstSaveTitle: "Anwendung wurde erfolgreich gespeichert",
				firstSaveHeader: "Ihre Anwendung ist jetzt in ArcGIS Online gespeichert. Lesen Sie die folgenden Antworten auf häufig gestellte Fragen.",
				firstSaveA1: "Wenn Sie nicht mit ArcGIS Online vertraut sind oder eine Verknüpfung für den Zugriff auf die Autoren-Oberfläche wünschen, können Sie den folgenden Link speichern: %LINK1%",
				firstSaveA1bis: "Die Anwendung befindet sich außerdem in Ihrem <a href='%LINK2%' target='_blank'>ArcGIS Online-Inhaltsordner</a>.",
				firstSaveQ2: "Ist meine Anwendung freigegeben?",
				firstSaveA2: "Ihre Anwendung ist zurzeit nicht freigegeben. Um sie freizugeben, verwenden Sie die FREIGABE-Schaltfläche.",
				shareTitle: "Anwendung freigeben",
				sharePrivateHeader: "Ihre Anwendung ist nicht freigegeben. Möchten Sie sie freigeben?",
				sharePrivateBtn1: "Öffentlich freigeben",
				sharePrivateBtn2: "Für meine Organisation freigeben",
				sharePrivateWarning: "Die Freigabe von %WITH% wurde deaktiviert, da Sie nicht der Besitzer der <a href='%LINK%' target='_blank'>Webkarte</a> sind.",
				sharePrivateWarningWith1: "öffentlich",
				sharePrivateWarningWith2: "öffentlich und für die Organisation",
				sharePrivateProgress: "Freigabe wird ausgeführt...",
				sharePrivateErr: "Fehler bei der Freigabe. Versuchen Sie es erneut, oder",
				sharePrivateOk: "Freigabe wurde erfolgreich aktualisiert. Wird geladen...",
				sharePreviewAsUser: "Vorschau",
				shareHeader1: "Ihre Anwendung ist <strong>öffentlich zugänglich</strong>.",
				shareHeader2: "Ihre Anwendung ist für die Mitglieder Ihrer Organisation zugänglich (Anmeldung ist erforderlich).",
				shareLinkHeader: "Freigeben der Anwendung für Ihre Zielgruppe",
				shareLinkOpen: "ÖFFNEN",
				shareQ1Opt1: "Wie bleibt die Anwendung privat?",
				shareQ1Opt2: "Wie bleibt die Anwendung privat oder wie wird sie veröffentlicht?",
				shareA1: "Verwenden Sie %SHAREIMG% auf <a href='%LINK1%' target='_blank'>der Elementseite der Anwendung</a>. Wenn Sie die Freigabe der Webkarte ebenfalls aufheben möchten, verwenden Sie <a href='%LINK2%' target='_blank'>die Elementseite der Webkarte</a>.",
				shareA1bis: "Wenn Sie die Freigabe des Feature-Service ebenfalls aufheben möchten, verwenden Sie <a href='%LINK1%' target='_blank'>die Elementseite des Feature-Service</a>.",
				shareQ2: "Wie kann ich die Anwendung später bearbeiten?",
				shareQ2bis: "Wie kehre ich zur Autoren-Oberfläche zurück?",
				shareA2div1: "Speichern Sie den folgenden Link %LINK1%, und verwenden Sie ihn erneut, oder verwenden Sie <a href='%LINK2%' target='_blank'>die Elementseite der Anwendung</a>.",
				shareA2div2: "Wenn Sie bei ArcGIS.com als Besitzer der Anwendung angemeldet sind, enthält die Anwendung eine Schaltfläche zum Öffnen des interaktiven Builders:",				
				shareQ3: "Wo werden die Daten gespeichert?",
				shareA3: "Die Anwendungskonfiguration wird in <a href='%LINK1%' target='_blank'>diesem Webkartenelement</a> und in <a href='%LINK2%' target='_blank'>diesem Webanwendungselement</a> gespeichert. Bei Verwendung der Importfunktion von Flickr, Picasa, Facebook oder YouTube bleiben Ihre Bilder und Videos dort gespeichert und werden nicht in ArcGIS Online dupliziert.",
				learnMore: "Weitere Informationen",
				close: "Schließen"
			},
			settings: {
				header: "Anwendungseinstellungen",
				cancel: "Abbrechen",
				apply: "Übernehmen",
				tabError: "Überprüfen Sie alle Registerkarten auf Fehler"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Welches Layout möchten Sie verwenden?",
				explainInit: "Änderungen können über das Dialogfeld \"Einstellungen\" vorgenommen werden.",
				selected: "Ausgewähltes Layout",
				select: "Dieses Layout auswählen"
			},
			settingsTheme: {
				title: "Design",
				explain: "App-Design auswählen oder eigene Farben definieren.",
				label: "Hintergrundfarben von Kopfzeile und seitlichem Fenster"
			},
			settingsHeader: {
				title: "Kopfzeile",
				explain: "Kopfzeilen-Logo anpassen (max. 250 x 50 Pixel).",
				logoEsri: "Esri Logo",
				logoNone: "Kein Logo",
				logoCustom: "Benutzerdefiniertes Logo",
				logoCustomPlaceholder: "Bild-URL",
				logoCustomTargetPlaceholder: "Ziel-URL",
				logoSocialExplain: "Den Link rechts oben für die Kopfzeile anpassen.",
				logoSocialText: "Text",
				logoSocialLink: "Link",
				logoSocialDisabled: "Diese Funktion wurde vom Administrator deaktiviert"
			},
			mediaSelector: {
				lblMap: "Karte",
				lblPicture: "Bild",
				lblVideo: "Video",
				lblExternal: "Externe Seite"
			},
			webMapSelector: {
				radioCurrentWebMap: "Aktuelle Webkarte",
				radioWebmapApp: "Eine der anderen Webkarten, die in der Anwendung verwendet werden",
				radioAnotherWebmap: "Andere Webkarte",
				btnSelect: "Auswählen",
				lblOr: "oder",
				fieldEnterWebmapId: "Webkarten-ID eingeben",
				btnConfigure: "Karte konfigurieren"
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
				title: "Webkarte auswählen",
				searchTitle: "Suchen",
				ok: "OK",
				cancel: "Abbrechen",
				placeholder: "Suchbegriff eingeben"
			}
		}
	})
);
