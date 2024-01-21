import React, {useState, useContext, useEffect} from 'react'
import AuthContext from '../../../context/AuthContext'
import AdminProfileContext from '../../../context/admin/AdminProfileContext'

const ProfileCard = (
    {
        setCurrentComponent
    }
) => {
    let {user} = useContext(AuthContext)
    let {profileImage, getAdminProfilePic} = useContext(AdminProfileContext)

    useEffect (()=>{
      getAdminProfilePic()
    }, [])
  return (
    <div className="font-sans antialiased pt-12 leading-normal tracking-wider bg-cover" >
      <div className="max-w-3xl rounded-lg  flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0 bg-white lg:border border-solid lg:shadow-2xl justify-between">
        {/* Main Col */}
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none   opacity-85 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url('${profileImage ? profileImage : "https://source.unsplash.com/MP0IUfwrn0A"}')` }}></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user?.username ? user.username : 'username' }</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              {user?.first_name ? `${user?.first_name} ${user?.last_name}` : `full name` }
            </p>

            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            {user?.email ? `${user?.email}` : `email` }
            </p>

          <div className='flex justify-between p-3 mt-4'>
            <button onClick={() => setCurrentComponent('editProfile')} className='bg-black py-2 px-4 shadow-lg text-white rounded-lg '>Edit profile</button>
            <button className='bg-black py-2 px-4 shadow-lg text-white rounded-lg '>Change Password</button>
          </div>
          </div>
        </div>
        {/* Img Col */}
        {/* Pin to top right corner */}
        <div className="w-full lg:w-2/5">
        <img
          src={profileImage ? profileImage : "https://source.unsplash.com/MP0IUfwrn0A"}
          className="w-full h-80 object-cover object-center bord cursor-pointer  lg:rounded-tr-lg lg:rounded-br-lg shadow-2xl hidden lg:block"
          alt="profile"
        />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard