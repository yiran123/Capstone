import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import InvestorPortal from "./pages/InvestorPortal";
import DetailContent from "./components/DetailContent/DetailContent";
import Login from './containers/Login/Login';
import Uploader from './containers/Uploader/Uploader';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={InvestorPortal} />
                    <Route path="/detail/:id" component={DetailContent} />
                    <Route path="/login" component={Login} />
                    <Route path='/upload' component={Uploader} />
                </Switch>
            </Router>
        )
    }
}