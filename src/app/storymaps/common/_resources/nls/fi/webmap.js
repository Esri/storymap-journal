define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Kartta",
				lblLocation: "Sijainti",
				lblContent: "Sisältö",
				lblPopup: "Ponnahdusikkuna",
				lblControls: "Ylimääräinen sisältö",
				lblOverview: "Yleiskatsauskartta",
				lblLegend: "Selite",
				lblGeocoder: "Osoitteen tai paikan paikannus",
				tooltipGeocoder: "Salli käyttäjien etsiä osoitteita ja paikkoja kartoistasi.",
				loadingTitle: "Ladataan otsikkoa",
				entry: "Merkintä",
				entries: "Merkinnät",
				section: "Osa",
				sections: "osaa",
				and: "ja",
				action: "Osan toiminto",
				actions: "Osien toiminto",
				originalWebmap: "Kartta, jota käytetään tarinan %TPL_NAME% julkaisuun",
				browseMaps: "Valitse kartta",
				createMap: "Luo kartta",
				current: "Nykyinen kartta",
				select: "Valitse tai luo kartta",
				newMap: "Äskettäin valittu kartta",
				newCreatedMap: "Äskettäin luotu kartta",
				webmapDefault: "Kartan oletusarvo",
				customCfg: "Mukautettu konfiguraatio",
				tooltipLocation: "Määritä sijainti, joka näkyy tässä kartassa.",
				tooltipContent: "Määritä näkyvät karttatasot.",
				tooltipPopup: "Valitse ponnahdusikkuna, joka avautuu, kun tämä kartta näytetään.",
				tooltipOverview: "Näytä pieni yleiskatsauskartta pääkartan ohessa.",
				tooltipLegend: "Tuo näkyviin kartan selite karttaan. Se on hyödyllinen apuominaisuus, kun kartassa on useita karttatasoja ja symboleja.",
				mapCfgInvite: "Määritä karttasi näiden säätimien avulla",
				lblLocationAlt: "Peritty ensimmäisestä kartasta",
				tooltipLocationAlt: "Tämän kartan sijainti on synkronoitu sarjan ensimmäiseen karttaan. Jos haluat muuttaa tätä toimintatapaa sarjassasi, valitse Asetukset > Kartan asetukset."
			},
			configure: {
				btnReset: "Palauta",
				btnCancel: "Peruuta",
				tocTitle: "Kartan sisältö",
				tocExplain: "Valitse näytettävät karttatasot.",
				tocNoData: "Karttatasoa ei voi määrittää.",
				tocSave: "Tallenna kartan sisältö",
				extentTitle: "Karttasijainti",
				extentExplain: "Vieritä ja tarkenna karttaa määrittääksesi, miten lukijasi sen näkevät.",
				extentSave: "Tallenna karttasijainti",
				popupTitle: "Lisää ponnahdusikkuna karttaan",
				popupExplain: "Avaa näytettävä ponnahdusikkuna napsauttamalla kohdetta.",
				popupSave: "Tallenna ponnahdusikkunan määritys",
				hintNavigation: "Karttanavigointi on poistettu käytöstä."
			},
			editor: {
				loading: "Odota, kunnes kartan muokkausohjelma on latautunut",
				newTitle: "Luo uusi kartta",
				editTitle: "Muokkaa karttaa",
				titleLbl: "Otsikko",
				titlePh: "Kartan otsikko...",
				folderLbl: "Kartta luodaan samaan kansioon kuin tarina.",
				creating: "Luodaan karttaa",
				saving: "Tallennetaan karttaa",
				success: "Kartta on tallennettu",
				successCreate: "Kartta on luotu",
				cancelTitle: "Hylätäänkö kaikki tallentamattomat muutokset?",
				errorDuplicate: "Käytössäsi on jo kartta, jolla on kyseinen otsikko",
				errorCreate: "Karttaa ei voi luoda. Yritä uudelleen.",
				errorSave: "Karttaa ei voi tallentaa. Yritä uudelleen.",
				notavailable1: "Kartan luontia tai muokkausta Firefoxissa ei tueta teknisen rajoituksen takia. Voit muodostaa tarinasi toisella Web-selaimella tai käyttää seuraavaa ratkaisua.",
				notavailable2: "Kartan luontia tai muokkausta ei valitettavasti tueta, koska tarinakarttasovellusta ei isännöidä tuotteessa %PRODUCT%. Saat lisätietoja ArcGIS-pääkäyttäjältä.",
				notavailable3: "Kartan luontia tai muokkausta ei valitettavasti tueta Portal for ArcGISin tässä versiossa (edellyttää versiota 10.4 tai sitä uudempaa versiota). Saat lisätietoja ArcGIS-pääkäyttäjältä.",
				notavailable4: "Voit luoda kartan käyttämällä sovellusta %MV%. Palaa sen jälkeen tähän sovellukseen lisätäksesi kartan tarinaan.",
				notavailable5: "Voit muokata karttaa käyttämällä sovellusta %MV%. Palaa sen jälkeen tähän sovellukseen, jolloin näet tekemäsi muutokset valitsemalla %apply%.",
				notavailable6: "kartankatseluohjelma",
				notavailable7: "lataa kartta uudelleen"
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
				title: "Valitse kartta",
				searchTitle: "Etsi",
				ok: "OK",
				cancel: "Peruuta",
				placeholder: "Kirjoita hakuehto tai Web-kartan tunnus..."
			}
		}
	})
);
