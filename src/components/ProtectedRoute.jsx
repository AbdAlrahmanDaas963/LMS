// import { Navigate, Outlet } from "react-router-dom";

// export default function ProtectedRoute({
//   isAllowed,
//   redirectTo = "/admin",
//   children,
// }) {
//   if (!isAllowed) {
//     return <Navigate to={redirectTo} />;
//   }

//   return children ? children : <Outlet />;
// }

// ProtectedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo, children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return <Route element={children} />;
};

export default ProtectedRoute;
