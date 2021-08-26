var browserHistory = ReactRouter.browserHistory;

class TMRData extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
        this.handleTableClick = this.handleTableClick.bind(this);
        this.hypercubes = [];
        this.handleTableClick = this.handleTableClick.bind(this);
        this.clearHypercubes = this.clearHypercubes.bind(this);
        this.saveHypercubeId = this.saveHypercubeId.bind(this);
    }
    
    componentDidMount(){
        this.props.app.field('Regional - Sigla').clear().then(() => {
            this.props.app.field('Loja - Código').clear().then(() => {
              // this.props.app.field('Data Calendário').clear().then(() => {
                this.props.app.field('Data Pesquisa').clear().then(() => {
                    this.props.app.field('Regional - Sigla').selectMatch(this.props.props.match.params.regional).then(() => {
                      if(this.props.dataSemLoja) {
                        this.renderTable();
                        this.renderPercentage();
                        this.renderTopKPI();
                      } else {
                        this.props.app.field('Loja - Código').selectMatch(this.props.props.match.params.loja).then(() => {
                            this.renderTable();
                            this.renderPercentage();
                            this.renderTopKPI();
                        })
                      }
                    })
                })
              // })
            })
        })
    };
    
    componentWillUnmount() {
        // this.props.app.field('Loja - Código').clear();
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
    
    renderTable() {
        let tableHCDefinition = {
            "qStateName": "",
            "qDimensions": [
              {
                "qLibraryId": "",
                "qDef": {
                  "qGrouping": "N",
                  "qFieldDefs": [
                    "=[Data Pesquisa]"
                  ],
                  "qFieldLabels": [
                    "Data"
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
              },
              {
                "qLibraryId": "MmsrUw",
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
                  "cId": "ASLdz",
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
                "qLibraryId": "bJtCkVF",
                "qDef": {
                  "qLabel": "",
                  "qDescription": "",
                  "qTags": [],
                  "qGrouping": "N",
                  "qDef": "",
                  "qNumFormat": {
                    "qType": "IV",
                    "qnDec": 2,
                    "qUseThou": 0,
                    "qFmt": "h:mm:ss",
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
                  "cId": "pMzP",
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
                "qAttributeExpressions": [
                  {
                    "qExpression": "=if(isnull(\r\nif(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,\ninterval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},\n      [Mês]={$(=month(Max([Data Calendário]-1)))},\n      [Data Calendário]={\">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Data Calendário]={\"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n\t+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n\t     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n\t     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n\t+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))),\ninterval(Avg({<[Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))))),vLocalCorPreto,\n\nif(100*\nif(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,\ninterval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},\n      [Mês]={$(=month(Max([Data Calendário]-1)))},\n      [Data Calendário]={\">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Data Calendário]={\"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n\t+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n\t     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n\t     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n\t+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))),\ninterval(Avg({<[Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))))<$(vLocalMetaTMR)*90,vLocalCorAzul,\nif(100*\nif(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,\ninterval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},\n      [Mês]={$(=month(Max([Data Calendário]-1)))},\n      [Data Calendário]={\">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Data Calendário]={\"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n\t+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n\t     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n\t     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n\t+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))),\ninterval(Avg({<[Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))))<$(vLocalMetaTMR)*100,vLocalCorVerde,\nif(100*\nif(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,\ninterval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},\n      [Mês]={$(=month(Max([Data Calendário]-1)))},\n      [Data Calendário]={\">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Data Calendário]={\"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))\"},\n      [Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n\t+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n\t     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n\t     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n\t+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))),\ninterval(Avg({<[Retorno Possível?] = {\"SIM\"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) \n+ if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],\n     if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),\n     if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] \n+    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))\n    ))))<$(vLocalMetaTMR)*110,vLocalCorAmarelo,\n     vLocalCorVermelho))))\n\n\n\n\n",
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
              2,
              1,
              0
            ],
            "qSuppressZero": true,
            "qSuppressMissing": true,
            "qInitialDataFetch": [
              {
                "qLeft": 0,
                "qTop": 0,
                "qWidth": 5,
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
        this.props.app.createCube(tableHCDefinition, (res) => {
            this.saveHypercubeId(res.qInfo.qId);
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
    
    renderPercentage() {
        let featuredKpiHCDefinition = {
			"qStateName": "",
			"qDimensions": [],
			"qMeasures": [
			  {
				"qLibraryId": "bJtCkVF",
				"qDef": {
				  "qLabel": "",
				  "qDescription": "",
				  "qTags": [],
				  "qGrouping": "N",
				  "qDef": "",
				  "qNumFormat": {
					"qType": "IV",
					"qnDec": 2,
					"qUseThou": 0,
					"qFmt": "h:mm:ss",
					"qDec": "",
					"qThou": ""
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
				  "cId": "PCXJtA",
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
					"qExpression": `=if(isnull(
                        if(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,
                        interval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},
                              [Mês]={$(=month(Max([Data Calendário]-1)))},
                              [Data Calendário]={">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Data Calendário]={"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                            + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                                 if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                                 if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                            +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))),
                        interval(Avg({<[Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                        + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                             if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                             if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                        +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))))),vLocalCorPreto,
                        
                        if(100*
                        if(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,
                        interval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},
                              [Mês]={$(=month(Max([Data Calendário]-1)))},
                              [Data Calendário]={">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Data Calendário]={"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                            + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                                 if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                                 if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                            +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))),
                        interval(Avg({<[Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                        + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                             if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                             if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                        +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))))<$(vLocalMetaTMR)*90,vLocalCorAzul,
                        if(100*
                        if(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,
                        interval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},
                              [Mês]={$(=month(Max([Data Calendário]-1)))},
                              [Data Calendário]={">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Data Calendário]={"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                            + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                                 if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                                 if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                            +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))),
                        interval(Avg({<[Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                        + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                             if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                             if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                        +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))))<$(vLocalMetaTMR)*100,vLocalCorVerde,
                        if(100*
                        if(GetSelectedCount([Ano])+GetSelectedCount([Mês])+GetSelectedCount([Data Calendário])=0,
                        interval(Avg({<[Ano]={$(=year(Max([Data Calendário]-1)))},
                              [Mês]={$(=month(Max([Data Calendário]-1)))},
                              [Data Calendário]={">=$(=date(min([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Data Calendário]={"<=$(=date(Max([Data Calendário]-1),'DD/MM/YYYY'))"},
                              [Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                            + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                                 if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                                 if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                            +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))),
                        interval(Avg({<[Retorno Possível?] = {"SIM"}>} NetWorkDays([Data Pesquisa]+1, rangemin(vdCorte,[Data Resolvida])-1) 
                        + if(rangemin(vdCorte ,[Data Resolvida])=[Data Pesquisa],
                             if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte])-(if([Horas Dia Pesquisa]>0,1,0)-[Horas Dia Pesquisa]),
                             if ( vdCorte          < [Data Pesquisa],0                  ,[Horas Dia Pesquisa] 
                        +    if ( [Data Resolvida] < vdCorte        ,[Horas Dia Retorno],[Horas Data Corte]))
                            ))))<$(vLocalMetaTMR)*110,vLocalCorAmarelo,
                             vLocalCorVermelho))))`,
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
			  },
			  {
				"qLibraryId": "",
				"qDef": {
				  "qLabel": "",
				  "qDescription": "",
				  "qTags": [],
				  "qGrouping": "N",
				  "qDef": "interval($(vLocalMetaTMR),'HH:MM')",
				  "qNumFormat": {
					"qType": "IV",
					"qnDec": 2,
					"qUseThou": 0,
					"qFmt": "h:mm:ss",
					"qDec": "",
					"qThou": ""
				  },
				  "qRelative": false,
				  "qBrutalSum": false,
				  "qAggrFunc": "",
				  "qAccumulate": 0,
				  "qReverseSort": false,
				  "qActiveExpression": 0,
				  "qExpressions": [],
				  "qLabelExpression": "='Meta:   '",
				  "autoSort": true,
				  "cId": "PsNaJun",
				  "numFormatFromTemplate": true,
				  "colorizeDatapoint": false,
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
			  0,
			  1
			],
			"qSuppressZero": true,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 5,
				"qHeight": 5
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
            this.saveHypercubeId(res.qInfo.qId);
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
                    "qHeight": 1
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
            this.saveHypercubeId(res.qInfo.qId);
            let numberOfResearches = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            this.setState({
                numberOfResearches
            })
        });
        
    }
    
    handleTableClick(props) {
      let date = props.value.replace(/\//g,'-');
      if(this.props.dataSemLoja) {
        this.props.props.history.push('/'+this.props.props.match.params.regional+"/"+"detalhe-dia"+"/"+date);
      } else {
        this.props.props.history.push('/'+this.props.props.match.params.regional+"/"+this.props.props.match.params.loja+"/"+date);
      }
    }
    
    render() {
        let table = "";
        let kpi = "";                
        let backLink = '/'+this.props.props.match.params.regional;
        let breadcrumb = <div class="breadcrumb-container">
                            <BreadCrumb breadlevel="TMR" link="/" />
                            <BreadCrumb breadlevel={this.props.props.match.params.regional} link={backLink}/>
                            <BreadCrumb breadlevel={this.props.props.match.params.loja} />
                          </div>

           let dropdownSkipPageOptions = [
            { name: "REG.", path: "/tmr"},
            { name: "LOJA", path: "tmr/"+this.props.props.match.params.regional},
            { name: "DATA", path: `/tmr/${this.props.props.match.params.regional}/detalhe-dia`},
          ];

          if(this.props.dataSemLoja) {
            breadcrumb = <div class="breadcrumb-container">
                          <BreadCrumb breadlevel="TMR" link="/" />
                          <BreadCrumb breadlevel={this.props.props.match.params.regional} link={backLink}/>
                          <BreadCrumb breadlevel={"DETALHE-DIA"} />
                        </div>

            // dropdownSkipPageOptions = [
            //   { name: "REG.", path: "/tmr"},
            //   { name: "LOJA", path: "tmr/loja"},
            //   { name: "DATA", path: "tmr/loja/detalhe-dia"},
            // ];
          }

          let dropdownSkipPage = <DropdownSkipPage activeNav="DATA" options={dropdownSkipPageOptions} />

        let dropdownNavOptions = [
            { name: "NPS", path: "/nps"},
            { name: "TMR", path: "/tmr"},
            { name: "MD DETRATORES DIA", path: "/md-insatisfacao-dia"},
            { name: "TIPOS DE INSATISFAÇÃO", path: "/tipos-insatisfacao"}
        ];
        
        let dropdownNav = <DropdownNav  activeNav="TMR" locationParams={this.props.props} options={dropdownNavOptions}></DropdownNav>;
        
        if(this.state.percentage) {
            kpi = <FeaturedKPI color={this.state.percentage.color} number={this.state.percentage.value}  bottomElement={dropdownNav} />
        }  else {
            kpi = <ObjectLoader></ObjectLoader>
        }
        
        if(this.state.tableData) {
            table = <CustomTable _onRowClick={(props) => {this.handleTableClick(props)}} id="table1" data={this.state.tableData} orderData={true}></CustomTable>;
        }   
        
        return 	(
            <div class="page" style={{heigth: '100%'}}>
            <div class="conteudo">
            <FeaturedInternalKPI number={this.state.numberOfResearches} name="pesquisas" />
            </div>
            {breadcrumb}
            <div class="content-container">
              <div class="content-header">
                <BackButton app={this.props.app} fieldToClear={'Loja - Código'} path={backLink}></BackButton>
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