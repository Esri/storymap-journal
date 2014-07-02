define(
	 ({
		common: {
			common: {
				edit: "Editovat"
			},
			inlineFieldEdit: {
				editMe: "Edituj mě!"
			},
			builderPanel: {
				panelHeader: "Nástroj pro tvorbu %TPL_NAME%",
				buttonSave: "ULOŽIT",
				buttonShare: "SDÍLET",
				buttonSettings: "NASTAVENÍ",
				buttonHelp: "NÁPOVĚDA",
				noPendingChange: "Žádná neuložená změna",
				unSavedChangeSingular: "1 neuložená změna",
				unSavedChangePlural: "neuložených změn",
				popoverSaveWhenDone: "Až budete hotovi, nezapomeňte provedené změny uložit.",
				closeWithPendingChange: "Opravdu chcete potvrdit tuto akci? Vaše změny budou ztraceny.",
				ok: "OK",
				savingApplication: "Ukládání aplikace",
				saveError: "Uložení se nezdařilo, zkuste to prosím znovu.",
				saveError3: "Název nesmí být prázdný",
				// TODO
				signIn: "Přihlaste se pomocí účtu na",
				shareStatus1: "Aplikace není uložena.",
				shareStatus2: "Aplikace je sdílená veřejně.",
				shareStatus3: "Aplikace je sdílená v rámci organizace.",
				shareStatus4: "Aplikace není sdílená."
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Nadpis",
				addPopupTitle: "Přidat",
				addPopupDescription: "Umožňuje přidat do série nové zobrazení.",
				addPopupButton: "PŘIDAT",
				// Edit
				editPopupTitle: "Editovat",
				editPopupDescription: "Upravit vybrané zobrazení",
				editPopupButton: "POUŽÍT",
				// Add/Edit
				addEditPopupCancelButton: "ZRUŠIT",
				addEditPopupMyContentBtn: "Vybrat z mého obsahu",
				addEditPopupConfigureWebMapBtn: " Konfigurovat"
			},
			share: {
				firstSaveTitle: "Aplikace úspěšně uložena",
				firstSaveHeader: "Vaše aplikace je nyní uložena ve službě ArcGIS Online. Přečtěte si následující odpovědi na časté dotazy.",
				firstSaveA1: "Pokud nejste obeznámeni s ArcGIS Online nebo chcete zkratku pro přístup do autorského rozhraní, můžete si uložit následující odkaz: %LINK1%",
				firstSaveA1bis: "Aplikaci naleznete i ve své <a href='%LINK2%' target='_blank'>složce s obsahem ArcGIS Online</a>.",
				firstSaveQ2: "Je moje aplikace sdílena?",
				firstSaveA2: "Vaše aplikace momentálně není sdílena. Pokud ji chcete sdílet, stiskněte tlačítko SDÍLET.",
				shareTitle: "Sdílet aplikaci",
				sharePrivateHeader: "Vaše aplikace není sdílena, chcete ji sdílet?",
				sharePrivateBtn1: "Sdílet veřejně",
				sharePrivateBtn2: "Sdílet s mou organizací",
				sharePrivateWarning: "Sdílení %WITH% bylo zakázáno, protože nejste vlastníkem <a href='%LINK%' target='_blank'>webové mapy</a>.",
				sharePrivateWarningWith1: "veřejně",
				sharePrivateWarningWith2: "veřejně a s organizací",
				sharePrivateProgress: "Probíhá sdílení…",
				sharePrivateErr: "Sdílení se nezdařilo, zkuste to znovu nebo",
				sharePrivateOk: "Sdílení bylo úspěšně aktualizováno, probíhá nahrávání…",
				sharePreviewAsUser: "Náhled",
				shareHeader1: "Vaše aplikace je <strong>veřejně přístupná</strong>.",
				shareHeader2: "Vaše aplikace je přístupná členům vaší organizace (je vyžadováno přihlášení).",
				shareLinkHeader: "Sdílejte aplikaci se svým publikem.",
				shareLinkOpen: "OTEVŘÍT",
				shareQ1Opt1: "Jak lze aplikaci ponechat jako soukromou?",
				shareQ1Opt2: "Jak lze aplikaci ponechat jako soukromou nebo ji veřejně sdílet?",
				shareA1: "Použijte %SHAREIMG% on <a href='%LINK1%' target='_blank'>stránku položek aplikace</a>. Pokud chcete také zrušit sdílení webové mapy, použijte <a href='%LINK2%' target='_blank'>stránku položek webové mapy</a>.",
				shareA1bis: "Pokud chcete také zrušit sdílení služby Feature Service, použijte <a href='%LINK1%' target='_blank'>stránku položek služby Feature Service</a>.",
				shareQ2: "Jak mohu aplikaci později upravovat?",
				shareQ2bis: "Jak se vrátím do autorského rozhraní?",
				shareA2div1: "Uložte si pro budoucí použití tento odkaz %LINK1% nebo použijte <a href='%LINK2%' target='_blank'>stránku položek aplikace</a>.",
				shareA2div2: "Když jste přihlášeni na webu ArcGIS.com jako majitel aplikace, tak aplikace obsahuje tlačítko pro otevření interaktivního nástroje pro tvorbu:",				
				shareQ3: "Kde jsou uložena data?",
				shareA3: "Konfigurace aplikace je uložena v <a href='%LINK1%' target='_blank'>této položce webové mapy</a> a <a href='%LINK2%' target='_blank'>této položce webové aplikace</a>. Pokud jste použili import ze služeb Flickr, Picasa, Facebook nebo YouTube, vaše obrázky a videa zůstanou uloženy v těchto službách a nebudou duplikovány v ArcGIS Online.",
				learnMore: "Více informací",
				close: "Zavřít"
			},
			settings: {
				header: "Nastavení aplikace",
				cancel: "Storno",
				apply: "Použít",
				tabError: "Zkontrolujte prosím, nejsou-li v záložkách chyby."
			},
			settingsLayout: {
				title: "Rozvržení",
				explain: "Jaké rozvržení chcete použít?",
				explainInit: "Změnu bude možné provést v dialogu nastavení.",
				selected: "Vybrané rozvržení",
				select: "Vybrat toto rozvržení"
			},
			settingsTheme: {
				title: "Motiv",
				explain: "Vyberte motiv aplikace nebo vyberte vlastní barvy.",
				label: "Barvy pozadí postranního panelu a záhlaví"
			},
			settingsHeader: {
				title: "Záhlaví",
				explain: "Přizpůsobit logo záhlaví (maximum je 250 × 50 px).",
				logoEsri: "Logo Esri",
				logoNone: "Bez loga",
				logoCustom: "Vlastní logo",
				logoCustomPlaceholder: "URL obrázku",
				logoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				logoSocialExplain: "Umožňuje přizpůsobit pravý horní odkaz v záhlaví.",
				logoSocialText: "Text",
				logoSocialLink: "Odkaz",
				logoSocialDisabled: "Tato funkce byla zakázána administrátorem."
			},
			mediaSelector: {
				lblMap: "Mapa",
				lblPicture: "Obrázek",
				lblVideo: "Video",
				lblExternal: "Externí stránka"
			},
			webMapSelector: {
				radioCurrentWebMap: "Současná webová mapa",
				radioWebmapApp: "Jedna z ostatních webových map použitých v aplikaci",
				radioAnotherWebmap: "Jiná webová mapa",
				btnSelect: "Vybrat",
				lblOr: "nebo",
				fieldEnterWebmapId: "Zadejte identifikátor webové mapy",
				btnConfigure: "Konfigurovat mapu"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moje organizace",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Můj obsah",
					favoritesLabel: "Moje oblíbené"
				},
				title: "Vybrat webovou mapu",
				searchTitle: "Hledat",
				ok: "OK",
				cancel: "Storno",
				placeholder: "Zadat vyhledávací výraz"
			}
		}
	})
);
