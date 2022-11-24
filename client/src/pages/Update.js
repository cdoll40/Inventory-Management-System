/*
    Fix history
*/
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
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const options = ['Backorder', 'Lost Goods'];

const invAdd = {
    addCount: 0
}

const invDel = {
    delCount: 0,
    delJustify: ""
}

const history = []
history.length = 5

function Update() {

    const { id } = useParams()

    const [invObject, setInvObject] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3001/inventory/byId/${id}`).then((response) => {
           setInvObject(response.data)
        })
    }, [])

    const updatedInv = invObject
    let formatDate = new Date(updatedInv.updatedAt)
    formatDate = formatDate.toLocaleString()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('addCount') > 0){
            invAdd.addCount = data.get('addCount')
            console.log(invAdd.addCount)
            const a = parseInt(invObject.count)
            const b = parseInt(invAdd.addCount)
            updatedInv.count = a + b
            setInvObject(updatedInv)
            updateHistory()
            updateDB()
        } else if (data.get('deleteCount') > 0){
            invDel.delCount = data.get('deleteCount') * -1
            invDel.delJustify = options[selectedIndex]
            console.log(invDel.delCount, invDel.delJustify)
            const a = parseInt(invObject.count)
            const b = parseInt(invDel.delCount)
            updatedInv.count = a + b
            setInvObject(updatedInv)
            updateHistory()
            updateDB()
        }
    };

    const updateHistory = () => { 
        if (invAdd.addCount > 0){
            history.push(invAdd)
        } else if (invDel.delCount > 0){
            history.push(invDel)
        }
    }

    const updateDB = () => {
        
        axios.post(`http://localhost:3001/inventory`, invObject).then((response) => {
           console.log("Post success")
        })
        document.location.reload()

    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleAddClick = () => {
        console.info(`You clicked Add`);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

    return (
        <div className="App">
            <Box sx={{ width: '100%', mt: 2}}>
                <Stack spacing={2}>
                    <Item>
                        <Typography textAlign="left" sx={{ fontSize: '24px'}}>{invObject.cat_name} Current Info: </Typography>
                        <Typography textAlign="left" sx={{ fontSize: '20px'}}>Category ID: {invObject.id}</Typography>
                        <Typography textAlign="left" sx={{ fontSize: '20px'}}>Current stock: {invObject.count}</Typography>
                        <Typography textAlign="left" sx={{ fontSize: '20px'}}>Last updated: {formatDate}</Typography>
                    </Item>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Item>
                            <Typography textAlign="left" sx={{ fontSize: '24px'}}>Add</Typography>
                            <TextField id="addCount" name="addCount" autoComplete='off' label={invObject.cat_name} variant="standard" />
                            <br />
                            <Button
                            type='submit'
                            variant="contained"
                            onClick={handleAddClick}
                            sx={{ ml: 'auto', mr: 'auto', mt: 2, width: '100%', maxWidth: 180 }}
                            >
                            Update
                            </Button>
                        </Item>
                    </Box>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Item>
                            <Typography textAlign="left" sx={{ fontSize: '24px'}}>Delete</Typography>
                            <TextField id="deleteCount" name="deleteCount" autoComplete='off' label={invObject.cat_name} variant="standard" />
                            <br /> <br />
                            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                                <Button type='submit' onClick={handleClick}>{options[selectedIndex]}</Button>
                                <Button
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                                >
                                <ArrowDropDownIcon />
                                </Button>
                            </ButtonGroup>
                            <Popper
                                sx={{
                                zIndex: 1,
                                }}
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                    transformOrigin:
                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                            id="option"
                                            name="option"
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                            {option}
                                            </MenuItem>
                                        ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                    </Paper>
                                </Grow>
                                )}
                            </Popper>
                        </Item>
                    </Box>
                    <Item>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography sx={{ fontSize: '24px'}}>History</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {history.map((hist) => (
                                    <Typography>{hist}</Typography>
                                ))}
                                {/* <Typography>
                                    Last Updated: {invObject.updatedAt}
                                </Typography>
                                <Typography>
                                    +5 Perishables
                                </Typography> */}
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                </Stack>
            </Box>
        </div>
    );
}

export default Update;