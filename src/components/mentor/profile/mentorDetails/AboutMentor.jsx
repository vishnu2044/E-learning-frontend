import React, { useContext } from 'react'
import MentorPfrofilecontext from '../../../../context/mentor/profile/MentorProfileContext';
import { FaGraduationCap } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";


const AboutMentor = () => {
    let {mentorProfileData} = useContext(MentorPfrofilecontext)
  return (


        <div class="p-6 w-full  mb-4  border  sm:rounded-lg shadow-md">

            <div className='flex justify-between '>
                <div className='sm:w-1/2 w-full h-auto mr-1 '>
                    <div className='mb-2 mx-2'>
                        <p>About you</p>

                    </div>
                    <div className='bg-white p-4 '>
                        <p className='font-normal'>
                            {mentorProfileData?.selfIntro ? mentorProfileData.selfIntro : ""}        

                        </p>

                    </div>
                    <div className='flex justify-start'>
                        <div className='text-2xl text-blue-500'>
                            <FaGraduationCap />
                        </div>
                        <div className='ml-3'>
                            <p>{mentorProfileData?.education ? mentorProfileData?.education : "Education not added "}</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <div className='text-2xl text-blue-500'>
                            <HiMiniBuildingOffice2 />
                        </div>
                        <div className='ml-3'>
                            <p>{mentorProfileData?.profession ? mentorProfileData?.profession : "Education not added "}</p>
                        </div>
                    </div>
                </div>

                <div className='sm:w-1/2 w-full h-auto ml-1 '>
                    <div className='mb-2 mx-2'>
                        <p>Experience</p>

                    </div>
                    <div className='bg-white p-4 border m-2 shadow-md rounded-md'>
                    <p>Teaching</p>

                        <p className='font-normal'>
                            {mentorProfileData?.teachingExperience ? mentorProfileData.teachingExperience : ""}        

                        </p>

                    </div>
                    <div className='bg-white p-4 border m-2 shadow-md rounded-md'>
                        <p>Industrial</p>
                        <p className='font-normal'>
                            {mentorProfileData?.industrialExperience ? mentorProfileData.industrialExperience : ""}        

                        </p>

                    </div>
                </div>

            </div>



        </div>

  )
}

export default AboutMentor