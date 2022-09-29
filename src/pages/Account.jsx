import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full">
        <img
          className="w-full h-[300px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/3e35f791-04e3-4db3-b963-f69e0e1d6af6/AR-es-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-image"
        />
        <div className="fixed top-0 left-0 bg-black/80 w-full h-[300px]"></div>
        <div className="absolute top-[140px] p-4 w-full">
          <h1 className="text-4xl font-bold text-center">My shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
