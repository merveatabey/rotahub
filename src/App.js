import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ToursPage from './pages/ToursPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
         <Route path='/forgot-password' element = {<ForgotPassword/>}/> 
         <Route path="/ToursPage" element={<ToursPage />} />
         <Route path='/HomePage' element = {<HomePage/>}/>


      </Routes>
    </Router>
   
  );
}

export default App;

