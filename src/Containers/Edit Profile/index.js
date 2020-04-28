import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "Maurice",
            lastName: "Reijersen",
            dob: "15/02/1981",
            password: "",
            passwordType: true,
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
                            <div className="create-account-wrapper">
                                <div className="ca-inner-wrapper">
                                    <div className="ca-container">
                                        <div className="ca-content">
                                            <div className="personal-details-container">
                                                <div className="section-title">
                                                    <h2>
                                                        <EventNoteIcon style={{ position: "absolute", transform: "translateY(-50%)", top: "50%", left: 2, color: "rgba(0,0,0,.6)" }} />
                                                        My details
                                                    </h2>
                                                </div>
                                                <div className="form-ca">
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label>E-mail</label>
                                                            <input className="read-only" readOnly type="email" value="maurice@blaiz.nl" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
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
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label>First Name</label>
                                                            <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label>Last Name</label>
                                                            <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label>Date of birth</label>
                                                            <input type="text" value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })} />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label>Password</label>
                                                            <label>Use 8-20 characters. That's the only rule for a password.</label>
                                                            <input type={this.state.passwordType ? "password" : "text"} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                                            <button className="password-reveal" onClick={() => this.setState({ passwordType: !this.state.passwordType })}>
                                                                {this.state.passwordType ? <VisibilityOffIcon style={{ fontSize: 20 }} /> : <VisibilityIcon style={{ fontSize: 20 }} />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="field-wrapper">
                                                            <label><span>Telephone Number </span><span style={{ color: "#767676", fontSize: 10, letterSpacing: 0.4 }}>Optional</span></label>
                                                            <label>So that we can text you updates about your order</label>
                                                            <input type="number" placeholder="For example: +31621345678" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row form-row-button">
                                                        <button>SAVE</button>
                                                    </div>
                                                </div>
                                            </div>
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

export default EditProfile
