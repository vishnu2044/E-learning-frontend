import React, { useContext, useState } from 'react'
import Authcontext from '../../context/AuthContext'
import SlideBar from '../../components/mentor/slideBar/SlideBar';
import { Outlet } from 'react-router-dom';


const MentorPanel = () => {

  let {user} = useContext(Authcontext)

  return (
    <div className='flex fixed text-lg top-0 left-0 right-0 bottom-0 overflow-x-hidden'>
      <SlideBar />
      <div className=' text-base sm:px-1 px-3 font-semibold flex-grow overflow-y-auto '>
        <Outlet />


      </div>
    </div>
  )
}

export default MentorPanel