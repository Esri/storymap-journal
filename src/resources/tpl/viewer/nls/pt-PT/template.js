define(
	 ({
		viewer: {
			common: {
				close: "Fechar"
			},
			loading: {
				step1: "A carregar a história",
				step2: "A carregar dados",
				step3: "Inicializando",
				loadBuilder: "Alternando para builder",
				long: "O Jornal de Mapa está a inicializar",
				long2: "Obrigado por aguardar",
				failButton: "Recarregar a história"
			},
			signin: {
				title: "É necessária autenticação",
				explainViewer: "Por favor inicie sessão com uma conta em %PORTAL_LINK% para aceder à história.",
				explainBuilder: "Por favor inicie sessão com uma conta em %PORTAL_LINK% para configurar a história."
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				invalidConfig: "Configuração inválida",
				invalidConfigNoApp: "O identificador da Aplicação de Cartografia Web não se encontra especificado em index.html",
				invalidConfigNoAppDev: "Não foi especificado nenhum identificador de Aplicação de Mapeamento Web nos parâmetros URL (?appid=). No modo de desenvolvimento, a configuração appid em index.html é ignorada.",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "O %TPL_NAME% não existe ou encontra-se inacessível.",
				appLoadingFail: "Aolgo correu mal, o %TPL_NAME% não foi carregado corretamente.",
				notConfiguredDesktop: "A história ainda não se encontra configurada.",
				notConfiguredMobile: "O construtor %TPL_NAME% não é suportado neste tamanho de exibição. Se possível, redimensione o seu navegador para aceder ao construtor ou construa por favor a sua história num dispositivo com um écran maior.",
				notConfiguredMobile2: "Por favor rode o seu dispositivo para orientação paisagem para usar o construtor %TPL_NAME%.",
				notAuthorized: "Não tem autorização para aceder a esta história",
				notAuthorizedBuilder: "Não está autorizado a usar o construtor %TPL_NAME%.",
				noBuilderIE: "O construtor não é suportado em versões de Internet Explorer anteriores a %VERSION%. %UPGRADE%",
				noViewerIE: "Esta história não é suportada pelo Internet Explorer abaixo da versão %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Por favor atualize o seu browser</a>.",
				mapLoadingFail: "Algo correu mal, o mapa não foi carregado correctamente.",
				signOut: "Terminar sessão"
			},
			mobileView: {
				tapForDetails: "Toque para aceder a detalhes",
				clickForDetails: "Obtenha mais informações",
				swipeToExplore: "Deslize para explorar.",
				tapForMap: "Toque para regressar ao mapa",
				clickForMap: "VOLTAR AO MAPA"
			},
			floatLayout: {
				scroll: "Scroll"
			},
			sideLayout: {
				scroll: "Faça scroll para ver mais!"
			},
			mainStage: {
				back: "Retroceder"
			},
			headerFromCommon: {
				storymapsText: "Um mapa de história",
				builderButton: "Editar",
				facebookTooltip: "Partilhar no Facebook",
				twitterTooltip: "Partilhar no Twitter",
				bitlyTooltip: "Obter uma ligação curta",
				templateTitle: "Definir título do modelo",
				templateSubtitle: "Definir subtítulo do modelo",
				share: "Partilhar",
				checking: "A verificar o conteúdo da sua história",
				fix: "Corrija problemas na sua história",
				noerrors: "Não foram detetados problemas",
				tooltipAutoplayDisabled: "Isto não está disponível no modo de reprodução automática",
				notshared: "História não partilhada"
			},
			overviewFromCommon: {
				title: "Vista Geral do Mapa"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Incorporar em página web",
				embedExplain: "Utilize o seguinte código HTML para incorporar o jornal numa página web.",
				size: "Tamanho (largura/altura):",
				autoplayLabel: "Modo reprodução automática",
				autoplayExplain1: "Modo reprodução automática irá avançar através da sua história em intervalos regulares. Isto é ideal num monitor de quiosque ou exibição pública, mas esteja ciente de que noutras situações pode tornar a história mais difícil de ler. Este elemento não é suportado em écrans pequenos.",
				autoplayExplain2: "Quando este modo está activo existem controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
				linksupdated: "Links actualizados!"
			}
        }
    })
);