class FeaturedKPI extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0};
	}

	componentDidMount(){

	}

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
    }


	render() {
		var descFiltro = "";
		var classe = "";
		if(this.props.descricaoFiltro == true) {
			descFiltro = <DescricaoFiltro selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app}></DescricaoFiltro>;
			classe = 'home';
		}

		return (
			<div class={"conteudo "+classe}>
				<div class="pesquisas">
					<span class="pesquisas-valor" style={{color: this.props.color}}>{this.props.number}</span>
					{this.props.bottomElement ? 					
						this.props.bottomElement
						:
						""
					}
					{/* {this.props.bottomElement ? 					
						descFiltro
						:
						""
					} */}
					{this.props.descricaoFiltro ? 					
						descFiltro
						:
						""
					}
					{this.props.kpiName ? 
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<span class="pesquisas-descricao">{this.props.kpiName}</span>
							{/* {descFiltro} */}
						</div>
						
						:
						""
					}
				</div>
				
			</div>
        )

	}
}