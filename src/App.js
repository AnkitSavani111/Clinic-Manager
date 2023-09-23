import './App.css';
import Login from './Components/Login';
import Home from './Components/Pages/Home';
import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom';
import Appointment from './Components/Appointment';
import About from './Components/About';
import SignUp from './Components/SignUp';
import ReceptionDashBoard from './Components/Pages/ReceptionDashBoard';
import AddPatient from './Components/AddPatient';
import Forget from './Components/Forget';
import OTP from './Components/OTP';
import { useEffect} from "react";
import { useUser } from "../src/Contexts/UserContext";
import axios from "axios";
import PatientDetails from './Components/PatientDetails';
import DoctorDashBoard from './Components/Pages/DoctorDashBoard';
import DoctorPatientList from './Components/DoctorPatientList';
import PreviousRecord from './Components/PreviousRecord';


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
            <Route path='/receptiondashb/PatientDetails' element={<PatientDetails />} />
            <Route path='/receptiondashb/AddPatient' element={<AddPatient />} />
            <Route path='/doctordashb' element={<DoctorDashBoard />} />
            <Route path='/doctordashb/PatientList' element={<DoctorPatientList />} />
            <Route path='/doctordashb/PreviousRecord' element={<PreviousRecord />} />
          </>
        ) : (
          <></>
        )}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/forget/OTP' element={<OTP />} />
      </Routes>
    </>
  );
}

export default App;
