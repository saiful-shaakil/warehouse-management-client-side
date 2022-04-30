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
    <div className="laptop-collection">
      {laptops.map((laptop) => (
        <Laptop key={laptop._id} laptop={laptop}></Laptop>
      ))}
    </div>
  );
};

export default Laptops;
