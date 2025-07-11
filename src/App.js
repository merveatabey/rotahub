import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/forgot-password' element = {<ForgotPassword/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;

