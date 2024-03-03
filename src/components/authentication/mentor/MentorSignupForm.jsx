import React, { useContext, useState } from 'react'
import MentorAuthcontext from '../../../context/mentor/authentication/MentorAuthentication'
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const MentorSignupForm = () => {
    let [pass1Visible, setPass1Visible] = useState("hide")
    let [pass2Visible, setPass2Visible] = useState("hide")

    const pass1VisibleChange = () =>{
        if (pass1Visible == "hide"){
            setPass1Visible('show')
        }else{
            setPass1Visible("hide")
        }
    }

    const pass2VisibleChange = () =>{
        if (pass2Visible == "hide"){
            setPass2Visible('show')
        }else{
            setPass2Visible("hide")
        }
    }

    let {sigupMentor} = useContext(MentorAuthcontext)
  return (
    <form  class="flex flex-col  gap-2 pb-2 w-full" onSubmit={sigupMentor}>
        <h1 class="mb-4 text-2xl font-bold text-center">Mentor Sign Up</h1>

    {/* First section 1 input in one line username section */}
        <div className='flex justify-between gap-3 w-full'>

            <div className='w-full'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-700"
                        >Username</label>
                </div>
                <div class="flex w-full rounded-lg pt-1">

                        <input
                            class="focus:outline-none flex w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                            id="username" type="text" name="username" placeholder="Enter Username"
                            />
 
                </div>
            </div>


        </div>
    
    {/* Second section 2 inputs in one line Full name */}
        <div className='flex flex-col sm:flex-row justify-between gap-3 w-full'>


            <div className='w-full sm:w-1/2'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-700"
                        for="email">First Name</label>
                </div>
                <div class="flex w-full rounded-lg pt-1">

                        <input
                            class="focus:outline-none flex w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                            id="firstname" type="text" name="firstname" placeholder="Enter First Name"
                            />

                </div>
            </div>

            <div className='w-full sm:w-1/2'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                        for="email">Last Name</label>
                </div>
                <div class="flex w-full rounded-lg pt-1">

                        <input
                            class="focus:outline-none flex w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                            id="lastname" type="text" name="lastname" placeholder="Enter Last Name"
                            />

                </div>
            </div>

        </div>
        
    {/* Third section 2 inputs in one line email */}
        <div className='flex gap-3 w-full'>
            <div className='w-full'>
                <div class="mb-2">
                    <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                        for="email">Email</label>
                </div>
                <div class="flex w-full rounded-lg pt-1">
                    <div class="relative w-full">
                        <input
                            class="focus:outline-none flex w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg"
                            id="email" type="text" name="email" placeholder="Enter your email"
                        />
                    </div>
                </div>
            </div>

  
        </div>

    {/* Fourth section 1 input in one line */}
    <div className='flex justify-between gap-3 w-full'>

        <div className='w-1/2'>
            <div class="mb-2">
                <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                    for="email">Password</label>
            </div>
            <div class="flex w-full rounded-lg pt-1">
                <div class="relative w-full">
                    <div className='focus:outline-none flex justify-between w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg'>
                        <input
                            className='border-none focus:outline-none'
                            id="password1" type={pass1Visible === 'show' ? "text" : "password" } name="password1" placeholder="Enter password"
                            />

                        <p onClick={pass1VisibleChange} className='cursor-pointer mt-1'>{pass1Visible === 'show' ? <PiEyeBold /> : <PiEyeClosedBold />}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-1/2'>
            <div class="mb-2">
                <label class="text-sm font-medium text-gray-900 dark:text-gray-600"
                    for="email">Confirm Password</label>
            </div>
            <div class="flex w-full rounded-lg pt-1">
                <div class="relative w-full">
                    <div className='focus:outline-none flex justify-between w-full border shadow-md bg-gray-50 border-gray-200 text-gray-900 p-2.5 text-sm rounded-lg'>
                        <input
                            className='border-none focus:outline-none'
                            id="password2" type={pass2Visible === 'show' ? "text" : "password" } name="password2" placeholder="Confirm password"
                            />

                            <p onClick={pass2VisibleChange} className='cursor-pointer mt-1'>{pass2Visible === 'show' ? <PiEyeBold /> : <PiEyeClosedBold />}</p>
                    </div>
                </div>
            </div>
        </div>

        </div>

        <div class="flex flex-col gap-2">
            <button type="submit"
                class="border transition-colors text-white rounded-lg shadow-md bg-gray-950 py-2 ">
                <span
                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                    Create Account
                </span>
            </button>


        </div>
    </form>
  )
}

export default MentorSignupForm