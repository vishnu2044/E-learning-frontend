import React, { useContext, useState } from 'react'
import { isInputEmptyOrSpaces } from '../../../context/FormValidation'
import { ErrorMessage } from '../../../alertBox/ErrorMessage';
import { baseUrl } from '../../../configure/urls';
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import AuthContext from '../../../context/AuthContext';

const AddDepartment = (
    {
      DisplayAddDepartment
    }
) => {
    
    const {authToken, user} = useContext(AuthContext)
    const [department_img, setDepartment_img] = useState();

    const addNewDepartment = async (e) => {
        e.preventDefault();
    
        if (isInputEmptyOrSpaces(e.target.departmentName)) {
            ErrorMessage({ message: 'Please fill input column' });
        } else {
            let formData = new FormData();
            formData.append('departmentName', e.target.departmentName.value);
    
            if (department_img) {
                formData.append('department_img', department_img);
            }
    
            try {
                const response = await fetch(`${baseUrl}/department/add-department/`, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + authToken?.access,
                    },
                    body: formData,
                });
    
                if (response.ok) {
                    let data = await response.json();
                    DisplayAddDepartment()
                    SuccessMessage({ message: 'New department added successfully' });
                } else if (response.status === 400) {
                    ErrorMessage({ message: 'This department already exists!' });
                } else if (response.status === 401) {
                    ErrorMessage({ message: 'User is not an admin' });
                } else {
                    ErrorMessage({ message: 'Something went wrong' });
                    console.log(response.status);
                }
            } catch (error) {
                console.error('Error during fetch:', error);
                ErrorMessage({ message: 'An error occurred during the request.' });
            }
        }
    };
    
    
    
  return (
    <>

<div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" >&#8203;</span>
        <div className="inline-block align-middle justify-center  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">


    <div class="mt-7  rounded-xl shadow-lg bg-white ">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 ">Add new Deparment </h1>
        </div>

        <div class="mt-5">
          <form onSubmit={addNewDepartment}>
            <div class="grid gap-y-4">

              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 ">Name</label>
                <div class="relative">
                  <input type="text" placeholder='Enter Department name'  name="departmentName" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm  shadow-sm" required aria-describedby="email-error" />
                </div>
                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
                        profile image
                    </label>
                    <input onChange={(e)=>{
                            if(e.target.value[0] != null)
                            setDepartment_img(e.target.files[0])
                        }}
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='department_img' type="file" accept="image/*" 
                     />
                </div>

                <div className='flex justify-center'>
                    <button type="submit" class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Add</button>
                    <button onClick={DisplayAddDepartment} type='nav'  class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Cancel</button>

                </div>
            </div>
          </form>
        </div>
      </div>
    </div>




        </div>
      </div>
    </div>



    
    
    </>
  )
}

export default AddDepartment