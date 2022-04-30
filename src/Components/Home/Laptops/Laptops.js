import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLaptops from "../../../Hooks/useLaptop/useLaptops";
import Laptop from "../Laptop/Laptop";
import "./Laptops.css";

const Laptops = () => {
  const navigate = useNavigate();
  const [laptops, setLaptops] = useLaptops(6);
  const sixPcsOfLaptops = laptops.slice(0, 6);
  //to navigate the manage inventories
  const handleManageInventories = () => {
    navigate("/manage-inventories");
  };
  return (
    <div>
      <div className="text-center font-semibold mt-24 text-3xl header-text">
        <h1>Checkout our recent Laptop</h1>
        <h2></h2>
        <h3></h3>
      </div>
      <div className="laptop-collection">
        {sixPcsOfLaptops.map((laptop) => (
          <Laptop key={laptop._id} laptop={laptop}></Laptop>
        ))}
      </div>
      <div className="flex items-center mb-10">
        <button
          type="button"
          className="px-8 py-3 mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
          onClick={handleManageInventories}
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Laptops;
