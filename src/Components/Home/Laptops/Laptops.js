import React, { useEffect, useState } from "react";
import Laptop from "../Laptop/Laptop";
import "./Laptops.css";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("https://infinite-gorge-79896.herokuapp.com/laptopCollection")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  return (
    <div>
      <div className="text-center font-semibold mt-24 text-3xl header-text">
        <h1>Checkout our recent Laptop</h1>
        <h2></h2>
        <h3></h3>
      </div>
      <div className="laptop-collection">
        {laptops.map((laptop) => (
          <Laptop key={laptop._id} laptop={laptop}></Laptop>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
