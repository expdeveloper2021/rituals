import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './index.css'

export class Newsletter extends Component {
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
                            <div className="section-title">
                                <h2>
                                    <span>
                                        <DraftsIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2 }} />
                                    </span>
                                    <span>RITUALS COMMUNICATION</span>
                                </h2>
                            </div>
                            <div className="main-content-wrapper">
                                <div className="newsletter">
                                    <div className="newsletter-content">
                                        <p>
                                            Here you manage all communication that you receive from Rituals.
                                            <br />
                                            Rituals will use your personal data as described in our <a>Privacy Policy</a> . By clicking 'save', I agree to the My Rituals <a>Terms and Conditions</a> .
                                            <br />
                                            If you want to terminate your My Rituals account, please <a>contact us</a> .
                                            <br />
                                            <br />
                                            My Rituals newsletter
                                        </p>
                                        <label className="signup-label">
                                            <div className="newsletter-checkbox">
                                                <div className="inputfield-row">
                                                    <input type="checkbox" defaultChecked className="input-checkbox" id="addtoemaillist" />
                                                    <label htmlFor="addtoemaillist"></label>
                                                </div>
                                            </div>
                                            <span className="newsletter-label">Yes, I would like to receive emails from Rituals with updates on member promotions and new products.</span>
                                        </label>
                                        <p>
                                            My Rituals program
                                        </p>
                                        <label className="signup-label">
                                            <div className="newsletter-checkbox">
                                                <div className="inputfield-row">
                                                    <input type="checkbox" defaultChecked className="input-checkbox" id="addtoemaillist" />
                                                    <label htmlFor="addtoemaillist"></label>
                                                </div>
                                            </div>
                                            <span className="newsletter-label">Yes, I would like to receive emails about exclusive gifts, inspiring articles and invitations to special Member events.</span>
                                        </label>
                                    </div>
                                    <div className="newsletter-row">
                                        <div>
                                            <button>SAVE</button>
                                        </div>
                                        <div className="linked-email-container">
                                            <p>
                                                linked to:
                                                <br />
                                                maurice@blaiz.nl
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter
