import React from 'react';
import './AboutUs.css'
import { FaTwitter,FaFacebookF,FaLinkedin } from "react-icons/fa";
const AboutUs = () => {
  return (
   <div>
     <div className='breadcrumbs'>
      <img src="images/aboutus.jpg" alt="" />
      </div>

      <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>PreventiWell Healthcare LLP</h2>
              {/* <img src="images/123.jpeg" alt="#"/> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* Start Choose Left */}
            <div className="choose-left">
              <h3>About Us</h3>
              <p>
                PreventiWell Healthcare LLP is collaborating with eHealth System Technologies LLP, a company dedicated to healthcare and wellness programs.
              </p>
              <p>
                The venture aims to implement Pan India Micro Insurance Schemes along with integrated health checkups, with the primary objective of improving well-being and ensuring well-protected health and life.
              </p>
              <p>
                To comply with IRDAI guidelines, eHealth System Technologies LLP is partnering with Lifemart Insurance Brokers Pvt. Ltd., a broker registered under IRDAI, to facilitate insurance activities as a Master Policy Holder for eHealth System Technologies LLP.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list">
                    <li><i className="fa fa-caret-right"></i>Benefits Overview</li>
                    <li><i className="fa fa-caret-right"></i>Coverage Types</li>
                    <li><i className="fa fa-caret-right"></i>Cost Management</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list">
                    <li><i className="fa fa-caret-right"></i>Claim Process</li>
                    <li><i className="fa fa-caret-right"></i>Provider Networks</li>
                    <li><i className="fa fa-caret-right"></i>Policy Options</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Choose Left */}
          </div>
          <div className="col-lg-6 col-12">
            {/* Start Choose Rights */}
            <div className="choose-right">
              <div className="image">
               
                <img src="images/123.jpeg" alt="#"/>
              </div>
            </div>
            {/* End Choose Rights */}
          </div>
        </div>
      </div>
    </section>
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Our Directors</h2>
            {/* <img src="img/section-img.png" alt="#"> */}
            <p></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <img className="pteam img-fluid" src="images/vishals.jpeg" alt="Vishal Satpute" />
              <p className="mt-2"><b>Vishal Satpute</b></p>
              <p>Director &amp; Founders</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/profile.php?id=61560436217009">
                  <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <img className="pteam img-fluid" src="images/amols.jpeg" alt="Amol Dhumma" />
              <p className="mt-2"><b>Amol Dhumma</b></p>
              <p>Director &amp; Founders</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/profile.php?id=61560436217009">
                  <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="mb-5">About Our Founders</h3>
              <p>
                Preventiwell Healthcare LLP, co-founded by Vishal Satpute and Amol Dhumma, is a new venture focused on preventive healthcare solutions, aiming to empower individuals to take proactive steps towards their well-being. In a similar vein, Aditya Birla Healthcare Insurance, led by visionary founders, represents an innovative approach to healthcare financing, aiming to redefine insurance through comprehensive coverage and superior customer experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <h1 className="text-center mb-4">What Our Clients Say</h1>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="testimonial-card shadow p-4 rounded">
                  <div className="testimonial-content">
                    <p>
                      PreventiWell has provided exceptional service for over three years. Their comprehensive coverage
                      and straightforward claims process, backed by friendly customer service, make them highly
                      recommendable.
                    </p>
                    <div className="testimonial-author d-flex align-items-center">
                      <img
                        style={{ height: '60px', marginRight: '20px', marginTop: '5px' }}
                        src="img/ashwini.jpeg"
                        className="rounded-circle me-3"
                        alt="Rohini"
                      />
                      <div>
                        <h5>Rohini Patil</h5>
                        <div className="google-review">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="testimonial-card shadow p-4 rounded">
                  <div className="testimonial-content">
                    <p>
                      PreventiWell's customer care and support have been outstanding during my chronic condition
                      treatment. Their extensive provider network ensured I received top-notch care without any hassle.
                    </p>
                    <div className="testimonial-author d-flex align-items-center">
                      <img
                        style={{ height: '60px', marginRight: '20px', marginTop: '5px' }}
                        src="img/p-rohit.jpeg"
                        className="rounded-circle me-3"
                        alt="Pramod Bhoi"
                      />
                      <div>
                        <h5>Pramod Bhoi</h5>
                        <div className="google-review">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="testimonial-card shadow p-4 rounded">
                  <div className="testimonial-content">
                    <p>
                      Switching to PreventiWell was a great decision. Their affordable plans and quality service,
                      especially the wellness programs, have encouraged me to live healthier. They have exceeded my
                      expectations.
                    </p>
                    <div className="testimonial-author d-flex align-items-center">
                      <img src="img/nikhil.jpg" className="rounded-circle me-3" alt="Nikhil Borse" />
                      <div>
                        <h5>Nikhil Borse</h5>
                        <div className="google-review">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star-half-o checked"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="testimonial-card shadow p-4 rounded">
                  <div className="testimonial-content">
                    <p>
                      The level of support and care provided by PreventiWell is exceptional. Their team is always ready
                      to help, and their services are comprehensive and reliable.
                    </p>
                    <div className="testimonial-author d-flex align-items-center">
                      <img src="img/someone.jpg" className="rounded-circle me-3" alt="Another Client" />
                      <div>
                        <h5>Another Client</h5>
                        <div className="google-review">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default AboutUs;
