import { createContext, useState, useContext, useEffect} from "react";
import { baseUrl } from "../../../configure/urls";
import AuthContext from "../../AuthContext";
import { Form, useNavigate } from 'react-router-dom';
import { SuccessMessage } from "../../../alertBox/SuccessMessage";
import { ErrorMessage } from "../../../alertBox/ErrorMessage";


const MentorPfrofilecontext = createContext()
export default MentorPfrofilecontext;

export const MentorProfileProvider = ({children}) =>{
    const navigate = useNavigate()
    const {user, authToken, updateToken} = useContext(AuthContext)

    const [mentorProfileData, setMentorProfileData] = useState(null)


    const [skills, setSkills] = useState([]);
    const [userSkills, setUserSkills] = useState()
    const [newSkill, setNewSkill] = useState('');
    const [skillUpdateCheck, setSkillUpdateCheck] = useState(false)

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

    const updateSkills = async() =>{
        if (skills.length > 0){
            SuccessMessage({message: "skills present"})
            let formData = new FormData()
            formData.append("skills", skills)
            let response = await fetch(`${baseUrl}/mentor-profile/update-skills/${user.id}/`, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + authToken.access
                },
                body: formData
            })
            if (response.status === 200){
                SuccessMessage({message: "data submitted successfully !"})
                setSkillUpdateCheck(true)
            }else{
                ErrorMessage({message: "check console"})
                console.log("error while updating skilles::::::::::::::::::",response.status);
            }
        }else{
            ErrorMessage({message: "not  skills added"})
        }
    }

    const getSkills = async () => {
        try {
          let response = await fetch(`${baseUrl}/mentor-profile/get-mentor-skills/${user.id}/`, {
            method: "GET",
            headers: {
              'Authorization': 'Bearer ' + authToken.access,
            },
          });
      
          if (response.status === 200) {
            let data = await response.json();        
            setUserSkills(data);
          } else {
            if (response.status === 401) {
              ErrorMessage({ message: "Unauthorized: User not found" });
            } else {
              ErrorMessage({ message: "An error occurred. Please check console for details" });
              console.log(response.status);
            }
          }

        } catch (error) {
          console.error("Error fetching skills:", error);
          
          ErrorMessage({ message: "An unexpected error occurred" });
        }
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
        }else if (response.status === 401){
            ErrorMessage({message: "authentication error"})
        }else if (response.status === 405){
            ErrorMessage({message: "Data not found"})
        }
    }


    const editMentorProfile = async(e) =>{

        e.preventDefault()

        const formData = new FormData()
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
            
        }
    }

    let MentorProfileContextData = {
        skills:skills,
        newSkill:newSkill,
        userSkills:userSkills,
        mentorProfileData:mentorProfileData,
        skillUpdateCheck:skillUpdateCheck,


        getMentorProfile: getMentorProfile,

        setNewSkill: setNewSkill,
        handleAddSkill: handleAddSkill,
        handleRemoveSkill: handleRemoveSkill,
        handleKeyDown: handleKeyDown,
        updateSkills: updateSkills,
        getSkills:getSkills,

        editMentorProfile:editMentorProfile


    }

    return(
        <MentorPfrofilecontext.Provider value={MentorProfileContextData} >
            {children}
            
        </MentorPfrofilecontext.Provider>
    )
}