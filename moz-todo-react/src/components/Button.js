import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

export default function ButtonUsage({content, size, c}) {
    const buttonStyle = {
        backgroundColor: '#E0E0E0',
        // Cambiamos el color según el prop
        color: c,
        borderRadius: '5px',
        border: '5px',
        cursor: 'pointer',
        fontWeight: "bold",
        fontSize:'20px',
        fontFamily: 'Elephant',
        width: '400px',
        height: '200px',
        top: '300px',
        left: '40px',
        padding: '25px',
        margin: '25px',
        


      };
    return <Button variant="contained" style={buttonStyle}  size={size}>{content} </Button>;
}