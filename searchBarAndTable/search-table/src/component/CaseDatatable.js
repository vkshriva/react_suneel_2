import React, { Component } from 'react';


export default class CaseDataTable extends Component {


    render() {
        console.log('selected Data in CasedataTable.js', this.props.selectedData)
        return (
            <div>
                <table className="table table-striped">
                    <tbody>
                        {this.props.selectedData.map((obj) => {
                            return (
                                <tr key={obj.id}>
                                    <td>{`#${obj.id}  #${obj.name}     ${obj.startdate} - ${obj.enddate}`}</td>
                                </tr>
                            )

                        })}

                    </tbody>
                </table>
            </div>


        )
    }

}