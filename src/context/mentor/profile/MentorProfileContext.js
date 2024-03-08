import { createContext, useState, useContext} from "react";
import { baseUrl } from "../../../configure/urls";
import AuthContext from "../../AuthContext";
import { useNavigate } from 'react-router-dom';
import { SuccessMessage } from "../../../alertBox/SuccessMessage";
import { ErrorMessage } from "../../../alertBox/ErrorMessage";


const MentorPfrofilecontext = createContext()
export default MentorPfrofilecontext;

export const MentorProfileProvider = ({children}) =>{
    const [userCheck, setUserCheck ] = useState(10)
    const navigate = useNavigate()
    const {user, authToken} = useContext(AuthContext)

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

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


    const getMentorProfile = async() => {
        
        let response = await fetch(`${baseUrl}/mentor-profile/get-mentor-profile/${user.id}/`, {
            method: "GET",
            headers:{
                'Authorization': 'Bearer ' + authToken.access,  
            },
        })
        if (response.status === 200){
            SuccessMessage({message: "mentor data get successfully"})
        }else if (response.status === 401){
            ErrorMessage({message: "authentication error"})
        }
    }


    const editMentorProfile = async(e) =>{

        e.preventDefault()

        const formData = new FormData()
        console.log("form submitted");

        formData.append("username", e.target.username.value)
        formData.append("education", e.target.education.value)
        formData.append("profession", e.target.profession.value)
        formData.append("email", e.target.email.value)
        formData.append("firstname", e.target.firstname.value)
        formData.append("lastname", e.target.lastname.value)
        formData.append("place", e.target.place.value)
        formData.append("contactNumber", e.target.contactNumber.value)
        formData.append("industrialExperience", e.target.industrialExperience.value)
        formData.append("teachingExperience", e.target.teachingExperience.value)
        formData.append("selfIntro", e.target.selfIntro.value)
        
        console.log("user:::::::", user.id);
        let response = await fetch(`${baseUrl}/mentor-profile/edit-mentor-profile/${user.id}/`,{
            method: "POST",
            headers:{
                'Authorization': 'Bearer ' + authToken.access,  
            },
            body: formData
        })
        if (response.status === 200){
            SuccessMessage({message: "profile updated"})
            // need to more complete
        }
    }

    let MentorProfileContextData = {
        userCheck:userCheck,
        skills:skills,
        newSkill:newSkill,

        getMentorProfile:getMentorProfile,

        setNewSkill:setNewSkill,
        handleAddSkill:handleAddSkill,
        handleRemoveSkill:handleRemoveSkill,
        handleKeyDown:handleKeyDown,
        editMentorProfile:editMentorProfile


    }

    return(
        <MentorPfrofilecontext.Provider value={MentorProfileContextData} >
            {children}
            
        </MentorPfrofilecontext.Provider>
    )
}