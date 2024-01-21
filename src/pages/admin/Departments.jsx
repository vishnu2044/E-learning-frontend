import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import AddDepartment from '../../components/admin/department/AddDepartment';
import DepartmentField from '../../components/admin/department/DepartmentField';
import EditDepartment from '../../components/admin/department/EditDepartment';


const Departments = () => {
    let [currentField, setCurrentField] = useState('departments')


    const handleDepartment = () =>{
        if (currentField === 'departments'){
            setCurrentField('addDepartment')
        }else{
            setCurrentField('departments')
        }
    }



    const CurrentCumponent = () =>{
        if (currentField === 'departments') {
            return <DepartmentField handleDepartment={handleDepartment}   />;
        } else {
            return <AddDepartment handleDepartment={handleDepartment} />;
        }
    };



  return (
    <div className=''>
        <h2 class="flex flex-row flex-nowrap items-center mt-8">
            <span class="flex-grow block border-t border-black"></span>
            <span class="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium ">
                Departments
            </span>
            <span class="flex-grow block border-t border-black"></span>
            <span onClick={handleDepartment} class="flex-none block mx-4 px-4 py-2.5 text-sm cursor-pointer rounded bg-black text-white leading-none ">
                Add
            </span>
            
        </h2>
        {CurrentCumponent()}
        
        





        
        

        <Outlet />
    </div>
  )
}

export default Departments