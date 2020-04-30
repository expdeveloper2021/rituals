import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import FilterListIcon from '@material-ui/icons/FilterList';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Navbar from '../../Components/Navbar';
import './index.css'

AOS.init();

export class BathBody extends Component {

    constructor() {
        super()
        this.state = {
            transition: false,
            modal: false,
            firstBlock: false,
            secondBlock: true,
            thirdBlock: false,
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
                            <button className="filter-btn" onClick={() => this.setState({ modal: true })} style={{ top: 12 }} >
                                <FilterListIcon style={{ fontSize: 30, color: "black" }} />
                            </button>
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
                <div className={`filter-flyin ${this.state.modal && "refinements-visible"}`}>
                    <div className="filter-overlay">

                    </div>
                    <div className="filter-inner">
                        <div className="filter-header">
                            <button className="filter-x-close" onClick={() => this.setState({ modal: false })}>
                                <CloseIcon />
                            </button>
                            <h3>Filter</h3>
                        </div>
                        <div className="filter-holder">
                            <div className="filters-container">
                                <div className="filter-block">
                                    <button className="filter-block-title">
                                        SHOP BY COLLECTION
                                        <span className="icon-expanding" onClick={() => this.setState({ firstBlock: !this.state.firstBlock })}>
                                            {!this.state.firstBlock ? <AddIcon style={{ fontSize: 28, color: "#453f3f" }} /> : <RemoveIcon style={{ fontSize: 28, color: "#453f3f" }} />}
                                        </span>
                                    </button>
                                    {this.state.firstBlock && <div className="filter-options">
                                        <div className="filter-option-title">

                                        </div>
                                        <div className="filter-options-container">
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text jing-bg-full-color">
                                                        <font>Jing</font>
                                                        <sup>2</sup>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text amsterdamcollection-bg-full-color">
                                                        <font>Amsterdam Collection</font>
                                                        <sup>1</sup>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text sakura-bg-full-color">
                                                        <font>Sakura</font>
                                                        <sup>4</sup>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text samurai-bg-full-color">
                                                        <font>Samurai</font>
                                                        <sup>6</sup>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="filter-block">
                                    <button className="filter-block-title">
                                        SHOP BY PRODUCT
                                        <span className="icon-expanding" onClick={() => this.setState({ secondBlock: !this.state.secondBlock })}>
                                            {!this.state.secondBlock ? <AddIcon style={{ fontSize: 28, color: "#453f3f" }} /> : <RemoveIcon style={{ fontSize: 28, color: "#453f3f" }} />}
                                        </span>
                                    </button>
                                    {this.state.secondBlock && <div className="filter-options">
                                        <div className="filter-option-title">

                                        </div>
                                        <div className="filter-options-container">
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text jing-bg-full-color">
                                                        <font>Gift Sets M</font>
                                                        <sup>1</sup>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="filter-item">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span className="text">
                                                        <font>Gift Sets M</font>
                                                        <sup>1</sup>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="filter-block">
                                    <button className="filter-block-title">
                                        PRICE RANGE
                                        <span className="icon-expanding" onClick={() => this.setState({ thirdBlock: !this.state.thirdBlock })}>
                                            {!this.state.thirdBlock ? <AddIcon style={{ fontSize: 28, color: "#453f3f" }} /> : <RemoveIcon style={{ fontSize: 28, color: "#453f3f" }} />}
                                        </span>
                                    </button>
                                    {this.state.thirdBlock && <div className="filter-options">
                                        <div className="filter-option-title">

                                        </div>
                                        <div className="price-holder">
                                            <div className="price-item-input">
                                                <label>€</label>
                                                <input />
                                            </div>
                                            <div className="price-item-input">
                                                <label>until</label>
                                                <input />
                                            </div>
                                            <div className="price-item-btn">
                                                <button>GO</button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className="filter-user-actions">
                                    <button className="btn-clear-all">TO CLEAR</button>
                                    <button className="btn-apply-all">TO APPLY</button>
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
