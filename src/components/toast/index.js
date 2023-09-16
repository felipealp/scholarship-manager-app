import PropTypes from 'prop-types';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ type, message, open, handleClose }) => {
  const position = {
    vertical: 'top',
    horizontal: 'center'
  };

  return (
    <Snackbar anchorOrigin={position} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

Toast.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func
};

export default Toast;
