import React from 'react';
import Button from '@mui/material/Button';

const GoogleButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M13.6 8.91667H10.8V10.5H13.6C13.6 12.3833 12.2833 14 10.7 14C9.51667 14 8.7 13.0167 8.7 11.8333H6.09999V10.1667H8.7V8.91667H6.09999V7.5H8.7V6.25C8.7 4.06667 9.91666 2.33334 11.7 2.33334C12.4667 2.33334 13.1333 2.56667 13.6 2.9L15.4667 1.03334C14.6 0.466675 13.5667 0.166675 12.5 0.166675C10.2 0.166675 8.23332 2.11668 8.23332 4.5V6.25H5.63332V7.5H8.23332V8.91667H5.63332V10.1667H8.23332V14H10.7C14.3 14 17.3 11 17.3 7.5C17.3 7.11667 17.2667 6.73334 17.2 6.36668L13.6 8.91667Z"/></svg>}
    >
      Log-in with Google
    </Button>
  );
};

export default GoogleButton;