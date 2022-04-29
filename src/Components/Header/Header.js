import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faLaptop, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../OtherPages/Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-700 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="text-white hover:text-gray-400 duration-500"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="text-white hover:text-gray-400 duration-500"
              to="/laptop"
            >
              Laptop
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="text-white hover:text-gray-400 duration-500"
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="text-white hover:text-gray-400 duration-500"
              to="/aboutUs"
            >
              About Us
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="text-white hover:text-gray-400 duration-500"
              to={user ? "/profile" : "/login"}
            >
              {user ? user.displayName : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
