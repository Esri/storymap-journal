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
				height: "Höjd",
				create: "Skapa",
				yes: "Ja",
				no: "Nej",
				mystories: "Mina berättelser"
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
				buttonPreview: "Visa berättelse",
				tooltipFirstSave: "Funktionen finns inte tillgänglig förrän du sparar.",
				tooltipNotShared: "Funktionen finns inte tillgänglig förrän du delar.",
				tooltipNotShared2: "Din berättelse är inte delad och bara du har åtkomst till den.",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangePlural: "Väntande ändringar",
				closeWithPendingChange: "Är du säker på att du vill bekräfta åtgärden? Dina ändringar sparas inte.",
				saveError: "Det gick inte att spara, försök igen",
				status1: "Berättelsen är delad men det har uppstått vissa problem med den",
				status2: "Berättelsen är inte delad men det har uppstått vissa problem med den",
				status3: "Berättelsen är publik",
				status4: "Berättelsen delas inom organisationen",
				status5: "Berättelsen är privat",
				status6: "Berättelsen är inte sparad än",
				checking: "Kontrollerar",
				fix: "Fixa"
			},
			saveError: {
				title: "Det gick inte att spara berättelsen",
				err1Div1: "Berättelsen kan inte sparas eftersom du redan har ett annat objekt med samma namn.",
				err1Div2: "Ändra titeln på berättelsen och spara den sedan.",
				btnOk: "Redigera titeln på berättelsen"
			},
			saveErrorSocial: {
				title: "Delningsuppdatering för sociala medier",
				panel1: "Din berättelses presentation på sociala medier har förbättrats, men objekttiteln på ArcGIS-webbapplikationen är inte samma som berättelsens titel.",
				panel1tooltip: "Om du definierar en titel, sammanfattning och miniatyrbild kommer din berättelse att se ut så här:",
				panel2:	"Vilken titel skulle du vilja använda på sociala medier:",
				panel2q1: "Titel på berättelsen (rekommenderas)",
				panel2q1tooltip: "Om du väljer det här alternativet ändras titeln på objektet så att den överensstämmer med titeln på berättelsen. Även övriga ändringar i byggverktyget synkroniseras.",
				panel2q2: "Titel på objektet",
				panel3: "Om du vill förbättra presentationen av din berättelse på sociala medier ännu mer använder du ${MYSTORIES} för att lägga till en sammanfattning och en miniatyrbild.",
				panel4: "Varna mig inte igen för den här berättelsen"
			},
			share: {
				shareTitle: "Dela din berättelse",
				preview: "Förhandsgranska",
				viewlive: "Visa berättelse",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Bara du kan se berättelsen",
				btnOrg: "Organisation",
				btnOrgTooltip: "Enbart medlemmar i din organisation kan visa berättelsen",
				btnPublic: "Allmän",
				btnPublicTooltip: "Alla kan se berättelsen",
				loadingMessage: "Kontrollerar om berättelsen innehåller fel",
				viewToggle1: "Visa berättelsens innehåll",
				viewToggle2: "Stäng berättelsens innehåll",
				socialize: "Socialisera",
				statusPrivate: "Din berättelse är privat, bara du kan se den.",
				statusError: "Det finns fel i berättelsens innehåll som läsarna kommer att märka. Du kan identifiera och lösa dessa fel nedan.",
				statusNoErrPrivate: "Dela din berättelse när du är färdig!",
				mystoriesinvite: "Hantera alla dina berättelser",
				notavailable1: "Det går tyvärr inte att dela din berättelse från byggaren eftersom denna applikation inte driftas på %PRODUCT%.",
				notavailable2: "Det går tyvärr inte att dela din berättelse från byggaren i denna version av Portal for ArcGIS (kräver 10.4 eller senare).",
				notavailable3: "Du kan dela denna berättelse från %LINK%.",
				notavailable4: "Mina berättelser",
				notavailable5: "dess objektsida",
				notavailable6: "Denna funktion stöds inte fullt ut i utvecklingsläge. Beroende på ditt distributionsscenario kanske detta geoobjekt stöds vid distributionen.",
				notavailable7: "Se till att du besöker %MYCONTENT% för att bekräfta att de kartor och lager som används i din berättelse också delas.",
				notavailable8: "Mitt innehåll",
				mystoriesinvite2: "Om du vill förbättra presentationen av din berättelse på sociala nätverk använder du ${MYSTORIES} för att lägga till en sammanfattning och en miniatyrbild."
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
