import React, { useContext, useState } from 'react';
import { ErrorMessage } from '../../../alertBox/ErrorMessage';
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import { baseUrl } from '../../../configure/urls';
import AuthContext from '../../../context/AuthContext';
import { isInputEmptyOrSpaces } from '../../../context/FormValidation';


const EditDepartment = (
    {
      handleCurrentComponent,
      setEditBox,
      departmentId,
      departmentName
    }
) => {
  const {authToken} = useContext(AuthContext)
  const [departmentImg, setDepartmentImg] = useState(null)

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
            console.log("form department data::::::::::::::",departmentImg);
            formData.append("department_img", departmentImg)
        }

        try{
            let response = await fetch(`${baseUrl}/department/edit-department/${departmentId}/`,{
                method : 'POST',
                headers : {
                    "Authorization" : "Bearer " +authToken?.access,
                },
                body : formData,
            });
            if (response.ok) {
                setEditBox('departments');
                SuccessMessage({ message: ' department updated successfully' });
                window.location.reload()
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
  return (

    <div class="mt-7  rounded-xl border-gray-300 shadow-md  border-2 ">
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 ">Edit Deparment</h1>
        </div>
        <div class="mt-5">
          <form onSubmit={editDepartmentData} >
            <div class="grid gap-y-4">

              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 ">Name</label>
                <div class="relative">
                  <input type="text" name='departmentName' defaultValue={departmentName} placeholder={departmentName ? departmentName : "enter department name"} class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm  shadow-sm" required aria-describedby="email-error" />
                </div>
              </div>
              <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
                        profile image
                    </label>
                    <input onChange={(e)=>{
                            if(e.target.value[0] != null)
                            setDepartmentImg(e.target.files[0])
                        }}

                     class="block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded-md py-2 px-4 mb-1 leading-tight focus:outline-none cursor-pointer" name='department_img' type="file" accept="image/*" />
                </div>

                <div className='flex justify-center'>
                    <button type="submit" class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Add</button>
                    <button onClick={handleCurrentComponent} class="py-3 px-12 mx-3  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Cancel</button>

                </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default EditDepartment