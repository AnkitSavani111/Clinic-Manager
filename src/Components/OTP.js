import React, { useState } from "react";
import Logo from "../Images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [otpError, setOtpError] = useState(""); // State for OTP validation error
  const [passwordError, setPasswordError] = useState(""); // State for password validation error
  const [cnfPasswordError, setCnfPasswordError] = useState(""); // State for confirm password validation error

  const handleSubmition = async (e) => {
    try {
      e.preventDefault();
      const otp = document.getElementById("OTP").value;
      const password = document.getElementById("password").value;
      const cnfPassword = document.getElementById("cnfPassword").value;

      // Simple OTP validation (6 digits)
      if (!/^\d{6}$/.test(otp)) {
        setOtpError("Please enter a valid 6-digit OTP");
        return;
      } else {
        setOtpError(""); // Clear the OTP validation error
      }

      // Password validation
      if (password.length < 6) {
        setPasswordError("Password must be alphanumeric with special character and length must be 8");
        return;
      } else {
        setPasswordError(""); // Clear the password validation error
      }

      // Confirm Password validation
      if (password !== cnfPassword) {
        setCnfPasswordError("Passwords do not match");
        return;
      } else {
        setCnfPasswordError(""); // Clear the confirm password validation error
      }

      axios.defaults.baseURL = "http://localhost:4000";
      const resp = await axios.post("/user/resetpassword", {
        otp,
        password,
        email: sessionStorage.getItem("toResetPassEmail"),
      });
      if (resp.status === 200) {
        alert("Password changed successfully");
        navigate("/login");
      } else {
        alert("Wrong OTP");
        document.getElementById("OTP").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cnfPassword").value = "";
      }
    } catch (error) {
      alert("Wrong OTP");
    }
  };

  const handleResendOTP = async (e) => {
    try {
      e.preventDefault();
      e.target.form.reset();
      axios.defaults.baseURL = "http://localhost:4000";
      const resp = await axios.post("/user/forgetpassword", {
        email: sessionStorage.getItem("toResetPassEmail"),
      });
      if (resp.status === 200) {
        alert("OTP sent to your email");
      } else {
        alert("Please enter a valid email");
      }
    } catch (error) {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="Background bg-slate-400 h-screen flex items-center justify-center">
      <div className="BoxOfForget bg-slate-300 sm:w-[80%] md:w-[55%] w-[90%] backdrop-blur-md rounded-2xl p-4">
        <div className="Heading">
          <img
            className="sm:m-auto mt-2 m-auto h-[70px] w-auto sm:mt-2 sm:h-[70px] sm:w-auto sm:mix-blend-multiply rounded-md"
            src={Logo}
            alt="Your Company"
          />
          <div className="font-bold md:mt-2 sm:mt-2 mt-3 text-center md:font-bold sm:font-bold sm:text-3xl md:text-3xl text-3xl">
            Enter the OTP and new Password
          </div>
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-transparent py-8 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmition}>
              <div>
                <label
                  htmlFor="OTP"
                  className="block text-md font-medium text-gray-700"
                >
                  OTP
                </label>
                <div className="mt-1">
                  <input
                    id="OTP"
                    name="OTP"
                    type="number"
                    placeholder="Enter OTP from email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {otpError && (
                    <p className="text-red-600 text-sm mt-1">{otpError}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter new password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="cnfPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="cnfPassword"
                    name="cnfPassword"
                    type="Password"
                    autoComplete="current-cnfPassword"
                    placeholder="Confirm new password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {cnfPasswordError && (
                    <p className="text-red-600 text-sm mt-1">{cnfPasswordError}</p>
                  )}
                </div>
              </div>

              <a
                onClick={handleResendOTP}
                className="sm:font-medium sm:cursor-pointer sm:relative sm:top-2 relative top-2 font-medium sm:text-[14px] text-indigo-900 sm:text-indigo-900 sm:hover:text-slate-950 sm:duration-100"
              >
                Resend OTP
              </a>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
