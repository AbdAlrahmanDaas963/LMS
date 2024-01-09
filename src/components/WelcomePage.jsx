import React from "react";
import {
  Container,
  Stack,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import aust from "../assets/svg/aust.svg";
function WelcomePage() {
  return (
    <Container sx={{ display: "flex", height: "90vh" }}>
      <img src={aust} alt="" width={"300px"} />
      <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h2" align="center" mt={4} mb={2}>
          مرحبا بكم في CLMS - نظام إدارة الفصول الدراسية
        </Typography>
        {/* <Typography variant="body1" align="center" width={"350px"} paragraph>
          CLMS عبارة عن منصة قوية مصممة لتبسيط إدارة الفصول الدراسية وتعزيز
          تجربة التعلم. فهو يوفر أدوات للمعلمين والطلاب والإداريين لإدارة عملية
          التعلم والمشاركة فيها بكفاءة.
        </Typography> */}
        <Stack width={"100%"} alignItems={"flex-end"}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ width: "200px" }}
          >
            تسجيل دخول
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default WelcomePage;
