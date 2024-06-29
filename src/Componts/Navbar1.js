import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import { FaGooglePlusG, FaTwitter, FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar1 = () => {
  return (
    <div className="container">
     <nav>
    <ul className="nav-ul">
        <li><a href="https://www.facebook.com/people/Prventiwell-Healthcare-LLP/61560436217009/"><FaFacebookF /></a></li>
        <li><a href="#">< FaTwitter /></a></li>
        <li><a href="#"><FaGooglePlusG /></a></li>
        <li><a href="#"><FaLinkedinIn /></a></li>
    </ul>
    <div className="top_link">
        <ul className="nav-link-2">
            <li><FaPhone className="faphone"/> +91 89838 90029</li>
            <li><IoMdMail className="faphone"/> <a className="anchor" href="mailto:corporate@preventiwell.com">corporate@preventiwell.com</a></li>
        </ul>
    </div>
</nav>  

      <div className="navbar-2">
        <div className="logo">
          <img src="https://preventiwell.pages.dev/img/pw-logo.png" alt="PreventiWell Logo" />
        </div>
        <div className="top-link">
          <ul className="top-link-dd">
            <li><Link className="navbarr" to="/">Home</Link></li>
            <li><Link className="navbarr" to="/about">About</Link></li>
            <li><Link className="navbarr" to="/contactUs">Contact Us</Link></li>
            <li><Link className="navbarr" to="/brochureDownload">Brochure Download</Link></li>
          </ul>
        </div>
        <div className="button">
          <button className="book-appointment">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
