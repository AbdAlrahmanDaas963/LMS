import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const AppProtectedRoute = ({ element, roles }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.user?.role);

  if (roles && !roles.includes(userRole)) {
    // Redirect to unauthorized page if not authorized
    return (
      <Routes>
        <Route element={element} />
      </Routes>
    );
  }

  return React.cloneElement(element, {});
};

export default AppProtectedRoute;
