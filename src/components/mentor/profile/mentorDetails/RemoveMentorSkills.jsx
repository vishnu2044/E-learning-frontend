import React, { useContext, useEffect, useState } from 'react'
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext'
import { IoMdCloseCircle } from "react-icons/io";
import { baseUrl } from '../../../../configure/urls';
import AuthContext from '../../../../context/AuthContext';
import { SuccessMessage } from '../../../../alertBox/SuccessMessage';
import { ErrorMessage } from '../../../../alertBox/ErrorMessage';


export const RemoveMentorSkills = ({
    handleRemoveMentorSkill
}) => {

    let {userSkills} = useContext(MentorPfrofilecontext)
    const [skillsList, setSkillsList] = useState()
    const [removedSkills, setRemovedSkills] =useState([])
    const {user, authToken} = useContext(AuthContext)

    const handleDeleteSkill = (index, skill) =>{
        if (removedSkills.length === 0){
            setRemovedSkills([skill])
        }else{
            setRemovedSkills(prevRemovedSkills => [...prevRemovedSkills, skill])

        }
        setSkillsList(skillsList.filter((_, i) => i !== index))
        
    }

    const updateRemmovedSkills = async() =>{
        if (removedSkills.length > 0){
            console.log("removed skills:::::", removedSkills);
            
            try{
                let formData = new FormData()
                formData.append('removedSkills', removedSkills)
                let response = await fetch(`${baseUrl}/mentor-profile/remove-skills/${user.id}/`, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + authToken?.access,
                    },
                    body: formData
                });
                if (response.status === 200){
                    SuccessMessage({message: "skills removed successfully"})
                }else{
                    ErrorMessage({message: "An error found check console"})
                    console.log(response.status);
                }

            }catch (error){
                console.log("an error found");

            }
        }
    }

    useEffect(()=>{
        if (removedSkills.length > 0){
            console.log("rmoved silkddkjjsd lsd:::::::::::");
            console.log(removedSkills);
        }
    }, [removedSkills])

    useEffect(()=>{
        if (userSkills && userSkills.length > 0){
            console.log(userSkills);
            const skills = userSkills.map(obj => obj.skills)
            setSkillsList(skills)

        }
    }, [userSkills])
  return (
<div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

            <div className='flex justify-center m-2'>
                <p className='text-lg font-semibold '>Remove Skills</p>

            </div>
            <div className='flex flex-wrap mt-2 pt-2 my-7'>
            {
                skillsList ? (
                    skillsList.map((skill, index) => (
                        <div
                            key={index} 

                            className="w-auto px-4 flex text-base mb-1 pb-1 font-medium text-gray-00 bg-gray-600 border-gray-300 shadow rounded-md mx-1"
                        >
                            <span className="text-white text-lg font-normal">{skill}</span>
                            <span onClick={()=>handleDeleteSkill(index, skill)} className="cursor-pointer text-white mt-2 ml-2 text-lg font-normal"><IoMdCloseCircle/> </span>
                        </div>
                    ))
                ) : (
                    <p>No skills added yet.</p>
                )
            }


            </div>



            <div className='flex justify-center'>
                <button onClick={updateRemmovedSkills}  className='bg-gray-700 text-gray-200 px-6 py-2 rounded-md shadow-md mr-2'>Update</button>
                <button onClick={()=>handleRemoveMentorSkill()} className='bg-gray-700 text-gray-200 px-6 py-2 rounded-md shadow-md ml-2'>Cancel</button>
            </div>

        </div>
    </div>
</div>
  )
}
