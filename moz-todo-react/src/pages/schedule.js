import React from "react";
import {useState } from "react";
import LittleButton from "../components/LittleButton";
import {useNavigate} from "react-router-dom";
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

    //DB
    const [availables, setAvailables] = useState([{key: "1", name: "perra"}]);
    //date
    const [date, setDate] = useState(dayjs(fechaFormatoYMD));
    //form bool
    const [showForm, setShowForm] = useState(false);
    //form shhow or not
    

    const goDay = () =>{
        
        //Available dates with query
        let arr = [{key: "popo", name: "holi"},{key: "popis", name: "ari"}];
        setAvailables(arr);
    }
    const chooseSchedule = () =>{
        //need the topic of the meeting and the email of the person
        setShowForm(true);
        //Erase the hour from availables
        availables.filter((element,index)=>{
            element.key!==key;

        })
    }
    //calendar
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
       <div>
            <LittleButton content= "Go to this date" size="large" c='#000000' action={goDay} />
            
            {availables.map((element) => {
               
             return (<LittleButton content={element.name}  size="large" c='#4169E1' action={chooseSchedule} />)
               
           
           })}
         
            
            
            
            
        </div>
    </LocalizationProvider>
    
    
    
    )
    


};
export default Schedule;

