import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import './index.css'

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
                        </div>
                        <div className="content-fsa">
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
                                        <font>the roots of the brand, namely PC Boschmans. The Boschmans house was founded in 1865 and stands for “A Passion for Perfection”.</font>
                                        <br />
                                        <font>In 2005, the company took the ultimate step to perfection by</font>
                                        <br />
                                        <font>designing and releasing its own collections under the Angeli Di Bosca house brand .</font>
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
                            <div className="image-fcts">
                                <img src="http://www.zonjee-juwelier.nl/wp-content/uploads/2019/06/3.jpg" />
                            </div>
                            <div className="content-fcts">
                                <div className="content-inner-cft">
                                    <h3>DURABILITY</h3>
                                    <p>
                                        <font>The right to a decent existence and sustainability are the core values ​​of Angeli Di Bosca. The jewelery brand therefore guarantees that every ring with or without diamond is made free of conflict and child labor. It is an exclusive brand that stands for high quality and offers</font>
                                        <br />
                                        <font>unique engagement and wedding rings. The rings are available with or without diamond in white, yellow or rose gold. Angeli Di Bosca makes</font>
                                        <br />
                                        <font>everyone smile at one of the most beautiful moments of their lives.</font>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Angeli
