import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
import SplitButton from '../components/SplitButton';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Update() {

    const { id } = useParams()

    const [invObject, setInvObject] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/inventory/byId/${id}`).then((response) => {
           setInvObject(response.data)
        })
    }, [])

    return (
        <div className="App">
            <Box sx={{ width: '100%', mt: 2}}>
                <Stack spacing={2}>
                    <Item>
                        <Typography textAlign="left">Add</Typography>
                        <TextField id="standard-basic" label={invObject.cat_name} variant="standard" />
                        <Button variant="contained" sx={{ml: 4}}>Update</Button>
                    </Item>
                    <Item>
                        <Typography textAlign="left">Delete</Typography>
                        <TextField id="standard-basic" label={invObject.cat_name} variant="standard" />
                        {/* <Button variant="outlined" sx={{ml: 4}}>Update</Button> */}
                        <SplitButton/>
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
                                    Last Updated: {invObject.updatedAt}
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
        </div>
    );
}

export default Update;