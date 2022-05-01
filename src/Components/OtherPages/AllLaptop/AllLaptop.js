import React from "react";
import useLaptops from "../../../Hooks/useLaptop/useLaptops";
import Laptop from "../../Home/Laptop/Laptop";

const AllLaptop = () => {
  const [laptops, setLaptops] = useLaptops();
  let count = 4;
  let sliceLaptop = laptops.slice(0, count);
  const seeMore = () => {
    count = count + count;
    sliceLaptop = laptops.slice(0, count);
  };
  return (
    <div>
      <div className="text-center font-semibold mt-24 text-3xl header-text">
        <h1>Checkout our recent Laptop</h1>
        <h2></h2>
        <h3></h3>
      </div>
      <div className="laptop-collection">
        {sliceLaptop.map((laptop) => (
          <Laptop key={laptop._id} laptop={laptop}></Laptop>
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={seeMore}
          className="px-8 py-3 cursor-pointer mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default AllLaptop;
