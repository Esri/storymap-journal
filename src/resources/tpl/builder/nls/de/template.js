define({
  "builder": {
    "layouts": {
      "mainStage": "Hauptanzeige",
      "sideTitle": "Seitenbereich",
      "sideDescr": "Ein Layout für einen umfangreichen Text, der sich durch die Kombination von Fotos, Videos und Karten in einer klar fokussierten Botschaft auszeichnet.",
      "floatTitle": "Unverankerter Bereich",
      "floatDescr": "Ein Layout, das die Karte in den Mittelpunkt stellt, während die Informationen über einen transparenten Bereich mit Text in Kurzform angezeigt werden."
    },
    "common": {
      "lblStatus1": "Veröffentlicht",
      "lblStatus2": "Entwurf",
      "lblStatus3": "Ausgeblendet"
    },
    "settingsLayoutOptions": {
      "title": "Layout-Optionen",
      "cfgLeft": "Links",
      "cfgRight": "Rechts",
      "cfgSmall": "Klein",
      "cfgMedium": "Mittel",
      "cfgLarge": "Groß",
      "socialLinksLabel": "Freigabe-Links im unteren Bereich jedes Abschnitts anzeigen",
      "socialLinksDescr": "Auf diese Weise können Leser bestimmte Abschnitte von %TPL_NAME% referenzieren und bewerben. Wenn Sie beispielsweise das Freigabesymbol eines Abschnitts verwenden, gelangen Benutzer zu diesem bestimmten Abschnitt von %TPL_NAME%, statt zum Anfang Ihrer Story. Ihre Leser können den Link zu sozialen Medien im Titelabschnitt verwenden, um %TPL_NAME% vollständig (Registerkarte \"Kopfzeile\") zu bewerben, und am Anfang von %TPL_NAME% zu landen.",
      "socialDisabled": "Dieses Feature ist nur mit dem Layout für unverankerte Bereiche verfügbar.",
      "socialWarning": "Ihre Story verwendet das Layout \"Seitenbereich\", jetzt wird jedoch empfohlen, diese Option nur dann mit dem Layout für unverankerte Bereiche zu verwenden, wenn vermieden werden soll, dass sich der Bereich möglicherweise nicht im gewünschten Abschnitt für Zusammenfassungen mit Bildern positionieren lässt. Sie können diese Option zwar weiterhin verwenden, wenn sie jedoch deaktiviert wird, ist sie nur bei Verwendung des Layouts für unverankerte Bereiche verfügbar."
    },
    "settingsLayoutFonts": {
      "title": "Schriftarten",
      "defaultLbl": "Standard",
      "sectionTitleLbl": "Abschnittstitel",
      "sectionContentLbl": "Abschnittsinhalt"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Design der Organisation",
      "lblModTheme": "Aktuelles Design"
    },
    "initPopup": {
      "title": "Willkommen bei"
    },
    "addEditPopup": {
      "disabled": "\"Abschnitt hinzufügen\" ist deaktiviert, da die maximale Anzahl zulässiger Abschnitte erreicht ist.",
      "titleAdd": "Abschnitt hinzufügen",
      "titleAddHome": "Abschnitt für die Startseite hinzufügen",
      "titleEdit": "Abschnitt bearbeiten",
      "step": "Schritt",
      "stepMainStageExplain": "Inhalt der Hauptanzeige",
      "stepPanelExplain": "Inhalt",
      "stepMainStageNextTooltip": "Den Abschnittstitel eingeben und den Inhalt der Hauptanzeige auswählen",
      "stepMainStageNextTooltip2": "Inhalt der Hauptanzeige auswählen",
      "step2NextTooltip": "Den Abschnittstitel und den %LAYOUT-TYPE%-Inhalt eingeben",
      "stepNextTooltipNext": "um mit dem nächsten Schritt fortzufahren",
      "stepNextTooltipAdd": "um den Abschnitt hinzuzufügen",
      "firstAddExplain": "Dieser erste Abschnitt dient Ihrer Startseite und kann als \"Deckblatt\" Ihrer Story betrachtet werden. Der Titel, den Sie gerade definiert haben, wird in einer großen Schriftgröße dargestellt.",
      "firstAddLeanMore": "Weitere Informationen",
      "titlePlaceholder": "Abschnittstitel..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Text, Links und kleine Grafiken hier hinzufügen.",
      "editorActionsTitle": "Story-Aktionen",
      "editorActionsHelpDescr": "Erstellen Sie Links in Ihrer Story, die beim Präsentieren der Informationen hilfreich sind. Eine Story-Aktion kann auf einen anderen Abschnitt verweisen oder den Hauptbereich ändern. Beispielsweise können Sie eine Aktion konfigurieren, um die Karte an einen anderen Platz zu verschieben, Karten-Layer zu aktivieren/deaktivieren oder als Medium für den Hauptbereich ein anderes Bild, Video bzw. eine andere Karte oder Website darzustellen.",
      "mainStageDisabled": "Story-Aktionen werden deaktiviert, wenn der Editor maximiert wird"
    },
    "organizePopup": {
      "title": "Organisieren",
      "lblHeader": "Story durch Ziehen und Ablegen von Abschnitten organisieren.",
      "lblColTitle": "Titel",
      "lblColPubDate": "Veröffentlichungsdatum",
      "lblColStatus": "Status",
      "checkDisplayReverse": "Abschnitte in umgekehrter Reihenfolge anzeigen",
      "btnApplyWarning": "Löschen von %NB%-Abschnitten bestätigen",
      "deleteTooltip": "Löschen",
      "firstSectionExplain": "(Der Startseitenabschnitt kann nicht verschoben werden)",
      "exportMainStage": "Inhalt der Hauptanzeige",
      "exportPanel": "Bereichsinhalt",
      "exportActions": "Story-Aktionen"
    },
    "exportData": {
      "btn": "Inhalt exportieren",
      "tooltip": "Durch das Exportieren Ihres Inhalts können Sie eine Sicherung Ihres Inhalts anzeigen und erstellen, falls sie ihn versehentlich löschen sollten. Kopieren Sie einfach den Inhalt der Seite, und fügen Sie ihn in ein beliebiges Textverarbeitungsprogramm ein."
    },
    "help": {
      "lblHelp": "Hilfe",
      "lblAdd": "Abschnitt hinzufügen",
      "lblSettings": "Einstellungen",
      "lblOrga": "Inhalt organisieren",
      "lblEdit": "Änderungen",
      "lblPublish": "Freigeben",
      "lblTips": "Tipps",
      "lblMore": "Sie wünschen weitere Informationen?",
      "lblLink": "Besuchen Sie die Esri Story Maps-Website.",
      "content1Div1": "Sie können eine Vielzahl von Styles zur Vermittlung von Informationen integrieren. Der <strong>%LAYOUT_TITLE%</strong> enthält in der Regel Ihren Text, Ihre Bilder und Videos, während Ihre Karten sich meist in der <strong>Hauptanzeige</strong> befinden. Mit %TPL_NAME% können Bilder, Diagramme und Videos jedoch auch in der Hauptanzeige dargestellt werden.",
      "content1Div2": "Sie können das Storytelling anpassen, indem Sie Abschnitte hinzufügen. Wenn Leser einen Bildlauf durch Ihren %LAYOUT_TITLE%-Text durchführen, kann eine Karte in der Hauptanzeige zu Schlüsselpunkten schwenken oder darauf zoomen oder es können neue Karten und Bilder automatisch gewechselt werden, um Ihre Botschaft zu unterstreichen.",
      "content2Div1": "Im Dialogfeld \"Einstellungen\" können Sie das Erscheinungsbild für %TPL_NAME% festlegen. Sie können das Layout festlegen, ein anderes Farbschema auswählen, die Textschriftart ändern usw.",
      "content2Div2": "Sie können das Esri Logo auch durch Ihr eigenes Logo ersetzen, um Ihre Marke widerzuspiegeln. Außerdem können Sie die Website festlegen, die gestartet wird, wenn Leser auf Ihr Logo klicken, um weitere Informationen zu erhalten.",
      "content3Div1": "Inhalte werden in Abschnitten organisiert. Die Anzahl der Abschnitte ist beliebig (sie sind vergleichbar mit kleinen Kapiteln). Der Fluss dieser Kapitel ist wichtig. Abschnitte können mit \"Organisieren\" nach Wunsch neu angeordnet und gelöscht werden.",
      "content4Div1": "Sie haben einen Fehler gefunden oder möchten Änderungen vornehmen? Keine Sorge. Suchen Sie das Bearbeitungssymbol in der App, um Inhalte zu ändern. Sie werden die Bearbeitungsfunktionen beim Entwickeln von %TPL_NAME% häufig verwenden!",
      "content5Div1": "%TPL_NAME% ist beim Speichern zunächst privat. Verwenden Sie die Schaltfläche \"Freigeben\", um %TPL_NAME% für andere Benutzer freizugeben. Sie können %TPL_NAME% öffentlich freigeben, sodass jeder darauf zugreifen kann.",
      "content5Div2": "Je nach Konto haben Sie außerdem die Möglichkeit, %TPL_NAME% nur für Benutzer in Ihrer Organisation freizugeben, damit andere nicht darauf zugreifen können.",
      "content6Div1": "Der Titel Ihres Startseitenabschnitts ist gleichzeitig der Titel Ihres Journals. Der Startseitenabschnitt kann als \"Deckblatt\" Ihrer Informationen betrachtet werden. Der Titel des Startseitenabschnitts bleibt sichtbar, wenn Ihre Leser im Journal navigieren.",
      "content6Div2": "Ihr %LAYOUT_TITLE% muss nicht nur aus Text bestehen, Sie können auch Fotos und Videos einbeziehen, um Ihre Story lebendig zu gestalten und lange Textabschnitte zu vermeiden!"
    },
    "landing": {
      "lblAdd": "Welchen Namen möchten Sie Ihrem Map Journal geben?",
      "phAdd": "Geben Sie den Titel ein...",
      "lblOR": "Oder",
      "lblHelp": "Einführung",
      "quote0": "Eine Geschichte, in die der Zuhörer eintauchen kann, findet immer Anklang.",
      "quote1": "Geschichten sind die beste Methode, neue Ideen in die Welt zu setzen.",
      "quote2": "Unsere Geschichten prägen im wahrsten Sinne des Wortes die Welt. Wenn Sie die Welt verändern möchten, müssen Sie Ihre Geschichte verändern – egal, ob als Einzelner oder als große Organisation.",
      "quote3": "Die kürzeste Entfernung zwischen einem Menschen und der Wahrheit ist eine Geschichte.",
      "quote4": "Menschen möchten nicht noch mehr Informationen. Sie werden regelrecht damit überhäuft. Sie möchten Ihnen Glauben schenken – an Sie, Ihre Ziele, Ihren Erfolg und Ihre Geschichte glauben.",
      "quote5": "Ich bin der Meinung, dass Menschen auf der Suche nach bedeutungsvollen Geschichten sind – Geschichten, die heilen, die inspirieren, die größer als der Einzelne sind.",
      "quote6": "Wenn Sie eine Person oder eine Gruppe beeinflussen möchten, ihnen einen bestimmten Wert für ihr tägliches Leben vermitteln möchten, erzählen Sie ihnen eine fesselnde Geschichte.",
      "quote7": "Wenn Sie davon berichten, ist es ein Aufsatz. Wenn Sie es anschaulich darstellen, ist es eine Geschichte.",
      "quote8": "Wenn Sie die Bäume nicht kennen, haben Sie sich wohl im Wald verlaufen; wenn Sie aber die Geschichten nicht kennen, haben Sie vielleicht den Sinn des Lebens aus den Augen verloren.",
      "quote9": "Durch Geschichten wird das Leben selbst auf kreative Weise zu einer machtvolleren, klareren und bedeutungsvolleren Erfahrung. Sie sind die Ausdrucksform der zwischenmenschlichen Kommunikation.",
      "quote10": "Es gibt nichts Schlimmeres, als eine nicht erzählte Geschichte in sich zu tragen.",
      "quote11": "Vielleicht sind Geschichten auch nur Daten mit einer Seele.",
      "quote12": "Geschichten sind die mit Abstand mächtigsten Waffen eines Motivators.",
      "quote13": "Es liegt in der Natur eine Geschichte, mehr der Fantasie zu überlassen, als zu beschreiben."
    },
    "firstAddSplash": {
      "thisis": "Hierbei handelt es sich um",
      "lblMain": "Dies ist die Hauptanzeige von %BR%"
    }
  }
});