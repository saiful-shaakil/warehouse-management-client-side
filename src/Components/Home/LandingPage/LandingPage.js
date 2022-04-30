import React from "react";
import Banner from "../Banner/Banner";
import Laptops from "../Laptops/Laptops";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Banner></Banner>
      <Laptops></Laptops>
    </div>
  );
};

export default LandingPage;
