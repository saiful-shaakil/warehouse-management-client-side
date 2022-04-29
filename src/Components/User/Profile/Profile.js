import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Profile.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        {user.photoURL ? (
          <img src={user?.photoURL} alt="" />
        ) : (
          <FontAwesomeIcon className="text-5xl mb-10" icon={faUser} />
        )}
        <p>Name:{user.displayName}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white"
        >
          Sign Out
        </button>
        <br />
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
