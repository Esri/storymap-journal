define(
	 ({
		builder: {
			layouts: {
				mainStage: "Hauptanzeige",
				sideTitle: "Seitenfenster",
				sideDescr: "Ein Layout für einen umfangreichen Text, der sich durch die Kombination von Fotos, Videos und Karten in einer klar fokussierten Botschaft auszeichnet.",
				floatTitle: "Unverankertes Fenster",
				floatDescr: "Ein Layout, das die Karte in den Mittelpunkt stellt, während die Informationen über ein transparentes Fenster mit Text in Kurzform angezeigt werden."
			},
			common: {
				lblStatus1: "Veröffentlicht",
				lblStatus2: "Entwurf",
				lblStatus3: "Ausgeblendet"
			},
			settingsLayoutOptions: {
				title: "Layout-Optionen",
				cfgLeft: "Links",
				cfgRight: "Rechts",
				cfgSmall: "Klein",
				cfgMedium: "Mittel",
				cfgLarge: "Groß",
				socialLinksLabel: "Freigabe-Links im unteren Bereich jedes Abschnitts anzeigen",
				socialLinksDescr: "Auf diese Weise können Leser bestimmte Abschnitte von %TPL_NAME% referenzieren und bewerben. Wenn Sie beispielsweise das Freigabesymbol eines Abschnitts verwenden, gelangen Benutzer zu diesem bestimmten Abschnitt von %TPL_NAME%, statt zum Anfang Ihrer Story. Ihre Leser können den Link zu sozialen Medien im Titelabschnitt verwenden, um %TPL_NAME% vollständig (Kopfzeilenregisterkarte) zu bewerben, und am Anfang von %TPL_NAME% zu landen."
			},
			initPopup: {
				title: "Willkommen bei"
			},
			addEditPopup: {
				disabled: "\"Abschnitt hinzufügen\" ist deaktiviert, da die maximale Anzahl zulässiger Abschnitte erreicht ist.",
				titleAdd: "Abschnitt hinzufügen",
				titleAddHome: "Abschnitt für die Startseite hinzufügen",
				titleEdit: "Abschnitt bearbeiten",
				step: "Step",
				stepMainStageExplain: "Inhalt der Hauptanzeige",
				stepPanelExplain: "Inhalt",
				stepMainStageNextTooltip: "Den Abschnittstitel eingeben und den Inhalt der Hauptanzeige auswählen",
				step2NextTooltip: "Den Abschnittstitel und den %LAYOUT-TYPE%-Inhalt eingeben",
				stepNextTooltipNext: "um mit dem nächsten Schritt fortzufahren",
				stepNextTooltipAdd: "um den Abschnitt hinzuzufügen",
				firstAddExplain: "Dieser erste Abschnitt dient Ihrer Startseite und kann als \"Deckblatt\" Ihrer Story betrachtet werden. Der Titel, den Sie gerade definiert haben, wird in einer großen Schriftgröße dargestellt.",
				firstAddLeanMore: "Weitere Informationen",
				titlePlaceholder: "Abschnittstitel..."
			},
			addEditViewText: {
				editorPlaceholder: "Text, Links und kleine Grafiken hier hinzufügen.",
				editorActionsTitle: "Aktionen der Hauptanzeige",
				editorActionsHelpDescr: "Verwenden Sie diese Steuerelemente, um Links zu erstellen, die die Hauptanzeige ändern. Wenn der Leser beispielsweise auf einen Link klickt, können Sie auf der Karte auf eine bestimmte Position zoomen, eine andere Webkarte oder ein Bild anzeigen."
			},
			organizePopup: {
				title: "Organisieren",
				lblHeader: "Inhalte durch Ziehen und Ablegen von Abschnitten organisieren.",
				lblColTitle: "Titel",
				lblColPubDate: "Veröffentlichungsdatum",
				lblColStatus: "Status",
				checkDisplayReverse: "Abschnitte in umgekehrter Reihenfolge anzeigen",
				btnApplyWarning: "Löschen von %NB%-Abschnitten bestätigen",
				deleteTooltip: "Löschen",
				firstSectionExplain: "(Der Startseitenabschnitt kann nicht verschoben werden)"
			},
			exportData: {
				btn: "Inhalt exportieren",
				tooltip: "Durch das Exportieren Ihrer Inhalte können Sie eine Sicherung Ihres Journals anzeigen und erstellen, falls sie es versehentlich gelöscht haben. Kopieren Sie einfach den Inhalt der Seite, und fügen Sie ihn in ein beliebiges Textverarbeitungsprogramm ein."
			},
			help: {
				lblHelp: "Hilfe",
				lblAdd: "Abschnitt hinzufügen",
				lblSettings: "Einstellungen",
				lblOrga: "Inhalt organisieren",
				lblEdit: "Änderungen",
				lblPublish: "Freigeben",
				lblTips: "Tipps",
				lblMore: "Sie wünschen weitere Informationen?",
				lblLink: "Besuchen Sie die Story Maps-Website.",
				content1Div1: "Sie können eine Vielzahl von Styles zur Vermittlung von Informationen integrieren. Der <strong>%LAYOUT_TITLE%</strong> enthält in der Regel Ihren Text, Ihre Bilder und Videos, während Ihre Karten sich meist in der <strong>Hauptanzeige</strong> befinden. Mit %TPL_NAME% können Bilder, Diagramme und Videos jedoch auch in der Hauptanzeige dargestellt werden.",
				content1Div2: "Sie können das Storytelling anpassen, indem Sie Abschnitte hinzufügen. Wenn Leser einen Bildlauf durch Ihren %LAYOUT_TITLE%-Text durchführen, kann eine Karte in der Hauptanzeige zu Schlüsselpunkten schwenken oder darauf zoomen oder es können neue Karten und Bilder automatisch gewechselt werden, um Ihre Botschaft zu unterstreichen.",
				content2Div1: "Hier können Sie das Erscheinungsbild für %TPL_NAME% festlegen. Alle Farbschemen, Layouts und Breiten werden hier optimiert.",
				content2Div2: "Sie können Freigabe-Links auch zu Facebook, Twitter und Bitly hinzufügen, um die problemlose Verteilung von %TPL_NAME% durch Ihre Leser zu ermöglichen.",
				content3Div1: "Inhalte werden in Abschnitten organisiert. Die Anzahl der Abschnitte ist beliebig (sie sind vergleichbar mit kleinen Kapiteln). Der Fluss dieser Kapitel ist wichtig. Abschnitte können mit \"Organisieren\" nach Wunsch neu angeordnet und gelöscht werden.",
				content4Div1: "Sie haben einen Fehler gefunden oder möchten Änderungen vornehmen? Keine Sorge. Suchen Sie das Bearbeitungssymbol in der App, um Inhalte zu ändern. Sie werden die Bearbeitungsfunktionen beim Entwickeln von %TPL_NAME% häufig verwenden!",
				content5Div1: "%TPL_NAME% wird standardmäßig in Ihrem %PORTAL%-Konto und privat gespeichert. Sie können festlegen, ob die Informationen für Ihre Organisation freigegeben oder weltweit zugänglich sind. Wir stellen sogar eine gekürzte URL für eine problemlose Freigabe bereit.",
				content6Div1: "Der Titel Ihres Startseitenabschnitts ist gleichzeitig der Titel Ihres Journals. Der Startseitenabschnitt kann als \"Deckblatt\" Ihrer Informationen betrachtet werden. Der Titel des Startseitenabschnitts bleibt sichtbar, wenn Ihre Leser im Journal navigieren.",
				content6Div2: "Ihr %LAYOUT_TITLE% muss nicht nur aus Text bestehen, Sie können auch Fotos und Videos einbeziehen, um Ihre Story lebendig zu gestalten und lange Textabschnitte zu vermeiden!"
			},
			landing: {
				lblAdd: "Welchen Namen möchten Sie Ihrem Map Journal geben?",
				phAdd: "Geben Sie den Titel ein...",
				lblOR: "Oder",
				lblHelp: "Einführung"
			},
			firstAddSplash: {
				thisis: "Hierbei handelt es sich um"
			}
        }
    })

);
