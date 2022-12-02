import React, {useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 
export default function UploadForm() {
 
    // const [file, setFile] = React.useState();
    // const [fileName, setFileName] = React.useState("");

    // const saveFile = (e) => {
    // setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);
    // };

    // const uploadFile = async (e) => {
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("fileName", fileName);
    //     try {
    //         const res = await axios.post(
    //         "http://localhost:3001/upload",
    //         formData
    //         );
    //         console.log(res);
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };

    const [file,setFile] = useState("");


    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();

        var formData = new FormData();
        formData.append("image",file)

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post("http://localhost:3001/upload",formData,config);
    }

    return (
        // <div className="App">
        //     <input type="file" onChange={saveFile} />
        //     <button onClick={uploadFile}>Upload</button>
        // </div>
        <div className='container mt-3'>
            <h1>Upload Your Img Here</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select Your Image</Form.Label>
                    <Form.Control type="file" name='photo' onChange={setimgfile} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUserData}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
 