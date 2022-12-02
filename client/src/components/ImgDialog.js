import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ListOfImages from './ListOfImages'
import { Box } from '@mui/system';
import UploadForm from './UploadForm';

export default function ImgDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Click to open
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
            <Box sx={{ border: '1px solid grey', padding: '8px' }} >
                <UploadForm />
            </Box>
            <br />
            <Box sx={{ border: '1px solid grey', padding: '8px' }} >
                <ListOfImages />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}