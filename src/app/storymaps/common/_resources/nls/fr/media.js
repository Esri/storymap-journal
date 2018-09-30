define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Support",
      "lblSelect2": "Contenu",
      "lblMap": "Carte",
      "lblImage": "Image",
      "lblVideo": "Vidéo",
      "lblExternal": "Page Web",
      "lblUpload": "Charger",
      "lblLink": "Lier",
      "disabled": "Cette entité a été désactivée par l'administrateur",
      "userLookup": "Charger des albums",
      "notImplemented": "Fonction pas encore implémentée.",
      "noData": "Aucun album public trouvé",
      "thirdPartyTerms": "En utilisant un service tiers, vous acceptez ses conditions d’utilisation : "
    },
    "imageSelector": {
      "lblStep1": "Choisir le service",
      "lblStep2": "Sélectionner le support",
      "lblStep3": "Configurer"
    },
    "imageSelectorHome": {
      "explain": "Chargez les images à partir des réseaux sociaux <br /> ou directement à partir d'une URL"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "rechercher une image",
      "lblDrop": "Déposer une image ici ou",
      "infoUpload": "Les images seront stockées dans votre compte ArcGIS et accessibles uniquement dans votre narration.",
      "warningFileTypes": "L'image peut être au format .jpg, .png, .gif ou .bmp",
      "warningOneFile": "Vous ne pouvez charger qu’une seule image à la fois.",
      "warningFileSize": "La taille de l’image doit être inférieure à 10 Mo.",
      "tooltipRemove": "Supprimez cette image inutilisée de votre compte ArcGIS. <br> (Vous devrez la charger à nouveau si vous décidez de l'utiliser ultérieurement.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nom d'utilisateur",
      "signInMsg2": "Utilisateur introuvable",
      "loadingFailed": "Echec du chargement"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Adresse électronique ou identifiant Google",
      "signInMsg2": "Compte introuvable",
      "howToFind": "Comment trouver un identifiant Picasa",
      "howToFind2": "Copier les chiffres situés entre le premier et le deuxième '/' d'une page Picasa"
    },
    "videoSelectorCommon": {
      "check": "Vérifier",
      "notFound": "Vidéo introuvable",
      "found": "Vidéo trouvée",
      "select": "Sélectionner cette vidéo"
    },
    "videoSelectorHome": {
      "other": "Autre"
    },
    "videoSelectorYoutube": {
      "url": "Lien vidéo YouTube",
      "pageInputLbl": "Nom d'utilisateur",
      "lookupMsgError": "Utilisateur introuvable",
      "howToFind": "Comment trouver un nom d'utilisateur YouTube",
      "howToFind2": "Le nom d'utilisateur est affiché sous les vidéos",
      "found": "Trouvé(e)",
      "noData": "Aucune vidéo publique trouvée",
      "videoNotChecked": "La vidéo n'a pas été vérifiée sur YouTube mais son adresse semble correcte.",
      "checkFailedAPI": "La vérification YouTube a échoué, vérifiez votre clé d'API YouTube."
    },
    "videoSelectorVimeo": {
      "url": "Lien vidéo Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Cette carte de narration ne lit pas les fichiers vidéo bruts (AVI, MPEG), mais peut lire les vidéos hébergées avec des lecteurs intégrés (YouTube ou Vimeo).",
      "explain2": "La plupart des services d'hébergement de vidéos proposent cette fonctionnalité. Trouvez l'option permettant d'incorporer la vidéo, copiez le code fourni, puis ajoutez-le à votre narration à l'aide de l'option de contenu %WEBPAGE%.",
      "explain3": "L'autre solution consiste à héberger la vidéo dans une page HTML qui utilise un lecteur vidéo tel que %EXAMPLE%. Vous pouvez ensuite ajouter l'URL de cette page HTML dans votre narration en tant que %WEBPAGE%.",
      "webpage": "Page web"
    },
    "webpageSelectorHome": {
      "lblUrl": "Lien de page Web",
      "lblEmbed": "Code incorporé",
      "lblMustUseHTTPS": "Les liens vers le contenu web doivent commencer par HTTPS",
      "lblOR": "OU",
      "lblError1": "Erreur. Effacez un des deux champs en entrée.",
      "lblError2": "Le code incorporé ne peut contenir qu'un %IFRAMETAG%",
      "configure": "Configurer"
    },
    "mediaConfigure": {
      "lblURL": "Lien d'image",
      "lblURLPH": "Le lien doit se terminer par .jpg, .png, .gif ou .bmp",
      "lblURLPHHTTPS": "https://www.example.com/image.jpg",
      "lblURLError": "Cette image ne semble pas valide. Spécifiez un lien direct vers un fichier image (votre URL se terminera généralement par .jpg ou .png). Les liens vers une page Web contenant une image ne fonctionneront pas.",
      "lblURLErrorHTTPS": "Le lien de cette image n’est pas valide. L’URL doit commencer par HTTPS et se terminer par une extension de fichier image prise en charge (.jpg, .png, .gif, .bmp).",
      "lblURLCheck": "Vérification de l'image...",
      "lblLabel": "Légende de l'image",
      "lblLabel1": "Légende",
      "lblLabel2": "Texte de pointage",
      "lblLabel3": "Aucun",
      "lblLabelPH": "Entrer du texte...",
      "lblMaximize": "Inclure un bouton d'agrandissement dans l'angle de l'image",
      "lblMaximizeHelp": "Recommandé uniquement pour les photos de haute qualité",
      "lblPosition": "Position",
      "lblPosition1": "Centre",
      "lblPosition2": "Remplissage",
      "lblPosition3": "Ajuster",
      "lblPosition4": "Etirer",
      "lblPosition5": "Personnalisé",
      "lblURLHelp": "Le lien de l’image doit commencer par HTTPS.<br><br>Pour des résultats optimaux, les images ne doivent pas dépasser 400 ko. Utilisez des images JPG compressées à 80 % avec les largeurs recommandées suivantes : 2 000 pixels pour la grande scène ou le panneau de narration avec le bouton Agrandir, 1 000 pixels pour le panneau de narration sans le bouton Agrandir.<br><br>Si une image liée s’affiche lentement, chargez-la dans votre récit pour de meilleurs résultats.",
      "tooltipDimension": "La valeur peut être spécifiée en 'px' ou '%'",
      "tooltipDimension2": "La valeur doit être spécifiée en 'px'",
      "lblPosition2Explain": "(peut être rognée)",
      "lblPosition3Explain": "(ne sera pas rognée)",
      "lblPosition3Explain2": "(la largeur s'adapte toujours au volet)",
      "lblPosition4Explain": "(peut être déformée)",
      "unloadLbl": "Décharger lorsque le lecteur quitte cette section",
      "unloadHelp": "Si la page Web comporte un support audio ou vidéo, cette option doit rester activée pour empêcher la lecture du contenu lorsque le lecteur quitte cette section. Désactivez cette option pour continuer la lecture d'une piste audio pendant que le lecteur avance dans le récit.<br />Si la page Web est une application, désactivez cette option pour que le récit ne se recharge pas si le lecteur revient à cette section.",
      "embedProtocolLabel": "Charger la page via une connexion sécurisée (HTTPS)",
      "embedProtocolWarning1": "Si cette page ne se charge pas dans votre récit, elle ne peut pas être incorporée pour des raisons de sécurité Web. Vous pouvez également ajouter un lien dans votre narration afin d’ouvrir la page dans un nouvel onglet du navigateur.",
      "embedProtocolWarning2": "Si cette page ne se charge pas dans votre récit, désélectionnez cette option et réessayez. Si la page ne se charge toujours pas, elle ne peut pas être incorporée pour des raisons de sécurité Web. Vous pouvez également ajouter un lien dans votre narration afin d’ouvrir la page dans un nouvel onglet du navigateur.",
      "learn": "En savoir plus",
      "lblAltText": "Texte de remplacement",
      "placeholderAltText": "Entrez une description de ce support pour les lecteurs malvoyants...",
      "tooltipAltText": "Indiquez une description du contenu de ce support qui sera utilisée par les technologies d’assistance, telles que les logiciels de lecteur d’écran. Cette description est facultative mais conseillée à des fins de compatibilité avec les directives en matière d’accessibilité Web, telles que WCAG et Section 508."
    },
    "editorActionGeocode": {
      "lblTitle": "Localiser une adresse ou un lieu",
      "mapMarkerExplain": "L'utilisateur verra un symbole ponctuel cartographique en cliquant sur le lien"
    },
    "editorActions": {
      "navigate": "Accéder à une autre section",
      "remove": "Supprimer l'action",
      "preview": "Prévisualiser l'action"
    },
    "editorActionMedia": {
      "lblTitle": "Modifier le contenu de la grande scène"
    },
    "editorInlineMedia": {
      "lblTitle": "Insérer une image, une vidéo ou une page Web"
    }
  }
});