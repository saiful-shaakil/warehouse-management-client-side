import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Laptop.css";
const Laptop = ({ laptop }) => {
  const { _id, name, img, suplierName, price, quantity, desc } = laptop;
  const navigate = useNavigate();
  const manageItem = (id) => {
    navigate(`/laptop/${id}`);
  };
  return (
    <div className="bg-white mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none mb-8 laptop">
      <div className="sm:h-52 rounded-xl ">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className=" w-full  sm:h-16 rounded-2xl font-semibold">
            {name}
          </div>
          <div className=" sm:h-16 rounded-2xl">{desc}</div>
          <div className=" sm:h-3 rounded-2xl">
            <b> Supplier: {suplierName}</b>
          </div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className=" w-20 sm:h-8  rounded-full">
            $ <b>{price}</b>
          </div>
          <div className=" w-24 sm:h-8   rounded-full">
            In stock: <b>{quantity}</b>
          </div>
          <div className=" w-40 sm:h-8  rounded-full ml-auto">
            <button
              type="button"
              className="px-8 font-semibold border rounded bg-gray-700 text-white"
              onClick={() => manageItem(_id)}
            >
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
