import React from 'react'
import axios from "axios";
// import {Formik, Form, Field, ErrorMessage} from "formik"
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
            <Box sx={{ width: '100%', mt: 2}}>
                <Stack spacing={2}>
                    <Item>
                        <TextField id="standard-basic" label="Perishable" variant="standard" />
                        <Button variant="outlined" sx={{ml: 4}}>Update</Button>
                    </Item>
                    <Item>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>History</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Last Updated: 2022-10-06T20:59:19.000Z
                                </Typography>
                                <Typography>
                                    +5 Perishables
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                    {/* <Item>
                        <TextField id="standard-basic" label="Frozen" variant="standard" />
                        <Button variant="outlined" sx={{ml: 4}}>Update</Button>
                    </Item>
                    <Item> 
                        <TextField id="standard-basic" label="Produce" variant="standard" /> 
                        <Button variant="outlined" sx={{ml: 4}}>Update</Button>
                    </Item>
                    <Item> 
                        <TextField id="standard-basic" label="Dried" variant="standard" />
                        <Button variant="outlined" sx={{ml: 4}}>Update</Button>
                    </Item> */}
                </Stack>
            </Box>
        {/* <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
        </Formik> */}
        </div>
    );
}

export default Update;