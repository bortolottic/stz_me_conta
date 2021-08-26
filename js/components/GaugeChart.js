class GaugeChart extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			selectionsLength: 0
		};
	}

	componentDidMount() {
		echarts.init(document.getElementById(this.props.id));
		window.addEventListener("resize", this.resizeGraph.bind(this));
		this.echartRef = React.createRef();
	}

	componentDidUpdate() {
		if(this.props.data) {
			var porcentagem = (this.props.data.currentValue.qNum*100).toFixed(0);
			var gauge = echarts.getInstanceByDom(document.getElementById(this.props.id));
			var option = {
				title: {
					text: this.props.data.currentValue.qText,
					subtext: this.props.data.label,
					x: 'center',
					y: 'center',
					top: 55,
					textStyle: {
						color: "#fff",
						fontSize: 25,
						fontWeight: 'normal',
						lineHeight: 15,
					},
					subtextStyle: {
						color: "rgba(255,255,255,.45)",
						fontSize: 12,
						fontWeight: '400'
					}
				},
				series: [
					{
						type:'pie',
						radius: ['75%', '90%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								color: 'white',
								fontSize: '18'
							},
							
						},
						labelLine: {
							normal: {
								show: true
							}
						},
						data:[
							{value: porcentagem,
								name: this.props.data.currentValue.qText,
								itemStyle: {
									color: this.props.data.color ? this.props.data.color : 'white',
									// borderColor: this.props.data.color ? this.props.data.color : 'white',
									// borderWidth: '8 ',
								},
							},
							{value:100 - porcentagem,
								itemStyle: {
									// color: '#181f28'
									color: '#2c323a',
									// borderColor: '#fff',
									// borderWidth: '2',
								}}
							],
							
							hoverAnimation: false,
					}
				]
			};
				
			gauge.setOption(option);
			// setTimeout(function() {
			// 	gauge.resize();
			// }, 1000)
		}
		
	}

	resizeGraph() {
		var echartCurrent = this.echartRef.current;
		if(echartCurrent) {
		// window.echarts.echartCurrent.resize();
		window.echarts.getInstanceByDom(echartCurrent).resize();
		}
		
	}	
		
	
	
	onChangeSelectionsLength(length){
		this.setState({selectionsLength: length});
	}
	
	
	render() {
		return (
			<div id={this.props.id} ref={this.echartRef} class="echart-object"></div>
			)
			
		}
	}