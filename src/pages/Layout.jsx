// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Drawer from "../components/Drawer";
import MyDrawer from "../components/MyDrawer";

import { Stack } from "@mui/material";
import MySider from "../components/MySider";

const Layout = () => {
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh", minHeight: "500px" }}
      direction={"row"}
    >
      {/* <MySider /> */}
      <MyDrawer />
      {/* <Drawer isOpen={true} /> */}
      <div style={{ width: "100%", overflowY: "auto" }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </Stack>
  );
};

export default Layout;
