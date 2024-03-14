import React, { useContext, useEffect } from 'react'
import { MdEdit } from "react-icons/md";
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext';
import { IoIosCloseCircle } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";

const MentorSkills = ({
  handleDisplayEditSkill,
  handleRemoveMentorSkill
}) => {
  let {userSkills} =  useContext(MentorPfrofilecontext)
  
  return (
    <div class="p-6 ml-2 w-2/3 border-gray-300 border  sm:rounded-lg shadow-md">
    <div class=" sm:text-xl flex justify-between text-gray-800  tracking-tight">              
      <p className=''>Skills</p>
      <div className='flex justify-between sm:text-xl'>
        <p className='mr-4 cursor-pointer text-lg' onClick={() => handleRemoveMentorSkill()}><MdEdit /></p>          
        <p className='mr-4 cursor-pointer text-xl' onClick={() => handleDisplayEditSkill()}><RiAddLine /></p>          

      </div>
    </div>
    <div className="w-full  px-3 mb-4 sm:mb-0">
      <div className="flex flex-wrap mt-2 pt-2">

            {
              userSkills && userSkills.length ? (
                userSkills.map((skill) => (
                  <div
                    key={skill.id} // Essential for performance optimization
                    value={skill.id}
                    className="w-auto px-4  text-base mb-1 pb-1 font-medium text-gray-00 bg-gray-700 border-gray-300 shadow rounded-md mx-1"
                  >
                    <span className="text-white  text-lg font-normal">{skill.skills}</span>
                    <span className="text-white  text-lg font-normal"></span>

                  </div>
                ))
              ) : (
                <p>No skills added yet.</p>
              )
            }


      </div>
    </div>
  </div>
  )
}

export default MentorSkills