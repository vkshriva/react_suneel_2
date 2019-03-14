import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "../App.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Options = ["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"];
const Itemoptions = ["omniprezole", "paracetamol", "mortrin", "acetaminophen"];

export const Showquery = props => {
  let lastobject = JSON.stringify(props.query[props.query.length - 1]);
  return <p className="p-style">{lastobject}</p>;
};

export const CustomerFilter = props => {
  var selected = [];
  return (
    <Typeahead
      clearButton
      multiple
      limit
      options={Options}
      clear
      onChange={(s, i) => {
        selected = s;
        props.handleOnChange(selected);
      }}
      placeholder="Select a Value..."
    />
  );
};

export const ItemFilter = props => {
  var selected = [];
  
  return (
    <Typeahead
      clearButton
      multiple
      limit
      options={Itemoptions}
      defaultSelected={ []}
      clear
      onChange={s => {
        selected = s;
        props.handleOnChange(selected);
      }}
      placeholder="Select a Value..."
    />
  );
};
