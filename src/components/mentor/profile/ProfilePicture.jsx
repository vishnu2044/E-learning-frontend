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
import MentorPfrofilecontext from '../../../context/mentor/profile/MentorProfileContext'

const ProfilePicture = () => {
  let {user, handleMentorLogout} = useContext(AuthContext)
  let {getMentorProfile} = useContext(MentorPfrofilecontext)
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
    getMentorProfile()
  }, [])

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