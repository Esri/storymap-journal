﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Carte",
				lblLocation: "Emplacement",
				lblContent: "Contenu",
				lblPopup: "Fenêtre contextuelle",
				lblControls: "Suppléments",
				lblOverview: "Vue générale",
				lblLegend: "Légende",
				loadingTitle: "Chargement du titre",
				entry: "Entrée",
				entries: "Entrées",
				section: "Section",
				sections: "Sections",
				and: "et",
				action: "Action dans la section",
				actions: "Action dans les sections",
				originalWebmap: "Carte utilisée pour publier %TPL_NAME%",
				browseMaps: "Sélectionner une carte",
				createMap: "Créer une carte",
				current: "Carte actuelle",
				select: "Sélectionner ou créer une carte",
				newMap: "Nouvelle carte sélectionnée",
				newCreatedMap: "Nouvelle carte créée",
				webmapDefault: "Carte par défaut",
				customCfg: "Configuration personnalisée",
				tooltipLocation: "Définissez l\'emplacement que cette carte affichera.",
				tooltipContent: "Définissez les couches visibles.",
				tooltipPopup: "Choisissez la fenêtre contextuelle à afficher à l\'ouverture de la carte.",
				tooltipOverview: "Affichez une petite vue générale avec la carte principale.",
				tooltipLegend: "Affichez la légende de la carte, qui est utile lorsque la carte comporte beaucoup de couches et de symboles.",
				mapCfgInvite: "Utilisez ces contrôles pour configurer la carte",
				lblLocationAlt: "Hérité de la première carte",
				tooltipLocationAlt: "L\'emplacement de cette carte est synchronisé sur la première carte de la série. Pour changer ce comportement pour votre série, accédez à Paramètres > Options de carte."
			},
			configure: {
				btnReset: "Réinitialiser",
				btnCancel: "Annuler",
				tocTitle: "Contenu de la carte",
				tocExplain: "Sélectionnez les couches à afficher.",
				tocNoData: "Aucune couche ne peut être configurée.",
				tocSave: "Enregistrer le contenu de la carte",
				extentTitle: "Emplacement sur la carte",
				extentExplain: "Déplacez la carte et appliquez un zoom pour définir son apparence pour vos lecteurs.",
				extentSave: "Enregistrer l\'emplacement sur la carte",
				popupTitle: "Fenêtre contextuelle de la carte",
				popupExplain: "Cliquez sur une entité pour ouvrir la fenêtre contextuelle à afficher.",
				popupSave: "Enregistrer la configuration de la fenêtre contextuelle",
				hintNavigation: "La navigation cartographique est désactivée."
			},
			editor: {
				loading: "Patientez pendant le chargement de l\'éditeur de carte",
				newTitle: "Créer une carte",
				editTitle: "Modifier la carte",
				titleLbl: "Titre",
				titlePh: "Titre de la carte...",
				folderLbl: "La carte va être créée dans le même dossier que le récit.",
				creating: "Création de la carte",
				saving: "Enregistrement de la carte",
				success: "Carte enregistrée",
				successCreate: "Carte créée",
				cancelTitle: "Ignorer les modifications non enregistrées ?",
				errorDuplicate: "Une carte portant ce titre existe déjà",
				errorCreate: "Impossible de créer la carte. Réessayez.",
				errorSave: "Impossible d\'enregistrer la carte. Réessayez.",
				notavailable1: "La création ou la mise à jour d\'une carte n\'est pas prise en charge dans Firefox en raison d\'une limitation technique. Vous pouvez concevoir votre récit à l\'aide d\'un navigateur Web différent ou recourir à la solution suivante.",
				notavailable2: "La création ou la mise à jour d\'une carte n\'est pas prise en charge, car l\'application Story Map n\'est pas hébergée dans %PRODUCT%. Contactez votre administrateur ArcGIS pour plus d\'informations.",
				notavailable3: "La création ou la mise à jour d\'une carte n\'est pas prise en charge dans cette version de Portal for ArcGIS (requiert la version 10.4 ou ultérieure). Contactez votre administrateur ArcGIS pour plus d\'informations.",
				notavailable4: "Vous pouvez créer une carte avec %MV%, puis revenir ici pour l\'ajouter à votre récit.",
				notavailable5: "Vous pouvez mettre à jour la carte avec %MV%, puis revenir ici et %apply% pour visualiser vos modifications.",
				notavailable6: "visionneuse de carte",
				notavailable7: "recharger la carte"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Mon organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mon contenu",
					favoritesLabel: "Mes favoris"
				},
				title: "Sélectionner une carte",
				searchTitle: "Rechercher",
				ok: "OK",
				cancel: "Annuler",
				placeholder: "Entrer un terme de recherche ou l\'identifiant d\'une carte Web..."
			}
		}
	})
);
