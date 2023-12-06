import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AdminPage,
  ConfigPage,
  DashboardPage,
  HomePage,
  LandingPage,
  LoginPage,
  SignupPage,
} from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import Nav from "./components/layout/Nav";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* <Nav user={user} setUser={setUser} /> */}

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("dashboard")}
                redirectTo="/login"
              >
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("admin")}
                redirectTo="/login"
              >
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/config"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("admin")}
                redirectTo="/login"
              >
                <ConfigPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
