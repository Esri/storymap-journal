define(
	 ({
		common: {
			common: {
				edit: "Modifier"
			},
			inlineFieldEdit: {
				editMe: "Modifier"
			},
			builderPanel: {
				panelHeader: "Générateur %TPL_NAME%",
				buttonSave: "ENREGISTRER",
				buttonShare: "PARTAGER",
				buttonSettings: "PARAMETRES",
				buttonHelp: "AIDE",
				noPendingChange: "Aucune modification en attente",
				unSavedChangeSingular: "1 modification non enregistrée",
				unSavedChangePlural: "modifications non enregistrées",
				popoverSaveWhenDone: "N\’oubliez pas d\’enregistrer lorsque vous avez terminé",
				closeWithPendingChange: "Voulez-vous vraiment confirmer l\’opération ? Vos modifications seront perdues.",
				ok: "OK",
				savingApplication: "Enregistrement de l\’application",
				saveError: "L\’enregistrement a échoué, réessayez",
				saveError3: "Le titre ne peut pas être vide",
				// TODO
				signIn: "Connectez-vous avec un compte sur",
				shareStatus1: "L\'application n\'est pas enregistrée",
				shareStatus2: "L\'application est partagée publiquement",
				shareStatus3: "L\'application est partagée au sein de l\'organisation",
				shareStatus4: "L\'application n\'est pas partagée"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Titre",
				addPopupTitle: "Ajouter",
				addPopupDescription: "Ajoutez une nouvelle vue à votre série.",
				addPopupButton: "AJOUTER",
				// Edit
				editPopupTitle: "Modifier",
				editPopupDescription: "Modifiez la vue sélectionnée.",
				editPopupButton: "APPLIQUER",
				// Add/Edit
				addEditPopupCancelButton: "ANNULER",
				addEditPopupMyContentBtn: "Sélectionner dans mon contenu",
				addEditPopupConfigureWebMapBtn: " Configurer"
			},
			share: {
				firstSaveTitle: "L\'application a été enregistrée",
				firstSaveHeader: "Votre application est maintenant enregistrée dans ArcGIS Online. Lisez les réponses suivantes aux questions fréquentes.",
				firstSaveA1: "Si vous n\'êtes pas familiarisé avec ArcGIS Online ou si vous voulez un raccourci pour accéder à l\'interface de création, vous pouvez enregistrer le lien suivant : %LINK1%",
				firstSaveA1bis: "L\'application est également accessible dans votre <a href='%LINK2%' target='_blank'>dossier de contenu ArcGIS Online</a>.",
				firstSaveQ2: "Mon application est-elle partagée ?",
				firstSaveA2: "Votre application n\'est actuellement pas partagée. Pour la partager, utilisez le bouton PARTAGER.",
				shareTitle: "Partager votre application",
				sharePrivateHeader: "Votre application n\'est pas partagée. Voulez-vous la partager ?",
				sharePrivateBtn1: "Partager publiquement",
				sharePrivateBtn2: "Partager avec mon organisation",
				sharePrivateWarning: "Le partage %WITH% a été désactivé, car vous ne possédez pas la <a href='%LINK%' target='_blank'>carte Web</a>.",
				sharePrivateWarningWith1: "publiquement",
				sharePrivateWarningWith2: "publiquement et avec l\'organisation",
				sharePrivateProgress: "Partage en cours...",
				sharePrivateErr: "Echec du partage, essayez à nouveau ou",
				sharePrivateOk: "Partage mis à jour, en cours de chargement...",
				sharePreviewAsUser: "Aperçu",
				shareHeader1: "Votre application est <strong>accessible publiquement</strong>.",
				shareHeader2: "Votre application est accessible aux membres de votre organisation (identifiant de connexion requis).",
				shareLinkHeader: "Partager l\'application avec votre public",
				shareLinkOpen: "OUVRIR",
				shareQ1Opt1: "Comment préserver le caractère privé de l'\'application ?",
				shareQ1Opt2: "Comment préserver le caractère privé de l\'application ou la partager publiquement ?",
				shareA1: "Utilisez %SHAREIMG% sur <a href='%LINK1%' target='_blank'>la page des éléments de l\'application</a>. Si vous souhaitez également annuler le partage de la carte Web, utilisez <a href='%LINK2%' target='_blank'>la page des éléments de la carte Web</a>.",
				shareA1bis: "Si vous souhaitez également annuler le partage du service d\'entités, utilisez <a href='%LINK1%' target='_blank'>la page des éléments du service d\'entités</a>.",
				shareQ2: "Comment modifier l\'application ultérieurement ?",
				shareQ2bis: "Comment revenir dans l\'interface de création ?",
				shareA2div1: "Enregistrez et réutilisez le lien suivant %LINK1% ou utilisez <a href='%LINK2%' target='_blank'>la page des éléments de l\'application</a>.",
				shareA2div2: "En tant que propriétaire de l\'application, lorsque vous êtes connecté à ArcGIS.com, l\'application affiche un bouton permettant d\'ouvrir le générateur interactif :",				
				shareQ3: "Où les données sont-elles stockées ?",
				shareA3: "La configuration de l\'application est stockée dans <a href='%LINK1%' target='_blank'>cet élément de l\'application</a> et <a href='%LINK2%' target='_blank'>cet élément de l\'application Web</a>. Si vous avez utilisé une importation Flickr, Picasa, Facebook ou YouTube, vos images et vidéos y restent stockées et ne sont pas dupliquées dans ArcGIS Online.",
				learnMore: "En savoir plus",
				close: "Fermer"
			},
			settings: {
				header: "Paramètres de l\’application",
				cancel: "Annuler",
				apply: "Appliquer",
				tabError: "Recherchez des erreurs dans tous les onglets"
			},
			settingsLayout: {
				title: "Mise en page",
				explain: "Quelle mise en page voulez-vous utiliser ?",
				explainInit: "Une modification est possible via la boîte de dialogue Paramètres.",
				selected: "Mise en page sélectionnée",
				select: "Sélectionner cette mise en page"
			},
			settingsTheme: {
				title: "Thème",
				explain: "Sélectionnez un thème d\'application ou définissez vos propres couleurs.",
				label: "Couleurs d\'arrière-plan de l\'en-tête et des volets latéraux"
			},
			settingsHeader: {
				title: "En-tête",
				explain: "Personnalisez le logo d\’en-tête (250 x 50 px au maximum).",
				logoEsri: "Logo Esri",
				logoNone: "Aucun logo",
				logoCustom: "Logo personnalisé",
				logoCustomPlaceholder: "URL de l\’image",
				logoCustomTargetPlaceholder: "Lien",
				logoSocialExplain: "Personnalisez le lien d\’en-tête en haut à droite.",
				logoSocialText: "Texte",
				logoSocialLink: "Lien",
				logoSocialDisabled: "Cette entité a été désactivée par l\'administrateur"
			},
			mediaSelector: {
				lblMap: "Carte",
				lblPicture: "Image",
				lblVideo: "Vidéo",
				lblExternal: "Page externe"
			},
			webMapSelector: {
				radioCurrentWebMap: "Carte Web actuelle",
				radioWebmapApp: "Une des autres cartes Web utilisées dans l\'application",
				radioAnotherWebmap: "Une autre carte Web",
				btnSelect: "Sélectionner",
				lblOr: "ou",
				fieldEnterWebmapId: "Entrer l\'identifiant d\'une carte Web",
				btnConfigure: "Configurer la carte"
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
				title: "Sélectionner une carte Web",
				searchTitle: "Rechercher",
				ok: "OK",
				cancel: "Annuler",
				placeholder: "Saisir un terme de recherche"
			}
		}
	})
);
