define(
	 ({
		commonCore: {
			common: {
				add: "Ajouter",
				edit: "Modifier",
				save: "Enregistrer",
				next: "Suivant",
				cancel: "Annuler",
				back: "Retour",
				apply: "Appliquer",
				close: "Fermer",
				open: "Ouvrir",
				start: "Démarrer",
				loading: "Chargement en cours",
				disabledAdmin: "Cette entité a été désactivée par l\'administrateur",
				width: "Largeur",
				height: "Hauteur",
				create: "Créer",
				yes: "Oui",
				no: "Non",
				mystories: "Mes récits"
			},
			inlineFieldEdit: {
				editMe: "Modifier"
			},
			builderPanel: {
				panelHeader: "Générateur %TPL_NAME%",
				buttonSaving: "Enregistrement",
				buttonSaved: "Enregistré",
				buttonShare: "Partager",
				buttonSettings: "Paramètres",
				buttonHelp: "Aide",
				buttonPreview: "Afficher le récit",
				tooltipFirstSave: "Cette fonction n\'est pas disponible tant qu\'un enregistrement n\'est pas effectué.",
				tooltipNotShared: "Cette fonction n\'est pas disponible tant qu\'un partage n\'est pas effectué.",
				tooltipNotShared2: "Votre récit n\'est pas partagé, vous seul pouvez y accéder.",
				noPendingChange: "Aucune modification en attente",
				unSavedChangePlural: "Modifications en attente",
				closeWithPendingChange: "Vouez-vous vraiment confirmer cette opération ? Vos modifications seront perdues.",
				saveError: "L\’enregistrement a échoué, réessayez",
				status1: "Le récit est partagé, mais comporte des problèmes",
				status2: "Le récit n\'est pas partagé, mais comporte des problèmes",
				status3: "Le récit est public",
				status4: "Le récit est partagé au sein de votre organisation",
				status5: "Le récit est privé",
				status6: "Le récit n\'est pas encore enregistré",
				checking: "Vérification",
				fix: "Localisation"
			},
			saveError: {
				title: "Erreur d\'enregistrement du récit",
				err1Div1: "Impossible d\'enregistrer le récit, car un autre élément porte déjà le même nom.",
				err1Div2: "Modifiez le titre de votre récit et enregistrez-le.",
				btnOk: "Modifier le titre du récit"
			},
			saveErrorSocial: {
				title: "Mise à jour du partage sur les réseaux sociaux",
				panel1: "L\'apparence de votre récit sur les réseaux sociaux a été améliorée, mais le titre de votre élément d\'application Web ArcGIS n\'est pas le même que le titre de votre récit.",
				panel1tooltip: "Si vous définissez un titre, un résumé et une image miniature, votre récit ressemblera à ceci :",
				panel2:	"Quel titre voulez-vous utiliser sur les réseaux sociaux :",
				panel2q1: "Titre du récit (recommandé)",
				panel2q1tooltip: "Si vous choisissez cette option, le titre de votre élément sera modifié afin de correspondre au titre de votre récit et les autres modifications apportées dans le générateur seront synchronisées.",
				panel2q2: "Titre de l\'élément",
				panel3: "Pour encore améliorer l\'apparence de votre récit sur les réseaux sociaux, utilisez ${MYSTORIES} pour ajouter un résumé et une image miniature.",
				panel4: "Ne plus m\'avertir pour ce récit"
			},
			share: {
				shareTitle: "Partager votre récit",
				preview: "Aperçu",
				viewlive: "Afficher le récit",
				btnPrivate: "Privé",
				btnPrivateTooltip: "Vous seul pouvez voir le récit",
				btnOrg: "Organisation",
				btnOrgTooltip: "Seuls les membres de votre organisation peuvent voir le récit",
				btnPublic: "Public",
				btnPublicTooltip: "Tout le monde peut voir le récit",
				loadingMessage: "Recherche d\'erreurs dans votre récit",
				viewToggle1: "Afficher le contenu du récit",
				viewToggle2: "Fermer le contenu du récit",
				socialize: "Communiquer",
				statusPrivate: "Votre récit est privé, vous seul pouvez le voir.",
				statusError: "Certains problèmes affectant le contenu de votre récit seront visibles pour les lecteurs. Vous pouvez les identifier et les résoudre ci-dessous.",
				statusNoErrPrivate: "Partagez votre récit dès que vous êtes prêt !",
				mystoriesinvite: "Gérer tous vos récits",
				notavailable1: "Le partage de votre récit depuis le générateur n\'est pas pris en charge, car cette application n\'est pas hébergée dans %PRODUCT%.",
				notavailable2: "Le partage de votre récit depuis le générateur n\'est pas pris en charge dans cette version de Portal for ArcGIS (requiert la version 10.4 ou ultérieure).",
				notavailable3: "Vous pouvez partager ce récit depuis %LINK%.",
				notavailable4: "Mes récits",
				notavailable5: "sa page d\'élément",
				notavailable6: "Cette fonctionnalité n\'est pas entièrement prise en charge en mode de développement. Selon votre type de déploiement, elle peut être prise en charge une fois déployée.",
				notavailable7: "Consultez %MYCONTENT% pour vérifier que les cartes et couches utilisées dans votre récit sont également partagées.",
				notavailable8: "Mon contenu",
				mystoriesinvite2: "Pour améliorer l\'apparence de votre récit sur les réseaux sociaux, utilisez ${MYSTORIES} pour ajouter un résumé et une image miniature."
			},
			settings: {
				header: "Paramètres",
				tabError: "Recherchez des erreurs dans tous les onglets"
			},
			settingsLayout: {
				title: "Mise en page",
				explain: "Quelle mise en page voulez-vous utiliser ?",
				explainInit: "Vous pouvez modifier la mise en page à tout moment dans la boîte de dialogue des paramètres.",
				viewExample: "Voir un exemple en direct"
			},
			settingsTheme: {
				title: "Thème"
			},
			settingsHeader: {
				title: "En-tête",
				logoEsri: "Logo Esri",
				logoNone: "Aucun logo",
				logoCustom: "Logo personnalisé",
				logoCustomPlaceholder: "URL (250x50 pixels max.)",
				logoCustomTargetPlaceholder: "Lien",
				logoSocialExplain: "Personnalisez le lien d\'en-tête.",
				logoSocialText: "Texte",
				logoSocialLink: "Lien",
				lblSmallHeader: "Utiliser un en-tête compact (pas de sous-titre)"
			},
			header: {
				title: "Modifiez le titre de votre %TPL_NAME%",
				subtitle: "Modifiez le sous-titre de votre %TPL_NAME%"
			}
		}
	})
);
