import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import Layout from "../../pages/Layout";
import Courses from "../../pages/content/Courses";
import CourseDetailes from "../../pages/content/CourseDetailes";
import Profile from "../../pages/content/Profile";
import Classes from "../../pages/content/Classes";
import Grades from "../../pages/content/Grades";
import Assignment from "../../pages/content/Assignment";
import AssignmentDetailes from "../../pages/content/AssignmentDetailes";
import SigninLayout from "../../pages/signin/SigninLayout";
import { LoginPage, SignupPage } from "../../pages";
import CodeCheck from "../../pages/signin/content/CodeCheck";

import Students from "../common/Students";
import Ps from "./content/Ps";
import Roles from "./content/Roles";
import Statistics from "./content/Statistics";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="ps" element={<Ps />} />
        <Route path="classes" element={<Classes />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="roles" element={<Roles />} />
      </Route>
      <Route path="/reg" element={<SigninLayout />}>
        <Route path="/reg/login" element={<LoginPage />} />
        <Route path="/reg/signup" element={<SignupPage />} />
        <Route path="/reg/codecheck" element={<CodeCheck />} />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
