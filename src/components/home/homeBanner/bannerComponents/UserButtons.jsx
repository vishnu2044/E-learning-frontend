import React from 'react'

const UserButtons = () => {
  return (
    <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <div className='flex justify-center items-center gap-2'>

            <button type="submit" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group">
                Join as a Mentor</button>
            <button type="submit" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group">
                Join as a Student</button>
        </div>

    </div>
  )
}

export default UserButtons