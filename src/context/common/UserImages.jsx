import { createContext, useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { baseUrl } from "../../configure/urls";
import { SuccessMessage } from "../../alertBox/SuccessMessage";
import { ErrorMessage } from "../../alertBox/ErrorMessage";

const UserImageContext = createContext();
export default UserImageContext;

export const UserImgProvider = ({ children }) => {
    const { authToken, user } = useContext(AuthContext);
    const [profileImg, setProfileImg] = useState(null);

    
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
                const imageUrl = URL.createObjectURL(await response.blob()); // Create object URL for the blob
                console.log("Image URL:", imageUrl); // Log the image URL
                SuccessMessage({ message: "Image retrieved successfully!" });
                setProfileImg(imageUrl); // Set image URL in state
            } else {
                ErrorMessage({ message: "An error occurred while trying to retrieve the profile image" });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            ErrorMessage({ message: "Unauthorized: Caught an error" });
        }
    };
    
    

    const UserImgData = {
        profileImg: profileImg,
        getUserProfileImg: getUserProfileImg
    };

    return (
        <UserImageContext.Provider value={UserImgData}>
            {children}
        </UserImageContext.Provider>
    );
};
