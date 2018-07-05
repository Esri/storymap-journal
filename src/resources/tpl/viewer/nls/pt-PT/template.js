define({
  "viewer": {
    "common": {
      "close": "Fechar",
      "focusMainstage": "Enviar foco de teclado para media",
      "expandImage": "Expandir imagem"
    },
    "a11y": {
      "skipToContent": "Avançar para a narrativa",
      "headerAria": "Cabeçalho da história",
      "panelAria": "Narrativa da história",
      "mainStageAria": "Media da atual secção da história",
      "logoLinkAria": "Ligação ao logótipo",
      "toTop": "Ir para o início da narrativa",
      "focusContent": "Regressar à narrativa",
      "navAria": "Secções da história",
      "navPreviousAria": "Secção anterior",
      "navNextAria": "Próxima secção",
      "toSectionAria": "Ir para secção %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Próximo grupo de secções (%SECTION_RANGE%)",
      "toPrevGroupAria": "Grupo de secções anterior (%SECTION_RANGE%)",
      "loadingAria": "O conteúdo da história está a carregar"
    },
    "loading": {
      "step1": "A carregar a história",
      "step2": "A carregar dados",
      "step3": "Inicializando",
      "loadBuilder": "Alternando para builder",
      "long": "O Jornal de Mapa está a inicializar",
      "long2": "Obrigado por aguardar",
      "failButton": "Recarregar a história"
    },
    "signin": {
      "title": "É necessária autenticação",
      "explainViewer": "Por favor inicie sessão com uma conta em %PORTAL_LINK% para aceder à história.",
      "explainBuilder": "Por favor inicie sessão com uma conta em %PORTAL_LINK% para configurar a história."
    },
    "errors": {
      "boxTitle": "Ocorreu um erro",
      "invalidConfig": "Configuração inválida",
      "invalidConfigNoApp": "O identificador da Aplicação de Cartografia Web não se encontra especificado em index.html",
      "invalidConfigNoAppDev": "Não foi especificado nenhum identificador de Aplicação de Mapeamento Web nos parâmetros URL (?appid=). No modo de desenvolvimento, a configuração appid em index.html é ignorada.",
      "unspecifiedConfigOwner": "O proprietário autorizado não foi configurado.",
      "invalidConfigOwner": "O proprietário da história não está autorizado.",
      "createMap": "Não foi possível criar o mapa",
      "invalidApp": "O %TPL_NAME% não existe ou encontra-se inacessível.",
      "appLoadingFail": "Aolgo correu mal, o %TPL_NAME% não foi carregado corretamente.",
      "notConfiguredDesktop": "A história ainda não se encontra configurada.",
      "notConfiguredMobile": "O construtor %TPL_NAME% não é suportado neste tamanho de exibição. Se possível, redimensione o seu navegador para aceder ao construtor ou construa por favor a sua história num dispositivo com um écran maior.",
      "notConfiguredMobile2": "Por favor rode o seu dispositivo para orientação paisagem para usar o construtor %TPL_NAME%.",
      "notAuthorized": "Não tem autorização para aceder a esta história",
      "notAuthorizedBuilder": "Não está autorizado a usar o construtor %TPL_NAME%.",
      "noBuilderIE": "O construtor não é suportado em versões de Internet Explorer anteriores a %VERSION%. %UPGRADE%",
      "noViewerIE": "Esta história não é suportada pelo Internet Explorer abaixo da versão %VERSION%. %UPGRADE%",
      "noViewerIE2": "Está a tentar visualizar esta história através de um navegador mais antigo, que não é suportado. Alguns elementos poderão não funcionar, ou poderão surgir outros problemas inesperados. Sugerimos que atualize para o Internet Explorer 11 ou que utilize outro navegador, por exemplo, o Chrome.",
      "noViewerIE3": "No final de 2017, esta história já não poderá ser carregada neste navegador. Nessa altura, terá de utilizar um navegador suportado para visualizar esta história.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Por favor atualize o seu browser</a>.",
      "mapLoadingFail": "Algo correu mal, o mapa não foi carregado correctamente.",
      "signOut": "Terminar sessão",
      "print0": "Lamentamos, esta história não pode ser impressa.",
      "print1": "Para imprimir esta história, por favor utilize o botão imprimir localizado na caixa de diálogo partilhar.",
      "print2": "Lamentamos, uma versão imprimível da história é normalmente acessível através da caixa de diálogo partilhar, mas esta caixa de diálogo foi desativada pelo autor.",
      "attention": "Atenção!"
    },
    "mobileView": {
      "tapForDetails": "Toque para aceder a detalhes",
      "clickForDetails": "Obtenha mais informações",
      "swipeToExplore": "Deslize para explorar.",
      "tapForMap": "Toque para regressar",
      "clickForMap": "REGRESSAR"
    },
    "floatLayout": {
      "scroll": "Scroll"
    },
    "sideLayout": {
      "scroll": "Faça scroll para ver mais!"
    },
    "mainStage": {
      "back": "Retroceder",
      "errorDeleted": "Esta ligação não se encontra ativa (a secção foi eliminada)",
      "errorNotPublished": "Esta ligação não se encontra ativa (a secção não se encontra publicada)"
    },
    "headerFromCommon": {
      "storymapsText": "Um Story Map",
      "builderButton": "Editar",
      "facebookTooltip": "Partilhar no Facebook",
      "twitterTooltip": "Partilhar no Twitter",
      "bitlyTooltip": "Partilhar ou imprimir",
      "templateTitle": "Definir título do modelo",
      "templateSubtitle": "Definir subtítulo do modelo",
      "share": "Partilhar",
      "checking": "A verificar o conteúdo da sua história",
      "fix": "Corrija problemas na sua história",
      "noerrors": "Não foram detetados problemas",
      "tooltipAutoplayDisabled": "Isto não está disponível no modo de reprodução automática",
      "notshared": "História não partilhada"
    },
    "mapFromCommon": {
      "overview": "Vista Geral do Mapa",
      "legend": "Legenda",
      "home": "Aplicar Zoom a Página Inicial"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Abrir",
      "embed": "Incorporar em página web",
      "embedExplain": "Utilize o seguinte código HTML para incorporar o jornal numa página web.",
      "size": "Tamanho (largura/altura):",
      "autoplayLabel": "Modo reprodução automática",
      "autoplayExplain1": "Modo reprodução automática irá avançar através da sua história em intervalos regulares. Isto é ideal num monitor de quiosque ou exibição pública, mas esteja ciente de que noutras situações pode tornar a história mais difícil de ler. Este elemento não é suportado em écrans pequenos.",
      "autoplayExplain2": "Quando este modo está activo existem controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
      "linksupdated": "Links actualizados!",
      "print": "Imprimir",
      "printInstruction1": "Por favor, aguarde até que a história seja totalmente carregada antes de imprimir",
      "printInstruction1a": "Caso esta página demore a carregar ou algum media não aparecer, experimente imprimir um intervalo de secções mais reduzido.",
      "printInstruction1b": "Para obter melhores resultados, poderá necessitar de ativar a impressão de elementos de fundo nas definições de impressão do seu navegador.",
      "printInstruction2": "Esta página não pode ser partilhada; ao invés, partilhe a ${link}",
      "link": "ligação à história",
      "optionsHeader": "Opções",
      "printOptPageBreak": "Iniciar cada secção numa nova página",
      "makeTextBlack": "Colocar todo o texto a negro",
      "showLinks": "Exibir URLs de ligação",
      "madeWith": "Esta história foi criada com ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Jornal de Story Maps da Esri",
      "readItOnline": "Leia a versão interativa na web em ${link}.",
      "printMSWarning": "ligação disponível apenas na história online",
      "printVideoWarning": "Este vídeo pode ser visualizado na versão online deste story map.",
      "printRangeHeader": "Imprimir parte desta história",
      "sectionLabel": "Secções:",
      "apply": "Aplicar",
      "resetRange": "Restaurar para história completa"
    }
  }
});