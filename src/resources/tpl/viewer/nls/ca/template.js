define({
  "viewer": {
    "common": {
      "close": "Tanca",
      "focusMainstage": "Activa el teclat per al contingut multimèdia",
      "expandImage": "Expandeix la imatge"
    },
    "a11y": {
      "skipToContent": "Ves a la narració",
      "headerAria": "Capçalera de la història",
      "panelAria": "Narració de la història",
      "mainStageAria": "Contingut multimèdia de la secció de la història actual",
      "logoLinkAria": "Enllaç del logotip",
      "toTop": "Ves al principi de la narració",
      "focusContent": "Torna a la narració",
      "navAria": "Seccions de la història",
      "navPreviousAria": "Secció anterior",
      "navNextAria": "Secció següent",
      "toSectionAria": "Ves a la secció %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Grup de seccions següent (%SECTION_RANGE%)",
      "toPrevGroupAria": "Grup de seccions anterior (%SECTION_RANGE%)",
      "loadingAria": "S'està carregant el contingut de la història"
    },
    "loading": {
      "step1": "S'està carregant la història",
      "step2": "S'estan carregant les dades",
      "step3": "S'està inicialitzant",
      "loadBuilder": "S'està canviant al builder",
      "long": "El Map Journal s'està inicialitzant",
      "long2": "Gràcies per esperar",
      "failButton": "Torna a carregar la història"
    },
    "signin": {
      "title": "És necessària l'autenticació",
      "explainViewer": "Inicieu la sessió amb un compte al %PORTAL_LINK% per accedir a la història.",
      "explainBuilder": "Inicieu la sessió amb un compte al %PORTAL_LINK% per configurar la història."
    },
    "errors": {
      "boxTitle": "S'ha produït un error",
      "invalidConfig": "Configuració no vàlida",
      "invalidConfigNoApp": "L'identificador de l'aplicació de cartografia web no s'ha especificat a index.html.",
      "invalidConfigNoAppDev": "No s'ha especificat cap identificador de l'aplicació de cartografia web als paràmetres de l'adreça URL (?appid=). En el mode de desenvolupament, la configuració de l'appid a index.html es passa per alt.",
      "unspecifiedConfigOwner": "El propietari autoritzat no s'ha configurat.",
      "invalidConfigOwner": "El propietari de la història no té autorització.",
      "createMap": "No es pot crear el mapa",
      "invalidApp": "No es pot accedir a %TPL_NAME% o no existeix.",
      "appLoadingFail": "S'ha produït algun problema. %TPL_NAME% no s'ha carregat correctament.",
      "notConfiguredDesktop": "La història encara no s'ha configurat.",
      "notConfiguredMobile": "El builder de %TPL_NAME% no és compatible amb aquesta mida de pantalla. Si és possible, canvieu la mida del navegador per accedir al builder o creeu la història en un dispositiu amb una pantalla més gran.",
      "notConfiguredMobile2": "Gireu el dispositiu en posició horitzontal per utilitzar el builder de %TPL_NAME%.",
      "notAuthorized": "No teniu autorització per accedir a aquesta història",
      "notAuthorizedBuilder": "No teniu autorització per utilitzar el builder de %TPL_NAME%.",
      "noBuilderIE": "El builder no és compatible amb les versions de l'Internet Explorer anteriors a la versió %VERSION%. %UPGRADE%",
      "noViewerIE": "Aquesta història no és compatible amb versions de l'Internet Explorer anteriors a la versió %VERSION%. %UPGRADE%",
      "noViewerIE2": "Esteu intentant veure aquesta història amb un navegador antic no compatible. És possible que algunes característiques no funcionin o que es produeixin altres problemes inesperats. És recomanable que actualitzeu a l'Internet Explorer 11 o que feu servir un altre navegador, com ara el Chrome.",
      "noViewerIE3": "A finals de 2017, aquesta història ja no es podrà carregar en aquest navegador. Quan això passi, haureu de fer servir un navegador compatible per veure-la.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Actualitzeu el navegador</a>.",
      "mapLoadingFail": "S'ha produït algun problema. El mapa no s'ha carregat correctament.",
      "signOut": "Tanca la sessió",
      "print0": "Aquesta història no es pot imprimir.",
      "print1": "Per imprimir aquesta història, utilitzeu el botó d'impressió del quadre de diàleg per compartir.",
      "print2": "Normalment, es pot accedir a una versió per imprimir de la història a través del quadre de diàleg per compartir, però l'autor l'ha deshabilitat.",
      "attention": "Atenció!"
    },
    "mobileView": {
      "tapForDetails": "Toqueu per obtenir detalls",
      "clickForDetails": "Més informació",
      "swipeToExplore": "Swipe per explorar",
      "tapForMap": "Toqueu per tornar enrere",
      "clickForMap": "BACK"
    },
    "floatLayout": {
      "scroll": "Desplaçament"
    },
    "sideLayout": {
      "scroll": "Desplaceu-vos cap avall per veure'n més"
    },
    "mainStage": {
      "back": "Enrere",
      "errorDeleted": "Aquest enllaç no està actiu (la secció s'ha suprimit)",
      "errorNotPublished": "Aquest enllaç no està actiu (la secció no s'ha publicat)"
    },
    "headerFromCommon": {
      "storymapsText": "Un Story Map",
      "builderButton": "Edita",
      "facebookTooltip": "Comparteix-ho al Facebook",
      "twitterTooltip": "Comparteix-ho al Twitter",
      "bitlyTooltip": "Comparteix o imprimeix",
      "templateTitle": "Defineix el títol de la plantilla",
      "templateSubtitle": "Defineix el subtítol de la plantilla",
      "share": "Comparteix",
      "checking": "S'està comprovant el contingut de la història",
      "fix": "Soluciona els problemes de la història",
      "noerrors": "No s'ha detectat cap problema",
      "tooltipAutoplayDisabled": "No està disponible en el mode de reproducció automàtica",
      "notshared": "Història no compartida"
    },
    "mapFromCommon": {
      "overview": "Mapa de visualització general",
      "legend": "Llegenda",
      "home": "Aplica el zoom a l'inici"
    },
    "shareFromCommon": {
      "copy": "Copia",
      "copied": "S'ha copiat",
      "open": "Obre",
      "embed": "Incrusta en una pàgina web",
      "embedExplain": "Utilitzeu el codi HTML següent per incrustar el diari en una pàgina web.",
      "size": "Mida (amplada/altura):",
      "autoplayLabel": "Mode de reproducció automàtica",
      "autoplayExplain1": "El mode de reproducció automàtica avançarà per la història a intervals regulars. Aquest mode és idoni per a un quiosc o un monitor públic, però en altres situacions pot ser que dificulti la lectura de la història. Aquesta característica no és compatible amb pantalles petites.",
      "autoplayExplain2": "Quan s'activa aquest mode, apareixen controls per reproduir i aturar temporalment la història, així com per ajustar la velocitat de navegació.",
      "linksupdated": "Els enllaços s'han actualitzat.",
      "print": "Imprimeix",
      "printInstruction1": "Espereu que es carregui tota la història abans d'imprimir-la",
      "printInstruction1a": "Si la pàgina es carrega lentament o no es mostra algun contingut multimèdia, proveu d'imprimir un interval de seccions més petit.",
      "printInstruction1b": "Per obtenir uns resultats òptims, pot ser que hagueu d'habilitar la impressió dels elements en segon terme a la configuració d'impressió del navegador.",
      "printInstruction2": "Aquesta pàgina no es pot compartir amb altres persones. Com a alternativa, compartiu ${link}",
      "link": "enllaç a la història",
      "optionsHeader": "Opcions",
      "printOptPageBreak": "Comença cada secció en una pàgina nova",
      "makeTextBlack": "Defineix tot el text de color negre",
      "showLinks": "Mostra les URL dels enllaços",
      "madeWith": "Aquesta història s'ha creat amb ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Story Map Journal d'Esri",
      "readItOnline": "Llegeix la versió interactiva al web a ${link}.",
      "printMSWarning": "enllaç només disponible a la història en línia",
      "printVideoWarning": "Aquest vídeo es pot veure a la versió en línia d'aquest story map",
      "printRangeHeader": "Imprimeix una part d'aquesta història",
      "sectionLabel": "Seccions:",
      "apply": "Aplica",
      "resetRange": "Restableix a la història completa"
    }
  }
});