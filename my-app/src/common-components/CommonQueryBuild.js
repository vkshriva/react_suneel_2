import React from "react";
import QueryBuilder from "react-querybuilder";
import { customization } from "../customization";

export const CustomerBuild = props => {
  return (
    <QueryBuilder
      query={props.query ? props.query : {}}
      fields={props.cust_attributes}
      controlElements={props.customelement}
      controlClassnames={props.styles}
      onQueryChange={obj => props.showQuery(obj, props.type)}
      translations={customization}
    />
  );
};


