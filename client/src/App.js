/*

*/
import './App.css';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {Formik, Form, Field, ErrorMessage} from "formik"
import * as React from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Update from './pages/Update'

function App() {

  // const [listOfInventory, setListOfInventory] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:3001/inventory").then((response) => {
  //     setListOfInventory(response.data)
  //   })
  // }, [])

  // const initialValues = {
  //   productName: "",
  //   productDescription: "",
  //   productCount: "",
  // }

  // const onSubmit = (data) => {
  //   axios.post("http://localhost:3001/inventory", data).then((response) => {
  //     console.log("Post inserted")
  //   })
  // }

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />  
        <Route path="/Update" exact element={<Update />} />  
      </Routes>
    </div> 

    // <div className="App">
    //   <Formik initialValues={initialValues} onSubmit={onSubmit}>
    //     <Form className="formContainer">
    //       <label>perishable: </label>
    //       <Field
    //         autoComplete="off"
    //         id="inputCreateTest"
    //         name="perishable"
    //         placeholder="(perishable...)"
    //       />
    //       <label>frozen: </label>
    //       <Field
    //         autoComplete="off"
    //         id="inputCreateTest"
    //         name="frozen"
    //         placeholder="(frozen...)"
    //       />
    //       <label>produce: </label>
    //       <Field
    //         autoComplete="off"
    //         id="inputCreateTest"
    //         name="produce"
    //         placeholder="(produce...)"
    //       />
    //       <label>dried: </label>
    //       <Field
    //         autoComplete="off"
    //         id="inputCreateTest"
    //         name="dried"
    //         placeholder="(dried...)"
    //       />

    //       <button type="submit">Create</button>
    //     </Form>
    //   </Formik>
    //   {
    //     listOfInventory.map((value, key) => {
    //       return(
    //         <div className="container">
    //           <div className="title">{ value.perishable }</div>
    //           <div className="body">{ value.frozen }</div>
    //           <div className="footer">{ value.produce }</div>
    //           <div className="footer">{ value.dried }</div>
    //         </div>
    //       )
    //     })
    //   }
    // </div>
  );
}

export default App;
