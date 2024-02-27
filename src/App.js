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
import AdminRoutes from './routes/AdminRoutes';
import MentorRoutes from './routes/MentorRoutes';

// Lazy loading components
const HomePage = lazy(() => import('../src/pages/Home/HomePage'));

const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));

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

                      <Route path='/*' element={<AdminRoutes />} />

                      <Route path='mentor/*' element={<MentorRoutes />} />

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
