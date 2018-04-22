define({
  "builder": {
    "layouts": {
      "mainStage": "Nível Principal",
      "sideTitle": "Painel Lateral",
      "sideDescr": "Um layout para uma história de texto intensivo que se destaca na combinação de suas fotos, vídeos e mapas em uma mensagem clara focada.",
      "floatTitle": "Painel Flutuante",
      "floatDescr": "Um layout que coloca a sua cartografia em foco, permitindo que um painel de texto com pequeno formulário transparente ajude a contar uma história."
    },
    "common": {
      "lblStatus1": "Publicado",
      "lblStatus2": "Rascunho",
      "lblStatus3": "Oculto"
    },
    "settingsLayoutOptions": {
      "title": "Opções de Layout",
      "cfgLeft": "Esquerda",
      "cfgRight": "Direita",
      "cfgSmall": "Pequeno",
      "cfgMedium": "Médio",
      "cfgLarge": "Grande",
      "socialLinksLabel": "Exibir links de compartilhamento na parte inferior de cada seção",
      "socialLinksDescr": "Isto permite que os leitores façam referência e promovam seções específicas do seu %TPL_NAME%. Por exemplo, se você utilizar um ícone para compartilhar seções, os leitores verificarão a seção %TPL_NAME% específica, ao invés do começo da sua história. Seus leitores podem utilizar o link de mídia social na seção de título para promover o seu %TPL_NAME% inteiro (guia cabeçalho) e tê-lo no início do %TPL_NAME%.",
      "socialDisabled": "Este recurso está disponível somente com layout do Painel Flutuante",
      "socialWarning": "Sua história está utilizando o layout de Painel Lateral, mas agora recomendamos utilizar esta opção somente com layout de Painel Flutuante para evitar um erro onde o painel não pode posicionar propriamente na seção desejada para narrativas com imagens. Você pode continuar a utilizar esta opção, mas se você desativá-la, ela então estará disponível somente quando utilizar o layout de Painel Flutuante."
    },
    "settingsLayoutFonts": {
      "title": "Fontes",
      "defaultLbl": "Padrão",
      "sectionTitleLbl": "Título da seção",
      "sectionContentLbl": "Conteúdo da seção"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Tema da Organização",
      "lblModTheme": "Tema Atual"
    },
    "initPopup": {
      "title": "Bem-Vindo ao"
    },
    "addEditPopup": {
      "disabled": "Adicionar Seção está desabilitada, pois o número máximo de seções permitidas foi alcançado.",
      "titleAdd": "Adicionar Seção",
      "titleAddHome": "Adicionar Seção Inicial",
      "titleEdit": "Editar Seção",
      "step": "Intervalo",
      "stepMainStageExplain": "Conteúdo do Nível Principal",
      "stepPanelExplain": "Conteúdo",
      "stepMainStageNextTooltip": "Insira o título da seção e selecione o conteúdo do Nível Principal",
      "stepMainStageNextTooltip2": "Selecione o conteúdo do Nível Principal",
      "step2NextTooltip": "Insira o título da seção e conteúdo do %LAYOUT-TYPE%",
      "stepNextTooltipNext": "para ir para a próxima etapa",
      "stepNextTooltipAdd": "para adicionar a seção",
      "firstAddExplain": "Esta primeira seção é a sua Seção Inicial, pense nisto como a 'página de capa' para a sua história. O título que você acabou de definir será exibido com fontes grandes.",
      "firstAddLeanMore": "Mais Informações",
      "titlePlaceholder": "Título da seção..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Adicione texto, links e pequenos gráficos aqui.",
      "editorActionsTitle": "Ações da História",
      "editorActionsHelpDescr": "Cria links na sua narrativa que ajudam a contar sua história. Uma Ação da História pode vincular outra seção ou alterar a fase principal. Por exemplo, você pode configurar uma ação para mover o mapa para outro local, ativar ou desativar camadas do mapa, ou alterar a mídia da fase principal para uma imagem, vídeo, mapa ou página da web diferente.",
      "mainStageDisabled": "As Ações da História são desativadas quando o editor é maximizado"
    },
    "organizePopup": {
      "title": "Organizar",
      "lblHeader": "Arraste e solte as seções para organizar sua história.",
      "lblColTitle": "Título",
      "lblColPubDate": "Data da publicação",
      "lblColStatus": "Status",
      "checkDisplayReverse": "Exibir seções em ordem inversa",
      "btnApplyWarning": "Confirmar exclusão das seções %NB%",
      "deleteTooltip": "Excluir",
      "firstSectionExplain": "(A seção local não pode ser movida)",
      "exportMainStage": "Conteúdo do Nível Principal",
      "exportPanel": "Conteúdo do Painel",
      "exportActions": "Ações da história"
    },
    "exportData": {
      "btn": "Exportar conteúdo",
      "tooltip": "Exportar seu conteúdo permite a você visualizar e criar uma cópia de segurança do seu conteúdo se você acidentalmente excluí-lo. Basta copiar e colar o conteúdo da página em qualquer processador de texto."
    },
    "help": {
      "lblHelp": "Ajuda",
      "lblAdd": "Adicionar Seção",
      "lblSettings": "Configurações",
      "lblOrga": "Organizar conteúdo",
      "lblEdit": "Edições",
      "lblPublish": "Compartilhar",
      "lblTips": "Dicas",
      "lblMore": "Deseja mais?",
      "lblLink": "Visite o site da web de Mapas Históricos da Esri.",
      "content1Div1": "Você pode integrar uma variedade de estilos na construção da sua história. O <strong>% LAYOUT_TITLE% </ strong> normalmente tem o seu texto, imagens e vídeo enquanto seus mapas tendem a ir para o<strong> Nível Principal</ strong>. No entanto, o% TPL_NAME% também permite a você apresentar imagens, gráficos e vídeos dentro do nível principal.",
      "content1Div2": "Adicionar seções permite a você personalizar verdadeiramente a sua experiência de contar histórias. Conforme os leitores rolam pelo seu texto %LAYOUT_TITLE%, um mapa no Nível Principal pode mover ou ampliar nos pontos-chaves ou novos mapas e imagens podem alternar automaticamente para suporte da sua mensagem.",
      "content2Div1": "O diálogo Configurações é onde você pode alterar o visual do seu %TPL_NAME%. Você altera um layout, escolhae um esquema de cores diferente, altera a fonte de texto, etc.",
      "content2Div2": "Você também pode substituir o logo da Esri pelo seu próprio logo para refletir sua marca. Você também pode especificar o site da web que será iniciado se leitoras clicarem no seu logo, então poderão obter mais informações.",
      "content3Div1": "Seu conteúdo está organizado em seções. Você pode ter várias seções que desejar (pense nelas como mini capítulos). O fluxo destes capítulos é importante; dentro de Organizar você pode reordenar ou excluir seções como desejar.",
      "content4Div1": "Encontrou um erro ou deseja alterar o seu material? Não se preocupe. Procure o ícone de edição em todo o aplicativo para fazer alterações no seu conteúdo. Você utilizará as funções de edição várias vezes conforme desenvolver o seu %TPL_NAME%!",
      "content5Div1": "Ao salvar seu %TPL_NAME%, ele é inicialmente privado. Utilize o botão Compartilhar para compartilhá-lo com outros. Você pode compartilhar seu %TPL_NAME% publicamente, assim qualquer usuário poderá utilizá-lo.",
      "content5Div2": "Dependendo da sua conta, você pode também ter a opção para compartilhar seu %TPL_NAME% somente para pessoas dentro da sua organização, então outros não poderão acessá-lo.",
      "content6Div1": "O título da sua seção Inicial é também o título do seu diário; pense na sua seção Inicial como a 'página da capa' para a sua história. O título da Seção Inicial permanecerá visível quando os leitores navegarem no Diário.",
      "content6Div2": "Seu %LAYOUT_TITLE% Não tem que ser apenas texto, considere incluir fotos e vídeos para ajudar a trazer a história viva e quebrar longos trechos do texto!"
    },
    "landing": {
      "lblAdd": "Como você deseja chamar seu Diário do Mapa?",
      "phAdd": "Insira seu título...",
      "lblOR": "Ou",
      "lblHelp": "Obter uma Apresentação",
      "quote0": "Sempre há espaço para uma história que pode transportar pessoas para outro lugar.",
      "quote1": "A narrativa é o caminho mais eficaz para expor as idéias no mundo de hoje.",
      "quote2": "As histórias que nós literalmente contamos fazem o mundo. Se você desejar mudar o mundo, você precisa mudar sua história. Esta verdade se aplica ambos para indivíduos e instituições.",
      "quote3": "A menor distância entre um ser humano e a verdade é uma história.",
      "quote4": "A pessoas não querem mais informações. Elas já estão muitas informações. Eles querem ter fé em você, suas metas, seu sucesso, na história que você conta.",
      "quote5": "Eu acredito verdadeiramente que as pessoas estão procurando por histórias que realmente dizem algo, histórias que são remissórias, inspiradoras e maiores que um individual.",
      "quote6": "Se você desejar influenciar um individuo ou um grupo para seguir um valor particular em suas vidas diariamente, conte uma história atrativa.",
      "quote7": "Se você me contar, é uma composição. Se você me mostrar, é uma história.",
      "quote8": "Se você não souber as árvores que podem ser perdidas na floresta, imagina se você não souber as histórias que podem ser perdidas na vida.",
      "quote9": "As histórias são a conversão criativa da vida propriamente em uma experiência mais significante mais eficiente e limpa. Elas são a moeda corrente de contato humano.",
      "quote10": "Não há agonia maior que carrega uma história não contada dentro de você.",
      "quote11": "Talvez as histórias são apenas dados com uma alma.",
      "quote12": "A história é a única arma eficiente em um arsenal do líder.",
      "quote13": "É a natureza das histórias omitir muito mais que elas incluem."
    },
    "firstAddSplash": {
      "thisis": "Esta é o",
      "lblMain": "Este é o Nível Principal %BR%"
    }
  }
});