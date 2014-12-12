define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Mídia",
				lblSelect2: "Conteúdo",
				lblMap: "Mapa",
				lblImage: "Imagem",
				lblVideo: "Vídeo",
				lblExternal: "Página da web",
				disabled: "Este recurso foi desabilitado pelo Administrador",
				url: "Para inserir manualmente o endereço da web de uma imagem",
				userLookup: "Carregar álbuns",
				notImplemented: "Não implementado ainda.",
				noData: "Nenhum álbum público localizado"
			},
			imageSelector: {
				lblStep1: "Escolha o serviço",
				lblStep2: "Selecione sua mídia",
				lblStep3: "Configurar"
			},
			imageSelectorHome: {
				explain: "Carregue imagens da mídia social, <br /> ou diretamente de uma URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nome de usuário",
				signInMsg2: "Usuário não encontrado",
				loadingFailed: "Falha ao carregar"
			},
			imageSelectorFacebook: {
				leftHeader: "Usuário do Facebook",
				rightHeader: "Página do Facebook",
				pageExplain: "A página do Facebook é um produto/marca pública ou figura pública como<b>esrigis</b>. Você pode obter um nome de página após o primeiro \'/\' na URL da página.",
				pageInputLbl: "Nome da página",
				lookupMsgError: "Página não encontrada"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-mail ou Picasa/Google+ ID",
				signInMsg2: "Conta não encontrada",
				howToFind: "Como encontrar um ID de conta do Picasa ou Google+",
				howToFind2: "Copie dígitos entre o primeiro e segundo \'/\' de qualquer página do Picasa ou G+"
			},
			videoSelectorCommon: {
				check: "Verificar",
				notFound: "Vídeo não encontrado",
				found: "Vídeo encontrado",
				select: "Selecionar este vídeo"
			},
			videoSelectorHome: {
				other: "Outro"
			},
			videoSelectorYoutube: {
				url: "URL de um vídeo do Youtube",
				pageInputLbl: "Nome de usuário",
				lookupMsgError: "Usuário não encontrado",
				howToFind: "Como encontrar um nome de usuário do YouTube",
				howToFind2: "O nome de usuário é exibido abaixo dos vídeos",
				found: "Localizado",
				noData: "Nenhum vídeo público localizado"
			},
			videoSelectorVimeo: {
				url: "URL de um vídeo do Vimeo"
			},
			videoSelectorOther: {
				explain1: "O aplicativo não pode reproduzir vídeos pesados (ex: avi,mpeg), mas ele pode reproduzir arquivos de vídeo hospedados que têm botões de reprodução embutidos (ex: YouTube ou Vimeo).",
				explain2: "A maioria dos serviços de hospedagem de vídeo online oferecem esste recurso, você tem que encontrar a opção para embutir o vídeo, copiar o código fornecido e utilizar o %WEBPAGE%.",
				explain3: "Alternativamente, se desejar você mesmo hospedar o vídeo, é possível criar uma página HTML que utiliza um botão de reprodução de vídeo como %EXAMPLE%, hospedar esta página e também utilizar o %WEBPAGE%.",
				webpage: "Recurso da página da web"
			},
			webpageSelectorHome: {
				lblUrl: "URL de Página da Web",
				lblEmbed: "Código embutido",
				lblOR: "OU",
				lblError1: "Erro, limpe um dos dois campos de entrada.",
				lblError2: "O código embutido pode conter somente um %IFRAMETAG%",
				configure: "Configurar"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Uma URL de imagem deve iniciar com http:// e terminar com .jpg ou .png",
				lblURLError: "Esta imagem parece não ser válida. Especifique um link direto para um arquivo de imagem (sua URL geralmente terminará com .jpg ou .png). Links para uma página da web que contêm uma imagem não funcionarão.",
				lblURLCheck: "Verificando imagem...",
				lblLabel: "Legenda da Imagem",
				lblLabel1: "Legenda",
				lblLabel2: "Pairar texto",
				lblLabel3: "Nenhum",
				lblLabelPH: "Inserir algum texto...",
				lblMaximize: "Incluir um botão de maximizar no canto da imagem",
				lblMaximizeHelp: "Recomendado somente para fotos de alta qualidade",
				lblPosition: "Posição",
				lblPosition1: "Centralizar",
				lblPosition2: "Preencher",
				lblPosition3: "Ajustar",
				lblPosition4: "Esticar",
				lblPosition5: "Personalizar",
				tooltipDimension: "O valor pode ser especificado em \'px\' ou \'%\'",
				tooltipDimension2: "O valor tem que ser especificado em \'px\'",
				lblPosition2Explain: "(pode recortar)",
				lblPosition3Explain: "(não cortará)",
				lblPosition3Explain2: "(a largura sempre se ajustará no painel)",
				lblPosition4Explain: "(pode distorcer)",
				unloadLbl: "Descarregar quando o leitor navegar",
				unloadHelp: "Se a Página da Web tiver mídia de áudio ou vídeo, mantenha esta opção marcada para impedir que o conteúdo seja reproduzido quando o leitor navegar. Desmarque-a, por exemplo, para manter a reprodução da trilha sonora conforme o leitor avançar pelo diário.<br /> Se a Página da Web for um aplicativo, desmarque esta opção para que o aplicativo não recarregue se o leitor retornar para ele."
			},
			editorActionGeocode: {
				lblTitle: "Localizar um endereço ou lugar",
				mapMarkerExplain: "Usuários visualizarão um marcador de mapa ao clicar no link"
			},
			editorActionMedia: {
				lblTitle: "Altere o conteúdo do Nível Principal"
			},
			editorInlineMedia: {
				lblTitle: "Insira uma imagem, vídeo ou página da web"
			}
		}
	})
);
