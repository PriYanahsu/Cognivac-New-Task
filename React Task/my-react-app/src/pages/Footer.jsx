import React from 'react'
import './Footer.css'
import FooterImg from '../assets/Footer/FooterLogo.png'
import FooterDarkImage from '../assets/Footer/FooterDark.png'


const Footer = ({isDarkMode}) => {
    return (
        <div className='Footer'>
            <div className="FooterInnerUp">
                <div className="image1">
                    <img src={isDarkMode ? FooterDarkImage : FooterImg} alt="footerImg" />
                </div>
                <div className="FooterInnerRight">
                    <div className="RightDiv">
                        <div className="title">
                            <h3>About</h3>
                        </div>
                        <div className="Value">
                            <p>Company Overview</p>
                            <p>Careers</p>
                            <p>Press & Media</p>
                            <p>Testimonials</p>
                        </div>
                    </div>
                    <div className="RightDiv">
                        <div className="title">
                            <h3>Resources</h3>
                        </div>
                        <div className="Value">
                            <p>Blog</p>
                            <p>Help Center</p>
                            <p>Webinars & Events</p>
                            <p>Case Studies</p>
                        </div>
                    </div>
                    <div className="RightDiv">
                        <div className="title">
                            <h3>Support & Contact</h3>
                        </div>
                        <div className="Value">
                            <p>Contact Us</p>
                            <p>Technical Support</p>
                            <p>Feedback</p>
                            <p>Community Forum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerInnerDown">
                <div className="footerInnerDownLeft">
                    <p>©2023 NIMBUS · All rights reserved.</p>
                </div>
                <div className="footerInnerDownRight">
                    <div className="InnerDiv"><p>Term of use</p></div>
                    <div className="InnerDiv"><p>Privacy policy</p></div>
                    <div className="InnerDiv"><p>Security</p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
