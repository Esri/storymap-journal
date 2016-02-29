define(
	 ({
		commonCore: {
			common: {
				add: "Adicionar",
				edit: "Editar",
				save: "Salvar",
				next: "Avançar",
				cancel: "Cancelar",
				back: "Voltar",
				apply: "Aplicar",
				close: "Fechar",
				open: "Abrir",
				start: "Iniciar",
				loading: "Carregando",
				disabledAdmin: "Este recurso foi desabilitado pelo Administrador",
				width: "Largura",
				height: "Altura",
				create: "Criar",
				yes: "Sim",
				no: "Não",
				mystories: "Minhas Histórias"
			},
			inlineFieldEdit: {
				editMe: "Editar-me!"
			},
			builderPanel: {
				panelHeader: "Construtor %TPL_NAME%",
				buttonSaving: "Salvando",
				buttonSaved: "Salvo",
				buttonShare: "Compartilhar",
				buttonSettings: "Configurações",
				buttonHelp: "Ajuda",
				buttonPreview: "Visualizar história",
				tooltipFirstSave: "Isto não está disponível até que seja salvo.",
				tooltipNotShared: "Isto não está disponível até que seja compartilhado",
				tooltipNotShared2: "Sua história não está compartilhada, somente você pode acessá-la.",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangePlural: "Alterações pendentes",
				closeWithPendingChange: "Você tem certeza que deseja confirmar esta ação? Suas alterações serão perdidas.",
				saveError: "Falha ao salvar, tente novamente",
				status1: "A história está compartilhada, mas tem problemas",
				status2: "A história não está compartilhada, mas tem problemas",
				status3: "A história é pública",
				status4: "A história está compartilhada dentro da sua organização",
				status5: "A história é privada",
				status6: "A história ainda não está salva",
				checking: "Verificando",
				fix: "Corrigir"
			},
			saveError: {
				title: "Erro ao salvar a história",
				err1Div1: "A história não pode ser salva, pois você já tem outro item com o mesmo nome.",
				err1Div2: "Modifique o título da sua história e então salve-a.",
				btnOk: "Edite o título da história"
			},
			saveErrorSocial: {
				title: "Atualização de compartilhamento da mídia social",
				panel1: "O visual da sua história na mídia social foi melhorado, mas seu título de item do aplicativo da web do ArcGIS não é o mesmo que o título da sua história.",
				panel1tooltip: "Ao definir um título, resumo e imagem de miniatura, sua história parecerá com isto:",
				panel2:	"Qual título você gostaria de utilizar na mídia social:",
				panel2q1: "Título da história (recomendado)",
				panel2q1tooltip: "Ao escolher esta opção, o título do seu item será modificado para corresponder ao título da sua história e alterações adicionais no construtor serão sincronizadas.",
				panel2q2: "Título do item",
				panel3: "Para melhoria adicional sobre o visual da sua história na mídia social, utilize ${MYSTORIES} para adicionar um resumo e uma imagem de miniatura.",
				panel4: "Não me avisar novamente desta história"
			},
			share: {
				shareTitle: "Compartilhe sua história",
				preview: "Visualizar",
				viewlive: "Visualizar história",
				btnPrivate: "Privado",
				btnPrivateTooltip: "Somente você pode visualizar a história",
				btnOrg: "Organização",
				btnOrgTooltip: "Somente membros da sua organização podem visualizar a história",
				btnPublic: "Público",
				btnPublicTooltip: "Todos podem visualizar a história",
				loadingMessage: "Verificando sua história para erros",
				viewToggle1: "Mostrar conteúdo da história",
				viewToggle2: "Fechar conteúdo da história",
				socialize: "Socializar",
				statusPrivate: "Sua história é privada, somente você pode visualizá-la.",
				statusError: "Há problemas no conteúdo da sua história que serão notáveis para suas leitores. Você pode identificar e corrigir estes problemas abaixo.",
				statusNoErrPrivate: "Compartilhe sua história quando estiver pronto!",
				mystoriesinvite: "Gerenciar todas as suas histórias",
				notavailable1: "Desculpe, o compartilhamento da sua história a partir do Construtor não é suportado, pois este aplicativo não está hospedado no %PRODUCT%.",
				notavailable2: "Desculpe, o compartilhamento da sua história a partir do Construtor não é suportado nesta versão do Portal for ArcGIS (exige 10.4 ou superior).",
				notavailable3: "Você pode compartilhar esta história do %LINK%.",
				notavailable4: "Minhas Histórias",
				notavailable5: "sua página do item",
				notavailable6: "Desculpe, este recurso não é completamente suportado em modo de desenvolvimento. Dependendo do seu cenário de implantação, este recurso pode ser suportado quando implantado.",
				notavailable7: "Tenha certeza de visitar o %MYCONTENT% para confirmar que os mapas e camadas utilizadas na sua história também estão compartilhadas.",
				notavailable8: "Meu Conteúdo",
				mystoriesinvite2: "Para melhoria sobre o visual da sua história em redes sociais, utilize ${MYSTORIES} para adicionar um resumo e uma imagem de miniatura."
			},
			settings: {
				header: "Configurações",
				tabError: "Verifique todas as guias por erros"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Qual layout você deseja utilizar?",
				explainInit: "Você pode alterar o layout a qualquer momento no diálogo de configurações.",
				viewExample: "Visualizar um exemplo ao vivo"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Cabeçalho",
				logoEsri: "Logo da Esri",
				logoNone: "Nenhum logo",
				logoCustom: "Logo personalizado",
				logoCustomPlaceholder: "URL (máx 250x50 pixels)",
				logoCustomTargetPlaceholder: "Clicar pelo link",
				logoSocialExplain: "Personaliza o link do cabeçalho.",
				logoSocialText: "Texto",
				logoSocialLink: "Link",
				lblSmallHeader: "Utilizar cabeçalho compacto (sem subtítulo)"
			},
			header: {
				title: "Edite o título do seu %TPL_NAME%",
				subtitle: "Edite o subtítulo do seu %TPL_NAME%"
			}
		}
	})
);
