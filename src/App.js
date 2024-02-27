import React, { lazy, Suspense, startTransition } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserImgProvider } from './context/common/UserImages';
import { AdminProfileProvider } from './context/admin/AdminProfileContext';
import { MentorAuthProvider } from './context/mentor/authentication/MentorAuthentication';
import { CommonDetailsProvider } from './context/common/CommonDetails';
import AdminPanelRoute from '../src/utilities/AdminPanelPrivateRoute';
import MentorPanelPrivateRoute from './utilities/MentorPanelPrivateRout';
import LoadingPage from './pages/LoadingPage';

// Lazy loading components
const HomePage = lazy(() => import('../src/pages/Home/HomePage'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminHome = lazy(() => import('./pages/admin/AdminHome'));
const AdminProfile = lazy(() => import('./pages/admin/adminProfile/AdminProfile'));
const SiteManagement = lazy(() => import('./pages/admin/siteMangement/SiteManagement'));
const ManagemenetComponents = lazy(() => import('./components/admin/siteManagement/ManagemenetComponents'));
const Departments = lazy(() => import('./pages/admin/Departments'));
const Teachers = lazy(() => import('./pages/admin/Teachers'));
const Students = lazy(() => import('./pages/admin/Students'));
const MentorSignUp = lazy(() => import('./pages/authentication/mentor/MentorSignUp'));
const MentorLogin = lazy(() => import('./pages/authentication/mentor/MentorLogin'));
const MentorPanel = lazy(() => import('./pages/MentorPanel/MentorPanel'));
const MentorProfile = lazy(() => import('./pages/MentorPanel/MentorProfile'));
const MentorDashBoard = lazy(() => import('./pages/MentorPanel/MentorDashBoard'));
const EditMentorProfile = lazy(() => import('./pages/MentorPanel/EditMentorProfile'));

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <UserImgProvider>
            <CommonDetailsProvider>
              <AdminProfileProvider>
                <MentorAuthProvider>
                  <Suspense fallback={<LoadingPage />}>

                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/mentor-signup" element={<MentorSignUp />} />
                      <Route path="/mentor-login" element={<MentorLogin />} />

                      <Route path="/mentor-panel" element={<MentorPanelPrivateRoute />} >
                        <Route path="mentor-profile" element={<MentorProfile />} />
                        <Route path="mentor-dashboard" element={<MentorDashBoard />} />
                        <Route path="edit-mentor-profile" element={<EditMentorProfile />} />
                      </Route>

                      <Route path="/adminlogin" element={<AdminLogin />} />

                      <Route path="/adminpanel" element={<AdminPanelRoute />}>
                        <Route path="adminHome" element={<AdminHome />} />
                        <Route path="adminProfile" element={<AdminProfile />}/>
                        <Route path="site-management" element={<SiteManagement />}>
                          <Route path="management-nav" element={<ManagemenetComponents />} />
                          <Route path="department" element={<Departments />} />
                          <Route path="students" element={<Students />} />
                          <Route path="teachers" element={<Teachers />} />
                        </Route>
                      </Route>
                      
                    </Routes>

                  </Suspense>
                </MentorAuthProvider>
              </AdminProfileProvider>
            </CommonDetailsProvider>
          </UserImgProvider>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
