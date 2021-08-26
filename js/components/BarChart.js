class BarChart extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			selectionsLength: 0
		};
	}
	
	componentDidMount(){
		let chart = echarts.init(document.getElementById(this.props.id));
		
		if(this.props._onItemSelect) {
			chart.on('click', 'series.bar', (params) => {
				this.props._onItemSelect(params);
			});
		}
		
		this.initChart();
		this.setState({initialized: true});
	}

	initChart() {
		var myChart = echarts.getInstanceByDom(document.getElementById(this.props.id));
		let dataZoom = [];
		if(this.props.hasZoom) {
			dataZoom = [
				{
					show: true,
					yAxisIndex: 0,
					filterMode: 'empty',
					width: 30,
					height: '80%',
					showDataShadow: false,
					left: '93%'
				}
			]
		}
		var option = {
			title: {
				show: false
			},
			dataset: {
				source: this.props.data
			},
			grid: {left: 4, right: 80, top: 10, containLabel: true},
			dataZoom: dataZoom,
			xAxis: {
				name: 'Tipo',
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "transparent"
					}
				}
			},
			yAxis: {
				type: 'category',
				axisLabel: {
					textStyle: {
						fontFamily: "'Nunito Sans', sans-serif",
					},
					color: "#8f8e93",
					fontSize: 11
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				}
			},
			visualMap: {
				orient: 'horizontal',
				left: 'center',
				min: this.props.min,
				max: this.props.max,
				range: [this.props.min, this.props.max],
				text: [this.props.maxLabel, this.props.minLabel],
				dimension: 1,
				inRange: {
					color: ['#ebea2b','#ce4753']
				},
				textStyle: {
					color: "#8f8e93"
				},
				formatter: (value) => {
					return  numeral(value).format(this.props.format);
				}
			},
			series: [
				{
					type: 'bar',
					label: {
						show: true,
						color: "#fff",
						position: "right",
						offset: [5,0],
						formatter: (params) => {
							let string = "";
							if(params.data[2]) {
								string = "{percentage|"+numeral(params.data[1]).format(this.props.format)+"%}\n{fullValue|"+params.data[2]+"}";
							} else {
								string = "{percentage|"+numeral(params.data[1]).format(this.props.format)+"}";
							}
							return string;
						},
						rich: {
							percentage: {
								fontFamily: "'Nunito Sans', sans-serif",
								fontSize: 14,
								color: "#dcdcdc"
							},
							fullValue: {
								fontFamily: "'Nunito Sans', sans-serif",
								fontSize: 11,
								color: "#8f8e93"
							}
						}
					},
					encode: {
						// Map the "amount" column to X axis.
						x: this.props.encodeX,
						// Map the "product" column to Y axis
						y: this.props.encodeY
					}
				}
			]
		};

		myChart.setOption(option);
		myChart.resize();
	}
	
	componentDidUpdate(prevProps, prevState) {
		if(this.props.data !== prevProps.data) {
			this.initChart();
		}
		
	}
	
	render() {
		
		return (
			<div class="echart-object" style={{height: this.props.height, width: "100%"}}id={this.props.id}></div>
			)
			
		}
	}