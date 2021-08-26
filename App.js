'use strict';
var browserHistory = ReactRouter.hashHistory;
var ReactRouter = window.ReactRouter;
var Router = ReactRouterDOM.Router;
var Route = ReactRouterDOM.Route;
var Link = ReactRouter.Link;
var Redirect = ReactRouter.Redirect;
var HashRouter = ReactRouterDOM.HashRouter;
var Link = ReactRouterDOM.Link;
var Redirect = ReactRouterDOM.Redirect;

class App extends React.Component {
  constructor(props) {
    super(props);
    var hash = browserHistory.getCurrentLocation().pathname;
    this.state = { showSideBar: false, hash:hash };
  }

  componentDidMount(){
    
    var me = this;
    browserHistory.listen((resp) => {
      switch (resp.pathname) {
        case "/tipos-insatisfacao/":
          if(this.state.meContaApp) {
            this.state.meContaApp.field("Motivos").clear();
          }
          break;
        default:
          break;
      }
      
      this.setState({hash: resp.hash})
    });

    document.body.onclick  = function(e){
      var $target = $(e.target);
      var DateDropdownIsOpen = $target.closest('#container-filter-date').length > 0;
      var LocationDropdownIsOpen = $target.closest('#container-filter-location').length > 0;
      var SatisfactionDropdownIsOpen = $target.closest('#container-filter-satisfaction').length > 0;
      if (DateDropdownIsOpen == false && LocationDropdownIsOpen == false ) {
        me.setState({dateOpened: false});
        me.setState({locationOpened: false});
      }
      if(SatisfactionDropdownIsOpen == false) {
          me.setState({satisfactionOpened: false});
      }        
    }

    me.getObjects();

  } 

  componentDidUpdate(prevProps, prevState) {
    var me = this;
    if(this.state.meContaApp !== prevState.meContaApp) {
      me.getObjects();  
    }
  }



  onMessage(state){
    window.app = state.meContaApp;
    app.model.enigmaModel.evaluateEx('=Max({<[Data Corte]=>}[Data Corte])').then((res) => {
      state.meContaApp.field("Data Corte").selectValues([res.qNumber]).then(() => {
        state.meContaApp.field("Pesquisa").selectValues(['NPS Ajustado'], true, true).then(() => {
          this.setState(state);
        })
      })
    })
    
  }

  openList(list){
    var state = {};
    state[list] = !this.state[list];
    this.setState(state);
  }

  getObjects() {  
    if(this.state.meContaApp) {
      this.state.meContaApp.getList("CurrentSelections", (reply) => {
        var selections = reply.qSelectionObject.qSelections.slice();
        if(selections.length > 0) {
            var selectedLojasArray = [];
            var selectedRegionsArray = [];

            selections.forEach(selection => {
                var name = selection.qField
                if(name == "Loja - Código") {
                    selectedLojasArray.push({
                        values: selection.qSelected,
                        name: name
                    })
                }
                if(name == "Regional - Sigla") {
                    selectedRegionsArray.push({                         
                        values: selection.qSelected,
                        name: name
                    })                 
                }

                // loja é a preferencia. Se nao tiver loja checa se tem regiao... se n tiver nenhum dos dois o active field fica vazio. 
            });  
            if(selectedLojasArray.length > 0) {
                this.setState({
                    selectedFields: selectedLojasArray.slice(),
                    activeField: 'loja'
                })
            } else {
                if(selectedRegionsArray.length > 0) {
                    this.setState({selectedFields: selectedRegionsArray.slice(),activeField: 'região'});
                } else {
                    this.setState({selectedFields: selectedRegionsArray.slice(),activeField: ''});
                }
            }     
        }else{
            this.setState({
                selectedFields: [],
                activeField: ''
            })
        }                     
    });
    }
 

}

  render() { 
    
    let qlikSocket = ""
    if(window.location.hostname == "localhost") {
      // qvfName="Pesquisa Satisfacao.qvf"
      qlikSocket = <QlikSocketToDesktop qvfName="DOP - NPS Loja.qvf" appName="meContaApp" _onMessage={ this.onMessage.bind(this) } />
    } else {
      qlikSocket = <QlikSocketToDesktop qvfName="d9625e30-58f2-4ef2-b21c-bc6956e3ee71" appName="meContaApp" _onMessage={ this.onMessage.bind(this) } />
    }
    return (
        <HashRouter>
          {this.state.meContaApp ? (
            <div id="app_container">
              <NavBar visibility="hidden" app={this.state.meContaApp} />
              <MainMenu app={this.state.meContaApp} dateIsOpen={this.state.dateOpened} dateDropdownClass={this.state.dateOpened ? "dropdown is-active" : "dropdown"} dateDropdownClick={this.openList.bind(this,'dateOpened')}
               regionIsOpen={this.state.locationOpened} regionDropdownClass={this.state.locationOpened ? "dropdown is-active" : "dropdown"} regionDropdownClick={this.openList.bind(this,'locationOpened')}/>
              <Route path="/" exact render={(props) => {
                return <Redirect to="/dashboard/"/>
              }} />
              <Route path="/dashboard/" render={(props) => <Home selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} props={props} isAuthed={true} />} />
              <Route path="/nps/" render={(props) => <NPS selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} props={props} isAuthed={true} />} />
              <Route path="/tipos-insatisfacao/" render={(props) => <TiposInsatisfacao selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} isOpen={this.state.satisfactionOpened} props={props} isAuthed={true}
              dropdownClass={this.state.satisfactionOpened ? "dropdown is-active" : "dropdown"}  dropdownClick={this.openList.bind(this,'satisfactionOpened')} />}  />
              <Route path="/tmr/" render={(props) => <TMR selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} props={props} isAuthed={true} />}  />
              <Route path="/satisfacao/" render={(props) => <Satisfacao selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} props={props} isAuthed={true} />}  />
              <Route path="/md-insatisfacao-dia/" render={(props) => <MDInsatisfacaoDia selectedFields={this.state.selectedFields} activeField={this.state.activeField} app={this.state.meContaApp} props={props} isAuthed={true} />}  />
            </div>      
          ) : (
            <Loader></Loader>            
          )}
            
          {qlikSocket}
        </HashRouter> 
    )
  }
}

const domContainer = document.querySelector('#mashup_container');
ReactDOM.render(<App/>, domContainer);

window.addEventListener('resize', () => {
  let chartObjects = document.querySelectorAll('.echart-object');
  chartObjects.forEach(function(evt){
    var chart = echarts.getInstanceById(evt.getAttribute('_echarts_instance_'));
    if(chart && chart.resize) {
      chart.resize();
    }
  });  
});

// window.addEventListener("orientationchange", function() {
//   let chartObjects = document.querySelectorAll('.echart-object');
//   chartObjects.forEach(function(evt){
//     var chart = echarts.getInstanceById(evt.getAttribute('_echarts_instance_'));
//     if(chart && chart.resize) {
//       chart.resize();
//     }
//   });  
// });

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}



