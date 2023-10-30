import React from "react";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import { Box} from '@mui/system';
const Home = () =>{
 
    //navigation
    const navigate = useNavigate();
    
    const goSchedule =() =>{
        navigate('schedule');
    }
    const goShow=() =>{
      navigate('cv');
  }
    return(
        <div style={{ 
            backgroundImage: `url("http://1.bp.blogspot.com/-wgoz0O7mg44/Tt37inurhoI/AAAAAAAAHSc/KmKWz_Ko6SI/s1600/Windows-Vista-Azul.jpg")` 
          }}>
            <Box sx={{ color: '#ffffff', fontSize: 34, fontWeight: 'medium',fontFamily: 'Elephant', padding: 4}}>
                Ariana Ayaviri Clavel
            </Box>
            <div>
            
            <Button content= "Schedule a meeting with me !" size="medium" c='#ffffff' bc='#302c9b' action={goSchedule} />
            <Button content= "CV" size="medium" c='#ffffff'bc = '#302c9b' action={goShow} />
            </div>
            
          </div>
        

    )

};
export default Home;