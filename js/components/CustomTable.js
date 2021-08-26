var browserHistory = ReactRouter.hashHistory;

class CustomTable extends React.Component {

	constructor(props){
		super(props);
        this.state = {selectionsLength: 0};
        this.onRowClick = this.onRowClick.bind(this);
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

    onRowClick(props) {
        this.props._onRowClick(props);
    }
      
	render() {
        var data = this.props.data;
        if(this.props.orderData == true) {
        // ordenando a data em ordem crescente
        data.sort(function(a, b) {
        var first = a[0].value.split('/', 3);
        var second = b[0].value.split('/', 3);
        var date1 = new Date(parseInt(first[2]), parseInt(first[1]),parseInt(first[0]));
        var date2 = new Date(parseInt(second[2]), parseInt(second[1]), parseInt(second[0]));
        if (date1 > date2) return -1;
        if (date1 < date2) return 1;
        return 0;
      })
      
        }

        let rows = [];
        if(this.props._onRowClick) {
            for(var i = 0; i < data.length; i++) {
                rows.push( <CustomTableRow _onRowClick={(props) => {this.onRowClick(props)}} data={data[i]}/>)
            }
        } else {
            
            for(var i = 0; i < data.length; i++) {
                rows.push( <CustomTableRow data={data[i]}/>)
            }
        }

      
       

		return (
            <div class="table">
                {this.props.data.length == 0 ?
                    <h2 style={{
                        fontFamily: "Nunito Sans, sans-serif",
                        backgroundColor: "transparent",
                        color: "#d9124a",
                        textAlign: "center"
                    }}>Nenhum dado para a seleção realizada</h2>
                    :
                    
                    <table class="responsive_table flush-left"  id={this.props.id}>
                        <tbody> 
                            {rows}
                        </tbody>
                    </table>
                }
                
            </div>
        )

	}
}