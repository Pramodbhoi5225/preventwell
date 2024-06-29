import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Corousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CorouselImage = () => {
  return (

    <div className="carousel-container" >
      <Carousel>
        <Carousel.Item>
          <img src="images/slider1.jpg" alt="First slide" className="d-block w-100 corouselImage" />
          <Carousel.Caption>
            <h1>
              Comprehensive <span>Health</span> Insurance for Your Family's <span>Well-being</span>
            </h1>
            <p>
              Experience all-inclusive health insurance plans that cover a wide range of medical services,
              ensuring you and your family are protected.
            </p>
            <div className="button">
              <a href="appointment.html" className="btn btn-primary">Get Appointment</a>
              <a href="#" className="btn btn-secondary">About Us</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/slider2.jpg" alt="Second slide" className="d-block w-100 corouselImage" />
          <Carousel.Caption>
            <h1>
              Affordable <span>Premiums</span> with Extensive <span>Health Coverage Benefits</span>
            </h1>
            <p>
              Enjoy top-tier health insurance without breaking the bank, with Preventiwell's competitively
              priced premium options tailored for every budget.
            </p>
            <div className="button">
              <a href="appointment.html" className="btn btn-primary">Get Appointment</a>
              <a href="#" className="btn btn-secondary">Learn More</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/slider3.jpg" alt="Third slide" className="d-block w-100 corouselImage" />
          <Carousel.Caption>
            <h1>
              Personalized <span>Plans</span> for Every Life <span>Stage</span>
            </h1>
            <p>
              Tailored health insurance plans to suit different life stages and needs, ensuring optimal coverage at all times.
            </p>
            <div className="button">
              <a href="appointment.html" className="btn btn-primary">Get Appointment</a>
              <a href="#" className="btn btn-secondary">Contact Now</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <div style={{position:"relative"}}>
      <section className="schedule"style={{marginTop:"-50px",zIndex:"1000"}}>
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      {/* <i className="fa fa-ambulance"></i> */}
                    </div>
                    <div className="single-content">
                      <span className="schedule-category">Improved</span>
                      <h4 className="schedule-title">Employee Well-being</h4>
                      <p className="schedule-description">
                        Enhance the overall health and well-being of employees,
                        leading to increased job satisfaction and productivity.
                      </p>
                      <a href="#" className="schedule-link">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span className="schedule-category">Reduced</span>
                      <h4 className="schedule-title">Absenteeism</h4>
                      <p className="schedule-description">
                        Minimize lost workdays due to illness with health
                        insurance plans that promote a healthier workforce.
                      </p>
                      <a href="#" className="schedule-link">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span className="schedule-category">Health</span>
                      <h4 className="schedule-title">Education</h4>
                      <p className="schedule-description">
                        Empower employees with knowledge about their health
                        status, encouraging a healthier lifestyle.
                      </p>
                      <a href="#" className="schedule-link">
                        LEARN MORE <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </div>
  );
}

export default CorouselImage;
