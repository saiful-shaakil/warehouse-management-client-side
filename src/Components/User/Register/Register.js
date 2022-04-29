import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="w-screen register-form">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="confPassword" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              name="confPassword"
              id="confPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md"
            />
          </div>
          <button className="block w-full p-3 text-center bg-gray-700 text-white hover:bg-gray-600 rounded-sm">
            Sign Up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6">
          Already Have an account?
          <Link rel="noopener noreferrer" to="/login" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
