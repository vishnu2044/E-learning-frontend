import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../../configure/urls";
import AuthContext from "../AuthContext";
import { SuccessMessage } from "../../alertBox/SuccessMessage";
import { ErrorMessage } from "../../alertBox/ErrorMessage";


const CommonUserDetailsContext = createContext()
export default CommonUserDetailsContext;

export const CommonDetailsProvider = ({children}) =>{
    let {authToken, user} = useContext(AuthContext)
    let [professions, setProfessions] = useState(null)
    let [educationList, setEducationList] = useState(null)

    let getProfessionList = async() =>{
        if (authToken){

            const response = await fetch(`${baseUrl}/admin-management/get-profession-option-list/`, {
                method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + authToken.access,             
                    }
    
            });
            if (response.status === 200){
                let data = await response.json()
                setProfessions(data)
            }else if (response.status === 404){
                ErrorMessage({message: 'data not found'})
            }else{
                console.log("error from backend", response.status);
            }
        }else{
            ErrorMessage({message: "user is not authenticated"})
        }
    }

    let getEducationList = async() =>{
        if (authToken){

            const response = await fetch(`${baseUrl}/admin-management/get-education-option-list/`, {
                method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + authToken.access,             
                    }
    
            });
            if (response.status === 200){
                let data = await response.json()
                setEducationList(data)
                console.log("edu list:::::::::", data);
            }else if (response.status === 404){
                ErrorMessage({message: 'data not found'})
            }else{
                console.log("error from backend", response.status);
            }
        }else{
            ErrorMessage({message: "user is not authenticated"})
        }
    }



    let CommonDetailsContextData = {
        professions:professions,
        educationList:educationList,

        getProfessionList:getProfessionList,
        getEducationList:getEducationList

    }
    return(
        <CommonUserDetailsContext.Provider value ={CommonDetailsContextData}>
            {children}

        </CommonUserDetailsContext.Provider>
    )
}