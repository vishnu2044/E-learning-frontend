import { useContext, useState,useEffect } from "react"
import AuthContext from "../context/AuthContext"
import AdminPanel from "../pages/admin/AdminPanel"
import AdminLogin from "../pages/admin/AdminLogin"
import { baseUrl } from "../configure/urls"
import { ErrorMessage } from "../alertBox/ErrorMessage"
import { useNavigate } from "react-router-dom"


const AdminPanelRoute = ({children, ...rest}) =>{
    let {user, authToken, handleAdminLogout} = useContext(AuthContext)
    let [isAdmin, setIsAdmin] = useState(null)
    const navigate = useNavigate()

    const checkUserIsAdmin = async() =>{
        try{
            let response = await fetch(`${baseUrl}/api/token/check-user-is-admin`, {
                method: "GET",
                headers: {
                    "Authorization" : "Bearer " +authToken?.access,
                },
    
            });
            if (response.status === 200){
                let data = await response.json()
                setIsAdmin(data)
            }else{
                ErrorMessage({message: "user is not admin"})
                navigate('/adminlogin')
                handleAdminLogout()
            }

        }catch (error) {
            console.error("An error occurred:", error);
            handleAdminLogout()
            ErrorMessage({message : "Unauthorized : catch and error"})
            
        }
        
    }
    useEffect(()=>{
        if (user){
            checkUserIsAdmin()
        }
    }, [user])
    
    return isAdmin ? <AdminPanel/> : <AdminLogin/>
}

export default AdminPanelRoute