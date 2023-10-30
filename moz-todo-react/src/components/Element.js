import * as React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import {Link} from "react-router-dom";
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Element({content, title, date, content2, lien}) {
    
    return(
        
       
            <Box sx={{
           
            bgcolor: 'white',
            borderRadius: 0,
            fontWeight: 'bold',
            mx: 1,
            fontSize: 14,
            padding: 6,
        
          
            }}>
            
            
            <CardContent>
      
       
     
    </CardContent>
  


            <Grid container spacing={1}>
            
            <Grid xs>
            <h3>{title+" "}</h3>
            <h3 style={{ color: 'text.primary' }}><Link to={lien}>{content} </Link>
            
            </h3>
            <h3 style={{ color: 'text.secondary' }}>{date}
            </h3>
            </Grid>
           
           
          

            </Grid>
            
            </Box>
            
           
        
        
        

    ) 
};