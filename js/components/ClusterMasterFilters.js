class ClusterMasterFilters extends React.Component { 

    constructor(props){
		super(props);
		this.state = {
            filterActive: false
        };
        this.openFilter = this.openFilter.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
	}

	componentDidMount(){
        this.renderFilters();
    }

    renderFilters() {
        var app = this.props.app;
        app.getList('masterobject', (reply) => {
            var objects = reply.qAppObjectList.qItems;
            var filterObjects = [];
            for (var i = 0; i < objects.length; i++) {
                for (var n = 0; n < objects[i].qMeta.tags.length; n++ ) {
                    if (objects[i].qMeta.tags[n].indexOf('Filtro') != -1) {
                        filterObjects.push(objects[i]);
                    }
                }
            };

            this.setState({filters: filterObjects});
            app.destroySessionObject(reply.qInfo.qId);
        });
    };

    // criandoBotoesDeFiltro(filterObjects) {
    //     var listaBotoes = [];

    //     listaBotoes.push(
    //         <div class="style-closeBtn js-closeBtn">
    //             <i class="fal fa-step-backward"></i>
    //             <span>Voltar</span>
    //         </div>
    //     );

    //     for (var i = 0; i < filterObjects.length; i++) {
    //         listaBotoes.push(<FilterPane app={this.props.app} filterObject={filterObjects[i]}></FilterPane>);
    //     }

    //     this.setState({
    //         listaWhatever: listaBotoes
    //     })  
    // }

    // eventosDeClick() {
    //     //abre a div com o filtro do qlik dentro
    //     $(".js-filtroBtn").click(function (evt) {
    //         filtros = document.querySelectorAll('.js-filtro');
    //         closeBtn = document.querySelector('.js-closeBtn')
    //         for (i = 0; i < filtros.length; i++) {
    //             filtros[i].classList.remove('ativo')
    //             var att = evt.currentTarget.getAttribute('value');
    //             document.getElementById(att).classList.add('ativo')
    //         }
    //         closeBtn.classList.add('ativo');
    //         qlik.resize();
    //     });

    //     //fecha a div com o filtro do qlik dentro
    //     $(".js-closeBtn").click(function (evt) {
    //         filtros = document.querySelectorAll('.js-filtro');
    //         closeBtn = document.querySelector('.js-closeBtn')
    //         for (i = 0; i < filtros.length; i++) {
    //             filtros[i].classList.remove('ativo')
    //             qlik.resize();
    //         }
    //         closeBtn.classList.remove('ativo');
    //     });
    // }

    openFilter(params) {
       this.setState({filterActive: true})
    }

    closeFilter(params) {
        this.setState({filterActive: false})
     }

	render() { 
        let filterElements = [];
        if(this.state.filters) {
            for(var i = 0; i < this.state.filters.length; i++) {
                filterElements.push(<FilterPane _onClickMessage={this.openFilter} app={this.props.app} filterObject={this.state.filters[i]}></FilterPane>);
            }
        } else {
            <div>Nenhum filtro foi configurado</div>
        }

        
        return (
            <div class="filter-container cluster-master-filters" id="master-filters">
                {this.state.filterActive ?
                    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <button class="filter-back-btn" onClick={this.closeFilter}>voltar</button>
                        <div id="current-filter" style={{ flex: "1" }}></div>    
                    </div>
                    :
                    filterElements
                }
                
            </div>
        )

    }


    
}