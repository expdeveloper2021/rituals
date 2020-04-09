import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css'
import Navbar from '../../Components/Navbar';

AOS.init();

export class BathBody extends Component {

    constructor() {
        super()
        this.state = {
            transition: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ transition: true })
        }, 200);
        setTimeout(() => {
            this.setState({ transition: false })
        }, 300);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="bg-main-secondh">
                    <div
                        className="full-bg-hb"
                        style={{
                            backgroundImage: "url('http://rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw41ba4103/COP-banners/bath-and-body/cop-hero-body-desktop.jpg')",
                            transform: this.state.transition ? "scale(1.1)" : "scale(1)"
                        }}>
                        <h1 className="heading-bhf" style={{ color: "white", textAlign: "center" }}>Bath & Body</h1>
                    </div>
                </div>
                <div className="second-sec-bbath">
                    <div className="inner-wrapper">
                        <div className="menu-ssb">
                            <ul>
                                <li>POULAIRE GERECHTEN</li>
                                <li>VOORGERECHTEN</li>
                                <li>PIZZA</li>
                                <li>SCHOTELS</li>
                                <li>GRILLGERECHTEN</li>
                            </ul>
                        </div>
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

export default BathBody
