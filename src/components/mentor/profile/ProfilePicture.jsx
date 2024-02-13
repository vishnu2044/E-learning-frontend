import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProfilePicture = () => {
  let {user, handleMentorLogout} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <div>
        <div class="rounded-t-lg h-60 overflow-hidden object-left ">
            <img class="object-cover h-72 overflow-scroll object-top w-full hidden sm:block" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
        </div>
        <div class="w-48 h-48 relative border-2 border-white rounded-full shadow-xl overflow-hidden justify-start sm:ml-8 mx-auto max-w-screen-sm sm:-mt-28 -mt-72">
            <img class="object-cover object-center h-48 w-full" 
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' 
                alt='Woman looking front' /> 
        </div>
        <div class=" flex justify-end text-center mt-2 pb-2">
          <div className='flex justify-between w-3/5'>

            <div>
              <h2 class="font-semibold">{user ? user.username : "username"}</h2>
              <p class="text-gray-500">Freelance Web Designer</p>
            </div>
            <div className='h-auto align-center p-3 px-6 flex'>
              <p onClick={()=> navigate("/mentor-panel/edit-mentor-profile")} className='p-2 mx-2 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md'>Edit Profile</p>
              <p onClick={()=>handleMentorLogout()} className='p-2 mx-2 bg-gray-50 cursor-pointer border border-gray-200 shadow-sm rounded-md'>Logout</p>
              
            </div>

          </div>
            
        </div>

    </div>
  )
}

export default ProfilePicture