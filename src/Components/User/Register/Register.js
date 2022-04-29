import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../OtherPages/Loading/Loading";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, errorOfCreatingAcc] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorOfUpdatingName] = useUpdateProfile(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  //to navigate the user
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //sign up by email and password
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
    setPass(e.target.password.value);
    setConfPass(e.target.confPassword.value);
    if (pass !== confPass) {
      toast("Sorry, password does not matched.");
    }
    if (name === "" || email === "" || pass === "" || confPass === "") {
      toast("Fill all the input please.");
    }

    if (name && email && pass === confPass) {
      if (loading || updating) {
        return <Loading></Loading>;
      }
      await createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName: name });
      if (user) {
        navigate(from, { replace: true });
      }
    }
    if (errorOfCreatingAcc || errorOfUpdatingName) {
      toast(errorOfCreatingAcc.message, errorOfUpdatingName.message);
    }
  };
  return (
    <div className="w-screen register-form">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          onSubmit={handleSubmitRegister}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
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
          <input
            type="submit"
            value="Sign Up"
            className="block w-full p-3 text-center bg-gray-700 text-white hover:bg-gray-600 rounded-sm"
          />
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
