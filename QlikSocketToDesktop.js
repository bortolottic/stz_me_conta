class QlikSocketToDesktop extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
			this.openQlikConnection();
	}

	openQlikConnection(){
		var me = this;
    
    var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
    var config = {
      host: window.location.hostname,
      prefix: prefix,
      port: window.location.port,
      isSecure: window.location.protocol === "https:"
    };
    require.config( {
      baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
    } );

    require( ["js/qlik"], function ( qlik ) {
      qlik.setOnError( function ( error ) {
        me.props._onMessage({errorMessage: 'Não foi possivel establecer conexão com o Qlik Engine: ' + error, app: null});
      } );
      //open apps -- inserted here --
      var app = qlik.openApp( me.props.qvfName, config );

      app.getList("CurrentSelections", (reply) => {
          var state={ errorMessage: null};
          state[me.props.appName] = app;
          app.destroySessionObject(reply.qInfo.qId);
          me.props._onMessage(state);
      });
    } );


	}

	render() {
    return <span/>;
  }
}
