// src/components/Common/Modal/index.jsx
// This is a reusable MUI Dialog component for displaying messages or confirmations.
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

const Modal = ({ show, onClose, title, message }) => {
  return (
    <Box>
    <Dialog open={show} onClose={onClose} aria-labelledby="modal-title" maxWidth="xs" fullWidth>
      <DialogTitle id="modal-title" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </Box>

  );
};

export default Modal; // <--- ENSURE Modal IS DEFAULT EXPORTED