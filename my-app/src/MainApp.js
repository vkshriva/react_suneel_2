import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import QueryBuild from './App';
import App from './SearchApp';
const AppOne = ({match}) => {
    return (
    <div>
        <div>{match.params.id}</div>
        <QueryBuild/>
    </div>
    
    
    )
}

const SearchAppInstace = () =>{
    return <App/>
}

const MainApp = ()=> {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={SearchAppInstace}></Route>
                    <Route path="/queryBuild/:id"  component={AppOne}></Route>
                </div>
            </BrowserRouter> 
        </div>
    )
}

export default MainApp;