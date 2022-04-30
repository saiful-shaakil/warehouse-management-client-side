import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Profile.css";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between profile">
      <div className="flex items-center justify-center flex-col">
        {user?.photoURL ? (
          <img src={`${user?.photoURL}`} className="rounded-full mb-8" alt="" />
        ) : (
          <FontAwesomeIcon className="text-5xl mb-10" icon={faUser} />
        )}
        <p>Name:{user?.displayName}</p>
        <p>Email: {user?.email}</p>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          Sign Out
        </button>
        <br />
        <Link
          to="/manage-inventories"
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          Manage Inventories
        </Link>
        <br />
        <Link
          to="/add-new-inventory"
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          Add New Inventory
        </Link>
        <br />
        <Link
          to="/my-items"
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          My Items
        </Link>
      </div>
    </div>
  );
};

export default Profile;
