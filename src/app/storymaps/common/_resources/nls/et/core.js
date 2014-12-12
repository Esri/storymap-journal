define(
	 ({
		commonCore: {
			common: {
				add: "Lisa",
				edit: "Muuda",
				save: "Salvesta",
				next: "Järgmine",
				cancel: "Tühista",
				back: "Tagasi",
				apply: "Rakenda",
				close: "Sulge",
				open: "Ava",
				start: "Algus",
				loading: "Laen",
				disabledAdmin: "See funktsioon on administraatori poolt välja lülitatud",
				width: "Laius",
				height: "Kõrgus"
			},
			inlineFieldEdit: {
				editMe: "Muuda mind!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% koostaja",
				buttonSaving: "Salvestamine",
				buttonSaved: "Salvestatud",
				buttonShare: "Jaga",
				buttonSettings: "Seaded",
				buttonHelp: "Abi",
				buttonPreview: "Kuva reaalajas",
				tooltipFirstSave: "See on saadaval alles pärast salvestamist.",
				tooltipNotShared: "See on saadaval alles pärast jagamist.",
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangePlural: "Ootel muudatused",
				closeWithPendingChange: "Kas olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused lähevad kaotsi.",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				shareStatus1: "Rakendust pole veel salvestatud",
				shareStatus2: "Rakendus on jagatud avalikult",
				shareStatus3: "Rakendus on jagatud organisatsiooniga",
				shareStatus4: "Rakendus pole jagatud"
			},
			saveError: {
				title: "Viga rakenduse salvestamisel",
				err1Div1: "Rakendust ei saa salvestada, sest teil on juba sama nimega objekt (vaadake oma <a class='linkagolroot' target='_blank'>sisukausta</a>).",
				err1Div2: "Muutke rakenduse nime ja seejärel salvestage see.",
				btnOk: "Muuda rakenduse nime"
			},
			share: {
				firstSaveTitle: "Rakendus on salvestatud",
				firstSaveHeader: "Teie rakendus on nüüd salvestatud kohta %PORTAL%, kuid seda pole veel jagatud.",
				firstSavePreview: "Eelvaade",
				firstSaveShare: "Jaga",
				firstSaveA1: "Kui %PORTAL% pole teile tuttav või kui soovite otseteed koostajaliidesesse, võite salvestada järgmise lingi: %LINK1%",
				firstSaveA1bis: "Rakenduse leiate ka oma <a href='%LINK2%' target='_blank'>portaali %PORTAL% sisukaustast</a>.",
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
				shareHeader1: "Teie rakendus on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Teie rakendus on kättesaadav organisatsiooni liikmetele (sisselogimine nõutav).",
				shareLinkCopy: "Kopeeri",
				shareLinkCopied: "Kopeeritud",
				shareQ0: "Kuidas lisada rakendus veebilehele?",
				shareQ1Opt1: "Kuidas hoida rakendus privaatne?",
				shareQ1Opt2: "Kuidas hoida rakendus privaatne või seda avalikult jagada?",
				shareA1: "Kasutage <a href='%LINK1%' target='_blank'>rakenduse üksuse lehel</a> üksust %SHAREIMG%.",
				shareQ2bis: "Kuidas pääseb koostaja liidesesse tagasi?",
				shareA2div1: "Salvestage ja taaskasutage järgnevat linki %LINK1% või kasutage <a href='%LINK2%' target='_blank'>rakenduse sisu lehte</a>.",
				shareA2div2: "Kui olete rakenduse omanikuna lehel %PORTAL% sisse logitud, sisaldab rakendus nuppu interaktiivse koostaja avamiseks.",				
				shareQ3: "Kus andmed talletatakse?",
				shareA3: "%TPL_NAME%: andmed ja konfiguratsioon talletatakse <a href='%LINK2%' target='_blank'>selles veebirakenduse üksuses</a>. Kui olete kasutanud Flickri, Picasa, Facebooki või YouTube\'i importi, pole teie pilte ja videoid portaali %PORTAL% kopeeritud."
			},
			settings: {
				header: "Seaded",
				tabError: "Palun kontrollige vigu kõigil vahekaartidel"
			},
			settingsLayout: {
				title: "Kujundus",
				explain: "Millist paigutust soovite kasutada?",
				explainInit: "Saate paigutust igal ajal seadete dialoogiakna kaudu muuta.",
				viewExample: "Kuva reaalajas näide"
			},
			settingsTheme: {
				title: "Teema"
			},
			settingsHeader: {
				title: "Päis",
				logoEsri: "Esri logo",
				logoNone: "Logo puudub",
				logoCustom: "Valikuline logo",
				logoCustomPlaceholder: "URL (max 250x50 pikslit)",
				logoCustomTargetPlaceholder: "Kliki läbi lingi",
				logoSocialExplain: "Kohandage päiselinki.",
				logoSocialText: "Tekst",
				logoSocialLink: "Link",
				lblSmallHeader: "Kasuta kompaktset päist (subtiitrita)"
			},
			header: {
				title: "Muuda malli %TPL_NAME% nime",
				subtitle: "Muuda malli %TPL_NAME% subtiitrit"
			}
		}
	})
);
