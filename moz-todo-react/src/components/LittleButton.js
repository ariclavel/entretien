import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

export default function ButtonUsage({content, size, c, action}) {
    const buttonStyle = {
        backgroundColor: '#E0E0E0',
        // Cambiamos el color según el prop
        color: c,
        borderRadius: '10px',
        border: '5px',
        cursor: 'pointer',
        fontWeight: "bold",
        fontSize:'10px',
        fontFamily: 'Elephant',
        width: '150px',
        height: '50px',
        top: '50px',
        left: '4px',
        padding: '25px',
        margin: '25px',
        


      };
    return <Button variant="contained" style={buttonStyle}  size={size} onClick={action} >{content} </Button>;
}