var browserHistory = ReactRouter.browserHistory;
var Switch = ReactRouterDOM.Switch;

class TMR extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			percentage: {}
		};
		this.handleTableClick = this.handleTableClick.bind(this);
		this.hypercubes = [];
		this.clearHypercubes = this.clearHypercubes.bind(this);
		this.saveHypercubeId = this.saveHypercubeId.bind(this);
		this.page = React.createRef();
	}
	
	componentDidMount(){
		// this.props.app.field('Regional - Sigla').clear().then(() => {
			// this.props.app.field('Loja - Código').clear().then(() => {
				// this.props.app.field('Data Pesquisa').clear().then(() => {
				// this.props.app.field('Data Calendário').clear().then(() => {
					this.renderPercentage();
					this.renderTable();
					this.renderKpi();
				// });
			// });
		// });

		this.unlisten = this.props.props.history.listen((location, action) => {
			if(location.pathname == "/tmr/") {
				this.props.app.field('Regional - Sigla').clear()
				this.props.app.field('Loja - Código').clear()
				// this.props.app.field('Data Pesquisa').clear()
				// this.props.app.field('Data Calendário').clear()
			}
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
		this.unlisten();
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

	handleTableClick(params) {		
		this.props.props.history.push('/tmr/'+params.value);
	}

	renderKpi() {
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
			this.saveHypercubeId(res.qInfo.qId);
			let numberOfResearches = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
			this.setState({
				numberOfResearches
			})
		});
	}

	renderTable() {
		let tableHCDefinition = {
			"qStateName": "",
			"qDimensions": [
			  {
				"qLibraryId": "BywxPaS",
				"qDef": {
				  "qGrouping": "N",
				  "qFieldDefs": [],
				  "qFieldLabels": [],
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
					  "qSortByLoadOrder": -1,
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
			  1,
			  0
			],
			"qSuppressZero": true,
			"qSuppressMissing": true,
			"qInitialDataFetch": [
			  {
				"qLeft": 0,
				"qTop": 0,
				"qWidth": 3,
				"qHeight": 100
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
			]
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

	renderPercentage() {
		let percentageHCDefinition =  {
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
	
	render() {
		let table = "";
		let kpi = "";
		let page = ""

		let dropdownNavOptions = [
			{ name: "NPS", path: "/nps"},
			{ name: "TMR", path: "/tmr"},
			{ name: "MD DETRATORES DIA", path: "/md-insatisfacao-dia"},
			{ name: "TIPOS DE INSATISFAÇÃO", path: "/tipos-insatisfacao"}
		];

		let dropdownNav = <DropdownNav  activeNav="TMR" locationParams={this.props.props} options={dropdownNavOptions}></DropdownNav>;

		let dropdownSkipPageOptions = [
			{ name: "REG.", path: "/tmr"},
			{ name: "LOJA", path: "tmr/loja"},
			{ name: "DATA", path: "tmr/detalhe-dia"},
			];

		let dropdownSkipPage = <DropdownSkipPage activeNav="REG." options={dropdownSkipPageOptions} />

		
		if(this.state.percentage) {
			kpi = <FeaturedKPI color={this.state.percentage.color} number={this.state.percentage.value}  bottomElement={dropdownNav} app={this.props.app} descricaoFiltro={true} selectedFields={this.props.selectedFields} activeField={this.props.activeField} />
		}  else {
			kpi = <ObjectLoader></ObjectLoader>
		}

		if(this.state.tableData) {
			table = <CustomTable _onRowClick={(props) => {this.handleTableClick(props)}} id="table1" data={this.state.tableData}></CustomTable>;
		} else {
			table = <ObjectLoader></ObjectLoader>;
		}

		page = <div><FeaturedInternalKPI number={this.state.numberOfResearches} name="pesquisas" />
					<div class="firstpage-container">
						<div class="fill-blank">|</div>
						{kpi}
						{dropdownSkipPage}
					</div>
					<div class="conteudo">
						{table}
					</div>
				</div>;
		return 	(
			<div class="page" ref={this.page} style={{heigth: '100%'}}>
				<HashRouter basename="/tmr">
					<Switch>
						<Route path="/" exact  render={() => (page)} />
						<Route path="/detalhe-dia" exact render={(props) => {
							if(this.props.app) {
								return <TMRPorDia app={this.props.app} props={props} isAuthed={true} directDetailDay={true} />
							}
						}}/>
						<Route path="/loja" exact render={(props) => {
							if(this.props.app) {
								return <TMRLoja app={this.props.app} props={props} isAuthed={true} directLoja={true}/>
							}
						}}/>
						<Route path="/:regional" exact render={(props) => {
							if(this.props.app) {
								return <TMRLoja app={this.props.app} props={props} isAuthed={true} />
							}
						}}/>
						<Route path="/:regional/detalhe-dia/:data" exact render={(props) => {
							if(this.props.app) {
								return <TMRMotivo app={this.props.app} props={props} isAuthed={true} />
							}
						}}/>
						<Route path="/:regional/detalhe-dia" exact render={(props) => {
							if(this.props.app) {
								return <TMRData app={this.props.app} props={props} isAuthed={true} dataSemLoja={true}/>
							}
						}}/>
						<Route path="/:regional/:loja" exact render={(props) => {
							if(this.props.app) {
								return <TMRData app={this.props.app} props={props} isAuthed={true} />
							}
						}}/>
						<Route path="/:regional/:loja/:data" exact render={(props) => {
							if(this.props.app) {
								return <TMRMotivo app={this.props.app} props={props} isAuthed={true} />
							}
						}}/>
					</Switch>
				</HashRouter>
			</div>
			)
	}
}