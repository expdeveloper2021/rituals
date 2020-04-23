import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class Orders extends Component {

    constructor() {
        super()
        this.state = {
            arr: [1, 2]
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="account-main">
                    <div className="account-wrapper">
                        <h1 className="account-title account-title-mobile">
                            <span className="icon-user">
                                <AccountCircleOutlinedIcon style={{ fontSize: 54 }} />
                            </span>
                            <font>MAURICE REIJERSEN</font>
                        </h1>
                        <div className="account-left-content">
                            <h1 className="account-title">
                                <span className="icon-user">
                                    <AccountCircleOutlinedIcon style={{ fontSize: 54 }} />
                                </span>
                                <font>MAURICE REIJERSEN</font>
                            </h1>
                            <div className="account-menu-wrap">
                                <ul className="account-menu">
                                    <li>
                                        <a> <EventNoteIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} /> My details</a>
                                    </li>
                                    <li>
                                        <a> <ShoppingCartIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} /> Orders</a>
                                    </li>
                                    <li>
                                        <a> <LocationCityIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} /> Addresses</a>
                                    </li>
                                    <li>
                                        <a> <DraftsIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} /> Rituals Communication</a>
                                    </li>
                                    <li>
                                        <a> <ExitToAppIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} /> Log out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="account-right-content">
                            <div className="content-wrapper-rc">
                                <div className="section-title">
                                    <h2>
                                        <span>
                                            <ShoppingCartIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2 }} />
                                        </span>
                                        <span>ORDER HISTORY</span>
                                    </h2>
                                </div>
                                <div className="orders-container">
                                    {this.state.arr.length > 0 ? <div className="all-orders-list">
                                        <div className="order-block">
                                            <div className="order-block-inner">
                                                <div className="order-image">
                                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwae1a38a8/images/zoom/1104565_TheRitualofSakuraMinifragrancesticksBOXPRO.png?sw=130&sh=130&sm=fit&q=100" />
                                                </div>
                                                <div className="order-details">
                                                    <div className="top-row">
                                                        <div className="order-detail-date">
                                                            <span>04/22/2020</span>
                                                        </div>
                                                        <div className="order-detail-number">
                                                            <span>GL15588566</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-row">
                                                        <div className="order-detail-price">
                                                            <span>€ 31.30</span>
                                                        </div>
                                                        <div className="order-detail-size">
                                                            <span>3 products</span>
                                                        </div>
                                                        <div className="order-detail-status">
                                                            <span>Status: unknown new</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="order-arrow">
                                                    <span>
                                                        <ExpandMoreIcon style={{ fontSize: 42 }} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : <div className="no-orders">
                                            <p>There are no previous orders for this account.</p>
                                            <div className="btn-container">
                                                <button>SHOP</button>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders
