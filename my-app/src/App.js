import React from "react";
import "./App.css";
import { returnsearchcomponent } from "./common-components/CommonDataEntryType";
import { getAttributes } from "./common-components/CommonFields&Types";
import {
  CustomerBuild
} from "./common-components/CommonQueryBuild";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {BrowserRouter, Route} from 'react-router-dom';

import { query } from "./Samplequery";
const customelement = {
  valueEditor: returnsearchcomponent
};

const styles = {
  queryBuilder: "query-builder", // Root <div> element
  ruleGroup: "rules-group-container", // <div> containing the RuleGroup
  combinators: String, // <select> control for combinators
  addRule: "btn-success", // <button> to add a Rule
  addGroup: "btn-success", // <button> to add a RuleGroup
  rule: "rule-placeholder",
  removeRule: "btn-danger",
  removeGroup: "btn-danger"
};

const Showquery = props => {
  let lastobject = props.query[props.query.length - 1];
  let laststring = JSON.stringify(lastobject);
  return (
    <div>
      <p>{laststring}</p>
    </div>
  );
};

class QueryBuild extends React.Component {
  constructor(props) {
    super(props);

    this.showQuery = this.showQuery.bind(this);

    let config = {};
    if (process.env.REACT_APP_MPH_CONFIG) {
      config = JSON.parse(process.env.REACT_APP_MPH_CONFIG);
    }

    this.state = {
      cust_queryarray: [],
      item_queryarray: [],
      cust_query: {"id":"g-067b2dea-ce63-47d5-8041-3835d8b59005","rules":[],"combinator":"and"},
      item_query: {"id":"g-067b2dea-ce63-47d5-8041-3835d8b59005","rules":[],"combinator":"and"}
    };

    this.cust_attributes = getAttributes("Customer");
    this.customfield = [...this.cust_attributes];
    this.Item_attributes = getAttributes("Material");
    this.Itemfield = [...this.Item_attributes];
    console.log("cust are attributers::", this.customfield);
    console.log("item attributes are::", this.Item_attributes);
  }

  showQuery(query, type) {
    console.log('type ', type);
    console.log('query --->  ',query)
    if (type === "Customer") {
      let newarray = this.state.cust_queryarray.concat(query);
      this.setState({ cust_queryarray: newarray });
      this.setState({ cust_query: query });
    } else if (type === "Material") {
      let newarray1 = this.state.item_queryarray.concat(query);
      this.setState({ item_queryarray: newarray1 });
      this.setState({ item_query: query });
    }
  }

  getFieldType(field) {
    console.log("got the callback::" + field);
  }

  saveCustomerQuery = (e) => {
    console.log('save customer query ---> ', this.state.cust_query);
  }

  clearCustomerQuery = (e) =>  {
    console.log('clear customer query ---> ');
    query = {"id":"g-067b2dea-ce63-47d5-8041-3835d8b59005","rules":[],"combinator":"and"} ;
    this.setState({ cust_query: query});
  }
 

  render() {

    

    return (
      <div >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>Case#</label>
          <label><strong> Test 123 123413  </strong></label>
        </div>
        <div className="querycontainer">
          <Tabs>
            <TabList>
              <Tab>Customer Selection</Tab>
              <Tab>Item Selection</Tab>
              <Tab>Allocation Rules</Tab>
              <Tab>Attachments</Tab>
            </TabList>
            <TabPanel>
              <div>
                <CustomerBuild
                  customelement={customelement}
                  styles={styles}
                  cust_attributes={this.customfield}
                  showQuery={this.showQuery}
                  type='Customer'
                  query={this.state.cust_query}
                />
                <div className="buttons-placeholder">
                      <button type="button" className="btn btn-default" onClick={this.saveCustomerQuery}>Save</button>
                      <span> | </span>
                      <button type="button" className="btn btn-default" onClick={this.resetCustomerQuery}>Reset</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <CustomerBuild
                  customelement={customelement}
                  styles={styles}
                  cust_attributes={this.Itemfield}
                  showQuery={this.showQuery}
                  type="Material"
                  query={this.state.item_query}
                />
              </div>
              <div className="buttons-placeholder">
                      <button type="button" className="btn btn-default">Save</button>
                      <span> | </span>
                      <button type="button" className="btn btn-default">Reset</button>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                  Placeholder for Allocation Rules
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                  Placeholder for Attachments
                </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      
    
    );
  }
}
export default QueryBuild;
