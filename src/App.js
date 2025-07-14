import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ToursPage from './pages/ToursPage';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/Auth/AdminLogin';
import AdminHomePage from './pages/admin/AdminHomePage';
import HotelManagementPage from './pages/admin/HotelManagementPage';
import TourManagementPage from './pages/admin/TourManagementPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
         <Route path='/forgot-password' element = {<ForgotPassword/>}/> 
         <Route path="/ToursPage" element={<ToursPage />} />
         <Route path='/HomePage' element = {<HomePage/>}/>
         <Route path='/admin-login' element = {<AdminLogin/>}/>
         <Route path='/AdminHome' element = {<AdminHomePage/>}/>
         <Route path='/admin/hotels' element={<HotelManagementPage/>} />
         <Route path='/admin/tours' element={<TourManagementPage/>} />


      </Routes>
    </Router>
   
  );
}

export default App;

