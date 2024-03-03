import React from 'react'
import MentorSignupForm from '../../../components/authentication/mentor/MentorSignupForm';
import { Link } from 'react-router-dom';

const MentorSignUp = () => {
  return (
<div class="py-10 ">
    <div class="flex h-full items-center justify-center ">
        <div
            class="rounded-lg border border-gray-300 w-full sm:w-5/12 shadow-lg bg-gray-100 flex h-full items-center justify-center sm:px-4">
            <div class="flex h-full flex-col justify-center gap-4 p-6 w-full">
                <div class="left-0 right-0 inline-block border-gray-200 px-2 py-1 sm:px-4 w-full">
                    <MentorSignupForm />
                    <div class="min-w-[270px]">
                        <div class="mt-2 text-center flex justify-center">
                            <p className='px-2 py-1'>Already have an account ?</p> 
                            <Link to='/mentor/mentor-login' class="px-2 bg-gray-100 border text-gray-900 font-medium p-1 rounded-md shadow-md mx-2 hover:text-blue-600">Login
                                here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MentorSignUp