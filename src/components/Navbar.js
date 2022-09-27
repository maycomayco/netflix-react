import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 absolute w-full z-50 ">
      <h1 className="text-primary uppercase text-4xl font-bold cursor-pointer">
        Netflix
      </h1>
      <div>
        <button className="pr-4">Sign In</button>
        <button className="bg-primary px-6 py-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
