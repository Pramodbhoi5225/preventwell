import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carouselLoop.css";
const App = () => {
  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img className="shnjdjms" src="images/blood pressure.jpg" alt="" />
        </div>
        <div class="item">
          <img
            className="shnjdjms"
            src="images/hemoglobin.jpg"
            alt=""
          />
        </div>
        <div class="item">
          <img className="shnjdjms" src="images/oxygen.jpg" alt="" />
        </div>
        <div class="item">
          <img className="shnjdjms" src="images/temprature.jpg" alt="" />
        </div>
        <div class="item">
          <img className="shnjdjms" src="images/weight.jpg" alt="" />
        </div>
        <div class="item">
          <img className="shnjdjms" src="images/blood pressure.jpg" alt="" />
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default App;
