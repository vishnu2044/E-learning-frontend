import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AdminLogin = () => {
    let {handleAdminLogin} = useContext(AuthContext)
  return (
<div class="py-20">
    <div class="flex h-full items-center justify-center ">
        <div
            class="rounded-lg border  border-gray-300 w-4/12 shadow-lg bg-gray-100 flex-col flex h-full items-center justify-center sm:px-4">

                <div class="left-0 right-0 inline-block mt-4 border-gray-200 px-2 py-1 sm:px-4 w-10/12">
                    <form onSubmit={handleAdminLogin} class="flex flex-col gap-4 pb-4" data-hs-cf-bound="true">
                        <h1 class="mb-4 text-2xl text-gray-600 font-bold text-center">Admin Login</h1>
                        <>
                            <div>
                                <label class="text-sm font-medium text-gray-700"
                                    for="email">Username</label>
                            </div>
                            <div class="flex w-full rounded-lg">
                                <div class="relative  w-full">
                                    <input
                                        class="flex w-full focus:outline-none border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                                        id="username" type="text" name="username" placeholder="Enter Username"
                                         />
                                </div>
                            </div>
                        </>
                        <>
                            <div >
                                <label class="text-sm font-medium text-gray-700"
                                    data-testid="flowbite-label" for="password">Password</label>
                            </div>
                            <div class="flex w-full rounded-lg ">
                                <div class="relative w-full"><input
                                        class="flex w-full border focus:outline-none shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                                        id="password" type="password" placeholder='Enter your password' name="password" required="" />
                                </div>
                            </div>
                            <p class="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                        </>
                        <div class="flex flex-col mb-4">
                            <button type="submit"
                                class="border transition-colors text-white rounded-lg shadow-md bg-gray-950 py-2 ">
                                <span
                                    class="flex items-center justify-center gap-1 font-medium py-1  text-base false">
                                    Login
                                </span>
                            </button>

                            <div className='flex justify-center mt-6'>
                                <button type="button"
                                    class="py-1 mr-2 shadow-md bg-white text-gray-900 border border-gray-200 rounded-lg">
                                    <span
                                        class=" flex items-center justify-center font-medium py-1 px-2.5 text-base false">
                                            <FcGoogle />
                                            Login with google
                                    </span>
                                </button>
                                <button type="button"
                                    class="py-1 ml-2 shadow-md bg-white text-gray-900 border border-gray-200 rounded-lg">
                                    <span
                                        class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                            <FaGithub />
                                            Login with GitHub
                                    </span>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


  )
}

export default AdminLogin