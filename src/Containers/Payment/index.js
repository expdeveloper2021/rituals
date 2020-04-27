import React, { Component } from 'react'
import NavCheck from '../../Components/NavCheck'
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class Payment extends Component {
    constructor() {
        super()
        this.state = {
            expandable: true,
        }
    }
    render() {
        return (
            <div>
                <NavCheck />
                <div className="checkout-holder">
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
                                        <div className="checkout-step-btn">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">
                                                <CheckIcon style={{ fontSize: 16 }} />
                                            </span>
                                            <span className="text">Delivery</span>
                                        </div>
                                        <div className="checkout-step-btn">
                                            <span className="background-line"></span>
                                            <span className="sr-only"></span>
                                            <span className="circle">
                                                <CheckIcon style={{ fontSize: 16 }} />
                                            </span>
                                            <span className="text">Check your data</span>
                                        </div>
                                        <div className="checkout-step-btn selected">
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
                                            <span className="number">3</span>
                                            <span className="text">I would like to pay with...</span>
                                        </h2>
                                        <div className="rituals-payment-options">
                                            <ul className="hpp">
                                                <li className="ideal">
                                                    <label className="checkout-payment-radio" onClick={() => this.setState({ expandable: true })}>
                                                        <input type="radio" name="brandCode" className="input-radio" defaultChecked />
                                                        <span className="icon-holder">
                                                            <img src="./assets/ideal.png" />
                                                        </span>
                                                        <span className="payment-method-name">
                                                            <font>iDEAL</font>
                                                        </span>
                                                    </label>
                                                    {this.state.expandable && <div className="hpp-expandable-option">
                                                        <div className="form-row">
                                                            <div className="field-wrapper">
                                                                <label>Bank*</label>
                                                                <select>
                                                                    <option>Choose your bank</option>
                                                                    <option>ING</option>
                                                                    <option>Triodos Bank</option>
                                                                    <option>ASN Bank</option>
                                                                    <option>SNS Bank</option>
                                                                    <option>ABN Bank</option>
                                                                    <option>bunq</option>
                                                                    <option>MoneYou</option>
                                                                </select>
                                                                <button className="password-reveal">
                                                                    <ExpandMoreIcon />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>}
                                                </li>
                                                <li className="klarna">
                                                    <label className="checkout-payment-radio" onClick={() => this.setState({ expandable: false })}>
                                                        <input type="radio" name="brandCode" className="input-radio" />
                                                        <span className="icon-holder">
                                                            <img src="./assets/klarna.png" />
                                                        </span>
                                                        <span className="payment-method-name">
                                                            <font>Postpay. Klarna.</font>
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="checkout-payment-button">
                                            <button className="btn-submit-checkout">TO PAY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-layout-right">
                                <div className="checkout-summary-inner">
                                    <h3 className="section-header">
                                        <font>OVERVIEW OF MY ORDER</font>
                                    </h3>
                                    <div className="checkout-summary-minicart">

                                    </div>
                                    <div className="checkout-summary-order-totals">
                                        <div className="order-totals-table">
                                            <div className="order-subtotal">
                                                <div className="cfin">
                                                    <font>SUBTOTAL</font>
                                                </div>
                                                <div className="cfiv">
                                                    <font>€ 0.00</font>
                                                </div>
                                            </div>
                                            <div className="order-total">
                                                <div className="cart-footer-total">
                                                    <div className="cfin">
                                                        <font>TOTAL (INCL. VAT)</font>
                                                    </div>
                                                    <div className="cfiv">
                                                        <font>€ 0.00</font>
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
                        <span>TO PAY</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Payment
