// Layout.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Drawer from "../../components/Drawer";
import MyDrawer from "../../components/MyDrawer";

import { Stack } from "@mui/material";
import MySider from "../../components/MySider";
import Sidebar from "../../components/layout/student/Sidebar";
// import SideBar from "../../components/SideBar";

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const items = [
    { title: "البروفايل", path: "profile" },
    { title: "الدروس", path: "courses" },
    { title: "الوظائف", path: "assignment" },
    { title: "الدرجات", path: "grades" },
    { title: "التقويم", path: "calendar" },
    { title: "الاختبارات", path: "quizzes" },
    { title: "المصادر", path: "resourses" },
    { title: "scheduler", path: "scheduler" },
  ];
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh", minHeight: "500px" }}
      direction={"row"}
    >
      {/* <MySider /> */}
      {/* <Drawer isOpen={true} /> */}

      {/* <MyDrawer /> */}
      {/* <SideBar /> */}
      <Sidebar open={open} items={items} />

      <div style={{ width: "100%", overflowY: "auto" }}>
        <Header handleClick={handleClick} />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </Stack>
  );
};

export default Layout;
