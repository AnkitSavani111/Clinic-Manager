import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import ReceptionDashBoard from './Components/ReceptionDashBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/rec-dashboard' element={<ReceptionDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
