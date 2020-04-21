import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css'

export class CollectionStoryJing extends Component {

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
                            </ul>
                        </div>
                        <div className="inner-wrapper">
                            <div className="grid-placeholder">
                                <div className="grid-wrap">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default CollectionStoryJing
