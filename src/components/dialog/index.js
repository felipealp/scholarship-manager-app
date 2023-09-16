import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import Button from '@mui/material/Button';
import { Dialog as DialogCompopnent } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Dialog = ({ title, text, open, handleClose, handleConfirm }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <DialogCompopnent
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Continuar
          </Button>
        </DialogActions>
      </DialogCompopnent>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func
};

export default Dialog;
