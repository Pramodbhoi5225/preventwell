import React from 'react'
import './Contact.css'
const ContactUs = () => {
  return (
    <div>
    
      <div className="image">
        <img src="images/aboutus.jpg" alt="" />
      </div>
      <section className="contact-us section">
            <div className="container">
                <div className="inner">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-us-left">
                                {/* Google Map */}
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe
                                            className="gmap_iframe"
                                            width="100%"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            src="https://maps.google.com/maps?width=540&amp;height=611&amp;hl=en&amp;q=preventiwell%20health&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        ></iframe>
                                        <a href="https://strandsgame.net/">Strands Game</a>
                                    </div>
                                    <style>{`.mapouter{position:relative;text-align:right;width:100%;height:611px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:611px;}.gmap_iframe {height:611px!important;}`}</style>
                                </div>
                                {/* End Google Map */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-us-form">
                                <h2>Contact With Us</h2>
                                <p>If you have any questions please fell free to contact with us.</p>
                                {/* Contact Form */}
                                <form className="form" method="post" action="mail/mail.php">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Your Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group login-btn">
                                                <button className="btn" type="submit">Send</button>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox-inline" htmlFor="2">
                                                    <input name="news" id="2" type="checkbox" />Do you want to subscribe our Newsletter ?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="row">
                        {/* Contact Information */}
                        <div className="col-lg-4 col-12">
                            <div className="single-info">
                                <i className="icofont icofont-ui-call"></i>
                                <div className="content">
                                    <h3>+91 89838 90029</h3>
                                    <p>corporate@preventiwell.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-info">
                                <i className="icofont-google-map"></i>
                                <div className="content">
                                    <h3>S.No.1073, Bhosale Mystica</h3>
                                    <p>P.No.425,Model Colony, Pune</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-info">
                                <i className="icofont icofont-wall-clock"></i>
                                <div className="content">
                                    <h3>Mon - Sat:<br />10Am - 6Pm</h3>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Information */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUs
