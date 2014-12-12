define(
	 ({
		commonCore: {
			common: {
				add: "Lägg till",
				edit: "Redigera",
				save: "Spara",
				next: "Nästa",
				cancel: "Avbryt",
				back: "Bakåt",
				apply: "Använd",
				close: "Stäng",
				open: "Öppna",
				start: "Starta",
				loading: "Läser in",
				disabledAdmin: "Den här funktionen har inaktiverats av administratören",
				width: "Bredd",
				height: "Höjd"
			},
			inlineFieldEdit: {
				editMe: "Redigera mig!"
			},
			builderPanel: {
				panelHeader: "Byggverktyget %TPL_NAME%",
				buttonSaving: "Sparar",
				buttonSaved: "Sparad",
				buttonShare: "Dela",
				buttonSettings: "Inställningar",
				buttonHelp: "Hjälp",
				buttonPreview: "Visa live",
				tooltipFirstSave: "Funktionen finns inte tillgänglig förrän du sparar.",
				tooltipNotShared: "Funktionen finns inte tillgänglig förrän du delar.",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangePlural: "Väntande ändringar",
				closeWithPendingChange: "Är du säker på att du vill bekräfta åtgärden? Dina ändringar sparas inte.",
				saveError: "Det gick inte att spara, försök igen",
				shareStatus1: "Applikationen har inte sparats ännu",
				shareStatus2: "Applikationen delas offentligt",
				shareStatus3: "Applikationen delas inom organisationen",
				shareStatus4: "Applikationen delas inte"
			},
			saveError: {
				title: "Det gick inte att spara applikationen",
				err1Div1: "Det går inte att spara applikationen eftersom du redan har ett annat objekt med samma namn (se din <a class='linkagolroot' target='_blank'>innehållsmapp</a>).",
				err1Div2: "Ändra titeln på applikationen och spara den sedan.",
				btnOk: "Redigera titeln på applikationen"
			},
			share: {
				firstSaveTitle: "Applikationen har sparats",
				firstSaveHeader: "Din applikation har nu sparats i %PORTAL%, men den har inte delas ännu.",
				firstSavePreview: "Förhandsgranska",
				firstSaveShare: "Dela",
				firstSaveA1: "Om du inte är bekant med %PORTAL% eller vill ha en genväg till gränssnittet för byggverktyget kan du spara följande länk: %LINK1%",
				firstSaveA1bis: "Programmet finns även i <a href='%LINK2%' target='_blank'>%PORTAL%-innehållsmappen</a>.",
				shareTitle: "Dela din applikation",
				sharePrivateHeader: "Applikationen delas inte, vill du dela den?",
				sharePrivateBtn1: "Dela offentligt",
				sharePrivateBtn2: "Dela med min organisation",
				sharePrivateWarning: "Delning %WITH% har inaktiverats efter som du inte är ägare till <a href='%LINK%' target='_blank'>webbkartan</a>.",
				sharePrivateWarningWith1: "offentligt",
				sharePrivateWarningWith2: "offentligt och med organisationen",
				sharePrivateProgress: "Delning pågår ...",
				sharePrivateErr: "Det gick inte att dela. Försök igen eller",
				sharePrivateOk: "Delningen har uppdaterats, laddar ...",
				shareHeader1: "Din applikation är <strong>publikt tillgänglig</strong>.",
				shareHeader2: "Din applikation är tillgänglig för organisationens medlemmar (inloggning krävs).",
				shareLinkCopy: "Kopiera",
				shareLinkCopied: "Kopierad",
				shareQ0: "Hur bäddar jag in applikationen i en webbsida?",
				shareQ1Opt1: "Hur behåller jag applikationen privat?",
				shareQ1Opt2: "Hur behåller jag applikationen privat eller delar den publikt?",
				shareA1: "Använd %SHAREIMG% på <a href='%LINK1%' target='_blank'>applikationens objektsida</a>.",
				shareQ2bis: "Hur kommer jag tillbaka till gränssnittet för byggverktyget?",
				shareA2div1: "Spara följande länk och använd den senare: %LINK1%, eller gå via <a href='%LINK2%' target='_blank'>applikationens objektsida</a>.",
				shareA2div2: "Som ägare till applikationen kan du se en knapp för att öppna byggverktyget när du är inloggad på %PORTAL%:",				
				shareQ3: "Var lagras data?",
				shareA3: "Data och konfigureringar för %TPL_NAME% sparas i <a href='%LINK2%' target='_blank'>det här webbapplikationsobjektet</a>. Om du har använt import via Flickr, Picasa, Facebook eller YouTube har dina bilder och videoklipp inte duplicerats i %PORTAL%."
			},
			settings: {
				header: "Inställningar",
				tabError: "Kontrollera alla flikar efter fel"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Vilken layout vill du använda?",
				explainInit: "Du kan byta layout när som helst via inställningsdialogrutan.",
				viewExample: "Visa ett liveexempel"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Rubrik",
				logoEsri: "Esris logotyp",
				logoNone: "Ingen logotyp",
				logoCustom: "Egen logotyp",
				logoCustomPlaceholder: "URL (max 250x50 pixlar)",
				logoCustomTargetPlaceholder: "Genomklickningslänkar",
				logoSocialExplain: "Anpassa rubriklänken.",
				logoSocialText: "Text",
				logoSocialLink: "Länk",
				lblSmallHeader: "Använd kompakt rubrik (ingen undertitel)"
			},
			header: {
				title: "Redigera titel för %TPL_NAME%",
				subtitle: "Redigera undertitel för %TPL_NAME%"
			}
		}
	})
);
