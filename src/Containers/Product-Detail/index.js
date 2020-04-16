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
                <div className="third-sec-pd">
                    <div className="img-tsp">

                    </div>
                    <div className="content-tsp">
                        <div className="content-tsp-box">
                            <h3>Instructions</h3>
                            <p>Use a small amount of gel. Enjoy the rich, soothing foam as soon as it comes in contact with water.</p>
                        </div>
                    </div>
                </div>
                <div className="product-tabs">
                    <div className="fourth-sec-pd">
                        <div className="tabs-holder">
                            <div className="tabs-items-holder">
                                <ul className="tabs">
                                    <li>
                                        <button className="selected">DESCRIPTION</button>
                                    </li>
                                    <li>
                                        <button>INGREDIENTS</button>
                                    </li>
                                    <li>
                                        <button>WARNING</button>
                                    </li>
                                    <li>
                                        <button>INSTRUCTIONS</button>
                                    </li>
                                    <li>
                                        <button>SHIPPING AND RETURNS</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className="content-tc active">
                                    <font>Radiate positive vibes with The Ritual of Karma shower foam. The unique gel-to-foam technology of the rich and luxurious foam is enriched with the scent of sweet sacred lotus and nourishing organic white tea. Your skin becomes silky soft and smells great, so you can enjoy that unique summer feeling all day long. Complete your Karma cleansing ceremony with the body cream from the same collection.</font>
                                </div>
                                <div className="content-tc">
                                    <font>Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Isopentane, Sorbitol, PEG-120 Methyl Glucose Dioleate, Isopropyl Palmitate, Isobutane, Perfume / Fragrance, Sodium Benzoate, Camelia Sinensis Leaf (White Tea) Extract, Nelumbo Nucifera (Lotus) Flower Extract , Citric Acid, PEG-40 Hydrogenated Castor Oil, Guar Hydroxypropyltrimonium Chloride, Benzyl Salicylate, Butylphenyl Methylpropional, Limonene, Linalool, Hexyl Cinnamal, Citronellol, Alpha-Isomethyl Ionone, Citral, Glycerin.</font>
                                </div>
                                <div className="content-tc">
                                    <font>WARNING: PRESSURE HOLDER. CONTENTS UNDER PRESSURE. AVOID CONTACT WITH EYES. IF IN EYES, RINSE IMMEDIATELY FOR AT LEAST 5 MINUTES WITH WATER AND SEEK EXPERT MEDICAL ADVICE. DO NOT DRILL OR BURN EVEN AFTER USE. PROTECT FROM THE SUN AND DO NOT EXPOSE TO TEMPERATURES HIGHER THAN 50 ° C. DO NOT SPRAY IN THE DIRECTION OF A FLAME OR A GLOWING OBJECT. DO NOT SMOKE. KEEP OUT OF REACH OF CHILDREN. CONTAINS 5.5% FLAMMABLE COMPONENTS</font>
                                </div>
                                <div className="content-tc">
                                    <font>Apply a small amount of gel in your hand - in combination with water, the gel turns into a rich foam sensation</font>
                                </div>
                                <div className="content-tc">
                                    <table className="shippingPromotionTable">
                                        <tr>
                                            <td>
                                                <p></p>
                                                <p>Due to pressure, the delivery time is: 1-2 working days</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Free shipping on orders over € 30.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Free returns within 90 days.</p>
                                            </td>
                                        </tr>
                                    </table>
                                    <p>
                                        <a>
                                            <font>Read our FAQ for more information about</font>
                                            <br />
                                            <font>international shipping, rates and returns .</font>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fifth-sec-pd">
                    <div className="wrapper-fifth">
                        <div className="product-packshot-container">
                            <div className="product-packshot-column column-text">
                                <div className="bg-pct">
                                    <span className="packshot-bg-overlay"></span>
                                </div>
                                <div className="packshot-text-box">
                                    <p className="heading-h4">THE RITUAL OF KARMA</p>
                                    <h2 className="heading-h3">Summer all year round</h2>
                                    <p className="normal-text">Immerse yourself in positive summer vibes - do good and good will come your way.</p>
                                    <button>DISCOVER THE COLLECTION</button>
                                </div>
                            </div>
                            <div className="product-packshot-column column-products"></div>
                        </div>
                    </div>
                </div>
                <div className="sixth-sec-pd">
                    <h1 className="heading-h3">OTHERS ALSO VIEWED</h1>
                    <div className="inner-wrapper">
                        <div className="second-card-bath">
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwc7b584cb/images/grid/1106875_TheRitualofJingFoamingShowerGelPROgrid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw4ee4afa1/images/grid/1103953_TheRitualofKarmaFoamingShowergel200mlPROgrid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                            <div className="card-bbath" data-aos="fade-in">
                                <div className="card-bimage">
                                    <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw39fd45f8/images/grid/1106468_TheRitualofSakuraZensationalFoamingShowerGelPRO1grid.png?sw=100&q=100" />
                                </div>
                                <div className="content-bimage">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                    <h2>Shower Foam 50ml</h2>
                                    <p className="short-desc-bi">doucheschium</p>
                                    <p className="product-price-bi">€8,50</p>
                                    <button>IN WINKELMAND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail
