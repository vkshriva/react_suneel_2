import React from "react";
import QueryBuilder from "react-querybuilder";
import { customization } from "../customization";

export const CustomerBuild = props => {
  return (
    <QueryBuilder
      //query={query}
      fields={props.cust_attributes}
      controlElements={props.customelement}
      controlClassnames={props.styles}
      onQueryChange={obj => props.showQuery(obj, "Customer")}
      translations={customization}
    />
  );
};

export const MaterialBuild = props => {
  return (
    <QueryBuilder
      query={props.query}
      fields={props.Item_attributes}
      controlElements={props.customelement}
      controlClassnames={props.styles}
      onQueryChange={obj => props.showQuery(obj, "Material")}
      translations={customization}
    />
  );
};
