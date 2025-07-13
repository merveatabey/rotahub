
import React, { useState } from "react";
import '../../styles/auth.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

try{
  const response = await axios.post("https://localhost:6703/api/Auth/login", {email, password});
  const token = response.data.token;
  localStorage.setItem('token', token);   //token'ı localstorage'ye kaydet
  console.log("login succesfully : " , token);

} catch(err){
  console.log(err.response?.data?.message || "Login failed");
}
}



  return(
   <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome to Tatilia</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p style={{color: 'red'}}>{error}</p>}
            <p>
        Don't have an account?{' '}
        <span
          style={{ color: 'orange', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/register')}
        >
          Register
            
        </span>
      </p>
          <p className="login-footer"  onClick = {() => navigate('/forgot-password')} >Forgot your password?</p>
         
        </form>
      </div>
    </div>


  )
}
export default Login;
  



