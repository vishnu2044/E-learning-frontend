import { createContext, useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { ErrorMessage } from "../../alertBox/ErrorMessage";
import { baseUrl } from "../../configure/urls";

const AdminProfileContext = createContext()
export default AdminProfileContext;

export const AdminProfileProvider = ({children}) =>{

    let {handleAdminLogout, authToken, user} = useContext(AuthContext)
    let [profileImage, setProfileImage] = useState(null)

    
    const getAdminProfilePic = async() =>{
        console.log(user?.username);
        try{
            let response = await fetch( `${baseUrl}/admin-profile/get-admin-profile-pic/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authToken.access,             
                }
            })
            if (response.status === 200){
                let data = await response.json()
                setProfileImage(data.profile_image)
                console.log(data.profile_image)
            }else if (response.status === 401){
                ErrorMessage({message : "Unauthorized : logging out"})
                handleAdminLogout()
           }else{
            alert("Error")
            console.log(response.status);
           }

        }catch (error) {
            console.error("An error occurred:", error);
            ErrorMessage({message : "Unauthorized : catch and error"})
            
        }
    }

    let adminProfileContextData ={
        profileImage:profileImage,

        getAdminProfilePic:getAdminProfilePic
    }

    return(
        <AdminProfileContext.Provider value={adminProfileContextData}>
            {children}
        </AdminProfileContext.Provider>
    )
}