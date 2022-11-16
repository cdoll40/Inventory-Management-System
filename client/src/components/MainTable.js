/*
    Add param to update to link to specific category to update
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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function MainTable() {

  const [listOfInventory, setListOfInventory] = useState([])

  useEffect(() => {
  axios.get("http://localhost:3001/inventory").then((response) => {
      setListOfInventory(response.data)
  })
  }, [])

  const navigate = useNavigate()
    
  return (
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
  );
}
