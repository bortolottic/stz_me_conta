class Loader extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
    }
    

    createMarkup() { return {__html: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="22.6164mm" height="30.6232mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.37 1062.06"> 
           <defs>  
             <mask id="clip-path">
             <metadata id="CorelCorpID_0Corel-Layer"/>     
             <rect fill="white" class="rectClip" x="0" y="0" width="800" height="1100" stroke="0"></rect>
             </mask>
             </defs>
             <g id="Camada_x0020_1">     
             <polygon fill="#27252f" points="-0,842.26 -0,272.73 511.44,272.73 "/>    
             <polygon fill="#27252f" points="274.3,800.23 770.58,800.23 770.58,242.29 "/>    
             <polygon fill="#27252f" points="-0,925.64 667.48,925.64 -0,1062.06 "/>     
             <polygon fill="#27252f" points="784.37,136.46 116.88,136.46 784.37,0 "/> 

             <polygon mask="url(#clip-path)" class="fil0" points="-0,842.26 -0,272.73 511.44,272.73 "/>    
             <polygon mask="url(#clip-path)" class="fil0" points="274.3,800.23 770.58,800.23 770.58,242.29 "/>    
             <polygon mask="url(#clip-path)" class="fil0" points="-0,925.64 667.48,925.64 -0,1062.06 "/>     
             <polygon mask="url(#clip-path)"  class="fil0" points="784.37,136.46 116.88,136.46 784.37,0 "/> 
            </g> 
            </svg>`}; };


    
	render() {
		return (
            <div class="custom-loader">
                 <div class="home-logo-loader" dangerouslySetInnerHTML={this.createMarkup()}></div>
                {/* <svg width="200" height="200" viewBox="0 0 100 100">
                    <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                </svg> */}
            </div>
        )

	}
}