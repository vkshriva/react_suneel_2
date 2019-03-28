import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Demo from './Demo';


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
                                    <td><Link to={'/queryBuild/'+obj.id}>{`#${obj.id}  #${obj.name}     ${obj.startdate} - ${obj.enddate}`}</Link></td>
                                    
                                </tr>
                            )

                        })}

                    </tbody>
                </table>
                <Demo/>
            </div>


        )
    }

}