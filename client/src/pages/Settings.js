/*
    Fix timer
    Add report
*/

import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Settings() {

  const [timerIndex, setTimerIndex] = useState("4")

  const handleChange = (event) => {
    setTimerIndex(event.target.value);
    console.log(timerIndex)
  };

  return (
    <div className="App">
      <Box sx={{ width: '100%', mt: 2}}>
        <Stack spacing={2}>

          <Item>
            <Typography textAlign="left" sx={{ fontSize: '24px'}}>Settings</Typography>
          </Item>

          <Item>
            <Typography textAlign="left" sx={{ fontSize: '24px'}}>Report</Typography>
          </Item>

          <Item>
            <Typography textAlign="left" sx={{ fontSize: '24px'}}>Database Backup Timer</Typography>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Set Backup Timer</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={timerIndex}
                onChange={handleChange}
                checked
                defaultValue={timerIndex}
              >
                <FormControlLabel value="4" control={<Radio />} label="4 Hours" />
                <FormControlLabel value="6" control={<Radio />} label="6 Hours" />
                <FormControlLabel value="8" control={<Radio />} label="8 Hours" />
              </RadioGroup>
            </FormControl>
          </Item>

        </Stack>
      </Box>
    </div>
  );
}

export default Settings;