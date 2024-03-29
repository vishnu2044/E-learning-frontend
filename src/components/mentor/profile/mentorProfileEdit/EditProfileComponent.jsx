import React, { useContext, useEffect, useState } from 'react';
import CommonUserDetailsContext from '../../../../context/common/CommonDetails';
import MentorAuthcontext from '../../../../context/mentor/authentication/MentorAuthentication';
import AuthContext from '../../../../context/AuthContext';
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext';



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
    
    mentorProfileData,
    getMentorProfile,

    handleAddSkill,
    handleRemoveSkill,
    handleKeyDown,
    setNewSkill,
    editMentorProfile
  } = useContext(MentorPfrofilecontext)

  const [indExpCount, setIndExpCount] = useState(300)
  const [TeachExpCount, setTeachExpCount] = useState(300)
  const [introductionCount, setIntroductionCount] = useState(1500)
  const { authToken, user } = useContext(AuthContext)

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
    getMentorProfile()
  }, [])
  return (
  <div className='sm:max-w-6xl p-3 max-w-5xl mx-auto mt-16 sm:mt-6 border border-gray-300 bg-white shadow-xl rounded-lg text-gray-900'>
    <p className="text-left px-4 text-xl  mb-4 font-medium text-gray-700">Edit your profile</p>

    <form onSubmit={editMentorProfile} className="px-4">

      <div className=' mx-3 font-normal mb-4'>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>
{/* input for username */}
          <div className="mb-2 mx-2 w-full sm:w-1/3 ">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Username:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="username" 
              placeholder= {user?.username ? user.username : "Enter your username"}  
              defaultValue= {user?.username ? user.username : "Enter your username"}  
              />
          </div>
{/* input for email           */}
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Email:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="email" 
              name="email" 
              id="name" 
              placeholder={user?.email ? user.email : "Enter your Email"}
              defaultValue={user?.email ? user.email : "Enter your Email"}
                />
          </div>

{/* input for first name   */}
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">First Name:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="firstname" 
              id="firstname" 
              placeholder={user?.first_name ? user?.first_name : "Enter your first name"}  
              defaultValue={user?.first_name ? user?.first_name : ""}  
              />
          </div>

        </div>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

{/* input for lase name   */}
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Last Name:</label>
            <input 
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="text" 
              name="lastname" 
              id="lastname" 
              placeholder={user?.last_name ? user.last_name : "Enter your last name"} 
              defaultValue={user?.last_name ?  user?.last_name : "" } 

               />
          </div>
          
{/* input for profession   */}  
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Profession:</label>
            <select
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50 text-gray-900 p-2.5 text-sm rounded-md"
              name="profession"
            >
              <option value={mentorProfileData?.profession ? mentorProfileData?.profession : ""}>{mentorProfileData?.profession ? mentorProfileData.profession : 'Select your Profession'}</option>
              {
                professions ? professions.map((profession, index) => (
                  <option key={index} value={profession.profession}>{profession.profession}</option>
                )) : <option value="">No profession options available</option>
              }
            </select>
          </div>

{/* input for education   */}
          <div className="mb-2 mx-2 w-full sm:w-1/3">
            <label htmlFor="name" className="text-sm font-medium text-gray-700"> Education:</label>
            <select
              className="focus:outline-none flex w-full border border-gray-400 my-2 shadow-md bg-gray-50 text-gray-900 p-2.5 text-sm rounded-md"
              name="education"

            >
              <option value={mentorProfileData?.education ? mentorProfileData?.education : ""}>{mentorProfileData?.education ? mentorProfileData.education : 'Select your education'}</option>
              {
                educationList ? educationList.map((edu, index) => (
                  <option key={edu.education} value={edu.education}>{edu.education}</option>
                )) : <option value="">No education options available</option>
              }
            </select>

          </div>

        </div>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

{/* input for contact number   */}
          <div className="mb-2 mx-2 w-full sm:w-1/2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Contact Number:</label>
            <input 
              className="focus:outline-none  flex w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
              type="tel" 
              name="contactNumber" 
              id="name" 
              placeholder={mentorProfileData?.contact_number ? mentorProfileData?.contact_number :"Enter your contact number"} 
              defaultValue={mentorProfileData?.contact_number ? mentorProfileData?.contact_number :""} 

           />
          </div>

{/* input of place */}
          <div className="mb-2 mx-2 w-full sm:w-1/2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Place:</label>
              <input 
                className="focus:outline-none w-full flex justify-between border  border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md"
                type="text" 
                name="place" 
                id="place" 
                placeholder={mentorProfileData?.place ? mentorProfileData?.place :"Enter your place"} 
                defaultValue={mentorProfileData?.place ? mentorProfileData?.place :""} 
            />
          </div>
          
        </div>

        <div className='w-full sm:flex justify-between  px-2 mb-4 sm:mb-0'>

{/* input for industrial experience  */}
          <div className="mb-2 mx-2 w-full sm:w-1/2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Industrial Experience:</label>

            <div className={`flex justify-between w-full border  border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md`}>
              
              <input 
                className={`focus:outline-none w-5/6 `} 
                type="text" 
                name="industrialExperience" 
                onChange={handleIndustrialExpLength}
                id="name" 
                defaultValue={mentorProfileData?.industrialExperience ? mentorProfileData?.industrialExperience :""} 
                placeholder={mentorProfileData?.industrialExperience ? mentorProfileData?.industrialExperience :"Tell us about your industrial experience"} 
                
            />
            <p className={`${indExpCount < 0? 'text-red-600' : 'text-black'}`}>{indExpCount}</p>
            </div>
            <p className={` text-red-600 ${indExpCount < 0 ? 'block' : 'hidden'}`}>the text limit is 300</p>

          </div>

{/* input for teaching experience   */}
          <div className="mb-2 mx-2 w-full sm:w-1/2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Teaching Experience:</label>
            <div className='flex justify-between w-full border  border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md'>
              <input 
                className="focus:outline-none w-5/6 "
                type="text" 
                name="teachingExperience" 
                onChange={handleTeachingExpLength}
                id="name" 
                placeholder={mentorProfileData?.teachingExperience ? mentorProfileData?.teachingExperience :"Tell us about your Teaching experience"} 
                defaultValue={mentorProfileData?.teachingExperience ? mentorProfileData?.teachingExperience :""} 

            />
            <p className={`${TeachExpCount < 0? 'text-red-600' : 'text-black'}`}>{TeachExpCount}</p>

            </div>
            <p className={` text-red-600 ${TeachExpCount < 0 ? 'block' : 'hidden'}`}>the text limit is 300</p>
          </div>
          
        </div>

        <div className='w-full px-2 mb-4 sm:mb-0'>

{/* input for your self introduction  */}
          <div className="mb-2 px-2 w-full">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Intorduction about you:</label>
            <div className='flex justify-between w-full border border-gray-400 my-2 shadow-md bg-gray-50  text-gray-900 p-2.5 text-sm rounded-md'>
              <input 
                className="focus:outline-none w-11/12"
                type="text" 
                name="mentorIntro" 
                id="selfIntro" 
                placeholder={mentorProfileData?.selfIntro  ? mentorProfileData?.selfIntro   :"Tell us about your self"}
                defaultValue={mentorProfileData?.selfIntro   ? mentorProfileData?.selfIntro  :""}
                onChange={handelIntroductionCount}
              />
              <p className={`${introductionCount < 0 ? 'text-red-600' : 'text-black'}`} >{introductionCount}</p>

            </div>
            <p className={` text-red-600 ${introductionCount < 0 ? 'block' : 'hidden'}`}>the text limit is 1500</p>

          </div>

        </div>

{/* input for skills list  */}


      </div>


      <div className='flex justify-between mx-3 gap-3 mb-4'>
        <button type="submit" className="transition-colors text-white shadow-md bg-gray-950 py-2  cursor-pointer px-4 sm:mx-18 mx-2 mt-6  border border-gray-200 font-semibold w-full rounded">
          Update</button>
        <button className="transition-colors text-white shadow-md bg-gray-950 py-2  cursor-pointer px-4 sm:mx-18 mx-2 mt-6  border border-gray-200 font-semibold w-full rounded">
          Back</button>
      </div>



    </form>
</div>

  )
}

export default EditProfileComponent