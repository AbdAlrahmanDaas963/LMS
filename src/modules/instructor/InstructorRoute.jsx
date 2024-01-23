import React from "react";
import { Routes, Route } from "react-router-dom";

import InstructorLayout from "./InstructorLayout";
import Students from "../common/Students";
import Courses from "../common/Courses";
import Assignments from "../common/Assignment";
import Classes from "./content/Classes";
import Grades from "../../pages/content/Grades";

import SigninLayout from "../../pages/signin/SigninLayout";
import { LoginPage, SignupPage } from "../../pages";
import CodeCheck from "../../pages/signin/content/CodeCheck";
import Statistics from "../admin/content/Statistics";
import StudentProfile from "../common/StudentProfile";
import EditStudent from "../common/EditStudent";
import AddStudent from "../common/AddStudent";
import AssignmentDetailes from "../common/AssignmentDetailes";
import CourseDetailes from "../common/CourseDetailes";
import ComingSoon from "../common/ComingSoon";

function InstructorRoute() {
  return (
    <Routes>
      <Route path="/" element={<InstructorLayout />}>
        <Route path="students" element={<Students />} />
        <Route path="students/profile" element={<StudentProfile />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/coursedetailes" element={<CourseDetailes />} />
        <Route path="assignment" element={<Assignments />} />
        <Route path="classes" element={<ComingSoon />} />
        <Route path="statistics" element={<Statistics />} />
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

export default InstructorRoute;
