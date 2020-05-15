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
                </div>
            </div>
        )
    }
}

export default Angeli
