import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import CheckIcon from '@material-ui/icons/Check';
import HttpsIcon from '@material-ui/icons/Https';
import './index.css'

export class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="cart-main">
                    <div className="inner-wrapper">
                        <div className="inner-wrapper-small">
                            {/* layout left */}
                            <div className="page-layout-left">
                                <div className="cart-header">
                                    <h1>My shopping cart</h1>
                                    <span>2 products</span>
                                </div>
                                <div className="cart-body">
                                    <table className="table-cb">
                                        <thead>
                                            <tr className="cart-product cp-head">
                                                <th className="cp-image cp-sec-head">PRODUCT</th>
                                                <th className="cp-desc cp-sec-head">&nbsp;</th>
                                                <th className="cp-qty cp-sec-head">NUMBER</th>
                                                <th className="cp-price cp-sec-head">PRICE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart-product cp-body">
                                                <td className="cp-image">
                                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw09617ff4/images/zoom/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1.png?sw=130&sh=130&sm=fit&q=100" />
                                                </td>
                                                <td className="cp-desc">
                                                    <div className="cp-dtitle">
                                                        <div className="product-list-item">
                                                            <div className="name">
                                                                <p>THE RITUAL OF SAKURA</p>
                                                            </div>
                                                            <div className="description">
                                                                <p>Foaming Shower Gel</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cp-qty">
                                                        <div className="quantity-block">
                                                            <button className="qty-minus">-</button>
                                                            <input size="3" maxLength="3" className="qty-input" defaultValue="3" />
                                                            <button className="qty-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="cp-uc">
                                                        <div className="cp-ci">
                                                            <div className="item-user-actions">
                                                                <button className="link link_large">
                                                                    <span>
                                                                        remove
                                                                </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dangerousgoods-error">
                                                        <p className="error"></p>
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td className="cp-price" style={{ paddingTop: 15 }}>
                                                    <span className="price-value">€ 4.90</span>
                                                </td>
                                            </tr><tr className="cart-product cp-body">
                                                <td className="cp-image">
                                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw09617ff4/images/zoom/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1.png?sw=130&sh=130&sm=fit&q=100" />
                                                </td>
                                                <td className="cp-desc">
                                                    <div className="cp-dtitle">
                                                        <div className="product-list-item">
                                                            <div className="name">
                                                                <p>THE RITUAL OF SAKURA</p>
                                                            </div>
                                                            <div className="description">
                                                                <p>Foaming Shower Gel</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cp-qty">
                                                        <div className="quantity-block">
                                                            <button className="qty-minus">-</button>
                                                            <input size="3" maxLength="3" className="qty-input" defaultValue="1" />
                                                            <button className="qty-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="cp-uc">
                                                        <div className="cp-ci">
                                                            <div className="item-user-actions">
                                                                <button className="link link_large">
                                                                    <span>
                                                                        remove
                                                                </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dangerousgoods-error">
                                                        <p className="error"></p>
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td className="cp-price" style={{ paddingTop: 15 }}>
                                                    <span className="price-value">€ 4.90</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="giftwrap-block">
                                        <div className="giftwrap-block-toggle">
                                            <input type="checkbox" value="gift" name="giftwrap" checked />
                                            <label htmlFor="giftwrap">Add gift wrapping / personal message</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Layout Right */}
                            <div className="page-layout-right">
                                <div className="cs-service-block">

                                </div>
                                {/* Bottom Cart */}
                                <div className="ct-bottom bg-color-white">
                                    <div className="cart-footer">
                                        <div className="cart-order-totals">
                                            <div className="order-subtotal">
                                                <div className="ositem-name">
                                                    <span>SUBTOTAL</span>
                                                </div>
                                                <div className="ositem-val">
                                                    <span>€ 21.90</span>
                                                </div>
                                            </div>
                                            <div className="shipping-options-ct">
                                                <div>
                                                    <div className="cart-delivery-options">
                                                        <label className="cart-delivery-option-label">
                                                            <input type="radio" name="shippingOption" defaultChecked />
                                                            <span className="option-title">
                                                                <font>Delivery by PostNL - </font>
                                                                <br />
                                                                <strong>Wednesday 15 April</strong>
                                                            </span>
                                                            <span className="option-time">
                                                                09:00 - 17:00
                                                        </span>
                                                            <span className="option-price">
                                                                € 2.90
                                                        </span>
                                                        </label>
                                                    </div>
                                                    <div className="cart-delivery-options">
                                                        <label className="cart-delivery-option-label">
                                                            <input type="radio" name="shippingOption" />
                                                            <span className="option-title">
                                                                <font>Delivery at collection Point </font>
                                                            </span>
                                                            <span className="option-price">
                                                                € 2.90
                                                        </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="delivery-postal-code">
                                                    <p className="delivery-heading">Check which delivery options are available to you</p>
                                                    <div className="delivery-postal-code-usp">
                                                        <ul>
                                                            <li>
                                                                <span className="icon-check">
                                                                    <CheckIcon />
                                                                </span>
                                                                <span>Different delivery date and time</span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-check">
                                                                    <CheckIcon />
                                                                </span>
                                                                <span>Evening or Sunday delivery</span>
                                                            </li>
                                                            <li>
                                                                <span className="icon-check">
                                                                    <CheckIcon />
                                                                </span>
                                                                <span>3,500 pick-up points</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <form className="delivery-postal-code-form">
                                                        <fieldset>
                                                            <div className="delivery-postal-code-formrow">
                                                                <div className="inputfield-row">
                                                                    <label>Postal Code</label>
                                                                    <input />
                                                                </div>
                                                            </div>
                                                            <div className="delivery-postal-code-formrow">
                                                                <button>FIND YOUR PICK-UP POINT</button>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* Gift Card Coupon */}
                                            <div className="coupon-giftcard-row">
                                                <div className="cart-coupon-code-trigger">
                                                    <label>Discount Code</label>
                                                    <button>ADD CODE</button>
                                                </div>
                                            </div>
                                            {/* Order Total */}
                                            <div className="order-total">
                                                <div className="cart-shipping-option-wrapper">
                                                    <span className="shipping-option">
                                                        Delivery at collection point
                                                    </span>
                                                    <span className="shipping-opt-price">
                                                        € 2.90
                                                    </span>
                                                </div>
                                                <div className="cf-total">
                                                    <div className="cft-itemname">
                                                        <font>TOTAL</font>
                                                        <span className="taxes-included">
                                                            (incl. VAT)
                                                        </span>
                                                    </div>
                                                    <div className="cft-itemval">
                                                        <font style={{ fontWeight: 700, fontSize: 18, letterSpacing: 1 }}>€ 19.90</font>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* cart actions */}
                                <div className="cart-actions">
                                    <button>TO ORDER</button>
                                    <p className="secure-checkout">
                                        <HttpsIcon style={{ marginRight: 5, fontSize: 15 }} />
                                        Safe Shopping
                                    </p>
                                </div>
                            </div>
                            {/* Layout Right End */}
                        </div>
                    </div>
                </div>
                <div className="sticky-footer-cart">
                    <div className="sticky-order-container">
                        <div className="details-container">
                            <span style={{ marginRight: 7 }}>2</span>
                            <span>PRODUCTS</span>
                        </div>
                        <div className="price-container">
                            <div style={{ display: "flex", alignItems: "center", marginleft: 10 }} >
                                <div className="order-total-label">
                                    <span>Total</span>
                                </div>
                                <div className="order-total-amount">
                                    <span>
                                        € 19.90
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-button-container">
                        <span>Continue to Checkout</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
