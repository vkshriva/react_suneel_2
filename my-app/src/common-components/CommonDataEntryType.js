import React from "react";
import { CustomerFilter, ItemFilter } from "./commonFilters";
import { configmap } from "./CommonFields&Types";

function getFieldType(field) {
  console.log("field type is ::" + field);
  let fieldtype = configmap
    .map(obj => {
      if (obj["id"] === field) {
        return { fieldtype: obj["field"], attributetype: obj["type"] };
      } else return null;
    })
    .filter(obj => obj != null);
  return fieldtype;
}

export const returnsearchcomponent = props => {
  let fieldtypearray = getFieldType(props.field);
  console.log("fieldtype array:::" + JSON.stringify(fieldtypearray));
  let fieldobj = fieldtypearray[0];
  let fieldtype = fieldobj["fieldtype"];
  let attributetype = fieldobj["attributetype"];

  if (fieldtype === "Search" && attributetype === "Customer") {
    return <CustomerFilter {...props} />;
  } else if (fieldtype === "Text")
    return (
      <input
        type="text"
        value={props.value}
        onChange={e => {
          props.handleOnChange(e.target.value);
        }}
      />
    );
  else if (fieldtype === "Search" && attributetype === "Material") {
    console.log("here is is props value::", props);
    return <ItemFilter {...props} />;
  } else if (fieldtype === "Numeric")
    return (
      <input
        type="text"
        value={props.value}
        onChange={e => {
          props.handleOnChange(e.target.value);
        }}
      />
    );
  else if (fieldtype === "Boolean")
    return (
      <input
        type="checkbox"
        id="cb"
        value={props.value}
        onClick={e => {
          if (e.target.checked) props.handleOnChange(true);
          else props.handleOnChange(false);
        }}
      />
    );
  else
    return (
      <input
        type="text"
        value={props.value}
        onChange={e => {
          props.handleOnChange(e.target.value);
        }}
      />
    );
};
