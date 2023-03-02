import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protected-route';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from './utils/consts';
import Auth from './pages/auth';

function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={SIGNUP_ROUTE} element={<Auth />} />
      <Route path={LOGIN_ROUTE} element={<Auth />} />

      <Route element={<ProtectedRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
