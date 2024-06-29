import React from "react";
import Card from "../Card";
import LoopCarousel from "../LoopCarousel";
import ServicesSection from "../ServicesSection";
import PricingTable from "../PricingTable";
import BlogArea from "../BlogArea";
import Appointment from "../Appointment";
import Newsletter from "../Newsletter";
import "./Home.css";
import CorouselImage from "../CorouselImage";
import MyCarousel from "../MyCarousel";
const Home = () => {
  return (
    <div>
      <div className="cardintodiv">
        <div>
          {" "}
          <CorouselImage />
        </div>
        <div className="cards">
          {" "}
          <Card />
        </div>
      </div>
      <LoopCarousel />
      <ServicesSection />
      <PricingTable />
      <BlogArea />
      <Appointment />
      <Newsletter />
      {/* <MyCarousel/> */}
    </div>
  );
};

export default Home;
