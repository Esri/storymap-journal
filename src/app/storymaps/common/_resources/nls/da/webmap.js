﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Kort",
				lblLocation: "Position",
				lblContent: "Indhold",
				lblPopup: "Pop-up",
				lblControls: "Ekstra",
				lblOverview: "Oversigtskort",
				lblLegend: "Signaturforklaring",
				loadingTitle: "Indlæser titel",
				entry: "Post",
				entries: "Poster",
				section: "Sektion",
				sections: "Sektioner",
				and: "og",
				action: "Handling i sektion",
				actions: "Handling i sektioner",
				originalWebmap: "Kort, der bruges til at publicere %TPL_NAME%",
				browseMaps: "Vælg et kort",
				createMap: "Opret et kort",
				current: "Aktuelt kort",
				select: "Vælg eller opret et kort",
				newMap: "Kort, der er valgt for nylig",
				newCreatedMap: "Kort, der er oprettet for nylig",
				webmapDefault: "Kortstandard",
				customCfg: "Tilpasset konfiguration",
				tooltipLocation: "Definér den position, som kortet skal vise.",
				tooltipContent: "Definér synlige lag.",
				tooltipPopup: "Vælg en pop-up, der skal åbnes, når kortet bliver vist.",
				tooltipOverview: "Få vist et lille oversigtskort sammen med hovedkortet.",
				tooltipLegend: "Få vist signaturforklaringen på kortet. Dette er nyttigt, når kortet har mange lag og symboler.",
				mapCfgInvite: "Brug disse knapper til at konfigurere kortet",
				lblLocationAlt: "Arvet fra det første kort",
				tooltipLocationAlt: "Kortets placering synkroniseres med det første kort i serien. Hvis du vil ændre din series funktionsmåde, skal du gå til Indstillinger > Kortindstillinger."
			},
			configure: {
				btnReset: "Nulstil",
				btnCancel: "Annullér",
				tocTitle: "Kortindhold",
				tocExplain: "Vælg, hvilke lag de skal vises.",
				tocNoData: "Ingen lag kan konfigureres.",
				tocSave: "Gem kortindhold",
				extentTitle: "Kortposition",
				extentExplain: "Panorér og zoom kortet for at definere, hvordan det skal vises for læserne.",
				extentSave: "Gem kortposition",
				popupTitle: "Kort-pop-up",
				popupExplain: "Klik på et objekt for at åbne den pop-up, du vil have vist",
				popupSave: "Gem pop-up-konfiguration",
				hintNavigation: "Kortnavigation er deaktiveret."
			},
			editor: {
				loading: "Vent, mens korteditoren indlæses",
				newTitle: "Opret nyt kort",
				editTitle: "Redigér kort",
				titleLbl: "Titel",
				titlePh: "Korttitel...",
				folderLbl: "Kortet oprettes i den samme mappe som historien.",
				creating: "Opretter kortet",
				saving: "Gemmer kortet",
				success: "Kort gemt",
				successCreate: "Kort oprettet",
				cancelTitle: "Slet eventuelle ikke-gemte ændringer?",
				errorDuplicate: "Du har allerede det kort med denne titel",
				errorCreate: "Kan ikke oprette kort. Prøv igen.",
				errorSave: "Kan ikke gemme kort. Prøv igen.",
				notavailable1: "Beklager, men oprettelse eller redigering af et kort understøttes ikke i Firefox på grund af en teknisk begrænsning. Du kan eventuelt oprette din historie med en anden webbrowser eller bruge følgende løsning.",
				notavailable2: "Beklager, men oprettelse eller redigering af et kort understøttes ikke, fordi story map-applikationen ikke er \"hosted\" i %PRODUCT%. Kontakt din ArcGIS-administrator for at få yderligere oplysninger.",
				notavailable3: "Beklager, men oprettelse eller redigering af et kort understøttes ikke i denne version af Portal for ArcGIS (kræver version 10.4 eller nyere). Kontakt din ArcGIS-administrator for at få yderligere oplysninger.",
				notavailable4: "Du kan oprette et kort med %MV% og derefter vende tilbage for at føje det til din historie.",
				notavailable5: "Du kan redigere et kort med %MV% og derefter vende tilbage og %apply% for at se dine ændringer.",
				notavailable6: "kortviser",
				notavailable7: "genindlæs kortet"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Min organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mit indhold",
					favoritesLabel: "Mine favoritter"
				},
				title: "Vælg et kort",
				searchTitle: "Søg",
				ok: "OK",
				cancel: "Annullér",
				placeholder: "Indtast søgeterm eller webkort-ID..."
			}
		}
	})
);
