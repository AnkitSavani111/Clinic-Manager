import React, { useState } from "react";
import DoctorLogin from "./DoctorLogin";
import ReceptionLogin from "./ReceptionLogin";

const Login = () => {
  const [comp, setComp] = useState("Doctor");

  const handleDoctor = () => {
    setComp("Doctor");
  };

  const handleReception = () => {
    setComp("Reception");
  };

  return (
    <>
      <div className="Login bg-[url('Images/bglogin.jpg')] bg-cover relative h-screen flex items-center justify-center">
        <div className="CardContainer px-2 py-2 w-6/12 h-1/2 absolute top-20 text-center rounded-3xl border-white border-solid backdrop-blur-md shadow-slate-900 drop-shadow-md shadow-md">
          <div className="flex justify-between px-2">
            <div className="flex flex-wrap justify-center">
              <div className="Heading py-2 px-1  text-blue-900 font-extrabold italic text-2xl drop-shadow-lg shadow-black">
                Ashirwad
              </div>
              <span className="SubHeading py-2 px-1 text-teal-700 font-extrabold text-2xl drop-shadow-lg shadow-black">
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
                  <li className="Reception px-2 py-2 cursor-pointer">
                    <button
                      onClick={handleReception}
                      className="overflow-hidden font-bold text-neutral-800 after:block after:w-full after:h-0.5 after:bg-teal-500 after:origin-left after:transform after:scale-x-0 after:transition-transform after:ease after:duration-300 hover:after:scale-x-110"
                    >
                      Reception
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="relative top-5">
            {comp === "Doctor" ? <DoctorLogin /> : <ReceptionLogin />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
