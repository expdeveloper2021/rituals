import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../Containers/Home'
import BathBody from '../Containers/Bath-Body'
import CollectionStory from '../Containers/Collection-Story'
import FoamingShower from '../Containers/Foaming-Shower'
import Cart from '../Containers/Cart'
import Account from '../Containers/Account'
import EditProfile from '../Containers/Edit Profile'
import ProductDetail from '../Containers/Product-Detail'
import HomeDuplicate from '../Containers/Home-Duplicate'

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
                <Route path="/account-edit-profile" component={EditProfile} />
                <Route path="/product-detail" component={ProductDetail} />
                <Route path="/duplicate-home" component={HomeDuplicate} />
            </Router>
        )
    }
}

export default Routes
