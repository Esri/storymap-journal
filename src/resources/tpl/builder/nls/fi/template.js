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
				socialLinksDescr: "Tämän toiminnon avulla lukijat voivat viitata tai manostaa tiettyjä tarinan %TPL_NAME% osia. Jos käytät esimerkiksi osien jakamiskuvaketta, lukijat osuvat tuohon tiettyyn tarinan %TPL_NAME% osaan eivätkä tarinan alkuun. Lukijat voivat käyttää otsikko-osan sosiaalisen median linkkiä koko tarinan %TPL_NAME% (Otsikko-välilehti) mainostamiseen, jolloin he osuvat tarinan %TPL_NAME% alkuun."
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
				editorActionsHelpDescr: "Näiden kontrollien avulla voit luoda linkkejä, jotka muuttavat päävaihetta. Kun lukija napsauttaa esimerkiksi linkkiä, haluat ehkä tarkentaa karttaa tiettyyn sijaintiin, tuoda näkyviin toisen Web-kartan tai kuvan."
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
				firstSectionExplain: "(Kotisivuosaa ei voi siirtää)"
			},
			exportData: {
				btn: "Vie sisältö",
				tooltip: "Sisällön viemisen avulla voit tarkastella ja luoda päiväkirjan varmuuskopion, jos se poistetaan vahingossa. Sinun tarvitsee vain kopioida ja liittää sivun sisältö johonkin tekstinkäsittelyohjelmaan."
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
				lblLink: "Siirry Tarinakartat-sivustoon.",
				content1Div1: "Voit integroida useita tyylejä, kun muodostat tarinaasi. <strong>%LAYOUT_TITLE%</strong> sisältää tavallisesti tekstin, kuvat ja videot, kun kartat ovat yleensä <strong>päävaiheessa</strong>. Tarinassa %TPL_NAME% voit kuitenkin esitellä kuvia, kaavioita ja videoita myös päävaiheessa.",
				content1Div2: "Lisäämällä osioita voit mukauttaa kattavasti tarinankerrontakokemustasi. Kun lukijat vierittävät tyylin %LAYOUT_TITLE% mukaista tekstiäsi, voit tehostaa viestiäsi vierittämällä päävaiheen karttaa tai tarkentamalla tärkeisiin pisteisiin tai kytkemällä uudet kartat ja kuvat näkymään automaattisesti.",
				content2Div1: "Tässä voit säätää sitä, miltä %TPL_NAME% näyttää. Värimalleja, asetteluja ja leveyksiä säädetään tässä.",
				content2Div2: "Voit myös lisätä jaettavia linkkejä Facebookiin, Twitteriin ja Bitlyyn, jotta lukijat voivat helposti levittää %TPL_NAME% -tarinasi muille.",
				content3Div1: "Sisältösi on jaettu osiin. Voit lisätä niin monta osaa kuin haluat (ajattele, että ne ovat lyhyitä kappaleita). Kappaleiden virta on tärkeä. Järjestä-näkymässä voit järjestää osia uudelleen tai poistaa niitä.",
				content4Div1: "Löysitkö virheen vai haluatko muuttaa aineistoasi? Ei huolta. Etsi muokkauskuvaketta sovelluksesta tehdäksesi muutoksia sisältöösi. Käytät muokkaustoimintoja useita kertoja, kun kehität tarinaa %TPL_NAME%.",
				content5Div1: "Tarinasi %TPL_NAME% on tallennettu portaalin %PORTAL% tiliin, ja se on oletusarvoisesti yksityinen. Voit jakaa sen organisaatiosi kanssa tai määrittää sen kaikille avoimeksi. Järjestelmä määrittää tarinallesi myös lyhennetyn URL-osoitteen, jotta voit jakaa sen helposti.",
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
				thisis: "Tämä on"
			}
        }
    })

);
