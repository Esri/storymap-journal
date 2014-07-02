define(
	 ({
		common: {
			common: {
				edit: "Editar"
			},
			inlineFieldEdit: {
				editMe: "Editar-me !"
			},
			builderPanel: {
				panelHeader: "Construtor %TPL_NAME%",
				buttonSave: "SALVAR",
				buttonShare: "COMPARTILHAR",
				buttonSettings: "CONFIGURAÇÕES",
				buttonHelp: "AJUDA",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não salva",
				unSavedChangePlural: "alterações não salvas",
				popoverSaveWhenDone: "Não esqueça de salvar ao finalizar",
				closeWithPendingChange: "Tem certeza que deseja confirmar a ação ? Suas alterações serão perdidas.",
				ok: "Ok",
				savingApplication: "Salvando aplicativo",
				saveError: "Falha ao salvar, tente novamente",
				saveError3: "O título não pode estar vazio",
				// TODO
				signIn: "Registre-se com uma conta em",
				shareStatus1: "O aplicativo não está salvo",
				shareStatus2: "O aplicativo está publicamente compartilhado",
				shareStatus3: "O aplicativo está compartilhado dentro da organização",
				shareStatus4: "O aplicativo não está compartilhado"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Título",
				addPopupTitle: "Adicionar",
				addPopupDescription: "Adiciona uma nova visualização na sua série.",
				addPopupButton: "ADICIONAR",
				// Edit
				editPopupTitle: "Editar",
				editPopupDescription: "Edita a visualização selecionada",
				editPopupButton: "APLICAR",
				// Add/Edit
				addEditPopupCancelButton: "CANCELAR",
				addEditPopupMyContentBtn: "Selecionar do meu conteúdo",
				addEditPopupConfigureWebMapBtn: " Configurar"
			},
			share: {
				firstSaveTitle: "Aplicativo salvo com sucesso",
				firstSaveHeader: "O aplicativo agora está salvo no ArcGIS Online. Leia as seguintes respostas para perguntas frequentes.",
				firstSaveA1: "Se você não estiver familiarizado com ArcGIS Online ou deseja um atalho para acessar a interface de criação, você pode salvar o seguinte link: %LINK1%",
				firstSaveA1bis: "O aplicativo também pode ser encontrado na sua <a href='%LINK2%' target='_blank'>pasta de conteúdo do ArcGIS Online</a>.",
				firstSaveQ2: "Meu aplicativo está compartilhado?",
				firstSaveA2: "Atualmente o aplicativo não está compartilhado. Para compartilhá-lo, utilize o botão COMPARTILHAR.",
				shareTitle: "Compartilhar aplicativo",
				sharePrivateHeader: "O aplicativo não está compartilhado, gostaria de compartilhá-lo?",
				sharePrivateBtn1: "Compartilhar publicamente",
				sharePrivateBtn2: "Compartilhar com minha Organização",
				sharePrivateWarning: "O compartilhamento %WITH% foi desabilitada, pois você não é o proprietário do <a href='%LINK%' target='_blank'>mapa da web</a>.",
				sharePrivateWarningWith1: "publicamente",
				sharePrivateWarningWith2: "publicamente e com a Organização",
				sharePrivateProgress: "Compartilhamento em progresso...",
				sharePrivateErr: "Falha ao compartilhar, tente novamente ou",
				sharePrivateOk: "Compatilhando atualizados com sucesso, carregando...",
				sharePreviewAsUser: "Visualizar",
				shareHeader1: "Seu aplicativo é <strong>publicamente acessível</strong>.",
				shareHeader2: "O aplicativo pode ser acessado por membros da sua organização (é necessário login).",
				shareLinkHeader: "Compartilhe seu aplicativo com seu público",
				shareLinkOpen: "ABRIR",
				shareQ1Opt1: "Como faço para manter o aplicativo privado?",
				shareQ1Opt2: "Como faço para manter o aplicativo privado ou compartilhá-lo publicamente?",
				shareA1: "Utilize %SHAREIMG% on <a href='%LINK1%' target='_blank'>a página de item de aplicativo</a>. Se você também desejar cancelar o compartilhamento do mapa da web, utilize <a href='%LINK2%' target='_blank'>a página de item do mapa da web</a>.",
				shareA1bis: "Se você também desejar cancelar o compartilhamento do Serviço de Feição, utilize <a href='%LINK1%' target='_blank'>a página de item do Serviço de Feição</a>.",
				shareQ2: "Como edito o aplicaitvo posteriormente?",
				shareQ2bis: "Como eu volto para a criação de interface?",
				shareA2div1: "Salve e reutilize a link seguinte %LINK1% ou utilize <a href='%LINK2%' target='_blank'>a página de item do aplicativo</a>.",
				shareA2div2: "Como o proprietário do aplicativo, quando você está conectado no ArcGIS.com, o aplicativo inclui um botão para abrir o construtor interativo:",				
				shareQ3: "Onde os dados estão armazenados?",
				shareA3: "A configuração do aplicativo é armazenada <a href='%LINK1%' target='_blank'>neste item de mapa da web</a> e <a href='%LINK2%' target='_blank'>neste item de aplicativo da web</a>. Se você utilizou importação do Flickr, Picasa, Facebook ou YouTube, suas imagens e vídeos permanecerão armazenados lá e não serão duplicados no ArcGIS Online.",
				learnMore: "Obtenha mais informações",
				close: "Fechar"
			},
			settings: {
				header: "Configurações do aplicativo",
				cancel: "Cancelar",
				apply: "Aplicar",
				tabError: "Verifique por erros em todas as guias"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Qual esquema você deseja utilizar?",
				explainInit: "Alterações serão possíveis através do diálogo de configuração.",
				selected: "Layout selecionado",
				select: "Selecionar este layout"
			},
			settingsTheme: {
				title: "Tema",
				explain: "Escolha um tema do aplicativo ou defina suas próprias cores.",
				label: "Cores do plano de fundo do painel lateral e cabeçalho"
			},
			settingsHeader: {
				title: "Cabeçalho",
				explain: "Personalize o logo do cabeçalho (máximo de 250 x 50px).",
				logoEsri: "Logo da Esri",
				logoNone: "Nenhum logo",
				logoCustom: "Logo personalizado",
				logoCustomPlaceholder: "URL da Imagem",
				logoCustomTargetPlaceholder: "Clicar pelo link",
				logoSocialExplain: "Personalizar o link no cabeçalho superior direito.",
				logoSocialText: "Texto",
				logoSocialLink: "Link",
				logoSocialDisabled: "Este recurso foi desabilitado pelo Administrador"
			},
			mediaSelector: {
				lblMap: "Mapa",
				lblPicture: "Figura",
				lblVideo: "Vídeo",
				lblExternal: "Página externa"
			},
			webMapSelector: {
				radioCurrentWebMap: "Mapa da web atual",
				radioWebmapApp: "Um dos outros mapas da web utilizados no aplicativo",
				radioAnotherWebmap: "Outro mapa da web",
				btnSelect: "Selecionar",
				lblOr: "ou",
				fieldEnterWebmapId: "Insira um Id de mapa da web",
				btnConfigure: "Configurar o Mapa"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Minha Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Meu Conteúdo",
					favoritesLabel: "Meus Favoritos"
				},
				title: "Selecionar Mapa da Web",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Inserir termo de pesquisa"
			}
		}
	})
);
