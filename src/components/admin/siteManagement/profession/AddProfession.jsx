import React, { useContext } from 'react'
import AuthContext from '../../../../context/AuthContext'
import { isInputEmptyOrSpaces } from '../../../../context/FormValidation'
import { ErrorMessage } from '../../../../alertBox/ErrorMessage'
import { baseUrl } from '../../../../configure/urls'
import { SuccessMessage } from '../../../../alertBox/SuccessMessage'

const AddProfession = ({
    manageAddProfession,
    manageProfessionList
}) => {
    const {user, authToken} = useContext(AuthContext)

    const addNewProfession = async(e) =>{
        e.preventDefault()

        if (isInputEmptyOrSpaces(e.target.profession)){
            ErrorMessage({message: "Please fill the input field"})
        }else{
            let formData = new FormData()
            formData.append('profession', e.target.profession.value)
            try{
                let response = await fetch(`${baseUrl}/admin-management/add-profession/`,{
                    method: "POST",
                    headers: {
                        "Authorization": 'Bearer ' + authToken?.access
                    },
                    body: formData
                    
                })
                if (response.ok){
                    manageAddProfession()
                    SuccessMessage({message: `${e.target.profession.value} added to profession`})

                }else if (response.status === 409){
                    ErrorMessage({message: "Data already present"})
                }else if (response.status === 400){
                    console.log("bad request", response.status)
                }else if (response.status === 500){
                    console.log("internal server error", response.status);
                }else if (response.status === 405){
                    console.log("method is not allowed", response.status);
                }else{
                    console.log("an error occurred", response.status);
                    ErrorMessage({message: "method is not allowed"})
                }
            } catch (error) {
                console.error('Error during fetch:', error);
                ErrorMessage({ message: 'An error occurred during the request.' });
            }
        }
    }
  return (
<div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form onSubmit={addNewProfession}>

                <div>
                    <div className='text-center font-semibold text-xl'>
                        <p>Add New Profession</p>
                    </div>
                    <div className="flex">
                        <input type="text" name='profession' className='w-full mx-3 my-4 border border-gray-800 rounded-md p-2' />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
                    <button type='submit' className="w-full sm:w-full rounded-md shadow-sm px-4 py-3 my-2 mx-2 bg-black text-base font-medium text-white hover:bg-gray-800">
                        Add
                    </button>
                    <button onClick={()=>manageProfessionList()} className="w-full sm:w-full rounded-md shadow-sm px-4 py-3 my-2 mx-2 bg-black text-base font-medium text-white hover:bg-gray-800">
                        List
                    </button>
                    <button onClick={()=> manageAddProfession()} className="w-full sm:w-full rounded-md shadow-sm px-4 py-3 my-2 mx-2 bg-black text-base font-medium text-white hover:bg-gray-800">
                        Cancel
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>
  )
}

export default AddProfession