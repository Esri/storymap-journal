define(
	 ({
		viewer: {
			common: {
				close: "Sulje"
			},
			loading: {
				step1: "Ladataan tarinaa",
				step2: "Ladataan aineistoa",
				step3: "Käynnistetään",
				loadBuilder: "Vaihdetaan luontitoimintoon",
				long: "Karttapäiväkirjaa alustetaan",
				long2: "Odota hetki",
				failButton: "Lataa tarina uudelleen"
			},
			signin: {
				title: "Todennus on pakollinen",
				explainViewer: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä käyttääksesi tarinaa.",
				explainBuilder: "Kirjaudu sisään %PORTAL_LINK%-sivuston tilillä määrittääksesi tarinan."
			},
			errors: {
				boxTitle: "Tapahtui virhe",
				invalidConfig: "Virheellinen määritys",
				invalidConfigNoApp: "Web-karttasovelluksen tunnusta ei ole määritetty index.html-tiedostossa.",
				invalidConfigNoAppDev: "URL-osoitteen parametreissa (?appid= tai ?webmap=) ei ole määritetty yhtään Web-karttasovelluksen tunnusta. Kehittäjätilassa index.html-tiedoston appid-määritys ohitetaan.",
				unspecifiedConfigOwner: "Valtuutettua omistajaa ei ole määritetty.",
				invalidConfigOwner: "Tarinan omistajalla ei ole valtuuksia.",
				createMap: "Karttaa ei voi luoda",
				invalidApp: "Kohdetta %TPL_NAME% ei ole, tai se ei ole käytettävissä.",
				appLoadingFail: "Tapahtui virhe, eikä %TPL_NAME% latautunut oikein.",
				notConfiguredDesktop: "Tarinaa ei ole vielä määritetty.",
				notConfiguredMobile: "Luontitoimintoa %TPL_NAME% ei tueta tässä näyttökoossa. Muuta selaimen kokoa mahdollisuuksien mukaan luontitoiminnon käyttöä varten tai luo tarinasi laitteessa, jossa on suurempi näyttö.",
				notConfiguredMobile2: "Käytä luontitoimintoa %TPL_NAME% kääntämällä laitteesi vaakasuuntaan.",
				notAuthorized: "Sinulla ei ole tämän tarinan käyttöoikeuksia",
				notAuthorizedBuilder: "Sinulla ei ole luontitoiminnon %TPL_NAME% käyttöoikeuksia.",
				noBuilderIE: "Luontitoimintoa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				noViewerIE: "Tarinaa ei tueta Internet Explorerin versiota %VERSION% edeltävissä versioissa. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Päivitä selain</a>.",
				mapLoadingFail: "Tapahtui virhe, eikä kartta latautunut oikein.",
				signOut: "Kirjaudu ulos"
			},
			mobileView: {
				tapForDetails: "Saat tiedot näkyviin napauttamalla",
				clickForDetails: "Lisätietoja",
				swipeToExplore: "Tutki pyyhkäisemällä",
				tapForMap: "Siirry takaisin karttaan napauttamalla",
				clickForMap: "TAKAISIN KARTTAAN"
			},
			floatLayout: {
				scroll: "Vieritä"
			},
			sideLayout: {
				scroll: "Saat lisää tietoja näkyviin vierittämällä alaspäin."
			},
			mainStage: {
				back: "Takaisin"
			},
			headerFromCommon: {
				storymapsText: "Tarinakartta",
				builderButton: "Muokkaa",
				facebookTooltip: "Jaa Facebookissa",
				twitterTooltip: "Jaa Twitterissä",
				bitlyTooltip: "Hanki lyhyt linkki",
				templateTitle: "Määritä mallin nimi",
				templateSubtitle: "Määritä mallin alaotsikko",
				share: "Jaa",
				checking: "Tarkistetaan tarinan sisältöä",
				fix: "Korjaa tarinan ongelmat",
				noerrors: "Yhtään ongelmaa ei havaittu",
				tooltipAutoplayDisabled: "Tämä toiminto ei ole käytettävissä automaattisen toiston tilassa",
				notshared: "Tarinaa ei ole jaettu"
			},
			overviewFromCommon: {
				title: "Yleiskatsauskartta"
			},
			legendFromCommon: {
				title: "Selite"
			},
			shareFromCommon: {
				copy: "Kopioi",
				copied: "Kopioitu",
				open: "Avaa",
				embed: "Upota Web-sivulle",
				embedExplain: "Käytä seuraavaa HTML-koodia päiväkirjan upottamiseen Web-sivulle.",
				size: "Koko (leveys/korkeus):",
				autoplayLabel: "Automaattisen toiston tila",
				autoplayExplain1: "Automaattisen toiston tilassa tarina etenee säännöllisin väliajoin. Tämä soveltuu hyvin kioskin näyttöön tai julkiseen näyttöön. Huomaa kuitenkin, että muissa tilanteissa tarinan lukeminen voi olla vaikeampaa. Tätä ominaisuutta ei tueta pienissä näytöissä.",
				autoplayExplain2: "Kun tämä tila on käytössä, tarinan voi toistaa tai keskeyttää tai sen nopeutta voi säätää ohjausobjekteilla.",
				linksupdated: "Linkit on päivitetty."
			}
        }
    })
);