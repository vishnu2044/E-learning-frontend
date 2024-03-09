import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import AboutMentor from './mentorDetails/AboutMentor';
import { FaMapLocationDot } from "react-icons/fa6";
import MentorContactDetails from './mentorDetails/MentorContactDetails';
import { IoMdCloseCircle } from "react-icons/io";
import MentorSkills from './mentorDetails/MentorSkills';


const MentorProfileDetails = () => {
  return (
    <div class="sm:max-w-6xl max-w-5xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 sm:mt-6  text-gray-900">
      {/* Contact details */}
      <AboutMentor />
      <div className=' flex justify-between'>
        <MentorContactDetails />
        <MentorSkills />

      </div>
    </div>
  )
}

export default MentorProfileDetails