import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../../../context/AuthContext'
import image from '../../../assets/logo/Screenshot_2024-02-04_161532-removebg-preview.png'
import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import UserImageContext from '../../../context/common/UserImages';
import { baseUrl } from '../../../configure/urls';

const SlideBar = () => {
    const [open, setOpen] = useState(true)
    let {user} = useContext(AuthContext)
    let {profileImg, getUserProfileImg} = useContext(UserImageContext)

    useEffect(()=>{
      if(!profileImg){
        getUserProfileImg()

      }

    }, [profileImg])
    const navigate = useNavigate()
  return (
    <div  className={`${open ? 'sm:w-56 w-20' : 'w-20'} p-5 pt-8 duration-300 h-screen bg-blue-200 relative rounded-sm `}>
      <img src={image} onClick={()=> setOpen(!open)} className={`relative cursor-pointer duration-500 rounded-full border border-blue-200 shadow-lg ${open ? 'w-2/6' : 'w-6/7'} `} />
      
        <div title={user.username} onClick={()=> navigate("mentor-profile")} className={`flex items-center bg-gray-100 cursor-pointer shadow-md mt-4 rounded-lg ${open && 'h-14  mb-8' }  px-3`}>
          { 
            open ?  (

          <div className={`cursor-pointer duration-300  shadow-lg`} >
            <img className=' w-10 h-10 rounded-full' src={profileImg ? `${baseUrl}/${profileImg.profile_img_url}`: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"} alt="" />

          </div>
            )
            : 
            <span className={ `cursor-pointer duration-300  shadow-lg`} > <FaUserAlt className='text-gray-600' /> </span>

          }
          <h1 className={`text-gray-500 origin-left mx-2 font-medium hidden sm:block text-xl duration-300 ${!open && 'scale-0'}`}>{user.username}</h1>
        </div>

      <div className= {` duration-300 h-1/2 relativ`}>

        
        <div className='flex gap-x-4 items-center bg-gray-100 cursor-pointer shadow-md mt-2 rounded-lg  p-1 px-3' onClick={()=> navigate("mentor-dashboard")} >
          <span className={`cursor-pointer duration-300  shadow-lg  `} > <IoHomeSharp className='text-gray-600' /> </span>
          <h1 className={`text-gray-500 origin-left font-medium hidden sm:block text-xl duration-300 ${!open && 'scale-0'}`}>Home</h1>
        </div>

        <div className='flex gap-x-4 items-center bg-gray-100 cursor-pointer shadow-md mt-2 rounded-lg  p-1 px-3'>
          <span className={`cursor-pointer duration-300  shadow-lg  `} > <HiUserGroup className='text-gray-600' /> </span>
          <h1 className={`text-gray-500 origin-left font-medium hidden sm:block text-xl duration-300 ${!open && 'scale-0'}`}>Feed</h1>
        </div>

        <div className='flex gap-x-4 items-center bg-gray-100 cursor-pointer shadow-md mt-2 rounded-lg  p-1 px-3'>
          <span className={`cursor-pointer duration-300  shadow-lg  `} > <MdOutlineCastForEducation className='text-gray-600' /> </span>
          <h1 className={`text-gray-500 origin-left font-medium hidden sm:block text-xl duration-300 ${!open && 'scale-0'}`}>Courses</h1>
        </div>

        <div className='flex gap-x-4 items-center bg-gray-100 cursor-pointer shadow-md mt-2 rounded-lg  p-1 px-3'>
          <span className={`cursor-pointer duration-300  shadow-lg  `} > <MdOutlineCastForEducation className='text-gray-600' /> </span>
          <h1 className={`text-gray-500 origin-left font-medium hidden sm:block text-xl duration-300 ${!open && 'scale-0'}`}>Payment</h1>
        </div>

      </div>
</div>
  )
}

export default SlideBar