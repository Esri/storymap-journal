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
				height: "Höhe",
				create: "Erstellen",
				yes: "Ja",
				no: "Nein",
				mystories: "My Stories"
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
				buttonPreview: "Story anzeigen",
				tooltipFirstSave: "Dies ist erst nach dem Speichern verfügbar.",
				tooltipNotShared: "Dies ist erst nach dem Freigeben verfügbar.",
				tooltipNotShared2: "Ihre Story ist nicht freigegeben, nur Sie können auf sie zugreifen.",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangePlural: "Ausstehende Änderungen",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				status1: "Story ist freigegeben, weist aber Probleme auf",
				status2: "Story ist nicht freigegeben, weist aber Probleme auf",
				status3: "Story ist öffentlich",
				status4: "Story ist innerhalb Ihrer Organisation freigegeben",
				status5: "Story ist als privat eingestuft",
				status6: "Story wurde noch nicht gespeichert",
				checking: "Wird überprüft",
				fix: "Fix"
			},
			saveError: {
				title: "Fehler beim Speichern der Story",
				err1Div1: "Die Story kann nicht gespeichert werden, da bereits ein anderes Element mit diesem Namen vorhanden ist.",
				err1Div2: "Ändern Sie den Titel Ihrer Story, und speichern Sie sie anschließend.",
				btnOk: "Den Titel der Story bearbeiten"
			},
			saveErrorSocial: {
				title: "Freigabeaktualisierung für Social Media",
				panel1: "Das Aussehen Ihrer Story in den Social Media wurde verbessert, der Titel Ihres ArcGIS-Webanwendungselements stimmt aber nicht mit dem Titel der Story überein.",
				panel1tooltip: "Wenn Sie einen Titel, eine Zusammenfassung und eine Miniaturansicht definieren, sieht Ihre Story wie folgt aus:",
				panel2:	"Welchen Titel möchten Sie in den Social Media verwenden?",
				panel2q1: "Titel der Story (empfohlen)",
				panel2q1tooltip: "Wenn Sie diese Option wählen, wird der Elementtitel in den Titel Ihrer Story geändert und alle weitere Änderungen im Builder werden synchronisiert.",
				panel2q2: "Elementtitel",
				panel3: "Wenn Sie das Aussehen Ihrer Story in den Social Media zusätzlich verbessern möchten, fügen Sie mithilfe von ${MYSTORIES} eine Zusammenfassung und eine Miniaturansicht hinzu.",
				panel4: "Für diese Story keine Warnmeldung mehr anzeigen"
			},
			share: {
				shareTitle: "Story freigeben",
				preview: "Vorschau",
				viewlive: "Story anzeigen",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Nur Sie können die Story sehen",
				btnOrg: "Organisation",
				btnOrgTooltip: "Nur Mitglieder Ihrer Organisation können die Story sehen",
				btnPublic: "Öffentlich",
				btnPublicTooltip: "Jeder kann die Story sehen",
				loadingMessage: "Ihre Story wird auf Probleme überprüft",
				viewToggle1: "Story-Inhalt anzeigen",
				viewToggle2: "Story-Inhalt schließen",
				socialize: "Socialize",
				statusPrivate: "Ihre Story ist privat, nur Sie können sie sehen.",
				statusError: "Der Inhalt Ihrer Story weist Probleme auf, die Ihre Leser bemerken werden. Sie können diese Probleme unten identifizieren und beheben.",
				statusNoErrPrivate: "Geben Sie Ihre Story frei, sobald Sie bereit sind!",
				mystoriesinvite: "Alle Storys verwalten",
				notavailable1: "Das Freigeben Ihrer Story im Manager wird nicht unterstützt, da diese Anwendung nicht in %PRODUCT% gehostet wird.",
				notavailable2: "Das Freigeben Ihrer Story im Manager wird in dieser Version von Portal for ArcGIS nicht unterstützt (Version 10.4 oder höher erforderlich).",
				notavailable3: "Sie können diese Story über %LINK% freigeben.",
				notavailable4: "My Stories",
				notavailable5: "die Elementseite",
				notavailable6: "Dieses Feature wird im Entwicklungsmodus leider nicht vollständig unterstützt. Je nach Entwicklungsszenario wird es möglicherweise nach der Bereitstellung unterstützt.",
				notavailable7: "Besuchen Sie %MYCONTENT%, um sicherzustellen, dass die Karten und Layer, die Sie in Ihrer Story verwenden, ebenfalls freigegeben sind.",
				notavailable8: "Eigene Inhalte",
				mystoriesinvite2: "Wenn Sie das Aussehen Ihrer Story in den sozialen Netzwerken verbessern möchten, fügen Sie mithilfe von ${MYSTORIES} eine Zusammenfassung und eine Miniaturansicht hinzu."
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
				title: "Thema"
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
				title: "Bearbeiten Sie den Titel von %TPL_NAME%",
				subtitle: "Den Untertitel für %TPL_NAME% bearbeiten"
			}
		}
	})
);
