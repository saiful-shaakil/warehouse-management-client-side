import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faLaptop, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Laptop", link: "/laptop" },
    { name: "Blogs", link: "/" },
    { name: "About Us", link: "/" },
    { name: "LOGIN", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span>
            <FontAwesomeIcon icon={faLaptop} /> &nbsp;
          </span>
          Laptop House
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                className="text-gray-800 hover:text-gray-400 duration-500"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
