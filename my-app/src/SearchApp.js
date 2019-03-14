import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummydata'
import { Listofobjs } from './data/dummydata'
import AutoSuggestionSearch from './component/AutoSuggestionSearch'
import CaseDataTable from './component/CaseDatatable'
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.dummyData = dummyData;
    this.handleSelectedCase = this.handleSelectedCase.bind(this);

  }
  state = {
    actualSelectedCase: [],
    selectedCase: [],
    dropDown: [],
    data:[]
  }

  componentDidMount() {
    var data = Listofobjs.caselist;
    this.setState({data})
    var dropDown = data.map((obj) => {
      return obj.name
    })
    this.setState({ dropDown })

    this.setState({ selectedCase:data })
    this.setState({ actualSelectedCase: data })
    //console.log('dropDown in App ',dropDown)
  }


  handleSelectedCase(selectedValue) {
    //console.log('selectedValue in App',selectedValue)
    var selectedCase = this.state.actualSelectedCase;
    if (null != selectedValue && selectedValue.length > 0) {
      selectedCase = selectedCase.filter((row) => {
        return row.name.includes(selectedValue);
      })
    }
    this.setState({ selectedCase });

    //console.log('handleSelectedCase--',this.state.selectedCase)
  }

  render() {
    //console.log('App.js dropdownData',this.state.dropDown)
    return (
      <div className="App">
        <AutoSuggestionSearch
          dropDownData={this.state.dropDown}
          handleSelectedCase={this.handleSelectedCase} />
        <CaseDataTable selectedData={this.state.selectedCase} />
      </div>
    );
  }
}

export default withRouter(App);
