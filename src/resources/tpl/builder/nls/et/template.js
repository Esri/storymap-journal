define(
	 ({
		builder: {
			layouts: {
				mainStage: "Põhisektsioon",
				sideTitle: "Külgpaneel",
				sideDescr: "Ohtra tekstiga loo jaoks sobiv paigutus, kus saate oma fotod, videod ja kaardid kombineerida ühtseks selget sõnumit kandvaks artikliks.",
				floatTitle: "Ujuv paneel",
				floatDescr: "Paigutus, mis tõmbab tähelepanu kaartidele, võimaldades samas läbipaistva lühitekstipaneeli kaudu sisu jutustada."
			},
			common: {
				lblStatus1: "Publitseeritud",
				lblStatus2: "Mustand",
				lblStatus3: "Peidetud"
			},
			settingsLayoutOptions: {
				title: "Paigutuse valikud",
				cfgLeft: "Vasak",
				cfgRight: "Parem",
				cfgSmall: "Väike",
				cfgMedium: "Keskmine",
				cfgLarge: "Suur",
				socialLinksLabel: "Kuva jagamise lingid iga jaotise allservas",
				socialLinksDescr: "Sel viisil saavad lugejad viidata teie malli %TPL_NAME% kindlatele jaotistele ja neid esile tõsta. Kui kasutate näiteks jaotiste jagamise ikooni, satub lugeja lehel %TPL_NAME% sellesse konkreetsesse jaotisse, mitte loo algusse. Tiitlijaotises asuva sotsiaalmeedia lingi kaudu saavad lugejad tervet teie lehte %TPL_NAME% (päisesakki) jagada nii, et uus lugeja viiakse lehe %TPL_NAME% algusse."
			},
			settingsLayoutFonts: {
				title: "Fondid",
				defaultLbl: "Vaikimisi",
				sectionTitleLbl: "Jaotise pealkiri",
				sectionContentLbl: "Jaotise sisu"
			},
			initPopup: {
				title: "Tere tulemast"
			},
			addEditPopup: {
				disabled: "Jaotise lisamine on keelatud, sest lubatud jaotiste maksimaalne arv on ületatud.",
				titleAdd: "Jaotise lisamine",
				titleAddHome: "Kodujaotise lisamine",
				titleEdit: "Jaotise muutmine",
				step: "Samm",
				stepMainStageExplain: "Põhisektsiooni sisu",
				stepPanelExplain: "Sisu",
				stepMainStageNextTooltip: "Sisestage jaotise nimi ja valige põhisektsiooni sisu",
				stepMainStageNextTooltip2: "Valige põhisektsiooni sisu",
				step2NextTooltip: "Sisestage jaotise nimi ja %LAYOUT-TYPE% sisu",
				stepNextTooltipNext: "järgmisesse etappi liikumiseks",
				stepNextTooltipAdd: "jaotise lisamiseks",
				firstAddExplain: "Esimeseks jaotiseks on teie kodujaotis, mis on justkui teie loo esileht. Äsja määratletud pealkiri kuvatakse suure fondiga.",
				firstAddLeanMore: "Lisateave",
				titlePlaceholder: "Jaotise nimi..."
			},
			addEditViewText: {
				editorPlaceholder: "Siia saate lisada teksti, lingid ja väiksemad pildid.",
				editorActionsTitle: "Põhisektsiooni toimingud",
				editorActionsHelpDescr: "Nende juhtelementide abil saate luua põhisektsiooni muutvad lingid. Näiteks võite soovida, et kui lugeja klikib kindlat linki, kuvatakse kaardil suuremana konkreetne asukoht, kuvatakse mõni muu veebikaart või kuvatakse pilt.",
				mainStageDisabled: "Kui redaktor on maksimeeritud, on põhisektsiooni toimingud keelatud"
			},
			organizePopup: {
				title: "Paiguta",
				lblHeader: "Sisu korraldamiseks lohistage loo jaotised soovitud kohta.",
				lblColTitle: "Pealkiri",
				lblColPubDate: "Avaldamise kuupäev",
				lblColStatus: "Staatus",
				checkDisplayReverse: "Kuva jaotised pöördjärjestuses",
				btnApplyWarning: "Kinnita %NB% jaotis(t)e kustutamine",
				deleteTooltip: "Kustuta",
				firstSectionExplain: "(Kodujaotist ei saa teisaldada)",
				exportMainStage: "Põhisektsiooni sisu",
				exportPanel: "Paneeli sisu",
				exportActions: "Põhisektsiooni toimingud"
			},
			exportData: {
				btn: "Ekspordi sisu",
				tooltip: "Kui peaksite oma sisu kogemata kustutama, saate sisu eksportimise kaudu luua varukoopia ja seda vaadata. Kopeerige ja kleepige vaid lehe sisu mis tahes tekstiprotsessorisse."
			},
			help: {
				lblHelp: "Abi",
				lblAdd: "Jaotise lisamine",
				lblSettings: "Seaded",
				lblOrga: "Korralda sisu",
				lblEdit: "Muudatused",
				lblPublish: "Jaga",
				lblTips: "Vihjed",
				lblMore: "Soovite rohkem?",
				lblLink: "Külastage Esri kaardilugude veebisaiti.",
				content1Div1: "Artikli koostamisel saate kaasata mitmesuguseid laade. <strong>%LAYOUT_TITLE%</strong> sisaldab enamasti teksti, pilte ja videoid, kaardid aga asuvad <strong>põhisektsioonis</strong>. %TPL_NAME% lubab teil siiski ka pilte, diagramme ja videot põhisektsioonis kasutada.",
				content1Div2: "Jaotiste lisamisega saate oma loo jutustada täpselt nii, nagu soovite. Kui lugeja liigub jaotise %LAYOUT_TITLE% tekstis kerides allapoole, saate põhisektsioonis kaarti liigutada või olulisi kohti suuremana näidata; samuti saab Teie sõnumi toetamiseks automaatselt uusi kaarte ja pilte sisse ja välja lülitada.",
				content2Div1: "Dialoogis Seaded saate muuta malli %TPL_NAME% välimust. Saate muuta paigutust, valida erineva värviskeemi, muuta teksti fonti jne.",
				content2Div2: "Samuti saate asendada Esri logo Teie kaubamärki tutvustava logoga. Samuti saate määrata veebisaidi, mis avaneb, kui lugejad klikivad Teie logol, et saada rohkem teavet.",
				content3Div1: "Sisu korraldatakse jaotistena. Jaotiste arv pole piiratud (võite neid käsitleda miniatuursete peatükkidena). Kuna nende peatükkide voog peaks olema sujuv, saate korraldamisaknas jaotiste järjestust muuta või jaotisi ka kustutada.",
				content4Div1: "Kas olete leidnud vea või soovite materjali muuta? Ärge muretsege. Rakenduse muutmisikooni kaudu saate sisu igal ajal muuta. Muutmisvõimaluste kasutamist tuleb teil malli %TPL_NAME% väljatöötamisel kindlasti ohtralt ette!",
				content5Div1: "%TPL_NAME% salvestatakse algselt privaatsena. Nupu Jaga abil saate jagada seda teistega. Malli %TPL_NAME% saate jagada avalikult, nii et igaühel on sellele juurdepääs.",
				content5Div2: "Olenevalt teie kontost saate valida ka malli %TPL_NAME% jagamise ainult oma organisatsiooni inimestega, nii et teistel puuduks sellele juurdepääs.",
				content6Div1: "Kodujaotise pealkiri on ka teie ajakirja pealkiri, käsitlege kodujaotist oma loo esilehena. Kodujaotise pealkiri on nähtav ka siis, kui lugejad teie ajakirja sees liiguvad.",
				content6Div2: "Paigutus %LAYOUT_TITLE% ei pea sisaldama ainult teksti, võite lisada ka pilte ja videoid, et muuta lugu vaheldusrikkamaks ja eraldada pikki tekstijaotisi!"
			},
			landing: {
				lblAdd: "Mis nime soovite kaardiajakirjale panna?",
				phAdd: "Sisestage pealkiri...",
				lblOR: "Või",
				lblHelp: "Tutvu võimalustega"
			},
			firstAddSplash: {
				thisis: "See on",
				lblMain: "See on %BR% põhisektsioon"
			}
        }
    })
);
