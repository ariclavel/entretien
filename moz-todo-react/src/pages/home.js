import React from "react";
import {useState } from "react";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const Home = () =>{
    return(
        <div style={{ 
            backgroundImage: `url("https://live.staticflickr.com/5196/5904923542_27d6f74c68.jpg")` 
          }}>
            <div>
            <Button content= "Schedule a meeting with me !" size="large" c='#000000'/>
            <Button content= "Take a look of " size="large" c='#000000'/>
            </div>
            
          </div>
        

    )

};
export default Home;