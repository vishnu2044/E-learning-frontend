import React from 'react'
import { Link } from 'react-router-dom'

const ManagemenetComponents = () => {
  return (
<div>
    <h2 class="flex flex-row flex-nowrap items-center mt-8 mb-12">
        <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium">
            Site Management
        </span>
        <span class="flex-grow block border-t border-black"></span>
        <span class="flex-grow block border-t border-black"></span>
        <span class="flex-none block mx-4 px-4 py-2.5 text-sm cursor-pointer rounded bg-black text-white leading-none">
            Add
        </span>
    </h2>
    <div class="w-full flex justify-center flex-wrap">

        <div class="w-full sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 xl:max-w-1/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 shadow-md h-32 bg-gray-50 m-2 p-2 rounded-md text-center flex flex-col justify-center items-center">
            <p class="font-semibold text-lg font-sans">Departments</p>
            <div class="flex justify-center gap-4 mt-4">
                <Link to='/adminpanel/site-management/department' class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">View</Link>
                <p class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">Add</p>
            </div>
        </div>

        <div class="w-full sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 xl:max-w-1/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 shadow-md h-32 m-2 p-2 rounded-md text-center flex flex-col justify-center items-center">
            <p class="font-semibold text-lg font-sans">Professions</p>
            <div class="flex justify-center gap-4 mt-4">
                <p class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">View</p>
                <p class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">Add</p>
            </div>
        </div>

        <div class="w-full sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 xl:max-w-1/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-300 shadow-md h-32 m-2 p-2 rounded-md text-center flex flex-col justify-center items-center">
            <p class="font-semibold text-lg font-sans">Education</p>
            <div class="flex justify-center gap-4 mt-4">
                <p class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">View</p>
                <p class="px-4 py-2 border cursor-pointer border-gray-200 text-xs font-semibold shadow-md rounded-md m-1">Add</p>
            </div>
        </div>

    </div>
</div>

  )
}

export default ManagemenetComponents