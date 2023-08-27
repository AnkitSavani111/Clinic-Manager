import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Appointment from "./Components/Appointment";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import ReceptionDashBoard from "./Components/Pages/ReceptionDashBoard";
import Forget from "./Components/Forget";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../src/Contexts/UserContext";

function App() {
  // const [userData, setUserData] = useState(null);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:4000";

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get("/user/verify");
        setUser({
          _id: response.data._id,
          email: response.data.email,
          role: response.data.role,
        });
        // setUserData(response.data);
      } catch (error) {
        // console.warn("Unauthorized");
        navigate("/login");
      }
    };
    verifyUser();
    console.warn(user);
  }, []);

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/about' element={<About />} />
            <Route path='/receptiondashb' element={<ReceptionDashBoard />} />
          </>
        ) : (
          <></>
        )}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget' element={<Forget />} />
      </Routes>
    </>
  );
}

export default App;
