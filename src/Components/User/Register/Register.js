import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="w-screen register-form">
      <div class="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 class="text-2xl font-bold text-center">Register</h1>
        <form
          novalidate=""
          action=""
          class="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div class="space-y-1 text-sm">
            <label for="name" class="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              class="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div class="space-y-1 text-sm">
            <label for="email" class="block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              class="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div class="space-y-1 text-sm">
            <label for="password" class="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              class="w-full px-4 py-3 rounded-md"
            />
          </div>
          <div class="space-y-1 text-sm">
            <label for="confPassword" class="block">
              Confirm Password
            </label>
            <input
              type="password"
              name="confPassword"
              id="confPassword"
              placeholder="Confirm Password"
              class="w-full px-4 py-3 rounded-md"
            />
          </div>
          <button class="block w-full p-3 text-center bg-gray-700 text-white hover:bg-gray-600 rounded-sm">
            Sign Up
          </button>
        </form>

        <p class="text-xs text-center sm:px-6">
          Already Have an account?
          <Link rel="noopener noreferrer" to="/login" class="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
