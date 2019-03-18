import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import QueryBuild from './App';
import App from './SearchApp';
import SignIn from './Signin';


const AppOne = ({match}) => {
    return (
    <div>
        <div>{match.params.id}</div>
        <QueryBuild customerId={match.params.id}/>
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
                    <Route path="/" exact component={SignIn}></Route>
                    <Route path="/searchApp" component={SearchAppInstace}></Route>
                    <Route path="/queryBuild/:id"  component={AppOne}></Route>
                </div>
            </BrowserRouter> 
        </div>
    )
}

export default MainApp;