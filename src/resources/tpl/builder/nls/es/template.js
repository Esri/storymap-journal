define({
  "builder": {
    "layouts": {
      "mainStage": "Escenario principal",
      "sideTitle": "Panel lateral",
      "sideDescr": "Diseño de una historia con una gran cantidad de texto que permite combinar fotos, vídeos y mapas en un mensaje claro y definido.",
      "floatTitle": "Panel flotante",
      "floatDescr": "Diseño que centra la atención en la cartografía y permite usar un panel de texto corto y transparente para ayudar a contar la historia."
    },
    "common": {
      "lblStatus1": "Publicado",
      "lblStatus2": "Borrador",
      "lblStatus3": "Oculto"
    },
    "settingsLayoutOptions": {
      "title": "Opciones de diseño",
      "cfgLeft": "Izquierda",
      "cfgRight": "Derecha",
      "cfgSmall": "Pequeño",
      "cfgMedium": "Mediano",
      "cfgLarge": "Grande",
      "socialLinksLabel": "Mostrar vínculos de uso compartido en la parte inferior de cada sección",
      "socialLinksDescr": "Esto permite a los lectores hacer referencia a secciones concretas de tu %TPL_NAME% y promocionarlas. Por ejemplo, si usas un icono para compartir secciones, los lectores llegarán a esa sección de %TPL_NAME% y no al comienzo de tu historia. Los lectores pueden usar el vínculo de las redes sociales de la sección de título para promocionar todo tu %TPL_NAME% (pestaña de encabezado) y hacer que los usuarios lleguen al inicio de %TPL_NAME%.",
      "socialDisabled": "Esta característica solo está disponible con el diseño de Panel flotante",
      "socialWarning": "Su historia utiliza el diseño de Panel lateral, pero ahora recomendamos utilizar esta opción solo con el diseño de Panel flotante para evitar un problema donde haya posibilidad de que el panel no se coloque en la sección deseada para las narraciones con imágenes. Puede seguir usando esta opción, pero si la deshabilita, solo estará disponible cuando se utilice el diseño de Panel flotante."
    },
    "settingsLayoutFonts": {
      "title": "Fuentes",
      "defaultLbl": "Predeterminado",
      "sectionTitleLbl": "Título de la sección",
      "sectionContentLbl": "Contenido de la sección"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Tema de la organización",
      "lblModTheme": "Tema actual"
    },
    "initPopup": {
      "title": "Bienvenido a"
    },
    "addEditPopup": {
      "disabled": "Agregar sección está desactivado porque se ha alcanzado el número máximo de secciones permitidas.",
      "titleAdd": "Agregar sección",
      "titleAddHome": "Agregar sección de inicio",
      "titleEdit": "Editar sección",
      "step": "Paso",
      "stepMainStageExplain": "Contenido del escenario principal",
      "stepPanelExplain": "Contenido",
      "stepMainStageNextTooltip": "Introducir el título de la sección y seleccionar el contenido del escenario principal",
      "stepMainStageNextTooltip2": "Selecciona el contenido del escenario principal",
      "step2NextTooltip": "Introducir el título de la sección y el contenido de %LAYOUT-TYPE%",
      "stepNextTooltipNext": "para ir al siguiente paso",
      "stepNextTooltipAdd": "para agregar la sección",
      "firstAddExplain": "Esta primera sección es la Sección de inicio, piensa en ella como si fuera la portada de tu historia. El título que acabas de definir se mostrará con fuentes grandes.",
      "firstAddLeanMore": "Más información",
      "titlePlaceholder": "Título de la sección..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Agrega aquí texto, vínculos y gráficos pequeños.",
      "editorActionsTitle": "Story Actions",
      "editorActionsHelpDescr": "Cree vínculos en su narración que ayuden a contar su historia. Una Story Action puede vincularse a otra sección o cambiar el escenario principal. Por ejemplo, puede configurar una acción para mover el mapa a otra ubicación, activar o desactivar capas de mapa, o bien cambiar el medio del escenario principal por una imagen, vídeo, mapa o página web diferentes.",
      "mainStageDisabled": "Story Actions se deshabilitan cuando se maximiza el editor"
    },
    "organizePopup": {
      "title": "Organizar",
      "lblHeader": "Arrastra y suelta secciones para organizar tu historia.",
      "lblColTitle": "Título",
      "lblColPubDate": "Fecha de publicación",
      "lblColStatus": "Estado",
      "checkDisplayReverse": "Mostrar secciones en orden inverso",
      "btnApplyWarning": "Confirmar la supresión de %NB% secciones",
      "deleteTooltip": "Eliminar",
      "firstSectionExplain": "(La sección de inicio no se puede mover).",
      "exportMainStage": "Contenido del escenario principal",
      "exportPanel": "Contenido del panel",
      "exportActions": "Story Actions"
    },
    "exportData": {
      "btn": "Exportar contenido",
      "tooltip": "La exportación del contenido te permite ver y crear una copia de seguridad del contenido por si lo eliminas accidentalmente. Solo tienes que copiar y pegar el contenido de la página en cualquier procesador de texto."
    },
    "help": {
      "lblHelp": "Ayuda",
      "lblAdd": "Agregar sección",
      "lblSettings": "Configuración",
      "lblOrga": "Organizar contenido",
      "lblEdit": "Ediciones",
      "lblPublish": "Compartir",
      "lblTips": "Consejos",
      "lblMore": "¿Necesitas más información?",
      "lblLink": "Visita el sitio web de Esri Story Maps.",
      "content1Div1": "Puedes integrar diversos estilos al crear tu historia. El <strong>%LAYOUT_TITLE%</strong> alberga normalmente el texto, las imágenes y los vídeos, mientras que los mapas suelen estar en el <strong>escenario principal</strong>. Sin embargo, el %TPL_NAME% también permite mostrar imágenes, gráficos y vídeos en el escenario principal.",
      "content1Div2": "Agregar secciones te permite personalizar tu experiencia narrativa. A medida que los lectores se desplazan por el texto de tu %LAYOUT_TITLE%, en el escenario principal un mapa puede desplazarse o aplicar el zoom a los puntos clave, o pueden activarse automáticamente nuevos mapas e imágenes para reforzar tu mensaje.",
      "content2Div1": "En el cuadro de diálogo Configuración, puedes cambiar el aspecto de tu %TPL_NAME%. Puedes cambiar el diseño, elegir un esquema de color diferente, cambiar la fuente del texto, etc.",
      "content2Div2": "También puedes reemplazar el logotipo de Esri con tu propio logotipo para reflejar tu marca. También puedes especificar el sitio web que se abrirá si los lectores hacen clic en tu logotipo, de modo que puedan obtener más información.",
      "content3Div1": "Tu contenido se organiza en secciones. Puedes tener tantas secciones como desees (puedes entenderlas como mini capítulos). El flujo de estos capítulos es importante. En Organizar puedes reordenar o eliminar secciones según tus necesidades.",
      "content4Div1": "¿Ha encontrado un error o desea cambiar el material? No se preocupe. Con el icono de edición de la aplicación puede realizar cambios en el contenido. Utilizará las funciones de edición tantas veces como desarrolle su %TPL_NAME%.",
      "content5Div1": "Cuando guardas tu %TPL_NAME%, esta es privada inicialmente. Utiliza el botón Compartir para compartirla con otros. Puedes compartir tu %TPL_NAME% públicamente de modo que cualquiera pueda acceder a ella.",
      "content5Div2": "En función de tu cuenta, es posible que también tengas la opción de compartir tu %TPL_NAME% solo con personas de tu organización, de modo que nadie más pueda acceder a ella.",
      "content6Div1": "El título de tu sección de inicio es también el título de tu diario. Piensa en la sección de inicio como si fuera la portada de tu historia. El título de la sección de inicio seguirá estando visible para los lectores cuando naveguen por el diario.",
      "content6Div2": "Tu %LAYOUT_TITLE% no tiene que ser solo texto; también puedes incluir fotografías y vídeos para animar la historia y que el texto no se haga tan pesado."
    },
    "landing": {
      "lblAdd": "¿Cómo quieres llamar al diario de mapa?",
      "phAdd": "Introduce el título...",
      "lblOR": "O",
      "lblHelp": "Visita introductoria",
      "quote0": "Siempre se puede incluir una historia que pueda transportar a las personas a otro lugar.",
      "quote1": "Hoy en día, la narración de historias es la forma más eficaz de aportar ideas al mundo.",
      "quote2": "Las historias que contamos forman el mundo, literalmente. Si desea cambiar el mundo, debe cambiar su historia. Esta realidad vale tanto para individuos como para instituciones.",
      "quote3": "La distancia más corta entre una persona y la verdad es una historia.",
      "quote4": "La gente no quiere más información. Están hasta el cuello de información. Lo que quieren es fe: fe en usted, en sus objetivos, en su éxito, en la historia que usted cuenta.",
      "quote5": "Creo sinceramente que la gente busca historias que cuenten algo real; historias reveladoras, inspiradoras y que vayan más allá de la propia naturaleza del individuo.",
      "quote6": "Si desea influir en una persona o un grupo para que adopten un valor concreto en su vida diaria, cuénteles una historia atractiva.",
      "quote7": "Si me lo cuenta, es un ensayo. Si me lo muestra, es una historia.",
      "quote8": "Si no conoce los árboles, puede perderse en el bosque; pero si no conoce las historias, puede perderse en la vida.",
      "quote9": "Las historias son la conversión creativa de la vida misma en una experiencia más potente, más clara y más significativa. Son la moneda del contacto humano.",
      "quote10": "No existe mayor agonía que la de cargar con una historia acallada.",
      "quote11": "Quizá las historias sean simplemente datos con alma.",
      "quote12": "Las historias son el arma más potente del arsenal de un líder.",
      "quote13": "Por su naturaleza, las historias dejan fuera más de lo que cuentan."
    },
    "firstAddSplash": {
      "thisis": "Este es el",
      "lblMain": "Este es el escenario principal de %BR%"
    }
  }
});