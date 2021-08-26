//props: app, 
class DescricaoFiltro extends React.Component {

	constructor(props){
		super(props);
		this.state = {
        };
    }

    // fazer um didupdate nos props q recebe, se precisar
	// componentDidMount(){

    // }


	render() {
        var me = this;
        var placeholder = 'regiao/loja';
        if(this.props.activeField) {
            placeholder = this.props.activeField;
        }        
        
        var arrayToRender = ['STZ'];
        if(this.props.selectedFields && this.props.selectedFields.length > 0) {
            var fullString = me.props.selectedFields[0].values;
            var separatedString = fullString.split(',');
            arrayToRender = separatedString;
        }
        // <div class="desc-filtro">
        //         <div>
        //             {arrayToRender.map((value, index) => (
        //                 <p key={index} class="desc-filtro-valor">{value}</p>
        //             ))}g
        //         </div>
        //         <span class="desc-filtro-title">{placeholder}</span>
		// 	 </div>

		return (
                <span style={{textAlign: 'center'}}>
                    {arrayToRender.map((value, index) => (
                        <span key={index} class="desc-filtro-valor">{value}</span>
                    ))}
                </span>
                
        )

	}
}