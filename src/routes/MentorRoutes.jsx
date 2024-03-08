import { Route, Routes } from "react-router-dom";
import { lazy } from "react";


import { MentorProfileProvider } from "../context/mentor/profile/MentorProfileContext";
import MentorPanelPrivateRoute from "../utilities/MentorPanelPrivateRout";

// Lazy loading components
const MentorLogin = lazy(() => import('../pages/authentication/mentor/MentorLogin') )
const MentorSignUp = lazy(() => import('../pages/authentication/mentor/MentorSignUp') )
const MentorProfile = lazy(() => import('../pages/MentorPanel/MentorProfile') )
const MentorDashBoard = lazy(() => import('../pages/MentorPanel/MentorDashBoard') )
const EditMentorProfile = lazy(() => import('../pages/MentorPanel/EditMentorProfile') )



// const MentorPanel = lazy(() => import('../pages/MentorPanel/MentorPanel'));

function MentorRoutes () {

    return(
        <MentorProfileProvider>
            <Routes>
                <Route path="mentor-signup" element={<MentorSignUp />} />
                <Route path="mentor-login" element={<MentorLogin />} />
                <Route path="mentor-panel" element={<MentorPanelPrivateRoute/>} >
                    <Route path="mentor-profile" element={<MentorProfile />} />
                    <Route path="mentor-dashboard" element={<MentorDashBoard />} />
                    <Route path="edit-mentor-profile" element={<EditMentorProfile />} />
                </Route>

            </Routes>

        </MentorProfileProvider>

    )
}

export default MentorRoutes;