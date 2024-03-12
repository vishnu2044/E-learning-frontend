import React, { useContext, useEffect, useState } from 'react';
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import AboutMentor from './mentorDetails/AboutMentor';
import { FaMapLocationDot } from "react-icons/fa6";
import MentorContactDetails from './mentorDetails/MentorContactDetails';
import { IoMdCloseCircle } from "react-icons/io";
import MentorSkills from './mentorDetails/MentorSkills';
import EditMentorSkills from './mentorDetails/EditMentorSkills';
import MentorPfrofilecontext from '../../../context/mentor/profile/MentorProfileContext';
import { RemoveMentorSkills } from './mentorDetails/RemoveMentorSkills';


const MentorProfileDetails = () => {
  const [displayEditSkills, setDisplayEditSkills] = useState(false)
  const [displaySkillsRemove, setDisplaySkillsRemove] = useState(true)
  let {getSkills} = useContext(MentorPfrofilecontext)

  const handleDisplayEditSkill = () =>{
    console.log("its workingg");
    if (displayEditSkills){
      setDisplayEditSkills(false)
    }else{
      setDisplayEditSkills(true)
    }
  }

  useEffect(()=>{
    getSkills()
  }, [])
  return (
    <div class="sm:max-w-6xl max-w-5xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 sm:mt-6  text-gray-900">
      <AboutMentor />
      <div className=' flex justify-between'>
        <MentorContactDetails />
        <MentorSkills handleDisplayEditSkill = {handleDisplayEditSkill} />
        {
          displayEditSkills && <EditMentorSkills handleDisplayEditSkill = {handleDisplayEditSkill} />
        }
        {
          displaySkillsRemove && <RemoveMentorSkills />
        }
        
      </div>
    </div>
  )
}

export default MentorProfileDetails