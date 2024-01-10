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
  useTheme,
} from "@mui/material";

import aust from "../assets/svg/aust.svg";
import learning from "../assets/svg/learning.svg";

function WelcomePage() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ height: "90vh" }}
      gap={"150px"}
    >
      <Stack width={"450px"}>
        <Typography
          fontSize={"55px"}
          fontWeight={"bold"}
          color={theme.palette.blue.main}
          textAlign={"start"}
        >
          اهلا بكم في منصة الجامعة التعليمية
        </Typography>
        <Typography
          color={theme.palette.blue.main}
          textAlign={"start"}
          sx={{ opacity: "0.8" }}
        >
          CLMS عبارة عن منصة قوية مصممة لتبسيط إدارة الفصول الدراسية وتعزيز
          تجربة التعلم. فهو يوفر أدوات للمعلمين والطلاب والإداريين لإدارة عملية
          التعلم والمشاركة فيها بكفاءة.
        </Typography>
        <Stack direction={"row"} gap={"20px"} marginTop={"20px"}>
          <Button
            sx={{
              padding: "13px 0",
              border: "1px solid rgb(237, 243, 245)",
              boxShadow: "rgba(23, 31, 114, 0.2) 0px 16px 30px",
              borderRadius: "4px",
              width: "160px",
              color: "var(--blue)",
            }}
          >
            signup
          </Button>
          <Button
            variant="contained"
            sx={{
              padding: "13px 0",
              border: "1px solid rgb(237, 243, 245)",
              boxShadow: "rgba(23, 31, 114, 0.2) 0px 16px 30px",
              borderRadius: "4px",
              width: "160px",
              backgroundColor: "var(--blue)",
              color: "#fff",
            }}
          >
            signin
          </Button>
        </Stack>
      </Stack>
      <Stack width={"400px"}>
        <img src={learning} alt="" width={"450px"} />
      </Stack>
    </Stack>
  );
}

export default WelcomePage;

{
  /* <Container sx={{ display: "flex", height: "90vh" }}>
      <img src={aust} alt="" width={"300px"} />
      <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h2" align="center" mt={4} mb={2}>
          مرحبا بكم في CLMS - نظام إدارة الفصول الدراسية
        </Typography>

        <Stack width={"100%"} alignItems={"flex-end"}>
          <Link to={"/reg/login"}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "200px" }}
            >
              تسجيل دخول
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container> */
}
