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

    const [editBox, setEditBox] = useState("departments");
    const [departmentId, setDepartmentId] = useState(null);
    const [departmentName, setDepartmentName] = useState(null);
    const [departmentImg, setDepartmentImg] = useState(null)


    const getDepartments = async (page) =>{
        console.log(user?.username);
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
                setDepartments(data.results);
                setTotalPages(Math.ceil(data.count / data.results.length))
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

    const handleNextPage = () =>{
        if (currentPage < totalPages){
            setCurrentPage(currentPage +1)
        }
    }

    const handlePrevPage = () =>{
        if (currentPage > 1){
            setCurrentPage(currentPage -1)
        }
    }

    const editDepartmentData = async (e) =>{
        console.log("Its working!!!!");
        e.preventDefault()
        if (isInputEmptyOrSpaces(e.target.departmentName)){
            ErrorMessage({message : "Please input the department name" })
        }else{
            let formData = new FormData();
            formData.append("departmentName", e.target.departmentName.value)
            formData.append("id", departmentId)
            if (departmentImg){
                formData.append("department_img", departmentImg)
            }

            try{
                let response = await fetch(`${baseUrl}/department/edit-department/`,{
                    method : 'POST',
                    headers : {
                        "Authorization" : "Bearer " +authToken?.access,
                    },
                    body : formData,
                });
                if (response.ok) {
                    let data = await response.json();
                    setEditBox('departments');
                    SuccessMessage({ message: ' department updated successfully' });
                } else if (response.status === 400) {
                    ErrorMessage({ message: 'This department is not exists!' });
                } else if (response.status === 401) {
                    ErrorMessage({ message: 'User is not an admin' });
                } else {
                    ErrorMessage({ message: 'Something went wrong' });
                    console.log(response.status);
                }
    
            }catch (error) {
                console.error("An error occurred:", error);
                ErrorMessage({message : "Unauthorized : catch and error"})
                
            }
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

                    departments && departments.length !== 0 ? (
                        departments.map((department)=>(
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-8 ">
                                <div className="bg-[#ffffff] border-x  rounded-xl text-center shadow-lg border border-solid ">
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
                editBox && ( 
                    <>
                    <button className='px-4 py-2 bg-gray-700 shadow-md mx-3 text-white font-extrabold text-2xl rounded-md' onClick={handlePrevPage} disabled={currentPage === 1}><MdKeyboardArrowLeft /> </button>
                    <p className='px-3 py-2 border mx-2 rounded-md shadow-md bg-gray-100 font-semibold '>{currentPage}</p>
                    <p className='px-3 py-2 border mx-2 rounded-md shadow-md bg-gray-100 font-semibold '>{totalPages}</p>
                    <button className='px-4 py-2 bg-gray-700 shadow-md mx-3 text-white font-extrabold text-2xl rounded-md' onClick={handleNextPage} disabled={currentPage === totalPages}><MdKeyboardArrowRight /></button>
                    </>
                )
            }

        </div>
    
    </>
  )
}

export default DepartmentField