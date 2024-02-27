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

            } else {
                ErrorMessage({ message: "An error occurred while trying to retrieve the profile image" });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            ErrorMessage({ message: "Unauthorized: Caught an error" });
        }
    };

    const getCoverImg = async() =>{
        if (!authToken.access){
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
                SuccessMessage({message: "Cover image get successfully"})
            }else if(response.status === 401){
                ErrorMessage({message: "Auhthentication fail: Logging out"})
                handleMentorLogout()

            } else {
                ErrorMessage({ message: "An error occurred while trying to retrieve the profile image" });
            }
        }catch (error){
            console.error("An error occurred:", error);
            ErrorMessage({ message: "Unauthorized: Caught an error" });
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
