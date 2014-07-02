define(
	 ({
		common: {
			common: {
				edit: "Redigera"
			},
			inlineFieldEdit: {
				editMe: "Redigera mig!"
			},
			builderPanel: {
				panelHeader: "Byggverktyget %TPL_NAME%",
				buttonSave: "SPARA",
				buttonShare: "DELA",
				buttonSettings: "INSTÄLLNINGAR",
				buttonHelp: "HJÄLP",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangeSingular: "1 osparad ändring",
				unSavedChangePlural: "osparade ändringar",
				popoverSaveWhenDone: "Glöm inte att spara när du är klar",
				closeWithPendingChange: "Vill du bekräfta åtgärden? Du kommer att förlora dina ändringar.",
				ok: "OK",
				savingApplication: "Sparar programmet",
				saveError: "Det gick inte att spara, försök igen",
				saveError3: "Titeln får inte vara tom",
				// TODO
				signIn: "Logga in med ett konto på",
				shareStatus1: "Applikationen har inte sparats",
				shareStatus2: "Applikationen delas offentligt",
				shareStatus3: "Applikationen delas inom organisationen",
				shareStatus4: "Applikationen delas inte"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titel",
				addPopupTitle: "Lägg till",
				addPopupDescription: "Lägg till en ny vy i serien.",
				addPopupButton: "LÄGG TILL",
				// Edit
				editPopupTitle: "Redigera",
				editPopupDescription: "Redigera den valda vyn",
				editPopupButton: "TILLÄMPA",
				// Add/Edit
				addEditPopupCancelButton: "AVBRYT",
				addEditPopupMyContentBtn: "Välj i mitt innehåll",
				addEditPopupConfigureWebMapBtn: " Konfigurera"
			},
			share: {
				firstSaveTitle: "Applikationen har sparats",
				firstSaveHeader: "Din applikation har sparats i ArcGIS Online. Läs följande svar på vanliga frågor.",
				firstSaveA1: "Om du inte är bekant med ArcGIS Online eller vill ha en genväg till skapargränssnittet kan du spara följande länk: %LINK1%",
				firstSaveA1bis: "Applikationen finns även i din <a href='%LINK2%' target='_blank'>ArcGIS Online-innehållsmapp</a>.",
				firstSaveQ2: "Delas min applikation?",
				firstSaveA2: "För tillfället delas inte din applikation. Du kan dela den med knappen DELA.",
				shareTitle: "Dela din applikation",
				sharePrivateHeader: "Din applikation delas inte. Vill du dela den?",
				sharePrivateBtn1: "Dela offentligt",
				sharePrivateBtn2: "Dela med min organisation",
				sharePrivateWarning: "Delning %WITH% har inaktiverats efter som du inte är ägare till <a href='%LINK%' target='_blank'>webbkartan</a>.",
				sharePrivateWarningWith1: "offentligt",
				sharePrivateWarningWith2: "offentligt och med organisationen",
				sharePrivateProgress: "Delning pågår ...",
				sharePrivateErr: "Det gick inte att dela. Försök igen eller",
				sharePrivateOk: "Delningen har uppdaterats, laddar ...",
				sharePreviewAsUser: "Förhandsgranska",
				shareHeader1: "Applikationen är <strong>publikt tillgänglig</strong>.",
				shareHeader2: "Applikationen är tillgänglig för organisationens medlemmar (inloggning krävs).",
				shareLinkHeader: "Dela applikationen med din publik",
				shareLinkOpen: "ÖPPNA",
				shareQ1Opt1: "Hur behåller jag applikationen privat?",
				shareQ1Opt2: "Hur behåller jag applikationen privat eller delar den offentligt?",
				shareA1: "Använd %SHAREIMG% on <a href='%LINK1%' target='_blank'>applikationens objektsida</a>. Du kan även inaktivera delning av webbkartan på <a href='%LINK2%' target='_blank'>webbkartans objektsida</a>.",
				shareA1bis: "Du kan också inaktivera delning av geoobjekttjänsten på <a href='%LINK1%' target='_blank'>geoobjekttjänstens objektsida</a>.",
				shareQ2: "Hur redigerar jag applikationen senare?",
				shareQ2bis: "Hur kommer jag tillbaka till redigeringsgränssnittet?",
				shareA2div1: "Spara följande länk och använd den senare: %LINK1%, eller gå via <a href='%LINK2%' target='_blank'>applikationens objektsida</a>.",
				shareA2div2: "Som ägare till applikationen kan du se en knapp som öppnar det interaktiva byggverktyget när du är inloggad på ArcGIS.com:",				
				shareQ3: "Var lagras data?",
				shareA3: "Apllikationens konfiguration lagras i <a href='%LINK1%' target='_blank'>det här webbkartobjektet</a> och <a href='%LINK2%' target='_blank'>det här webbapplikationsobjektet</a>. Om du har använt import via Flickr, Picasa, Facebook eller YouTube förblir dina bilder och videoklipp lagrade där och dupliceras inte i ArcGIS Online.",
				learnMore: "Läs mer",
				close: "Stäng"
			},
			settings: {
				header: "Programinställningar",
				cancel: "Avbryt",
				apply: "Använd",
				tabError: "Sök efter fel i alla flikar"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Vilken layout vill du använda?",
				explainInit: "Du kan göra ändringar via inställningsdialogrutan.",
				selected: "Markerad layout",
				select: "Markera denna layout"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Välj ett applikationstema eller definiera egna färger.",
				label: "Bakgrundsfärg för rubrik och sidopanel"
			},
			settingsHeader: {
				title: "Rubrik",
				explain: "Anpassa rubriklogotypen (maxstorlek är 250 x 50 px).",
				logoEsri: "Esris logotyp",
				logoNone: "Ingen logotyp",
				logoCustom: "Egen logotyp",
				logoCustomPlaceholder: "Bild-URL",
				logoCustomTargetPlaceholder: "Genomklickningslänkar",
				logoSocialExplain: "Anpassa den övre högra rubriklänken.",
				logoSocialText: "Text",
				logoSocialLink: "Länk",
				logoSocialDisabled: "Den här funktionen har inaktiverats av administratören"
			},
			mediaSelector: {
				lblMap: "Karta",
				lblPicture: "Bild",
				lblVideo: "Video",
				lblExternal: "Extern sida"
			},
			webMapSelector: {
				radioCurrentWebMap: "Aktuell webbkarta",
				radioWebmapApp: "En av de andra webbkartor som används i applikationen",
				radioAnotherWebmap: "En annan webbkarta",
				btnSelect: "Välj",
				lblOr: "eller",
				fieldEnterWebmapId: "Ange ett webbkart-ID",
				btnConfigure: "Konfigurera kartan"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innehåll",
					favoritesLabel: "Mina favoriter"
				},
				title: "Välj webbkarta",
				searchTitle: "Sök",
				ok: "OK",
				cancel: "Avbryt",
				placeholder: "Ange sökterm"
			}
		}
	})
);
