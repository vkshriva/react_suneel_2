import React, { Component } from 'react';
import './App.css';
import { dummyData } from './data/dummydata'
import { Listofobjs } from './data/dummydata'
import AutoSuggestionSearch from './component/AutoSuggestionSearch'
import CaseDataTable from './component/CaseDatatable'
import { withRouter } from 'react-router'

import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
       <AppBar position="static">
                    <Toolbar>
                    <div>
                        <IconButton
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
               
        <AutoSuggestionSearch
          dropDownData={this.state.dropDown}
          handleSelectedCase={this.handleSelectedCase} />
        <CaseDataTable selectedData={this.state.selectedCase} />
      </div>
    );
  }
}

export default withRouter(App);
