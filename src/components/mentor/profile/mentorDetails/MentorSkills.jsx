import React, { useContext } from 'react'
import { MdEdit } from "react-icons/md";
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext';


const MentorSkills = ({
  handleDisplayEditSkill
}) => {
  let {userSkills} =  useContext(MentorPfrofilecontext)
  return (
    <div class="p-6 ml-2 w-2/3 border-gray-300 border  sm:rounded-lg shadow-md">
    <div class="text-4xl sm:text-xl flex justify-between text-gray-800 font-semiabold tracking-tight">              
      <p className=''>Skills</p>
      <p className='mr-4 cursor-pointer' onClick={() => handleDisplayEditSkill()}><MdEdit /></p>          
    </div>
    <p>{userSkills}</p>
    <div className="w-full  px-3 mb-4 sm:mb-0">
      <div className="flex flex-wrap mt-2 pt-2">

      {
        userSkills ? (
          userSkills.map((skills)=>{
            <div className=" w-1/12 pl-4 text-base mb-1 pb-1  font-medium text-gray-00 bg-gray-700  border-gray-300 shadow rounded-md mx-1">
              <span className=' text-white text-lg font-normal'>{skills}</span>
            </div>

          })
        )
        :
        <p>no skills added yet</p>
      }
{
  userSkills
}
      </div>
    </div>
  </div>
  )
}

export default MentorSkills