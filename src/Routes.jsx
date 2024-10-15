import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PublicLayout } from './public/layout/PublicLayout';
import { Home } from './public/pages/Home';
import { AboutUs } from './public/pages/AboutUs';
import { Login } from './auth/components/Login';
import { Register } from './auth/components/Register';
import { Dashboard } from './dashboard/pages/Dashboard';
import { DashboardLayout } from './dashboard/layout/DashboardLayout';


// Simulación de autenticación
const isAuthenticated = () => {
    // Aquí puedes reemplazar esta función con la verificación real
    // (por ejemplo, verificando un token en el localStorage)
    return localStorage.getItem('authToken') !== null;
};

// Componente que protege las rutas privadas
const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas Públicas */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            {/* Rutas del Dashboard (privadas) */}
            <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Redirigir cualquier ruta no definida */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;

