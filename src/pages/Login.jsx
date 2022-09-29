import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/3e35f791-04e3-4db3-b963-f69e0e1d6af6/AR-es-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-6 py-24 z-40 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>

              <form onSubmit={handleSubmit} className="flex flex-col py-4 my-6">
                {error ? (
                  <p className="my-2 p-3 bg-orange-400 rounded">{error}</p>
                ) : null}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="my-2 p-3 rounded bg-gray-800"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="my-2 p-3 rounded bg-gray-800"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-primary py-3 rounded mb-3 mt-6 font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-4 text-sm mt-6">
                  <span className="text-gray-600">New to Netflix </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
