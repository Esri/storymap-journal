define(
	 ({
		viewer: {
			common: {
				close: "Cerrar"
			},
			loading: {
				step1: "Cargando historia",
				step2: "Cargando datos",
				step3: "Inicializando",
				loadBuilder: "Cambiando a Builder",
				long: "Map Journal se está inicializando",
				long2: "Gracias por esperar",
				failButton: "Volver a cargar la historia"
			},
			signin: {
				title: "Se requiere autenticación",
				explainViewer: "Inicia sesión con una cuenta en %PORTAL_LINK% para acceder a la historia.",
				explainBuilder: "Inicia sesión con una cuenta en %PORTAL_LINK% para configurar la historia."
			},
			errors: {
				boxTitle: "Se ha producido un error",
				invalidConfig: "Configuración no válida",
				invalidConfigNoApp: "No se ha especificado el identificador de la aplicación en index.html.",
				invalidConfigNoAppDev: "No se ha especificado ningún identificador de la aplicación de representación cartográfica web en los parámetros de la dirección URL (?appid=). En modo de desarrollo, la configuración de appid en index.html se ignora.",
				unspecifiedConfigOwner: "El propietario autorizado no se ha configurado.",
				invalidConfigOwner: "El propietario de la historia no está autorizado.",
				createMap: "No se puede crear el mapa",
				invalidApp: "No se puede acceder a %TPL_NAME% o no existe.",
				appLoadingFail: "Se ha producido un error, %TPL_NAME% no se cargó correctamente.",
				notConfiguredDesktop: "La historia no se ha configurado todavía.",
				notConfiguredMobile: "El builder de %TPL_NAME% no es compatible con este tamaño de pantalla. Si es posible, cambia el tamaño de tu navegador para acceder al builder o crea tu historia en un dispositivo que tenga una pantalla más grande.",
				notConfiguredMobile2: "Rota el dispositivo a horizontal para utilizar el builder de %TPL_NAME%.",
				notAuthorized: "No tienes autorización para acceder a esta historia",
				notAuthorizedBuilder: "No estás autorizado para utilizar el builder de %TPL_NAME%.",
				noBuilderIE: "El builder no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
				noViewerIE: "Esta historia no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Actualiza tu navegador</a>.",
				mapLoadingFail: "Se ha producido un error, el mapa no se cargó correctamente.",
				signOut: "Cerrar sesión"
			},
			mobileView: {
				tapForDetails: "Tocar para ver detalles",
				clickForDetails: "Más información",
				swipeToExplore: "Barrer para explorar",
				tapForMap: "Tocar para volver al mapa",
				clickForMap: "VOLVER AL MAPA"
			},
			floatLayout: {
				scroll: "Desplazar"
			},
			sideLayout: {
				scroll: "Desplázate hacia abajo para obtener más información"
			},
			mainStage: {
				back: "Atrás"
			},
			headerFromCommon: {
				storymapsText: "Un mapa de historias",
				builderButton: "Editar",
				facebookTooltip: "Compartir en Facebook",
				twitterTooltip: "Compartir en Twitter",
				bitlyTooltip: "Obtén un vínculo corto",
				templateTitle: "Establecer título de plantilla",
				templateSubtitle: "Establecer subtítulo de plantilla",
				share: "Compartir",
				checking: "Comprobando el contenido de tu historia",
				fix: "Soluciona los problemas de tu historia",
				noerrors: "No se ha detectado ningún problema",
				tooltipAutoplayDisabled: "Esto no está disponible en el modo de reproducción automática",
				notshared: "No se ha compartido la historia"
			},
			overviewFromCommon: {
				title: "Mapa de vista general"
			},
			legendFromCommon: {
				title: "Leyenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Integrar en página web",
				embedExplain: "Usa el siguiente código HTML para integrar el diario en una página web.",
				size: "Tamaño (ancho/alto):",
				autoplayLabel: "Modo de reproducción automática",
				autoplayExplain1: "El modo de reproducción automática avanzará por la historia a intervalos regulares. Esto es idóneo para monitores de quioscos o de visualización pública, pero debes tener en cuenta que, en otras situaciones, puede que dificulte la lectura de la historia. Esta función no es compatible con pantallas pequeñas.",
				autoplayExplain2: "Cuando este modo está activado, hay disponibles controles para reproducir o detener la historia y para ajustar la velocidad de navegación.",
				linksupdated: "Vínculos actualizados"
			}
        }
    })
);