var browserHistory = ReactRouter.hashHistory;

class TiposInsatisfacao extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		};

		this.page = React.createRef();
	}

	componentDidMount(){
		var me = this;

		let unsatisfiedHCDefinition = {
			"qStateName": "",
			"qDimensions": [],
			"qMeasures": [
			  {
				"qLibraryId": "",
				"qDef": {
				  "qLabel": "# Insatisfeito",
				  "qDescription": "",
				  "qTags": [],
				  "qGrouping": "N",
				  "qDef": "=$(vLocalInsatisfeitosComMotivo) /* Sum([#Insatisfeito com Motivo]) */",
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
				  "cId": "Nwhr",
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
			"qSuppressZero": false,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 2,
				"qHeight": 2
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
			"qLayoutExclude": {
			  "qHyperCubeDef": {
				"qStateName": "",
				"qDimensions": [],
				"qMeasures": [],
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

		let unsatisfiedChartHCDefinition =  {
			  "qStateName": "",
			  "qDimensions": [
				{
				  "qLibraryId": "",
				  "qDef": {
					"qGrouping": "N",
					"qFieldDefs": [
					  "Motivos"
					],
					"qFieldLabels": [
					  ""
					],
					"qSortCriterias": [
					  {
						"qSortByState": 0,
						"qSortByFrequency": 0,
						"qSortByNumeric": 1,
						"qSortByAscii": 0,
						"qSortByLoadOrder": 0,
						"qSortByExpression": 0,
						"qExpression": {
						  "qv": ""
						},
						"qSortByGreyness": 0
					  }
					],
					"qNumberPresentations": [],
					"qReverseSort": false,
					"qActiveField": 0,
					"qLabelExpression": "",
					"autoSort": true,
					"cId": "JAMat",
					"othersLabel": "Outros",
					"textAlign": {
					  "auto": true,
					  "align": "left"
					},
					"representation": {
					  "type": "text",
					  "urlLabel": ""
					}
				  },
				  "qNullSuppression": true,
				  "qIncludeElemValue": false,
				  "qOtherTotalSpec": {
					"qOtherMode": "OTHER_OFF",
					"qOtherCounted": {
					  "qv": "if(GetSelectedCount(Motivos)>1,GetSelectedCount(Motivos),3)"
					},
					"qOtherLimit": {
					  "qv": "0"
					},
					"qOtherLimitMode": "OTHER_GE_LIMIT",
					"qSuppressOther": false,
					"qForceBadValueKeeping": true,
					"qApplyEvenWhenPossiblyWrongResult": true,
					"qGlobalOtherGrouping": false,
					"qOtherCollapseInnerDimensions": false,
					"qOtherSortMode": "OTHER_SORT_DESCENDING",
					"qTotalMode": "TOTAL_OFF",
					"qReferencedExpression": {
					  "qv": ""
					}
				  },
				  "qShowTotal": false,
				  "qShowAll": false,
				  "qOtherLabel": {
					"qv": "Outros"
				  },
				  "qTotalLabel": {
					"qv": ""
				  },
				  "qCalcCond": {
					"qv": ""
				  },
				  "qAttributeExpressions": [],
				  "qAttributeDimensions": [],
				  "qCalcCondition": {
					"qCond": {
					  "qv": ""
					},
					"qMsg": {
					  "qv": ""
					}
				  },
				  "othersLabel": "Outros"
				}
			  ],
			  "qMeasures": [
				{
				  "qLibraryId": "KzvJDN",
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
					  "qFmt": "0,0%",
					  "qDec": ",",
					  "qThou": "."
					},
					"qRelative": false,
					"qBrutalSum": false,
					"qAggrFunc": "Expr",
					"qAccumulate": 0,
					"qReverseSort": false,
					"qActiveExpression": 0,
					"qExpressions": [],
					"qLabelExpression": "",
					"autoSort": true,
					"cId": "FZCCwF",
					"numFormatFromTemplate": true,
					"textAlign": {
					  "auto": true,
					  "align": "left"
					},
					"isCustomFormatted": false
				  },
				  "qSortBy": {
					"qSortByState": 0,
					"qSortByFrequency": 0,
					"qSortByNumeric": 1,
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
				},
				{
				  "qLibraryId": "",
				  "qDef": {
					"qLabel": "#Insatisfação por Motivo",
					"qDescription": "",
					"qTags": [],
					"qGrouping": "N",
					"qDef": "$(vLocalInsatisfeitosComMotivo)\r\n/*\nSum([#Insatisfeito com Motivo])\n*/",
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
					"qAggrFunc": "Expr",
					"qAccumulate": 0,
					"qReverseSort": false,
					"qActiveExpression": 0,
					"qExpressions": [],
					"qLabelExpression": "",
					"autoSort": false,
					"cId": "RdJKpRq",
					"numFormatFromTemplate": true,
					"textAlign": {
					  "auto": true,
					  "align": "left"
					},
					"isCustomFormatted": false
				  },
				  "qSortBy": {
					"qSortByState": 0,
					"qSortByFrequency": 0,
					"qSortByNumeric": 1,
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
			  "qInterColumnSortOrder": [
				2,
				0,
				1
			  ],
			  "qSuppressZero": false,
			  "qSuppressMissing": true,
			  "qInitialDataFetch": [
				{
				  "qLeft": 0,
				  "qTop": 0,
				  "qWidth": 8,
				  "qHeight": 200
				}
			  ],
			  "qReductionMode": "N",
			  "qMode": "S",
			  "qPseudoDimPos": -1,
			  "qNoOfLeftDims": -1,
			  "qAlwaysFullyExpanded": true,
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
			  "qColumnOrder": [
				0,
				1,
				2
			  ],
			  "columnOrder": [
				0,
				1,
				2
			  ],
			  "columnWidths": [
				-1,
				null,
				null
			  ]
		};

		this.props.app.createCube(unsatisfiedHCDefinition, (res) => {
			let unsatisfiedNumber = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
			this.setState({unsatisfiedNumber: unsatisfiedNumber});
		});

		this.props.app.createCube(unsatisfiedChartHCDefinition, (res) => {
			let unsatisfiedData = [["Tipo", "Porcentagem", "Absoluto"]];
			let values = [];
			let data = res.qHyperCube.qDataPages[0].qMatrix.map((item, index) => {
				var item1Text = item[1].qText.split('%', 1);
				var item1FormattingText = item1Text[0].replace(/,/, '.');
				var item1ConvertedToFloat = parseFloat(item1FormattingText);
				// values.push(item[1].qNum);
				values.push(item1ConvertedToFloat);
				// return [item[0].qText.toUpperCase(), item[1].qNum, item[2].qText]
				return [item[0].qText.toUpperCase(), item1ConvertedToFloat, item[2].qText]
			});

			unsatisfiedData = unsatisfiedData.concat(data);
			this.setState({
				unsatisfiedData: {
					data: unsatisfiedData,
					max: Math.max(...values),
					min: Math.min(...values)
				}
			});

		});

		var newPage = this.page.current;
		newPage.addEventListener("scroll", function(e) {
			var teste = document.querySelector(".menu");
			if(teste) {
				var distance = this.scrollTop;
				if(distance > 0) {
					if(!teste.classList.contains("scrolled")) {
						teste.classList.add("scrolled");
					}
				} else {
					if(teste.classList.contains("scrolled")) {
						teste.classList.remove("scrolled");
					}
				}
			}			
		})
	}



	componentWillMount() {
		var teste = document.querySelector(".menu");
		if(teste) {
			if(teste.classList.contains("scrolled")) {
				teste.classList.remove("scrolled");
			}
		}
	}

	componentWillUnmount() {
		this.props.app.field("Motivos").clear();
	}
	
	showDetail(params) {
		this.setState({details: params})
		this.props.props.history.push('/tipos-insatisfacao/'+params.name);
	}


	render() {
		let featuredKpi = "";
		let barChart = "";
		// let unsatisfiedFilter = "";
		let page = "";
		// var directDetailDay = "/detalhe-dia";

		let dropdownNavOptions = [
			{ name: "NPS", path: "/nps"},
			{ name: "TMR", path: "/tmr"},
			{ name: "MD DETRATORES DIA", path: "/md-insatisfacao-dia"},
			{ name: "TIPOS DE INSATISFAÇÃO", path: "/tipos-insatisfacao"}
		];

		let dropdownNav = <DropdownNav  activeNav="TIPOS DE INSATISFAÇÃO" locationParams={this.props.props} options={dropdownNavOptions}></DropdownNav>;

		if(this.state.unsatisfiedNumber) {
			featuredKpi = <FeaturedKPI kpiName="INSATISFAÇÕES" number={this.state.unsatisfiedNumber} app={this.props.app} bottomElement={dropdownNav} descricaoFiltro={true} selectedFields={this.props.selectedFields} activeField={this.props.activeField} />
			// unsatisfiedFilter = <div class="nav-filters"><DropdownFilter app={this.props.app} isOpen={this.props.isOpen} open={this.props.dropdownClick} id="filter-reason" field="Motivos" firstValue="Tipos de insatisfação"
			// dropdownClass={this.props.dropdownClass} DropdownContainerId={"container-filter-satisfaction"}></DropdownFilter></div>;
		} else {
			featuredKpi = <ObjectLoader></ObjectLoader>;
		}

		if(this.state.unsatisfiedData) {
			barChart = <BarChart 
							id="tipo-insatisfacao"
							_onItemSelect={this.showDetail.bind(this)}
							// format="0.00%"
							format="0.0" 
							height="600px"
							data={this.state.unsatisfiedData.data}
							min={this.state.unsatisfiedData.min}
							max={this.state.unsatisfiedData.max}
							minLabel= "MENOR %"
							maxLabel= "MAIOR %"
							encodeX="Insatisfações"
							encodeY="Tipo"/>;
		} else {
			barChart = <ObjectLoader></ObjectLoader>;
		}

		// page = [unsatisfiedFilter, featuredKpi, barChart];
		
		
		page = [featuredKpi, barChart];
		

		return 	(
			<div class="page" ref={this.page} style={{heigth: '100%'}}>
				<HashRouter basename="/tipos-insatisfacao">
					<Switch>
						<Route path="/" exact render={() => page } />
						{/* <Route path="/detalhe-dia" exact render={(props) => {
							if(this.props.app) {
								return <DetalheTipoInsatisfacao selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true} />
							}
						}}/> */}
						<Route path="/:regional" exact render={(props) => {
							if(this.props.app) {
								return <TipoInsatisfacaoRegional selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true} />
							}
						}}/>
						<Route path="/:regional/detalhe-dia" exact render={(props) => {
							if(this.props.app) {
								return <TipoInsatisfacaoPorDia origin={"regional"} selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true} />
							}
						}}/>
						<Route path="/:regional/loja" exact render={(props) => {
							if(this.props.app) {
								return <TipoInsatisfacaoLoja selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true}  directLoja={true}/>
							}
						}}/>
						<Route path="/:regional/:loja/:tipo" render={(props) => {
							if(this.props.app) {
								return <TipoInsatisfacaoPorDia origin={"loja"} selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true}/>
							} else {
								return "waiting for app";
							}
						}}/>
							<Route path="/:regional/:loja" render={(props) => {
							if(this.props.app) {
								return <TipoInsatisfacaoLoja selectedFields={this.props.selectedFields} activeField={this.props.activeField} app={this.props.app} props={props} value={this.state.details} isAuthed={true} />
							} else {
								return "waiting for app";
							}
						}}/>				
					
					</Switch>
				</HashRouter>
			</div>
		)
    }
}