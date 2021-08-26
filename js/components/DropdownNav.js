var browserHistory = ReactRouter.browserHistory;

class DropdownNav extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0};
		this.changePath = this.changePath.bind(this);
	}

	componentDidMount(){
		// console.log(this.props);
	}

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

	// antigo changepath sem a navegacao direto pra loja ou pra data das tabelas 
	// changePath(path) {
	// 	if(path == '/tipos-insatisfacao') {
	// 		browserHistory.push(path);
	// 	} else {
	// 		if(isEmpty(this.props.locationParams.match.params)) {
	// 			browserHistory.push(path);
	// 		} else {
	// 			browserHistory.push(path+this.props.locationParams.location.pathname);
	// 		}
	// 	}
	// }

	changePath(path) {
		if(path == '/tipos-insatisfacao' || this.props.locationParams.location.pathname == '/nps' || this.props.locationParams.location.pathname == '/satisfacao' || this.props.locationParams.location.pathname == '/tmr' || this.props.locationParams.location.pathname == '/md-insatisfacao-dia' ) {
			browserHistory.push(path);
		} else {
			browserHistory.push(path+this.props.locationParams.location.pathname);
		}
	}

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
	}

	render() {

		let dropdowns = [];
		for(var i = 0; i < this.props.options.length; i++) {
			let path = this.props.options[i].path;
			dropdowns.push(
				<li><a
					onClick={(props) => {this.changePath(path)}}
					class={this.props.activeNav === this.props.options[i].name ? 'active dropdown-nav-item' : 'dropdown-nav-item'}
					>{this.props.options[i].name}</a>
				</li>
			)
		}

		return (
            <div class="dropdown">
				<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.activeNav}<span class="caret"></span></button>
				<ul class="dropdown-nav dropdown-menu" name="dropdown-menu">
					{dropdowns}
				</ul>
            </div>
        )

	}
}