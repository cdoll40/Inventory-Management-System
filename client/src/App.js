/*

*/
import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Update from './pages/Update'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Settings from './pages/Settings';

function App() {

  return (
    //Signin and Signup only added to the nav bar for testing purposes, should be in the landing page somehow
    // maybe make Home a landing page with default "sign in" and a button at the bottom to "sign up" - Kody B
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />  
        <Route path="/Update/:id" exact element={<Update />} />
        <Route path="/Signin" exact element={<SignIn />} />
        <Route path="/Signup" exact element={<SignUp />} />
        <Route path="/Settings" exact element={<Settings />} />
      </Routes>
    </div> 
  );
}

export default App;
