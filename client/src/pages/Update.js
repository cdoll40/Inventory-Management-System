import React from 'react'
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from "formik"
import { useNavigate } from 'react-router-dom'

function Update() {

    const navigate = useNavigate()

    const initialValues = {
        perishable: 0,
        frozen: 0,
        produce: 0,
        dried: 0,
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/inventory", data).then((response) => {
        console.log("Post inserted")
        navigate("/Home")
        })
    }

    return (
        <div className="App">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="formContainer">
            <label>perishable: </label>
            <Field
                autoComplete="off"
                id="inputCreateTest"
                name="perishable"
                placeholder="(perishable...)"
            />
            <label>frozen: </label>
            <Field
                autoComplete="off"
                id="inputCreateTest"
                name="frozen"
                placeholder="(frozen...)"
            />
            <label>produce: </label>
            <Field
                autoComplete="off"
                id="inputCreateTest"
                name="produce"
                placeholder="(produce...)"
            />
            <label>dried: </label>
            <Field
                autoComplete="off"
                id="inputCreateTest"
                name="dried"
                placeholder="(dried...)"
            />
            <button type="submit">Create</button>
            </Form>
        </Formik>
        </div>
    );
}

export default Update;