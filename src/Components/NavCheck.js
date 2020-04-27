import React, { Component } from 'react'
import LockIcon from '@material-ui/icons/Lock';
import logo from '../assets/logowhite.png'
import './index.css'

export class NavCheck extends Component {
    render() {
        return (
            <header className="navCheck">
                <nav className="navresponsive">
                    <p className="header-empty--secure-checkout">
                        <span className="icon-secure">
                            <LockIcon style={{ fontSize: 18 }} />
                        </span>
                        <font>Safe Shopping</font>
                    </p>
                    <img className="header-empty--logo" src={logo} />
                    <div className="cs-number--top">
                        <a>
                            <strong>Need help?</strong>
                            <br />
                            <font>Call +31 (0) 202415948</font>
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavCheck
