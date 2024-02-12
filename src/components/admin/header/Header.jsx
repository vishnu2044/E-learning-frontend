import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

const Header = () => {
    let {user, handleAdminLogout} = useContext(AuthContext)
  return (
<header class="w-screen py-3 backdrop-blur-lg  md:top-6 lg:max-w-screen-lg">
    <div class="px-4 ">
        <div class="flex justify-between">
            <div class="flex shrink-0">

            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <Link to='adminHome' class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Home</Link>
                <Link to='site-management/management-nav' aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Site Management</Link>
                <Link to='department/teachers' class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Teachers</Link>
                <Link to='department/students' aria-current="page"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Students</Link>
            </div>
            <div class="flex items-center justify-end gap-3">
                
                <Link to='adminProfile' class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/login">{user ? user?.username : 'username'}</Link>
                {
                    user ? (<p onClick={handleAdminLogout} class="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#010001] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#010001f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >Logout</p>)
                    :
                    <p>user</p>
                }

            </div>
        </div>

    </div>

</header>
  )
}

export default Header