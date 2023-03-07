import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../Redux/apiCalls";
import "./Login.css"

const Login = () => {
  
const [username, setUsername]= useState("");
const [password, setPassword]= useState("");
const dispatch = useDispatch();
const {isfetching, error}= useSelector((state)=> state.user)

 const handleLogin =(e)=> {
  e.preventDefault();
  login(dispatch, {username, password})
 }
  return (
    <div className="login" >
      <form>
        <input placeholder="username" onChange={(e)=> setUsername(e.target.value)} />
        <input placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        <button className="loginButton" disabled={isfetching} onClick={handleLogin}>LOGIN</button>
      </form>
      {/* {error && <error>Something went wrong...</error>} */}
      {/* <Link to="/register">CREATE A NEW ACCOUNT</Link> */}
    </div>
  );
};

export default Login;