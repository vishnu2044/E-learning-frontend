import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import HeaderDropDown from './HeaderDropDown';

const HomeHeader = () => {

  return (
    <>
    <header className="sm:h-20 h-1/2 flex items-center z-30 w-full bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 h-auto flex items-center justify-between">
        <div className="text-gray-800 cursor-pointer font-extrabold text-4xl tracking-wider">
        EduZone
        </div>
        <div className="flex items-center mr-12">
          <nav className="text-gray-800 font-semibold text-lg lg:flex items-center hidden space-x-2">

          <HeaderDropDown />

          </nav>
          <button
            className="lg:hidden flex flex-col"
          >
            <HeaderDropDown />
              
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default HomeHeader