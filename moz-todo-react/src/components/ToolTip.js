import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function ToolTip({cont} ) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
      <Button>{cont} </Button>
    </Tooltip>
  );
}