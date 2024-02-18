import React from 'react'
import ProfileImageDisplay from './profileImageEditor/ProfileImageDisplay'

const EditProfileComponent = () => {
  return (
  <div className='sm:max-w-6xl p-3 max-w-5xl mx-auto mt-16 sm:mt-6 bg-white shadow-xl rounded-lg text-gray-900'>
    <ProfileImageDisplay />
    <p className="text-left px-4 text-xl font-semibold mb-4">Edit your profile</p>
    <form action="" className="px-4">

      <div className='sm:flex justify-between mx-3 font-normal mb-4'>

        <div className='w-full sm:w-1/3 px-2 mb-4 sm:mb-0'>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold">Username:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="username" 
              placeholder="Enter your username"  />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold">Email:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="email" 
              id="name" 
              placeholder="Enter your email"  />
          </div>

        </div>

        <div className='w-full sm:w-1/3 px-2 mb-4 sm:mb-0'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold">First Name:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="firstname" 
              id="name" 
              placeholder="Enter your first name"  />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold">Profession:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="profession" 
              placeholder="Select your Profession"  />
          </div>
        </div>

        <div className='w-full sm:w-1/3 px-2'>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold">Last Name:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="lastname" 
              id="name" 
              placeholder="Enter your last name"  />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 text-md font-semibold"> Education:</label>
            <input 
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none "
              type="text" 
              name="education" 
              
              placeholder="Select your education"  />
          </div>
        </div>

      </div>
      <div className='flex justify-between mx-3'>
        <button className="cursor-pointer py-2 px-4 sm:mx-18 mx-2 mt-6 bg-gray-50 shadow-md border border-gray-200 text-gray-800 font-bold w-full rounded">
          Update</button>
        <button className="cursor-pointer py-2 px-4 sm:mx-18 mx-2 mt-6 bg-gray-50 shadow-md border border-gray-200 text-gray-800 font-bold w-full rounded">
          Back</button>
      </div>


    </form>
</div>

  )
}

export default EditProfileComponent