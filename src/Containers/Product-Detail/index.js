import React, { Component } from 'react'
import './index.css'
import Navbar from '../../Components/Navbar'
import CheckIcon from '@material-ui/icons/Check';

export class ProductDetail extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#E6F1EE" }}>
                <Navbar />
                <div className="pd-main">
                    <div className="first-section-pd">
                        <div className="product-img">
                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwf804aeec/images/zoom/1103953_TheRitualofKarmaFoamingShowergel200mlPRO.png?sw=500&sh=500&sm=fit&q=100" />
                        </div>
                        <div className="product-detail">
                            <div className="pd-content">
                                <div className="product-tile-pdc">
                                    <img src="https://www.rituals.com/on/demandware.static/-/Sites-rituals-products/default/dw681c6b9a/images/rituals/Karma.png" className="rituals-icon" />
                                    <h1 className="product-name-pt">
                                        <span>THE RITUAL OF KARMA</span>
                                        Foaming Shower Gel
                                    </h1>
                                </div>
                                <div className="product-content-pt">
                                    <div className="product-short-info">
                                        <font>foaming shower gel, 200ml</font>
                                    </div>
                                    <div className="long-description">
                                        <font>Radiate positive vibes with The Ritual of Karma shower foam. The unique gel-to-foam technology of the rich and luxurious</font>
                                    </div>
                                    <div className="promotion-wrapper">
                                        <span className="callout-message">
                                            WINNER PURE BEAUTY AWARDS UK '19
                                        </span>
                                    </div>
                                    <div className="product-price">
                                        <font>€ 8.50</font>
                                    </div>
                                    <div className="add-to-cart">
                                        <button>IN SHOPPING BASKET</button>
                                    </div>
                                    <div className="shipping-info">
                                        <div className="content-asset">
                                            <ul>
                                                <li>
                                                    <span className="icon-check">
                                                        <CheckIcon style={{ fontSize: 10, color: "#865" }} />
                                                    </span>
                                                    <span>
                                                        <strong>Delivery 2-3 days to crowd</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="icon-check">
                                                        <CheckIcon style={{ fontSize: 10, color: "#865" }} />
                                                    </span>
                                                    <span>
                                                        <strong>Do you want more information about this product? </strong>
                                                        <font>Ask our experts your questions via <a>Whatsapp</a> or <a>Messenger</a> </font>
                                                    </span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-sec-pd">
                    <div className="product-img">
                        <div className="wrapper-product">
                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwf804aeec/images/zoom/1103953_TheRitualofKarmaFoamingShowergel200mlPRO.png?sw=500&sh=500&sm=fit&q=100" />
                        </div>
                    </div>
                    <div className="product-detail">
                        <div className="wrapper-product">
                            <div className="product-item">
                                <h3>SACRED LOTUS</h3>
                                <p>Sacred lotus is the symbol of purity, beauty and wisdom, and is known for its soothing and nurturing properties.</p>
                            </div>
                            <div className="product-item">
                                <h3>ORGANIC WHITE TEA</h3>
                                <p>Organic white tea is a lightly oxidized tea that is mainly grown in China. Today, the tea also comes from tea plantations in eastern Nepal, northern Thailand, southern Sri Lanka and India. White tea gives our perfume a fresh and pure fragrance with a light floral accent. White tea is said to sharpen the senses.</p>
                            </div>
                            <div style={{ width: "100%", textAlign: "left" }}>
                                <button>VIEW ALL INGREDIENTS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail
