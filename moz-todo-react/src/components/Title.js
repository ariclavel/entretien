import * as React from 'react';
import { Box} from '@mui/system';

export default function Title({title}) {
   
    return (
    <Box sx={{ 
        color: 'text.primary', fontSize: 22, fontWeight: 'medium',
        bgcolor: 'success.dark',
        borderRadius: 3,
        p:5,
        boxShadow: 5,
        minWidth: 400,
        padding: 5
    }}>
    {title}
    </Box> );
}