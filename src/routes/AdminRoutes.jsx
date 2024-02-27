import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import AdminPanelRoute from "../utilities/AdminPanelPrivateRoute";


const AdminLogin = lazy(() => import('../pages/admin/AdminLogin'));
const AdminHome = lazy(() => import("../pages/admin/AdminHome"));
const AdminProfile = lazy(() => import("../pages/admin/adminProfile/AdminProfile"));
const SiteManagement = lazy(() => import("../pages/admin/siteMangement/SiteManagement"));
const ManagemenetComponents = lazy(() => import("../components/admin/siteManagement/ManagemenetComponents"));
const Departments = lazy(() => import("../pages/admin/Departments"));
const Students = lazy(() => import("../pages/admin/Students"));
const Teachers = lazy(() => import("../pages/admin/Teachers"));


function AdminRoutes (){
    return (
        <Routes>
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route  path="/adminpanel" element={<AdminPanelRoute />}>
            <Route path="adminHome" element={<AdminHome />} />
            <Route  path="adminProfile" element={<AdminProfile />} />
            <Route  path="site-management" element={<SiteManagement />}>
                <Route  path="management-nav" element={<ManagemenetComponents />} />
                <Route  path="department" element={<Departments />} />
                <Route  path="students" element={<Students />} />
                <Route  path="teachers" element={<Teachers />} />
            </Route>
            </Route>
        </Routes>
    )
}

export default AdminRoutes ;