import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class Addresses extends Component {

    constructor() {
        super()
        this.state = {
            arr: [1, 2],
            modal: true,
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
                                            <LocationCityIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2 }} />
                                        </span>
                                        <span>DIRECTORY</span>
                                    </h2>
                                </div>
                                {this.state.arr.length > 0 ? <div className="address-list-container">
                                    <ul className="address-list">
                                        <li className="address-tile default">
                                            <h3 className="secondary-title">
                                                ADDRESS MYRITUALS PROFILE
                                            </h3>
                                            <div className="address-wrapper">
                                                <div className="mini-address-name">
                                                    <font>Maurice Reijersen</font>
                                                </div>
                                                <div className="mini-address-name">

                                                </div>
                                                <div className="mini-address-location">
                                                    <address>
                                                        <font>Winde 18</font>
                                                        <br />
                                                        <font>Borne, 7623 NE</font>
                                                        <br />
                                                        <font>The Netherlands</font>
                                                    </address>
                                                </div>
                                                <div className="address-actions">
                                                    <a>
                                                        Modify
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-container">
                                                <button onClick={() => this.setState({ modal: true })}>ADD ADDRESS</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div> : <div className="no-addresses">
                                        <p>There are currently no addresses associated with your account.</p>
                                        <div className="btn-container">
                                            <button onClick={() => this.setState({ modal: true })}>ADD ADDRESS</button>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`generic-dialog-flyout ${this.state.modal ? "open" : ""}`}>
                    <div className="generic-flyout-content">
                        <div className="address-flyout-inner">
                            <h2 className="edit-address-title">
                                Add address
                            </h2>
                            <fieldset>
                                <div className="addresslist-fieldset-inner">
                                    <div className="form-row">
                                        <div className="inputfield-row">
                                            <label>First Name</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="inputfield-row">
                                            <label>Last Name</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="inputfield-row">
                                            <label>Sex</label>
                                            <select>
                                                <option>Man</option>
                                                <option>Woman</option>
                                                <option>Other</option>
                                            </select>
                                            <button className="password-reveal" onClick={() => this.setState({ passwordType: !this.state.passwordType })}>
                                                <ExpandMoreIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-row three-inline">
                                        <div className="inputfield-row">
                                            <label>Postal Code</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row three-inline">
                                        <div className="inputfield-row">
                                            <label>House Number</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row three-inline">
                                        <div className="inputfield-row">
                                            <label>Addition <span style={{ color: "#ccc", fontSize: 11, fontFamily: "Roboto", marginLeft: 5 }}>Optional</span> </label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="inputfield-row">
                                            <label>Street</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="inputfield-row">
                                            <label>City</label>
                                            <input className="inputfield-text" />
                                        </div>
                                    </div>
                                    <div className="form-row form-row-button">
                                        <button className="btn cancelbtn">
                                            Cancel
                                        </button>
                                        <button className="btn confirmbtn">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                            <button className="slide-close" onClick={() => this.setState({ modal: false })}>
                                <CloseIcon style={{ color: "#453f3f", fontSize: 26 }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addresses
