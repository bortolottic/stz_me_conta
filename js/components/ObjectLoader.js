class ObjectLoader extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

    
	render() {
		return (
            <div class="object-loader">
                <svg width="200" height="200" viewBox="0 0 100 100">
                    <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                </svg>          
            </div>
        )

	}
}