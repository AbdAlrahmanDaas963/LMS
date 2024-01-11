import React from "react";
import { Routes, Route } from "react-router-dom";

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

function StudentRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetailes />} />
        <Route path="coursedetailes" element={<CourseDetailes />} />
        <Route path="profile" element={<Profile />} />

        <Route path="classes" element={<Classes />} />
        <Route path="grades" element={<Grades />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="assignment/:id" element={<AssignmentDetailes />} />
      </Route>
      <Route path="/reg" element={<SigninLayout />}>
        <Route path="/reg/login" element={<LoginPage />} />
        <Route path="/reg/signup" element={<SignupPage />} />
        <Route path="/reg/codecheck" element={<CodeCheck />} />
      </Route>
    </Routes>
  );
}

export default StudentRoute;

// {/* <Routes>
//   <Route path="/" element={<StudentDashboard />} />
//   <Route path="courses" element={<Courses />} />
//   {/* Add more student-specific routes */}
// </Routes> */}
