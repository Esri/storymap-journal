define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Conteúdo",
      "lblMap": "Mapa",
      "lblImage": "Imagem",
      "lblVideo": "Vídeo",
      "lblExternal": "Página web",
      "lblUpload": "Carregar",
      "lblLink": "Ligação",
      "disabled": "Esta funcionalidade foi desativada pelo Admnistrador",
      "userLookup": "Carregar álbuns",
      "notImplemented": "Ainda não implementado.",
      "noData": "Não há vídeos públicos encontrados"
    },
    "imageSelector": {
      "lblStep1": "Escolha o serviço",
      "lblStep2": "Escolha os seus media",
      "lblStep3": "Configurar"
    },
    "imageSelectorHome": {
      "explain": "Carregar imagens de rede social, <br /> ou diretamente de um URL"
    },
    "imageSelectorUpload": {
      "lblUploadButton": "Procurar uma imagem",
      "lblDrop": "Soltar uma imagem aqui ou",
      "infoUpload": "As imagens serão armazenadas na sua conta ArcGIS e estarão acessíveis apenas dentro da sua história.",
      "warningFileTypes": "A imagem pode encontrar-se nos formatos .jpg, .png, .gif, ou .bmp",
      "warningOneFile": "Um ficheiro aceite de cada vez.",
      "warningFileSize": "O ficheiro excede o tamanho máximo permitido para carregamento. Por favor, selecione outro ficheiro.",
      "tooltipRemove": "Elimine esta imagem não-utilizada da sua conta ArcGIS. <br> (Terá de carregá-la novamente caso decida utilizá-la mais tarde.)"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nome de utilizador",
      "signInMsg2": "Utilizador não encontrado",
      "loadingFailed": "Carregamento falhou"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Utilizador do Facebook",
      "rightHeader": "Página do Facebook",
      "pageExplain": "Uma página do Facebook é uma celebridade ou marca/produto público, como <b>esrigis</b>. Pode obter o nome da página após a primeira barra ( / ) no URL da página.",
      "pageInputLbl": "Nome da página",
      "lookupMsgError": "Página não encontrada",
      "warning": "O suporte para Facebook foi descontinuado, ${learn}.",
      "learn": "saber mais"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Email ou ID do Google",
      "signInMsg2": "Conta não encontrada",
      "howToFind": "Como encontrar uma ID do Picasa",
      "howToFind2": "Copiar os dígitos que estão entre a primeira e a segunda  '/'  de qualquer página do Picasa"
    },
    "videoSelectorCommon": {
      "check": "Verificar",
      "notFound": "Vídeo não encontrado",
      "found": "Vídeo encontrado",
      "select": "Selecionar este vídeo"
    },
    "videoSelectorHome": {
      "other": "Outros"
    },
    "videoSelectorYoutube": {
      "url": "Ligação para vídeo do YouTube",
      "pageInputLbl": "Nome de utilizador",
      "lookupMsgError": "Utilizador não encontrado",
      "howToFind": "Como encontrar um nome de utilizador do YouTube",
      "howToFind2": "Nome de utilizador é exibido nos vídeos",
      "found": "Encontrado",
      "noData": "Não há vídeos públicos encontrados",
      "videoNotChecked": "O vídeo não foi verificado no YouTube, mas o respetivo endereço parece estar em boas condições.",
      "checkFailedAPI": "A verificação do YouTube falhou, por favor verifique a chave API do YouTube."
    },
    "videoSelectorVimeo": {
      "url": "Ligação para vídeo do Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Este story map não pode reproduzir vídeos em formato raw (ex: avi, mpeg), mas pode reproduzir ficheiro de vídeo alojados com leitores de vídeo incorporados (ex: YouTube ou Vimeo).",
      "explain2": "A maior parte dos serviços de alojamento de vídeo oferecem esta possibilidade. Encontre a opção para incorporar o vídeo, copie o código fornecido e adicione-o à sua história utilizando a opção de conteúdo %WEBPAGE%.",
      "explain3": "Como alternativa, pode alojar o ficheiro, juntamente com uma página HTLM que utilize um leitor de vídeo como %EXAMPLE%. Depois poderia adicionar o URL dessa página HTML à sua história como uma %WEBPAGE%.",
      "webpage": "Página web"
    },
    "webpageSelectorHome": {
      "lblUrl": "Ligação para página web",
      "lblEmbed": "Incorporar código",
      "lblOR": "OU",
      "lblError1": "Erro, limpe um dos dois campos de entrada.",
      "lblError2": "O código de incorporação pode conter apenas um %IFRAMETAG%",
      "configure": "Configurar"
    },
    "mediaConfigure": {
      "lblURL": "Ligação para imagem",
      "lblURLPH": "A ligação pode terminar em .jpg, .png, .gif, ou .bmp",
      "lblURLError": "Esta imagem não aparenta ser válida. Por favor especifique uma ligação direta para um ficheiro de imagem (o seu URL geralmente termina em .jpg ou .png). Ligações para uma página web que contenha a imagem não irão funcionar.",
      "lblURLCheck": "A verificar imagem...",
      "lblLabel": "Legenda de imagem",
      "lblLabel1": "Legenda",
      "lblLabel2": "Passe sobre o texto",
      "lblLabel3": "Nenhum",
      "lblLabelPH": "Introduza algum texto...",
      "lblMaximize": "Incluir um botão de maximizar no canto da imagem",
      "lblMaximizeHelp": "Recomendado apenas para fotografias de alta qualidade",
      "lblPosition": "Posição",
      "lblPosition1": "Centrar",
      "lblPosition2": "Preencher",
      "lblPosition3": "Adaptar",
      "lblPosition4": "Esticar",
      "lblPosition5": "Personalizar",
      "lblURLHelp": "Para melhores resultados, as imagens devem ser menores do que 400 KB. Utilize imagens JPG comprimidas com 80% de qualidade e estas larguras de imagem recomendadas: 2000 pixeis para o ecrã principal ou painel narrativo com botão maximizar, 1000 pixeis para painel narrativo sem botão maximizar.<br><br>caso as imagens ligadas fiquem lentas, carregue-las para a sua história para obter melhores resultados.",
      "tooltipDimension": "O valor pode ser especificado em pixéis ou percentagem",
      "tooltipDimension2": "O valor tem de ser especificado em px",
      "lblPosition2Explain": "(pode recortar)",
      "lblPosition3Explain": "(não é possível recortar)",
      "lblPosition3Explain2": "(a largura será sempre ajustada ao painel)",
      "lblPosition4Explain": "(pode distorcer)",
      "unloadLbl": "Descarregue quando o leitor navegar para uma secção diferente",
      "unloadHelp": "Caso a página possua media em formato vídeo ou áudio, mantenha esta opção selecionada para prevenir que conteúdo seja reproduzido após o utilizador sair da página. Desmarque-a, por exemplo, para continuar a reprodução de música à medida que o utilizador avança na história.<br />Caso a página web seja uma aplicação, desmarque esta opção para que a história não seja novamente descarregada caso o utilizador retome a visualização.",
      "embedProtocolLabel": "Carregar página através de uma ligação segura (HTTPS)",
      "embedProtocolWarning1": "Caso a página não seja carregada na sua história, não poderá ser incorporada, por motivos de segurança web. Em alternativa, adicione uma ligação à sua narrativa para abrir a página num novo separador do navegador <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Obter mais informações</a>",
      "embedProtocolWarning2": "Caso esta página não seja carregada na sua história, desmarque esta opção e tente novamente. Caso a página continue a não ser carregada, não poderá ser incorporada, por motivos de segurança web. Em alternativa, adicione uma ligação à sua narrativa para abrir a página num novo separador do navegador <a href='http://links.esri.com/storymaps/blogs_mixed_content/' target='_blank'>Obter mais informações</a>"
    },
    "editorActionGeocode": {
      "lblTitle": "Localizar um endereço ou lugar",
      "mapMarkerExplain": "O utilizador verá um marcador de mapa ao clicar na ligação"
    },
    "editorActions": {
      "navigate": "Navegar para uma secção",
      "remove": "Remover acção",
      "preview": "Pré-visualizar acção"
    },
    "editorActionMedia": {
      "lblTitle": "Alterar o conteúdo do Ecrã Principal"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserir uma imagem, vídeo ou página web"
    }
  }
});