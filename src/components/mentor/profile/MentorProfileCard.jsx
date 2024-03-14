import React, { useContext, useEffect } from 'react';
import ProfilePicture from './ProfilePicture';
import MentorPfrofilecontext from '../../../context/mentor/profile/MentorProfileContext';
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";


const MentorProfileCard = () => {
    const { 
            getMentorProfile,
            mentorProfileData
                } = useContext(MentorPfrofilecontext)
    
    let {user, handleMentorLogout} = useContext(AuthContext)

  
    const navigate = useNavigate()
    
    useEffect(()=>{
        getMentorProfile()
    },[])

  return (
    <>
    <div
        class="sm:max-w-6xl max-w-5xl sm:mx-auto border border-gray-200 md:mx-auto lg:mx-auto xl:mx-auto mt-16 sm:mt-6 bg-white shadow-md rounded-lg text-gray-900">
        <ProfilePicture />

        <div class="flex justify-end text-center mt-2 pb-2">
            <div className='flex flex-col sm:flex-row justify-between w-full sm:w-3/5'>

              <div className="mb-2 sm:mb-0">
                <h2 class="font-semibold">{user ? `${user.first_name} ${user.last_name}`   : "username"}</h2>

                <p class="text-gray-500">{mentorProfileData?.profession ? mentorProfileData?.profession : "profession not added"}</p>
              </div>

              <div className='flex justify-between items-center sm:ml-3'>
                <p onClick={()=> navigate("/mentor/mentor-panel/edit-mentor-profile")} className='p-2 mx-2 my-1 sm:my-0 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>Edit Profile</p>
                <p onClick={()=>handleMentorLogout()} className='p-2 mx-2 my-1 sm:my-0 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>Logout</p>
              </div>

            </div>              
          </div>


        <div className='sm:flex mx-2 justify-center gap-3 mb-3'>
            
            <div class="flex justify-between text-left mt-2 border  border-gray-200 shadow-sm rounded-lg cursor-pointer sm:w-1/3 pb-2  m-2 p-3 ">
                <h2 class="font-semibold p-2">Blogs</h2>
                <div className='w-auto h-auto r p-2 text-center text-gray-500 '>1k </div>
            </div>


            <div class="flex justify-between text-left mt-2 border border-gray-200 shadow-sm rounded-lg cursor-pointer sm:w-1/3 pb-2  m-2 p-3 ">
                <h2 class="font-semibold p-2">Followers</h2>
                <div className='w-auto h-auto r p-2 text-center text-gray-500 '>1k </div>
            </div>
            

            <div class="flex justify-between text-left mt-2 border border-gray-200 shadow-sm rounded-lg cursor-pointer sm:w-1/3 pb-2  m-2 p-3 ">
                <h2 class="font-semibold p-2">Courses</h2>
                <div className='w-auto h-auto r p-2 text-center   text-gray-500 '>1k </div>
            </div>


        </div>
    </div>



    </>
  )
}

export default MentorProfileCard