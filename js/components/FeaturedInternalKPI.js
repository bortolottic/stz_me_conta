class FeaturedInternalKPI extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}


	render() {

		return (
			<div class="conteudo">
				{/* <div class="pesquisas"> */}
					<span class="pesquisas-descricao feat-kpi-interno"><strong>{this.props.number}</strong> {this.props.name}</span>
					{/* <div class="breadcrumb-container">
						<BreadCrumb app={app} breadlevel="NPS" />
						<BreadCrumb app={app} breadlevel="PR" />
						<BreadCrumb app={app} breadlevel="Detalhar por Dia" />
						<BreadCrumb app={app} breadlevel="26/02" />
					</div> */}
					{/* <span class="pesquisas-valor">45%</span>
					<div class="pesquisas-descricao">
						<DropdownNav />
					</div> */}
				{/* </div> */}
			</div>
        )

	}
}