/*

*/
import './App.css';
import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar'
import AssociateHome from './pages/Associate-Home'
import ManagerHome from './pages/Manager-Home'
import Update from './pages/Update'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Settings from './pages/Settings';
import Upload from './pages/Upload';

function App() {

  return (
    //Signin and Signup only added to the nav bar for testing purposes, should be in the landing page somehow
    // maybe make Home a landing page with default "sign in" and a button at the bottom to "sign up" - Kody B
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={ <Navigate to={'Signin'} /> } />
        <Route path="/Signin" exact element={<SignIn />} />
        {/* <Route path="/Signin" exact element={<SignIn />} /> */}
        <Route path="/Manager-Home" exact element={<ManagerHome />} />  
        <Route path="/Associate-Home" exact element={<AssociateHome />} />
        <Route path="/Update/:id" exact element={<Update />} />
        <Route path="/Signup" exact element={<SignUp />} />
        <Route path="/Settings" exact element={<Settings />} />
        <Route path="/Upload" exact element={<Upload />} />
      </Routes>
    </div> 
  );
}

export default App;
