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
    const {user, authToken, updateToken} = useContext(AuthContext)

    const [mentorProfileData, setMentorProfileData] = useState(null)

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
        const data = await response.json()
        if (response.status === 200){
            setMentorProfileData(data)
            console.log("mentor data:::::::", data);    
        }else if (response.status === 401){
            ErrorMessage({message: "authentication error"})
        }else if (response.status === 405){
            ErrorMessage({message: "Data not found"})
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

        console.log("first name:::::::", e.target.firstname.value);
        console.log("first email:::::::", e.target.email.value);
        
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
            navigate("/mentor/mentor-panel/mentor-profile")
            // need to more complete
        }
    }

    let MentorProfileContextData = {
        userCheck:userCheck,
        skills:skills,
        newSkill:newSkill,
        mentorProfileData:mentorProfileData,

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