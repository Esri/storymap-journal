define(
	 ({
		builder: {
			layouts: {
				mainStage: "Grande scène",
				sideTitle: "Volet latéral",
				sideDescr: "Mise en page adaptée aux narrations textuelles intensives qui est idéale pour allier vos photos, vidéos et cartes dans un message clair et précis.",
				floatTitle: "Volet flottant",
				floatDescr: "Mise en page qui met l\'accent sur votre cartographie tout en laissant la place à un volet de texte bref transparent qui transmet le message."
			},
			common: {
				lblStatus1: "Publiées",
				lblStatus2: "Brouillon",
				lblStatus3: "Masqué"
			},
			settingsLayoutOptions: {
				title: "Options de mise en page",
				cfgLeft: "Gauche",
				cfgRight: "Droite",
				cfgSmall: "Petit",
				cfgMedium: "Moyen",
				cfgLarge: "Grand",
				socialLinksLabel: "Afficher les liens de partage au bas de chaque section",
				socialLinksDescr: "Ceci permet aux lecteurs de référencer et de promouvoir des sections spécifiques de votre %TPL_NAME%. Par exemple, si vous utilisez une icône de partage des sections, les lecteurs accéderont directement à cette section de %TPL_NAME% spécifique et non au début de votre narration. Vos lecteurs peuvent utiliser le lien de réseau social dans la section de titre pour promouvoir l\'intégralité de votre %TPL_NAME% (onglet d\'en-tête) et faciliter l\'accès au début de %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Polices",
				defaultLbl: "Paramètre par défaut",
				sectionTitleLbl: "Titre de la section",
				sectionContentLbl: "Contenu de la section"
			},
			initPopup: {
				title: "Bienvenue dans"
			},
			addEditPopup: {
				disabled: "L\'option Ajouter une section est désactivée, car le nombre maximal de sections autorisées a été atteint.",
				titleAdd: "Ajouter une section",
				titleAddHome: "Ajouter une section d\'accueil",
				titleEdit: "Modifier une section",
				step: "Etape",
				stepMainStageExplain: "Contenu de la grande scène",
				stepPanelExplain: "Contenu",
				stepMainStageNextTooltip: "Entrez le titre de la section et sélectionnez le contenu de la grande scène",
				stepMainStageNextTooltip2: "Sélectionner le contenu de la grande scène",
				step2NextTooltip: "Entrez le titre de la section et le contenu %LAYOUT-TYPE%",
				stepNextTooltipNext: "pour accéder à l\'étape suivante",
				stepNextTooltipAdd: "pour ajouter la section",
				firstAddExplain: "La première section est votre section d\'accueil. Considérez-la comme la page de couverture de votre narration. Le titre que vous venez de définir apparaîtra avec des polices de grande taille.",
				firstAddLeanMore: "En savoir plus",
				titlePlaceholder: "Titre de la section..."
			},
			addEditViewText: {
				editorPlaceholder: "Ajoutez du texte, des liens et des graphiques de petite taille ici.",
				editorActionsTitle: "Actions de la grande scène",
				editorActionsHelpDescr: "Utilisez ces contrôles pour créer des liens qui modifient la grande scène. Par exemple, lorsque le lecteur clique sur un lien, vous pouvez déclencher un zoom sur un lieu spécifique de la carte, l\'affichage d\'une autre carte Web ou l\'affichage d\'une image.",
				mainStageDisabled: "Les actions de la grande scène sont désactivées lorsque l\'éditeur est agrandi"
			},
			organizePopup: {
				title: "Organiser",
				lblHeader: "Faites glisser et déplacez des sections pour organiser votre contenu.",
				lblColTitle: "Titre",
				lblColPubDate: "Date de publication",
				lblColStatus: "Statut",
				checkDisplayReverse: "Afficher les sections en ordre inverse",
				btnApplyWarning: "Confirmer la suppression de %NB% section(s)",
				deleteTooltip: "Supprimer",
				firstSectionExplain: "(Impossible de déplacer la section d\'accueil)",
				exportMainStage: "Contenu de la grande scène",
				exportPanel: "Contenu du volet",
				exportActions: "Actions de la grande scène"
			},
			exportData: {
				btn: "Exporter le contenu",
				tooltip: "L\'exportation de votre contenu vous permet d\'afficher et de créer une sauvegarde de votre contenu en cas de suppression accidentelle. Il suffit de copier et de coller le contenu de la page dans un traitement de texte."
			},
			help: {
				lblHelp: "Aide",
				lblAdd: "Ajouter une section",
				lblSettings: "Paramètres",
				lblOrga: "Organiser le contenu",
				lblEdit: "Mises à jour",
				lblPublish: "Partager",
				lblTips: "Astuces",
				lblMore: "Vous souhaitez plus d\'informations ?",
				lblLink: "Consultez le site Web des Story Maps Esri.",
				content1Div1: "Vous pouvez intégrer différents styles lorsque vous élaborez votre narration. Le <strong>%LAYOUT_TITLE%</strong> contient généralement votre texte, vos images et vidéos tandis que vos cartes ont tendance à rejoindre la <strong>grande scène</strong>. Cependant, %TPL_NAME% vous permet de proposer des images, diagrammes et vidéos au sein de la grande scène également.",
				content1Div2: "L\'ajout de sections vous permet de personnaliser réellement votre narration. Lorsque les lecteurs font défiler le texte de votre %LAYOUT_TITLE%, une carte sur la grande scène peut se déplacer et zoomer sur des points essentiels, ou de nouvelles cartes et images peuvent automatiquement apparaître pour appuyer votre point de vue.",
				content2Div1: "La boîte de dialogue Paramètres vous permet de modifier l\'apparence de votre %TPL_NAME%. Vous pouvez changer la mise en page, choisir une autre combinaison de couleurs, modifier la police, etc.",
				content2Div2: "Vous pouvez également remplacer le logo Esri par le logo de votre marque. En outre, vous pouvez désigner le site Web qui sera lancé si des lecteurs cliquent sur votre logo, afin qu\'ils puissent obtenir plus d\'informations.",
				content3Div1: "Votre contenu est organisé en sections. Vous pouvez avoir autant de sections que vous voulez (considérez-les comme des mini chapitres). Le flux de ces chapitres est important. Dans Organiser, vous pouvez agencer ou supprimer les sections comme bon vous semble.",
				content4Div1: "Vous avez trouvé une erreur ou souhaitez changer vos documents ? Aucun problème. Recherchez l\'icône de mise à jour dans l\'application pour apporter les modifications souhaitées à votre contenu. Vous utiliserez les fonctions de mise à jour à maintes reprises au cours du développement de votre %TPL_NAME% !",
				content5Div1: "Lorsque vous enregistrez votre %TPL_NAME%, il est privé. Utilisez le bouton Partager pour le partager avec d\'autres personnes. Vous pouvez partager votre %TPL_NAME% publiquement afin que tout le monde puisse y accéder.",
				content5Div2: "Selon votre compte, vous pouvez également être habilité à partager votre %TPL_NAME% uniquement avec les membres de votre organisation, afin que les autres personnes ne puissent pas y accéder.",
				content6Div1: "Le titre de votre section d\'accueil est également le titre de votre journal. Considérez votre section d\'accueil comme la page de couverture de votre narration. Le titre de la section d\'accueil demeure visible lorsque vos lecteurs parcourent le journal.",
				content6Div2: "Votre %LAYOUT_TITLE% ne contient pas forcément que du texte. Vous pouvez ajouter des photos et des vidéos pour donner vie à votre narration et pour diviser de longues sections de texte !"
			},
			landing: {
				lblAdd: "Quel nom voulez-vous donner à votre journal cartographique ?",
				phAdd: "Entrez votre titre...",
				lblOR: "Ou",
				lblHelp: "Suivre la visite"
			},
			firstAddSplash: {
				thisis: "Il s\'agit du",
				lblMain: "Il s\'agit de la grande scène %BR%"
			}
        }
    })
);
