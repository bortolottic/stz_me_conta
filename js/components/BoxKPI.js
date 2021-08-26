class BoxKPI extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      selectionsLength: 0,
      tmrNumber: {},
      unsatisfiedDayNumber: {}
    };
	}

	componentDidMount(){

        let unsatisfiedHCDefinition = {
            "qStateName": "",
            "qDimensions": [],
            "qMeasures": [
              {
                "qLibraryId": "qsWuBs",
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
                  "cId": "dJjLJQ",
                  "numFormatFromTemplate": true,
                  "measureAxis": {
                    "min": 5098.5,
                    "max": 15295.5
                  },
                  "conditionalColoring": {
                    "useConditionalColoring": false,
                    "singleColor": 3,
                    "paletteSingleColor": {
                      "index": -1,
                      "color": "#CE4753"
                    },
                    "segments": {
                      "limits": [],
                      "paletteColors": [
                        {
                          "index": -1,
                          "color": "#4477aa"
                        }
                      ]
                    },
                    "useBaseColors": false
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
              },
              {
                "qLibraryId": "",
                "qDef": {
                  "qLabel": "das Pesquisas",
                  "qDescription": "",
                  "qTags": [],
                  "qGrouping": "N",
                  "qDef": "$(vLocalInsatisfeitos)/$(vLocalPesquisas)",
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
                  "cId": "jGeCqZ",
                  "numFormatFromTemplate": true,
                  "measureAxis": {
                    "min": 0.07312193442905085,
                    "max": 0.21936580328715255
                  },
                  "conditionalColoring": {
                    "useConditionalColoring": true,
                    "singleColor": 3,
                    "paletteSingleColor": {
                      "index": 6
                    },
                    "segments": {
                      "limits": [],
                      "paletteColors": [
                        {
                          "color": "#f8981d",
                          "index": 9
                        }
                      ]
                    },
                    "useBaseColors": false
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
              0,
              1
            ],
            "qSuppressZero": false,
            "qSuppressMissing": true,
            "qInitialDataFetch": [
              {
                "qLeft": 0,
                "qTop": 0,
                "qWidth": 500,
                "qHeight": 10
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
        
        let tmrHCDefinition = {
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
            }
          ],
          "qInitialDataFetch": [
            {
              "qLeft": 0,
              "qTop": 0,
              "qWidth": 1,
              "qHeight": 1
            }
          ]
        };

        let unsatisfiedDayHCDefinition =  {
          "qDimensions": [],
          "qMeasures": [
            {
              "qLibraryId": "AxvsfmP",
              "qDef": {
                "qDef": "",
                "qNumFormat": {
                  "qType": "F",
                  "qnDec": 2,
                  "qUseThou": 0,
                  "qFmt": "#.##0,0",
                  "qDec": ",",
                  "qThou": "."
                },
              },
              "qAttributeExpressions": [
                {
                  "qExpression": `=if(100*SUM([#Insatisfeito])/count( distinct [Loja - Código])/(max([Data Pesquisa]) - min([Data Pesquisa]) + 1)  < $(vLocalMetaMediaInsatisfação)*90, vLocalCorAzul, 
                  if(100*SUM([#Insatisfeito])/count( distinct [Loja - Código])/(max([Data Pesquisa]) - min([Data Pesquisa]) + 1)  < $(vLocalMetaMediaInsatisfação)*100, vLocalCorVerde, 
                  if(100*SUM([#Insatisfeito])/count( distinct [Loja - Código])/(max([Data Pesquisa]) - min([Data Pesquisa]) + 1)  < $(vLocalMetaMediaInsatisfação)*110, vLocalCorAmarelo, vLocalCorVermelho)))
                  `,
                  "qLibraryId": "",
                  "qAttribute": true
                }
              ]
            }
          ],
          "qInitialDataFetch": [{ "qLeft": 0, "qTop": 0, "qWidth": 1, "qHeight": 1}]
        };

        let semPesquisaHCDefinition = {
          "qStateName": "",
          "qDimensions": [],
          "qMeasures": [
            {
              "qLibraryId": "swjyeD",
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
                "qAggrFunc": "",
                "qAccumulate": 0,
                "qReverseSort": false,
                "qActiveExpression": 0,
                "qExpressions": [],
                "qLabelExpression": "",
                "autoSort": true,
                "cId": "KPjnmY",
                "numFormatFromTemplate": true,
                "colorizeDatapoint": false,
                "colorizeSetByExpression": false
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
          "qSuppressZero": false,
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

        let verySatisfiedHCDefinition = {
          "qStateName": "",
          "qDimensions": [],
          "qMeasures": [
            {
              "qLibraryId": "",
              "qDef": {
                "qLabel": "%Muito Satisfeito",
                "qDescription": "",
                "qTags": [],
                "qGrouping": "N",
                "qDef": "$(vLocalMuitoSatisfeitos)/$(vLocalPesquisas)",
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
              "qWidth": 500,
              "qHeight": 10
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

        let satisfiedHCDefinition = {
            "qStateName": "",
            "qDimensions": [],
            "qMeasures": [
              {
                "qLibraryId": "XmGFr",
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
                  "qAggrFunc": "",
                  "qAccumulate": 0,
                  "qReverseSort": false,
                  "qActiveExpression": 0,
                  "qExpressions": [],
                  "qLabelExpression": "",
                  "autoSort": true,
                  "cId": "nTSJxc",
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
                  "qLabel": "das Pesquisas",
                  "qDescription": "",
                  "qTags": [],
                  "qGrouping": "N",
                  "qDef": "$(vLocalSatisfeitos)/$(vLocalPesquisas)",
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
                  "cId": "jGeCqZ",
                  "numFormatFromTemplate": true,
                  "measureAxis": {
                    "min": 0.07312193442905085,
                    "max": 0.21936580328715255
                  },
                  "conditionalColoring": {
                    "useConditionalColoring": true,
                    "singleColor": 3,
                    "paletteSingleColor": {
                      "index": 6
                    },
                    "segments": {
                      "limits": [],
                      "paletteColors": [
                        {
                          "color": "#f8981d",
                          "index": 9
                        }
                      ]
                    },
                    "useBaseColors": false
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
              0,
              1
            ],
            "qSuppressZero": false,
            "qSuppressMissing": true,
            "qInitialDataFetch": [
              {
                "qLeft": 0,
                "qTop": 0,
                "qWidth": 500,
                "qHeight": 10
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

        this.props.app.createCube(tmrHCDefinition, (res) => {
            let color = "white";
            let data = res.qHyperCube.qDataPages[0].qMatrix[0][0];
            if(data.qAttrExps) {
              color = data.qAttrExps.qValues[0].qText;
            }
            let tmrNumber = data.qText;
            tmrNumber = tmrNumber.split(":")[0]+'h';
            this.setState({
                tmrNumber: {
                  value: tmrNumber,
                  color: color
                }
            })
        });

        this.props.app.createCube(verySatisfiedHCDefinition, (res) => {
            let verySatisfiedNumber = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            this.setState({
                verySatisfiedNumber: verySatisfiedNumber
            })
        });

        this.props.app.createCube(satisfiedHCDefinition, (res) => {
            let satisfiedNumber = res.qHyperCube.qDataPages[0].qMatrix[0][1].qText;
            this.setState({
                satisfiedNumber: satisfiedNumber
            })
        });

        this.props.app.createCube(unsatisfiedDayHCDefinition, (res) => {
            let color = "white";
            let data = res.qHyperCube.qDataPages[0].qMatrix[0][0];
            if(data.qAttrExps) {
              color = data.qAttrExps.qValues[0].qText;
            }
            let unsatisfiedDayNumber = data.qText;
            this.setState({
                unsatisfiedDayNumber: {
                  value: unsatisfiedDayNumber,
                  color: color
                }
            })
        });

        this.props.app.createCube(semPesquisaHCDefinition, (res) => {
            let semPesquisaNumber = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            this.setState({
                semPesquisaNumber: semPesquisaNumber
            })
        });

        this.props.app.createCube(unsatisfiedHCDefinition, (res) => {
            let unsatisfiedNumber = res.qHyperCube.qDataPages[0].qMatrix[0][1].qText;
            this.setState({
                unsatisfiedNumber: unsatisfiedNumber
            })
        })

	}

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
    }


	render() {
		return (
            <div class="boxes">
                <div class="dashboard-box-container">
                    <KPI value={this.state.tmrNumber.value} color={this.state.tmrNumber.color} icon="ant-design:clock-circle-outline" inline="false" desc="TMR"></KPI>
                    <KPI value={this.state.unsatisfiedDayNumber.value} color={this.state.unsatisfiedDayNumber.color} icon="ant-design:dislike-outline" inline="false" desc="MD DETRATORES DIA"></KPI>
                    <KPI value={this.state.semPesquisaNumber} icon="ant-design:close-circle-outline" inline="false" desc="S/ PESQ. ONTEM"></KPI>
                </div>


                <div class="dashboard-box-container">
                    <KPI iconPosition="top" iconColor="#44ae86" value={this.state.verySatisfiedNumber} icon="ant-design:smile-fill" inline="false" desc="PROMOTORES"></KPI>
                    <KPI iconPosition="top" iconColor="#ebeb2b" value={this.state.satisfiedNumber} icon="ant-design:meh-fill" inline="false" desc="NEUTROS"></KPI>
                    <KPI iconPosition="top" iconColor="#ce4753" value={this.state.unsatisfiedNumber} icon="ant-design:frown-fill" inline="false" desc="DETRATORES"></KPI>
                </div>
            </div>

        )

	}
}