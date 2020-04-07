import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../Containers/Home'
import BathBody from '../Containers/Bath-Body'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

export class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route path="/bath-body" component={BathBody} />
            </Router>
        )
    }
}

export default Routes
