define(
	 ({
		commonCore: {
			common: {
				add: "Lisää",
				edit: "Muokkaa",
				save: "Tallenna",
				next: "Seuraava",
				cancel: "Peruuta",
				back: "Takaisin",
				apply: "Käytä",
				close: "Sulje",
				open: "Avaa",
				start: "Aloitus",
				loading: "Ladataan",
				disabledAdmin: "Pääkäyttäjä on poistanut tämän toiminnon käytöstä.",
				width: "Leveys",
				height: "Korkeus"
			},
			inlineFieldEdit: {
				editMe: "Muokkaa minua!"
			},
			builderPanel: {
				panelHeader: "Tarinan %TPL_NAME% luontitoiminto",
				buttonSaving: "Tallennetaan",
				buttonSaved: "Tallennettu",
				buttonShare: "Jaa",
				buttonSettings: "Asetukset",
				buttonHelp: "Ohje",
				buttonPreview: "Näytä reaaliaikaisesti",
				tooltipFirstSave: "Tämä toiminto ei ole käytettävissä ennen tallennusta.",
				tooltipNotShared: "Tämä toiminto ei ole käytettävissä ennen jakamista.",
				noPendingChange: "Ei odottavaa muutosta",
				unSavedChangePlural: "Odottavat muutokset",
				closeWithPendingChange: "Haluatko varmasti vahvistaa tämän toiminnon? Menetät tekemäsi muutokset.",
				saveError: "Tallennus epäonnistui, yritä uudelleen",
				shareStatus1: "Sovellusta ei ole vielä tallennettu",
				shareStatus2: "Sovellus on jaettu julkisesti",
				shareStatus3: "Sovellus on jaettu organisaatiossa",
				shareStatus4: "Sovellusta ei ole jaettu"
			},
			saveError: {
				title: "Virhe tallennettaessa sovellusta",
				err1Div1: "Sovellusta ei voi tallentaa, koska toisella kohteella on sama nimi (katso <a class='linkagolroot' target='_blank'>sisältökansio</a>).",
				err1Div2: "Muokkaa sovelluksen otsikkoa ja tallenna sovellus sen jälkeen.",
				btnOk: "Muokkaa sovelluksen otsikkoa"
			},
			share: {
				firstSaveTitle: "Sovellus on tallennettu",
				firstSaveHeader: "Sovelluksesi on nyt tallennettu portaaliin %PORTAL%, mutta sitä ei ole vielä jaettu.",
				firstSavePreview: "Esikatselu",
				firstSaveShare: "Jaa",
				firstSaveA1: "Jos et tunnet %PORTAL%a tai haluat pikavalinnan, jonka avulla pääsee luontitoiminnon käyttöliittymään, voit tallentaa seuraavan linkin: %LINK1%",
				firstSaveA1bis: "Sovellus löytyy myös <a href='%LINK2%' target='_blank'>%PORTAL% -sisältökansiosta</a>.",
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
				shareHeader1: "Sovelluksesi on <strong>julkisesti käytettävissä</strong>.",
				shareHeader2: "Organisaatiosi jäsenet voivat käyttää sovellustasi (sisäänkirjauduttuaan).",
				shareLinkCopy: "Kopioi",
				shareLinkCopied: "Kopioitu",
				shareQ0: "Miten upotan sovelluksen Web-sivulle?",
				shareQ1Opt1: "Miten voin pitää sovelluksen yksityisenä?",
				shareQ1Opt2: "Miten säilytän sovelluksen yksityisenä tai jaan sen julkisesti?",
				shareA1: "Käytä kohdetta %SHAREIMG% <a href='%LINK1%' target='_blank'>sovelluskohteen sivulla</a>.",
				shareQ2bis: "Miten palaan luontitoiminnon käyttöliittymään?",
				shareA2div1: "Tallenna ja käytä uudelleen seuraavaa linkkiä %LINK1% tai käytä <a href='%LINK2%' target='_blank'>sovelluskohteen sivua</a>.",
				shareA2div2: "Koska olet sovelluksen omistaja, kun olet kirjautunut %PORTAL%-sivustoon, sovelluksessa näkyy painike, jolla voita avata luontitoiminnon:",				
				shareQ3: "Minne aineistot on tallennettu?",
				shareA3: "Tarinan %TPL_NAME% aineisto ja määritykset tallennetaan <a href='%LINK2%' target='_blank'>tähän Web-sovelluskohteeseen</a>. Jos olet käyttänyt Flickr-, Picasa-, Facebook- tai YouTube-tuontia, kuviasi ja videoitasi ei kopioida portaaliin %PORTAL%."
			},
			settings: {
				header: "Asetukset",
				tabError: "Tarkista virheet kaikista välilehdistä"
			},
			settingsLayout: {
				title: "Asettelu",
				explain: "Mitä asettelua haluat käyttää?",
				explainInit: "Voit muuttaa asettelua asetusvalintaikkunan kautta milloin tahansa.",
				viewExample: "Katsele reaaliaikaista esimerkkiä"
			},
			settingsTheme: {
				title: "Teema"
			},
			settingsHeader: {
				title: "Ylätunniste",
				logoEsri: "Esri-logo",
				logoNone: "Ei logoa",
				logoCustom: "Mukautettu logo",
				logoCustomPlaceholder: "URL-osoite (enint. 250x50 pikseliä)",
				logoCustomTargetPlaceholder: "Click-through-linkki",
				logoSocialExplain: "Mukauta ylätunnisteen linkkiä.",
				logoSocialText: "Teksti",
				logoSocialLink: "Linkki",
				lblSmallHeader: "Käytä tiivistä otsikko (ei alaotsikkoa)"
			},
			header: {
				title: "Muokkaa tarinan %TPL_NAME% otsikkoa",
				subtitle: "Muokkaa tarinan %TPL_NAME% alaotsikkoa"
			}
		}
	})
);
