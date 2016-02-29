define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Kart",
				lblLocation: "Lokasjon",
				lblContent: "Innhold",
				lblPopup: "oppsprett",
				lblControls: "Tillegg",
				lblOverview: "Oversiktskart",
				lblLegend: "Tegnforklaring",
				lblGeocoder: "Adresse- eller stedssøk",
				tooltipGeocoder: "Gjør det mulig for brukerne å finne adresser og steder i kartene dine.",
				loadingTitle: "Laster inn tittel",
				entry: "Oppføring",
				entries: "Oppføringer",
				section: "Seksjon",
				sections: "Seksjoner",
				and: "og",
				action: "Handling i seksjon",
				actions: "Handling i seksjoner",
				originalWebmap: "Kart brukt til å publisere %TPL_NAME%",
				browseMaps: "Velg et kart",
				createMap: "Opprette et kart",
				current: "Gjeldende kart",
				select: "Velg eller opprett et kart",
				newMap: "Nylig valgt kart",
				newCreatedMap: "Nylig opprettet kart",
				webmapDefault: "Standardinnstilling for kart",
				customCfg: "Tilpasset konfigurasjon",
				tooltipLocation: "Definer lokasjonen som dette kartet skal vise.",
				tooltipContent: "Definer de synlige lagene.",
				tooltipPopup: "Velg en popup som skal åpnes når dette kartet vises.",
				tooltipOverview: "Vis et lite oversiktskart sammen med hovedkartet.",
				tooltipLegend: "Vis kartets tegnforklaring, som er nyttig når kartet har mange lag og symboler.",
				mapCfgInvite: "Bruk disse kontrollene til å konfigurere kartet",
				lblLocationAlt: "Hentet fra det første kartet",
				tooltipLocationAlt: "Lokasjonen på dette kartet synkroniseres med det første kartet i serien. Hvis du vil endre denne innstillingen for serien, går du til Innstillinger > Kartalternativer."
			},
			configure: {
				btnReset: "Tilbakestill",
				btnCancel: "Avbryt",
				tocTitle: "Kartinnhold",
				tocExplain: "Velg hvilke lag som skal vises.",
				tocNoData: "Ingen lag kan konfigureres.",
				tocSave: "Lagre kartinnhold",
				extentTitle: "Kartlokasjon",
				extentExplain: "Panorer og zoom på kartet for å definere hvordan det skal se ut for leserne.",
				extentSave: "Lagre kartlokasjon",
				popupTitle: "Popup for kart",
				popupExplain: "Klikk på et geoobjekt for å åpne popupen du vil vise.",
				popupSave: "Lagre popupkonfigurasjonen",
				hintNavigation: "Kartnavigasjon er deaktivert."
			},
			editor: {
				loading: "Vent litt mens redigeringsprogrammet for kart lastes inn",
				newTitle: "Opprett nytt kart",
				editTitle: "Rediger kart",
				titleLbl: "Tittel",
				titlePh: "Karttittel...",
				folderLbl: "Kartet opprettes i samme mappe som historien.",
				creating: "Oppretter kartet",
				saving: "Lagrer kartet",
				success: "Kartet er lagret",
				successCreate: "Kartet er opprettet",
				cancelTitle: "Vil du forkaste endringer som ikke er lagret?",
				errorDuplicate: "Du har allerede et kart med den tittelen",
				errorCreate: "Kan ikke opprette kartet. Prøv på nytt.",
				errorSave: "Kan ikke lagre kartet. Prøv på nytt.",
				notavailable1: "Beklager, oppretting eller redigering av kart er ikke støttet i Firefox på grunn av en teknisk begrensning. Det kan være lurt å opprette historien med en annen webleser eller bruke denne løsningen for å omgå problemet.",
				notavailable2: "Beklager, oppretting eller redigering av et kart er ikke støttet, ettersom det fortellende kartet ikke er hostet i %PRODUCT%. Kontakt ArcGIS-administratoren din for å få mer informasjon.",
				notavailable3: "Beklager, oppretting eller redigering av et kart er ikke støttet i denne versjonen av Portal for ArcGIS (krever versjon 10.4 eller nyere). Kontakt ArcGIS-administratoren din for å få mer informasjon.",
				notavailable4: "Du kan opprette et kart med %MV% og deretter komme tilbake hit for å legge det til i historien din.",
				notavailable5: "Du kan redigere kartet med %MV% og deretter komme tilbake hit og %apply% for å se endringene.",
				notavailable6: "kartviser",
				notavailable7: "last inn kartet på nytt"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisasjon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mitt innhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "Velg et kart",
				searchTitle: "Søk",
				ok: "Ok",
				cancel: "Avbryt",
				placeholder: "Skriv inn søkeord eller webkart-ID..."
			}
		}
	})
);
