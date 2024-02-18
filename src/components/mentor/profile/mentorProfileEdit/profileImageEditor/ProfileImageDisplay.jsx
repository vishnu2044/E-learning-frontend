import React, { useState } from 'react'
import ProfileImageModel from './ProfileImageModel';

const ProfileImageDisplay = () => {
    const [profileImageCropTab, setProfileImageCropTab] = useState(false)
  return (
    <div className='sm:flex justify-between m-6'>
      <div className='max-w-80 max-h-80 text-center rounded-md mb-4 sm:mr-6'>
        <img className='rounded-2xl shadow-sm' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
        <p onClick={()=> setProfileImageCropTab(true)} className='p-2 cursor-pointer mx-12 m-2 shadow-md rounded-md border border-gray-200 bg-gray-50 '>Change profile photo</p>
      </div>
      {
        profileImageCropTab && <ProfileImageModel setProfileImageCropTab = {setProfileImageCropTab} />
      }
        
      <div className='max-w-80 max-h-80 text-center rounded-md mb-4 sm:ml-6'>
        <img className='rounded-2xl shadow-sm' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="" />
        <p className='p-2 cursor-pointer mx-12 m-2 shadow-md rounded-md border border-gray-200 bg-gray-50 '>Change cover photo</p>
      </div>
    </div>
    
  )
}

export default ProfileImageDisplay