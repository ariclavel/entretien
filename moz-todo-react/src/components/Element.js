import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import {Link} from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';

export default function Element({content, title, date,  lien}) {
    
    return(
        <Box sx={{ 
            color: 'text.secondary',
            bgcolor: 'white',
            borderRadius: 0,
            p:5,
            boxShadow: 3,
            minWidth: 200,
            padding: 2
        }}>
            <Box sx={{
            color: 'success.dark',
            bgcolor: 'white',
            borderRadius: 0,
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
            padding: 6
          
            }}>{title+"   "}<Link to={lien}>{content} </Link>
            </Box>
          
            <Box sx={{ 
                color: 'text.secondary',
                bgcolor: 'white',
               
                borderRadius: 0,
                p:1,
                boxShadow: 3,
                minWidth: 100,
                padding: 1.5
            }}>{date}</Box>
            
           
            
           
        </Box>
        
        

    ) 
};