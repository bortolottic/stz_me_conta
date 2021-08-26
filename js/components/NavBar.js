var HashRouter = ReactRouterDOM.HashRouter;
var Link = ReactRouterDOM.Link;
var NavLink = ReactRouterDOM.NavLink;

class NavBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selectionsLength: 0,
			visibility: this.props.visibility
		};
	}

	componentDidMount(){
	}

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

	handleClick() {
		$('.menu-lateral').removeClass('opened');
		$('.menu-item').addClass('menu-hide');
		$('.menu-item').removeClass('menu-show');
		$('#navbar .sidebar-mask').css('visibility','hidden');
	}

	render() {
		return (
			<div class="container" id="navbar">
				<div class="sidebar-mask" style={{visibility: this.state.visibility}} onClick={this.handleClick.bind(this)}>
					<div id="mySidenav" class="menu-lateral">
						<button class="close menu-item" onClick={this.handleClick.bind(this)}>
							<span class="iconify" data-icon="ant-design:menu-fold-outline" data-inline="false"></span>
							FECHAR
						</button>
						{/* <div class="me-conta menu-item"> */}
							<NavLink activeClassName="active" to="/" class="me-conta menu-item">
								<span class="iconify" data-icon="ant-design:message-outline" data-inline="false"></span>
								<div>
									<span>Me </span>
									<span class="me-conta-custom">Conta</span>
								</div>
							</NavLink>
						{/* </div> */}

						<NavLink activeClassName="active" to="/dashboard/" class="menu-item">
							<span class="iconify" data-icon="ant-design:home-outline" data-inline="false"></span>
							DASHBOARD
						</NavLink>
						<NavLink activeClassName="active" to="/nps/" class="menu-item">
							<span class="iconify" data-icon="ant-design:notification-outline" data-inline="false"></span>
							NPS
						</NavLink>
						{/* <NavLink activeClassName="active" to="/satisfacao/" class="menu-item">
							<span class="iconify" data-icon="ant-design:smile-outline" data-inline="false"></span>
							SATISFAÇÃO
						</NavLink> */}
						<NavLink activeClassName="active" to="/tmr/" class="menu-item">
							<span class="iconify" data-icon="ant-design:clock-circle-outline" data-inline="false"></span>
							TMR
						</NavLink>
						<NavLink activeClassName="active" to="/md-insatisfacao-dia/" class="menu-item">
							<span class="iconify" data-icon="ant-design:dislike-outline" data-inline="false"></span>
							MD DETRATORES DIA
						</NavLink>
						<NavLink activeClassName="active" to="/tipos-insatisfacao/" class="menu-item">
							<span class="iconify" data-icon="ant-design:tags-outline" data-inline="false"></span>
							TIPOS DE INSAT.
						</NavLink>
					</div>				
				
				</div>


			</div>

			
  
		)

	}
}