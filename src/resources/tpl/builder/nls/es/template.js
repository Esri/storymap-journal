define(
	 ({
		builder: {
			layouts: {
				mainStage: "Escenario principal",
				sideTitle: "Panel lateral",
				sideDescr: "Diseño de una historia con una gran cantidad de texto que permite combinar fotos, vídeos y mapas en un mensaje claro y definido.",
				floatTitle: "Panel flotante",
				floatDescr: "Diseño que centra la atención en la cartografía y permite usar un panel de texto corto y transparente para ayudar a contar la historia."
			},
			common: {
				lblStatus1: "Publicado",
				lblStatus2: "Borrador",
				lblStatus3: "Oculto"
			},
			settingsLayoutOptions: {
				title: "Opciones de diseño",
				cfgLeft: "Izquierda",
				cfgRight: "Derecha",
				cfgSmall: "Pequeño",
				cfgMedium: "Mediano",
				cfgLarge: "Grande",
				socialLinksLabel: "Mostrar vínculos de uso compartido en la parte inferior de cada sección",
				socialLinksDescr: "Esto permite a los lectores hacer referencia a secciones concretas de tu %TPL_NAME% y promocionarlas. Por ejemplo, si usas un icono para compartir secciones, los lectores llegarán a esa sección de %TPL_NAME% y no al comienzo de tu historia. Los lectores pueden usar el vínculo de las redes sociales de la sección de título para promocionar todo tu %TPL_NAME% (pestaña de encabezado) y hacer que los usuarios lleguen al inicio de %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Fuentes",
				defaultLbl: "Predeterminado",
				sectionTitleLbl: "Título de la sección",
				sectionContentLbl: "Contenido de la sección"
			},
			initPopup: {
				title: "Bienvenido a"
			},
			addEditPopup: {
				disabled: "Agregar sección está desactivado porque se ha alcanzado el número máximo de secciones permitidas.",
				titleAdd: "Agregar sección",
				titleAddHome: "Agregar sección de inicio",
				titleEdit: "Editar sección",
				step: "Paso",
				stepMainStageExplain: "Contenido del escenario principal",
				stepPanelExplain: "Contenido",
				stepMainStageNextTooltip: "Introducir el título de la sección y seleccionar el contenido del escenario principal",
				stepMainStageNextTooltip2: "Selecciona el contenido del escenario principal",
				step2NextTooltip: "Introducir el título de la sección y el contenido de %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir al siguiente paso",
				stepNextTooltipAdd: "para agregar la sección",
				firstAddExplain: "Esta primera sección es la Sección de inicio, piensa en ella como si fuera la portada de tu historia. El título que acabas de definir se mostrará con fuentes grandes.",
				firstAddLeanMore: "Más información",
				titlePlaceholder: "Título de la sección..."
			},
			addEditViewText: {
				editorPlaceholder: "Agrega aquí texto, vínculos y gráficos pequeños.",
				editorActionsTitle: "Acciones del escenario principal",
				editorActionsHelpDescr: "Usa estos controles para crear vínculos que cambien el escenario principal. Por ejemplo, cuando el lector hace clic en un vínculo, puedes hacer zoom a una ubicación concreta del mapa o mostrar otro mapa web o una imagen.",
				mainStageDisabled: "Las acciones del escenario principal se deshabilitan cuando se maximiza el editor"
			},
			organizePopup: {
				title: "Organizar",
				lblHeader: "Arrastra y suelta secciones para organizar el contenido.",
				lblColTitle: "Título",
				lblColPubDate: "Fecha de publicación",
				lblColStatus: "Estado",
				checkDisplayReverse: "Mostrar secciones en orden inverso",
				btnApplyWarning: "Confirmar la supresión de %NB% secciones",
				deleteTooltip: "Eliminar",
				firstSectionExplain: "(La sección de inicio no se puede mover).",
				exportMainStage: "Contenido del escenario principal",
				exportPanel: "Contenido del panel",
				exportActions: "Acciones del escenario principal"
			},
			exportData: {
				btn: "Exportar contenido",
				tooltip: "La exportación del contenido te permite ver y crear una copia de seguridad del contenido por si lo eliminas accidentalmente. Solo tienes que copiar y pegar el contenido de la página en cualquier procesador de texto."
			},
			help: {
				lblHelp: "Ayuda",
				lblAdd: "Agregar sección",
				lblSettings: "Configuración",
				lblOrga: "Organizar contenido",
				lblEdit: "Ediciones",
				lblPublish: "Compartir",
				lblTips: "Consejos",
				lblMore: "¿Necesitas más información?",
				lblLink: "Visita el sitio web de Esri Story Maps.",
				content1Div1: "Puedes integrar diversos estilos al crear tu historia. El <strong>%LAYOUT_TITLE%</strong> alberga normalmente el texto, las imágenes y los vídeos, mientras que los mapas suelen estar en el <strong>escenario principal</strong>. Sin embargo, el %TPL_NAME% también permite mostrar imágenes, gráficos y vídeos en el escenario principal.",
				content1Div2: "Agregar secciones te permite personalizar tu experiencia narrativa. A medida que los lectores se desplazan por el texto de tu %LAYOUT_TITLE%, en el escenario principal un mapa puede desplazarse o aplicar el zoom a los puntos clave, o pueden activarse automáticamente nuevos mapas e imágenes para reforzar tu mensaje.",
				content2Div1: "Aquí puedes ajustar el aspecto de tu %TPL_NAME%. Los esquemas de color, los diseños, las anchuras y las fuentes se definen aquí.",
				content2Div2: "También puedes agregar vínculos para compartir en Facebook, Twitter y Bitly con el fin de que los lectores puedan divulgar fácilmente tu %TPL_NAME% entre otros usuarios.",
				content3Div1: "Tu contenido se organiza en secciones. Puedes tener tantas secciones como desees (puedes entenderlas como mini capítulos). El flujo de estos capítulos es importante. En Organizar puedes reordenar o eliminar secciones según tus necesidades.",
				content4Div1: "¿Has descubierto un error o deseas cambiar el material? No hay problema: busca el icono de edición en la aplicación para realizar cambios en el contenido. Usarás las funciones de edición muchas veces durante el desarrollo de tu %TPL_NAME%.",
				content5Div1: "Tu %TPL_NAME% está guardada en la cuenta de %PORTAL% y, de manera predeterminada, es privada. Puedes optar por compartirla solo con tu organización o por abrirla al mundo. Te proporcionamos incluso una URL abreviada para que puedas compartirla con más facilidad.",
				content6Div1: "El título de tu sección de inicio es también el título de tu diario. Piensa en la sección de inicio como si fuera la portada de tu historia. El título de la sección de inicio seguirá estando visible para los lectores cuando naveguen por el diario.",
				content6Div2: "Tu %LAYOUT_TITLE% no tiene que ser solo texto; también puedes incluir fotografías y vídeos para animar la historia y que el texto no se haga tan pesado."
			},
			landing: {
				lblAdd: "¿Cómo quieres llamar al diario de mapa?",
				phAdd: "Introduce el título...",
				lblOR: "O",
				lblHelp: "Visita introductoria"
			},
			firstAddSplash: {
				thisis: "Este es el",
				lblMain: "Este es el escenario principal de %BR%"
			}
        }
    })

);
