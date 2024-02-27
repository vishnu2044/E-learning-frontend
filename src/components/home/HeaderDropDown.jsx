import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const HeaderDropDown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className="relative ">
    <button
      onClick={handleDropdownToggle}
      className="py-2 mx-12 px-3 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-100 hover:text-gray-600"
    >
      <FaUser />
    </button>
    {isDropdownOpen && (
      <div className="absolute top-full flex mb-3 mt-1 bg-white border border-gray-100 rounded-md shadow-lg w-64 mr-4">
        {/* Dropdown content */}
      <div className='flex p-1'>
        <Link
          to="mentor//mentor-login"
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-lg"
        >
          Student Login
        </Link>
        <Link
          to="mentor/mentor-login"
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-lg"
        >
          Mentor Login
        </Link>

      </div>

        {/* Add other dropdown items as needed */}
      </div>
    )}
  </div>
  )
}

export default HeaderDropDown