var browserHistory = ReactRouter.hashHistory;

class TipoInsatisfacaoLoja extends React.Component {

	constructor(props){
        super(props);
		this.state = {
        };
        this.hypercubes = [];
		this.clearHypercubes = this.clearHypercubes.bind(this);
		this.saveHypercubeId = this.saveHypercubeId.bind(this);
    }
    
    componentDidMount() {
        let tipo = this.props.props.match.params.loja;

        let unsatisfiedChartHCDefinition ={
			"qInitialDataFetch": [
				{
					"qHeight": 200,
					"qWidth": 4
				}
			],
            "qDimensions": [
                {
                  "qLibraryId": "JhPPXKp",
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
                    "cId": "PPCY",
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
                },
                {
                  "qLibraryId": "671dd9fd-c207-440e-a839-349962327614",
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
                    "cId": "SzxeHP",
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
                      "qv": "3//if(GetSelectedCount(Motivos)>1,GetSelectedCount(Motivos),3)"
                    },
                    "qOtherLimit": {
                      "qv": "0"
                    },
                    "qOtherLimitMode": "OTHER_GE_LIMIT",
                    "qSuppressOther": true,
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
                  "title": "Motivos",
                  "othersLabel": "Outros"
                }
              ],
              "qMeasures": [
                {
                  "qLibraryId": "aEGnqn",
                  "qDef": {
                    "qLabel": "",
                    "qDescription": "",
                    "qTags": [],
                    "qGrouping": "N",
                    "qDef": "",
                    "qNumFormat": {
                      "qType": "U",
                      "qnDec": 10,
                      "qUseThou": 0,
                      "qFmt": "",
                      "qDec": "",
                      "qThou": ""
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
                    "cId": "jJTSAPr",
                    "numFormatFromTemplate": true,
                    "textAlign": {
                      "auto": true,
                      "align": "left"
                    }
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
                },
                {
                  "qLibraryId": "",
                  "qDef": {
                    "qLabel": "% por Motivo",
                    "qDescription": "",
                    "qTags": [],
                    "qGrouping": "N",
                    "qDef": "if(GetSelectedCount([Regional - Sigla])>0,\r\n$(vLocalInsatisfeitosComMotivo)/$(vLocalInsatisfeitosComMotivoTotalLoja),\n$(vLocalInsatisfeitosComMotivo)/$(vLocalInsatisfeitosComMotivoTotalRegional)\n)\n",
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
                    "cId": "Tpswu",
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
        
        this.props.app.field("Motivos").selectMatch(this.props.props.match.params.regional).then(() => {
          if(this.props.directLoja) {
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
              let unsatisfiedData = [['loja', 'Porcentagem', 'Absoluto']];
              let values = [];
              let data = res.qHyperCube.qDataPages[0].qMatrix.map((item, index) => {
                  var item1Text = item[3].qText.split('%', 1);
                  var item1FormattingText = item1Text[0].replace(/,/, '.');
                  var item1ConvertedToFloat = parseFloat(item1FormattingText);
                  values.push(item1ConvertedToFloat);
                  return [item[0].qText, item1ConvertedToFloat, item[2].qText]
              });
              
              // sorteando pela porcentagem, enquanto nao vem ordenado do hc 
              data.sort((a,b) => {
                return a[1] - b[1];
              })

              unsatisfiedData = unsatisfiedData.concat(data);

              this.setState({
                  unsatisfiedData: {
                      data: unsatisfiedData,
                      max: Math.max(...values),
                      min: Math.min(...values)
                  }
              });
          })
          } else {
            this.props.app.field('Regional - Sigla').selectMatch(tipo).then(() => {
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
                    let unsatisfiedData = [['loja', 'Porcentagem', 'Absoluto']];
                    let values = [];
                    let data = res.qHyperCube.qDataPages[0].qMatrix.map((item, index) => {
                        var item1Text = item[3].qText.split('%', 1);
                        var item1FormattingText = item1Text[0].replace(/,/, '.');
                        var item1ConvertedToFloat = parseFloat(item1FormattingText);
                        values.push(item1ConvertedToFloat);
                        return [item[0].qText, item1ConvertedToFloat, item[2].qText]
                    });
                    
                    // sorteando pela porcentagem, enquanto nao vem ordenado do hc 
                    data.sort((a,b) => {
                      return a[1] - b[1];
                    })

                    unsatisfiedData = unsatisfiedData.concat(data);
    
                    this.setState({
                        unsatisfiedData: {
                            data: unsatisfiedData,
                            max: Math.max(...values),
                            min: Math.min(...values)
                        }
                    });
                })
            })
          }
        })
    }

		
    componentWillUnmount() {
		this.clearHypercubes();
		this.props.app.field('Regional - Sigla').clear();
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
    
    showDetail(params) {
        this.setState({details: params})
        if(this.props.directLoja) {
          this.props.props.history.push('/'+this.props.props.match.params.regional+"/"+"loja"+"/"+params.name);      
        } else {
          this.props.props.history.push('/'+this.props.props.match.params.regional+"/"+this.props.props.match.params.loja+"/"+params.name);
        }
	}


	render() {
        let barChart = "";
        let featuredKpi = "";
        let featuredTopKpi = "";
        let backLink = '/'+this.props.props.match.params.regional;

        let dropdownSkipPageOptions = [
          { name: "REG.", path: "tipos-insatisfacao"+backLink},
          { name: "LOJA", path: ""},
          { name: "DATA", path: 'tipos-insatisfacao'+'/'+this.props.props.match.params.regional+'/'+this.props.props.match.params.loja+"/detalhe-dia"},
        ];

        let breadcrumb = <div class="breadcrumb-container">
                            <BreadCrumb breadlevel="TIPOS DE INSATISFAÇÃO" link="/" />
                            <BreadCrumb breadlevel={this.props.props.match.params.regional} link={backLink} />
                            <BreadCrumb breadlevel={this.props.props.match.params.loja} />
                        </div>
        if(this.props.directLoja) {
          breadcrumb = <div class="breadcrumb-container">
            <BreadCrumb breadlevel="TIPOS DE INSATISFAÇÃO" link="/" />
            <BreadCrumb breadlevel={this.props.props.match.params.regional} link={backLink} />
            <BreadCrumb breadlevel={"Loja"} />
        </div>

        dropdownSkipPageOptions = [
          { name: "REG", path: "tipos-insatisfacao"+backLink},
          { name: "LOJA", path: ""},
          { name: "DATA", path: 'tipos-insatisfacao'+'/'+this.props.props.match.params.regional+'/'+'loja'+"/detalhe-dia"},
          ];
        }

        let dropdownSkipPage = <DropdownSkipPage activeNav="LOJA" options={dropdownSkipPageOptions} />

        if(this.state.unsatisfiedData) {
          var proportionalHeight = this.state.unsatisfiedData.data.length * 50;
			    var proportionalHeightString = proportionalHeight.toString()+"px";
            barChart = <BarChart
                            // format="0.00%"
                            format="0.0"
                            id="insatisfacaoLoja"
                            _onItemSelect={this.showDetail.bind(this)}
                            // height="1000px"
                            height={proportionalHeightString}
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

        if(this.state.researchNumber) {
			featuredTopKpi = <FeaturedInternalKPI number={this.state.researchNumber} name="insatisfações" />
		} else {
			featuredTopKpi = <ObjectLoader></ObjectLoader>;
        }
        
        if(this.state.unsatisfiedNumber) {
            featuredKpi = <FeaturedKPI kpiName={this.props.props.match.params.regional} number={this.state.unsatisfiedNumber} app={this.props.app} descricaoFiltro={true} selectedFields={this.props.selectedFields} activeField={this.props.activeField} />
        } else {
            featuredKpi = <ObjectLoader></ObjectLoader>;
        }

		return 	(
			<div>
        {featuredTopKpi}
        {breadcrumb}
          <div class="content-container">
            <div class="content-header">
              <BackButton app={this.props.app} fieldToClear={'Regional - Sigla'} path={backLink}></BackButton>
              {featuredKpi}
              {dropdownSkipPage}
            </div>           
          </div>
          {barChart}
        </div>
		)
    }
}