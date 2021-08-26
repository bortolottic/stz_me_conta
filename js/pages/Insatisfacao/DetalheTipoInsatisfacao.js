var browserHistory = ReactRouter.hashHistory;
//caso seja necessário criar um gráfico diferente detalhando dia sem motivo especifico

class DetalheTipoInsatisfacao extends React.Component {

	constructor(props){
        super(props);
		this.state = {
		};
		this.hypercubes = [];
		this.clearHypercubes = this.clearHypercubes.bind(this);
		this.saveHypercubeId = this.saveHypercubeId.bind(this);
	}

	componentDidMount() {

		let tipo = this.props.props.match.params.tipo;

		let unsatisfiedChartHCDefinition ={
			"qInitialDataFetch": [
				{
					"qHeight": 200,
					"qWidth": 4
				}
			],
			"qDimensions": [
				{
					"qLabel": "Dia",
					"qLibraryId": "smshPyJ",
					"qNullSuppression": true,
					"qOtherTotalSpec": {
						"qOtherMode": "OTHER_OFF",
						"qSuppressOther": true,
						"qOtherSortMode": "OTHER_SORT_DESCENDING",
						"qOtherCounted": {
							"qv": "5"
						},
						"qOtherLimitMode": "OTHER_GE_LIMIT"
					}
				},
				{
					"qLabel": "Motivos",
					"qLibraryId": "671dd9fd-c207-440e-a839-349962327614",
					"qNullSuppression": true,
					"qOtherTotalSpec": {
						"qOtherMode": "OTHER_OFF",
						"qSuppressOther": true,
						"qOtherSortMode": "OTHER_SORT_DESCENDING",
						"qOtherCounted": {
							"qv": "5"
						},
						"qOtherLimitMode": "OTHER_GE_LIMIT"
					}
				}
			],
			"qMeasures": [
				{
					"qDef": {
						"qDef": "$(vLocalMotivos) \r\n/\nIF(\n  GetSelectedCount([Ano])+\n  GetSelectedCount([Mês])+\n  GetSelectedCount([Ano/Mês])+\n  GetSelectedCount([Data Calendário])=0,\nSum( {<[Ano]={\"$(=year(Date('$(vDataInicio)'-1)))\"},  [Mês]={\"$(=month(Date('$(vDataInicio)'-1)))\"}, Motivos=>} TOTAL <Dia> [#Insatisfeito com Motivo])\n, Sum( {<Motivos=>} TOTAL <Dia> [#Insatisfeito com Motivo])\n)\n",
						"qNumFormat": {
							"qType": "F",
							"qnDec": 2,
							"qUseThou": 0,
							"qFmt": "0,0%",
							"qDec": ",",
							"qThou": "."
						  },
					},
					"qLabel": "$(vLocalMotivos) \r\n/\nIF(\n  GetSelectedCount([Ano])+\n  GetSelectedCount([Mês])+\n  GetSelectedCount([Ano/Mês])+\n  GetSelectedCount([Data Calendário])=0,\nSum( {<[Ano]={\"$(=year(Date('$(vDataInicio)'-1)))\"},  [Mês]={\"$(=month(Date('$(vDataInicio)'-1)))\"}, Motivos=>} TOTAL <Dia> [#Insatisfeito com Motivo])\n, Sum( {<Motivos=>} TOTAL <Dia> [#Insatisfeito com Motivo])\n)\n",
					"qLibraryId": null,
					"qSortBy": {
						"qSortByState": 0,
						"qSortByFrequency": 0,
						"qSortByNumeric": 0,
						"qSortByAscii": 1,
						"qSortByLoadOrder": 0,
						"qSortByExpression": 0,
						"qExpression": {
							"qv": " "
						}
					}
				},
				{
					"qDef": {
						"qDef": "$(vLocalMotivos)"
					},
					"qLabel": "$(vLocalMotivos)",
					"qLibraryId": null,
					"qSortBy": {
						"qSortByState": 0,
						"qSortByFrequency": 0,
						"qSortByNumeric": 0,
						"qSortByAscii": 1,
						"qSortByLoadOrder": 0,
						"qSortByExpression": 0,
						"qExpression": {
							"qv": " "
						}
					}
				}
			],
			"qSuppressZero": true,
			"qSuppressMissing": false,
			"qMode": "S",
			"qInterColumnSortOrder": [],
			"qStateName": "$"
		};
		let unsatisfiedHCDefinition = {
			"qStateName": "",
			"qDimensions": [],
			"qMeasures": [
			  {
				"qLibraryId": "",
				"qDef": {
				  "qLabel": "",
				  "qDescription": "",
				  "qTags": [],
				  "qGrouping": "N",
				  "qDef": "$(vLocalInsatisfeitosComMotivo)/$(vLocalInsatisfeitosComMotivoTotal)",
				  "qNumFormat": {
					"qType": "F",
					"qnDec": 2,
					"qUseThou": 0,
					"qFmt": "0,0%",
					"qDec": ",",
					"qThou": "."
				  },
				  "qRelative": false,
				  "qBrutalSum": false,
				  "qAggrFunc": "",
				  "qAccumulate": 0,
				  "qReverseSort": false,
				  "qActiveExpression": 0,
				  "qExpressions": [],
				  "qLabelExpression": "",
				  "autoSort": true,
				  "cId": "PsqyF",
				  "numFormatFromTemplate": true,
				  "measureAxis": {
					"min": 0,
					"max": 100
				  },
				  "conditionalColoring": {
					"useConditionalColoring": false,
					"singleColor": 3,
					"paletteSingleColor": {
					  "index": 6
					},
					"segments": {
					  "limits": [],
					  "paletteColors": [
						{
						  "index": 6
						}
					  ]
					}
				  },
				  "isCustomFormatted": false
				},
				"qSortBy": {
				  "qSortByState": 0,
				  "qSortByFrequency": 0,
				  "qSortByNumeric": -1,
				  "qSortByAscii": 0,
				  "qSortByLoadOrder": 1,
				  "qSortByExpression": 0,
				  "qExpression": {
					"qv": ""
				  },
				  "qSortByGreyness": 0
				},
				"qAttributeExpressions": [],
				"qAttributeDimensions": [],
				"qCalcCond": {
				  "qv": ""
				},
				"qCalcCondition": {
				  "qCond": {
					"qv": ""
				  },
				  "qMsg": {
					"qv": ""
				  }
				}
			  }
			],
			"qInterColumnSortOrder": [
			  0
			],
			"qSuppressZero": true,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 50,
				"qHeight": 10
			  }
			]
		};

		let researchHCDefinition = {
			"qStateName": "",
			"qDimensions": [],
			"qMeasures": [
			  {
				"qLibraryId": "Pg",
				"qDef": {
				  "qLabel": "",
				  "qDescription": "",
				  "qTags": [],
				  "qGrouping": "N",
				  "qDef": "",
				  "qNumFormat": {
					"qType": "F",
					"qnDec": 2,
					"qUseThou": 0,
					"qFmt": "#.##0",
					"qDec": ",",
					"qThou": "."
				  },
				  "qRelative": false,
				  "qBrutalSum": false,
				  "qAggrFunc": "",
				  "qAccumulate": 0,
				  "qReverseSort": false,
				  "qActiveExpression": 0,
				  "qExpressions": [],
				  "qLabelExpression": "",
				  "autoSort": true,
				  "cId": "mknHh",
				  "numFormatFromTemplate": true,
				  "colorizeDatapoint": false,
				  "colorizeSetByExpression": false,
				  "isCustomFormatted": false
				},
				"qSortBy": {
				  "qSortByState": 0,
				  "qSortByFrequency": 0,
				  "qSortByNumeric": -1,
				  "qSortByAscii": 0,
				  "qSortByLoadOrder": 1,
				  "qSortByExpression": 0,
				  "qExpression": {
					"qv": ""
				  },
				  "qSortByGreyness": 0
				},
				"qAttributeExpressions": [
				  {
					"qExpression": "",
					"qLibraryId": "",
					"qAttribute": true
				  }
				],
				"qAttributeDimensions": [],
				"qCalcCond": {
				  "qv": ""
				},
				"qCalcCondition": {
				  "qCond": {
					"qv": ""
				  },
				  "qMsg": {
					"qv": ""
				  }
				}
			  }
			],
			"qInterColumnSortOrder": [
			  0
			],
			"qSuppressZero": true,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 1,
				"qHeight": 10000
			  }
			],
			"qReductionMode": "N",
			"qMode": "S",
			"qPseudoDimPos": -1,
			"qNoOfLeftDims": -1,
			"qAlwaysFullyExpanded": false,
			"qMaxStackedCells": 5000,
			"qPopulateMissing": false,
			"qShowTotalsAbove": false,
			"qIndentMode": false,
			"qCalcCond": {
			  "qv": ""
			},
			"qSortbyYValue": 0,
			"qTitle": {
			  "qv": ""
			},
			"qCalcCondition": {
			  "qCond": {
				"qv": ""
			  },
			  "qMsg": {
				"qv": ""
			  }
			},
			"qColumnOrder": [],
			"customErrorMessage": {
			  "calcCond": ""
			},
			"qLayoutExclude": {
				"qHyperCubeDef": {
				  "qStateName": "",
				  "qDimensions": [],
				  "qMeasures": [
					{
					  "qLibraryId": "",
					  "qDef": {
						"qLabel": "#Insatisfação com Motivo",
						"qDescription": "",
						"qTags": [],
						"qGrouping": "N",
						"qDef": "$(vLocalMotivos)",
						"qNumFormat": {
						  "qType": "F",
						  "qnDec": 2,
						  "qUseThou": 0,
						  "qFmt": "#.##0",
						  "qDec": ",",
						  "qThou": "."
						},
						"qRelative": false,
						"qBrutalSum": false,
						"qAggrFunc": "",
						"qAccumulate": 0,
						"qReverseSort": false,
						"qActiveExpression": 0,
						"qExpressions": [],
						"qLabelExpression": "",
						"autoSort": true,
						"cId": "SnjLj",
						"numFormatFromTemplate": true,
						"isCustomFormatted": false
					  },
					  "qSortBy": {
						"qSortByState": 0,
						"qSortByFrequency": 0,
						"qSortByNumeric": 0,
						"qSortByAscii": 0,
						"qSortByLoadOrder": 0,
						"qSortByExpression": 0,
						"qExpression": {
						  "qv": ""
						},
						"qSortByGreyness": 0
					  },
					  "qAttributeExpressions": [],
					  "qAttributeDimensions": [],
					  "qCalcCond": {
						"qv": ""
					  },
					  "qCalcCondition": {
						"qCond": {
						  "qv": ""
						},
						"qMsg": {
						  "qv": ""
						}
					  }
					}
				  ],
				  "qInterColumnSortOrder": [],
				  "qSuppressZero": false,
				  "qSuppressMissing": false,
				  "qInitialDataFetch": [],
				  "qReductionMode": "N",
				  "qMode": "S",
				  "qPseudoDimPos": -1,
				  "qNoOfLeftDims": -1,
				  "qAlwaysFullyExpanded": false,
				  "qMaxStackedCells": 5000,
				  "qPopulateMissing": false,
				  "qShowTotalsAbove": false,
				  "qIndentMode": false,
				  "qCalcCond": {
					"qv": ""
				  },
				  "qSortbyYValue": 0,
				  "qTitle": {
					"qv": ""
				  },
				  "qCalcCondition": {
					"qCond": {
					  "qv": ""
					},
					"qMsg": {
					  "qv": ""
					}
				  },
				  "qColumnOrder": []
				}
			  }
		};

		// this.props.app.field('Loja - Código').selectMatch(tipo).then(() => {
			this.props.app.createCube(unsatisfiedHCDefinition, (res) => {
				this.saveHypercubeId(res.qInfo.qId);
				let unsatisfiedNumber = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
				this.setState({unsatisfiedNumber: unsatisfiedNumber});
			});

			this.props.app.createCube(researchHCDefinition, (res) => {
				this.saveHypercubeId(res.qInfo.qId);
				let researchNumber = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
				this.setState({researchNumber: researchNumber});
			})

	
			this.props.app.createCube(unsatisfiedChartHCDefinition, (res) => {
				this.saveHypercubeId(res.qInfo.qId);
				let unsatisfiedData = [['Data', 'Porcentagem', 'Absoluto']];
				let values = [];
				let data = res.qHyperCube.qDataPages[0].qMatrix.map((item, index) => {
					var item1Text = item[2].qText.split('%', 1);
					var item1FormattingText = item1Text[0].replace(/,/, '.');
					var item1ConvertedToFloat = parseFloat(item1FormattingText);
					values.push(item1ConvertedToFloat);
					return [item[0].qText, item1ConvertedToFloat, item[3].qText]
				});
				unsatisfiedData = unsatisfiedData.concat(data);
				this.setState({
					unsatisfiedData: {
						data: unsatisfiedData,
						max: Math.max(...values),
						min: Math.min(...values)
					}
				});
			})
		// });
	}
	
	componentWillUnmount() {
		this.clearHypercubes();
		// this.props.app.field('Loja - Código').clear();
	}

	clearHypercubes() {
		for(var i = 0; i < this.hypercubes.length; i++) {
			this.props.app.destroySessionObject(this.hypercubes[i]);
		}
	}

	saveHypercubeId(id) {
		if(this.hypercubes.indexOf(id) == -1) {
			this.hypercubes.push(id);
		}
	}

	render() {
		let barChart = "";
		let featuredKpi = "";
		let featuredTopKpi = "";
		if(this.state.unsatisfiedData) {
			// var proportionalHeight = this.state.unsatisfiedData.data.length * 50;
			// var proportionalHeightString = proportionalHeight.toString()+"px";
			barChart = <BarChart
							// format="0.00%"
							format="0.0"
							id="detalhe-insatisfacao"
							height="1000px"
							// height={proportionalHeightString}
							data={this.state.unsatisfiedData.data}
							min={this.state.unsatisfiedData.min}
							max={this.state.unsatisfiedData.max}
							minLabel= "MENOR %"
							maxLabel= "MAIOR %"
							encodeX="Porcentagem"
							encodeY="Data"/>
		} else {
			barChart = <ObjectLoader></ObjectLoader>
		}

		if(this.state.unsatisfiedNumber) {
			featuredTopKpi = <FeaturedInternalKPI number={this.state.researchNumber} name="insatisfações" />
			featuredKpi = <FeaturedKPI kpiName={this.props.props.match.params.tipo} number={this.state.unsatisfiedNumber} app={this.props.app} descricaoFiltro={true} selectedFields={this.props.selectedFields} activeField={this.props.activeField} />
		} else {
			featuredTopKpi = <ObjectLoader></ObjectLoader>;
			featuredKpi = <ObjectLoader></ObjectLoader>;
		}

		var backLink = '/';


		return 	(
			<div>
                {featuredTopKpi}
                <div class="breadcrumb-container">
                    <BreadCrumb breadlevel="TIPOS DE INSATISFAÇÃO" link="/" />
                    <BreadCrumb breadlevel="Detalhe dia"/>
                    
                </div>
				<div class="content-container">
					<BackButton app={this.props.app} path={backLink}></BackButton>
					{featuredKpi}
				</div>
				{barChart}
			</div>
		)
    }
}