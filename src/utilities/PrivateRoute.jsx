import { Route, redirect } from "react-router-dom";
import AdminPanel from "../pages/admin/AdminPanel";
import AdminLogin from "../pages/admin/AdminLogin";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AdminPrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return  ! user ? <AdminLogin />  : <AdminPanel />  
}

export default AdminPrivateRoute;