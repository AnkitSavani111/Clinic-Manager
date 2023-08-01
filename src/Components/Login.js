import React, { useState } from "react";
import DoctorLogin from "./DoctorLogin";
import ReceptionLogin from "./ReceptionLogin";
import Logo from "../Images/logoTemp.png";
import { Input } from "@mui/material";

const Login = () => {
  const [comp, setComp] = useState("Doctor");
  const [Role, setRole] = useState("")
  const handleDoctor = () => {
    setComp("Doctor");
  };

  const handleReception = () => {
    setComp("Reception");
  };

  return (
    <>
      {/* <div className="Login bg-[url('Images/bglogin.jpg')] bg-cover relative h-screen flex items-center justify-center">
        <div className="CardContainer px-2 py-2 mt-2 w-3/12 absolute left-1/4 text-center rounded-3xl border-white border-solid backdrop-blur-md shadow-slate-900 drop-shadow-md shadow-md">

          <div className="flex flex-col mt-7 mb-7 justify-center text-center">
            <div className="flex flex-wrap justify-center">
              <div className="Heading py-2 px-1  text-blue-900 font-extrabold italic text-3xl drop-shadow-lg shadow-black">
                Ashirwad
              </div>
              <span className="SubHeading py-2 px-1 text-teal-700 font-extrabold text-3xl drop-shadow-lg shadow-black">
                Dental Clinic
              </span>
            </div>
            <div className="SelectionTabs">
              <ul className="flex flex-wrap justify-center">
                <div className="ButtonsStyle flex justify-center rounded-lg shadow-lg backdrop-blur-sm">
                  <li className="Doctor px-2 py-2 cursor-pointer">
                    <button
                      onClick={handleDoctor}
                      className="overflow-hidden font-bold text-neutral-800 after:block after:w-full after:h-0.5 after:bg-teal-500 after:origin-left after:transform after:scale-x-0 after:transition-transform after:ease after:duration-300 hover:after:scale-x-110"
                    >
                      Doctor
                    </button>
                  </li>
                  <li className="Doctor px-2 py-2 cursor-pointer">
                    <button
                      onClick={handleReception}
                      className="overflow-hidden font-bold text-neutral-800 after:block after:w-full after:h-0.5 after:bg-teal-500 after:origin-left after:transform after:scale-x-0 after:transition-transform after:ease after:duration-300 hover:after:scale-x-110"
                    >
                      Reception
                    </button>
                  </li>
                </div>
              </ul>
              <div className="relative top-5">
                {comp === "Doctor" ? <DoctorLogin /> : <ReceptionLogin />}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="Background bg-[url('Images/bglogin.jpg')] bg-cover relative h-screen">

        <div className="flex justify-center items-center h-screen">

          <div className="Card flex flex-col justify-center m-auto items-center w-2/5 shadow-custom6 drop-shadow-md py-10 sm:px-6 lg:px-8 backdrop-blur-md rounded-2xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mix-blend-multiply">
              <img
                className="m-auto h-12 w-auto mix-blend-multiply rounded-md "
                src={Logo}
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-transparent py-8 px-4 sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="Role" className="block mb-2 text-sm font-medium text-gray-900">Select your workF</label>
                      <select onChange={(e) => { setRole(e.target.value) }} value={Role} name="Role" id="Role"
                      className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
                        <option value="">
                          Select Role
                        </option>
                        <option value="doctor">
                          Doctor
                        </option>
                        <option value="receptionist">
                          Receptionist
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
