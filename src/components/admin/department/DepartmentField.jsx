import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../context/AuthContext';
import { baseUrl } from '../../../configure/urls';
import { ErrorMessage } from '../../../alertBox/ErrorMessage';
import EditDepartment from './EditDepartment';
import { isInputEmptyOrSpaces } from '../../../context/FormValidation';
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const DepartmentField = ( { handleDepartment } ) => {

    const { user, authToken, handleAdminLogout } = useContext(AuthContext);
    const [departments, setDepartments] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [maxPages, setMaxPage] = useState(0)

    const [loading, setLoading] = useState(true)

    const [editBox, setEditBox] = useState("departments");


    const [departmentId, setDepartmentId] = useState(null);

    const [departmentName, setDepartmentName] = useState(null);
    


    const getDepartments = async (page) =>{
        try{
                let response =  await fetch(`${baseUrl}/department/get-departments/?page=${page}`, {
                   method: "GET",
                   headers: {
                       'Content-Type': 'application/json',
                       'Authorization': 'Bearer ' + authToken.access,             
                   }
               })
               if (response.ok){
                    
                    let data = await response.json();
                    const totalPage = Math.ceil(data.count / data.results.length)
                    setDepartments(data.results);
                    setLoading(false)
                    setTotalPages(totalPage);
                    if (page == 1){
                        setMaxPage(totalPage)
                    }
                    
               }else if (response.status === 401){
                    ErrorMessage({message : "Unauthorized : logging out"})
                    handleAdminLogout()
    
               }else if (response.status === 404){
                    console.log("data not found");
               }else{
                alert("Error")
                console.log(response.status);
               }
        }catch (error) {
            console.error("An error occurred:", error);
            ErrorMessage({message : "Unauthorized : catch and error"})
            
        }

    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1, () => {
                getDepartments(currentPage + 1); 
            });
        }
    }
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1, () => {
                getDepartments(currentPage - 1);
            });
        } else {
            setCurrentPage(1);
        }
    }
    
    


    const handleCurrentComponent = (id, name) => {
        if (editBox === 'departments') {
          if (id !== null && name !== null) {
            
            console.log(id, name);
            setDepartmentId(id);
            setDepartmentName(name);
          }
          setEditBox("editDepartment");
        } else {
          setEditBox('departments');
          setDepartmentId(null);
          setDepartmentName(null);
        }
    };
      



    useEffect(()=>{
        getDepartments(currentPage)
    }, [currentPage])

    useEffect(() => {
        if (editBox === 'departments') {
          setDepartmentId(null);
          setDepartmentName(null);
          getDepartments()
        }
      }, [editBox]);
      




  return (
    <>
        <div className='flex  justify-center flex-wrap '>
            {
                editBox === 'departments' && 
                (
                    loading ? (
                        <div className="flex items-center justify-center w-full h-screen">
                        <div className="spinner">Loading</div>
                      </div>
                    ):

                    departments && departments.length !== 0 ? (
                        departments.map((department)=>(
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8 ">
                                <div className=" border-x rounded-xl text-center shadow-lg border border-solid border-gray-300 ">
                                    <img src={department?.department_image ? `${department.department_image}` : 'https://i.pravatar.cc/150?img=32' }  alt="" className="w-full h-40 object-cover object-center bord cursor-pointer p-2 rounded-2xl  " />
                                    <h4 className="text-lg md:text-xl pt-2 pb-3 font-bold">{department.name}</h4>
                                    <div className="flex flex-wrap justify-center gap-2 bord cursor-pointer m-1 pb-2  ">                   
                                        <p className="border border-solid border-gray-300 shadow-lg bg-[#ffffff]  px-8 md:py-2.5 md:px-8  font-semibold rounded-lg">View</p>
                                        <p 
                                        onClick={() => handleCurrentComponent(department.id, department.name)}
                                            className="border border-solid border-gray-300 shadow-lg bg-[#ffffff]  px-8 md:py-2.5 md:px-8  font-semibold rounded-lg">
                                            Edit
                                        </p>
        
                                    </div>
                                </div>
                            </div>  
        
                        ))
        
                    ) :
                    (
                        <div className="flex items-center justify-center w-screen">
                        <div className="bg-white  mx-auto p-4 rounded-md shadow-md py-12 px-80 border border-solid dark:border-gray-300 ">
                        <h1 className="text-2xl font-bold  mb-6">No departments exist</h1>
                
                        <div className="text-center">
                            <button
                            onClick={handleDepartment}
                            
                            className="py-3 px-4 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                            Add New Department
                            </button>
                        </div>
                        </div>
                    </div>
                    )
                ) 
            }



        </div>
        <div className='mt-6 flex justify-center'>
            {
                editBox === 'departments' && ( 
                    <>

                    {
                        currentPage !== 1 &&
                        <button className='px-4 py-2 bg-gray-700 shadow-md mx-1 text-white font-extrabold text-2xl rounded-md' onClick={handlePrevPage} disabled={currentPage === 1}><MdKeyboardArrowLeft /> </button>
                    }
                        
                    {
                        currentPage < maxPages &&
                    <p className='px-3 py-2 border mx-1 rounded-md shadow-md bg-gray-100 font-semibold '>{currentPage}</p>
                    }
                    <p className='px-3 py-2 border mx-1 rounded-md shadow-md bg-gray-100 font-semibold '>{maxPages}</p>
                    {
                        currentPage < maxPages &&
                        <button className='px-4 py-2 bg-gray-700 shadow-md mx-1 text-white font-extrabold text-2xl rounded-md' onClick={handleNextPage} disabled={currentPage === totalPages}><MdKeyboardArrowRight /></button>
                    }
                    
                    
                    <p></p>
                    
                    </>
                )
            }
            {
                editBox === 'editDepartment' && <EditDepartment 

                                                handleCurrentComponent={handleCurrentComponent} 
                                                setEditBox={setEditBox}
                                                departmentId={departmentId}
                                                departmentName={departmentName}
                                            />
            }

        </div>
    
    </>
  )
}

export default DepartmentField