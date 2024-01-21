import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import AdminPanel from "../pages/admin/AdminPanel"
import AdminLogin from "../pages/admin/AdminLogin"


const AdminPanelRoute = ({children, ...rest}) =>{
    let {user} = useContext(AuthContext)
    return user ? <AdminPanel/> : <AdminLogin/>
}

export default AdminPanelRoute