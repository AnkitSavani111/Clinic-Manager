// import React from "react";
// import { TextField } from "@mui/material";
// import { useState } from "react";

// const DoctorLogin = () => {
//   const [error, setError] = useState({ status: false, msg: "", type: "" });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("hello");
//     const data = new FormData(event.currentTarget);
//     const actualData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };
//     if (actualData.email && actualData.password) {
//       console.log(actualData);
//       document.getElementById("form-login").reset();
//       setError({ status: true, msg: "Login Successful", type: "success" });
//     } else {
//       setError({ status: true, msg: "All fields are required", type: "error" });
//     }
//   };

//   return (
//     <>
//       <h1 className="Welcome flex justify-center relative top-2 text-blue-900 font-bold text-2xl drop-shadow-md">
//         Welcome,
//         <span className="px-2 pr-1 text-teal-700 font-bold">Staff !</span>
//       </h1>
//       <form>
//         <div className="flex flex-col w-5/12 m-auto mb-10 justify-self-center relative top-3">
//           <TextField
//             required
//             margin="normal"
//             id="email"
//             name="emial"
//             label="Email"
//             sx={{
//               paddingRight: "0.5%",
//             }}
//           />

//           <TextField
//             required
//             margin="normal"
//             type="password"
//             id="password"
//             name="password"
//             label="Password"
//             sx={{
//               paddingLeft: "0.5%",
//             }}
//           />
//           <button onClick={handleSubmit} className="LOGin mt-5 rounded bg-sky-800 text-white drop-shadow-md px-2 py-2 hover:bg-sky-950 hover:transition-all duration-200">
//             Log in
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default DoctorLogin;
