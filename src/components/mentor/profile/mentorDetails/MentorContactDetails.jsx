import React, { useContext } from 'react'
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext';
import AuthContext from '../../../../context/AuthContext';

const MentorContactDetails = () => {
    let {mentorProfileData} = useContext(MentorPfrofilecontext)
    let {user} = useContext(AuthContext)
  return (
    <div class="p-6 mr-2 w-1/3 border-gray-300 border  sm:rounded-lg shadow-md">
    <h1 class="text-4xl sm:text-xl text-center text-gray-800 font-semiabold tracking-tight">
        Contact details
    </h1>
    <div class="flex items-center mt-4 ">
        <div className='text-xl text-green-500'>
            <IoCallSharp />
        </div>
        <div class="ml-4 text-md tracking-wide font-semibold w-40">
            {mentorProfileData?.contact_number ? mentorProfileData.contact_number : "Contact number not added"}
        </div>
    </div>
    <div class="flex items-center mt-4 ">
        <div className='text-xl text-blue-500'>
            <MdEmail />
        </div>
        <div class="ml-4 text-md tracking-wide font-semibold w-40">
            {user.email ? user?.email : "email not added"}
        </div>
    </div>
    <div class="flex items-center mt-4 ">
        <div className='text-xl text-red-400'>
            <FaMapLocationDot />
        </div>
        <div class="ml-4 text-md tracking-wide font-semibold w-40">
            {mentorProfileData?.place ? mentorProfileData?.place : "place not added"}
        </div>
    </div>

</div>
  )
}

export default MentorContactDetails