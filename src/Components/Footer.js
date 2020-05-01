import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import './index.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="icons-footer-tab">
                    <FacebookIcon style={{ color: "white", margin: 4 }} />
                    <InstagramIcon style={{ color: "white", margin: 4 }} />
                    <EmailIcon style={{ color: "white", margin: 4 }} />
                </div>
                <div className="content-footer-tab">
                    <p>WEBSTORE | BLAIZ</p>
                </div>
            </div>
        )
    }
}

export default Footer
