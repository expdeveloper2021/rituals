import React, { Component } from 'react'
import NavCheck from '../../Components/NavCheck'
import CheckIcon from '@material-ui/icons/Check';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class OrderConfirmation extends Component {
    render() {
        return (
            <div>
                <NavCheck />
                <div className="checkout-holder confirmation-main">
                    <div className="inner-wrapper">
                        <div className="inner-wrapper-small">
                            <div className="checkout-layout-left">
                                <div className="back-button-wrapper">

                                </div>
                                <div className="checkout-inner">
                                    <div className="checkout-step-content">
                                        <h2 className="checkout-step-title">
                                            <span className="text">Bedankt voor je bestelling</span>
                                        </h2>
                                        <div className="checkout-step-buttons-holder">
                                            <div className="checkout-steps-buttons-list">
                                                <div className="checkout-step-btn selected">
                                                    <span className="sr-only"></span>
                                                    <span className="circle">
                                                        <CheckIcon style={{ fontSize: 16 }} />
                                                    </span>
                                                    <span className="text">Confirmed</span>
                                                </div>
                                                <div className="checkout-step-btn disabled">
                                                    <span className="sr-only"></span>
                                                    <span className="circle">
                                                        <DirectionsBusIcon />
                                                    </span>
                                                    <span className="text">Sent</span>
                                                </div>
                                                <div className="checkout-step-btn disabled">
                                                    <span className="sr-only"></span>
                                                    <span className="circle">
                                                        <HomeIcon style={{ fontSize: 20 }} />
                                                    </span>
                                                    <span className="text">Delivered</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="oc-content">
                                            <font>Order GL15588566 will be on Saturday April 25 between 09:00 and 17:00</font>
                                            <br />
                                            <font className="bb-font">Delivered at winde 18, 7623 NE Borne</font>
                                            <br />
                                            <br />
                                            <br />
                                            <font>We have sent your invoice and tracking information to</font>
                                            <br />
                                            <font>maurice@blaiz.nl sent</font>
                                            <br />
                                            <br />
                                            <font>Invoices</font>
                                            <br />
                                            <font>Winde 18</font>
                                            <br />
                                            <font>7623 NE Borne</font>
                                        </div>
                                        <div className="checkout-summary-inner">
                                            <div className="checkout-summary-order-totals">
                                                <div className="order-totals-table">
                                                    <div className="checkout-summary-price-row">
                                                        <div className="cfin">
                                                            <font>OVERVIEW OF MY ORDER</font>
                                                        </div>
                                                        <div className="cfiv">
                                                            <font>
                                                                <ExpandMoreIcon />
                                                            </font>
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
                                        <button className="btn-submit-checkout">Continue Shopping</button>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-layout-right">
                                <div className="checkout-summary-inner">
                                    <h4>Door toegenomen druke is het mogelijk dat je bestelling langer onderweg is dan je van ons bent gewend. Namaste.</h4>
                                    <img src="https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw5513ee77/Content-pages/My%20Rituals/CRM_UK_namaste_bluesky_740x514.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderConfirmation
