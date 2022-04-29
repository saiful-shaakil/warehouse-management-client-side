import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-center text-white font-semibold font-sans">
        <h1 className="text-4xl mb-4">WE HAVE EVERYTHING</h1>
        <h1 className="text-7xl">WHAT YOUR LAPTOP NEEDS!</h1>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-center search-bar">
          <div>
            <select name="brand" className="bg-black text-white" id="">
              <option value="MacBook">Macbook</option>
              <option value="Hp">Hp</option>
              <option value="Accer">Accer</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Dell">Dell</option>
              <option value="Huawei">Huawei</option>
            </select>
          </div>
          <input
            className="text-white"
            type="text"
            placeholder="Type Model Here"
          />
          <span className="cursor-pointer">Search</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
