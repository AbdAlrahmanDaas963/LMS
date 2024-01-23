import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import Courses from "../common/Courses";
import Classes from "../../pages/content/Classes";
import Assignment from "../common/Assignment";
import SigninLayout from "../../pages/signin/SigninLayout";
import { LoginPage, SignupPage } from "../../pages";
import CodeCheck from "../../pages/signin/content/CodeCheck";

import Students from "../common/Students";
import Ps from "./content/Ps";
import Roles from "./content/Roles";
import Statistics from "./content/Statistics";
import StudentProfile from "../common/StudentProfile";
import EditStudent from "../common/EditStudent";
import AddStudent from "../common/AddStudent";
import AssignmentDetailes from "../common/AssignmentDetailes";
import ComingSoon from "../common/ComingSoon";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="students" element={<Students />} />
        <Route path="students/profile" element={<StudentProfile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="ps" element={<ComingSoon />} />
        <Route path="classes" element={<ComingSoon />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="roles" element={<ComingSoon />} />
        <Route path="editstudent" element={<EditStudent />} />
        <Route path="addstudent" element={<AddStudent />} />
        <Route
          path="assignment/assignmentdetailes"
          element={<AssignmentDetailes />}
        />
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
