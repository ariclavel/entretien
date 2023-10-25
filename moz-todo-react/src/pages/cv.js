import React from "react";
import {useState } from "react";
import {Image} from 'react-native';
import Element from '../components/Element';
import {useNavigate} from "react-router-dom";
import '../css/cv.css';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import image from '../assets/picprofile.png'; 
import Title from '../components/Title'

const Cv= () =>{
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
          padding: 3
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
            padding: 4
        }}>
           <img src={image} className="circular-border" alt="Circular Image" width={100} height={100} />
        </Box>

        
        <Title title = 'Education'
        > 
        </Title>
        <Element 
            title= 'Bachelor Degree:'
            content = ' Tecnológico de Monterrey, Campus Guadalajara'
            date = 'Jun 2019- Jun 2023'
            lien = 'https://tec.mx/en'
        >
        </Element>
        <Element 
            title= 'Bachelor Degree (Exchange Program):'
            content = 'Institut Supérieur d´Électronique de Paris'
            date = 'Sep 2022- Jan 2023'
            lien = 'https://www.isep.fr/'
        >
        </Element>
        <Element 
            title= 'MSc Degree (Current):'
            content = 'ESILV'
            date = 'Sep 2023-Sep 2024'
            lien = 'https://www.esilv.fr/'
        >
        </Element>
        
      </Box>
    </ThemeProvider>
            
            
          </div>
        

    )
    
};
export default Cv;