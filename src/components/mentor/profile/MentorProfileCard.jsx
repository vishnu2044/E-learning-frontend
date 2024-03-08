import React, { useContext } from 'react';
import ProfilePicture from './ProfilePicture';
import MentorPfrofilecontext from '../../../context/mentor/profile/MentorProfileContext';

const MentorProfileCard = () => {
    const {userCheck} = useContext(MentorPfrofilecontext)

  return (
    <>
    <div
        class="sm:max-w-6xl max-w-5xl sm:mx-auto border border-gray-200 md:mx-auto lg:mx-auto xl:mx-auto mt-16 sm:mt-6 bg-white shadow-xl rounded-lg text-gray-900">
        <ProfilePicture />


        <div className='sm:flex mx-2 justify-center gap-3 mb-3'>
            
            <div class="flex justify-between text-left mt-2 border  border-gray-200 shadow-sm rounded-lg cursor-pointer sm:w-1/3 pb-2  m-2 p-3 ">
                <h2 class="font-semibold p-2">Blogs</h2>
                <div className='w-auto h-auto r p-2 text-center text-gray-500 '>1k </div>
            </div>
            {userCheck}

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

    <div
        class="sm:max-w-6xl max-w-5xl sm:mx-auto border border-gray-200 md:mx-auto lg:mx-auto xl:mx-auto mt-16 sm:mt-6 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="text-center mt-1 pb-3">
            <h2 class="font-semibold">Sarah Smith</h2>
            <p class="text-gray-500">Freelance Web Designer</p>
        </div>
    </div>

    </>
  )
}

export default MentorProfileCard