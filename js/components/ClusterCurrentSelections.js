class ClusterCurrentSelections extends React.Component { 

    constructor(props){
		super(props);
		this.state = {
            selectedFields: []
        };

        this.getObjects = this.getObjects.bind(this);
	}

	componentDidMount() {
        this.getObjects();
    }

    limpar(field) {
        this.props.app.field(field).clear();
    }

    clearFilters() {
        if (this.state.selectedFields.length > 0) {
            this.props.app.clearAll();
        }
    }

    getObjects() {
        var me = this;
        this.props.app.getList("CurrentSelections", (reply) => {
            var selections = reply.qSelectionObject.qSelections;
            if(selections.length > 0) {
                me.props.haveSelections();
            } else {
                me.props.dontHaveSelections();
            }
            let selectedFieldsArray = []
            selections.forEach(_ => {
                let name = _.qField
                selectedFieldsArray.push({
                    values: _.qSelected,
                    field: _.qField,
                    name: name
                })
            });
            this.setState({
                selectedFields: selectedFieldsArray
            })
        });
    }


    render() { 

        var activeFilters = "";
        var currentSelection = [];

        if(this.state.selectedFields.length > 0) {
            for(var i = 0; i < this.state.selectedFields.length; i++) {
                let selection = this.state.selectedFields[i];
                currentSelection.push(
                    <div class="selected-block" >
                        <div class="current-information">
                            <span class="current-title-span">{selection.name}</span>
                            <div class="filter-items">
                                <div>
                                    <div>{selection.values}</div>
                                </div>  
                                <button class="clear-btn" onClick={() => {this.limpar(selection.field)}}>
                                    <span class="iconify" data-icon="ant-design:delete-outline" data-inline="false"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
            activeFilters = <div id="filtros-ativos">{currentSelection}</div>;

        } else {
            activeFilters = <div class="nenhum-filtro">Nenhum filtro aplicado</div>;
        }

        return (
            <div class="cluster-current-selections">
                {activeFilters}
            </div>
        )
    }


    
}