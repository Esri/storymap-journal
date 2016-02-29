define(
	 ({
		commonCore: {
			common: {
				add: "Agregar",
				edit: "Editar",
				save: "Guardar",
				next: "Siguiente",
				cancel: "Cancelar",
				back: "Atrás",
				apply: "Aplicar",
				close: "Cerrar",
				open: "Abrir",
				start: "Inicio",
				loading: "Cargando",
				disabledAdmin: "El administrador ha deshabilitado esta entidad",
				width: "Ancho",
				height: "Altura",
				create: "Crear",
				yes: "Sí",
				no: "No",
				mystories: "Mis historias"
			},
			inlineFieldEdit: {
				editMe: "¡Edítame!"
			},
			builderPanel: {
				panelHeader: "Builder de %TPL_NAME%",
				buttonSaving: "Guardando",
				buttonSaved: "Guardado",
				buttonShare: "Compartir",
				buttonSettings: "Configuración",
				buttonHelp: "Ayuda",
				buttonPreview: "Ver historia",
				tooltipFirstSave: "Esto no está disponible hasta que guardes.",
				tooltipNotShared: "Esto no está disponible hasta que compartas.",
				tooltipNotShared2: "Tu historia no se ha compartido, solo tú puedes acceder a ella.",
				noPendingChange: "Sin cambios pendientes",
				unSavedChangePlural: "Cambios pendientes",
				closeWithPendingChange: "¿Estás seguro de que deseas confirmar esta acción? Los cambios se perderán.",
				saveError: "Error al guardar. Inténtalo de nuevo",
				status1: "La historia se ha compartido pero tiene problemas",
				status2: "La historia no se ha compartido pero tiene problemas",
				status3: "La historia es pública",
				status4: "La historia se ha compartido con la organización",
				status5: "La historia es privada",
				status6: "La historia no se ha guardado aún",
				checking: "Comprobando",
				fix: "Solucionar"
			},
			saveError: {
				title: "Error al guardar la historia",
				err1Div1: "La historia no se puede guardar porque ya tienes otro elemento con el mismo nombre.",
				err1Div2: "Modifica el título de tu historia y, a continuación, guárdala.",
				btnOk: "Editar título de la historia"
			},
			saveErrorSocial: {
				title: "Actualización de uso compartido de redes sociales",
				panel1: "La apariencia de tu historia en las redes sociales ha mejorado, pero el título del elemento de tu aplicación web en ArcGIS no coincide con el título de tu historia.",
				panel1tooltip: "Al definir un título, un resumen y una imagen de la vista en miniatura, tu historia tendrá este aspecto:",
				panel2:	"Indica el título que deseas utilizar en las redes sociales:",
				panel2q1: "Título de la historia (recomendado)",
				panel2q1tooltip: "Si eliges esta opción, el título de tu elemento se modificará para que coincida con el título de la historia. Todos los cambios que se realicen en el builder se sincronizarán.",
				panel2q2: "Título del elemento",
				panel3: "Para mejorar aún más la apariencia de tu historia en las redes sociales, utiliza ${MYSTORIES} para agregar un resumen y una imagen de la vista en miniatura.",
				panel4: "No volver a advertirme sobre esta historia"
			},
			share: {
				shareTitle: "Compartir tu historia",
				preview: "Vista previa",
				viewlive: "Ver historia",
				btnPrivate: "Privado",
				btnPrivateTooltip: "Solo tú podrás ver la historia",
				btnOrg: "Organización",
				btnOrgTooltip: "Solo los miembros de tu organización podrán ver la historia",
				btnPublic: "Público",
				btnPublicTooltip: "Todos podrán ver la historia",
				loadingMessage: "Comprobando problemas en la historia",
				viewToggle1: "Mostrar el contenido de la historia",
				viewToggle2: "Cerrar el contenido de la historia",
				socialize: "Socializar",
				statusPrivate: "Tu historia es privada, solo tú podrás verla.",
				statusError: "Hay problemas en el contenido de tu historia que los lectores notarán. Puedes identificar y solucionar estos problemas abajo.",
				statusNoErrPrivate: "Comparte tu historia una vez que esté lista",
				mystoriesinvite: "Administrar todas tus historias",
				notavailable1: "Lo sentimos, no es posible compartir tu historia desde Builder ya que esta aplicación no está alojada en %PRODUCT%.",
				notavailable2: "Lo sentimos, no es posible compartir tu historia desde Builder en esta versión de Portal for ArcGIS (requiere la versión 10.4 o posterior).",
				notavailable3: "Puedes compartir esta historia desde %LINK%.",
				notavailable4: "Mis historias",
				notavailable5: "su página de elementos",
				notavailable6: "Lo sentimos, esta entidad no es totalmente compatible en modo de desarrollo. Según tu escenario de implementación, es posible que la entidad sea compatible al implementarla.",
				notavailable7: "Asegúrate de visitar %MYCONTENT% para confirmar que los mapas y capas empleados en tu historia se han compartido también.",
				notavailable8: "Mi contenido",
				mystoriesinvite2: "Para mejorar la apariencia de tu historia en las redes sociales, utiliza ${MYSTORIES} para agregar un resumen y una imagen de la vista en miniatura."
			},
			settings: {
				header: "Configuración",
				tabError: "Comprueba todas las pestañas para ver si hay errores"
			},
			settingsLayout: {
				title: "Diseño",
				explain: "¿Qué diseño deseas usar?",
				explainInit: "Puedes cambiar el diseño en cualquier momento desde el cuadro de diálogo de configuración.",
				viewExample: "Ver un ejemplo en directo"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Encabezado",
				logoEsri: "Logotipo de Esri",
				logoNone: "Sin logotipo",
				logoCustom: "Logotipo personalizado",
				logoCustomPlaceholder: "URL (máx. 250 x 50 píxeles)",
				logoCustomTargetPlaceholder: "Enlace click-through",
				logoSocialExplain: "Personaliza el vínculo del encabezado.",
				logoSocialText: "Texto",
				logoSocialLink: "Vínculo",
				lblSmallHeader: "Usar encabezado compacto (sin subtítulo)"
			},
			header: {
				title: "Editar el título de tu %TPL_NAME%",
				subtitle: "Editar el subtítulo de tu %TPL_NAME%"
			}
		}
	})
);
