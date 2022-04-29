import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-700  pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-white ">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Get Help</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">FAQs</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Terms and Condition</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Privacy and Policy</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Github</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Facebook</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Twitter</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Shop</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Register</Link>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <Link to="/">Login</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <Link to="/">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </Link>
          <Link to="/">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </Link>

          <Link to="/">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
            </svg>
          </Link>
          <Link to="/">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z"></path>
            </svg>
          </Link>
        </div>
        <div className="flex justify-between">
          <p>&copy; Laptop House</p>
          <p>83/2 San Fancisso, New York</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
