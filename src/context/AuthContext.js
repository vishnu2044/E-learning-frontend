import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../configure/urls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { wait } from "@testing-library/user-event/dist/utils";
import { isInputEmptyOrSpaces } from "./FormValidation";
import { ErrorMessage } from "../alertBox/ErrorMessage";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) =>{

    
    let [authToken, setAuthToken] = useState(()=> localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')) : null)
    

    const navigate = useNavigate()
    let [loading, setLoading] = useState(true)

    let handleAdminLogin = async (e) =>{
        e.preventDefault()
        if (isInputEmptyOrSpaces(e.target.username)){
            ErrorMessage({message : 'Please enter the user name'})
        }else if (isInputEmptyOrSpaces(e.target.password)){
            ErrorMessage({message : 'Please enter the password'})
        }else{
            let response = await fetch(`${baseUrl}/api/token/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  'username':e.target.username.value, 
                  'password':e.target.password.value 
                  }),
      
              });
            let data = await response.json()
            console.log('data ::', data);
    
            if (response.status === 200){
                setAuthToken(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authToken', JSON.stringify(data))
                navigate('adminpanel/adminHome')
            } else if (response.status === 401) {
                ErrorMessage({message: "Invalid credentials"})
            }
            
        }
    }

    let handleMentorLogin = async(e) =>{
        e.preventDefault()
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        if (isInputEmptyOrSpaces(e.target.username)){
            ErrorMessage({message: "Please enter username"})
        }else if (isInputEmptyOrSpaces(e.target.password)){
            ErrorMessage({message: "Please enter password"})
        }else{
            let response = await fetch(`${baseUrl}/mentor-profile/mentor-login/`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  'username':e.target.username.value, 
                  'password':e.target.password.value 
                  }),
            });
            if (response.status === 200){
                let data = await response.json();
                setUser(jwtDecode(data.access))
                localStorage.setItem("authToken", JSON.stringify(data))
                navigate('/mentor-panel/mentor-dashboard')
            }else if(response.status === 400) {
                ErrorMessage({message: "Invalid credentials"})
            }else{
                console.log("some error found", response.status);
            }
        }

    }

    let updateToken = async  () =>{
        console.log('update token called!!!!');
        let response = await fetch(`${baseUrl}/api/token/refresh/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              'refresh':authToken.refresh
              }),
  
          });
          let data = await response.json()
          if (response.status === 200){
            setAuthToken(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
          }else{
            handleAdminLogout()
          }
    }



    
    let handleAdminLogout =  () =>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('adminlogin')
    }
    let handleMentorLogout = () =>{
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("authToken")
        navigate('/')
    }
    
    
    useEffect(()=>{
        
        let  fourMinutes = 1000 * 60 * 4
        let interval =  setInterval(() => {
            if(authToken) {
            updateToken()
            
            }
        }, fourMinutes);
        return ()=> clearInterval(interval)

    
    }, [authToken, loading])



    let contextData = {
        user:user,
        authToken:authToken,


        handleAdminLogin:handleAdminLogin,
        handleAdminLogout:handleAdminLogout,
        

        handleMentorLogin: handleMentorLogin,
        handleMentorLogout:handleMentorLogout,
    
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}