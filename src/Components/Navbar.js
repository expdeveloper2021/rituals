import React, { Component } from 'react'
import logo from '../assets/logowhite.png'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import './index.css'

export class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
            active1: true,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
            search: false,
            closeDisplay: false,
        }
    }

    render() {
        return (
            <div className="header-main">
                <div className="header-top">
                    <ul>
                        <li>
                            <a>
                                KLANTENSERVICE
                            </a>
                        </li>
                        <li className="blt-list">
                            <a>
                                WINKELZOEKER
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="inner-wrapper">
                    <div className="header-bottom">
                        <div className="lists-hb">
                            <button className="navbar-toggler d-sm-block d-md-none" type="button" onClick={() => this.setState({ active: !this.state.active })} style={{ outline: "none" }}>
                                {this.state.active ? <CloseIcon style={{ fontSize: 22, fill: "black" }} /> : <MenuIcon className="menuopen" style={{ fontSize: 22, fill: "white" }} />}
                                <a href="#" className="mobilemenu-close"></a>
                            </button>
                            <header className={`header1 ${!!this.state.active ? 'headeractive' : ''}`}>
                                <nav className="navbar navbar-expand-lg">
                                    <div className="mymenu" id="navbarSupportedContent">
                                        <ul className="navbar-nav slideractive" id="menu">
                                            <li className="nav-item">
                                                <a className="nav-link">Producten</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Collecties</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Cadeaus</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Magazine</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </header>
                        </div>
                        <div className="heading-hb">
                            <img src={logo} height="50" alt="logofirst" />
                        </div>
                        <div className="right-hb">
                            <div className="inut-rhbn">
                                <SearchIcon style={{ color: "white", fontSize: 30 }} />
                                <input placeholder="Ik zoek..." className="search" onFocus={() => this.setState({ closeDisplay: !this.state.closeDisplay })} onBlur={() => this.setState({ closeDisplay: !this.state.closeDisplay })} />
                                {this.state.closeDisplay && <CloseIcon style={{ color: "white" }} />}
                            </div>
                            <span>
                                <AccountCircleOutlinedIcon style={{ fill: "white", fontSize: 28 }} />
                            </span>
                            <span>
                                <ShoppingCartRoundedIcon style={{ fill: "white", fontSize: 28 }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
