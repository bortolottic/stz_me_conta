var browserHistory = ReactRouter.browserHistory;

class DropdownSkipPage extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0};
		this.changePath = this.changePath.bind(this);
	}

	componentDidMount(){

	}


	changePath(path) {
        browserHistory.push(path);
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
            <div class="dropdown skip">
				<button class="btn dropdown-toggle" type="button" data-toggle="dropdown">{this.props.activeNav}<span class="caret"></span></button>
				<ul class="dropdown-nav dropdown-menu skip" name="dropdown-menu">
					{dropdowns}
				</ul>
            </div>
        )

	}
}