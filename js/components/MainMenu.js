class MainMenu extends React.Component {

	constructor(props){
		super(props);
		this.state = {
          filteredDate: '-'
      };
    }
    
  componentDidUpdate() {
  }

	componentDidMount(){
    var me = this;
    this.setState({filteredRegion: "Regionais"});
    if(this.props.app){
        let filterDateHCDef = {
            "qStateName": "",
            "qDimensions": [],
            "qMeasures": [
              {
                "qLibraryId": "",
                "qDef": {
                  "qDescription": "",
                  "qTags": [],
                  "qGrouping": "N",
                  "qDef": "=If(GetSelectedCount([Ano])+\r\n   GetSelectedCount([Mês])+\n   GetSelectedCount([Data Calendário])>0,date(min([Data Calendário]),'DD/MM/YYYY'),date(max(monthstart([Data Calendário]-1),'DD/MM/YYYY'))) \n   &' a '&\nIf(GetSelectedCount([Ano])+\n   GetSelectedCount([Mês])+\n   GetSelectedCount([Data Calendário])>0,date(max([Data Calendário]),'DD/MM/YYYY'),date(max([Data Calendário]-1),'DD/MM/YYYY')) \n   ",
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
                  "cId": "vZaPJa",
                  "numFormatFromTemplate": true,
                  "measureAxis": {
                    "min": null,
                    "max": "NaNNaN"
                  },
                  "conditionalColoring": {
                    "useConditionalColoring": false,
                    "singleColor": 3,
                    "paletteSingleColor": {
                      "index": 14,
                      "color": "#545352"
                    },
                    "segments": {
                      "limits": [
                        {
                          "value": 0,
                          "gradient": false
                        }
                      ],
                      "paletteColors": [
                        {
                          "color": "#f93f17",
                          "icon": "",
                          "index": 10
                        },
                        {
                          "color": "#276e27",
                          "icon": "",
                          "index": 3
                        }
                      ]
                    }
                  },
                  "coloring": {}
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

        this.props.app.createCube(filterDateHCDef, (res) => {
          let filteredDate = res.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
          this.setState({
              filteredDate: filteredDate
          })
      })
    }
  }
  

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

  onChangeSelectionsLength(length){
      this.setState({selectionsLength: length});
  }

  handleClick() {
      $('.menu-lateral').addClass('opened');
      $('.menu-item').removeClass('menu-hide');
      $('.menu-item').addClass('menu-show');
      $('#navbar .sidebar-mask').css('visibility','visible');
  }

	render() {
		return (
      <div style={{zIndex: 99}}>
        <div class="menu">
          <header class="app-header">
            <button class="open menu-item" onClick={this.handleClick.bind(this)}>
                <span class="iconify" data-icon="ant-design:menu-unfold-outline" data-inline="false"></span>
            </button>
            <img src="./images/logo-studio-Z.png" alt="logo" class="logo"></img>
            <ClusterSidebarFilter app={this.props.app}></ClusterSidebarFilter>
          </header>

          <div class="nav-filters">
            <DropdownFilter app={this.props.app} type="date" field="Data Calendário" firstValue={this.state.filteredDate} isOpen={this.props.dateIsOpen}
            open={this.props.dateDropdownClick} dropdownClass={this.props.dateDropdownClass} id="filter-date" DropdownContainerId={"container-filter-date"} ajusteAltura={"ajuste-altura"}></DropdownFilter>

            <span class="separator"></span>

            <DropdownFilter app={this.props.app} field="Regional - Sigla" firstValue={this.state.filteredRegion} isOpen={this.props.regionIsOpen}
             open={this.props.regionDropdownClick} dropdownClass={this.props.regionDropdownClass} id="filter-location"  DropdownContainerId={"container-filter-location"} ></DropdownFilter>
          </div>
        </div>
      </div>
    )

	}
}

