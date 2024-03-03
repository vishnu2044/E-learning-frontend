import React, { lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserImgProvider } from './context/common/UserImages';
import { AdminProfileProvider } from './context/admin/AdminProfileContext';
import { MentorAuthProvider } from './context/mentor/authentication/MentorAuthentication';
import { CommonDetailsProvider } from './context/common/CommonDetails';
import LoadingPage from './pages/LoadingPage';
import AdminRoutes from './routes/AdminRoutes';
import MentorRoutes from './routes/MentorRoutes';

// Lazy loading components
const HomePage = lazy(() => import('../src/pages/Home/HomePage'));

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
