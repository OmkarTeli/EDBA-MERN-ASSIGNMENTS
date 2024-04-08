import React, { useState } from "react";
import "./login.css";
import PersonIcon from '@mui/icons-material/Person';import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';


function Login(props) {
  const [action,setAction]=useState("Sign Up")
  return (
    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Sign Up"?<div className="input">
          <PersonIcon className="icons" />
          <input type="text" placeholder="Name" value={props.user.name}/>
        </div>:<div></div>}

        <div className="input">
          <MailOutlineRoundedIcon className="icons"/>
          <input type="email" placeholder="Email" value={props.user.email}/>
        </div>

        <div className="input">
          <KeyRoundedIcon className="icons"/>
          <input type="password" placeholder="Password" value={props.user.password}/>
        </div>
      </div>

      {action==="Login"?<div className="forgot-password">Forgot password ? <span>Click Here!</span></div>:<div></div>}

      <div className="submit-container">
        <div className={action==="Login"?"submit clicked":"submit design"} onClick={()=>{setAction("Sign Up")}}>
          Sign Up
        </div>
        <div className={action==="Sign Up"?"submit clicked":"submit design"} onClick={()=>{setAction("Login")}}>
          Login
        </div>
      </div>

    </div>
  );
}

export default Login;
