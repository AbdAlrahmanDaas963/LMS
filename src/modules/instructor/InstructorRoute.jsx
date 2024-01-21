import React from "react";
import { Routes, Route } from "react-router-dom";

import InstructorLayout from "./InstructorLayout";
import Students from "../common/Students";
import Courses from "./content/Courses";
import Assignments from "../common/Assignment";
import Classes from "./content/Classes";
import Grades from "../../pages/content/Grades";

import SigninLayout from "../../pages/signin/SigninLayout";
import { LoginPage, SignupPage } from "../../pages";
import CodeCheck from "../../pages/signin/content/CodeCheck";
import Statistics from "../admin/content/Statistics";
import StudentProfile from "../common/StudentProfile";

function InstructorRoute() {
  return (
    <Routes>
      <Route path="/" element={<InstructorLayout />}>
        <Route path="students" element={<Students />} />
        <Route path="students/profile" element={<StudentProfile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignment" element={<Assignments />} />
        <Route path="classes" element={<Classes />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
      <Route path="/reg" element={<SigninLayout />}>
        <Route path="/reg/login" element={<LoginPage />} />
        <Route path="/reg/signup" element={<SignupPage />} />
        <Route path="/reg/codecheck" element={<CodeCheck />} />
      </Route>
    </Routes>
  );
}

export default InstructorRoute;
