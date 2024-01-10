import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Stack,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import MyAppBar from "../components/MyAppBar";
import WelcomePage from "../components/WelcomePage";

import school from "../assets/school.jpg";
import managing from "../assets/svg/managing.svg";

function LandingPage() {
  const theme = useTheme();
  return (
    <Stack width={"100vw"}>
      <MyAppBar />
      <WelcomePage />
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"50vh"}
      >
        <Stack>
          <Typography fontSize={"45px"}>A</Typography>
          <Typography width={"150px"}>
            powerful platform designed to streamline classroom
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"45px"}>B</Typography>
          <Typography width={"150px"}>
            powerful platform designed to streamline classroom
          </Typography>
        </Stack>
        <Stack>
          <Typography fontSize={"45px"}>C</Typography>
          <Typography width={"150px"}>
            powerful platform designed to streamline classroom
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          padding: "25px",
          height: "90vh",
        }}
      >
        <Stack>
          <Typography
            fontSize={"50px"}
            fontWeight={"bold"}
            variant="body1"
            align="center"
            width={"350px"}
            paragraph
            sx={{ color: theme.palette.blue.main }}
          >
            ماهو CLMS ؟
          </Typography>
          <Typography
            variant="body1"
            align="center"
            width={"350px"}
            paragraph
            sx={{ color: theme.palette.blue.main, opacity: "0.8" }}
          >
            CLMS عبارة عن منصة قوية مصممة لتبسيط إدارة الفصول الدراسية وتعزيز
            تجربة التعلم. فهو يوفر أدوات للمعلمين والطلاب والإداريين لإدارة
            عملية التعلم والمشاركة فيها بكفاءة.
          </Typography>
        </Stack>
        <img src={managing} alt="" width={"450px"} />
      </Stack>

      <Stack
        sx={{
          minHeight: "50vh",
          backgroundColor: "#3939aa",
          width: "100vw",
          color: "#fff",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          justifyItems={"center"}
          height={"50vh"}
        >
          <Stack direction={"column"}>
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} AUST CLMS. All rights reserved.
            </Typography>
            <Typography variant="body2" color="inherit">
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="inherit">
              Terms of Service
            </Typography>
          </Stack>
          <Stack direction={"column"} alignItems={"flex-end"} gap={"10px"}>
            <Typography variant="body2" color="inherit">
              Home
            </Typography>
            <Typography variant="body2" color="inherit">
              Services
            </Typography>
            <Typography variant="body2" color="inherit">
              Try it
            </Typography>
            <Typography variant="body2" color="inherit">
              Contact
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LandingPage;
