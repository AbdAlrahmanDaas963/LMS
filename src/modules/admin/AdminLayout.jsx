import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import MyDrawer from "../../components/MyDrawer";
import { Stack } from "@mui/material";
import Sidebar from "../../components/layout/student/Sidebar";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to={"students"}>الطلاب</Link>, "1"),
  getItem(<Link to={"courses"}>الكورسات</Link>, "2"),
  getItem(<Link to={"assignment"}>الوظائف</Link>, "3"),
  getItem(<Link to={"ps"}>علامات + سبيشل</Link>, "4"),
  getItem(<Link to={"classes"}>صفوف</Link>, "5"),
  getItem(<Link to={"statistics"}>الاحصائيات</Link>, "6"),
  getItem(<Link to={"roles"}>roles</Link>, "7"),
];

function AdminLayout() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const data = {
    name: "د.ميساء",
    role: "عميد الكلية",
    notifications: ["one noti", "second one", "3rd woeoew", "the last one"],
  };

  const items = [
    { title: "الطلاب", path: "students" },
    { title: "الكورسات", path: "courses" },
    { title: "الوظائف", path: "assignment" },
    { title: "سبيشل", path: "/soon" },
    { title: "صفوف", path: "/soon" },
    { title: "الاحصائيات", path: "statistics" },
    { title: "ادوار", path: "/soon" },
  ];

  return (
    <Stack
      sx={{ width: "100vw", height: "100vh", minHeight: "500px" }}
      direction={"row"}
    >
      {/* <MySider /> */}
      {/* <Drawer isOpen={true} /> */}
      {/* <MyDrawer listItems={items} /> */}
      <Sidebar open={open} items={items} />
      <div style={{ width: "100%", overflowY: "auto" }}>
        <Header headerData={data} handleClick={handleClick} />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </Stack>
  );
}

export default AdminLayout;
