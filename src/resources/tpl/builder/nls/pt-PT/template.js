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
				socialLinksDescr: "Isto permite aos leitores referenciar e promover secções específicas do seu %TPL_NAME%. Por exemplo, se utilizar o ícone de partilha de uma secção, os leitores irão ser dirigidos para essa secção %TPL_NAME% específica, e não para o início da sua história. Os seus leitores podem utilizar a ligação para redes sociais na secção do título para promover o seu %TPL_NAME% (Separador do Cabeçalho) completo e dirigi-los para o início do %TPL_NAME%."
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
				step2NextTooltip: "Introduza o título da secção e conteúdo %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir para o próximo passo",
				stepNextTooltipAdd: "para adicionar a secção",
				firstAddExplain: "Esta primeira secção é a sua Secção Inicial. Pense nela como a 'capa' da sua história. O título que acabou de definir será exibido em letras grandes.",
				firstAddLeanMore: "Saber Mais",
				titlePlaceholder: "Título da secção..."
			},
			addEditViewText: {
				editorPlaceholder: "Adicione texto, ligações epequenos gráficos aqui.",
				editorActionsTitle: "Ações do Ecrã Principal",
				editorActionsHelpDescr: "Utilize estes controlos para criar ligações que irão alterar o ecrã principal. Por exemplo, quando o leitor clica numa ligação, poderá querer ampliar o mapa para uma localização específica, exibir outro mapa web ou exibir uma Imagem."
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
				firstSectionExplain: "(A secção inicial não pode ser movida)"
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
				content2Div1: "Aqui está onde pode ajustar o aspeto do seu %TPL_NAME%. Esquemas de cores, layouts elarguras são refinados aqui.",
				content2Div2: "Pode ainda adicionar ligações de partilha no Facebook, Twitter e Bitly para que os leitores possam facilmente partilhar o seu %TPL_NAME% com outros.",
				content3Div1: "O seu conteúdo é organizado em secções. Pode ter quantas secções pretender (pense nelas como mini-capítulos). O fluxo desses capítulos é importante; em Organizar, pode reordenar ou eliminar secções à sua vontade.",
				content4Div1: "Encontrou um erro ou pretende alterar o seu material? Sem problema. Procure o ícone de edição em toda a sua aplicação para efetuar alterações ao seu conteúdo. Utilizará as funções de edição muitas vezes à medida que desenvolve o seu %TPL_NAME%!",
				content5Div1: "O seu %TPL_NAME% encontra-se guardado na conta do seu %PORTAL% e éprivado por defeito. Pode decidir partilhá-lo com a sua organização ou abri-lo ao mundo. Até lhe fornecemos um URL curto para poder partilhar facilmente.",
				content6Div1: "O título da sua Secção Inicial é também o título do seu Jornal; pense na sua secção inicial como a 'capa' da sua história. O título da Secção Inicial manter-se-á visível quando os seus leitores navegarem pelo Jornal.",
				content6Div2: "O seu %LAYOUT_TITLE% não tem de ter apenas texto. Considere incluir fotografias e vídeos para ajudar a dar vida à história e para quebrar secções longas de texto!"
			},
			landing: {
				lblAdd: "Que nome pretende dar ao seu Jornal de Mapa?",
				phAdd: "Introduza o título...",
				lblOR: "Ou",
				lblHelp: "Fazer uma visita guiada"
			},
			firstAddSplash: {
				thisis: "Isto é o"
			}
        }
    })

);
