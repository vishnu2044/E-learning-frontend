import React from 'react'

const MentorSkills = () => {
  return (
    <div class="p-6 ml-2 w-2/3 border-gray-300 border  sm:rounded-lg shadow-md">
    <div class="text-4xl sm:text-xl flex justify-between text-gray-800 font-semiabold tracking-tight">              
      <p>Skills</p>
      <p>Add</p>          
    </div>
    <div className="w-full  px-3 mb-4 sm:mb-0">
      <div className="flex flex-wrap mt-2 pt-2">
        <div className=" w-1/12 pl-4 text-base mb-1 pb-1  font-medium text-gray-00 bg-gray-700  border-gray-300 shadow rounded-md mx-1">
          <span className=' text-white text-lg font-normal'>skill</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MentorSkills