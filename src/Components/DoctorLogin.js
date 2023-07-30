import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const DoctorLogin = () => {
  const [error, setError] = useState({ status: false, msg: "", type: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("form-login").reset();
      setError({ status: true, msg: "Login Successful", type: "success" });
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <>
      <h1 className="Welcome flex justify-center relative top-2 text-blue-900 font-bold text-2xl drop-shadow-md">
        Welcome,
        <span className="px-2 pr-1 text-teal-700 font-bold">Doctor !</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-5/12 m-auto mb-20 justify-self-center relative top-3">
          <TextField
            required
            margin="normal"
            id="email"
            name="emial"
            label="Email"
            sx={{
              paddingRight: "0.5%",
            }}
          />
          <TextField
            required
            margin="normal"
            type="password"
            id="password"
            name="password"
            label="Password"
            sx={{
              paddingLeft: "0.5%",
            }}
          />
          
          <Button
          type="submit"
          variant="contained"
          sx={{
            position: "relative",
            top: "2rem",
            textTransform: "capitalize",
          }}
        >
          Log in
        </Button>
        </div>
        
      </form>
    </>
  );
};

export default DoctorLogin;
