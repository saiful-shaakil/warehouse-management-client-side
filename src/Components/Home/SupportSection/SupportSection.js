import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPhone, faCoins } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./SupportSection.css";

const SupportSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between flex-col mt-10">
        <h1 className="text-xl">Welcome to</h1>
        <h1 className="text-3xl font-semibold">LAPTOP HOUSE</h1>
        <h2></h2>
        <h3></h3>
        <h4 className="mt-5 text-center">
          Laptop House is the most enticing, creative, modern and multipurpose
          auto dealer of laptop.Suitable for any small or big start-up.
        </h4>
      </div>
      <div className="mt-24 flex items-center justify-center all-items">
        <div className="each-item flex justify-center items-center flex-col ">
          <FontAwesomeIcon
            className="bg-gray-400 p-4 text-2xl  rounded-full"
            icon={faLaptop}
          />
          <p className="font-medium mt-2">ALL BRANDS</p>
          <h5></h5>
          <p>We are the dealer of almost all the laptop company.</p>
        </div>
        <div className="each-item flex justify-center items-center flex-col ">
          <FontAwesomeIcon
            className="bg-gray-400 p-4 text-2xl  rounded-full"
            icon={faPhone}
          />
          <p className="font-medium mt-2">FREE SUPPORT</p>
          <h5></h5>
          <p>
            We are always here to support you to your any kinds of problem about
            laptop.
          </p>
        </div>
        <div className="each-item flex justify-center items-center flex-col ">
          <FontAwesomeIcon
            className="bg-gray-400 p-4 text-2xl  rounded-full"
            icon={faCoins}
          />
          <p className="font-medium mt-2">AFFORDABLE</p>
          <h5></h5>
          <p>
            We always think about quality,not money.And we try to give the best
            from us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
