define({
  "builder": {
    "layouts": {
      "mainStage": "Ecrã Principal",
      "sideTitle": "Painel Lateral",
      "sideDescr": "Um layout para uma história com texto intensivo que consegue combinar as suas fotos, vídeos e mapas numa mensagem clara e objetiva.",
      "floatTitle": "Painel Flutuante",
      "floatDescr": "Um layout que coloca a sua cartografia em destaque e apresenta um pequeno painel de texto transparente para ajudar a contar a história."
    },
    "common": {
      "lblStatus1": "Publicado",
      "lblStatus2": "Rascunho",
      "lblStatus3": "Escondido"
    },
    "settingsLayoutOptions": {
      "title": "Opções de layout",
      "cfgLeft": "Esquerda",
      "cfgRight": "Direita",
      "cfgSmall": "Pequeno",
      "cfgMedium": "Médio",
      "cfgLarge": "Grande",
      "socialLinksLabel": "Exibir ligações para partilha no fundo de cada secção.",
      "socialLinksDescr": "Isto permite aos leitores referenciar e promover secções específicas do seu %TPL_NAME%. Por exemplo, se utilizar o ícone de partilha de uma secção, os leitores irão ser dirigidos para essa secção %TPL_NAME% específica, e não para o início da sua história. Os seus leitores podem utilizar a ligação para redes sociais na secção do título para promover o seu %TPL_NAME% (separador do cabeçalho) completo e dirigi-los para o início do %TPL_NAME%.",
      "socialDisabled": "Este elemento apenas se encontra disponível com o layout Painel Flutuante.",
      "socialWarning": "A sua história está a utilizar o layout Painel Lateral, no entanto, agora recomendamos a utilização desta opção apenas com o layout Painel Flutuante, para evitar um problema que resulta na possibilidade de o posicionamento do painel não ser o pretendido em narrativas com imagens. Pode continuar a utilizar esta opção, mas, caso a desative, ficará então apenas disponível ao utilizar o layout Painel Flutuante."
    },
    "settingsLayoutFonts": {
      "title": "Fontes",
      "defaultLbl": "Padrão",
      "sectionTitleLbl": "Título da secção",
      "sectionContentLbl": "Conteúdo da secção"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Tema da Organização",
      "lblModTheme": "Tema Atual"
    },
    "initPopup": {
      "title": "Bem-vindo a"
    },
    "addEditPopup": {
      "disabled": "Adicionar Secção encontra-se desativado porque o número máximo de secções permitidas foi atingido.",
      "titleAdd": "Adicionar Secção",
      "titleAddHome": "Adicionar Secção Inicial",
      "titleEdit": "Editar Secção",
      "step": "Passo",
      "stepMainStageExplain": "Conteúdo do Ecrã Principal",
      "stepPanelExplain": "Conteúdo",
      "stepMainStageNextTooltip": "Introduza o título da secção e selecione o conteúdo do Ecrã Principal",
      "stepMainStageNextTooltip2": "Selecione o conteúdo da Seção Principal",
      "step2NextTooltip": "Introduza o título da secção e conteúdo %LAYOUT-TYPE%",
      "stepNextTooltipNext": "para ir para o próximo passo",
      "stepNextTooltipAdd": "para adicionar a secção",
      "firstAddExplain": "Esta primeira secção é a sua Secção Inicial. Pense nela como a capa da sua história. O título que acabou de definir será exibido em letras grandes.",
      "firstAddLeanMore": "Saber Mais",
      "titlePlaceholder": "Título da secção..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Adicione texto, ligações epequenos gráficos aqui.",
      "editorActionsTitle": "Story Actions",
      "editorActionsHelpDescr": "Crie ligações na sua narrativa que ajudam a contar a sua história. Uma Story Action pode ligar a outra secção ou alterar o ecrã principal. Por exemplo, pode configurar uma ação para mover o mapa para outra localização, alternar camadas entre ligado/desligado, ou alterar o recurso de media do ecrã principal para uma imagem, vídeo ou página web diferente.",
      "mainStageDisabled": "As Story Actions ficam desativadas quando o editor se encontra maximizado"
    },
    "organizePopup": {
      "title": "Organizar",
      "lblHeader": "Arraste e solte secções para organizar a sua história.",
      "lblColTitle": "Título",
      "lblColPubDate": "Data de publicação",
      "lblColStatus": "Estado",
      "checkDisplayReverse": "Exibir secções em ordem inversa.",
      "btnApplyWarning": "Confirmar a supressão de %NB% secções",
      "deleteTooltip": "Eliminar",
      "firstSectionExplain": "(A secção inicial não pode ser movida)",
      "exportMainStage": "Conteúdo da Seção Principal",
      "exportPanel": "Conteúdo do Painel",
      "exportActions": "Story actions"
    },
    "exportData": {
      "btn": "Exportar Conteúdo",
      "tooltip": "Exportar o seu conteúdo permite-lhe visualizar e criar uma cópia de segurança do seu Jornal, caso o elimine acidentalmente. Simplesmente copie, cole, o conteúdo da página para qualquer processador de texto."
    },
    "help": {
      "lblHelp": "Ajuda",
      "lblAdd": "Adicionar Secção",
      "lblSettings": "Configurações",
      "lblOrga": "Organizar conteúdo",
      "lblEdit": "Edições",
      "lblPublish": "Partilhar",
      "lblTips": "Dicas",
      "lblMore": "Quer mais?",
      "lblLink": "Visite o site web Story Maps.",
      "content1Div1": "Pode integrar vários estilos ao construir a sua história. O <strong>%LAYOUT_TITLE%</strong> contém tipicamente o seu texto, imagens e vídeo, enquanto os seus mapas tendem a estar no <strong>Ecrã Principal</strong>. No entanto, o %TPL_NAME% permite-lhe também apresentar imagens, gráficos e vídeos no ecrã principal.",
      "content1Div2": "Adicionar secções permite-lhe verdadeiramente personalizar a sua experiência de storytelling. À medida que os leitores fazem scroll para baixo no seu texto %LAYOUT_TITLE%, um mapa no Ecrã Principal permite mover ou ampliar para pontos importantes, ou novos mapas e imagens podem ser automaticamente carregados para enfatizar a sua mensagem.",
      "content2Div1": "Esta caixa de diálogo de Definições é onde pode alterar o aspeto do seu %TPL_NAME%. Pode alterar o layout, escolher um esquema de cores diferente, alterar o tipo de letra, etc.",
      "content2Div2": "Pode ainda substituir o logo da Esri pelo seu próprio logo para espelhar a sua marca. Pode também especificar o site web que será iniciado se os leitores clicarem no seu logo, para que possam obter mais informações.",
      "content3Div1": "O seu conteúdo é organizado em secções. Pode ter quantas secções pretender (pense nelas como mini-capítulos). O fluxo desses capítulos é importante; em Organizar, pode reordenar ou eliminar secções à sua vontade.",
      "content4Div1": "Encontrou um erro ou pretende alterar o seu material? Sem problema. Procure o ícone de edição em toda a sua aplicação para efetuar alterações ao seu conteúdo. Utilizará as funções de edição muitas vezes à medida que desenvolve o seu %TPL_NAME%!",
      "content5Div1": "Guando guarda o seu %TPL_NAME% este é privado inicialmente. Utilize o botão Partilhar para o partilhar com outros. Pode partilhar o seu %TPL_NAME% publicamente para que toda a gente possa aceder-lhe.",
      "content5Div2": "Dependendo do seu tipo de conta, poderá também ter a opção de partilhar o seu %TPL_NAME% apenas com pessoas no interior da sua organização, para que outros possam aceder-lhe.",
      "content6Div1": "O título da sua Secção Inicial é também o título do seu Jornal; pense na sua secção inicial como a capa da sua história. O título da Secção Inicial manter-se-á visível quando os seus leitores navegarem pelo Jornal´.",
      "content6Div2": "O seu %LAYOUT_TITLE% não tem de ter apenas texto. Considere incluir fotografias e vídeos para ajudar a dar vida à história e para quebrar secções longas de texto!"
    },
    "landing": {
      "lblAdd": "Que nome pretende dar ao seu Jornal de Mapa?",
      "phAdd": "Introduza o título...",
      "lblOR": "Ou",
      "lblHelp": "Fazer uma visita guiada",
      "quote0": "Existe sempre espaço para uma história que pode transportar-nos para outro lugar.",
      "quote1": "Contar histórias é a forma mais poderosa de colocar ideias no mundo nos dias que correm.",
      "quote2": "As histórias que contamos constroem, literalmente, o mundo. Se quer mudar o mundo, necessita de mudar a sua história. Esta verdade aplica-se tanto a indivíduos como a instituições.",
      "quote3": "A menor distância entre um ser humano e a verdade é uma história.",
      "quote4": "As pessoas não pretendem mais informação. Estão fartas de informação. Querem confiar em si, nos seus objetivos, no seu sucesso, na história que conta.",
      "quote5": "Acredito realmente que as pessoas procuram histórias que tenham significado real, histórias redentoras, inspiradoras e maiores do que um indivíduo.",
      "quote6": "Se pretende influenciar um indivíduo ou grupo para que adote um valor específico na sua vida, conte-lhe uma história envolvente.",
      "quote7": "Se me contar, é um ensaio. Se me mostrar, é uma história.",
      "quote8": "Se não conhecer as árvores, pode perder-se na floresta, mas se não conhecer as histórias, pode perder-se na vida.",
      "quote9": "As histórias representam a conversão criativa da própria vida numa experiência mais poderosa, mais clara, com mais significado. São a divisa do contacto humano.",
      "quote10": "Não existe maior desespero do que trazer uma história por contar dentro de si.",
      "quote11": "Talvez as histórias sejam apenas dados com alma.",
      "quote12": "As histórias são a mais poderosa das armas do arsenal de um líder.",
      "quote13": "Faz parte da natureza das histórias deixar de fora muito mais do que aquilo que incluem."
    },
    "firstAddSplash": {
      "thisis": "Isto é o",
      "lblMain": "Este é a %BR% Seção Principal"
    }
  }
});