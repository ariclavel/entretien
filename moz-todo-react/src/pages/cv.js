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
import Badge from '@mui/material/Badge';
import ListIcon from "../components/ListIcon";
import ToolTip from "../components/ToolTip";
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import WorkIcon from '@mui/icons-material/Work';
import SliderList from "../components/SliderList";
import Grid from '@mui/material/Grid';
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

      const dataList = [
        {icon: "MSc’S DEGREE in computer science, École d´Ingénieurs Léonard De Vinci, ESILV", date: "Oct 2023- Oct 2024", pic: '2', place: 'Paris, France', link: 'https://www.devinci.fr/le-pole/ecoles/esilv-ecole-dingenieurs-paris-la-defense/'},
        {icon: "BACHELOR’S DEGREE in computer science, Exchange Program, Institut Supérieur d´éléctronique de Paris, ISEP", date: "Sep 2022- Jan 2023", pic: '2', place: 'Paris, France', link: 'https://www.isep.fr/'},
        {icon: "BACHELOR’S DEGREE in computer science, Tecnológico de Monterrey", date: "Jun 2019- Jun 2023", pic: '2', place: 'GDL, México', link: 'https://tec.mx/en'}
      ]
      const dataList2 = [
        {name: "Spanish", level: 100, link: "https://img.icons8.com/color/48/spain-circular.png"},
        {name: "French", level: 85, link: "https://img.icons8.com/color/48/france-circular.png"},
        {name: "English", level: 75, link: "https://img.icons8.com/color/48/great-britain-circular.png"}
        
      ]
      const dataList3 = [
        {name: "Javascript", level: 76, link: "https://img.icons8.com/fluency/48/javascript.png"},
        {name: "React+Material UI", level: 58, link: "https://img.icons8.com/plasticine/100/react.png" },
        {name: "Scikitlearn, Flask", level: 63, link: "https://img.icons8.com/plasticine/100/python.png"},
        {name: "AgentPy, TensorFlow", level: 50, link: "https://img.icons8.com/plasticine/100/python.png"}
        
      ]
      const dataList4 = [
        {name: "Matlab", level: 60, link: "https://img.icons8.com/fluency/48/matlab.png"},
        {name: "C++", level: 60, link: "https://img.icons8.com/color/96/c-plus-plus-logo.png"},
        {name: "PHP", level: 55, link: "https://img.icons8.com/ultraviolet/40/php.png" },
        {name: "Java", level: 40, link: "https://img.icons8.com/fluency/96/java-coffee-cup-logo.png"}
        
      ]
      const dataList5 = [
        {name: "Github", level: 60, link: "https://img.icons8.com/ios-filled/50/github.png" },
        {name: "Trello", level: 60, link: "https://img.icons8.com/nolan/64/trello.png"},
        {name: "Scrum-Methodology", level: 55, link: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-scrum-agile-flaticons-lineal-color-flat-icons-4.png" }
        
      ]
      const dataList6 = [
        {name: "MySQL", level: 70, link: "https://img.icons8.com/officel/80/mysql.png"},
        {name: "DB2", level: 55, link: "https://img.icons8.com/external-creatype-outline-colourcreatype/64/external-db2-video-file-extension-line-creatype-outline-colourcreatype.png" },
        {name: "FireBase", level: 50, link: "https://img.icons8.com/color/96/firebase.png"},
        {name: "MongoDB", level: 40, link: "https://img.icons8.com/color/96/mongodb.png"}
      ]

    return(
      
        
           

    
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
        <img src={image} className="circular-border" alt="Circular Image" width={100} height={100} />
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
           
           <br/>
           <br/>
           <Stack spacing={3} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.secondary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:5,
              boxShadow: 5,
              minWidth: 400,
              padding: 4,
              
          }}
           >
             
           <a href="mailto:arianaclavel19@gmail.com">
              <Tooltip title="arianaclavel19@gmail.com">
                <EmailIcon style={{ fontSize: 36, color: 'black' }} />
              </Tooltip>
            </a>
            <a href="https://www.linkedin.com/in/ariana-lisel-ayaviri-clavel-143428223/">
              <Tooltip title="Ariana Lisel Ayaviri Clavel">
                <LinkedInIcon style={{ fontSize: 36, color: 'black' }} />
              </Tooltip>
            </a>
            <a href="https://github.com/ariclavel">
                <Tooltip title="ari.clavel">
                  <GitHubIcon style={{ fontSize: 36, color: 'black'}} />
                </Tooltip>
            </a>  
            <Tooltip title="0766195498">
                <PhoneEnabledIcon style={{ fontSize: 36, color: 'black'}} />
            </Tooltip>
          </Stack>
          
        </Box>
        <Stack spacing={2} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
              Education
           </Stack>
        <Stack spacing={3} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.secondary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:5,
              boxShadow: 5,
              minWidth: 400,
              padding: 4,
              
          }}
           >
           
       
            <ListIcon data ={dataList} /> 
        
           </Stack>
           
           <Grid container spacing={2}>
          <Grid item xs={4}>
           
       
          <Stack spacing={2} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
            
              Languages
           </Stack>
            </Grid>
            <Grid item xs={8}>
           
       
            <Stack spacing={2} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
            
              Skills
           </Stack>
            </Grid>
            </Grid>
           <Stack spacing={4} direction="row"  justifyContent="center" 
            sx={{ 
              color: 'text.secondary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:5,
              boxShadow: 5,
              minWidth: 400,
              padding: 4,
              
          }}
           >
            <Grid container spacing={2}>
          <Grid item xs={4}>
           
       
            <SliderList data ={dataList2} /> 
            </Grid>
            <Grid item xs={8}>
            <Grid container spacing={30}>
          <Grid item xs={2}>
          <SliderList data ={dataList3} /> 
          </Grid>
          <Grid item xs={2}>
          <SliderList data ={dataList4} /> 
          </Grid>
          <Grid item xs={2}>
          <SliderList data ={dataList5} /> 
          </Grid>
          <Grid item xs={2}>
          <SliderList data ={dataList6} /> 
          </Grid>
            </Grid>
       
            
            </Grid>
            </Grid>
        
           </Stack>
           
           <Stack spacing={2} direction="row"  justifyContent="center" 
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
              Skills 
           </Stack>
           <Stack spacing={2} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
           



              Projects
           </Stack>
           <Stack spacing={2} direction="row"  justifyContent="center"
            sx={{ 
              color: 'text.primary',
              bgcolor: 'background.paper',
              borderRadius: 5,
              p:2,
              boxShadow: 5,
              minWidth: 100,
              padding: 1,
              fontSize: 17,
              fontWeight: 'bold',
              
          }}
           >
              Awards & Recognition
           </Stack>
           

           
         
         
      </Box>
      

      

            
            
          
        

    )
    
};
export default Cv;