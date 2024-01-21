import React from 'react'
import Header from '../../components/admin/header/Header'
import { Outlet } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div className='bg-gray-200 pt-4 pr-4 '>
      <div className=' pt-16'>
        <div className='fixed top-0 w-full h-20 rounded-tr-2xl flex justify-end'>
          <Header />
        </div>
          <div className='bg-white h-auto  rounded-tr-2xl pt-2 pr-2 '>
            <Outlet />

          </div>

      </div>

    </div>
  )
}

export default AdminPanel