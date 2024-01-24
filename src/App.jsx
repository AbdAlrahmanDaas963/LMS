import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./utils/authUtils";
import { USER_ROLES } from "./config/constants";

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
import AppProtectedRoute from "./components/AppProtectedRoute";
import Nav from "./components/layout/Nav";

import Layout from "./pages/Layout";
import Profile from "./pages/content/Profile";
import Courses from "./pages/content/Courses";
import CourseDetailes from "./pages/content/CourseDetailes";
import Classes from "./pages/content/Classes";
import Grades from "./pages/content/Grades";
import Assignment from "./pages/content/Assignment";
import AssignmentDetailes from "./pages/content/AssignmentDetailes";

import "./App.css";
import SigninLayout from "./pages/signin/SigninLayout";
import CodeCheck from "./pages/signin/content/CodeCheck";

import StudentRoute from "./modules/student/StudentRoute";
import InstructorRoute from "./modules/instructor/InstructorRoute";
import AdminRoute from "./modules/admin/AdminRoute";

import AnimatedPage from "./pages/AnimatedPage";
import AnimatedPage2 from "./pages/AnimatedPage2";
import Landing from "./pages/Landing/Landing";
import NotFound from "./pages/NotFound";
import ComingSoon from "./modules/common/ComingSoon";

const PrivateRoute = ({ element, allowedRoles }) => {
  const { isStudent, isAdmin, isInstructor } = useAuth();

  // console.log("isStudent :>> ", isStudent);
  // console.log("isAdmin :>> ", isAdmin);
  // console.log("isInstructor :>> ", isInstructor);

  // if (
  //   (allowedRoles.includes(USER_ROLES.STUDENT) && isStudent) ||
  //   (allowedRoles.includes(USER_ROLES.ADMIN) && isAdmin) ||
  //   (allowedRoles.includes(USER_ROLES.INSTRUCTOR) && isInstructor)
  // ) {
  //   return element;
  // } else {
  //   return <Navigate to="/login" />;
  // }

  if (
    (allowedRoles.includes(USER_ROLES.STUDENT) && true) ||
    (allowedRoles.includes(USER_ROLES.ADMIN) && true) ||
    (allowedRoles.includes(USER_ROLES.INSTRUCTOR) && true)
  ) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/reg" element={<SigninLayout />}>
          <Route path="/reg/login" element={<LoginPage />} />
          <Route path="/reg/signup" element={<SignupPage />} />
          <Route path="/reg/codecheck" element={<CodeCheck />} />
        </Route>
        <Route
          path="/student/*"
          element={
            <PrivateRoute
              element={<StudentRoute />}
              allowedRoles={[USER_ROLES.STUDENT]}
            />
          }
        />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute
              element={<AdminRoute />}
              allowedRoles={[USER_ROLES.ADMIN]}
            />
          }
        />
        <Route
          path="/instructor/*"
          element={
            <PrivateRoute
              element={<InstructorRoute />}
              allowedRoles={[USER_ROLES.INSTRUCTOR]}
            />
          }
        />
        <Route path="/soon" element={<ComingSoon />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Routes>
        <Route path="/reg" element={<SigninLayout />}>
          <Route path="/reg/login" element={<LoginPage />} />
          <Route path="/reg/signup" element={<SignupPage />} />
          <Route path="/reg/codecheck" element={<CodeCheck />} />
        </Route>

        <Route index element={<LandingPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("dashboard")}
                // isAllowed={true}
                redirectTo="/reg/login"
              >
                <StudentRoute />
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
                <AdminRoute />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("instructor")}
                redirectTo="/login"
              >
                <InstructorRoute />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes> */
}

{
  /* <AppProtectedRoute
        path="/app/student/*"
        element={<StudentRoute />}
        roles={["student"]}
      />
      <AppProtectedRoute
        path="/app/instructor/*"
        element={<InstructorRoute />}
        roles={["instructor"]}
      />
      <AppProtectedRoute
        path="/app/admin/*"
        element={<AdminRoute />}
        roles={["admin"]}
      /> */
}

{
  /* <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes> */
}

{
  /* <Routes>
        <Route path="/app" element={<Layout />}>
          <Route path="/app/courses" element={<Courses />} />
          <Route path="/app/courses/:id" element={<CourseDetailes />} />
          <Route path="/app/profile" element={<Profile />} />

          <Route path="/app/classes" element={<Classes />} />
          <Route path="/app/grades" element={<Grades />} />
          <Route path="/app/assignment" element={<Assignment />} />
          <Route path="/app/assignment/:id" element={<AssignmentDetailes />} />
        </Route>
        <Route path="/reg" element={<SigninLayout />}>
          <Route path="/reg/login" element={<LoginPage />} />
          <Route path="/reg/signup" element={<SignupPage />} />
          <Route path="/reg/codecheck" element={<CodeCheck />} />
        </Route>
      </Routes> */
}

{
  /* <Routes>
        <Route index element={<LandingPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/student"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("dashboard")}
                redirectTo="/login"
              >
                <StudentRoute />
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
                <AdminRoute />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.roles.includes("instructor")}
                redirectTo="/login"
              >
                <InstructorRoute />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes> */
}
{
  /* !!!  */
}
{
  /* <Nav user={user} setUser={setUser} /> */
}

{
  /* <Route index element={<LandingPage />} />
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
        </Route> */
}
