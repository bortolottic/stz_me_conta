class ClusterSidebarFilter extends React.Component { 

    constructor(props){
		super(props);
        this.state = {
            active: false,
            visible: false
        };
        this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
        //visualizations = appConfig.visualizationObjects;

        //closeOnBodyClick ->> boolean

        // UIkit.util.on('#filtros', 'show', function () {
        //     qlik.resize();
        // });
    }

    handleClick() {
        this.setState({visible: !this.state.visible})
    }

    haveSelections() {
        this.setState({haveSelections: true});
    }
    dontHaveSelections() {
        this.setState({haveSelections: false});
    }

	render() { 

        let visibleClass = "filtros-container";
        var activeClass = 'enabled';
        let maskVisibility = "hidden";

        if ( this.state.active ) {
            activeClass = ' active';
        }

        if(this.state.visible) {
            visibleClass += " opened";
            maskVisibility = "visible";
        }

        var iconFilterClass = '';
        if(this.state.haveSelections == true) {
            iconFilterClass = 'haveSelections';
        }
        return (
            

            <div class="cluster-sidebar-filter">
                <div class="sidebar-mask" onClick={this.handleClick} style={{visibility: maskVisibility}}></div>
                <div class={"flex-row js-selected-style " + iconFilterClass}>
                    <div class="flex-row padding selection enabled" class={activeClass}>
                        <a onClick={this.handleClick}>
                        <i class="material-icons">filter_list</i>
                        </a>
                        {/* <a onClick={this.handleClick.bind(this)}>
                            <span style={{fontWeight: 500}}>Filtros</span>
                        </a> */}
                        {/* uk-offcanvas="flip: true; esc-close: true; bg-close: {{config.closeOnBodyClick}}; container: false;" */}
                        <div id="filtros" class={visibleClass}>
                            {/* <a style={{position: "absolute", top: "13px", right: "16px"}} onClick={this.handleClick}>
                                <span class="iconify filters" style={{ fontSize: "19px", color: "#7b7b7b"}} data-icon="ant-design:close-outline" data-inline="false"></span>
                            </a> */}
                            <div class="uk-offcanvas-bar" style={{display:'flex', flexFlow: 'column nowrap', overflow: 'auto'}}>
                                <span style={{fontSize: "1.8vh", paddingBottom: "5px", borderBottom: "1px solid #3d3d3d", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>SELEÇÕES ATUAIS
                                <a onClick={this.handleClick}>
                                <span class="iconify filters" style={{ fontSize: "19px", color: "#7b7b7b"}} data-icon="ant-design:close-outline" data-inline="false"></span>
                                </a></span>
                                <ClusterCurrentSelections app={this.props.app} haveSelections={this.haveSelections.bind(this)}
                                dontHaveSelections={this.dontHaveSelections.bind(this)}></ClusterCurrentSelections>
                                <ClusterMasterFilters app={this.props.app}></ClusterMasterFilters>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>


        )


    }


    
}