import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthContext from '../../../context/AuthContext';

const MentorLoginForm = () => {
    const {handleMentorLogin} = useContext(AuthContext)
  return (
    <form  class="flex flex-col  gap-4 pb-2 w-full" onSubmit={handleMentorLogin} >
        <h1 class="mb-4 text-2xl font-bold text-gray-600 text-center">Mentor Login </h1>

    {/* First section 1 input in one line username section */}
        <div className='flex justify-between gap-3 w-full'>

            <div className='w-full'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-700"
                        >Username</label>
                </div>
                <div class="flex w-full rounded-lg">
                        <input
                            class="focus:outline-none flex w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                            id="username" type="text" name="username" placeholder="Enter Username"
                        />

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
            <div class="flex w-full rounded-lg pt-1 pb-4">
                <div class="relative w-full">
                        <input
                            className=' focus:outline-none flex w-full border  shadow-md bg-gray-50 border-gray-200 text-black p-2.5 text-sm rounded-lg'
                            id="password" type='password' name="password" placeholder="Enter your password"
                        />
                            

                </div>
            </div>
        </div>

        </div>

        <div class="flex flex-col">
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
  )
}

export default MentorLoginForm