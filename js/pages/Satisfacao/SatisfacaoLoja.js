var browserHistory = ReactRouter.browserHistory;

class SatisfacaoLoja extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {};
		this.handleTableClick = this.handleTableClick.bind(this);
		this.hypercubes = [];
		this.clearHypercubes = this.clearHypercubes.bind(this);
		this.saveHypercubeId = this.saveHypercubeId.bind(this);
		this.page = React.createRef();
	}
	
	componentDidMount(){
		// this.props.app.field('Regional - Sigla').clear().then(() => {
			// this.props.app.field('Loja - Código').clear().then(() => {
				this.props.app.field('Data Pesquisa').clear().then(() => {
					if(this.props.directLoja) {
						this.renderSatisfacaoLojaTable();
						this.renderSatisfacaoPercentage();
						this.renderTopKPI();
					} else {
						this.props.app.field('Regional - Sigla').selectMatch(this.props.props.match.params.regional).then(() => {
							this.renderSatisfacaoLojaTable();
							this.renderSatisfacaoPercentage();
							this.renderTopKPI();
						});
					}
				})
			// })
		// })

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
		// this.props.app.field('Regional - Sigla').clear();
		this.clearHypercubes();
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

	renderSatisfacaoPercentage() {
		let percentageHCDefinition =  {
			"qDimensions": [],
			"qMeasures": [
			  {
				"qLibraryId": "QThTcE",
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
				  "qAggrFunc": "",
				  "qAccumulate": 0,
				  "qReverseSort": false,
				  "qActiveExpression": 0,
				  "qExpressions": [],
				  "qLabelExpression": "",
				  "autoSort": true,
				  "cId": "queche",
				  "numFormatFromTemplate": true,
				  "colorizeDatapoint": false,
				  "colorizeSetByExpression": false,
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
				"qAttributeExpressions": [
				  {
					"qExpression": `=if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*90, vLocalCorVermelho, 
					if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*100, vLocalCorAmarelo, 
					if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*110, vLocalCorVerde, vLocalCorAzul)))
					`,
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
			"qInitialDataFetch": [{"qLeft": 0,"qTop": 0,"qWidth": 1,"qHeight": 1}]
		};

		this.props.app.createCube(percentageHCDefinition, (res) => {
			let data = res.qHyperCube.qDataPages[0].qMatrix[0][0];
			let percentage = data.qText;
			let color = "white";

			if(data.qAttrExps) {
				color = data.qAttrExps.qValues[0].qText;
			}
			this.setState({
				percentage: {
					value: percentage,
					color: color
				}
			});
		});
	}

	renderTopKPI() {
		let featuredKpiHCDefinition = {
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
				"qMeasures": [],
				"qInterColumnSortOrder": [],
				"qSuppressZero": true,
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
		this.props.app.createCube(featuredKpiHCDefinition, (res) => {
			let numberOfResearches = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
			this.setState({
				numberOfResearches
			})
		});
	}

	renderSatisfacaoLojaTable() {
		let tableHCDefinition = {
			"qStateName": "",
			"qDimensions": [
			  {
				"qLibraryId": "",
				"qDef": {
				  "qGrouping": "N",
				  "qFieldDefs": [
					"=[Loja - Código]"
				  ],
				  "qFieldLabels": [
					"Loja"
				  ],
				  "qSortCriterias": [
					{
					  "qSortByState": 0,
					  "qSortByFrequency": 0,
					  "qSortByNumeric": 1,
					  "qSortByAscii": 1,
					  "qSortByLoadOrder": 1,
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
				  "cId": "URjMmg",
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
				"qNullSuppression": false,
				"qIncludeElemValue": false,
				"qOtherTotalSpec": {
				  "qOtherMode": "OTHER_OFF",
				  "qOtherCounted": {
					"qv": "10"
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
				}
			  }
			],
			"qMeasures": [
			  {
				"qLibraryId": "QThTcE",
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
				  "cId": "dxVGSyR",
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
					"qExpression": "=if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*90, vLocalCorVermelho, \r\n if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*100, vLocalCorAmarelo, \n if(100*($(vLocalMuitoSatisfeitos)+$(vLocalSatisfeitos))/$(vLocalPesquisas) < $(vLocalMetaIndiceSatisfação)*110, vLocalCorVerde, vLocalCorAzul)))\n ",
					"qLibraryId": "",
					"qAttribute": true,
					"id": "cellForegroundColor"
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
			  1,
			  0
			],
			"qSuppressZero": true,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 2,
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
			  1
			],
			"columnOrder": [
			  0,
			  1
			],
			"columnWidths": [
			  -1,
			  -1
			],
			"qLayoutExclude": {
			  "qHyperCubeDef": {
				"qStateName": "",
				"qDimensions": [
				  {
					"qLibraryId": "JCNshz",
					"qDef": {
					  "qGrouping": "N",
					  "qFieldDefs": [],
					  "qFieldLabels": [],
					  "qSortCriterias": [
						{
						  "qSortByState": 0,
						  "qSortByFrequency": 0,
						  "qSortByNumeric": 1,
						  "qSortByAscii": 1,
						  "qSortByLoadOrder": 1,
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
					  "cId": "TVzRsfE",
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
					"qNullSuppression": false,
					"qIncludeElemValue": false,
					"qOtherTotalSpec": {
					  "qOtherMode": "OTHER_OFF",
					  "qOtherCounted": {
						"qv": "10"
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
					"title": "Loja",
					"othersLabel": "Outros"
				  }
				],
				"qMeasures": [],
				"qInterColumnSortOrder": [],
				"qSuppressZero": true,
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
		this.props.app.createCube(tableHCDefinition, (res) => {
			let fullData = [];
			let tableData = res.qHyperCube.qDataPages[0].qMatrix;
			for(var i = 0; i < tableData.length; i++) {
				let newData = [];
				for(var j = 0; j < tableData[i].length; j++) {
					newData.push({
						value: tableData[i][j].qText,
						color: tableData[i][j].qAttrExps ? tableData[i][j].qAttrExps.qValues[0].qText : "white"
					});	
				}
				fullData.push(newData);
			}

			this.setState({tableData: fullData});
		});
	}

	handleTableClick(props) {
		if(this.props.directLoja) {
			this.props.props.history.push('/loja'+"/"+props.value);
		} else {
			this.props.props.history.push('/'+this.props.props.match.params.regional+"/"+props.value);
		}
	}
	
	render() {
		let table = "";
		let kpi = "";
		let breadcrumb = <div class="breadcrumb-container">
							<BreadCrumb breadlevel="SATISFAÇÃO" link="/" />
							<BreadCrumb breadlevel={this.props.props.match.params.regional} />
						</div>

		let dropdownSkipPageOptions = [
			{ name: "REG.", path: "/satisfacao"},
			{ name: "LOJA", path: "satisfacao/loja"},
			{ name: "DATA", path: `/satisfacao/${this.props.props.match.params.regional}/detalhe-dia`},
		];
		if(this.props.directLoja) {
			breadcrumb = <div class="breadcrumb-container">
							<BreadCrumb breadlevel="Satisfacao" link="/" />
							<BreadCrumb breadlevel="Loja" />
						</div>

		 	dropdownSkipPageOptions = [
				{ name: "REG.", path: "/satisfacao"},
				{ name: "LOJA", path: "satisfacao/loja"},
				{ name: "DATA", path: "satisfacao/loja/detalhe-dia"},
			];

		}

		let dropdownSkipPage = <DropdownSkipPage activeNav="LOJA" options={dropdownSkipPageOptions} />

		let dropdownNavOptions = [
			{ name: "NPS", path: "/nps"},
			{ name: "SATISFAÇÃO", path: "/satisfacao"},
			{ name: "TMR", path: "/tmr"},
			{ name: "MD INSAT./DIA", path: "/md-insatisfacao-dia"},
			{ name: "TIPOS DE INSATISFAÇÃO", path: "/tipos-insatisfacao"}
		];

		let dropdownNav = <DropdownNav  activeNav="SATISFAÇÃO" locationParams={this.props.props} options={dropdownNavOptions}></DropdownNav>;
		
		if(this.state.percentage) {
			kpi = <FeaturedKPI color={this.state.percentage.color} number={this.state.percentage.value}  bottomElement={dropdownNav} />
		}  else {
			kpi = <ObjectLoader></ObjectLoader>
		}

		if(this.state.tableData) {
			table = <CustomTable _onRowClick={(props) => {this.handleTableClick(props)}} id="table1" data={this.state.tableData}></CustomTable>;
		}


		return 	(
			<div class="page" ref={this.page} style={{heigth: '100%'}}>
				<div class="conteudo">
					<FeaturedInternalKPI number={this.state.numberOfResearches} name="pesquisas" />
				</div>
				{breadcrumb}
				<div class="content-container">
					<div class="content-header">
						<BackButton path="/"></BackButton>
						{kpi}
						{dropdownSkipPage}
					</div>					
					<div class="conteudo">
						{table}
					</div>
				</div>
				
			</div>
			)
	}
}