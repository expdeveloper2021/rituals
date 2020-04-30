import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css'

AOS.init();

export class CollectionStoryJing extends Component {

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
                        className="full-bg-hcs"
                        style={{
                            backgroundImage: "url('http://rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw371c90ca/Collection-pages/Sakura/Banner-size-L-desktop-retina.jpg')",
                            transform: this.state.transition ? "scale(1.1)" : "scale(1)"
                        }}>
                        <span className="the-ritual-title" style={{ color: "white", textAlign: "center" }}>THE</span>
                        <h1 className="cs-heading" style={{ color: "white", textAlign: "center" }}>RITUAL OF SAKURA</h1>
                        <h2>YOUR PATH TO INNER PEACE</h2>
                        <button>SHOP THE COLLECTION</button>
                    </div>
                </div>
                <div className="discover-block">
                    <div className="inner-wrapper-db">
                        <a className="btn-scroll-down">
                            DISCOVER THE COLLECTION
                            <br />
                            <ExpandMoreIcon style={{ fontSize: 28, marginTop: 3 }} />
                        </a>
                        <div className="short-desc">
                            <p>The Ritual of Jing is inspired by the ancient Chinese concept of 'Jing', which stands for calm, silence and tranquility. Find with this collection your path to inner peace and discover the art of peace and quiet. Create a p ...</p>
                        </div>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="collection-cards-block">
                    <div className="card-sec-rit">
                        <div className="inner-wrapper">
                            <div className="all-cards-rit">
                                <div className="card-rit" data-aos="fade-in">
                                    <div className="content-crit">
                                        <h3>Sleep better tonight</h3>
                                        <p className="p-cr">The art of sleeping.</p>
                                        <button>DISCOVER THE COLLECTION</button>
                                    </div>
                                    <div className="img-crit">
                                        <img src="./assets/eighth.jpg" width="100%" height="100%" />
                                    </div>
                                </div>
                                <div className="card-rit" data-aos="fade-in">
                                    <div className="content-crit">
                                        <h3>Relax and unwind</h3>
                                        <p className="p-cr">A dose of relaxation.</p>
                                        <button>DISCOVER THE COLLECTION</button>
                                    </div>
                                    <div className="img-crit">
                                        <img src="./assets/eighth.jpg" width="100%" height="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="three-title-magazine-block">
                    <div className="inner-wrapper">
                        <h3 className="subtitle">
                            SLEEP BETTER WITH RITUALS
                        </h3>
                        <h2 className="title">Learn to relax better</h2>
                        <div className="magazine-title-wrapper">
                            <div className="magazine-tile">
                                <div className="image-holder">
                                    <a>
                                        <div className="image-mt" style={{ backgroundImage: "url(https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/nl_NL/v1587447440124/Collection-pages/2020/Jing/Jing-Collectionpage/Jing_Collectionpage_3Tile-Desktop-BedtimeRoutine-01.jpg?)" }}>

                                        </div>
                                    </a>
                                </div>
                                <div className="text-holder">
                                    <span className="ritual-name">JING | SLEEP</span>
                                    <p className="description">
                                        Tips from our expert for the perfect sleep routine
                                    </p>
                                    <a className="link">DISCOVER THE STEPS</a>
                                </div>
                            </div>
                            <div className="magazine-tile">
                                <div className="image-holder">
                                    <a>
                                        <div className="image-mt" style={{ backgroundImage: "url(https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/nl_NL/v1587447440124/Collection-pages/2020/Jing/Jing-Collectionpage/Jing_Collectionpage_3Tile-Desktop-BedtimeRoutine-01.jpg?)" }}>

                                        </div>
                                    </a>
                                </div>
                                <div className="text-holder">
                                    <span className="ritual-name">JING | SLEEP</span>
                                    <p className="description">
                                        Tips from our expert for the perfect sleep routine
                                    </p>
                                    <a className="link">DISCOVER THE STEPS</a>
                                </div>
                            </div>
                            <div className="magazine-tile">
                                <div className="image-holder">
                                    <a>
                                        <div className="image-mt" style={{ backgroundImage: "url(https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/nl_NL/v1587447440124/Collection-pages/2020/Jing/Jing-Collectionpage/Jing_Collectionpage_3Tile-Desktop-BedtimeRoutine-01.jpg?)" }}>

                                        </div>
                                    </a>
                                </div>
                                <div className="text-holder">
                                    <span className="ritual-name">JING | SLEEP</span>
                                    <p className="description">
                                        Tips from our expert for the perfect sleep routine
                                    </p>
                                    <a className="link">DISCOVER THE STEPS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collection-narrow-highlight-block">
                    <div className="inner-wrapper">
                        <div className="media-column">
                            <div className="img-holder">

                            </div>
                        </div>
                        <div className="text-column">
                            <div className="column-inner">
                                <h3>RELAX ON THE GO</h3>
                                <h2>Relax with our app</h2>
                                <p>Create your path to inner peace with our articles, podcasts, yoga videos and guided meditations.</p>
                                <div className="action-boxes">
                                    <div className="col i-minTablet i-minDesktop">
                                        <div className="img-wrap" style={{ height: 100.422 }}>
                                            <img src="https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/nl_NL/v1587447440124/Collection-pages/2020/Jing/QR-code%20APP%20pagina.jpg?" />
                                        </div>
                                        <span className="image-label">Scan the code to open the app</span>
                                    </div>
                                    <div className="col">
                                        <div className="buttons-wrap">
                                            <a>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" />
                                            </a>
                                            <font style={{ marginBottom: 3 }}>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" />
                                            </font>
                                            <a>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" />
                                            </a>
                                        </div>
                                        <span className="image-label i-minTablet i-minDesktop">Download now & profit immediately</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="collection-grid-section">
                    <div className="product-grid-block">
                        <div className="heading-wrapper">
                            <h1 className="grid-heading">DISCOVER THE COLLECTION</h1>
                            <ul className="product-filters">
                                <li>
                                    <a className="filter-item selected">
                                        ALL
                                    </a>
                                </li>
                                <li>
                                    <a className="filter-item">
                                        DRAG
                                    </a>
                                </li>
                                <li>
                                    <a className="filter-item">
                                        RELAX
                                    </a>
                                </li>
                                <button className="filter-btn" onClick={() => this.setState({ modal: true })} >
                                    <FilterListIcon style={{ fontSize: 30, color: "white" }} />
                                </button>
                            </ul>
                        </div>
                        <div className="inner-wrapper">
                            <div className="grid-placeholder">
                                <div className="grid-wrap">
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwf847af0d/images/grid/1107134_TheRitualofJingFragranceSticksPROBOXgrid.png?sw=201&q=100" />
                                        </div>
                                        <div className="content-bimage">
                                            <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                            <h2>Shower Foam 50ml</h2>
                                            <p className="short-desc-bi">doucheschium</p>
                                            <p className="product-price-bi">€8,50</p>
                                            <button>IN WINKELMAND</button>
                                        </div>
                                    </div>
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw23454599/images/grid/1106885_TheRitualofJingSleepBathCrystalsPROgrid.png?sw=151&q=100" />
                                        </div>
                                        <div className="content-bimage">
                                            <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                            <h2>Shower Foam 50ml</h2>
                                            <p className="short-desc-bi">doucheschium</p>
                                            <p className="product-price-bi">€8,50</p>
                                            <button>IN WINKELMAND</button>
                                        </div>
                                    </div>
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw25a54d55/images/grid/1106876_TheRitualofJingBodyCream220mlPROgrid.png?sw=226&q=100" />
                                        </div>
                                        <div className="content-bimage">
                                            <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                            <h2>Shower Foam 50ml</h2>
                                            <p className="short-desc-bi">doucheschium</p>
                                            <p className="product-price-bi">€8,50</p>
                                            <button>IN WINKELMAND</button>
                                        </div>
                                    </div>
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dwf847af0d/images/grid/1107134_TheRitualofJingFragranceSticksPROBOXgrid.png?sw=201&q=100" />
                                        </div>
                                        <div className="content-bimage">
                                            <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                            <h2>Shower Foam 50ml</h2>
                                            <p className="short-desc-bi">doucheschium</p>
                                            <p className="product-price-bi">€8,50</p>
                                            <button>IN WINKELMAND</button>
                                        </div>
                                    </div>
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw23454599/images/grid/1106885_TheRitualofJingSleepBathCrystalsPROgrid.png?sw=151&q=100" />
                                        </div>
                                        <div className="content-bimage">
                                            <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                            <h2>Shower Foam 50ml</h2>
                                            <p className="short-desc-bi">doucheschium</p>
                                            <p className="product-price-bi">€8,50</p>
                                            <button>IN WINKELMAND</button>
                                        </div>
                                    </div>
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
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
                                    <div className="item" data-aos="fade-in">
                                        <div className="card-bimage">
                                            <img src="https://www.rituals.com/dw/image/v2/BBKL_PRD/on/demandware.static/-/Sites-rituals-products/default/dw25a54d55/images/grid/1106876_TheRitualofJingBodyCream220mlPROgrid.png?sw=226&q=100" />
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
                </section>
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

export default CollectionStoryJing
