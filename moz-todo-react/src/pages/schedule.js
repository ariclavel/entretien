import React from "react";
import {useState,useEffect } from "react";
import LittleButton from "../components/LittleButton";
import {useNavigate} from "react-router-dom";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { getAvailabilities } from "../database/db";
import { writeReservation } from "../database/db";
import { deleteData } from "../database/db";

const Schedule= () =>{
    //navigation
    const navigate = useNavigate();

    //Today s date format
    let fechaHoy = new Date();
    const year = fechaHoy.getFullYear();
    const month = String(fechaHoy.getMonth() + 1).padStart(2, '0'); 
    const day = String(fechaHoy.getDate()).padStart(2, '0');
    
    const fechaFormatoYMD = `${year}-${month}-${day}`;

    //DB of availables slots
    const [availables, setAvailables] = useState([]);
    //date
    const [date, setDate] = useState(dayjs(fechaFormatoYMD));
    //form bool
    const [showForm, setShowForm] = useState(false);
    //email and title
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    //form shhow or not
    
    //GET AVAILABILITIES
    const [cargando, setCargando] = useState(false);
    const goDay =async () =>{
        //const arr = availabilitiesGet(date);
       
        const month = String(date.$M+ 1).padStart(2, '0'); // El mes se indexa desde 0, por lo que debes sumar 1
        const day = String(date.$D).padStart(2, '0');
        const completeDate = `${date.$y}-${month}-${day}`;
        
        try {
            // Consult in progress
            setCargando(true);
      
            // sEND QUERY
            const response = await getAvailabilities(completeDate);
      
            // SET THE AVAILABILITY ARRAY WITH THE RESULT QUERY
            setAvailables(await response);
          } catch (error) {
            console.error('Error al realizar la consulta:', error);
          } finally {
            // Marcar que la consulta ha terminado
            setCargando(false);
          }
        
    };
    const [createMeeting, SetCreateMeeting] = useState({});
    const chooseSchedule = (obj) =>{
        //console.log(obj)
        //need the topic of the meeting and the email of the person
        setShowForm(true);
        SetCreateMeeting(obj);
        
    };
    //handle inputs
    const handleEmail = (event) => {
        setEmail(event.target.value); 
    };
    const handleTitle = (event) => {
        setTitle(event.target.value); 
    };
    //Dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        console.log("yes")
        setOpen(true);
    };
    const handleClose = () => {
        console.log("nope");
        setOpen(false);
        setShowForm(false);
    };

    // reservate a MEETING
   
    const reservation = () =>{
        //console.log("date", date);
        //transform date
        const month = String(date.$M+ 1).padStart(2, '0'); 
        const day = String(date.$D).padStart(2, '0');
        const completeDate = `${date.$y}-${month}-${day}`;
        //create reservation
        console.log(createMeeting);
        writeReservation(completeDate,createMeeting.start,createMeeting.end,email,title)
        //delete availability
        //Erase the hour from availables
        setAvailables(availables.filter((element) => element.key!==createMeeting.key)); 

        deleteData(completeDate, createMeeting.start, createMeeting.end );
        
        setOpen(false);
        setShowForm(false);

    }
    //Come back to home page
    const goHome = () =>{
        navigate("/")
    }
    //alert confirmation
    const [confirRes, setConfirRes] = useState(false);
    const confirmResponse = () => {
        setConfirRes(true);
    }
    //calendar
    return (
        
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <LittleButton content="Go back"  size="large" c='#4169E1' action={goHome} />
        <br></br><br></br><br></br>
       <DateCalendar value={date} onChange={(newValue) => setDate(newValue)} />
       <div>
            {!showForm &&
            <LittleButton content= "Go to this date" size="large" c='#000000' action={goDay} />
            }
            
            {!showForm && 
            
            availables.map((element) => {
               
                return (<LittleButton content={element.start+"-"+element.end}  size="large" c='#4169E1' action={()=>chooseSchedule({"start": element.start, "end":element.end, "key":element.key})} />)
                  
              
             })}
            
            
            
           {showForm && (
                <div>
                <form>
                <label>
                    Email  :&nbsp;&nbsp;
                    <input type="email" name="nombre" value={email} onChange={handleEmail} />
                </label>
                <label>
                
                &nbsp;&nbsp;&nbsp;&nbsp;Title  :&nbsp;&nbsp;
                    <input type="text" name="email" value={title} onChange={handleTitle} />
                </label>
                <LittleButton content="Make Reservation"  size="large" c='#4169E1' action={handleClickOpen} />
                <LittleButton content="Cancel"  size="large" c='#4169E1' action={handleClose} />
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Confirmation</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Are you sure you want to perform this action?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <LittleButton  content="Cancel"  size="large" c='#4169E1' action={handleClose} color="primary">
                        </LittleButton>
                        <LittleButton  content="Confirm"  size="large" c='#4169E1' action={confirmResponse} color="primary">
                        </LittleButton>
                        <Dialog open={confirRes} onClose={reservation}>
                            <DialogTitle>Confirmation</DialogTitle>
                                <DialogContent>
                                <DialogContentText>
                                    Reservation Done!
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <LittleButton  content="Confirm"  size="large" c='#4169E1' action={reservation} color="primary"></LittleButton>
                                </DialogActions>
                        </Dialog>

                    </DialogActions>
                </Dialog>
                
                </form>
                </div>
            )}
         
            
            
            
            
        </div>
    </LocalizationProvider>
    
    
    
    )
    


};
export default Schedule;

