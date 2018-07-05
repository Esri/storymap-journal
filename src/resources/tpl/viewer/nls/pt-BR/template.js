define({
  "viewer": {
    "common": {
      "close": "Fechar",
      "focusMainstage": "Enviar foco do teclado para mídia",
      "expandImage": "Expandir imagem"
    },
    "a11y": {
      "skipToContent": "Pular para narrativa",
      "headerAria": "Cabeçalho da história",
      "panelAria": "Narrativa da história",
      "mainStageAria": "Mídia da seção de história atual",
      "logoLinkAria": "Link do logotipo",
      "toTop": "Ir para início da narrativa",
      "focusContent": "Retornar para narrativa",
      "navAria": "Seções da história",
      "navPreviousAria": "Seção anterior",
      "navNextAria": "Próxima seção",
      "toSectionAria": "Ir para seção %SECTION_NUMBER%: %SECTION_TITLE%",
      "toNextGroupAria": "Próximo grupo de seções (%SECTION_RANGE%)",
      "toPrevGroupAria": "Grupo anterior de seções (%SECTION_RANGE%)",
      "loadingAria": "O conteúdo da história está carregando"
    },
    "loading": {
      "step1": "Carregando história",
      "step2": "Carregando dados",
      "step3": "Inicializando",
      "loadBuilder": "Trocando para construtor",
      "long": "O diário do mapa está inicializando",
      "long2": "Obrigado por aguardar",
      "failButton": "Recarregar a história"
    },
    "signin": {
      "title": "uma autenticação é exigida",
      "explainViewer": "Entre com uma conta no %PORTAL_LINK% para acessar a história.",
      "explainBuilder": "Entre com uma conta no %PORTAL_LINK% para configurar a história."
    },
    "errors": {
      "boxTitle": "Ocorreu um erro",
      "invalidConfig": "Configuração inválida",
      "invalidConfigNoApp": "Identificador do Aplicativo de Mapeamento da Web não especificado no index.html.",
      "invalidConfigNoAppDev": "Nenhum identificador do Aplicativo de Mapeamento da Web está especificado em parâmetros da URL (?appid=). Em modo de desenvolvimento, a configuração de appid em index.html é ignorada.",
      "unspecifiedConfigOwner": "O proprietário autorizado não foi configurado.",
      "invalidConfigOwner": "O proprietário da história não está autorizado.",
      "createMap": "Não foi possível criar o mapa",
      "invalidApp": "O %TPL_NAME% não existe ou está inacessível.",
      "appLoadingFail": "Ocorreu algo errado, o %TPL_NAME% não carregou corretamente.",
      "notConfiguredDesktop": "A história ainda não está configurada.",
      "notConfiguredMobile": "O construtor %TPL_NAME% não é suportado neste tamanho de visualização. Se possível, redimensione seu navegador para acessar o construtor ou construa sua história em um dispositivo com uma tela maior.",
      "notConfiguredMobile2": "Gire seu dispositivo para orientação de paisagem para utilizar o construtor %TPL_NAME%.",
      "notAuthorized": "Você não tem autorização para acessar esta história",
      "notAuthorizedBuilder": "Você não está autorizado para utilizar o construtor %TPL_NAME%.",
      "noBuilderIE": "O construtor não é suportado no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
      "noViewerIE": "Esta história não é suportada no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
      "noViewerIE2": "Você está tentando visualizar esta história utilizando um navegador antigo e não suportado. Pode haver recursos que não funcionam ou outros problemas inesperados. Sugerimos que você atualize para Internet Explorer 11 ou utilize outro navegador, como Chrome.",
      "noViewerIE3": "No final de 2017, esta história não será mais carregada neste navegador. Neste momento, você deve utilizar um navegador suportado para visualizar esta história.",
      "upgradeBrowser": "<a href='http://browsehappy.com/' target='_blank'>Atualize seu navegador</a>.",
      "mapLoadingFail": "Algo deu errado, o mapa não carregou corretamente.",
      "signOut": "Sair",
      "print0": "Desculpe, esta história não pode ser impressa.",
      "print1": "Para imprimir esta história, utilize o botão de impressão localizado no diálogo de compartilhamento.",
      "print2": "Desculpe, uma versão imprimível da história é normalmente acessível pelo diálogo de compartilhamento, mas este diálogo foi desativado pelo autor.",
      "attention": "Atenção!"
    },
    "mobileView": {
      "tapForDetails": "Toque poara detalhes",
      "clickForDetails": "Mais informações",
      "swipeToExplore": "Oscile para explorar",
      "tapForMap": "Toque para voltar",
      "clickForMap": "VOLTAR"
    },
    "floatLayout": {
      "scroll": "Rolar"
    },
    "sideLayout": {
      "scroll": "Role para baixo para mais!"
    },
    "mainStage": {
      "back": "Voltar",
      "errorDeleted": "Este link não está ativo (a seção foi excluída)",
      "errorNotPublished": "Este link não está ativo (a seção não foi publicada)"
    },
    "headerFromCommon": {
      "storymapsText": "Um Mapa Histórico",
      "builderButton": "Editar",
      "facebookTooltip": "Compartilhar no Facebook",
      "twitterTooltip": "Compartilhar no Twitter",
      "bitlyTooltip": "Compartilhar ou imprimir",
      "templateTitle": "Configurar título do modelo",
      "templateSubtitle": "Configurar subtítulo do modelo",
      "share": "Compartilhar",
      "checking": "Verificando conteúdo da sua história",
      "fix": "Corrigir problemas em sua história",
      "noerrors": "Nenhum problema detectado",
      "tooltipAutoplayDisabled": "Isto não está disponível no modo de reprodução automática",
      "notshared": "História não compartilhada"
    },
    "mapFromCommon": {
      "overview": "Mapa de Visão Geral",
      "legend": "Legenda",
      "home": "Ampliar Página Inicial"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Abrir",
      "embed": "Anexar na página da web",
      "embedExplain": "Utilize o seguinte código HTML para anexar o diário em uma página da web.",
      "size": "Tamanho (largura/altura):",
      "autoplayLabel": "Modo de reprodução automática",
      "autoplayExplain1": "O modo de reprodução automática avançará por sua história em um intervalo regular. Isto é ideal em um monitor de visualização pública ou de quiosque, mas esteja ciente que em outras situações ele pode tornar a história mais difícil de ler. Este recurso não é suportado em visualizações pequenas.",
      "autoplayExplain2": "Quando este modo está ativo há controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
      "linksupdated": "Links atualizados!",
      "print": "Imprimir",
      "printInstruction1": "Espere até a história inteira carregar antes de imprimir",
      "printInstruction1a": "Se esta página carrega lentamente ou algumas mídias não aparecem, tente imprimir uma faia menor de seções.",
      "printInstruction1b": "Para melhores resultados, você pode precisar ativar a impressão de elementos de plano de fundo nas configurações de impressão do seu navegador.",
      "printInstruction2": "Esta página não pode ser compartilhada com outros, ao contrário, compartilhe o ${link}",
      "link": "link para a história",
      "optionsHeader": "Opções",
      "printOptPageBreak": "Comece cada seção em uma nova página",
      "makeTextBlack": "Tornar todo o texto preto",
      "showLinks": "Mostrar URLs de links",
      "madeWith": "Esta história foi feita com ${JOURNAL_LINK_TEXT}.",
      "journalLinkText": "Diário do Mapa Histórico da Esri",
      "readItOnline": "Leia a versão interativa na web em ${link}.",
      "printMSWarning": "link disponível somente na história online",
      "printVideoWarning": "Este vídeo pode ser visualizado na versão online deste mapa histórico",
      "printRangeHeader": "Imprimir parte de impressão desta história",
      "sectionLabel": "Seções:",
      "apply": "Aplicar",
      "resetRange": "Redefinir para história inteira"
    }
  }
});