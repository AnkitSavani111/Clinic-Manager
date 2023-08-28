import React from "react";
import Logo from "../Images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const OTP = () => {
  const navigate = useNavigate();
  const handleSubmition = async (e) => {
    try {
      e.preventDefault();
      let psw = document.getElementById("password").value;
      let cnfPsw = document.getElementById("cnfPassword").value;
      if (psw !== cnfPsw) {
        alert("Password and Confirm Password are not same");
        return;
      }
      axios.defaults.baseURL = "http://localhost:4000";
      const resp = await axios.post("/user/resetpassword", {
        otp: document.getElementById("OTP").value,
        password: document.getElementById("password").value,
        email: sessionStorage.getItem("toResetPassEmail"),
      });
      if (resp.status == 200) {
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
      axios.defaults.baseURL = "http://localhost:4000";
      const resp = await axios.post("/user/forgetpassword", {
        email: sessionStorage.getItem("toResetPassEmail"),
      });
      if (resp.status == 200) {
        alert("OTP sent to your email");
      } else {
        alert("Please enter valid email");
      }
    } catch (error) {
      alert("Please enter valid email");
    }
  };

  return (
    <div className='Background bg-slate-400 h-screen flex items-center justify-center'>
      <div className='BoxOfForget bg-slate-300 sm:w-[80%] md:w-[55%] w-[90%] backdrop-blur-md rounded-2xl p-4'>
        <div className='Heading'>
          <img
            className='sm:m-auto mt-2 m-auto h-[70px] w-auto sm:mt-2 sm:h-[70px] sm:w-auto sm:mix-blend-multiply rounded-md'
            src={Logo}
            alt='Your Company'
          />
          <div className='font-bold md:mt-2 sm:mt-2 mt-3 text-center md:font-bold sm:font-bold sm:text-3xl md:text-3xl text-3xl'>
            Enter the OTP and new Password
          </div>
        </div>
        <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-transparent py-8 sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={handleSubmition}>
              <div>
                <label
                  htmlFor='OTP'
                  className='block text-md font-medium text-gray-700'
                >
                  OTP
                </label>
                <div className='mt-1'>
                  <input
                    id='OTP'
                    name='OTP'
                    type='number'
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='cnfPassword'
                  className='block text-sm font-medium text-gray-700'
                >
                  Confirm Password
                </label>
                <div className='mt-1'>
                  <input
                    id='cnfPassword'
                    name='cnfPassword'
                    type='Password'
                    autoComplete='current-cnfPassword'
                    required
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Submit
                </button>
              </div>

              <div>
                <p className='' onClick={handleResendOTP}>
                  Resend OTP
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
