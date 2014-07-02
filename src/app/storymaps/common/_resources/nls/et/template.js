define(
	 ({
		common: {
			common: {
				edit: "Muuda"
			},
			inlineFieldEdit: {
				editMe: "Muuda mind !"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% koostur",
				buttonSave: "SALVESTA",
				buttonShare: "JAGA",
				buttonSettings: "SEADED",
				buttonHelp: "ABI",
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangeSingular: "1 mittesalvestatud muudatus",
				unSavedChangePlural: "mittesalvestatud muudatust",
				popoverSaveWhenDone: "Ärge unustage salvestada, kui olete lõpetanud",
				closeWithPendingChange: "Olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused võivad kaduma minna.",
				ok: "Ok",
				savingApplication: "Rakenduse salvestamine",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				saveError3: "Pealkiri ei saa olla tühi",
				// TODO
				signIn: "Palun logige konto kaudu sisse",
				shareStatus1: "Rakendus pole salvestatud",
				shareStatus2: "Rakendus on jagatud avalikult",
				shareStatus3: "Rakendus on jagatud organisatsiooniga",
				shareStatus4: "Rakendus pole jagatud"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Pealkiri",
				addPopupTitle: "Lisa",
				addPopupDescription: "Saate oma sarjale lisada uue vaate.",
				addPopupButton: "LISA",
				// Edit
				editPopupTitle: "Muuda",
				editPopupDescription: "Saate valitud vaadet muuta",
				editPopupButton: "RAKENDA",
				// Add/Edit
				addEditPopupCancelButton: "TÜHISTA",
				addEditPopupMyContentBtn: "Vali minu sisu hulgast",
				addEditPopupConfigureWebMapBtn: " Konfigureeri"
			},
			share: {
				firstSaveTitle: "Rakendus on salvestatud",
				firstSaveHeader: "Teie rakendus on nüüd salvestatud ArcGIS Online’i keskkonda. Lugege järgnevate korduma kippuvate küsimuste vastuseid.",
				firstSaveA1: "Kui te ei ole tuttav ArcGIS Online keskkonnaga või soovite otseteed redigeerimise liidesele, siis võite salvestada järgmise lingi: %LINK1%",
				firstSaveA1bis: "Rakenduse leiate samuti oma <a href='%LINK2%' target='_blank'>ArcGIS Online’i sisu kaustast</a>.",
				firstSaveQ2: "Kas minu rakendus on jagatud?",
				firstSaveA2: "Praegu pole teie rakendus jagatud. Selle jagamiseks kasutage nuppu JAGA.",
				shareTitle: "Jaga oma rakendus",
				sharePrivateHeader: "Teie rakendus pole jagatud. Kas soovite selle jagada?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateWarning: "%WITH% jagamine on keelatud, kuna te pole <a href='%LINK%' target='_blank'>veebikaardi</a> omanik.",
				sharePrivateWarningWith1: "Avalikult",
				sharePrivateWarningWith2: "Avalikult ja organisatsiooniga",
				sharePrivateProgress: "Jagamine...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovige uuesti või",
				sharePrivateOk: "Jagamine on värskendatud, laadimine...",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Teie rakendus on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Teie rakendus on kättesaadav organisatsiooni liikmetele (sisselogimine nõutav).",
				shareLinkHeader: "Jagage rakendust oma sihtrühmaga",
				shareLinkOpen: "AVA",
				shareQ1Opt1: "Kuidas hoida rakendus privaatne?",
				shareQ1Opt2: "Kuidas hoida rakendus privaatne või seda avalikult jagada?",
				shareA1: "Kasutage %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse sisu lehel</a>. Kui soovite samuti eemaldada veebikaardilt jagamist, siis kasutage selleks <a href='%LINK2%' target='_blank'>veebikaardi sisu lehte</a>.",
				shareA1bis: "Kui soovite jagamise eemaldada ka objektiteenuselt, kasutage <a href='%LINK1%' target='_blank'>objektiteenuse sisu lehte</a>.",
				shareQ2: "Kuidas rakendust hiljem muuta?",
				shareQ2bis: "Kuidas ma pääsen tagasi loomise liidesesse?",
				shareA2div1: "Salvestage ja taaskasutage järgnevat linki %LINK1% või kasutage <a href='%LINK2%' target='_blank'>rakenduse sisu lehte</a>.",
				shareA2div2: "Kui olete rakenduse omanikuna ArcGIS.com’i sisse logitud, sisaldab rakendus nuppu interaktiivse koosturi avamiseks.",				
				shareQ3: "Kus andmed talletatakse?",
				shareA3: "Rakenduse konfiguratsioon talletatakse <a href='%LINK1%' target='_blank'>selles veebikaardiüksuses</a> ja <a href='%LINK2%' target='_blank'>selles veebirakenduse üksuses</a>. Kui olete kasutanud Flickri, Picasa, Facebooki või YouTube’i importi, jäävad teie pildid ja videod sinna ja neid ei dubleerita ArcGIS Online’i keskkonnas.",
				learnMore: "Loe lähemalt",
				close: "Sulge"
			},
			settings: {
				header: "Rakenduse seaded",
				cancel: "Tühista",
				apply: "Rakenda",
				tabError: "Palun kontrolli vigu kõigis osades"
			},
			settingsLayout: {
				title: "Kujundus",
				explain: "Millist paigutust soovite kasutada?",
				explainInit: "Muutmine on võimalik seadete dialoogi kaudu.",
				selected: "Valitud kujundus",
				select: "Vali see kujundus"
			},
			settingsTheme: {
				title: "Teema",
				explain: "Vali apiga seotud teema või määra  värvid.",
				label: "Päise ja küljepaneeli taustvärvid"
			},
			settingsHeader: {
				title: "Päis",
				explain: "Kohanda päise logo (maksimum on 250 x 50px).",
				logoEsri: "Esri logo",
				logoNone: "Logo puudub",
				logoCustom: "Valikuline logo",
				logoCustomPlaceholder: "Pildi URL",
				logoCustomTargetPlaceholder: "Kliki läbi lingi",
				logoSocialExplain: "Kohanda päist ülemise paremal pool asuva lingi kaudu.",
				logoSocialText: "Tekst",
				logoSocialLink: "Link",
				logoSocialDisabled: "See funktsioon on administraatori poolt välja lülitatud"
			},
			mediaSelector: {
				lblMap: "Kaart",
				lblPicture: "Pilt",
				lblVideo: "Video",
				lblExternal: "Väline leht"
			},
			webMapSelector: {
				radioCurrentWebMap: "Praegune veebikaart",
				radioWebmapApp: "Üks teistest rakenduses kasutatud veebikaartidest",
				radioAnotherWebmap: "Teine veebikaart",
				btnSelect: "Vali",
				lblOr: "või",
				fieldEnterWebmapId: "Sisestage veebikaardi ID",
				btnConfigure: "Konfigureeri kaart"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Minu organisatsioon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Minu sisu",
					favoritesLabel: "Minu lemmikud"
				},
				title: "Vali veebikaart",
				searchTitle: "Otsi",
				ok: "Ok",
				cancel: "Tühista",
				placeholder: "Sisestage otsingutermin"
			}
		}
	})
);
