import { createContext, useContext, useState } from "react";
import { ErrorMessage } from "../../../alertBox/ErrorMessage";
import { validateEmail } from "../../../validation/FormValidation";
import { isInputEmptyOrSpaces } from "../../FormValidation";
import { baseUrl } from "../../../configure/urls";
import { SuccessMessage } from "../../../alertBox/SuccessMessage";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";





const MentorAuthcontext = createContext()

export default MentorAuthcontext;

export const MentorAuthProvider = ({children}) =>{

    const navigate = useNavigate()
    const {user, authToken} = useContext(AuthContext)

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    
    // mentor signup
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

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddSkill();
        }
    };

    const handleRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const editMentorProfile = async(e) =>{
        e.preventDefault()
        
        const formData = new FormData()
        if (skills.length > 0){
            console.log("skillss::::", skills);
            formData.append('skills', skills)
        }else{
            console.log("no skills added");
        }
        formData.append("username", e.target.username.value)
        formData.append("education", e.target.education.value)
        formData.append("profession", e.target.profession.value)
        formData.append("email", e.target.email.value)
        formData.append("firstname", e.target.firstname.value)
        formData.append("lastname", e.target.lastname.value)

        let response = await fetch(`${baseUrl}/mentor-profile/edit-mentor-profile/${user.id}/`,{
            method: "POST",
            headers:{
                'Authorization': 'Bearer ' + authToken.access,  
            },
            body: formData
        })
        

    }


    let mentorAuthContextData = {
        skills:skills,
        newSkill:newSkill,

        setNewSkill:setNewSkill,
        handleAddSkill:handleAddSkill,
        handleRemoveSkill:handleRemoveSkill,
        handleKeyDown:handleKeyDown,

        sigupMentor: sigupMentor,
        editMentorProfile:editMentorProfile

    }

    return(
        <MentorAuthcontext.Provider value={mentorAuthContextData}>
            {children}
        </MentorAuthcontext.Provider>
    )
}