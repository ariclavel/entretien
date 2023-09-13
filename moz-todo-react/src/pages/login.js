import React from "react";
import {useState } from "react";
import CustomButton from "../components/Button";
import {useNavigate} from "react-router-dom";
import { Alert } from "react-native-web";



const Login = () => {
    //use it for navigation
    const navigate = useNavigate();
    //allow change state of formFields, initialize in void inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
//function to reset formfields when user decide to signin with google or has a wrong email or password
    const resetFormFields = () => {
        setEmail("");
        setPassword("");

    };
    const goHome = () =>{
        console.log("entreeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        const allowedUsers = 
        [{Usuario: "qwe@qwe.com",Password: "#qwe"},
        {Usuario:"abc@abc.com", Password: "a&b!_"},
        {Usuario:"zxc@zxc.com", Password: "1abc"}
        ];
        allowedUsers.forEach(user => {
            console.log(email, password)
            if(email === user.Usuario && password === user.Password) navigate(`home`);
            
        });
        
        

    };
   
    //detect input changes
    const handleChangeEmail = (event) => {
        const dummy = event.target.value;
        const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Prueba si el email cumple con el patrón
        if(patronEmail.test(dummy)) setEmail(dummy);
        else resetFormFields();
        console.log(email)
        
    };
    const handleChangePassword = (event) => {
        console.log(event.target.value);
        const dummy = event.target.value;
        const patronPassword = /^[a-zA-Z0-9#&,_!]+$/;
        
        if(patronPassword.test(dummy)) setPassword(dummy);
        else resetFormFields();
        console.log(password)
        
    };
    //detect submit changes
    
      
    return(
         
        <div class="input-container">
        
            <div className="login">
            <h1 className="bienvenido"><p className="letras">Bienvenido,</p></h1>
            <p className="sub">Ingresa al Banco de Alasitas</p>
            
            <form >
                <input
                maxLength="20"
                
                className="email"
                    name="email" 
                    type= "email" 
                    value= {email} 
                    onChange = {handleChangeEmail}
                    label= "email"
                    required 
                />
            
                <input className="pass"
                    maxLength="20"
                    pattern="[A-Za-z0-9#&_!]+" 
                    name="password" 
                    type="password"
                    value= {password}
                    onChange = {handleChangePassword}
                    label= "password" 
                    required 
                />  
                <div className="buttons-container">
                    <CustomButton content="Ingresa" cb ={goHome} />
                    <p className="contact">Olvidaste tu contraseña o correo? Contáctanos</p>
                   

                    
                </div>     
                
            </form>
        </div>
        
    </div>
    
    )
};
export default Login;