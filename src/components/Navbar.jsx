import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("handleLogout error: ", error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 absolute w-full z-50 ">
      <Link to={"/"}>
        <h1 className="text-primary uppercase text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-primary px-6 py-2 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="pr-4">Sign In</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-primary px-6 py-2 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
