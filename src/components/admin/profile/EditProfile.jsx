import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import AdminProfileContext from '../../../context/admin/AdminProfileContext';
import { ErrorMessage } from '../../../alertBox/ErrorMessage';
import { SuccessMessage } from '../../../alertBox/SuccessMessage';
import { baseUrl } from '../../../configure/urls';
import { isInputEmptyOrSpaces } from '../../../context/FormValidation';

const EditProfile = (
    {
        setCurrentComponent
    }
) => {
    let {user, authToken, handleAdminLogout} = useContext(AuthContext)
    let [profileImg, setProfileImg] = useState()

    const updateAdminProfile = async (e) =>{
        e.preventDefault();
        console.log(user?.username);
        console.log(authToken?.access);

        if (isInputEmptyOrSpaces(e.target.username)){
            ErrorMessage({message : "Please enter your username"})
        }else{
            let formData = new FormData()
            formData.append('username', e.target.username.value)
            formData.append('first_name', e.target.first_name.value)
            formData.append('last_name', e.target.last_name.value)
            formData.append('email', e.target.email.value)
            
            if (profileImg) {
                formData.append('profileImg', profileImg);
            }
            

            try{
                const response = await fetch(`${baseUrl}/admin-profile/edit-admin-profile/`, {
                    method: 'PATCH',
                    headers: {
                        
                        'Authorization': 'Bearer ' + authToken.access,             
                    },
                    body: formData,
                });
                
                if (response.status === 200 ){
                    SuccessMessage({message : 'Profile updated successfullly'})
                }else if (response.status === 400){
                    response.json()
                        .then(data => {
                            if (data.error) {
                                ErrorMessage({message: data.error })
                            } else {
                                alert('An error occurred');
                            }
                        })
                        .catch(error => {
                            console.error('Error parsing response:', error);
                            alert('An error occurred while processing the response');
                        });
                }else if (response.status === 401){
                    ErrorMessage({message: "Unauthorized: loging out"})
                    handleAdminLogout()
                }

            }catch (error){
                console.error('An Error occurred !!', error);
                alert("An error occurrec while updating profile")
            }

        }

    }

  return (
    <div className='font-sans antialiased pt-12 leading-normal tracking-wider bg-cover'>


        <div className="max-w-xl rounded-lg p-12 h-auto mx-auto bg-white lg:border border-solid lg:shadow-2xl justify-between ">
        <h2 className="text-2xl font-bold pb-5 text-center text-gray-600">Edit your Profile</h2>
        <form onSubmit={updateAdminProfile}>

            <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                username
            </label>
            <input
                type="text"
                id="username"
                name='username'
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder={user?.username ? user?.username : 'Enter your username'}
                defaultValue={user?.username}
                required
            />
            </div>

            <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                first name
            </label>
            <input
                type="text"
                id="first_name"
                name='first_name'
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder={user?.first_name ? user?.first_name : 'Enter your first name'}
                defaultValue={user?.first_name}
                required
            />
            </div>

            <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                last name
            </label>
            <input
                type="text"
                id="last_name"
                name='last_name'
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder={user?.last_name ? user?.last_name : 'Enter your last name'}
                defaultValue={user?.last_name}
                required
            />
            </div>

            <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                E-mail
            </label>
            <input
                type="text"
                id="email"
                name='email'
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder={user?.email ? user?.email : 'Enter your E-mail'}
                defaultValue={user?.email}
                required
            />
            </div>
            <div class="mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        profile image
                    </label>
                    <input onChange={(e)=>{
                            if(e.target.value[0] != null)
                            setProfileImg(e.target.files[0])
                        }}
                        
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="file" accept="image/*" 
                     />
                </div>

            <div className="flex items-center justify-between mb-4">
            <button
                type="submit"
                className="text-white bg-black shadow-lg  font-medium rounded-lg text-base py-2.5 px-5 w-full sm:w-auto"
            >
                Register
            </button>
            <button
                
                onClick={() => setCurrentComponent('profile')}
                className="text-white bg-black shadow-lg  font-medium rounded-lg text-base py-2.5 px-5 w-full sm:w-auto"
            >
                back
            </button>

            </div>
        </form>
        </div>
    </div>
  )
}

export default EditProfile