/*
    Format "Updated" date
    Change ID to better format (Ex. 10000, 20000)
*/
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Box, Stack } from '@mui/system';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderColor: 'gray',
  borderWidth: '1px',
  borderBlockEndStyle: 'solid',
}));

export default function MainTable() {

  const [listOfInventory, setListOfInventory] = useState([])

  const [history, setHistory] = useState([])

  useEffect(() => {
  axios.get("http://localhost:3001/inventory").then((response) => {
      setListOfInventory(response.data)
  })
  axios.get("http://localhost:3001/history").then((response) => {
    setHistory(response.data)
  })
  }, [])

  const navigate = useNavigate()
    
  return (
    <div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">In Stock</TableCell>
              <TableCell align="right">Updated</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {listOfInventory.map((row) => (
                  <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell align="right">{row.cat_name}</TableCell>
                      <TableCell align="right">{row.count}</TableCell>
                      <TableCell align="right">{row.updatedAt}</TableCell>
                      <TableCell align="right">
                          <IconButton aria-label="edit" onClick={() => {navigate(`/Update/${row.id}`)}}>
                              <EditIcon />
                          </IconButton>
                      </TableCell>
                  </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Accordion sx={{ width: '100%' }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography sx={{ fontSize: '24px'}}>History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Stack>
              {history.map((hist) => (
                <Item key={hist.id}>
                  <Typography>Category: {hist.cat_name}</Typography>
                  <Typography>Updated At: {hist.createdAt}</Typography>
                  <Typography>Change: {hist.change}</Typography>
                  <Typography>Amount: {hist.amount}</Typography>
                  {hist.justify !== null &&
                    <Typography>Justify: {hist.justify}</Typography>
                  }
                </Item>
              ))}
            </Stack>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
