define(
	 ({
		common: {
			common: {
				edit: "Editar"
			},
			inlineFieldEdit: {
				editMe: "Editar-me!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSave: "GUARDAR",
				buttonShare: "PARTILHAR",
				buttonSettings: "DEFINIÇÕES",
				buttonHelp: "AJUDA",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não guardada",
				unSavedChangePlural: "alterações não guardadas",
				popoverSaveWhenDone: "Não se esqueça de guardar quando terminar",
				closeWithPendingChange: "Tem a certeza de que pretende confirmar a ação? Perderá as alterações feitas.",
				ok: "Ok",
				savingApplication: "A guardar a aplicação",
				saveError: "Falha ao guardar, tente novamente",
				saveError3: "O título não pode ser vazio",
				// TODO
				signIn: "Inicie sessão com uma conta em",
				shareStatus1: "A aplicação não está guardada",
				shareStatus2: "A aplicação é partilhada publicamente",
				shareStatus3: "A aplicação é partilhada com a organização",
				shareStatus4: "A aplicação não é partilhada"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Título",
				addPopupTitle: "Adicionar",
				addPopupDescription: "Adicione uma nova vista à sua série.",
				addPopupButton: "ADICIONAR",
				// Edit
				editPopupTitle: "Editar",
				editPopupDescription: "Edite a vista selecionada",
				editPopupButton: "APLICAR",
				// Add/Edit
				addEditPopupCancelButton: "CANCELAR",
				addEditPopupMyContentBtn: "Selecionar de o meu conteúdo",
				addEditPopupConfigureWebMapBtn: " Configurar"
			},
			share: {
				firstSaveTitle: "Aplicação guardada com sucesso",
				firstSaveHeader: "A sua aplicação está agora guardada em ArcGIS Online. Por favor, leia as seguintes respostas a perguntas frequentes.",
				firstSaveA1: "Se não está familiarizado com o ArcGIS Online ou pretende um atalho para aceder ao interface de construção, pode guardar a seguinte ligação: %LINK1%",
				firstSaveA1bis: "A aplicação pode também ser encontrada na sua <a href='%LINK2%' target='_blank'>pasta de conteúdo ArcGIS Online </a>.",
				firstSaveQ2: "A minha aplicação está a ser partilhada?",
				firstSaveA2: "A sua aplicação não se está a ser partilhada de momento. Para a partilhar, utilize o botão PARTILHAR.",
				shareTitle: "Partilhar aplicação",
				sharePrivateHeader: "A sua aplicação não está a ser partilhada, pretende partilhá-la?",
				sharePrivateBtn1: "Partilhar publicamente",
				sharePrivateBtn2: "Partilhar com a organização",
				sharePrivateWarning: "A partilha de %WITH% foi desativado porque não é o proprietário do <a href='%LINK%' target='_blank'>mapa web</a>.",
				sharePrivateWarningWith1: "publicamente",
				sharePrivateWarningWith2: "publicamente e com a Organização",
				sharePrivateProgress: "Partilha em progresso...",
				sharePrivateErr: "A partilha falhou, tente novamente ou",
				sharePrivateOk: "A partilha foi atualizada com sucesso, a carregar...",
				sharePreviewAsUser: "Pré-Visualizar",
				shareHeader1: "A sua aplicação está <strong>acessível ao público</strong>.",
				shareHeader2: "A sua aplicação encontra-se acessível aos membros da sua oganização (início de sessão necessário).",
				shareLinkHeader: "Partilhe a aplicação com o seu público",
				shareLinkOpen: "ABRIR",
				shareQ1Opt1: "Como posso manter a aplicação privada?",
				shareQ1Opt2: "Como posso manter a aplicação privada ou partilhá-la publicamente?",
				shareA1: "Utilize %SHAREIMG% na <a href='%LINK1%' target='_blank'>página de detalhes da aplicação</a>. Se também pretende parar de partilhar o mapa web, utilize <a href='%LINK2%' target='_blank'>a página de detalhes do mapa web</a>.",
				shareA1bis: "Se pretende parar de partilhar o serviço de elementos, utilize <a href='%LINK1%' target='_blank'>a página de detalhes do serviço de elementos</a>.",
				shareQ2: "Como posso editar a aplicação mais tarde?",
				shareQ2bis: "Como volto mais tarde ao interface de construção?",
				shareA2div1: "Guarde e reutilize a seguinte ligação %LINK1% ou utilize <a href='%LINK2%' target='_blank'>a página de detalhes do item</a>.",
				shareA2div2: "Como proprietário da aplicação, quando inicia sessão no ArcGIS.com, a aplicação incluí um botão para abrir o construtor interativo:",				
				shareQ3: "Onde estão guardados os dados?",
				shareA3: "As configurações da aplicação estão armazenadas <a href='%LINK1%' target='_blank'>neste item de mapa web</a> e <a href='%LINK2%' target='_blank'>neste item de aplicação web</a>. Se importou do Flickr, Picasa, Facebook ou YouTube, as suas imagens e vídeos continuam lá armazenadas e não estão duplicadas em ArcGIS Online.",
				learnMore: "Obtenha mais informações",
				close: "Fechar"
			},
			settings: {
				header: "Definições da aplicação",
				cancel: "Cancelar",
				apply: "Aplicar",
				tabError: "Verifique todos os separadores para ver se existem erros"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Que layout pretende utilizar?",
				explainInit: "Será possível efetuar alterações no decurso das configurações.",
				selected: "Layout selecionado",
				select: "Selecionar este layout"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Selecione um tema para a aplicação ou defina cores à sua escolha.",
				label: "Cores de fundo do cabeçalho e do painel lateral"
			},
			settingsHeader: {
				title: "Cabeçalho",
				explain: "Personalize o logótipo do cabeçalho (o máximo é 250 x 50 px).",
				logoEsri: "Logótipo Esri",
				logoNone: "Sem logótipo",
				logoCustom: "Logótipo personalizado",
				logoCustomPlaceholder: "URL de Imagem",
				logoCustomTargetPlaceholder: "Ligação para clicar",
				logoSocialExplain: "Personalize a ligação superior direita do cabeçalho.",
				logoSocialText: "Texto",
				logoSocialLink: "Ligação",
				logoSocialDisabled: "Esta funcionalidade foi desativada pelo Admnistrador"
			},
			mediaSelector: {
				lblMap: "Mapa",
				lblPicture: "Imagem",
				lblVideo: "Vídeo",
				lblExternal: "Página externa"
			},
			webMapSelector: {
				radioCurrentWebMap: "Mapa web atual",
				radioWebmapApp: "Um dos outros mapas web utilizados na aplicação",
				radioAnotherWebmap: "outro mapa web",
				btnSelect: "Selecionar",
				lblOr: "ou",
				fieldEnterWebmapId: "Introduza uma id de mapa web",
				btnConfigure: "Configure o mapa"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "A Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "O Meu Conteúdo",
					favoritesLabel: "Os Meus Favoritos"
				},
				title: "Selecionar Mapa Web",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Introduza termo de pesquisa"
			}
		}
	})
);
