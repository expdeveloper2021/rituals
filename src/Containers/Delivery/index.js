import React, { Component } from 'react'
import NavCheck from '../../Components/NavCheck'
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class Delivery extends Component {

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
                <NavCheck />
                <div className="checkout-holder delivery-main">
                    <div className="inner-wrapper">
                        <div className="inner-wrapper-small">
                            <div className="checkout-layout-left">
                                <div className="back-button-wrapper">

                                </div>
                                <div className="checkout-step-buttons-holder">
                                    <div className="checkout-steps-buttons-list">
                                        <div className="checkout-step-btn">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">
                                                <CheckIcon style={{ fontSize: 16 }} />
                                            </span>
                                            <span className="text">Shopping</span>
                                        </div>
                                        <div className="checkout-step-btn selected">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">
                                                2
                                            </span>
                                            <span className="text">Delivery</span>
                                        </div>
                                        <div className="checkout-step-btn disabled">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">3</span>
                                            <span className="text">Check your data</span>
                                        </div>
                                        <div className="checkout-step-btn disabled">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">4</span>
                                            <span className="text">Payment</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-inner">
                                    <div className="checkout-step-content">
                                        <h2 className="checkout-step-title">
                                            <span className="number">1</span>
                                            <span className="text">I would like to receive my delivery...</span>
                                        </h2>
                                        <div className="addresslist-fieldset-inner">
                                            <div className="date-of-delivery">
                                                <div className="form-row">
                                                    <div className="field-wrapper">
                                                        <label>Date of Delivery</label>
                                                        <input className="read-only" readOnly type="text" value="25th April" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrapper">
                                                    <h3 style={{ textAlign: "center", marginBottom: 30, color: "#453f3f", letterSpacing: 2 }}>My Order Goes To...</h3>
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
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrapper">
                                                    <label>Last Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrapper">
                                                    <label>Postcode</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="form-row two-inline">
                                                <div className="inputfield-row">
                                                    <label>House Number</label>
                                                    <input className="inputfield-text" />
                                                </div>
                                            </div>
                                            <div className="form-row two-inline">
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
                                                    <label>Stad</label>
                                                    <input className="inputfield-text" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrapper">
                                                    <label><span>Telephone Number </span><span style={{ color: "#767676", fontSize: 10, letterSpacing: 0.4 }}>Optional</span></label>
                                                    <label>So that we can text you updates about your order</label>
                                                    <input type="number" placeholder="For example: +31621345678" />
                                                </div>
                                            </div>
                                            <div className="read-only-summary">
                                                <span className="name">Maurice Reijersen</span>
                                                <span>Nederland</span>
                                            </div>
                                            <div className="newsletter-content">
                                                <label className="signup-label">
                                                    <div className="newsletter-checkbox">
                                                        <div className="inputfield-row">
                                                            <input type="checkbox" className="input-checkbox" id="addtoemaillist" />
                                                            <label htmlFor="addtoemaillist"></label>
                                                        </div>
                                                    </div>
                                                    <span className="newsletter-label">Save address</span>
                                                </label>
                                                <label className="signup-label">
                                                    <div className="newsletter-checkbox">
                                                        <div className="inputfield-row">
                                                            <input type="checkbox" defaultChecked className="input-checkbox" id="addtoemaillist" />
                                                            <label htmlFor="addtoemaillist"></label>
                                                        </div>
                                                    </div>
                                                    <span className="newsletter-label">Use this address as billing address</span>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn-submit-checkout">TO DELIVER</button>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-layout-right">
                                <div className="checkout-summary-inner">
                                    <h3 className="section-header">
                                        <font><a>CHANGE</a> MY ORDER OVERVIEW</font>
                                    </h3>
                                    <div className="checkout-summary-minicart">
                                        <div className="mini-cart-product">
                                            <div className="mini-cart-image">
                                                <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwe2ac53d0/images/zoom/1106381_TheRitualofAyurvedaFoamingShowerGelPRO.png?sw=130&sh=130&sm=fit&q=100" />
                                            </div>
                                            <div className="mini-cart-info">
                                                <div className="mini-cart-small-title">
                                                    <font>THE RITUAL OF AYURVEDA</font>
                                                </div>
                                                <div className="mini-cart-name">
                                                    <font>Foaming Shower Gel</font>
                                                </div>
                                                <div className="mini-cart-details-bottom">
                                                    <div className="mini-cart-pricing">
                                                        <span className="label">Quantity: </span>
                                                        <span className="value">1</span>
                                                    </div>
                                                    <div className="mini-cart-price-wrapper">
                                                        <span className="mini-cart-price">€ 8.50</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-summary-order-totals">
                                        <div className="order-totals-table">
                                            <div className="order-subtotal">
                                                <div className="cfin">
                                                    <font>SUBTOTAL</font>
                                                </div>
                                                <div className="cfiv">
                                                    <font>€ 8.50</font>
                                                </div>
                                            </div>
                                            <div className="checkout-summary-price-row">
                                                <div className="cfin">
                                                    <font>Shipping costs UPS / PostNL</font>
                                                </div>
                                                <div className="cfiv">
                                                    <font>€ 2.90</font>
                                                </div>
                                            </div>
                                            <div className="order-total">
                                                <div className="cart-footer-total">
                                                    <div className="cfin">
                                                        <font>TOTAL (INCL. VAT)</font>
                                                    </div>
                                                    <div className="cfiv">
                                                        <font>€ 11.40</font>
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
                <div className="sticky-footer-cart">
                    <div className="sticky-order-container">
                        <div className="details-container">
                            <span style={{ marginRight: 7 }}>1</span>
                            <span>PRODUCT</span>
                        </div>
                        <div className="price-container">
                            <div style={{ display: "flex", alignItems: "center", marginleft: 10 }} >
                                <div className="order-total-label">
                                    <span>Total</span>
                                </div>
                                <div className="order-total-amount">
                                    <span>
                                        € 11.40
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-button-container">
                        <span>TO DELIVER</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delivery
