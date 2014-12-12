define(
	 ({
		commonCore: {
			common: {
				add: "Hinzufügen",
				edit: "Bearbeiten",
				save: "Speichern",
				next: "Weiter",
				cancel: "Abbrechen",
				back: "Zurück",
				apply: "Übernehmen",
				close: "Schließen",
				open: "Öffnen",
				start: "Start",
				loading: "Wird geladen",
				disabledAdmin: "Diese Funktion wurde vom Administrator deaktiviert",
				width: "Breite",
				height: "Höhe"
			},
			inlineFieldEdit: {
				editMe: "Bearbeiten!"
			},
			builderPanel: {
				panelHeader: "Builder für %TPL_NAME%",
				buttonSaving: "Wird gespeichert",
				buttonSaved: "Gespeichert",
				buttonShare: "Freigeben",
				buttonSettings: "Einstellungen",
				buttonHelp: "Hilfe",
				buttonPreview: "Live anzeigen",
				tooltipFirstSave: "Dies ist erst nach dem Speichern verfügbar.",
				tooltipNotShared: "Dies ist erst nach dem Freigeben verfügbar.",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangePlural: "Ausstehende Änderungen",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				shareStatus1: "Anwendung wurde noch nicht gespeichert",
				shareStatus2: "Anwendung ist öffentlich freigegeben",
				shareStatus3: "Anwendung ist innerhalb der Organisation freigegeben",
				shareStatus4: "Anwendung ist nicht freigegeben"
			},
			saveError: {
				title: "Fehler beim Speichern der Anwendung",
				err1Div1: "Die Anwendung kann nicht gespeichert werden, da Sie bereits über ein anderes Element mit demselben Namen verfügen (weitere Informationen finden Sie im <a class='linkagolroot' target='_blank'>Inhaltsordner</a>).",
				err1Div2: "Ändern Sie den Titel Ihrer Anwendung, und speichern Sie ihn anschließend.",
				btnOk: "Den Anwendungstitel bearbeiten"
			},
			share: {
				firstSaveTitle: "Anwendung wurde erfolgreich gespeichert",
				firstSaveHeader: "Ihre Anwendung ist jetzt in %PORTAL% gespeichert, wurde aber noch nicht freigegeben.",
				firstSavePreview: "Vorschau",
				firstSaveShare: "Freigeben",
				firstSaveA1: "Wenn Sie nicht mit %PORTAL% vertraut sind oder eine Verknüpfung für den Zugriff auf die Builder-Oberfläche wünschen, können Sie den folgenden Link speichern: %LINK1%",
				firstSaveA1bis: "Die Anwendung befindet sich außerdem in Ihrem <a href='%LINK2%' target='_blank'>%PORTAL%-Inhaltsordner</a>.",
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
				shareHeader1: "Ihre Anwendung ist <strong>öffentlich zugänglich</strong>.",
				shareHeader2: "Ihre Anwendung ist für die Mitglieder Ihrer Organisation zugänglich (Anmeldung ist erforderlich).",
				shareLinkCopy: "Kopieren",
				shareLinkCopied: "Kopiert",
				shareQ0: "Wie wird die Anwendung in eine Webseite eingebettet?",
				shareQ1Opt1: "Wie bleibt die Anwendung privat?",
				shareQ1Opt2: "Wie bleibt die Anwendung privat oder wie wird sie veröffentlicht?",
				shareA1: "Verwenden Sie %SHAREIMG% auf <a href='%LINK1%' target='_blank'>der Elementseite der Anwendung</a>.",
				shareQ2bis: "Wie kehre ich zur Builder-Oberfläche zurück?",
				shareA2div1: "Speichern Sie den folgenden Link %LINK1%, und verwenden Sie ihn erneut, oder verwenden Sie <a href='%LINK2%' target='_blank'>die Elementseite der Anwendung</a>.",
				shareA2div2: "Wenn Sie bei %PORTAL% als Besitzer der Anwendung angemeldet sind, enthält die Anwendung eine Schaltfläche zum Öffnen des interaktiven Builders:",				
				shareQ3: "Wo werden die Daten gespeichert?",
				shareA3: "Die Daten und Konfiguration für %TPL_NAME% sind in <a href='%LINK2%' target='_blank'>diesem Webanwendungselement</a> gespeichert. Bei Verwendung der Importfunktion von Flickr, Picasa, Facebook oder YouTube bleiben Ihre Bilder und Videos dort gespeichert und werden nicht in %PORTAL% dupliziert."
			},
			settings: {
				header: "Einstellungen",
				tabError: "Überprüfen Sie alle Registerkarten auf Fehler"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Welches Layout möchten Sie verwenden?",
				explainInit: "Das Layout kann jederzeit im Dialogfeld \"Einstellungen\" geändert werden.",
				viewExample: "Live-Beispiel anzeigen"
			},
			settingsTheme: {
				title: "Design"
			},
			settingsHeader: {
				title: "Kopfzeile",
				logoEsri: "Esri Logo",
				logoNone: "Kein Logo",
				logoCustom: "Benutzerdefiniertes Logo",
				logoCustomPlaceholder: "URL (max. 250 x 50 Pixel)",
				logoCustomTargetPlaceholder: "Ziel-URL",
				logoSocialExplain: "Passen Sie den Kopfzeilen-Link an.",
				logoSocialText: "Text",
				logoSocialLink: "Link",
				lblSmallHeader: "Kompakte Überschrift verwenden (keinen Untertitel)"
			},
			header: {
				title: "Den Titel für %TPL_NAME% bearbeiten",
				subtitle: "Den Untertitel für %TPL_NAME% bearbeiten"
			}
		}
	})
);
