//this page should handle the login portion.
//Possibly using the SQL DB to store credentials?

import './Login.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"


function Login(){

    const[usernameReg, setUsernameReg] = useState('');
    const[passwordReg, setPasswordReg] = useState('');

    return(
        <div className="loginpage">
            <div className="Register">
                <h1>Register User</h1>
                <input type="text" placeholder='Username' onChange={()=> {setUsernameReg(e.target.value);}} />
                <input type="text" placeholder='Password' onChange={()=> {setPasswordReg(e.target.value);}}/>
                <input type="text"placeholder='Confirm Password' />
            </div>
            <div className="login">
                <h1>Login Existing User</h1>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
            </div>

        </div>
    );

  
}
    export default Login;
