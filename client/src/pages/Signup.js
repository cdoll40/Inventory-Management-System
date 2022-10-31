import React from "react";
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from "formik"
import { useNavigate } from 'react-router-dom'
import SignupComp from "../components/SignupComponent";
import NavBar from "../components/NavBar";

function SignUp() {

    return (
        <div>
            <SignupComp/>
        </div>
       
      );

}



export default SignUp;