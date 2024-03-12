import React, { useContext, useEffect } from 'react'
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext'
import { IoMdCloseCircle } from "react-icons/io";


const EditMentorSkills = ({
    handleDisplayEditSkill
}) => {
    let {
        skills,
        newSkill,

        handleAddSkill,
        handleRemoveSkill,
        handleKeyDown,
        setNewSkill,
        updateSkills,
        skillUpdateCheck,
        getSkills
    } = useContext(MentorPfrofilecontext)
    useEffect(()=>{
        if (skillUpdateCheck){
            handleDisplayEditSkill()
            getSkills()
        }

    }, [skillUpdateCheck])
  return (
<div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

            <div className='flex justify-center m-2'>
                <p className='text-lg font-semibold '>Update Skills</p>

            </div>

            <div className="w-full px-3 mb-4 sm:mb-0">
                <label htmlFor="skills" className="text-sm font-medium text-gray-700">Skills:</label>
                <div className="flex flex-wrap items-center py-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex justify-between text-base mb-4 font-medium text-gray-600 bg-gray-200 border border-gray-300 shadow rounded-md  mx-2 px-2">
                            <span className='mx-1 mt-1'>{skill}</span>
                            <div className=' ml-1 pt-1 mb-0'>
                              <button type="button" className="text-lg mt-1 text-gray-700" onClick={() => handleRemoveSkill(index)}><IoMdCloseCircle /></button>

                            </div>
                        </div>
                    ))}
                    <div className='flex justify-between w-full border  border-gray-400 my-2 shadow-md bg-gray-50 text-gray-900 py-2.5 text-sm rounded-md'>
                      <input
                          type="text"
                          cla
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type a skill..."
                          className="focus:outline-none w-1/2 mx-2"
                      />
                    </div>
                      <button type="button" onClick={(e) => handleAddSkill(e)} className="bg-gray-500 text-white px-4 py-2 rounded-md mx-2">Add</button>
                </div>
            </div>


            <div className='flex justify-center'>
                <button onClick={()=> updateSkills()} className='bg-gray-700 text-gray-200 px-6 py-2 rounded-md shadow-md mr-2'>Update</button>
                <button onClick={() => handleDisplayEditSkill()} className='bg-gray-700 text-gray-200 px-6 py-2 rounded-md shadow-md ml-2'>Cancel</button>
            </div>

        </div>
    </div>
</div>
  )
}

export default EditMentorSkills