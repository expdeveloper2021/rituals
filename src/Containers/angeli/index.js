import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

export class Angeli extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="adi-main">
                    <section className="first-sec-adi">
                        <div className="image-fsa">
                            <div className="id-fsa">

                            </div>
                            <div className="mobile-id-fsa">
                                <span>
                                    <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/1.jpg" />
                                </span>
                            </div>
                        </div>
                        <div className="content-fsa" data-aos="fade-right">
                            <div className="text-cfsa">
                                <div className="tfsa-inner">
                                    <h5>
                                        ANGELI DI BOSCA
                                    </h5>
                                    <p>&nbsp;</p>
                                    <h6>EXALTED QUALITY, A CROWNING ACHIEVEMENT ON YOUR MARRIAGE.</h6>
                                    <h6>&nbsp;</h6>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="second-sec-adi" id="info">
                        <div className="ssa-inner">
                            <div className="image-ssa">
                                <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/2.jpg" />
                            </div>
                            <div className="content-ssa">
                                <div className="text-cssa">
                                    <h2>ANGELI DI BOSCA</h2>
                                    <p>
                                        <font>The jewelery brand Angeli Di Bosca stands for quality and design that are visible in the beautiful collections and of course after</font>
                                        <br />
                                        <font> the roots of the brand, namely PC Boschmans. The Boschmans house was founded in 1865 and stands for “A Passion for Perfection”.</font>
                                        <br />
                                        <font> In 2005, the company took the ultimate step to perfection by</font>
                                        <br />
                                        <font> designing and releasing its own collections under the Angeli Di Bosca house brand .</font>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="third-sec-adi">
                        <div className="heading-tsa">
                            <div className="text-inner-hts">
                                <div style={{ maxWidth: 800, textAlign: "center", margin: "0px auto" }}>
                                    <h2>
                                        <font>ANGELI DI BOSCA WEDDING RINGS</font>
                                        <p></p>
                                        <p>ZAANDAM</p>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="first-content-tsa">
                            <div className="image-fcts" data-aos="zoom-in">
                                <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/3.jpg" />
                            </div>
                            <div className="content-fcts" data-aos="fade-left">
                                <div className="content-inner-cft">
                                    <h3>DURABILITY</h3>
                                    <p>
                                        <font>The right to a decent existence and sustainability are the core values ​​of Angeli Di Bosca. The jewelery brand therefore guarantees that every ring with or without diamond is made free of conflict and child labor. It is an exclusive brand that stands for high quality and offers</font>
                                        <br />
                                        <font> unique engagement and wedding rings. The rings are available with or without diamond in white, yellow or rose gold. Angeli Di Bosca makes</font>
                                        <br />
                                        <font> everyone smile at one of the most beautiful moments of their lives.</font>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="second-content-tsa">
                            <div className="first-content-sct">
                                <div className="image-fcsct" data-aos="zoom-in">
                                    <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/4.jpg" />
                                </div>
                                <div className="content-fcsct" data-aos="fade-up">
                                    <h3>MOST BEAUTIFUL MOMENT</h3>
                                    <p>
                                        <font>The moment of an engagement or marriage should be unforgettable, a new discovery of life and that is exactly what drives</font>
                                        <br />
                                        <font> Angeli Di Bosca. The collections fuse exclusivity and class with a contemporary design and various designs for every budget.</font>
                                    </p>
                                </div>
                            </div>
                            <div className="second-content-sct">
                                <div className="image-scsct" data-aos="zoom-in">
                                    <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/5.jpg" />
                                </div>
                                <div className="content-scsct" data-aos="fade-up">
                                    <h3>QUALITY FROM ATELIER</h3>
                                    <p>Each ring is manufactured in our own workshop with the utmost care for quality and each model is available in 14 or 18 carat yellow gold or white gold and with or without brilliant.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="fourth-sec-adi">
                        <div className="content-fsad">
                            <div className="ci-fsad">
                                <h3 style={{ fontSize: 36 }}>
                                    DIAMOND
                                </h3>
                                <p>
                                    <font>
                                        Angeli di Bosca's rings are created in the world center of diamonds, Antwerp.
                                    </font>
                                    <br />
                                    <font>
                                        Special about these wedding rings is that the rings are made of recycled gold. Old jewelery and
                                    </font>
                                    <br />
                                    <font>
                                        precious metals are converted into pure raw materials and alloys, from which the wedding rings
                                    </font>
                                    <br />
                                    <font>
                                        are made. In addition, the rings have a perfect finish and there is an extraordinary eye for detail.
                                    </font>
                                    <br />
                                    <font>
                                        Which is also immediately noticeable when you take a look at the rings of this Belgian wedding ring brand.
                                    </font>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Angeli
