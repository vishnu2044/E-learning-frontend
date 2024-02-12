import React from 'react'
import MentorLoginForm from '../../../components/authentication/mentor/MentorLoginForm'
import { Link } from 'react-router-dom'

const MentorLogin = () => {
  return (
    <div class="py-20 ">
        <div class="flex h-full items-center justify-center ">
            <div
                class="rounded-lg border border-gray-200 w-4/12 bg-white shadow-lg  dark:bg-[#EFF1F8] flex-col flex h-full items-center justify-center sm:px-4">
                <div class="flex h-full flex-col justify-center gap-4 p-6 w-full">
                    <div class="left-0 right-0 inline-block border-gray-200 px-2 py-1 sm:px-4 w-full">

                        <MentorLoginForm />
                        <div class="min-w-[270px]">
                            <div class="mt-2 text-center">New user?
                                <Link to='/mentor-signup' class="text-blue-500 px-2 hover:text-blue-600" >Create account
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