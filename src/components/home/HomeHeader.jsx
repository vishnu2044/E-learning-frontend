import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <header className="sm:h-20 flex items-center z-30 w-full bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 flex items-center justify-between">
        <div className="uppercase text-gray-800 font-black text-3xl">
          Watch.ME
        </div>
        <div className="flex items-center">
          <nav className="text-gray-800 uppercase font-semibold text-lg lg:flex items-center hidden space-x-4">
            <Link
              className="py-2 px-6 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              className="py-2 px-6 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              className="py-2 px-6 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              className="py-2 px-6 cursor-pointer flex rounded-xl text-gray-950 transition-opacity duration-300 hover:bg-blue-50 hover:text-gray-600"
            >
              Home
            </Link>

          </nav>
          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 mb-1">Home</span>
            <span className="w-6 h-1 bg-gray-800 mb-1">Watch</span>
            <span className="w-6 h-1 bg-gray-800 mb-1">Product</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader