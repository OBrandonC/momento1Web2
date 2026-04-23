import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Cargando...</div>; // Manejo básico de carga

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;