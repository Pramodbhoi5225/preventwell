import React from 'react';
import './Servicesss.css'
const ServicesSection = () => {
  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Comprehensive Health checkup Test</h2>
              {/* <img src="img/section-img.png" alt="#"> */}
              <p>
                Regular health screenings help identify potential health issues
                early.<br /> Our comprehensive tests ensure you stay informed
                and proactive about your health.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
            <i class="fa-sharp fa-light fa-hand-heart"></i>
              <h4>BP</h4>
              <p>Monitoring blood pressure to keep it in check</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-blood-test"></i>
              <h4>Blood Sugar</h4>
              <p>Regular blood sugar level checks</p>
            </div>
            {/* End Single Service */}  
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-thermometer"></i>
              <h4>Temperature</h4>
              <p>Measuring body temperature for health monitoring.</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-text-height"></i>
              <h4>Height & Weight</h4>
              <p>Tracking height and weight for overall health</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-speed-meter"></i>
              <h4>BMI</h4>
              <p>Calculating Body Mass Index for health assessment.</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-dna-alt-1"></i>
              <h4>HB</h4>
              <p>Checking hemoglobin levels in the blood</p>
            </div>
            {/* End Single Service */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Start Single Service */}
            <div className="single-service">
              <i className="icofont-blood-drop"></i>
              <h4>Blood Group</h4>
              <p>Identifying blood group type.</p>
            </div>
            {/* End Single Service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
