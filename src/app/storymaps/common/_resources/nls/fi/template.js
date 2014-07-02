define(
	 ({
		common: {
			common: {
				edit: "Muokkaa"
			},
			inlineFieldEdit: {
				editMe: "Muokkaa minua!"
			},
			builderPanel: {
				panelHeader: "Tarinan %TPL_NAME% luontitoiminto",
				buttonSave: "TALLENNA",
				buttonShare: "JAA",
				buttonSettings: "ASETUKSET",
				buttonHelp: "OHJE",
				noPendingChange: "Ei odottavaa muutosta",
				unSavedChangeSingular: "1 tallentamaton muutos",
				unSavedChangePlural: "tallentamattomat muutokset",
				popoverSaveWhenDone: "Älä unohda tallentaa, kun olet valmis",
				closeWithPendingChange: "Haluatko varmasti vahvistaa toiminnon? Muutoksesi häviävät.",
				ok: "OK",
				savingApplication: "Tallennetaan sovellusta",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				saveError3: "Otsikko ei voi olla tyhjä",
				// TODO
				signIn: "Kirjaudu sisään tilillä palvelussa",
				shareStatus1: "Sovellusta ei ole tallennettu",
				shareStatus2: "Sovellus on jaettu julkisesti",
				shareStatus3: "Sovellus on jaettu organisaatiossa",
				shareStatus4: "Sovellusta ei ole jaettu"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Otsikko",
				addPopupTitle: "Lisää",
				addPopupDescription: "Lisää uusi näkymä sarjaasi.",
				addPopupButton: "LISÄÄ",
				// Edit
				editPopupTitle: "Muokkaa",
				editPopupDescription: "Muokkaa valittua näkymää",
				editPopupButton: "KÄYTÄ",
				// Add/Edit
				addEditPopupCancelButton: "PERUUTA",
				addEditPopupMyContentBtn: "Valitse omasta sisällöstäni",
				addEditPopupConfigureWebMapBtn: " Määritä"
			},
			share: {
				firstSaveTitle: "Sovellus on tallennettu",
				firstSaveHeader: "Sovellus on nyt tallennettu ArcGIS Onlineen. Lue seuraavat usein esitettyjen kysymysten vastaukset.",
				firstSaveA1: "Jos et tunne ArcGIS Onlinea tai haluat pikavalinnan, jonka kautta pääsee sisällönluonnin käyttöliittymään, voit tallentaa seuraavan linkin: %LINK1%",
				firstSaveA1bis: "Sovellus löytyy myös <a href='%LINK2%' target='_blank'>ArcGIS Online -sisältökansiosta</a>.",
				firstSaveQ2: "Onko sovellukseni jaettu?",
				firstSaveA2: "Sovellusta ei ole jaettu tällä hetkellä. Voit jakaa sen käyttämällä JAA-painiketta.",
				shareTitle: "Jaa sovellus",
				sharePrivateHeader: "Sovellustasi ei ole jaettu. Haluatko jakaa sen?",
				sharePrivateBtn1: "Jaa julkisesti",
				sharePrivateBtn2: "Jaa oman organisaation kanssa",
				sharePrivateWarning: "Jakaminen kohteen %WITH% kanssa on poistettu käytöstä, koska et ole <a href='%LINK%' target='_blank'>Web-kartan</a> omistaja.",
				sharePrivateWarningWith1: "julkisesti",
				sharePrivateWarningWith2: "julkisesti ja organisaation kanssa",
				sharePrivateProgress: "Jakaminen käynnissä...",
				sharePrivateErr: "Jakaminen epäonnistui. Yritä uudelleen tai",
				sharePrivateOk: "Jakamisen päivitys onnistui, ladataan...",
				sharePreviewAsUser: "Esikatselu",
				shareHeader1: "Sovelluksesi on <strong>julkisesti käytettävissä</strong>.",
				shareHeader2: "Organisaatiosi jäsenet voivat käyttää sovellustasi (sisäänkirjauduttuaan).",
				shareLinkHeader: "Jaa sovellus yleisösi kanssa",
				shareLinkOpen: "AVAA",
				shareQ1Opt1: "Miten voin pitää sovelluksen yksityisenä?",
				shareQ1Opt2: "Miten säilytän sovelluksen yksityisenä tai jaan sen julkisesti?",
				shareA1: "Käytä kohdetta %SHAREIMG% <a href='%LINK1%' target='_blank'>sovelluskohteen sivulla</a>. Jos haluat myös lopettaa web-kartan jaon, käytä <a href='%LINK2%' target='_blank'>web-kartan kohdesivua</a>.",
				shareA1bis: "Jos haluat lopettaa myös kohdepalvelun jaon, käytä <a href='%LINK1%' target='_blank'>kohdepalvelun kohdesivua</a>.",
				shareQ2: "Miten muokkaan sovellusta myöhemmin?",
				shareQ2bis: "Miten palaan sisällönluonnin käyttöliittymään?",
				shareA2div1: "Tallenna ja käytä uudelleen seuraavaa linkkiä %LINK1% tai käytä <a href='%LINK2%' target='_blank'>sovelluskohteen sivua</a>.",
				shareA2div2: "Koska olet sovelluksen omistaja, kun olet kirjautunut ArcGIS.com-sivustoon, sovelluksessa näkyy painike, jolla voita avata vuorovaikutteisen muodostusohjelman:",				
				shareQ3: "Minne tiedot on tallennettu?",
				shareA3: "Sovelluksen määritykset tallennetaan <a href='%LINK1%' target='_blank'>tähän web-karttakohteeseen</a> ja <a href='%LINK2%' target='_blank'>tähän web-sovelluskohteeseen</a>. Jos olet käyttänyt Flickr-, Picasa-, Facebook- tai YouTube-tuontia, kuvasi ja videosi jäävät kyseiseen palveluun, eikä niitä kopioida ArcGIS Onlineen.",
				learnMore: "Lisätietoja",
				close: "Sulje"
			},
			settings: {
				header: "Sovellusasetukset",
				cancel: "Peruuta",
				apply: "Käytä",
				tabError: "Tarkista virheet kaikista välilehdistä"
			},
			settingsLayout: {
				title: "Asettelu",
				explain: "Mitä asettelua haluat käyttää?",
				explainInit: "Voit muuttaa tietoja asetusvalintaikkunan kautta.",
				selected: "Valittu asettelu",
				select: "Valitse tämä asettelu"
			},
			settingsTheme: {
				title: "Teema",
				explain: "Valitse sovellusteema tai määritä omat värisi.",
				label: "Otsikon ja sivupaneelin taustavärit"
			},
			settingsHeader: {
				title: "Ylätunniste",
				explain: "Mukauta ylätunnisteen logo (enimmäiskoko on 250 x 50 pikseliä).",
				logoEsri: "Esri-logo",
				logoNone: "Ei logoa",
				logoCustom: "Mukautettu logo",
				logoCustomPlaceholder: "Kuvan URL",
				logoCustomTargetPlaceholder: "Click-through-linkki",
				logoSocialExplain: "Mukauta ylätunnisteen oikean yläkulman linkki.",
				logoSocialText: "Teksti",
				logoSocialLink: "Linkki",
				logoSocialDisabled: "Pääkäyttäjä on poistanut tämän toiminnon käytöstä."
			},
			mediaSelector: {
				lblMap: "Kartta",
				lblPicture: "Kuva",
				lblVideo: "Video",
				lblExternal: "Ulkoinen sivu"
			},
			webMapSelector: {
				radioCurrentWebMap: "Nykyinen Web-kartta",
				radioWebmapApp: "Yksi muista tässä sovelluksessa käytetyistä Web-kartoista",
				radioAnotherWebmap: "Toinen Web-kartta",
				btnSelect: "Valitse",
				lblOr: "tai",
				fieldEnterWebmapId: "Kirjoita Web-kartan tunnus",
				btnConfigure: "Määritä kartta"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Organisaationi",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Oma sisältö",
					favoritesLabel: "Omat suosikit"
				},
				title: "Valitse Web-kartta",
				searchTitle: "Etsi",
				ok: "OK",
				cancel: "Peruuta",
				placeholder: "Anna hakuehto"
			}
		}
	})
);
