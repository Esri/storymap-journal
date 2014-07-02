define(
	 ({
		builder: {
			layouts: {
				mainStage: "Põhilava",
				sideTitle: "Külgpaneel",
				sideDescr: "Ohtra tekstiga loo jaoks sobiv paigutus, kus saate oma fotod, videod ja kaardid kombineerida ühtseks selget sõnumit kandvaks artikliks.",
				floatTitle: "Ujupaneel",
				floatDescr: "Paigutus, mis tõmbab tähelepanu kaartidele, võimaldades samas läbipaistva lühitekstipaneeli kaudu sisu jutustada."
			},
			common: {
				lblStatus1: "Avaldatud",
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
				socialLinksLabel: "Kuva jagamislingid iga jaotise allservas",
				socialLinksDescr: "Sel viisil saavad lugejad viidata teie malli %TPL_NAME% kindlatele jaotistele ja neid esile tõsta. Kui kasutate näiteks jaotiste jagamise ikooni, satub lugeja lehel %TPL_NAME% sellesse konkreetsesse jaotisse, mitte loo algusse. Tiitlijaotises asuva sotsiaalmeedia lingi kaudu saavad lugejad tervet teie lehte %TPL_NAME% (päisesakki) jagada nii, et uus lugeja viiakse lehe %TPL_NAME% algusse."
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
				stepMainStageExplain: "Põhilava sisu",
				stepPanelExplain: "Sisu",
				stepMainStageNextTooltip: "Sisestage jaotise nimi ja valige põhilava sisu",
				step2NextTooltip: "Sisestage jaotise nimi ja %LAYOUT-TYPE% sisu",
				stepNextTooltipNext: "järgmisesse etappi liikumiseks",
				stepNextTooltipAdd: "jaotise lisamiseks",
				firstAddExplain: "Esimeseks jaotiseks on teie kodujaotis, mis on justkui teie loo esileht. Äsja määratletud pealkiri kuvatakse suure fondiga.",
				firstAddLeanMore: "Lisateave",
				titlePlaceholder: "Jaotise nimi..."
			},
			addEditViewText: {
				editorPlaceholder: "Siia saate lisada teksti, lingid ja väiksemad pildid.",
				editorActionsTitle: "Põhilava toimingud",
				editorActionsHelpDescr: "Nende juhtelementide abil saate luua põhilava muutvad lingid. Näiteks võite soovida, et kui lugeja klikib kindlat linki, kuvatakse kaardil suuremana kindel asukoht, kuvatakse mõni muu veebikaart või kuvatakse pilt."
			},
			organizePopup: {
				title: "Paiguta",
				lblHeader: "Sisu korraldamiseks lohistage loo jaotised soovitud kohta.",
				lblColTitle: "Pealkiri",
				lblColPubDate: "Avaldamiskuupäev",
				lblColStatus: "Staatus",
				checkDisplayReverse: "Kuva jaotised pöördjärjestuses",
				btnApplyWarning: "Kinnita %NB% jaotis(t)e kustutamine",
				deleteTooltip: "Kustuta",
				firstSectionExplain: "(Kodujaotist ei saa teisaldada)"
			},
			exportData: {
				btn: "Ekspordi sisu",
				tooltip: "Kui peaksite oma ajakirja kogemata kustutama, saate sisu eksportimise kaudu luua ajakirja varukoopia ja seda vaadata. Kopeerige ja kleepige vaid lehe sisu mis tahes tekstiprotsessorisse."
			},
			help: {
				lblHelp: "Abi",
				lblAdd: "Jaotise lisamine",
				lblSettings: "Seaded",
				lblOrga: "Korralda sisu",
				lblEdit: "Muudatused",
				lblPublish: "Jaga",
				lblTips: "Vihjed",
				lblMore: "Kas sellest ei piisa?",
				lblLink: "Külastage kaardilugude veebisaiti.",
				content1Div1: "Artikli koostamisel saate kaasata mitmesuguseid laade. <strong>%LAYOUT_TITLE%</strong> sisaldab enamasti teksti, pilte ja videoid, kaardid aga asuvad <strong>põhilaval</strong>. %TPL_NAME% lubab teil siiski ka pilte, diagramme ja videot põhilaval kasutada.",
				content1Div2: "Jaotiste lisamisega saate oma loo jutustada täpselt nii, nagu soovite. Kui lugeja liigub jaotise %LAYOUT_TITLE% tekstis kerides allapoole, saab põhilaval kaarti liigutada või olulisi kohti suuremana näidata; samuti saab teie sõnumi toetamiseks automaatselt uusi kaarte ja pilte sisse ja välja lülitada.",
				content2Div1: "Siin saate kohandada malli %TPL_NAME% ilmet. Muu hulgas saate siin määratleda värviskeemid, paigutused ja laiused.",
				content2Div2: "Samuti saate lisada Facebooki, Twitteri ja Bitly kaudu jagamise lingid, et lugejad saaksid teie malli %TPL_NAME% mugavalt edasi levitada.",
				content3Div1: "Sisu korraldatakse jaotistena. Jaotiste arv pole piiratud (võite neid käsitleda miniatuursete peatükkidena). Kuna nende peatükkide voog peaks olema sujuv, saate korraldamisaknas jaotiste järjestust muuta või jaotisi ka kustutada.",
				content4Div1: "Kas olete leidnud vea või soovite materjali muuta? Ärge muretsege. Rakenduse muutmisikooni kaudu saate sisu igal ajal muuta. Muutmisvõimaluste kasutamist tuleb teil malli %TPL_NAME% väljatöötamisel kindlasti ohtralt ette!",
				content5Div1: "%TPL_NAME% salvestatakse teie portaali %PORTAL% kontole ja see on vaikimisi privaatne. Te saate valida, kas soovite seda jagada üksnes oma organisatsiooni piires või kogu maailmaga. Selleks, et seda oleks mugavam jagada, anname teile ka lühikese püsilingi.",
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
				thisis: "See on"
			}
        }
    })

);
