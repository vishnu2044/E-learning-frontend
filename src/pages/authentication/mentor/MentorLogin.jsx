import React from 'react'
import MentorLoginForm from '../../../components/authentication/mentor/MentorLoginForm'
import { Link } from 'react-router-dom'

const MentorLogin = () => {
  return (
    <div class="py-20 ">
        <div class="flex h-full items-center justify-center ">
            <div
                class="rounded-lg border border-gray-300 w-full sm:w-5/12 shadow-lg bg-gray-100 flex-col flex h-full items-center justify-center sm:px-4">
                <div class="flex h-full flex-col justify-center gap-4 p-6 w-full">
                    <div class="left-0 right-0 inline-block border-gray-200 px-2 py-1 sm:px-4 w-full">

                        <MentorLoginForm />
                        <div class="min-w-[270px] mt-4">
                            <div class="mt-2 text-center">New user?
                                <Link to='/mentor/mentor-signup' class=" px-2 bg-gray-100 border text-gray-900 font-medium p-1 rounded-md shadow-md mx-2 hover:text-blue-600" >Create account
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

export default MentorLogin