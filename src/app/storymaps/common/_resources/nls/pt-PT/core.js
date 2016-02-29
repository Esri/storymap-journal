define(
	 ({
		commonCore: {
			common: {
				add: "Adicionar",
				edit: "Editar",
				save: "Guardar",
				next: "Próximo",
				cancel: "Cancelar",
				back: "Retroceder",
				apply: "Aplicar",
				close: "Fechar",
				open: "Abrir",
				start: "Iniciar",
				loading: "A carregar",
				disabledAdmin: "Esta funcionalidade foi desativada pelo Admnistrador",
				width: "Largura",
				height: "Altura",
				create: "Criar",
				yes: "Sim",
				no: "Não",
				mystories: "As Minhas Histórias"
			},
			inlineFieldEdit: {
				editMe: "Edite-me!"
			},
			builderPanel: {
				panelHeader: "Builder %TPL_NAME%",
				buttonSaving: "Guardar",
				buttonSaved: "Guardado",
				buttonShare: "Partilhar",
				buttonSettings: "Configurações",
				buttonHelp: "Ajuda",
				buttonPreview: "Visualizar história",
				tooltipFirstSave: "Esta funcionalidade não se encontra disponível até que a aplicação seja guardada.",
				tooltipNotShared: "Esta funcionalidade não se encontra disponível até que a aplicação seja partilhada.",
				tooltipNotShared2: "A sua história não é partilhada, apenas você a consegue aceder.",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangePlural: "Alterações pendentes",
				closeWithPendingChange: "Tem a certeza que pretende confirmar esta ação? As suas alterações serão perdidas.",
				saveError: "Falha ao guardar, tente novamente",
				status1: "A história encontra-se partilhada, mas tem problemas",
				status2: "A história não se encontra partilhada, mas tem problemas",
				status3: "A história é pública",
				status4: "A história encontra-se partilhada com a sua organização",
				status5: "A história é privada",
				status6: "A história ainda não está guardada",
				checking: "Verificando",
				fix: "Corrigir"
			},
			saveError: {
				title: "Erro ao guardar a história",
				err1Div1: "A história não pode ser guardada porque já tem outro item com o mesmo nome.",
				err1Div2: "Por favor, modifique o título da sua história e depois guarde-a.",
				btnOk: "Editar o título da história"
			},
			saveErrorSocial: {
				title: "Actualização de partilha de redes sociais",
				panel1: "A aparência da sua storyâ€™s nas redes sociais foi melhorada, mas o título de item da sua aplicação web ArcGIS não é o mesmo título que a sua história.",
				panel1tooltip: "Definindo um título, resumo e imagem miniatura, a sua história irá parecer assim:",
				panel2:	"Que título gostaria de usar nas redes sociais:",
				panel2q1: "Título da história (recomendado)",
				panel2q1tooltip: "Ao escolher esta opção, o título do seu item irá ser modificado para corresponder ao título da sua história e outras alterações que o edifício será sincronizado.",
				panel2q2: "Título de item",
				panel3: "Para melhorar a aparência da sua história nas redes sociais use ${MYSTORIES} para adicionar um resumo ou uma imagem miniatura.",
				panel4: "Não me avise outra vez para esta história"
			},
			share: {
				shareTitle: "Partilhar a sua história",
				preview: "Pré-visualizar",
				viewlive: "Visualizar história",
				btnPrivate: "Privado",
				btnPrivateTooltip: "A história apenas pode ser vista por si",
				btnOrg: "Organização",
				btnOrgTooltip: "Apenas os membros da sua organização podem visualizar a história",
				btnPublic: "Público",
				btnPublicTooltip: "Toda a gente pode visualizar a sua história",
				loadingMessage: "Verificando se há problemas na sua história",
				viewToggle1: "Mostrar conteúdo da história",
				viewToggle2: "Fechar conteúdo da história",
				socialize: "Socializar",
				statusPrivate: "A sua história é privada, apenas pode ser vista por si.",
				statusError: "Existem problemas no conteúdo da sua história que serão visíveis pelos seus leitores. Pode identificar e corrigir esses erros abaixo.",
				statusNoErrPrivate: "Partilhe a sua história quando estiver pronto!",
				mystoriesinvite: "Gerir todas as suas histórias",
				notavailable1: "Lamentamos, a partilha da sua história a partir do Builder não é suportada porque esta aplicação não se encontra alojada em %PRODUCT%.",
				notavailable2: "Lamentamos, a partilha da sua história a partir do Builder não é suportada nesta versão do Portal for ArcGIS (requer a versão 10.4 ou posterior).",
				notavailable3: "Pode partilhar esta história a partir de %LINK%.",
				notavailable4: "As Minhas Histórias",
				notavailable5: "a sua página de item",
				notavailable6: "Lamentamos, esta funcionalidade não é totalmente suportada em modo de desenvolvimento. Dependendo do seu contexto de implementação, esta funcionalidade poderá ser suportada após ser implementada.",
				notavailable7: "Assegure-se que visita %MYCONTENT% para confirmar que os mapas e camadas utilizados na sua história também estão a ser partilhados.",
				notavailable8: "O Meu Conteúdo",
				mystoriesinvite2: "Para melhorar a aparência da sua história nas redes sociais use ${MYSTORIES} para adicionar um resumo e uma imagem miniatura."
			},
			settings: {
				header: "Configurações",
				tabError: "Verifique todos os separadores para ver se existem erros"
			},
			settingsLayout: {
				title: "Layout",
				explain: "Que layout pretende utilizar?",
				explainInit: "Pode alterar o layout em qualquer momento no painel de definições.",
				viewExample: "Ver um exemplo em tempo real"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Cabeçalho",
				logoEsri: "Logótipo Esri",
				logoNone: "Sem logótipo",
				logoCustom: "Logótipo personalizado",
				logoCustomPlaceholder: "URL (máx 250x50 pixeis)",
				logoCustomTargetPlaceholder: "Ligação para clicar",
				logoSocialExplain: "Personalize a ligação do cabeçalho.",
				logoSocialText: "Texto",
				logoSocialLink: "Ligação",
				lblSmallHeader: "Utilizar cabeçalho compacto (sem legenda)"
			},
			header: {
				title: "Editar o título do seu %TPL_NAME%",
				subtitle: "Editar o subtítulo do seu %TPL_NAME%"
			}
		}
	})
);
