import React, { Component } from 'react'
import NavCheck from '../../Components/NavCheck'
import CheckIcon from '@material-ui/icons/Check';
import './index.css'

export class Checkout extends Component {
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
                                        <div className="checkout-step-btn selected">
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
                                            <span className="number">2</span>
                                            <span className="text">Check the information below</span>
                                        </h2>
                                        <div className="checkout-review-box">
                                            <h3 className="checkout-review-box-title">
                                                DELIVERY INFORMATION
                                            </h3>
                                            <div className="chosen-delivery-option">
                                                <span className="text">UPS / PostNL</span>
                                                <span className="price">€ 2.90</span>
                                            </div>
                                            <div className="read-only-summary">
                                                <span className="name">Maurice Reijersen</span>
                                                <span>Winde 18</span>
                                                <span>7623 NE Borne</span>
                                            </div>
                                            <div className="checkout-review-box-footer">
                                                <button>Edit Delivery Address</button>
                                            </div>
                                        </div>
                                        <div className="checkout-review-box review-billing-box">
                                            <h3 className="checkout-review-box-title">
                                                BILLING INFORMATION
                                            </h3>
                                            <div className="read-only-summary">
                                                <span className="name">Maurice Reijersen</span>
                                                <span className="email">maurice@blaiz.nl</span>
                                                <span>Winde 18</span>
                                                <span>7623 NE Borne</span>
                                            </div>
                                            <div className="checkout-review-box-footer">
                                                <button>Edit Billing Address</button>
                                            </div>
                                        </div>
                                        <div className="terms-and-conditions-info">
                                            <p>
                                                By placing an order you agree to our <a>terms and conditions</a> . Rituals uses your personal data as described in our <a>privacy policy</a>.
                                            </p>
                                        </div>
                                        <button className="btn-submit-checkout">TO PAYMENT METHODS</button>
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
                        <span>TO PAYMENT METHODS</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout
