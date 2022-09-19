/*

*/
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"

function App() {

  const [listOfInventory, setListOfInventory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/inventory").then((response) => {
      setListOfInventory(response.data)
    })
  }, [])

  const initialValues = {
    productName: "",
    productDescription: "",
    productCount: "",
  }

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/inventory", data).then((response) => {
      console.log("Post inserted")
    })
  }

  return (
    <div className="App">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="formContainer">
          <label>productName: </label>
          <Field
            autoComplete="off"
            id="inputCreateTest"
            name="productName"
            placeholder="(productName...)"
          />
          <label>productDescription: </label>
          <Field
            autoComplete="off"
            id="inputCreateTest"
            name="productDescription"
            placeholder="(productDescription...)"
          />
          <label>productCount: </label>
          <Field
            autoComplete="off"
            id="inputCreateTest"
            name="productCount"
            placeholder="(productCount...)"
          />

          <button type="submit">Create</button>
        </Form>
      </Formik>
      {
        listOfInventory.map((value, key) => {
          return(
            <div className="container">
              <div className="title">{ value.productName }</div>
              <div className="body">{ value.productDescription }</div>
              <div className="footer">{ value.productCount }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
