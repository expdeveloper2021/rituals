import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Navbar from '../../Components/Navbar';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './index.css'

AOS.init();

export class CollectionStory extends Component {

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
                        className="full-bg-hcs"
                        style={{
                            backgroundImage: "url('http://rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw371c90ca/Collection-pages/Sakura/Banner-size-L-desktop-retina.jpg')",
                            transform: this.state.transition ? "scale(1.1)" : "scale(1)"
                        }}>
                        <span className="the-ritual-title" style={{ color: "white", textAlign: "center" }}>THE</span>
                        <h1 className="cs-heading" style={{ color: "white", textAlign: "center" }}>RITUAL OF SAKURA</h1>
                        <h2>CELEBRATE EACH DAY AS A NEW BEGINING</h2>
                        <button>SHOP DE COLLECTIE</button>
                    </div>
                </div>
                <div className="second-sec-cs">
                    <div className="inner-wrapper">
                        <p>
                            Tijdens de eeuwenoude Hanami ceremonie in Japan viert men de schoonheid van de Sakura bloesem. Deze kersenbloesem symboliseert dat het leven en schoonheid vluchtig zijn en dat je er dus vol overgave van moet genieten. Ontdek The R...
                        </p>
                        <button>SHOP DE COLLECTIE</button>
                    </div>
                </div>
                <div className="last-sec-cs">
                    <div className="first-content-last-cs">
                        <h4>NIEUW BEGIN</h4>
                        <h2>Nieuw begin in 4 stappen</h2>
                        <span className="read-time">
                            <QueryBuilderIcon style={{ fontSize: 18, marginRight: 10 }} />
                            26 MINUTEN
                        </span>
                        <p>
                            Elke dag voelt als een nieuw begin met de ontspannende geur van kersenbloesem.
                        </p>
                    </div>
                    <div className="second-content-last-cs">
                        <div className="img-secc-last-cs" style={{ backgroundImage: "url('https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw73199d6a/Collection-pages/Sakura/R3_Sakura_productslider_Step_04.jpg')" }} >

                        </div>
                        <div className="content-secc-last-cs">
                            <div className="slider-inner-wrap">
                                <h3>REINIGEN</h3>
                                <span className="read-time">
                                    3 MINUTEN
                                </span>
                                <p>Gebruik een kleine hoeveelheid gel. Geniet van het rijke, verzachtende schuim als het in contact met water komt.</p>
                                <div className="card-cslc">
                                    <div className="card-cs-img">
                                        <img src={`./assets/product1.webp`} width="100%" height="100%" />
                                    </div>
                                    <div className="content-cslc">
                                        <span style={{ textTransform: "uppercase" }} className="heading-hss">THE RITUAL OF SAKURA</span>
                                        <h1>Shower Foam 50ml</h1>
                                        <p>€8,50</p>
                                        <button>IN WINKELMAND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="third-content-last-cs">
                        <div className="inner-wrapper">
                            <h2>Ingrediënten</h2>
                            <p>Geniet van het leven met de luxe geur van Rijstmelk en Kersenbloesem.</p>
                        </div>
                        <div className="grid-system-tcls">
                            <div className="first-gstc">
                                <div className="inner-grid">
                                    <img src="https://www.rituals.com/on/demandware.static/-/Sites-rituals-products/default/dw018c04cc/images/ingredients/Cherry Blossom.png" />
                                </div>
                                <div className="inner-grid-text">
                                    <div className="igt-centered">
                                        <h3>Kersenbloesem</h3>
                                        <p>De fragiele bloesems van de 'sakura' (Japanse kers) worden door Japanse dichters vaak omschreven als 'lente-sneeuw'. In Japan zijn ze een oeroud symbool voor de wedergeboorte van de natuur en puurheid. De delicate geur is heerlijk ontspannend.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="second-gstc">
                                <div className="inner-grid">
                                    <img src="https://www.rituals.com/on/demandware.static/-/Sites-rituals-products/default/dwde44bd56/images/ingredients/Rice%20Milk.png" />
                                </div>
                                <div className="inner-grid-text">
                                    <div className="igt-centered">
                                        <h3>Kersenbloesem</h3>
                                        <p>In heel Azië staat rijst symbool voor overdaad, geluk en vruchtbaarheid. De essence van rijstmelk maakt de huid zacht, soepel en geeft haar een gezonde gloed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-system-tcls">
                            <div className="first-gstc" style={{ backgroundImage: "url('https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw35700541/Collection-pages/Sakura/R5_Sakura_2-Tile_L.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

                            </div>
                            <div className="second-gst">
                                <div className="inner-grid-text">
                                    <div className="igt-centered">
                                        <h2>Kersenbloesem geurstokjes</h2>
                                        <span className="read-time">
                                            <QueryBuilderIcon style={{ fontSize: 18, marginRight: 10 }} />
                                            3 MINUTEN
                                        </span>
                                        <p>Geniet het hele jaar door van een lentegevoel in huis met de heerlijk zoete geur van biologische witte rijst en kersenbloesem. The Ritual of Sakura geurstokjes zijn perfect voor elke kamer.</p>
                                        <h1>Fragrance Sticks</h1>
                                        <span className="price-igt">€8,50</span>
                                        <br />
                                        <button>IN WINKELMAND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-sec-last">
                        <h1>SHOP SAKURA</h1>
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

                {/* FIxed Div */}
                <div className="fixed-div">
                    <img src="https://d6tizftlrpuof.cloudfront.net/themes/prod/01d2321098ef35c6be46e1a25f247ad4" />
                </div>
            </div>
        )
    }
}

export default CollectionStory
