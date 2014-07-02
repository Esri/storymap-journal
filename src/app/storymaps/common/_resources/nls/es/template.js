define(
	 ({
		common: {
			common: {
				edit: "Editar"
			},
			inlineFieldEdit: {
				editMe: "¡Modifícame!"
			},
			builderPanel: {
				panelHeader: "Builder de %TPL_NAME%",
				buttonSave: "GUARDAR",
				buttonShare: "COMPARTIR",
				buttonSettings: "CONFIGURACIÓN",
				buttonHelp: "AYUDA",
				noPendingChange: "Sin cambios pendientes",
				unSavedChangeSingular: "1 cambio sin guardar",
				unSavedChangePlural: "cambios no guardados",
				popoverSaveWhenDone: "No olvides guardar los cambios cuando hayas terminado",
				closeWithPendingChange: "¿Estás seguro de que deseas confirmar la acción? Tus cambios se perderán.",
				ok: "Aceptar",
				savingApplication: "Guardando la aplicación",
				saveError: "Error al guardar. Inténtalo de nuevo",
				saveError3: "El título no puede estar vacío",
				// TODO
				signIn: "Inicia sesión con una cuenta en",
				shareStatus1: "La aplicación no se ha guardado",
				shareStatus2: "La aplicación se comparte públicamente",
				shareStatus3: "La aplicación se comparte dentro de la organización",
				shareStatus4: "La aplicación no se comparte"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Título",
				addPopupTitle: "Agregar",
				addPopupDescription: "Agrega una nueva vista a la serie.",
				addPopupButton: "AGREGAR",
				// Edit
				editPopupTitle: "Editar",
				editPopupDescription: "Edita la vista seleccionada.",
				editPopupButton: "APLICAR",
				// Add/Edit
				addEditPopupCancelButton: "CANCELAR",
				addEditPopupMyContentBtn: "Seleccionar en mi contenido",
				addEditPopupConfigureWebMapBtn: " Configurar"
			},
			share: {
				firstSaveTitle: "La aplicación se ha guardado correctamente",
				firstSaveHeader: "Tu aplicación se ha guardado en ArcGIS Online. Lee las siguientes respuestas a las preguntas frecuentes.",
				firstSaveA1: "Si no estás familiarizado con el uso de ArcGIS Online o necesitas un acceso directo a la interfaz de creación, puedes guardar el siguiente enlace: %LINK1%",
				firstSaveA1bis: "La aplicación también se puede encontrar en tu <a href='%LINK2%' target='_blank'>carpeta de contenido de ArcGIS Online</a>.",
				firstSaveQ2: "¿Se comparte mi aplicación?",
				firstSaveA2: "Actualmente, tu aplicación no se comparte. Para compartirla, usa el botón COMPARTIR.",
				shareTitle: "Compartir tu aplicación",
				sharePrivateHeader: "Tu aplicación no se ha compartido. ¿Te gustaría compartirla?",
				sharePrivateBtn1: "Compartir públicamente",
				sharePrivateBtn2: "Compartir con mi organización",
				sharePrivateWarning: "Se ha deshabilitado la opción de compartir %WITH% porque no eres el propietario del <a href='%LINK%' target='_blank'>mapa web</a>.",
				sharePrivateWarningWith1: "públicamente",
				sharePrivateWarningWith2: "públicamente y con la organización",
				sharePrivateProgress: "Uso compartido en curso...",
				sharePrivateErr: "Error del uso compartido. Inténtalo de nuevo o",
				sharePrivateOk: "Uso compartido actualizado correctamente, cargando...",
				sharePreviewAsUser: "Presentación preliminar",
				shareHeader1: "Tu aplicación está <strong>disponible públicamente</strong>.",
				shareHeader2: "Tu aplicación está disponible para los miembros de tu organización (se requiere inicio de sesión).",
				shareLinkHeader: "Comparte la aplicación con tu público",
				shareLinkOpen: "ABRIR",
				shareQ1Opt1: "¿Cómo puedo hacer que la aplicación siga siendo privada?",
				shareQ1Opt2: "¿Cómo puedo hacer que la aplicación siga siendo privada o que se comparta públicamente?",
				shareA1: "Utiliza %SHAREIMG% en la <a href='%LINK1%' target='_blank'>página de elementos de la aplicación</a>. Si deseas dejar de compartir el mapa Web, utiliza la <a href='%LINK2%' target='_blank'>página de elementos del mapa Web</a>.",
				shareA1bis: "Si también deseas dejar de compartir el servicio de entidades, utiliza la <a href='%LINK1%' target='_blank'>página de elementos del servicio de entidades</a>.",
				shareQ2: "¿Cómo puedo editar la aplicación más tarde?",
				shareQ2bis: "¿Cómo regreso a la interfaz de creación?",
				shareA2div1: "Guarda y vuelve a usar el siguiente vínculo %LINK1% o utiliza la <a href='%LINK2%' target='_blank'>página de elementos de la aplicación</a>.",
				shareA2div2: "Como propietario de la aplicación, cuando inicias sesión en ArcGIS.com, la aplicación incluye un botón para abrir el builder interactivo:",				
				shareQ3: "¿Dónde se almacenan los datos?",
				shareA3: "La configuración de la aplicación está almacenada en <a href='%LINK1%' target='_blank'>este elemento de mapa web</a> y en <a href='%LINK2%' target='_blank'>este elemento de aplicación web</a>. Si has usado la importación de Flickr, Picasa, Facebook o YouTube, tus imágenes y tus vídeos seguirán almacenados allí y no se habrán duplicado en ArcGIS Online.",
				learnMore: "Más información",
				close: "Cerrar"
			},
			settings: {
				header: "Ajustes de la aplicación",
				cancel: "Cancelar",
				apply: "Aplicar",
				tabError: "Comprueba todas las fichas por si existen errores"
			},
			settingsLayout: {
				title: "Diseño",
				explain: "¿Qué diseño deseas usar?",
				explainInit: "Puedes realizar cambios a través del cuadro de diálogo de configuración.",
				selected: "Diseño seleccionado",
				select: "Selecciona este diseño"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Elige un tema para la aplicación o define tus propios colores.",
				label: "Colores de fondo del encabezado y el panel lateral"
			},
			settingsHeader: {
				title: "Encabezado",
				explain: "Personaliza el logotipo del encabezado (el valor máximo es 250 x 50px).",
				logoEsri: "Logotipo de Esri",
				logoNone: "Sin logotipo",
				logoCustom: "Logotipo personalizado",
				logoCustomPlaceholder: "URL de imagen",
				logoCustomTargetPlaceholder: "Enlace click-through",
				logoSocialExplain: "Personaliza el enlace superior derecho del encabezado.",
				logoSocialText: "Texto",
				logoSocialLink: "Vínculo",
				logoSocialDisabled: "El administrador ha deshabilitado esta entidad"
			},
			mediaSelector: {
				lblMap: "Mapa",
				lblPicture: "Imagen",
				lblVideo: "Vídeo",
				lblExternal: "Página externa"
			},
			webMapSelector: {
				radioCurrentWebMap: "Mapa web actual",
				radioWebmapApp: "Uno de los otros mapas web que se utilizan en la aplicación",
				radioAnotherWebmap: "Otro mapa web",
				btnSelect: "Seleccionar",
				lblOr: "o",
				fieldEnterWebmapId: "Introducir un Id. de mapa web",
				btnConfigure: "Configurar el mapa"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Mi organización",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mi contenido",
					favoritesLabel: "Mis favoritos"
				},
				title: "Seleccionar mapa web",
				searchTitle: "Buscar",
				ok: "Aceptar",
				cancel: "Cancelar",
				placeholder: "Introducir término de búsqueda"
			}
		}
	})
);
