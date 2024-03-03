import React, { useContext, useEffect, useState } from 'react';
import CommonUserDetailsContext from '../../../../context/common/CommonDetails';
import MentorAuthcontext from '../../../../context/mentor/authentication/MentorAuthentication';
import { IoMdCloseCircle } from "react-icons/io";


const EditProfileComponent = () => {
  const {
    educationList, 
    professions,

    getEducationList, 
    getProfessionList, 
  } = useContext(CommonUserDetailsContext)
  const {
    skills,
    newSkill,

    handleAddSkill,
    handleRemoveSkill,
    handleKeyDown,
    setNewSkill,
    editMentorProfile
  } = useContext(MentorAuthcontext)

  const [indExpCount, setIndExpCount] = useState(300)
  const [TeachExpCount, setTeachExpCount] = useState(300)
  const [introductionCount, setIntroductionCount] = useState(1500)

  const handelIntroductionCount = (e) =>{
    const textCount = e.target.value.length
    const remCount = 1500 - textCount
    setIntroductionCount(remCount)
  }

  const handleTeachingExpLength = (e) =>{
    const textCount = e.target.value.length
    const remCount = 300 - textCount
    setTeachExpCount(remCount)

  }
 
  const handleIndustrialExpLength = (e) =>{
    const textCount = e.target.value.length
    const remainingCount = 300 - textCount
    setIndExpCount(remainingCount)
    
  }




  useEffect(()=>{
    getEducationList()
    getProfessionList()
  }, [])
  return (
  <div className='sm:max-w-6xl p-3 max-w-5xl mx-auto mt-16 sm:mt-6 border border-gray-300 bg-white shadow-xl rounded-lg text-gray-900'>
    <p className="text-left px-4 text-xl  mb-4 font-medium text-gray-700">Edit your profile</p>

    <form onSubmit={editMentorProfile} className="px-4">

      <div className=' mx-3 font-normal mb-4'>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

          <div className="mb-2 mx-2 w-full sm:w-1/3 ">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Username:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="username" 
              placeholder="Enter your username"  />
          </div>
          
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Email:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="email" 
              id="name" 
              placeholder="Enter your email"  />
          </div>

          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">First Name:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="firstname" 
              id="name" 
              placeholder="Enter your first name"  />
          </div>
        </div>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Last Name:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="lastname" 
              id="name" 
              placeholder="Enter your last name" 

               />
          </div>
          
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Profession:</label>
            <select
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50 text-gray-900 p-2.5 text-sm rounded-md"
              name="profession"
            >
              <option value="">Select your Profession</option>
              {
                professions ? professions.map((profession, index) => (
                  <option key={index} value={profession.profession}>{profession.profession}</option>
                )) : <option value="">No profession options available</option>
              }
            </select>
          </div>
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700"> Education:</label>
            <select
              className="focus:outline-none flex w-full border border-gray-300 my-2 shadow-md bg-gray-50 text-gray-900 p-2.5 text-sm rounded-md"
              name="education"

            >
              <option value="">Select your education</option>
              {
                educationList ? educationList.map((edu, index) => (
                  <option key={edu.education} value={edu.education}>{edu.education}</option>
                )) : <option value="">No education options available</option>
              }
            </select>

          </div>
        </div>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Contact Number:</label>
            <input 
              className="focus:outline-none  flex w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="tel" 
              name="contactNumber" 
              id="name" 
              placeholder="Enter your contact number" 

           />
          </div>

          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Industrial Experience:</label>

            <div className={`flex justify-between w-full border  border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md`}>
              
              <input 
                className={`focus:outline-none w-5/6 `} 
                type="text" 
                name="industrialExperience" 
                onChange={handleIndustrialExpLength}
                id="name" 
                placeholder="Tell us about your industrial experience" 
                
            />
            <p className={`${indExpCount < 0? 'text-red-600' : 'text-black'}`}>{indExpCount}</p>
            </div>
            <p className={` text-red-600 ${indExpCount < 0 ? 'block' : 'hidden'}`}>the text limit is 300</p>

          </div>

          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Teaching Experience:</label>
            <div className='flex justify-between w-full border  border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md'>
              <input 
                className="focus:outline-none w-5/6 "
                type="text" 
                name="teachingExperience" 
                onChange={handleTeachingExpLength}
                id="name" 
                placeholder="Tell us about your Teaching experience" 

            />
            <p className={`${TeachExpCount < 0? 'text-red-600' : 'text-black'}`}>{TeachExpCount}</p>

            </div>
            <p className={` text-red-600 ${TeachExpCount < 0 ? 'block' : 'hidden'}`}>the text limit is 300</p>
          </div>
          
        </div>

        <div className='w-full px-2 mb-4 sm:mb-0'>

          <div className="mb-2 px-2 w-full">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Intorduction about you:</label>
            <div className='flex justify-between w-full border border-gray-300 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md'>
              <input 
                className="focus:outline-none w-11/12"
                type="text" 
                name="mentorIntro" 
                id="name" 
                placeholder="Tell us about your self" 
                onChange={handelIntroductionCount}
              />
              <p className={`${introductionCount < 0 ? 'text-red-600' : 'text-black'}`} >{introductionCount}</p>

            </div>
            <p className={` text-red-600 ${introductionCount < 0 ? 'block' : 'hidden'}`}>the text limit is 1500</p>

          </div>

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
                    <div className='flex justify-between w-full border  border-gray-300 my-2 shadow-md bg-gray-50 text-gray-900 py-2.5 text-sm rounded-md'>
                      <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type a skill...  (press enter to add new )"
                          className="focus:outline-none w-1/2"
                      />
                      <button type="button" onClick={handleAddSkill} className="bg-gray-500 text-white px-4 py-2 rounded-md mx-2">Add</button>
                    </div>
                </div>
            </div>

      </div>
      <div className='flex justify-between mx-3 gap-3 mb-4'>
        <button type='submit' className="transition-colors text-white shadow-md bg-gray-950 py-2  cursor-pointer px-4 sm:mx-18 mx-2 mt-6  border border-gray-200 font-semibold w-full rounded">
          Update</button>
        <button className="transition-colors text-white shadow-md bg-gray-950 py-2  cursor-pointer px-4 sm:mx-18 mx-2 mt-6  border border-gray-200 font-semibold w-full rounded">
          Back</button>
      </div>



    </form>

</div>

  )
}

export default EditProfileComponent