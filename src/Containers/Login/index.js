import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckIcon from '@material-ui/icons/Check';
import './index.css'

export class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password: "",
            passwordType: true,
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="login-wrapper">
                    <div className="inner-wrapper">
                        <div className="inner-wrapper-small">
                            <div className="page-layout-left">
                                <span className="page-layout-left-icon">
                                    {/* Logo */}
                                </span>
                                <h3 className="page-layout-left-title">
                                    <font>Log in or become a My Rituals Member</font>
                                </h3>
                                <p className="page-layout-left-subtitle">
                                    Enter your email address to sign in or to create a new account
                                </p>
                                <div className="login-panel_form">
                                    <div className="form-row">
                                        <div className="field-wrapper">
                                            <label>E-mail address</label>
                                            <input type="text" placeholder="E-mail address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="field-wrapper">
                                            <label>Password</label>
                                            <input placeholder="Password..." type={this.state.passwordType ? "password" : "text"} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                            <button className="password-reveal" onClick={() => this.setState({ passwordType: !this.state.passwordType })}>
                                                {this.state.passwordType ? <VisibilityOffIcon style={{ fontSize: 20 }} /> : <VisibilityIcon style={{ fontSize: 20 }} />}
                                            </button>
                                        </div>
                                    </div>
                                    <a className="password-reset">Forgot your password?</a>
                                    <div className="form-row form-row-button">
                                        <button>LOGIN</button>
                                    </div>
                                </div>
                            </div>
                            <div className="page-layout-right">
                                <div className="account-benefits">
                                    <div className="benefits-wrapper">
                                        <div className="content-asset">
                                            <span className="benefits-subtitle">ENJOY MORE EVERYDAY HAPPINESS</span>
                                            <h3 className="benefits-title">Benefits of your My Rituals membership</h3>
                                            <ul className="benefits-list">
                                                <li>
                                                    <span className="icon-check">
                                                        <CheckIcon />
                                                    </span>
                                                    <span>Free shipping on orders from € 30</span>
                                                </li>
                                                <li>
                                                    <span className="icon-check">
                                                        <CheckIcon />
                                                    </span>
                                                    <span>First-to-know status for sales and new products</span>
                                                </li>
                                                <li>
                                                    <span className="icon-check">
                                                        <CheckIcon />
                                                    </span>
                                                    <span>A welcome gift with your first order</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="benefits-dynamic-block">
                                            <div className="image-holder">
                                                <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw994b3205/images/zoom/1108041_GWPSpringParfumdInterieurPROBOXPrimary2.png?sw=130&sh=130&sm=fit&q=100" />
                                            </div>
                                            <div className="text-holder">
                                                <p>You will receive this gift if you spend € 60.00.</p>
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

export default Login
