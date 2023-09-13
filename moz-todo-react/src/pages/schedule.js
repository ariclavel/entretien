import React from "react";
import {useState } from "react";
import LittleButton from "../components/LittleButton";
import {useNavigate} from "react-router-dom";
import Calendar from 'react-calendar'; 
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Schedule= () =>{
    //Today s date
    const fechaHoy = new Date();
    const year = fechaHoy.getFullYear();
    const month = String(fechaHoy.getMonth() + 1).padStart(2, '0'); // El mes se indexa desde 0, por lo que debes sumar 1
    const day = String(fechaHoy.getDate()).padStart(2, '0');

    const fechaFormatoYMD = `${year}-${month}-${day}`;
    //console.log(fechaFormatoYMD);

    const [date, setDate] = useState(dayjs(fechaFormatoYMD));
    //calendar
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
       <div>
            <LittleButton content= "Go to this date" size="large" c='#000000'  />
            
        </div>
    </LocalizationProvider>
    
    
    
    )
    


};
export default Schedule;

