import React from 'react'
import MentorSignupForm from '../../../components/authentication/mentor/MentorSignupForm'

const MentorSignUp = () => {
  return (
<div class="py-20 ">
    <div class="flex h-full items-center justify-center ">
        <div
            class="rounded-lg border border-gray-200 w-3/6 bg-white shadow-lg  dark:bg-[#EFF1F8] flex-col flex h-full items-center justify-center sm:px-4">
            <div class="flex h-full flex-col justify-center gap-4 p-6 w-full">
                <div class="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4 w-full">
                    <MentorSignupForm />
                    <div class="min-w-[270px]">
                        <div class="mt-4 text-center">New user?
                            <a class="text-blue-500 px-2 hover:text-blue-600" href="/signup">Create account
                                here</a>
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