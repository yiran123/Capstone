import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import InvestorPortal from "./pages/InvestorPortal";
import DetailContent from "./components/DetailContent/DetailContent";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={InvestorPortal} />
                    <Route path="/detail/:id" component={DetailContent} />
                </Switch>
            </Router>
        )
    }
}