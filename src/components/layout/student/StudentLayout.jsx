import React from "react";

import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";
import SideBar from "./Sidebar";

function StudentLayout() {
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh", minHeight: "500px" }}
      direction={"row"}
    >
      {/* --- */}
      <SideBar />

      <div style={{ width: "100%", overflowY: "auto" }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </Stack>
  );
}

export default StudentLayout;
