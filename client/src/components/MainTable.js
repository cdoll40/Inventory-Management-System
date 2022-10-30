/*
    Change database design so each category is a row
    Update rows instead of adding new ones when making changes
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

export default function MainTable() {

    const [listOfInventory, setListOfInventory] = useState([])

    useEffect(() => {
    axios.get("http://localhost:3001/inventory").then((response) => {
        setListOfInventory(response.data)
    })
    }, [])

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            {/* <TableCell align="right"></TableCell> */}
            <TableCell align="right">In Stock</TableCell>
            <TableCell align="right">Updated</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        {listOfInventory.map((row) => (
            <TableBody>
                <TableRow
                key="Perishable"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        Perishable
                    </TableCell>
                    {/* <TableCell align="right"></TableCell> */}
                    <TableCell align="right">{row.perishable}</TableCell>
                    <TableCell align="right">{row.updatedAt}</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>

                <TableRow
                key="Frozen"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    Frozen
                    </TableCell>
                    {/* <TableCell align="right"></TableCell> */}
                    <TableCell align="right">{row.frozen}</TableCell>
                    <TableCell align="right">{row.updatedAt}</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="edit">
                                <EditIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>

                <TableRow
                key="Produce"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    Produce
                    </TableCell>
                    {/* <TableCell align="right"></TableCell> */}
                    <TableCell align="right">{row.produce}</TableCell>
                    <TableCell align="right">{row.updatedAt}</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </TableCell>                
                </TableRow>

                <TableRow
                key="Dried"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    Dried
                    </TableCell>
                    {/* <TableCell align="right"></TableCell> */}
                    <TableCell align="right">{row.dried}</TableCell>
                    <TableCell align="right">{row.updatedAt}</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>    
                    </TableCell>                
                </TableRow>
            </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
}
