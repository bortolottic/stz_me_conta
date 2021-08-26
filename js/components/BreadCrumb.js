class BreadCrumb extends React.Component { 

    constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
	}

	render() { 
        return (
            <div class="breadcrumbs">
                { this.props.link ? (
                    <Link to={this.props.link}>
                        {this.props.breadlevel}
                    </Link>
                ) : 
                <p>
                    {this.props.breadlevel}
                </p>
                }
                
                <img src="./images/breadcrumb-right.png" />                
            </div>
        )
    }


    
}