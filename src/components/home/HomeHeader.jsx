import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
    <header className="sm:h-20 h-1/2 flex items-center z-30 w-full bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 h-auto flex items-center justify-between">
        <div className="uppercase text-gray-800 font-black text-3xl ">
          Watch.ME
        </div>
        <div className="flex items-center mr-12">
          <nav className="text-gray-800 font-semibold text-lg lg:flex items-center hidden space-x-2">
            <Link
              className="py-2 px-12 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              className="py-2 px-12 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              className="py-2 px-12 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            {/* Add other navigation links as needed */}

            {/* Login Dropdown */}
            <div className="relative ">
              <button
                onClick={handleDropdownToggle}
                className="py-2 px-12 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
              >
                Login
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full flex mb-3 mt-1 bg-white border border-gray-100 rounded-md shadow-lg w-64 mr-4">
                  {/* Dropdown content */}
                <div className='flex p-1'>
                  <Link
                    to="/mentor-login"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-lg"
                  >
                    Student Login
                  </Link>
                  <Link
                    to="/mentor-login"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:rounded-lg"
                  >
                    Mentor Login
                  </Link>

                </div>

                  {/* Add other dropdown items as needed */}
                </div>
              )}
            </div>
          </nav>
          <button
            className="lg:hidden flex flex-col ml-4"
            onClick={handleDropdownToggle}
          >
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default HomeHeader