import React, { useEffect, useState } from "react";
import EachBrand from "../EachBrand/EachBrand";
import "./BrandSection.css";

const BranSection = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    fetch("https://infinite-gorge-79896.herokuapp.com/brand")
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, []);
  return (
    <div className="brand-section">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl">Brand We Provide</h1>
        <h2></h2>
        <h3 className="mb-10"></h3>
      </div>
      <div className="brand">
        {brand.map((each) => (
          <EachBrand key={each._id} brand={each}></EachBrand>
        ))}
      </div>
    </div>
  );
};

export default BranSection;
