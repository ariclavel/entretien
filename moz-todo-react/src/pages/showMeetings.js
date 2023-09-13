import React from "react";
import {useState } from "react";

import {useNavigate} from "react-router-dom";
import GoogleButton from "../components/googleButton";
import { handleGoogleLogin } from "../database/db";
import LittleButton from "../components/LittleButton";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { writeUserData } from "../database/db";
import { getAvailabilities } from "../database/db";

const ShowMeetings= () =>{
    //navigation
    const navigate = useNavigate();
      //returning home
    const goHome = () =>{
        navigate("/")
    }
    //availabilities
    const [av, setAv] = useState(false);
    const createAv = () =>{
        setAv(true);

    }
    //show meetings
    const [meeting, setMeeting] = useState(false);
    const showMeetings = () =>{
        setMeeting(true);
    }
    //handle inputForm
    //handle inputs
    const [start, setStart] = useState("");
    const handleStart = (event) => {
        setStart(event.target.value); 
    };
    const [end, setEnd] = useState("");
    const handleEnd = (event) => {
        setEnd(event.target.value); 
    };
    const [date, setDate] = useState("");
    const handleDate = (event) => {
        setDate(event.target.value); 
    };
    //Dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setAv(false);
        setConf(false);
    };
    const [conf, setConf] = useState(false);
    const confirAv = () => {
        setConf(true);
    }
    //FOR RESERVATIONS ON DATABASE
    const reservation = () => {
        setOpen(false);
        setAv(false);
        setConf(false);
        
        console.log("reserv");
    }
      return (
        <div>
          <h1>Iniciar sesión con Google</h1>
          <GoogleButton onClick={handleGoogleLogin} />
          
          {!meeting && !av && (<LittleButton content="Go back"  size="large" c='#4169E1' action={goHome} />)}
          {!meeting && !av && (<LittleButton content="Create availabilities"  size="large" c='#4169E1' action={createAv} />)} 
          {av && (
                <div>
                <form>
                <label>
                    Start hour :&nbsp;&nbsp;
                    <input type="text" name="start" value={start} onChange={handleStart} />
                </label>
                <label>
                
                &nbsp;&nbsp;&nbsp;&nbsp;Finish Hour  :&nbsp;&nbsp;
                    <input type="text" name="end" value={end} onChange={handleEnd} />
                </label>
                <label>
                
                &nbsp;&nbsp;&nbsp;&nbsp;Date (year-month-day format)  :&nbsp;&nbsp;
                    <input type="text" name="date" value={date} onChange={handleDate} />
                </label>
                
                <LittleButton content="Create availabilitie"  size="large" c='#4169E1' action={handleClickOpen} />
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
                        <LittleButton  content="Confirm"  size="large" c='#4169E1' action={confirAv} color="primary">
                        </LittleButton>
                        <Dialog open={conf} onClose={reservation}>
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
          {!meeting && !av && (<LittleButton content="Meetings"  size="large" c='#4169E1' action={showMeetings} />)} 
          {meeting &&
          <h1>Meetings</h1>
          }
        </div>
        
      );

};
export default ShowMeetings;
