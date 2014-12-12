define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medios",
				lblSelect2: "Contenido",
				lblMap: "Mapa",
				lblImage: "Imagen",
				lblVideo: "Vídeo",
				lblExternal: "Página web",
				disabled: "El administrador ha deshabilitado esta entidad",
				url: "Para introducir manualmente la dirección web de una imagen",
				userLookup: "Cargar álbumes",
				notImplemented: "No se ha implementado aún.",
				noData: "No se ha encontrado ningún álbum público"
			},
			imageSelector: {
				lblStep1: "Elegir el servicio",
				lblStep2: "Seleccionar un medio",
				lblStep3: "Configurar"
			},
			imageSelectorHome: {
				explain: "Cargar imágenes de redes sociales <br /> o directamente de una URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nombre de usuario",
				signInMsg2: "Usuario no encontrado",
				loadingFailed: "Error al cargar"
			},
			imageSelectorFacebook: {
				leftHeader: "Usuario de Facebook",
				rightHeader: "Página de Facebook",
				pageExplain: "Una página de Facebook es una marca/producto público o famoso como <b>esrigis</b>. Puedes obtener el nombre de la página después de la  primera \'/\' de la URL de la página.",
				pageInputLbl: "Nombre de la página",
				lookupMsgError: "No se encontró la página"
			},
			imageSelectorPicasa: {
				userInputLbl: "Dirección de correo electrónico o Id. de Picasa/Google+",
				signInMsg2: "Cuenta no encontrada",
				howToFind: "Cómo encontrar el ID de una cuenta Picasa or Google+",
				howToFind2: "Copia los dígitos que hay entre la primera y la segunda \'/\' de cualquier página de Picasa o G+"
			},
			videoSelectorCommon: {
				check: "Comprobar",
				notFound: "Vídeo no encontrado",
				found: "Vídeo encontrado",
				select: "Seleccionar este vídeo"
			},
			videoSelectorHome: {
				other: "Otro"
			},
			videoSelectorYoutube: {
				url: "URL de un vídeo de Youtube",
				pageInputLbl: "Nombre de usuario",
				lookupMsgError: "Usuario no encontrado",
				howToFind: "Cómo encontrar un nombre de usuario de YouTube",
				howToFind2: "El nombre de usuario se muestra bajo los vídeos",
				found: "Encontrado",
				noData: "No se han encontrado vídeos públicos"
			},
			videoSelectorVimeo: {
				url: "URL de un vídeo de Vimeo"
			},
			videoSelectorOther: {
				explain1: "La aplicación no puede reproducir vídeos sin procesar (por ejemplo, avi, mpeg), pero puede reproducir archivos de vídeo alojados que tengan reproductores integrados (por ejemplo, YouTube o Vimeo).",
				explain2: "La mayoría de los servicios de alojamiento de vídeos en línea ofrecen esta función, tienes que encontrar la opción de integrar el vídeo, copiar el código que se indica y utilizar la %WEBPAGE%.",
				explain3: "O bien, si deseas alojar el vídeo tú mismo, puedes crear una página HTML que utilice un reproductor de vídeo como %EXAMPLE%, alojar esa página y utilizar también la %WEBPAGE%.",
				webpage: "Entidad de página web"
			},
			webpageSelectorHome: {
				lblUrl: "URL de página web",
				lblEmbed: "Integrar código",
				lblOR: "O BIEN",
				lblError1: "Error, borre uno de los campos de entrada.",
				lblError2: "El código integrado solo puede contener un %IFRAMETAG%",
				configure: "Configurar"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "La URL de una imagen debe empezar por http:// y debe terminar por .jpg o .png",
				lblURLError: "Esta imagen no parece ser válida. Especifica un vínculo directo a un archivo de imagen (normalmente, la URL termina en .jpg o .png). Los vínculos a una página web que contenga una imagen no funcionarán.",
				lblURLCheck: "Comprobando imagen...",
				lblLabel: "Título de imagen",
				lblLabel1: "Leyenda",
				lblLabel2: "Texto de activación",
				lblLabel3: "Ninguno",
				lblLabelPH: "Introducir texto...",
				lblMaximize: "Incluir un botón de maximizar en la esquina de la imagen",
				lblMaximizeHelp: "Solo se recomienda para fotografías de alta calidad",
				lblPosition: "Posición",
				lblPosition1: "Centro",
				lblPosition2: "Relleno",
				lblPosition3: "Ajustar",
				lblPosition4: "Estirar",
				lblPosition5: "Personalizada",
				tooltipDimension: "El valor se puede especificar en \'px\' o en \'%\'",
				tooltipDimension2: "El valor se debe especificar en \'px\'",
				lblPosition2Explain: "(puede recortarse)",
				lblPosition3Explain: "(no se recortará)",
				lblPosition3Explain2: "(el ancho siempre se ajusta al panel)",
				lblPosition4Explain: "(puede distorsionarse)",
				unloadLbl: "Detener cuando el lector abandone la sección",
				unloadHelp: "Si la página web incluye contenido multimedia de audio o vídeo, deja marcada esta opción para evitar que el contenido se reproduzca cuando el lector navegue afuera. Desactiva la opción, por ejemplo, para que la pista de audio se siga reproduciendo a medida que el lector avanza por la historia.<br />Si la página web es una aplicación, desactiva la opción para que la aplicación no se vuelva a cargar si el lector regresa a ella."
			},
			editorActionGeocode: {
				lblTitle: "Buscar una dirección o un lugar",
				mapMarkerExplain: "El usuario verá un marcador de mapa al hacer clic en el vínculo"
			},
			editorActionMedia: {
				lblTitle: "Cambiar el contenido del escenario principal"
			},
			editorInlineMedia: {
				lblTitle: "Insertar una imagen, un vídeo o una página web"
			}
		}
	})
);
