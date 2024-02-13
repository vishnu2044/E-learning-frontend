import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import CommonUserDetailsContext from '../../../../context/common/CommonDetails';
import { IoMdCloseCircle } from "react-icons/io";
import { MdAddBox } from "react-icons/md";

const EducationList = (
  {
    maangeAddEduccation,
    manageEduList
  }
) => {
  let {educationList} = useContext(CommonUserDetailsContext)
  const deleteEducation = async() => {

  }
  return (
    <>
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-middle justify-center bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className='flex justify-end'>

          </div>
            <fieldset className="text-xl max-w-sm h-96 border-2 border-gray-400 rounded-lg p-2 mx-auto overflow-auto" style={{ scrollbarWidth: 'revert-layer', scrollbarColor: '#4A5568 #EDF2F7' }}>
                <legend className="px-2 text-xl text-center font-semibold"> Education List</legend>
                <div className="flex flex-col gap-2 px-2 text-base font-sans ">
                {educationList?.length > 0 ? (
                    educationList.map((edu, index) => (
                      <div key={index} className='flex mt-1 justify-between px-2 py-2 border border-gray-100 shadow-md rounded-md'>
                        <p className='py-1 font-medium'>{edu ? edu.education : "list data"}</p>
                        <button className='shadow-md hover:bg-gray-700 hover:text-white rounded-md p-2 border cursor-pointer focus:outline-none' >
                          <MdDelete className='' />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p>data not present</p>
                  )}




                </div>
            </fieldset>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
                    <button  onClick={()=>maangeAddEduccation()} className="w-full sm:w-full rounded-md shadow-sm px-4 py-3 my-2 mx-2 bg-black text-base font-medium text-white hover:bg-gray-800">
                        Add New
                    </button>
                    <button onClick={()=> manageEduList()} className="w-full sm:w-full rounded-md shadow-sm px-4 py-3 my-2 mx-2 bg-black text-base font-medium text-white hover:bg-gray-800">
                        close
                    </button>
                </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default EducationList