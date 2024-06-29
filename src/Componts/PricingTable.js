import React from 'react';
import './PricingTable.css'; // Import CSS file for styling
import { BsFillCheckCircleFill } from "react-icons/bs";

const PricingTable = () => {
  return (
    <section className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Insurance Plan</h2>
              {/* <img src="img/section-img.png" alt="#"> */}
              <p>Access essential health services at no cost with Preventiwell's insurance plan, designed to provide basic coverage and support for those in need.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  {/* <i className="icofont icofont-ui-cut"></i> */}
                </div>
                {/* <h4 className="title">Health Checkup Plan</h4> */}
                {/* <p>Health Checkup Annual 600/- Fee</p> */}
                <p><b>Health Checkup Annual 600/- Fees</b></p>
                {/* <div className="price">
                  <p className="amount"> 600/- <span>/ Per Year</span></p>
                </div> */}
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i class="fa-solid fa-check"></i>General Wards ₹500/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>ICU Wards ₹1000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>24 Hours Hospitalization compulsory</li>
                <li><i class="fa-solid fa-check"></i>Reimbursement amount will be credited directly to the bank account within 10 days.</li>
                <li><i class="fa-solid fa-check"></i>₹100000/- for permanent total or partial disability</li>
                <li><i class="fa-solid fa-check"></i>₹100000/- for accidental death benefits to the nominee</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="#">Book Now</a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  {/* <i className="icofont icofont-tooth"></i> */}
                </div>
                <p><b>Health Checkup Annual 1000/- Fees</b></p>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i class="fa-solid fa-check"></i>General Wards ₹1000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>ICU Wards ₹2000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>24 Hours Hospitalization compulsory</li>
                <li><i class="fa-solid fa-check"></i>Reimbursement amount will be credited directly to the bank account within 10 days.</li>
                <li><i class="fa-solid fa-check"></i>₹100000/- for permanent total or partial disability</li>
                <li><i class="fa-solid fa-check"></i>₹100000/- for accidental death benefits to the nominee</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="#">Book Now</a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  {/* <i className="icofont-heart-beat"></i> */}
                </div>
                <p><b>Health Checkup Annual 2000/- Fees</b></p>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i class="fa-solid fa-check"></i>General Wards ₹2000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>ICU Wards ₹4000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>24 Hours Hospitalization compulsory</li>
                <li><i class="fa-solid fa-check"></i>Reimbursement amount will be credited directly to the bank account within 10 days.</li>
                <li><i class="fa-solid fa-check"></i>₹300000/- for permanent total or partial disability</li>
                <li><i class="fa-solid fa-check"></i>₹300000/- for accidental death benefits to the nominee</li>
                
              </ul>
              <div className="table-bottom">
                <a className="btn" href="#">Book Now</a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  {/* <i className="icofont-heart-beat"></i> */}
                </div>
                <p><b>Health Checkup Annual 3000/- Fees</b></p>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i class="fa-solid fa-check"></i>General Wards ₹3000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>ICU Wards ₹6000/- Day for 30 days</li>
                <li><i class="fa-solid fa-check"></i>24 Hours Hospitalization compulsory</li>
                <li><i class="fa-solid fa-check"></i>Reimbursement amount will be credited directly to the bank account within 10 days.</li>
                <li><i class="fa-solid fa-check"></i>₹500000/- for permanent total or partial disability</li>
                <li><i class="fa-solid fa-check"></i>₹500000/- for accidental death benefits to the nominee</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="#">Book Now</a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
