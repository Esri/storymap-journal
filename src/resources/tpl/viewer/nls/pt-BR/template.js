define(
	 ({
		viewer: {
			common: {
				close: "Fechar"
			},
			loading: {
				step1: "Carregando história",
				step2: "Carregando dados",
				step3: "Inicializando",
				loadBuilder: "Trocando para construtor",
				long: "O diário do mapa está inicializando",
				long2: "Obrigado por aguardar",
				failButton: "Recarregar a história"
			},
			signin: {
				title: "uma autenticação é exigida",
				explainViewer: "Entre com uma conta no %PORTAL_LINK% para acessar a história.",
				explainBuilder: "Entre com uma conta no %PORTAL_LINK% para configurar a história."
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				invalidConfig: "Configuração inválida",
				invalidConfigNoApp: "Identificador do Aplicativo de Mapeamento da Web não especificado no index.html.",
				invalidConfigNoAppDev: "Nenhum identificador do Aplicativo de Mapeamento da Web está especificado em parâmetros da URL (?appid=). Em modo de desenvolvimento, a configuração de appid em index.html é ignorada.",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "O %TPL_NAME% não existe ou está inacessível.",
				appLoadingFail: "Ocorreu algo errado, o %TPL_NAME% não carregou corretamente.",
				notConfiguredDesktop: "A história ainda não está configurada.",
				notConfiguredMobile: "O construtor %TPL_NAME% não é suportado neste tamanho de visualização. Se possível, redimensione seu navegador para acessar o construtor ou construa sua história em um dispositivo com uma tela maior.",
				notConfiguredMobile2: "Gire seu dispositivo para orientação de paisagem para utilizar o construtor %TPL_NAME%.",
				notAuthorized: "Você não tem autorização para acessar esta história",
				notAuthorizedBuilder: "Você não está autorizado para utilizar o construtor %TPL_NAME%.",
				noBuilderIE: "O construtor não é suportado no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
				noViewerIE: "Esta história não é suportada no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Atualize seu navegador</a>.",
				mapLoadingFail: "Algo deu errado, o mapa não carregou corretamente.",
				signOut: "Sair"
			},
			mobileView: {
				tapForDetails: "Toque poara detalhes",
				clickForDetails: "Mais informações",
				swipeToExplore: "Oscile para explorar",
				tapForMap: "Toque para voltar ao Mapa",
				clickForMap: "VOLTAR AO MAPA"
			},
			floatLayout: {
				scroll: "Rolar"
			},
			sideLayout: {
				scroll: "Role para baixo para mais!"
			},
			mainStage: {
				back: "Voltar"
			},
			headerFromCommon: {
				storymapsText: "Um mapa histórico",
				builderButton: "Editar",
				facebookTooltip: "Compartilhar no Facebook",
				twitterTooltip: "Compartilhar no Twitter",
				bitlyTooltip: "Obter um link curto",
				templateTitle: "Configurar título do modelo",
				templateSubtitle: "Configurar subtítulo do modelo",
				share: "Compartilhar",
				checking: "Verificando conteúdo da sua história",
				fix: "Corrigir problemas em sua história",
				noerrors: "Nenhum problema detectado",
				tooltipAutoplayDisabled: "Isto não está disponível no modo de reprodução automática",
				notshared: "História não compartilhada"
			},
			overviewFromCommon: {
				title: "Mapa de Visão Geral"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Anexar na página da web",
				embedExplain: "Utilize o seguinte código HTML para anexar o diário em uma página da web.",
				size: "Tamanho (largura/altura):",
				autoplayLabel: "Modo de reprodução automática",
				autoplayExplain1: "O modo de reprodução automática avançará por sua história em um intervalo regular. Isto é ideal em um monitor de visualização pública ou de quiosque, mas esteja ciente que em outras situações ele pode tornar a história mais difícil de ler. Este recurso não é suportado em visualizações pequenas.",
				autoplayExplain2: "Quando este modo está ativo há controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
				linksupdated: "Links atualizados!"
			}
        }
    })
);