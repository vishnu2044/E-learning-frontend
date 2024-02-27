import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import { baseUrl } from "../../configure/urls";
import { SuccessMessage } from "../../alertBox/SuccessMessage";
import { ErrorMessage } from "../../alertBox/ErrorMessage";

const UserImageContext = createContext();
export default UserImageContext;

export const UserImgProvider = ({ children }) => {
    const { authToken, user, handleMentorLogout } = useContext(AuthContext);
    const [profileImg, setProfileImg] = useState(null);
    const [coverImg, setCoverimg] = useState(null)


    const getUserProfileImg = async () => {
        if (!authToken){
            window.location.reload()
            ErrorMessage({message: "Authtoken not found"})
        }
        try {
            console.log("user id :::::::", user.username);
            const response = await fetch(`${baseUrl}/user-profile/get-profile-img/${user.id}/`, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + authToken.access,
                }
            });
            if (response.ok) {
                const imageData = await response.json();
                console.log(imageData);
                setProfileImg(imageData);

            }else if(response.status === 401){
                ErrorMessage({message: "Auhthentication fail: Logging out"})
                handleMentorLogout()

            }else if(response.status === 404){
                console.log("profile image not found");

            } else {
                ErrorMessage({ message: "An error occurred while trying to retrieve the profile image" });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            ErrorMessage({ message: "Unauthorized: Caught an error while profile image get" });
        }
    };

    const getCoverImg = async() =>{
        if (!authToken){
            console.log("access token shows None");
            window.location.reload()
        }
        try{
            const response = await fetch(`${baseUrl}/user-profile/get-cover-img/${user.id}/`, {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + authToken.access
                }
            })
            if (response.ok){
                const imageData = await response.json()
                setCoverimg(imageData)
            }else if(response.status === 401){
                ErrorMessage({message: "Auhthentication fail: Logging out"})
                handleMentorLogout()

            }else if(response.status === 404){
                console.log("profile image not added");

            } else {
                ErrorMessage({ message: "An error occurred while trying to retrieve the profile image" });
            }
        }catch (error){
            console.error("An error occurred: while cover image get", error);
            window.location.reload()
            
        }
    }
    
    

    const UserImgData = {
        profileImg: profileImg,
        coverImg:coverImg, 

        getCoverImg:getCoverImg,
        getUserProfileImg: getUserProfileImg
    };

    return (
        <UserImageContext.Provider value={UserImgData}>
            {children}
        </UserImageContext.Provider>
    );
};
