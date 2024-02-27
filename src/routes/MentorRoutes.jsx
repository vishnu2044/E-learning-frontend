import { Route, Routes } from "react-router-dom";
import { lazy } from "react";


import MentorPanelPrivateRoute from "../utilities/MentorPanelPrivateRout";

import MentorLogin from "../pages/authentication/mentor/MentorLogin";
import MentorSignUp from "../pages/authentication/mentor/MentorSignUp";
import MentorProfile from "../pages/MentorPanel/MentorProfile";
import MentorDashBoard from "../pages/MentorPanel/MentorDashBoard";
import EditMentorProfile from "../pages/MentorPanel/EditMentorProfile";


// const MentorSignUp = lazy(() => import('../pages/authentication/mentor/MentorSignUp'));
// const MentorLogin = lazy(() => import('../pages/authentication/mentor/MentorLogin'));
// const MentorProfile = lazy(() => import('../pages/MentorPanel/MentorProfile'));
// const MentorDashBoard = lazy(() => import('../pages/MentorPanel/MentorDashBoard'));
// const EditMentorProfile = lazy(() => import('../pages/MentorPanel/EditMentorProfile'));

// const MentorPanel = lazy(() => import('../pages/MentorPanel/MentorPanel'));

function MentorRoutes () {

    return(
        <Routes>
            <Route path="mentor-signup" element={<MentorSignUp />} />
            <Route path="mentor-login" element={<MentorLogin />} />
            <Route path="mentor-panel" element={<MentorPanelPrivateRoute/>} >
                <Route path="mentor-profile" element={<MentorProfile />} />
                <Route path="mentor-dashboard" element={<MentorDashBoard />} />
                <Route path="edit-mentor-profile" element={<EditMentorProfile />} />
            </Route>

        </Routes>

    )
}

export default MentorRoutes;