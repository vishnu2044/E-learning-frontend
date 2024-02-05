import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import MentorLogin from "../pages/authentication/mentor/MentorLogin";
import MentorPanel from "../pages/MentorPanel/MentorPanel";




const MentorPanelPrivateRoute = ({children, ...rest}) =>{
    let {user} = useContext(AuthContext)

    return  user ?  <MentorPanel/> : <MentorLogin />
}

export default MentorPanelPrivateRoute;