define(
	 ({
		builder: {
			layouts: {
				mainStage: "Ecrã Principal",
				sideTitle: "Painel Lateral",
				sideDescr: "Um layout para uma história com texto intensivo que consegue combinar as suas fotos, vídeos e mapas numa mensagem clara e objetiva.",
				floatTitle: "Painel Flutuante",
				floatDescr: "Um layout que coloca a sua cartografia em destaque e apresenta um pequeno painel de texto transparente para ajudar a contar a história."
			},
			common: {
				lblStatus1: "Publicado",
				lblStatus2: "Rascunho",
				lblStatus3: "Escondido"
			},
			settingsLayoutOptions: {
				title: "Opções de layout",
				cfgLeft: "Esquerda",
				cfgRight: "Direita",
				cfgSmall: "Pequeno",
				cfgMedium: "Médio",
				cfgLarge: "Grande",
				socialLinksLabel: "Exibir ligações para partilha no fundo de cada secção.",
				socialLinksDescr: "Isto permite aos leitores referenciar e promover secções específicas do seu %TPL_NAME%. Por exemplo, se utilizar o ícone de partilha de uma secção, os leitores irão ser dirigidos para essa secção %TPL_NAME% específica, e não para o início da sua história. Os seus leitores podem utilizar a ligação para redes sociais na secção do título para promover o seu %TPL_NAME% (separador do cabeçalho) completo e dirigi-los para o início do %TPL_NAME%."
			},
			settingsLayoutFonts: {
				title: "Fontes",
				defaultLbl: "Padrão",
				sectionTitleLbl: "Título da secção",
				sectionContentLbl: "Conteúdo da secção"
			},
			initPopup: {
				title: "Bem-vindo a"
			},
			addEditPopup: {
				disabled: "Adicionar Secção encontra-se desativado porque o número máximo de secções permitidas foi atingido.",
				titleAdd: "Adicionar Secção",
				titleAddHome: "Adicionar Secção Inicial",
				titleEdit: "Editar Secção",
				step: "Passo",
				stepMainStageExplain: "Conteúdo do Ecrã Principal",
				stepPanelExplain: "Conteúdo",
				stepMainStageNextTooltip: "Introduza o título da secção e selecione o conteúdo do Ecrã Principal",
				stepMainStageNextTooltip2: "Selecione o conteúdo da Seção Principal",
				step2NextTooltip: "Introduza o título da secção e conteúdo %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir para o próximo passo",
				stepNextTooltipAdd: "para adicionar a secção",
				firstAddExplain: "Esta primeira secção é a sua Secção Inicial. Pense nela como a capa da sua história. O título que acabou de definir será exibido em letras grandes.",
				firstAddLeanMore: "Saber Mais",
				titlePlaceholder: "Título da secção..."
			},
			addEditViewText: {
				editorPlaceholder: "Adicione texto, ligações epequenos gráficos aqui.",
				editorActionsTitle: "Ações do Ecrã Principal",
				editorActionsHelpDescr: "Utilize estes controlos para criar ligações que irão alterar o ecrã principal. Por exemplo, quando o leitor clica numa ligação, poderá querer ampliar o mapa para uma localização específica, exibir outro mapa web ou exibir uma Imagem.",
				mainStageDisabled: "As ações da Seção Principal estão desativadas quando o editor está maximizado."
			},
			organizePopup: {
				title: "Organizar",
				lblHeader: "Arraste e solte secções para organizar o seu conteúdo.",
				lblColTitle: "Título",
				lblColPubDate: "Data de publicação",
				lblColStatus: "Estado",
				checkDisplayReverse: "Exibir secções em ordem inversa.",
				btnApplyWarning: "Confirmar a supressão de %NB% secções",
				deleteTooltip: "Eliminar",
				firstSectionExplain: "(A secção inicial não pode ser movida)",
				exportMainStage: "Conteúdo da Seção Principal",
				exportPanel: "Conteúdo do Painel",
				exportActions: "Ações da Seção Principal"
			},
			exportData: {
				btn: "Exportar Conteúdo",
				tooltip: "Exportar o seu conteúdo permite-lhe visualizar e criar uma cópia de segurança do seu Jornal, caso o elimine acidentalmente. Simplesmente copie, cole, o conteúdo da página para qualquer processador de texto."
			},
			help: {
				lblHelp: "Ajuda",
				lblAdd: "Adicionar Secção",
				lblSettings: "Configurações",
				lblOrga: "Organizar conteúdo",
				lblEdit: "Edições",
				lblPublish: "Partilhar",
				lblTips: "Dicas",
				lblMore: "Quer mais?",
				lblLink: "Visite o site web Story Maps.",
				content1Div1: "Pode integrar vários estilos ao construir a sua história. O <strong>%LAYOUT_TITLE%</strong> contém tipicamente o seu texto, imagens e vídeo, enquanto os seus mapas tendem a estar no <strong>Ecrã Principal</strong>. No entanto, o %TPL_NAME% permite-lhe também apresentar imagens, gráficos e vídeos no ecrã principal.",
				content1Div2: "Adicionar secções permite-lhe verdadeiramente personalizar a sua experiência de storytelling. À medida que os leitores fazem scroll para baixo no seu texto %LAYOUT_TITLE%, um mapa no Ecrã Principal permite mover ou ampliar para pontos importantes, ou novos mapas e imagens podem ser automaticamente carregados para enfatizar a sua mensagem.",
				content2Div1: "Esta caixa de diálogo de Definições é onde pode alterar o aspeto do seu %TPL_NAME%. Pode alterar o layout, escolher um esquema de cores diferente, alterar o tipo de letra, etc.",
				content2Div2: "Pode ainda substituir o logo da Esri pelo seu próprio logo para espelhar a sua marca. Pode também especificar o site web que será iniciado se os leitores clicarem no seu logo, para que possam obter mais informações.",
				content3Div1: "O seu conteúdo é organizado em secções. Pode ter quantas secções pretender (pense nelas como mini-capítulos). O fluxo desses capítulos é importante; em Organizar, pode reordenar ou eliminar secções à sua vontade.",
				content4Div1: "Encontrou um erro ou pretende alterar o seu material? Sem problema. Procure o ícone de edição em toda a sua aplicação para efetuar alterações ao seu conteúdo. Utilizará as funções de edição muitas vezes à medida que desenvolve o seu %TPL_NAME%!",
				content5Div1: "Guando guarda o seu %TPL_NAME% este é privado inicialmente. Utilize o botão Partilhar para o partilhar com outros. Pode partilhar o seu %TPL_NAME% publicamente para que toda a gente possa aceder-lhe.",
				content5Div2: "Dependendo do seu tipo de conta, poderá também ter a opção de partilhar o seu %TPL_NAME% apenas com pessoas no interior da sua organização, para que outros possam aceder-lhe.",
				content6Div1: "O título da sua Secção Inicial é também o título do seu Jornal; pense na sua secção inicial como a capa da sua história. O título da Secção Inicial manter-se-á visível quando os seus leitores navegarem pelo Jornal´.",
				content6Div2: "O seu %LAYOUT_TITLE% não tem de ter apenas texto. Considere incluir fotografias e vídeos para ajudar a dar vida à história e para quebrar secções longas de texto!"
			},
			landing: {
				lblAdd: "Que nome pretende dar ao seu Jornal de Mapa?",
				phAdd: "Introduza o título...",
				lblOR: "Ou",
				lblHelp: "Fazer uma visita guiada"
			},
			firstAddSplash: {
				thisis: "Isto é o",
				lblMain: "Este é a %BR% Seção Principal"
			}
        }
    })
);
