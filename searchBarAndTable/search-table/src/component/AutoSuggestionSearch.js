import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';



export default class AutoSuggestionSearch extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(selectedVal) {
        //console.log('selectedVal in AutoSuggestion.js.....',selectedVal)
        this.props.handleSelectedCase(selectedVal[0]);
    }

    state = {
        //dropDownData:this.props.dropDownData,
        selectedValue: ""
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-10">
                    <Typeahead
                        onChange={(selectedValue) => {
                            this.handleChange(selectedValue);
                        }}
                        options={this.props.dropDownData}
                        //selected={this.state.selectedValue}
                        //clearButton
                        id={"caseSuggestionID"}
                        ref={(typeahead) => this.typeahead = typeahead}
                    />
                </div>
            </div>
        )
    }
}