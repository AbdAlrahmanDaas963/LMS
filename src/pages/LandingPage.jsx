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

function LandingPage() {
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
          backgroundColor: "#fff",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="body1" align="center" width={"350px"} paragraph>
            CLMS عبارة عن منصة قوية مصممة لتبسيط إدارة الفصول الدراسية وتعزيز
            تجربة التعلم. فهو يوفر أدوات للمعلمين والطلاب والإداريين لإدارة
            عملية التعلم والمشاركة فيها بكفاءة.
          </Typography>
          <Button>Wow</Button>
        </Stack>
        <img src={school} alt="" width={"350px"} />
      </Stack>

      <Container sx={{ minHeight: "50vh" }}>
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
              <Link href="#" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit">
                Terms of Service
              </Link>
            </Typography>
          </Stack>
          <Stack direction={"column"}>
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} AUST CLMS. All rights reserved.
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit">
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit">
                Terms of Service
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default LandingPage;
