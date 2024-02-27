import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import UserImageContext from '../../../context/common/UserImages'
import { baseUrl } from '../../../configure/urls'
import ProfileImageModel from '../../userImageUpload/profileImageEditor/ProfileImageModel'
import { MdModeEditOutline } from "react-icons/md";
import CoverImageModel from '../../userImageUpload/coverImageEditor/CoverImageModel'
import userimg from '../../../assets/Images/user.png';
import coverImage from '../../../assets/Images/noCoverImg.png'

const ProfilePicture = () => {
  let {user, handleMentorLogout} = useContext(AuthContext)
  let {
      profileImg, 
      getUserProfileImg,

      coverImg,
      getCoverImg,
        } = useContext(UserImageContext)

  const [profileImageCropTab, setProfileImageCropTab] = useState(false)
  const [CoverImageModelTab, setCoverImageModelTab] = useState(false)
  const navigate = useNavigate()


  useEffect(()=>{
    if (!profileImg){
      getUserProfileImg()

    }
  }, [profileImg])

  useEffect(()=>{
    if (!coverImg){
      getCoverImg()

    }
  }, [coverImg])
  return (
    <>
      <div>
        <div class="relative rounded-t-lg h-80 overflow-hidden object-left border  ">
          <img class="object-cover h-40 sm:h-96 overflow-scroll object-top  w-full " src={coverImg ? `${baseUrl}/${coverImg.cover_img_url}` : coverImage } alt='Mountain' />
          <button
            onClick={()=> setCoverImageModelTab(true)}
            class="absolute top-36 sm:top-72 right-2 -translate-y-1/2 z-10  bg-gray-900 bg-opacity-70 text-white font-bold px-1 py-1 rounded-full"
            style={{ transform: 'translate(-50%, -50%)' }}>
            <MdModeEditOutline />
          </button>
        </div>

          <div class="w-48 h-48 relative border-2 border-white rounded-full shadow-xl overflow-hidden justify-start sm:ml-8 mx-auto max-w-screen-sm sm:-mt-28 -mt-72">
              <img class="object-cover object-center h-48 w-full" 

                  src={profileImg ? `${baseUrl}/${profileImg.profile_img_url}` : userimg }  
                  alt='Woman looking front' /> 
                  <button
                    title = {profileImg ? 'Change Image' : 'Add Image' } 
                    onClick={()=> setProfileImageCropTab(true)}
                    class="absolute top-32 right-3 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 text-white font-bold px-1 py-1 rounded-full">
                      <MdModeEditOutline />
                  </button>
          </div>
          
          <div class="flex justify-end text-center mt-2 pb-2">
            <div className='flex flex-col sm:flex-row justify-between w-full sm:w-3/5'>

              <div className="mb-2 sm:mb-0">
                <h2 class="font-semibold">{user ? user.username : "username"}</h2>
                <p class="text-gray-500">Freelance Web Designer</p>
              </div>

              <div className='flex justify-between items-center sm:ml-3'>
                <p onClick={()=> navigate("/mentor/mentor-panel/edit-mentor-profile")} className='p-2 mx-2 my-1 sm:my-0 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>Edit Profile</p>
                <p onClick={()=>handleMentorLogout()} className='p-2 mx-2 my-1 sm:my-0 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white'>Logout</p>
              </div>

            </div>              
          </div>


      </div>
      {
          profileImageCropTab && <ProfileImageModel 
                                    setProfileImageCropTab = {setProfileImageCropTab}                 
                                  />
        }
      {
        CoverImageModelTab && <CoverImageModel setCoverImageModelTab={setCoverImageModelTab} />
      }
    
    </>
  )
}

export default ProfilePicture