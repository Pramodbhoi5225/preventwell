import React, { useState } from 'react';
import './Appointment.css'; 
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(),
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Book An Appointment</h2>
              {/* <img src="img/section-img.png" alt="#"> */}
              <p></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <form className="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-group">
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      className="form-control"
                      name="date"
                      placeholderText="Date"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className='textareaform'
                      placeholder="Write Your Message Here....."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                  <div className="form-group">
                    <div className="button">
                      <button type="submit" className="btn">Book An Appointment</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12">
                  {/* <p>( We will be confirm by an Text Message )</p> */}
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appointment-image">
              <img src="images/contact-img.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
