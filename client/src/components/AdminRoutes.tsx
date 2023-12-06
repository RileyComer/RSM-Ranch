import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import useAuth from '../hooks/useAuth';
import AddHorse from '../pages/AddHorse';
import EditHorse from '../pages/EditHorse';
import MyHorses from '../pages/MyHorses';

function AdminRoutes() {
    const authLogin = useAuth();

    if (authLogin === undefined) {
        return null;
    }

    return authLogin ? (

        <Routes>
            <Route path="home" element={<AdminDashboard />} />
            <Route path="add-horse" element={<AddHorse />} />
            <Route path="my-horses" element={<MyHorses/>} />
            <Route path="/my-horse/:id" element={<EditHorse/>} />
        </Routes>
    ) : (
        <Navigate to="/login" />
    );
}

export default AdminRoutes;