define(
	 ({
		builder: {
			layouts: {
				mainStage: "Päävaihe",
				sideTitle: "Sivupaneeli",
				sideDescr: "Paljon tekstiä sisältävän tarinan asettelu, joka erottuu muista siten, että se yhdistää valokuvat, videot ja kartat yhdeksi selkeäksi kohdennetuksi viestiksi.",
				floatTitle: "Irrallinen ruutu",
				floatDescr: "Asettelu, joka korostaa kartografiaa, kun lyhytmuotoinen tarina näkyy läpinäkyvässä tekstiruudussa."
			},
			common: {
				lblStatus1: "Julkaistut",
				lblStatus2: "Luonnos",
				lblStatus3: "Piilotettu"
			},
			settingsLayoutOptions: {
				title: "Taiton asetukset",
				cfgLeft: "Vasen",
				cfgRight: "Oikea",
				cfgSmall: "Pieni",
				cfgMedium: "Keskisuuri",
				cfgLarge: "Suuri",
				socialLinksLabel: "Näytä jakamislinkit kunkin osan alareunassa",
				socialLinksDescr: "Tämän toiminnon avulla lukijat voivat viitata tiettyihin tarinan %TPL_NAME% osiin tai mainostaa niitä. Jos käytät esimerkiksi osien jakamiskuvaketta, lukijat päätyvät tarinan %TPL_NAME% tiettyyn osaan eivätkä tarinan alkuun. Lukijat voivat käyttää otsikko-osan sosiaalisen median linkkiä koko tarinan %TPL_NAME% (Otsikko-välilehti) mainostamiseen, jolloin he päätyvät tarinan %TPL_NAME% alkuun."
			},
			settingsLayoutFonts: {
				title: "Fontit",
				defaultLbl: "Oletusarvo",
				sectionTitleLbl: "Osan otsikko",
				sectionContentLbl: "Osan sisältö"
			},
			initPopup: {
				title: "Tervetuloa"
			},
			addEditPopup: {
				disabled: "Lisää osa -toiminto on pois käytöstä, koska on saavutettu sallittujen osien enimmäismäärä.",
				titleAdd: "Lisää osa",
				titleAddHome: "Lisää Kotisivu-osa",
				titleEdit: "Muokkaa osaa",
				step: "Vaihe",
				stepMainStageExplain: "Päävaiheen sisältö",
				stepPanelExplain: "Sisältö",
				stepMainStageNextTooltip: "Kirjoita osan otsikko ja valitse päävaiheen sisältö",
				stepMainStageNextTooltip2: "Valitse päävaiheen sisältö",
				step2NextTooltip: "Kirjoita osan otsikko ja taiton %LAYOUT-TYPE% sisältö",
				stepNextTooltipNext: "siirry seuraavaan vaiheeseen",
				stepNextTooltipAdd: "osan lisäystä varten",
				firstAddExplain: "Ensimmäinen osa on Kotisivu-osa, joka on ikään kuin tarinasi kansilehti. Juuri määrittämäsi otsikko näytetään suurella fontilla.",
				firstAddLeanMore: "Lisätietoja",
				titlePlaceholder: "Osan otsikko..."
			},
			addEditViewText: {
				editorPlaceholder: "Lisää tähän tekstiä, linkkejä ja pieniä kuvia.",
				editorActionsTitle: "Päävaiheen toiminnot",
				editorActionsHelpDescr: "Näiden kontrollien avulla voit luoda linkkejä, jotka muuttavat päävaihetta. Kun lukija napsauttaa esimerkiksi linkkiä, haluat ehkä tarkentaa karttaa tiettyyn sijaintiin, tuoda näkyviin toisen Web-kartan tai kuvan.",
				mainStageDisabled: "Päävaiheen toiminnot eivät ole käytettävissä, kun muokkaus on maksimoitu"
			},
			organizePopup: {
				title: "Järjestä",
				lblHeader: "Järjestä sisältösi vetämällä ja pudottamalla osioita.",
				lblColTitle: "Otsikko",
				lblColPubDate: "Julkaisupäivämäärä",
				lblColStatus: "Tila",
				checkDisplayReverse: "Näytä osat käänteisessä järjestyksessä",
				btnApplyWarning: "Vahvista %NB% osan poisto",
				deleteTooltip: "Poista",
				firstSectionExplain: "(Kotisivuosaa ei voi siirtää)",
				exportMainStage: "Päävaiheen sisältö",
				exportPanel: "Ruudun sisältö",
				exportActions: "Päävaiheen toiminnot"
			},
			exportData: {
				btn: "Vie sisältö",
				tooltip: "Sisällön viennin avulla voit tarkastella sisältöä ja luoda siitä varmuuskopion tahattoman poistamisen varalle. Sivun sisältö tarvitsee vain kopioida ja liittää johonkin tekstinkäsittelyohjelmaan."
			},
			help: {
				lblHelp: "Ohje",
				lblAdd: "Lisää osa",
				lblSettings: "Asetukset",
				lblOrga: "Järjestä sisältö",
				lblEdit: "Muokkaukset",
				lblPublish: "Jaa",
				lblTips: "Vinkkejä",
				lblMore: "Haluatko lisää?",
				lblLink: "Siirry Esrin Tarinakartat-sivustoon.",
				content1Div1: "Voit integroida useita tyylejä, kun muodostat tarinaasi. <strong>%LAYOUT_TITLE%</strong> sisältää tavallisesti tekstin, kuvat ja videot, kun kartat ovat yleensä <strong>päävaiheessa</strong>. Tarinassa %TPL_NAME% voit kuitenkin esitellä kuvia, kaavioita ja videoita myös päävaiheessa.",
				content1Div2: "Lisäämällä osioita voit mukauttaa kattavasti tarinankerrontakokemustasi. Kun lukijat vierittävät tyylin %LAYOUT_TITLE% mukaista tekstiäsi, voit tehostaa viestiäsi vierittämällä päävaiheen karttaa tai tarkentamalla tärkeisiin pisteisiin tai kytkemällä uudet kartat ja kuvat näkymään automaattisesti.",
				content2Div1: "Asetukset-valintaikkunassa voit muuttaa tarinan %TPL_NAME% ulkoasua. Voit muuttaa asettelua, valita eri värimallin, muuttaa tekstin fonttia jne.",
				content2Div2: "Voit myös korvata Esri-logon omalla logollasi, jotta sivusto on tuotemerkkisi mukainen. Voit myös määrittää Web-sivuston, joka avataan, jos lukija napsauttaa logoasi. Näin he voivat saada lisätietoja.",
				content3Div1: "Sisältösi on jaettu osiin. Voit lisätä niin monta osaa kuin haluat (ajattele, että ne ovat lyhyitä kappaleita). Kappaleiden virta on tärkeä. Järjestä-näkymässä voit järjestää osia uudelleen tai poistaa niitä.",
				content4Div1: "Löysitkö virheen vai haluatko muuttaa aineistoasi? Ei huolta. Etsi muokkauskuvaketta sovelluksesta tehdäksesi muutoksia sisältöösi. Käytät muokkaustoimintoja useita kertoja, kun kehität tarinaa %TPL_NAME%.",
				content5Div1: "Kun tallennat tarinasi %TPL_NAME%, se on yksityinen oletusarvoisesti. Voit jakaa tarinan muiden kanssa käyttämällä Jaa-painiketta. Voit jakaa tarinasi %TPL_NAME% julkisesti, jotta kuka tahansa voi lukea sen.",
				content5Div2: "Tilisi asetusten mukaan voit myös jakaa tarinasi %TPL_NAME% vain organisaatiosi jäsenille, jotta muut eivät pääse sitä lukemaan.",
				content6Div1: "Kotisivu-osan otsikko on myös päiväkirjasi otsikko; Kotisivu-osa on ikään kuin tarinasi kansilehti. Kotisivu-osan otsikko pysyy näkyvissä, kun lukijasi selaavat päiväkirjaa.",
				content6Div2: "%LAYOUT_TITLE%-asettelusi ei tarvitse olla vain tekstiä, vaan voit harkita valokuvien ja videoiden sisällyttämistä tarinan elävöittämiseksi ja pitkien tekstiosuuksien katkaisemiseksi!"
			},
			landing: {
				lblAdd: "Millä nimellä haluat kutsua karttapäiväkirjaasi?",
				phAdd: "Anna otsikko...",
				lblOR: "Tai",
				lblHelp: "Käy kierroksella"
			},
			firstAddSplash: {
				thisis: "Tämä on",
				lblMain: "Tämä on %BR%-päävaihe"
			}
        }
    })
);
