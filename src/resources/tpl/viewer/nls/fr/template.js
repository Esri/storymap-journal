define(
	 ({
		viewer: {
			common: {
				close: "Fermer"
			},
			loading: {
				step1: "Chargement du récit",
				step2: "Chargement des données",
				step3: "Initialisation",
				loadBuilder: "Accéder au générateur",
				long: "Le journal cartographique est en cours d\'initialisation",
				long2: "Merci de patienter",
				failButton: "Recharger le récit"
			},
			signin: {
				title: "L\'authentification est nécessaire",
				explainViewer: "Connectez-vous avec un compte sur %PORTAL_LINK% pour accéder au récit.",
				explainBuilder: "Connectez-vous avec un compte sur %PORTAL_LINK% pour configurer le récit."
			},
			errors: {
				boxTitle: "Une erreur s\’est produite",
				invalidConfig: "Configuration non valide",
				invalidConfigNoApp: "Identifiant de l\'application de cartographie Web non spécifié dans index.html.",
				invalidConfigNoAppDev: "Aucun identifiant d\'application cartographique Web n\'est spécifié dans les paramètres de l\'URL (?appid=). En mode de développement, la configuration d\'appid dans index.html est ignorée.",
				unspecifiedConfigOwner: "Le propriétaire autorisé n\'est pas configuré.",
				invalidConfigOwner: "Le propriétaire du récit n\'est pas autorisé.",
				createMap: "Impossible de créer la carte",
				invalidApp: "Le %TPL_NAME% n\'existe pas ou n\'est pas accessible.",
				appLoadingFail: "Une erreur s\'est produite et le chargement de %TPL_NAME% ne s\'est pas correctement déroulé.",
				notConfiguredDesktop: "Le récit n\'est pas encore configuré.",
				notConfiguredMobile: "Le générateur %TPL_NAME% n\'est pas pris en charge avec cette taille d\'affichage. Si possible, redimensionnez votre navigateur pour pouvoir accéder au générateur ou élaborez votre récit sur un appareil doté d\'un écran plus grand.",
				notConfiguredMobile2: "Veuillez tourner votre appareil en orientation paysage pour utiliser le générateur %TPL_NAME%.",
				notAuthorized: "Vous n\'êtes pas autorisé à accéder à ce récit.",
				notAuthorizedBuilder: "Vous n\'êtes pas autorisé à utiliser le générateur %TPL_NAME%.",
				noBuilderIE: "Le générateur n\'est pas pris en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				noViewerIE: "Ce récit n\'est pas pris en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Mettez votre navigateur à jour</a>.",
				mapLoadingFail: "Une erreur s\'est produite et la carte n\'a pas été correctement chargée.",
				signOut: "Se déconnecter"
			},
			mobileView: {
				tapForDetails: "Touchez pour obtenir des détails",
				clickForDetails: "En savoir plus",
				swipeToExplore: "Effectuez un mouvement de balayage pour explorer",
				tapForMap: "Touchez pour revenir à la carte",
				clickForMap: "RETOUR A LA CARTE"
			},
			floatLayout: {
				scroll: "Défilement"
			},
			sideLayout: {
				scroll: "Faites défiler pour en savoir plus !"
			},
			mainStage: {
				back: "Retour"
			},
			headerFromCommon: {
				storymapsText: "Une Story Map",
				builderButton: "Modifier",
				facebookTooltip: "Partager sur Facebook",
				twitterTooltip: "Partager sur Twitter",
				bitlyTooltip: "Obtenir un lien court",
				templateTitle: "Définir le titre du modèle",
				templateSubtitle: "Définir le sous-titre du modèle",
				share: "Partager",
				checking: "Vérification du contenu de votre récit",
				fix: "Résoudre les problèmes du récit",
				noerrors: "Aucun problème détecté",
				tooltipAutoplayDisabled: "Ceci n\'est pas disponible en mode de lecture automatique",
				notshared: "Récit non partagé"
			},
			overviewFromCommon: {
				title: "Vue générale"
			},
			legendFromCommon: {
				title: "Légende"
			},
			shareFromCommon: {
				copy: "Copier",
				copied: "Copié",
				open: "Ouvrir",
				embed: "Incorporer dans une page Web",
				embedExplain: "Utilisez le code HTML suivant pour incorporer le journal dans une page Web.",
				size: "Taille (largeur/hauteur) :",
				autoplayLabel: "Mode de lecture automatique",
				autoplayExplain1: "Le mode de lecture automatique fait avancer votre récit à intervalle régulier. Il est idéal pour les écrans publics, mais, dans d\'autres cas, il peut compliquer la lecture du récit. Cette fonctionnalité n\'est pas prise en charge sur les petits écrans.",
				autoplayExplain2: "Lorsque ce mode est actif, vous disposez de contrôles pour lire le récit ou le mettre en pause, ainsi que régler la vitesse de navigation.",
				linksupdated: "Liens mis à jour"
			}
        }
    })
);