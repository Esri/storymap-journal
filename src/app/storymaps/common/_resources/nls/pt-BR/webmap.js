﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mapa",
				lblLocation: "Local",
				lblContent: "Conteúdo",
				lblPopup: "Pop-up",
				lblControls: "Extras",
				lblOverview: "Mapa de Visão Geral",
				lblLegend: "Legenda",
				loadingTitle: "Carregando título",
				entry: "Entrada",
				entries: "Entradas",
				section: "Seção",
				sections: "Seções",
				and: "e",
				action: "Ação na seção",
				actions: "Ação nas seções",
				originalWebmap: "Mapa utilizado para publicar o %TPL_NAME%",
				browseMaps: "Selecionar um mapa",
				createMap: "Criar um mapa",
				current: "Mapa atual",
				select: "Selecione ou crie um mapa",
				newMap: "Mapa recentemente selecionado",
				newCreatedMap: "Mapa criado recentemente",
				webmapDefault: "Mapa padrão",
				customCfg: "Configuração personalizada",
				tooltipLocation: "Define o local que este mapa aparecerá.",
				tooltipContent: "Define a visibilidade das camadas.",
				tooltipPopup: "Escolha um pop-up que será aberto quando este mapa for exibido.",
				tooltipOverview: "Exibe um pequeno mapa de visão geral junto com o principal mapa.",
				tooltipLegend: "Exibe a legenda no mapa, útil quando o mapa tem muitas camadas e símbolos.",
				mapCfgInvite: "Utilize estes controles para configurar o Mmapa",
				lblLocationAlt: "Herdado do primeiro mapa",
				tooltipLocationAlt: "Esta localização do mapa está sincronizada para o primeiro mapa na série. Para mudar este comportamento para sua série vá até  Configurações > Opções do Mapa."
			},
			configure: {
				btnReset: "Redefinir",
				btnCancel: "Cancelar",
				tocTitle: "Conteúdo do mapa",
				tocExplain: "Seleciona quais camadas serão msotradas.",
				tocNoData: "Nenhuma camada pode ser configurada.",
				tocSave: "Salvar conteúdo do mapa",
				extentTitle: "Localização do mapa",
				extentExplain: "Move e amplia o mapa para definir seu visual para os leitores.",
				extentSave: "Salvar Localização do Mapa",
				popupTitle: "Pop-Up do Mapa",
				popupExplain: "Clique em uma feição para abrir o pop-up que deseja exibir.",
				popupSave: "Salve a configuração do pop-up",
				hintNavigation: "A navegação do mapa está desabilitada."
			},
			editor: {
				loading: "Aguarde enquanto o editor de mapa estiver carregando",
				newTitle: "Criar novo mapa",
				editTitle: "Editar mapa",
				titleLbl: "Título",
				titlePh: "Título do mapa...",
				folderLbl: "O mapa será criado na mesma pasta que a história.",
				creating: "Criando o mapa",
				saving: "Salvando o mapa",
				success: "Mapa salvo",
				successCreate: "Mapa criado",
				cancelTitle: "Descartar quaisquer alterações não salvas?",
				errorDuplicate: "Você já tem um mapa com este título",
				errorCreate: "Não foi possível criar o mapa. Tente novamente.",
				errorSave: "Não foi possível salvar o mapa. Tente novamente.",
				notavailable1: "Desculpe, a criação ou edição de um mapa não é suportada no Firefox devido a uma limitação técnica. Você pode desejar construir sua história utilizando um navegador da web diferente ou utilizar a seguinte solução provisória.",
				notavailable2: "Desculpe, a criação ou edição de um mapa não é suportada já que o aplicativo de mapa da história não está hospedado no %PRODUCT%. Entre em contato com seu administrador do ArcGIS para mais informações.",
				notavailable3: "Desculpe, a criação ou edição de um mapa não é suportada nesta versão do Portal for ArcGIS (exige 10.4 ou posterior). Entre em contato com seu administrador do ArcGIS para mais informações.",
				notavailable4: "Você pode criar um mapa utilizando %MV%, então voltar aqui para adicioná-lo na sua história.",
				notavailable5: "Você pode editar o mapa utilizando %MV%, então voltar aqui e %apply% para visualizar suas alterações.",
				notavailable6: "visualizador de mapa",
				notavailable7: "recarregar o mapa"
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
				title: "Selecionar um mapa",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Insira o termo de pesquisa ou ID do mapa da web..."
			}
		}
	})
);
