define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Mapa",
				lblLocation: "Local",
				lblContent: "Conteúdo",
				lblPopup: "Janela Pop-up",
				lblControls: "Extras",
				lblOverview: "Vista Geral do Mapa",
				lblLegend: "Legenda",
				lblGeocoder: "Localizador de Endereços ou Locais",
				tooltipGeocoder: "Permite aos seus utilizadores encontrar endereços e locais nos seus mapas.",
				loadingTitle: "Carregando título",
				entry: "Entrada",
				entries: "Entradas",
				section: "Secção",
				sections: "Secções",
				and: "e",
				action: "Ação na secção",
				actions: "Ação nas secções",
				originalWebmap: "Mapa utilizado para publicar o %TPL_NAME%",
				browseMaps: "Selecionar um mapa",
				createMap: "Criar um mapa",
				current: "Mapa atual",
				select: "Selecionar ou criar um mapa",
				newMap: "Mapa web recém-selecionado",
				newCreatedMap: "Mapa web recém-criado",
				webmapDefault: "Padrão de mapa",
				customCfg: "Configuração personalizada",
				tooltipLocation: "Defina a localização em que o mapa exibido.",
				tooltipContent: "Definir as camadas visíveis.",
				tooltipPopup: "Escolher um pop-up que irá ser aberto quando este mapa for exibido.",
				tooltipOverview: "Exiba um pequeno mapa de vista geral juntamente com o mapa principal.",
				tooltipLegend: "Exiba a legenda de mapa no mapa, útil quando o mapa tem muitas camadas e símbolos.",
				mapCfgInvite: "Utilize estes controlos para configurar o seu mapa",
				lblLocationAlt: "Herdado do primeiro mapa",
				tooltipLocationAlt: "A localização deste mapa é sincronizada para o primeiro mapa da série. Para alterar este comportamento para a sua série, vá a Definições > Opções de Mapa."
			},
			configure: {
				btnReset: "Repor definições padrão",
				btnCancel: "Cancelar",
				tocTitle: "Conteúdo do mapa",
				tocExplain: "Escolha as camadas que serão exibidas.",
				tocNoData: "Nenhuma camada pode ser configurada.",
				tocSave: "Guardar conteúdo do mapa",
				extentTitle: "Localização do Mapa",
				extentExplain: "Mova e amplie o mapa para definir como este aparecerá aos leitores.",
				extentSave: "Guardar localização do Mapa",
				popupTitle: "Mapa pop-up",
				popupExplain: "Clique num elemento para abrir o pop-up que pretende exibir.",
				popupSave: "Guarde a configuração pop-up",
				hintNavigation: "Navegação no mapa desativada."
			},
			editor: {
				loading: "Por favor aguarde enquanto o editor de mapas está a carregar",
				newTitle: "Criar um novo mapa",
				editTitle: "Editar mapa",
				titleLbl: "Título",
				titlePh: "Título do mapa...",
				folderLbl: "O mapa será criado no mesmo mapa que a história.",
				creating: "A criar o mapa",
				saving: "A guardar o mapa",
				success: "Mapa guardado",
				successCreate: "Mapa criado",
				cancelTitle: "Rejeitar alterações não guardadas?",
				errorDuplicate: "Já existe um mapa com esse título.",
				errorCreate: "Impossível criar mapa. Por favor, tente novamente.",
				errorSave: "Não é possível guardar mapa. Por favor, tente novamente.",
				notavailable1: "Lamentamos, criar ou editar um mapa não é suportado no Firefox devido a uma limitação técnica. Poderá querer construir a sua história utilizando outro navegador web ou optar pela seguinte resolução alternativa.",
				notavailable2: "Lamentamos, criar ou editar um mapa não é suportado porque a aplicação do story map não se encontra alojada em %PRODUCT%. Por favor contacte o seu administrador ArcGIS para obter mais informações.",
				notavailable3: "Lamentamos, criar ou editar um mapa não é suportado nesta versão do Portal for ArcGIS (requer a versão 10.4 ou posterior). Por favor contacte o seu administrador ArcGIS para obter mais informações.",
				notavailable4: "Pode criar um mapa utilizando %MV%, e depois regressar aqui para o adicionar à sua história.",
				notavailable5: "Pode criar um mapa utilizando %MV%, e depois regressar aqui e %apply% para ver as alterações.",
				notavailable6: "visualizador de mapas",
				notavailable7: "recarregar o mapa"
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
				title: "Selecionar um mapa",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Introduza termo de pesquisa ou a ID de mapa web..."
			}
		}
	})
);
