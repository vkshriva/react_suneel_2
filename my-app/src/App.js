import React from "react";
import "./App.css";
import { returnsearchcomponent } from "./common-components/CommonDataEntryType";
import { getAttributes } from "./common-components/CommonFields&Types";
import {
  CustomerBuild,
  MaterialBuild
} from "./common-components/CommonQueryBuild";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

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
      item_queryarray: []
    };
    this.cust_attributes = getAttributes("Customer");
    this.customfield = [...this.cust_attributes];
    this.Item_attributes = getAttributes("Material");
    this.Itemfield = [...this.Item_attributes];
    console.log("cust are attributers::", this.customfield);
    console.log("item attributes are::", this.Item_attributes);
  }

  showQuery(query, type) {
    if (type === "Customer") {
      let newarray = this.state.cust_queryarray.concat(query);
      this.setState({ cust_queryarray: newarray });
    } else if (type === "Material") {
      let newarray1 = this.state.item_queryarray.concat(query);
      this.setState({ item_queryarray: newarray1 });
    }
  }

  getFieldType(field) {
    console.log("got the callback::" + field);
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <label>Case#</label>
          <input type="text" placeholder="type your case" />
        </div>
        <div className="querycontainer">
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <div>
                <CustomerBuild
                  customelement={customelement}
                  styles={styles}
                  cust_attributes={this.customfield}
                  showQuery={this.showQuery}
                />

                <Showquery query={this.state.cust_queryarray} />
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <CustomerBuild
                 
                  customelement={customelement}
                  styles={styles}
                  cust_attributes={this.Itemfield}
                  showQuery={this.showQuery}
                />

                <Showquery query={this.state.item_queryarray} />
              </div>
            </TabPanel>
          </Tabs>



        </div>
      </div>
    );
  }
}

export default QueryBuild;
