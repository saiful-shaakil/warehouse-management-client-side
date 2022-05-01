import React from "react";

const EachBrand = ({ brand }) => {
  const { name, desc, img } = brand;
  return (
    <div className="max-w-xs rounded-md shadow-md">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-wide">{name}</h1>
          <p className="dark:text-coolGray-100">{desc}</p>
        </div>
        <button
          type="button"
          className="flex bg-gray-700 text-white items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md "
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default EachBrand;
