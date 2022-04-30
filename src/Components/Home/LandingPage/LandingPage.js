import React from "react";
import Banner from "../Banner/Banner";
import Laptops from "../Laptops/Laptops";
import SupportSection from "../SupportSection/SupportSection";
import TrustedSection from "../TrustedSection/TrustedSection";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Banner></Banner>
      <SupportSection></SupportSection>
      <Laptops></Laptops>
      <TrustedSection></TrustedSection>
    </div>
  );
};

export default LandingPage;
