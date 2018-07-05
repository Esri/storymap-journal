define({
  "viewer": {
    "common": {
      "close": "Cerrar",
      "focusMainstage": "Activar el teclado para el contenido multimedia",
      "expandImage": "Expandir imagen"
    },
    "a11y": {
      "skipToContent": "Saltar a narración",
      "headerAria": "Encabezado de la historia",
      "panelAria": "Narración de la historia",
      "mainStageAria": "Contenido multimedia de la sección actual de la historia",
      "logoLinkAria": "Vínculo del logotipo",
      "toTop": "Ir al comienzo de la narración",
      "focusContent": "Volver a narración",
      "navAria": "Secciones de la historia",
      "navPreviousAria": "Sección anterior",
      "navNextAria": "Sección siguiente",
      "toSectionAria": "Ir a la sección %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Siguiente grupo de secciones (%SECTION_RANGE%)",
      "toPrevGroupAria": "Anterior grupo de secciones (%SECTION_RANGE%)",
      "loadingAria": "El contenido de la historia se está cargando"
    },
    "loading": {
      "step1": "Cargando historia",
      "step2": "Cargando datos",
      "step3": "Inicializando",
      "loadBuilder": "Cambiando a Builder",
      "long": "Map Journal se está inicializando",
      "long2": "Gracias por esperar",
      "failButton": "Volver a cargar la historia"
    },
    "signin": {
      "title": "Se requiere autenticación",
      "explainViewer": "Inicia sesión con una cuenta en %PORTAL_LINK% para acceder a la historia.",
      "explainBuilder": "Inicia sesión con una cuenta en %PORTAL_LINK% para configurar la historia."
    },
    "errors": {
      "boxTitle": "Se ha producido un error",
      "invalidConfig": "Configuración no válida",
      "invalidConfigNoApp": "No se ha especificado el identificador de la aplicación en index.html.",
      "invalidConfigNoAppDev": "No se ha especificado ningún identificador de la aplicación de representación cartográfica web en los parámetros de la dirección URL (?appid=). En modo de desarrollo, la configuración de appid en index.html se ignora.",
      "unspecifiedConfigOwner": "El propietario autorizado no se ha configurado.",
      "invalidConfigOwner": "El propietario de la historia no está autorizado.",
      "createMap": "No se puede crear el mapa",
      "invalidApp": "No se puede acceder a %TPL_NAME% o no existe.",
      "appLoadingFail": "Se ha producido un error, %TPL_NAME% no se cargó correctamente.",
      "notConfiguredDesktop": "La historia no se ha configurado todavía.",
      "notConfiguredMobile": "El builder de %TPL_NAME% no es compatible con este tamaño de pantalla. Si es posible, cambia el tamaño de tu navegador para acceder al builder o crea tu historia en un dispositivo que tenga una pantalla más grande.",
      "notConfiguredMobile2": "Rota el dispositivo a horizontal para utilizar el builder de %TPL_NAME%.",
      "notAuthorized": "No tienes autorización para acceder a esta historia",
      "notAuthorizedBuilder": "No estás autorizado para utilizar el builder de %TPL_NAME%.",
      "noBuilderIE": "El builder no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
      "noViewerIE": "Esta historia no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
      "noViewerIE2": "Está intentando ver esta historia con un navegador antiguo no compatible. Es posible que algunas características no funcionen o que se produzcan otros problemas inesperados. Es recomendable actualizar a Internet Explorer 11 o usar otro navegador como Chrome.",
      "noViewerIE3": "A finales de 2017, esta historia no se podrá cargar en este navegador. Cuando eso ocurra, deberá usar un navegador compatible para ver la historia.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Actualiza tu navegador</a>.",
      "mapLoadingFail": "Se ha producido un error, el mapa no se cargó correctamente.",
      "signOut": "Cerrar sesión",
      "print0": "Esta historia no se puede imprimir.",
      "print1": "Para imprimir esta historia, utilice el botón de impresión situado en el cuadro de diálogo para compartir.",
      "print2": "Normalmente se puede acceder a una versión imprimible de la historia a través del cuadro de diálogo para compartir, pero el autor ha deshabilitado este cuadro de diálogo.",
      "attention": "Atención"
    },
    "mobileView": {
      "tapForDetails": "Tocar para ver detalles",
      "clickForDetails": "Más información",
      "swipeToExplore": "Barrer para explorar",
      "tapForMap": "Tocar para volver",
      "clickForMap": "ATRÁS"
    },
    "floatLayout": {
      "scroll": "Desplazar"
    },
    "sideLayout": {
      "scroll": "Desplázate hacia abajo para obtener más información"
    },
    "mainStage": {
      "back": "Atrás",
      "errorDeleted": "Este vínculo no está activo (se ha eliminado la sección)",
      "errorNotPublished": "Este vínculo no está activo (no se publica la sección)"
    },
    "headerFromCommon": {
      "storymapsText": "Un story map",
      "builderButton": "Editar",
      "facebookTooltip": "Compartir en Facebook",
      "twitterTooltip": "Compartir en Twitter",
      "bitlyTooltip": "Compartir o imprimir",
      "templateTitle": "Establecer título de plantilla",
      "templateSubtitle": "Establecer subtítulo de plantilla",
      "share": "Compartir",
      "checking": "Comprobando el contenido de tu historia",
      "fix": "Soluciona los problemas de tu historia",
      "noerrors": "No se ha detectado ningún problema",
      "tooltipAutoplayDisabled": "Esto no está disponible en el modo de reproducción automática",
      "notshared": "No se ha compartido la historia"
    },
    "mapFromCommon": {
      "overview": "Mapa de vista general",
      "legend": "Leyenda",
      "home": "Zoom Inicio"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Abrir",
      "embed": "Integrar en página web",
      "embedExplain": "Usa el siguiente código HTML para integrar el diario en una página web.",
      "size": "Tamaño (ancho/alto):",
      "autoplayLabel": "Modo de reproducción automática",
      "autoplayExplain1": "El modo de reproducción automática avanzará por la historia a intervalos regulares. Esto es idóneo para monitores de quioscos o de visualización pública, pero debes tener en cuenta que, en otras situaciones, puede que dificulte la lectura de la historia. Esta función no es compatible con pantallas pequeñas.",
      "autoplayExplain2": "Cuando este modo está activado, hay disponibles controles para reproducir o detener la historia y para ajustar la velocidad de navegación.",
      "linksupdated": "Vínculos actualizados",
      "print": "Imprimir",
      "printInstruction1": "Espere a que se cargue toda la historia antes de imprimir",
      "printInstruction1a": "Si esta página se carga lentamente o algún contenido multimedia no aparece, pruebe a imprimir un rango menor de secciones.",
      "printInstruction1b": "Para obtener resultados óptimos, puede que tenga que habilitar la impresión de elementos de fondo en los ajustes de impresión de su navegador.",
      "printInstruction2": "Esta página no se puede compartir con otros, en su lugar comparta ${link}",
      "link": "vínculo a la historia",
      "optionsHeader": "Opciones",
      "printOptPageBreak": "Empezar cada sección en una página nueva",
      "makeTextBlack": "Configurar todo el texto en color negro",
      "showLinks": "Mostrar las URL del vínculo",
      "madeWith": "Esta historia se ha creado con ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Story Map Journal de Esri",
      "readItOnline": "Leer la versión interactiva en la web, en ${link}.",
      "printMSWarning": "vínculo solo disponible en la historia en línea",
      "printVideoWarning": "Este vídeo se puede ver en la versión en línea de este story map",
      "printRangeHeader": "Imprimir parte de esta historia",
      "sectionLabel": "Secciones:",
      "apply": "Solicitar participación",
      "resetRange": "Restablecer a historia completa"
    }
  }
});