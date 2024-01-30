import { createContext, useState } from "react";
import { ErrorMessage } from "../../../alertBox/ErrorMessage";
import { validateEmail } from "../../../validation/FormValidation";
import { isInputEmptyOrSpaces } from "../../FormValidation";
import { baseUrl } from "../../../configure/urls";
import { SuccessMessage } from "../../../alertBox/SuccessMessage";
import { useNavigate } from "react-router-dom";





const MentorAuthcontext = createContext()

export default MentorAuthcontext;

export const MentorAuthProvider = ({children}) =>{

    const navigate = useNavigate()

    
    let sigupMentor = async(e) =>{
        e.preventDefault()
        try{
            if (isInputEmptyOrSpaces(e.target.password1)){
                ErrorMessage({message: "please enter password"})

            }else if (isInputEmptyOrSpaces(e.target.password2)){
                ErrorMessage({message: "please enter confirm password"})

            }else if (e.target.password1.value.length < 5){
                ErrorMessage({message: "password must me minimum 5 characters"})

            }else if ( validateEmail(e.target.email.value)){
                ErrorMessage({message: "email is not in the format"})

            }else if (isInputEmptyOrSpaces(e.target.username)){
                ErrorMessage({message: "please enter username"})

            }else if (isInputEmptyOrSpaces(e.target.firstname)){
                ErrorMessage({message: "please enter First Name"})

            }else if (isInputEmptyOrSpaces(e.target.lastname)){
                ErrorMessage({message: "please enter Last Name"})
                
            }else if (e.target.password1.value !== e.target.password2.value ){
                ErrorMessage({message : "password missmatch!"})
    
            }else{
                let response = await fetch(`${baseUrl}/mentor-profile/signup-mentor-profile/`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        username: e.target.username.value,
                        firstname: e.target.firstname.value,
                        lastname: e.target.lastname.value,
                        email: e.target.email.value,
                        password1: e.target.password1.value,
                        password2: e.target.password2.value,
                    }),
                });
                console.log("responce", response.status);
                
                if (response.status === 201){
                    SuccessMessage({message: "account created successfully"})
                    navigate('/')
                }else{
                    console.log('error :::::::::::', response.status)
                }
            }

        }catch(errors){
            console.log(errors.response.data);
            
        }
    }



    let mentorAuthContextData = {


        sigupMentor: sigupMentor

    }

    return(
        <MentorAuthcontext.Provider value={mentorAuthContextData}>
            {children}
        </MentorAuthcontext.Provider>
    )
}