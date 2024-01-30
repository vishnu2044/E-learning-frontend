import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthContext from '../../../context/AuthContext';

const MentorLoginForm = () => {
    const {handleMentorLogin} = useContext(AuthContext)
  return (
    <form  class="flex flex-col  gap-4 pb-2 w-full" onSubmit={handleMentorLogin} >
        <h1 class="mb-4 text-2xl font-bold text-center">Mentor Login </h1>

    {/* First section 1 input in one line username section */}
        <div className='flex justify-between gap-3 w-full'>

            <div className='w-full'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-950 dark:text-gray-600"
                        >Username</label>
                </div>
                <div class="flex w-full rounded-lg pt-1">
                    <div class="relative w-full">
                        <input
                            class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500   p-2.5 text-sm rounded-lg"
                            id="username" type="text" name="username" placeholder="Enter Username"
                            />
                    </div>
                </div>
            </div>


        </div>


    {/* Fourth section 1 input in one line */}
    <div className='flex justify-between gap-3 w-full'>



        <div className='w-full'>
            <div class="mb-2">
                <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                    for="email">Password</label>
            </div>
            <div class="flex w-full rounded-lg pt-1">
                <div class="relative w-full">
                    <div className='justify-between flex w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500   p-2.5 text-sm rounded-lg'>
                        <input
                            className='border-none focus:outline-none'
                            id="password2"  name="password2" placeholder="Enter your password"
                            />

                            <p  className='cursor-pointer mt-1'></p>
                    </div>
                </div>
            </div>
        </div>

        </div>

        <div class="flex flex-col gap-2">
            <button type="submit"
                class="border transition-colors  focus:ring-2 p-0.5  disabled:cursor-not-allowed border-transparent bg-[#7F5DF6] hover:bg-[#694cd2] active:bg-sky-800 text-white  rounded-lg ">
                <span
                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                    Create Account
                </span>
            </button>

            <div className='flex justify-center'>
                <button type="button"
                    class="transition-colors  focus:ring-2 p-0.5 mr-2 disabled:cursor-not-allowed bg-white  text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                    <span
                        class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                            <FcGoogle />
                            Login with google
                    </span>
                </button>
                <button type="button"
                    class="transition-colors focus:ring-2 py-0.5 ml-2 disabled:cursor-not-allowed bg-white  text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                    <span
                        class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                            <FaGithub />
                            Login with GitHub
                    </span>
                </button>


            </div>

        </div>
    </form>
  )
}

export default MentorLoginForm