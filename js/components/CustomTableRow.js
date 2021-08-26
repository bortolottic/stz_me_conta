var browserHistory = ReactRouter.hashHistory;

class CustomTableRow extends React.Component {

	constructor(props){
		super(props);
        this.state = {selectionsLength: 0};
        this.handleClick = this.handleClick.bind(this);
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
    handleClick(props) {
        if(this.props._onRowClick) {
            this.props._onRowClick(props);
        }
    }
      
	render() {    
        let columns = [];
        for(var i = 0; i < this.props.data.length; i++) {
            if(i == 0) {
                columns.push(<td class="t-data first" colspan="1" style={{ color: this.props.data[i].color }}>{this.props.data[i].value}</td>)
            } else {
                columns.push(<td class="t-data data" colspan="1" style={{ color: this.props.data[i].color }}>{this.props.data[i].value}</td>)
            }

            if(i==this.props.data.length-1 && this.props._onRowClick) {
                // columns.push(<td class="t-button" onClick={(props) => {this.handleClick(...this.props.data)}}><span class="iconify" data-icon="ant-design:arrow-right-outline" data-inline="false"></span></td>);
                columns.push(<td class="t-button"><span class="iconify" data-icon="ant-design:arrow-right-outline" data-inline="false"></span></td>);
            }
        }



		return (

            <tr onClick={(props) => {this.handleClick(...this.props.data)}}>
                {columns}
            </tr>

        )

	}
}