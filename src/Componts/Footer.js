import React from 'react';
import './Footer.css'
// import Icofont from 'react-icofont';

import { FaFacebookF , FaTwitter ,FaGooglePlus} from "react-icons/fa";
const Footer = () => {
    return (
        <div>
        <footer id="footer" className="footer">
            {/* Footer Top */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>About Us</h2>
                                <p>Prevntiwell Healthcare LLP offers innovative preventive healthcare solutions and personalized care.</p>
                                {/* Social */}
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/profile.php?id=61560436217009"><FaFacebookF />
                                    </a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaGooglePlus /></a></li>
                                </ul>
                                {/* End Social */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer f-link">
                                <h2>Quick Links</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li className='hhdjjd'><a href="/"><i className="fa fa-caret-right hhdjjd" aria-hidden="true"></i>Home</a></li>
                                            <li className='hhdjjd'><a href="/about"><i className="fa fa-caret-right hhdjjd" aria-hidden="true"></i>About Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li className='hhdjjd'><a href="/contactUs"><i className="fa fa-caret-right hhdjjd" aria-hidden="true"></i>Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Open Hours</h2>
                                <p>PreventiWell HealthCare LLP</p>
                                <ul className="time-sidual">
                                    <li className="day">Monday - Saturday <span></span></li>
                                    <li className="day">10.00 Am - 6.00 Pm <span></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer">
                                <h2>Newsletter</h2>
                                <p>Subscribe for updates on Prevntiwell Healthcare's latest innovations and wellness tips!</p>
                                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                    <input name="email" placeholder="Email Address" className="common-input" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Your email address'} required type="email" />
                                    <button className="button" fdprocessedid="ei0l"><button className="button" fdprocessedid="ei0l"><i class="icofont icofont-paper-plane"></i></button></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ End Footer Top */}
            </footer>
            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="copyright-content">
                                <p>© Copyright 2024 PreventiWell |  All Rights Reserved. Designed By CellBeans </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ End Copyright */}
           
        
     
        </div>
    );
}

export default Footer;
