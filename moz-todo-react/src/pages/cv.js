import React from "react";
import {useState } from "react";
import {Image} from 'react-native';
import Element from '../components/Element';
import {useNavigate} from "react-router-dom";
import '../css/cv.css';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import image from '../assets/picprofile.png'; 
import Title from '../components/Title'
import Slider from '@mui/material/Slider';
import { ErrorBoundary } from 'react-error-boundary';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';

const Cv= () =>{
  const readOnlyValue = 75;
 
    //errors
    function ErrorFallback({ error, resetErrorBoundary }) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      );
    }
    //navigation
    const navigate = useNavigate();
      //returning home
    const goHome = () =>{
        navigate("/")
    }
    const theme = createTheme({
        palette: {
          background: {
            
            paper: '#66cccc',
          },
          text: {
            primary: '#6633CC',
            secondary: '#46505A',
          },
          action: {
            active: '#001E3C',
          },
          success: {
            dark: '#009688',
          },
        },
      });
    return(
      
        <div>
           
    <ThemeProvider theme ={theme}>
    
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          padding: 3,
          border: 5
        }}
      >
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          Ariana Ayaviri Clavel
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
            padding: 6
          }}
        >
          
          
          Computer Engineering/ MSc Computer Science
        </Box>
        <Box sx={{ 
            color: 'text.secondary',
            bgcolor: 'background.paper',
            borderRadius: 5,
            p:5,
            boxShadow: 5,
            minWidth: 400,
            padding: 4,
            
        }}>
           <img src={image} className="circular-border" alt="Circular Image" width={100} height={100} />
           <br/>
           <br/>
           <a href="arianaclavel19@gmail.com">
              <EmailIcon style={{ fontSize: 36, color: 'black' }} />
          </a>
          <a href="www.linkedin.com/in/ariana-lisel-ayaviri-clavel-143428223">
              <LinkedInIcon style={{ fontSize: 36, color: 'black' }} />
          </a>
          <a href="https://github.com/ariclavel">
              <GitHubIcon style={{ fontSize: 36, color: 'black'}} />
          </a>  
          <a >
              <PhoneEnabledIcon style={{ fontSize: 36, color: 'black'}} />
              0766195498
          </a>       
        </Box>

        
        

      
        
        
      </Box>
    </ThemeProvider>
            
            
          </div>
        

    )
    
};
export default Cv;