import React from "react";
import "./Laptop.css";
const Laptop = ({ laptop }) => {
  const { name, img, suplierName, price, quantity, desc } = laptop;
  return (
    <div class="bg-white mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none mb-8 laptop">
      <div class="sm:h-52 rounded-xl ">
        <img src={img} alt="" />
      </div>
      <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
          <div class=" w-full  sm:h-16 rounded-2xl font-semibold">{name}</div>
          <div class=" sm:h-16 rounded-2xl">{desc}</div>
          <div class=" sm:h-3 rounded-2xl">
            <b> Supplier: {suplierName}</b>
          </div>
        </div>
        <div class="mt-auto flex gap-3">
          <div class=" w-20 sm:h-8  rounded-full">
            $ <b>{price}</b>
          </div>
          <div class=" w-24 sm:h-8   rounded-full">
            In stock: <b>{quantity}</b>
          </div>
          <div class=" w-40 sm:h-8  rounded-full ml-auto">
            <button
              type="button"
              className="px-8 font-semibold border rounded bg-gray-700 text-white"
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
