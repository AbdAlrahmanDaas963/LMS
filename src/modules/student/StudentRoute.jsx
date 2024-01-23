import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../student/Layout";
import Courses from "../student/content/Courses";
import Assignment from "../student/content/Assignment";
import AssignmentDetailes from "../student/content/AssignmentDetailes";
import Classes from "../student/content/Classes";
import CourseDetailes from "../student/content/CourseDetailes";
import CourseDetailesUnReg from "./content/CourseDetailesUnReg";
import Grades from "../student/content/Grades";
import Profile from "../student/content/Profile";

import SigninLayout from "../../pages/signin/SigninLayout";
import { LoginPage, SignupPage } from "../../pages";
import CodeCheck from "../../pages/signin/content/CodeCheck";
import Quizzes from "./content/Quizzes";
import Resourses from "./content/Resourses";
import Calendar from "./content/CalendarPage";
import Scheduler from "./content/Scheduler";
import ComingSoon from "../common/ComingSoon";

// import Layout from "../../pages/Layout";
// import Courses from "../../pages/content/Courses";
// import CourseDetailes from "../../pages/content/CourseDetailes";
// import Profile from "../../pages/content/Profile";
// import Classes from "../../pages/content/Classes";
// import Grades from "../../pages/content/Grades";
// import Assignment from "../../pages/content/Assignment";
// import AssignmentDetailes from "../../pages/content/AssignmentDetailes";

function StudentRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetailes />} />
        <Route path="coursedetailes" element={<CourseDetailes />} />
        <Route path="coursedetailesunreg" element={<CourseDetailesUnReg />} />

        <Route path="profile" element={<Profile />} />
        <Route path="classes" element={<ComingSoon />} />
        <Route path="grades" element={<Grades />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="resourses" element={<Resourses />} />
        <Route path="calendar" element={<ComingSoon />} />
        <Route path="scheduler" element={<ComingSoon />} />

        <Route path="assignment" element={<Assignment />} />
        <Route path="assignment/:id" element={<AssignmentDetailes />} />
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

      {/* <Route path="/" element={<Layout />}>
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
      </Route> */}
    </Routes>
  );
}

export default StudentRoute;

// {/* <Routes>
//   <Route path="/" element={<StudentDashboard />} />
//   <Route path="courses" element={<Courses />} />
//   {/* Add more student-specific routes */}
// </Routes> */}
