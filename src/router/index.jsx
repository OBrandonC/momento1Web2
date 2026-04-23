import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Home from '../components/Home';
import MyCourses from '../pages/MyCourses'; 
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '/my-courses', 
  element: (
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
  ) }, // Nueva ruta
    ],
  },
]);
export default router;