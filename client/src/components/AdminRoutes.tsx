import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import useAuth from '../hooks/useAuth';
import AddHorse from '../pages/AddHorse';

function AdminRoutes() {
    const authLogin = useAuth();

    if (authLogin === undefined) {
        return null;
    }

    return authLogin ? (

        <Routes>
            <Route path="home" element={<AdminDashboard />} />
            <Route path="addHorse" element={<AddHorse />} />
        </Routes>
    ) : (
        <Navigate to="/login" />
    );
}

export default AdminRoutes;