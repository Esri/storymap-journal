﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mapa",
				lblLocation: "Ubicación",
				lblContent: "Contenido",
				lblPopup: "Menú emergente",
				lblControls: "Extras",
				lblOverview: "Mapa de vista general",
				lblLegend: "Leyenda",
				loadingTitle: "Cargando título",
				entry: "Entrada",
				entries: "Entradas",
				section: "Sección",
				sections: "Secciones",
				and: "y",
				action: "Acción en sección",
				actions: "Acción en secciones",
				originalWebmap: "Mapa utilizado para publicar %TPL_NAME%",
				browseMaps: "Selecciona un mapa",
				createMap: "Crea un mapa",
				current: "Mapa actual",
				select: "Selecciona o crea un mapa",
				newMap: "Mapa recién seleccionado",
				newCreatedMap: "Mapa recién creado",
				webmapDefault: "Mapa predeterminado",
				customCfg: "Configuración personalizada",
				tooltipLocation: "Define la ubicación que mostrará este mapa.",
				tooltipContent: "Define las capas visibles.",
				tooltipPopup: "Elige una ventana emergente que se abrirá cuando se muestre este mapa.",
				tooltipOverview: "Muestra un pequeño mapa de vista general junto con el mapa principal.",
				tooltipLegend: "Muestra la leyenda en el mapa, algo que resulta útil cuando el mapa tiene muchos símbolos y capas.",
				mapCfgInvite: "Usa estos controles para configurar el mapa",
				lblLocationAlt: "Heredado del primer mapa",
				tooltipLocationAlt: "La ubicación de este mapa está sincronizada con el primer mapa de la serie. Para cambiar este comportamiento en tu serie, entra en Configuración > Opciones del mapa."
			},
			configure: {
				btnReset: "Reiniciar",
				btnCancel: "Cancelar",
				tocTitle: "Contenido del mapa",
				tocExplain: "Selecciona las capas que se mostrarán.",
				tocNoData: "No se puede configurar ninguna capa.",
				tocSave: "Guardar contenido del mapa",
				extentTitle: "Ubicación del mapa",
				extentExplain: "Desplázate y haz zoom por el mapa para definir cómo lo verán los lectores.",
				extentSave: "Guardar ubicación del mapa",
				popupTitle: "Ventana emergente del mapa",
				popupExplain: "Haz clic en una entidad para abrir la ventana emergente que deseas mostrar.",
				popupSave: "Guardar la configuración de la ventana emergente",
				hintNavigation: "La navegación del mapa se ha deshabilitado."
			},
			editor: {
				loading: "Espera mientras se carga el editor de mapa...",
				newTitle: "Crear mapa nuevo",
				editTitle: "Editar mapa",
				titleLbl: "Título",
				titlePh: "Título de mapa...",
				folderLbl: "El mapa se creará en la misma carpeta que la historia.",
				creating: "Creando el mapa",
				saving: "Guardando el mapa",
				success: "Mapa guardado",
				successCreate: "Mapa creado",
				cancelTitle: "¿Quieres descartar los cambios no guardados?",
				errorDuplicate: "Ya tienes un mapa con ese título",
				errorCreate: "No se puede crear el mapa. Vuelve a intentarlo.",
				errorSave: "No se puede guardar el mapa. Vuelve a intentarlo.",
				notavailable1: "Lo sentimos, debido a una limitación técnica, la creación o edición de mapas no es compatible en Firefox. Si lo prefieres, puedes crear tu historia en un navegador web distinto o usar la siguiente solución alternativa.",
				notavailable2: "Lo sentimos, la creación o edición de mapas no es compatible porque la aplicación de story map no está alojada en %PRODUCT%. Contacta con tu administrador de ArcGIS para obtener más información.",
				notavailable3: "Lo sentimos, la creación o edición de mapas no es compatible con esta versión de Portal for ArcGIS (requiere 10.4 o posterior). Contacta con tu administrador de ArcGIS para obtener más información.",
				notavailable4: "Puedes crear un mapa usando %MV% y después volver aquí para agregarlo a tu historia.",
				notavailable5: "Puedes editar el mapa usando %MV% y después volver aquí y %apply% para ver tus cambios.",
				notavailable6: "visor de mapas",
				notavailable7: "vuelve a cargar el mapa"
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
				title: "Selecciona un mapa",
				searchTitle: "Buscar",
				ok: "Aceptar",
				cancel: "Cancelar",
				placeholder: "Introduce un término de búsqueda o Id. del mapa web..."
			}
		}
	})
);
