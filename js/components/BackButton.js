var browserHistory = ReactRouter.hashHistory;

class BackButton extends React.Component { 
    constructor(props){
		super(props);
        this.state = {};
	}

	componentDidMount(){
    }

    clear() {
        if(this.props.fieldToClear) {
            this.props.app.field(this.props.fieldToClear).clear();
        }
    }
    
	render() {
        return (
            <Link to={this.props.path} class="back-btn" onClick={this.clear.bind(this)}>
                <span class="iconify" data-icon="ant-design:arrow-left-outline" data-inline="false" ></span>
                <span class="text">VOLTAR</span>
            </Link>
        )
    }
}

