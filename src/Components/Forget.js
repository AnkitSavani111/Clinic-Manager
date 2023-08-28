import React from "react";
import Logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  
    const navigate = useNavigate();

    const handleOTP = (e) => {
    e.preventDefault();
    navigate("/forget/OTP")
  };

  return (
    <>
      {/* <div> this is forget page </div> */}
      <div className="Background bg-slate-400 h-screen flex items-center justify-center">
        <div className="BoxOfForget bg-slate-300 sm:w-[80%] md:w-[55%] w-[90%] backdrop-blur-md rounded-2xl p-4">
          <div className="Heading">
            <img
              className="sm:m-auto mt-2 m-auto h-[70px] w-auto sm:mt-2 sm:h-[70px] sm:w-auto sm:mix-blend-multiply rounded-md"
              src={Logo}
              alt="Your Company"
            />
            <div className="font-bold md:mt-2 sm:mt-2 mt-3 text-center md:font-bold sm:font-bold sm:text-3xl md:text-3xl text-3xl">
              Request for new Password
            </div>
          </div>
          <div className=" sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-transparent py-8 sm:rounded-lg sm:px-10">
              <form className="space-y-6" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-md font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleOTP}
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
