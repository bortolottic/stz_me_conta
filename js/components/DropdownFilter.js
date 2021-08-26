class DropdownFilter extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selectionsLength: 0,
			opened: false,
			selectedValues: []
		};

		this.handleClick = this.handleClick.bind(this);
		this.searchInput = React.createRef();
	}

	componentDidMount(){
		var me = this;
		let field = this.props.app.field(this.props.field)	
		field.OnData.bind( () =>{
			if(this.props.type == "date") {
				var rows = field.rows;
				// This is a comparison function that will result in dates being sorted in
				// DESCENDING order.
				rows.sort(function(a, b) {
					var first = a.qText.split('/', 3);
					var second = b.qText.split('/', 3);
					// console.log('dropdown', first[0])
					var date1 = new Date(first[2],first[1],first[0]);
					var date2 = new Date(second[2],second[1],second[0]);
					if (date1 > date2) return -1;
					if (date1 < date2) return 1;
					return 0;
				})
			} 
			this.setState({rows: field.rows});
		});
		field.getData({rows: 10000});	

	}

	componentDidUpdate(prevProps, prevState) {
        if(this.props.isOpen == false && prevProps.isOpen == true) {
           this.clearFilterState();            
        }
    }

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

	filter(evt) {
		// let field = this.props.app.field(this.props.field)
		let selected = this.state.selectedValues;
		evt.field.select([evt.qElemNumber], true).then(() => {
			selected.push(evt.qElemNumber);
			this.setState({selectedValues: selected})
		})
	}

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
	}
	

	handleClick() {
		this.props.open();
	}

	clearFilterState() {
		this.setState({filter: ''});
		this.searchInput.current.value = '';
	} 
	

	search(event) {
		var fieldValue =  event.target.value;
		this.setState({filter: fieldValue});
	  }

	render() {	
		var me = this;
		var list = this.state.rows;
		var classDropDownMenu = "dropdown-menu";
		
		if(this.props.ajusteAltura) {
			classDropDownMenu = "dropdown-menu ajuste-altura";
		} 
			
		


		// search input function
		if(this.state.filter) {
			list = list.filter(function(row) {				
				return row.qText.toLowerCase().indexOf(me.state.filter.toLowerCase()) > -1;
			})
		}     
		

		let options = [];
		if(list) {
			for(var i = 0; i < list.length; i++) {
				let style={};
				switch (list[i].qState) {
					case "O":
						break;
					case "S":
						style={backgroundColor: "green", color: "white"}
						break;
					case "X":
						style={backgroundColor: "lightgray", color: "black"}
						break;
					default:
						style={};
						break;
				}
				
				options.push(
					<li style={style} onClick={this.filter.bind(this, list[i])} class="dropdown-item">
						{list[i].qText}
					</li>
				)
			}
		}
 
		return (
			<div class={this.props.dropdownClass} id={this.props.DropdownContainerId}>
				<div class="dropdown-trigger">
					<button onClick={this.handleClick}>
						{this.props.firstValue }
						<span class="iconify" data-icon="ant-design:down-outline" data-inline="false"></span>
					</button>
				</div>
				<div class={classDropDownMenu} id={this.props.id} role="menu">
					<input ref={this.searchInput} onChange={this.search.bind(this)} type="text" placeholder="Campo de busca" class="inputBusca"></input>
					<ul class="dropdown-content">
						{options}
					</ul>
				</div>
			</div>
		
        )

	}
}