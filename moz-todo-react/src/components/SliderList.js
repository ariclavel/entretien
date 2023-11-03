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

export default function SliderList({data}) {
  
    const elements = data.map((item) => (
        <div><ListItem>
            <ListItemAvatar>
                <Avatar>
                
                <img width="48" height="48" src={item.link} alt="spain-circular"/>
               
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} 
            secondary={<div>
                <input
                    background= 'black'
                    type="range"
                    min="0"
                    max="100"
                    value={item.level}
                    readOnly // Make the input read-only to keep the fixed value
                  />
            </div>} />
           
          
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