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
				height: "Hauteur"
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
				buttonPreview: "Voir en direct",
				tooltipFirstSave: "Cette fonction n\'est pas disponible tant qu\'un enregistrement n\'est pas effectué.",
				tooltipNotShared: "Cette fonction n\'est pas disponible tant qu\'un partage n\'est pas effectué.",
				noPendingChange: "Aucune modification en attente",
				unSavedChangePlural: "Modifications en attente",
				closeWithPendingChange: "Vouez-vous vraiment confirmer cette opération ? Vos modifications seront perdues.",
				saveError: "L\’enregistrement a échoué, réessayez",
				shareStatus1: "L\'application n\'est pas encore enregistrée",
				shareStatus2: "L\'application est partagée publiquement",
				shareStatus3: "L\'application est partagée au sein de l\'organisation",
				shareStatus4: "L\'application n\'est pas partagée"
			},
			saveError: {
				title: "Erreur d\'enregistrement de l\'application",
				err1Div1: "Impossible d\'enregistrer l\'application, car un autre élément porte déjà le même nom (consultez votre <a class='linkagolroot' target='_blank'>dossier de contenu</a>).",
				err1Div2: "Modifiez le titre de votre application et enregistrez-la.",
				btnOk: "Modifier le titre de l\'application"
			},
			share: {
				firstSaveTitle: "L\'application a été enregistrée",
				firstSaveHeader: "Votre application est maintenant enregistrée dans %PORTAL% mais n\'est pas encore partagée.",
				firstSavePreview: "Aperçu",
				firstSaveShare: "Partager",
				firstSaveA1: "Si vous ne connaissez pas %PORTAL% ou souhaitez un raccourci pour accéder à l\interface du générateur, vous pouvez enregistrer le lien suivant : %LINK1%",
				firstSaveA1bis: "L\'application est également accessible dans votre <a href='%LINK2%' target='_blank'>dossier de contenu %PORTAL%</a>.",
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
				shareHeader1: "Votre application est <strong>accessible publiquement</strong>.",
				shareHeader2: "Votre application est accessible par les membres de votre organisation (identifiant de connexion requis).",
				shareLinkCopy: "Copier",
				shareLinkCopied: "Copié",
				shareQ0: "Comment incorporer l\'application dans une page Web ?",
				shareQ1Opt1: "Comment préserver le caractère privé de l'\'application ?",
				shareQ1Opt2: "Comment préserver le caractère privé de l\'application ou la partager publiquement ?",
				shareA1: "Utilisez %SHAREIMG% sur la <a href='%LINK1%' target='_blank'>page des éléments de l\'application</a>.",
				shareQ2bis: "Comment revenir à l\'interface du générateur ?",
				shareA2div1: "Enregistrez et réutilisez le lien suivant %LINK1% ou utilisez <a href='%LINK2%' target='_blank'>la page des éléments de l\'application</a>.",
				shareA2div2: "En tant que propriétaire de l\'application, lorsque vous êtes connecté sur %PORTAL%, l\'application inclut un bouton pour ouvrir le générateur :",				
				shareQ3: "Où les données sont-elles stockées ?",
				shareA3: "Les données et la configuration de %TPL_NAME% sont stockées dans <a href='%LINK2%' target='_blank'>cet élément de l\'application Web</a>. Si vous avez utilisé une importation Flickr, Picasa, Facebook ou YouTube, vos images et vidéos n\'ont pas été dupliquées dans %PORTAL%."
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
