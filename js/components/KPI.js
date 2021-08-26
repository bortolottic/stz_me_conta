class KPI extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0};
	}

	componentDidMount(){
    }
    
    componentDidUpdate() {
    }

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
    }


	render() {
        let valueClassName = "box-dashboard-valor";
        if(this.props.class) {
            valueClassName += " "+this.props.class;
        }

        let containerClass = "";

        switch (this.props.iconPosition) {
            case "top":
                containerClass = "box-dashboard-satisf";
                containerClass = "box-dashboard";
                break;
            default:
                containerClass = "box-dashboard";
                break;
        }

		return (
            <div class={containerClass}>
                <span class="iconify" data-icon={this.props.icon} color={this.props.iconColor} data-inline={this.props.inline}></span>
                <span class={valueClassName} style={{color:this.props.color}} >{this.props.value}</span>
                <span class="box-dashboard-desc">{this.props.desc}</span>
            </div>
        )

	}
}