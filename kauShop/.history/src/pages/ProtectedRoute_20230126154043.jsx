import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function ProtectedRoute({children, requireAdmin}) {
  const {user} = useAuthContext();
  
  if (!user || (requireAdmin && !user.isAdmin)){
    return <Navigate to='/' replace />;
  }
  else{
    return children;
  }
}

export default ProtectedRoute;