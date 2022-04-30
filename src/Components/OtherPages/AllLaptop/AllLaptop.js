import React from "react";
import useLaptops from "../../../Hooks/useLaptop/useLaptops";
import Laptop from "../../Home/Laptop/Laptop";

const AllLaptop = () => {
  const [laptops, setLaptops] = useLaptops();
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

export default AllLaptop;
