import React, { Component } from 'react'
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './index.css'
import Navbar from '../../Components/Navbar';

AOS.init();

export class HomeDuplicate extends Component {

    constructor() {
        super()
        this.state = {
            transition: false,
            arr: ["1", "2", "3", "4", "5", "6"]
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
            <div className="main-hd">
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
                                {/* <div className="ico-logorh d-none d-md-block">
                                </div> */}
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
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/first.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/first.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/first.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/first.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
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
                                    <h3>Ons cadeau voor jou</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fifth.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fifth.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fifth.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/fifth.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
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
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
                                </div>
                            </div>
                            <div className="card-rit" data-aos="fade-in">
                                <div className="content-crit">
                                    <h3>The Ritual of Shakura</h3>
                                    <p className="p-cr">Voor iedereen is de perfecte geur te vinden in deze uitgebreide collectie van rijke, frisse en bloemige geuren voor in huis.</p>
                                </div>
                                <div className="img-crit">
                                    <img src="./assets/third.jpg" width="100%" height="100%" />
                                </div>
                                <div className="content-crit">
                                    <button>SHOP BESTSELLERS</button>
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

export default HomeDuplicate
