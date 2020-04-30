import React, { Component } from 'react'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css'
import Navbar from '../../Components/Navbar';

AOS.init();

export class Home extends Component {

    constructor() {
        super()
        this.state = {
            transition: false,
            arr: ["1", "2", "3", "4", "5", "6"],
            right: false,
            rightSecond: false,
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

    slideLeft(e) {
        if (e === "first") {
            let element = document.getElementById("first-slider")
            element.scrollLeft += 200
            if (element.scrollLeft > -100) {
                this.setState({ right: true })
            } else {
                this.setState({ right: false })
            }
        } else {
            let element = document.getElementById("second-slider")
            element.scrollLeft += 200
            if (element.scrollLeft > -100) {
                this.setState({ rightSecond: true })
            } else {
                this.setState({ rightSecond: false })
            }
        }
    }

    slideRight(e) {
        if (e === "first") {
            let element = document.getElementById("first-slider")
            element.scrollLeft -= 200
            if (element.scrollLeft > 250) {
                this.setState({ right: true })
            } else {
                this.setState({ right: false })
            }
        } else {
            let element = document.getElementById("second-slider")
            element.scrollLeft -= 200
            if (element.scrollLeft > 250) {
                this.setState({ rightSecond: true })
            } else {
                this.setState({ rightSecond: false })
            }
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="bg-main-firsth">
                    <div
                        className="full-bg-hf"
                        style={{
                            backgroundImage: "url('https://www.rituals.com/on/demandware.static/-/Library-Sites-RitualsSharedContent/default/dw982060e6/COP-banners/2020/easter-2020/Homepage-hero-banner-regular_S_1440x480.jpg')",
                            transform: this.state.transition ? "scale(1.1)" : "scale(1)"
                        }}>
                        <div className="inner-wrapper" style={{ zIndex: 100 }}>
                            <div className="inner-intended">
                                <div className="ico-logorh d-none d-md-block">
                                </div>
                                <h1 className="heading-bhf txt-white" >Een paasverrassing</h1>
                                <p className="txt-white">Deel een luxueus cadeau, speels verpakt als een paasei</p>
                                <button>VUL JE MAND</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="start-sec-second">
                    <p className="heading-hss">AT YOUR SERVICE</p>
                    <p className="cont-hss">Levering 2-3 dagen in verband met drukte</p>
                </div>
                <div className="card-sec-rit">
                    <div className="inner-wrapper">
                        <div className="all-cards-rit">
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">EXCLUSIEF VOOR MY RITUALS MEMBERS</span>
                                    <h3>Ons cadeau voor jou</h3>
                                    <p className="p-cr">Ontvang een Jing set, <br /> bij besteding vanaf €40.</p>
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/second.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                    <button>SHOP NU</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/first.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-sec-main">
                    <div className="slider-products" id="first-slider">
                        <div className="sp-card hiddenMob">
                            <h2>Favorieten in spe</h2>
                            <h3>Nieuw binnen</h3>
                            <p>Begin je dag met een heerlijk <br /> ontspannende verzorgingsroutine en <br /> verwen je huid met jouw favoriete producten.</p>
                            <button>SHOP NU</button>
                        </div>
                        {this.state.arr.map((e) => {
                            return <div className="sp-card" key={e}>
                                <div className="img-cardsp">
                                    <img src={`./assets/product${e}.webp`} width="100%" height="100%" />
                                </div>
                                <div className="content-cardsp">
                                    <h1 className="product-title">Easter Egg Giftset</h1>
                                    <p className="product-price">€8,50</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="slider-actions">
                        <button className={`slider-button ${!this.state.right && "hidden"}`} onClick={this.slideRight.bind(this, "first")}>
                            <ChevronLeftIcon style={{ fontSize: 44 }} />
                        </button>
                        <button className="slider-button" onClick={this.slideLeft.bind(this, "first")}>
                            <ChevronRightIcon style={{ fontSize: 44 }} />
                        </button>
                    </div>
                </div>
                <div className="card-sec-rit">
                    <div className="inner-wrapper">
                        <div className="all-cards-rit">
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>Ons cadeau voor jou</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fifth.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                    <button>SHOP NU</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/sixth.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-sec-main">
                    <div className="slider-products" id="second-slider">
                        <div className="sp-card hiddenMob">
                            <h2>Favorieten in spe</h2>
                            <h3>Nieuw binnen</h3>
                            <p>Begin je dag met een heerlijk <br /> ontspannende verzorgingsroutine en <br /> verwen je huid met jouw favoriete producten.</p>
                            <button>SHOP NU</button>
                        </div>
                        {this.state.arr.map((e) => {
                            return <div className="sp-card" key={e}>
                                <div className="img-cardsp">
                                    <img src={`./assets/product${e}.webp`} width="100%" height="100%" />
                                </div>
                                <div className="content-cardsp">
                                    <h1 className="product-title">Easter Egg Giftset</h1>
                                    <p className="product-price">€8,50</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="slider-actions">
                        <button className={`slider-button ${!this.state.rightSecond && "hidden"}`} onClick={this.slideRight.bind(this)}>
                            <ChevronLeftIcon style={{ fontSize: 44 }} />
                        </button>
                        <button className="slider-button" onClick={this.slideLeft.bind(this)}>
                            <ChevronRightIcon style={{ fontSize: 44 }} />
                        </button>
                    </div>
                </div>
                <div className="card-sec-rit">
                    <div className="inner-wrapper">
                        <div className="all-cards-rit">
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">EXCLUSIEF VOOR MY RITUALS MEMBERS</span>
                                    <h3>Ons cadeau voor jou</h3>
                                    <p className="p-cr">Ontvang een Jing set, <br /> bij besteding vanaf €40.</p>
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                    <button>SHOP NU</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fourth.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-sec-rit">
                    <div className="inner-wrapper">
                        <div className="all-cards-rit">
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <span style={{ textTransform: "uppercase" }} className="heading-hss">EXCLUSIEF VOOR MY RITUALS MEMBERS</span>
                                    <h3>Ons cadeau voor jou</h3>
                                    <p className="p-cr">Ontvang een Jing set, <br /> bij besteding vanaf €40.</p>
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                    <button>SHOP NU</button>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fourth.jpg" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-sec-home">
                    <div className="inner-wrapper" >
                        <div className="img-lah">
                            <img src="./assets/last.jpg" />
                        </div>
                        <div className="content-lah">
                            <h3>Ontdek My Rituals</h3>
                            <p>Ontdek de wereld van My Rituals en laat je verrassen. Je welkomstcadeau staat al voor je klaar!</p>
                            <button>WORD MEMBER</button>
                            <span>
                                <SlowMotionVideoIcon style={{ marginRight: 6, fontSize: 27 }} />Bekijk De Video
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
