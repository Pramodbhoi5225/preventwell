import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CiMedicalClipboard } from "react-icons/ci";
import "./Card.css";

const Card = () => {
  return (
    <div className="container1">
      <section className="features-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-4 mt-40 ">
                <h2>We Are Always Ready to Help You & Your Family</h2>
                <p>
                  PreventiWell Healthcare LLP focuses on preventive care, offers
                  comprehensive coverage, and emphasizes wellness programs for
                  healthy living.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="single-feature">
                <div className="icon">
                  <img src="images/medical-sign-alt.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Health Plans</h3>
                  <p className="feature-description">
                    Our health plans provide comprehensive coverage...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-feature">
                <div className="icon">
                  <img src="images/medical-sign-alt.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Wellness Programs</h3>
                  <p className="feature-description">
                    Engage in our wellness programs designed to promote
                    healthy...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-feature">
                <div className="icon">
                  <img src="images/medical-sign-alt.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Medical Support</h3>
                  <p className="feature-description">
                    Access top-notch medical support and services...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="fun-facts" className="fun-facts-section section overlay">
        <div className="">
          <div className="row omahegs">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fact bg-transparent">
                <i className="icofont icofont-prescription"></i>
                <span>
                  <span className="fact-counter" style={{ color: "white" }}>
                    62
                  </span>
                  <p className="fact-description" style={{ color: "white" }}>
                    Claims Processed
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fact bg-transparent color-white">
                {/* <i className="icofont-simple-smile"></i> */}
                <div className="fact-content ">
                  <span className="fact-counter" style={{ color: "white" }}>
                    1000
                  </span>
                  <p className="fact-description" style={{ color: "white" }}>
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fact">
                <div className="fact-content">
                  {/* <img src="images/image1.jpeg" alt="" /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fact">
                <div className="fact-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Health Insurance</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>What is Health Insurance?</h3>
                <p>
                  Health insurance is a financial plan that covers medical
                  expenses, ensuring individuals can access necessary healthcare
                  without facing high costs. It's like a safety net for your
                  health and finances
                </p>
                <p>
                  Moreover, health insurance can mitigate concerns about daily
                  wages loss due to illness or injury, providing financial
                  support during times of incapacity to work.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="feature-list">
                      <li>
                        <i className="fa fa-caret-right "></i>Benefits Overview
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Coverage Types
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Cost Management
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="feature-list">
                      <li>
                        <i className="fa fa-caret-right"></i>Claim Process
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Provider Networks
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i>Policy Options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="choose-right">
                <img src="images/child.jpg" alt="Health Insurance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <div className="row douneed">
          <div className="col-lg-12 col-md-12 col-12 bg-transparent">
            <div className="content bg-transparent" style={{boxShadow:"none"}}>
              <h2>Do you need? Call +91 89838 90029</h2>
              <p>
                At PreventiWell Healthcare LLP, we prioritize your health and
                well-being. If you find yourself in need of any insurance
                related query, our team is here to provide you with immediate
                assistance and support.
              </p>
              <div className="button">
                <a href="#" className="btn">
                  Contact Now
                </a>
                <a href="#" className="btn second">
                  Learn More<i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Test Equipment Photos</h2>
            {/* <img src="images/child.jpg" alt="#"/> */}
            <p>
              Explore our collection of photos showcasing the equipment used for
              various tests. These images provide an insight into the tools and
              devices utilized in medical examinations for different age groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
