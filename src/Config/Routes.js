import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../Containers/Home'
import BathBody from '../Containers/Bath-Body'
import CollectionStory from '../Containers/Collection-Story'
import FoamingShower from '../Containers/Foaming-Shower'
import Cart from '../Containers/Cart'
import Account from '../Containers/Account'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

export class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route path="/bath-body" component={BathBody} />
                <Route path="/collection-story" component={CollectionStory} />
                <Route path="/foaming-shower" component={FoamingShower} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
            </Router>
        )
    }
}

export default Routes
