import React from "react";
import {useState } from "react";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import Calendar from 'react-calendar'; 

const Schedule= () =>{
  
    const [date, setDate] = useState(new Date())



    return (
        <div className="app">
           <h1 className="header">React Calendar</h1>
           <div className="calendar-container">
             <Calendar onChange={setDate} value={date}/>
           </div>
           <div className="text-center">
              Selected date: {date.toDateString()}
            </div>
        </div>
    )


};
export default Schedule;

