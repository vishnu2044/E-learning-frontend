import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home/HomePage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import StudentPage from './components/admin/students/StudentPage';
import AdminPrivateRoute from '../src/utilities/PrivateRoute';
import AdminPanelRoute from '../src/utilities/AdminPanelPrivateRoute';

import { AuthProvider } from './context/AuthContext';
import Teachers from './pages/admin/Teachers';
import Students from './pages/admin/Students';
import Departments from './pages/admin/Departments';
import AdminHome from './pages/admin/AdminHome';
import AdminProfile from './pages/admin/adminProfile/AdminProfile';
import { AdminProfileProvider } from './context/admin/AdminProfileContext';
import MentorSignUp from './pages/authentication/mentor/MentorSignUp';

function App() {
  return (
    <>
      <Router>

        <AuthProvider>
          <AdminProfileProvider>
            <Routes>
              <Route Component={HomePage} path='/' exact />
              <Route Component={MentorSignUp} path='/mentor-signup' exact />

              <Route Component={AdminPrivateRoute} path='/adminlogin' />
              <Route Component={AdminPanelRoute} path='/adminpanel'>
                <Route Component={AdminHome} path='adminHome' />
                <Route Component={AdminProfile} path='adminProfile' />
                <Route Component={Departments} path='department'>
                  <Route Component={Students} path='students' />
                  <Route Component={Teachers} path='teachers' />
                </Route>
              </Route>
                
            </Routes>
          </AdminProfileProvider>
        </AuthProvider>
        
      </Router>
    </>
  );
}

export default App;














