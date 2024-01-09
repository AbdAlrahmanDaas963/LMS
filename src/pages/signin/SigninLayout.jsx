// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";
import books from "../../assets/svg/background.svg";

const SigninLayout = () => {
  return (
    <Stack sx={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Stack sx={{ position: "absolute", height: "100vh" }}>
        <img src={books} alt="" height={"100%"} width={"auto"} />
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default SigninLayout;
