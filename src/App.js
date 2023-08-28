import './App.css';
import Login from './Components/Login';
import Home from './Components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment';
import About from './Components/About';
import SignUp from './Components/SignUp';
import ReceptionDashBoard from './Components/Pages/ReceptionDashBoard';
import Forget from './Components/Forget';
import OTP from './Components/OTP';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/receptiondashb' element={<ReceptionDashBoard />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/forget/OTP' element={<OTP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
