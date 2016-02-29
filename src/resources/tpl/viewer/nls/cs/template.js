define(
	 ({
		viewer: {
			common: {
				close: "Zavřít"
			},
			loading: {
				step1: "Načítání příběhu",
				step2: "Nahrávání dat",
				step3: "Inicializace",
				loadBuilder: "Přepínání na nástroj pro tvorbu",
				long: "Mapový deník se inicializuje",
				long2: "Děkujeme za strpení",
				failButton: "Znovu načíst příběh"
			},
			signin: {
				title: "Je vyžadováno ověření",
				explainViewer: "Pro přístup k příběhu se přihlaste pomocí účtu na %PORTAL_LINK%.",
				explainBuilder: "Chcete-li příběh nakonfigurovat, přihlaste se pomocí účtu na %PORTAL_LINK%."
			},
			errors: {
				boxTitle: "Došlo k chybě",
				invalidConfig: "Neplatná konfigurace",
				invalidConfigNoApp: "V souboru index.html není zadán identifikátor aplikace pro webové mapování.",
				invalidConfigNoAppDev: "V parametrech adresy URL nebyl zadán identifikátor webové mapovací aplikace (?appid=). V režimu vývoje je konfigurace ID aplikace v souboru index.html ignorována.",
				unspecifiedConfigOwner: "Nebyl nakonfigurován autorizovaný vlastník.",
				invalidConfigOwner: "Vlastník příběhu není autorizován.",
				createMap: "Nelze vytvořit mapu",
				invalidApp: "%TPL_NAME% neexistuje nebo není dostupný.",
				appLoadingFail: "Něco se pokazilo, %TPL_NAME% se nenahrál správně.",
				notConfiguredDesktop: "Příběh zatím není nakonfigurován.",
				notConfiguredMobile: "Nástroj pro tvorbu %TPL_NAME% není v této velikosti zobrazení podporován. Pokud je to možné, zvětšete velikost prohlížeče nebo příběh vytvořte na zařízení s větší obrazovkou.",
				notConfiguredMobile2: "Aby bylo možné použít nástroj pro tvorbu %TPL_NAME%, otočte své zařízení na šířku.",
				notAuthorized: "Nejste oprávněni přistupovat k tomuto příběhu",
				notAuthorizedBuilder: "Nejste oprávněni používat nástroj pro tvorbu %TPL_NAME%",
				noBuilderIE: "Nástroj pro tvorbu není podporován v aplikaci Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				noViewerIE: "Tento příběh není podporován v prohlížeči Internet Explorer ve verzi nižší než %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Prosím, aktualizujte prohlížeč</a>.",
				mapLoadingFail: "Něco se pokazilo, mapa se nenahrála správně.",
				signOut: "Odhlásit"
			},
			mobileView: {
				tapForDetails: "Klepnutím zobrazíte podrobnosti.",
				clickForDetails: "Zjistit více",
				swipeToExplore: "Přejeďte prstem, chcete-li zahájit prohlížení.",
				tapForMap: "Klepnutím se vrátíte na mapu.",
				clickForMap: "ZPĚT DO MAPY"
			},
			floatLayout: {
				scroll: "Posunout"
			},
			sideLayout: {
				scroll: "Chcete-li pokračovat, posuňte zobrazení dolů!"
			},
			mainStage: {
				back: "Zpět"
			},
			headerFromCommon: {
				storymapsText: "Mapa s příběhem",
				builderButton: "Editovat",
				facebookTooltip: "Sdílet na Facebooku",
				twitterTooltip: "Sdílet na Twitteru",
				bitlyTooltip: "Získat krátký odkaz",
				templateTitle: "Nastavit název šablony",
				templateSubtitle: "Nastavit podnadpis šablony",
				share: "Sdílet",
				checking: "Probíhá kontrola obsahu vašeho příběhu",
				fix: "Opravte problémy ve svém příběhu",
				noerrors: "Nebyly nalezeny žádné problémy",
				tooltipAutoplayDisabled: "Není k dispozici v režimu automatického přehrávání.",
				notshared: "Příběh není sdílen"
			},
			overviewFromCommon: {
				title: "Mapa přehledu"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Kopírovat",
				copied: "Zkopírováno",
				open: "Otevřít",
				embed: "Vložit do webové stránky",
				embedExplain: "Chcete-li deník vložit do webové stránky, použijte následující kód HTML.",
				size: "Velikost (šířka/výška):",
				autoplayLabel: "Režim automatického přehrávání",
				autoplayExplain1: "Režim automatického přehrávání bude příběhem procházet v pravidelných intervalech. Ideální pro použití na výstavních stáncích nebo veřejných monitorech, buďte si však vědomi toho, že v některých případech to může znesnadnit čtení příběhu. Tato funkce není podporována na malých obrazovkách.",
				autoplayExplain2: "Je-li tento režim aktivní, budou k dispozici ovládací prvky ke spuštění/pozastavení přehrávání příběhu a k nastavení rychlosti procházení.",
				linksupdated: "Odkazy aktualizovány!"
			}
        }
    })
);