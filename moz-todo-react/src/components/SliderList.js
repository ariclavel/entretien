import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import image from '../assets/picprofile.png'; 
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import Slider from '@mui/material/Slider';

export default function SliderList({data}) {
  const fixedValue = 50; // Establece el valor fijo

  const marks = [
    {
      value: fixedValue,
      label: fixedValue.toString(),
    },
  ];
  const sliderStyle = {
    width: '150px', // Ajusta el ancho del slider
  };
  
    const elements = data.map((item) => (
        <div><ListItem>
           
                
                <img width="48" height="48" src={item.link} />
               
            <ListItemText primary={item.name} 
            secondary={<Slider
              value={item.level}
              
              style={{ color: 'black', width: '70px'}} // Cambia el color del slider a negro
            />
        } />
           
          
        </ListItem>
        <Divider variant="inset" component="li" /></div>

      
    ));  

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 960,
        bgcolor: 'background.paper',
      }}
    >
      {elements}
           
    </List>
        
      
    );
}