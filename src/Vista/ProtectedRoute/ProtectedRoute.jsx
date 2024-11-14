import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ allowedRoles, children }) => {
    const userRole = localStorage.getItem('userRole') || Cookies.get('userRole');

    // Verifica si el rol del usuario está permitido
    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
