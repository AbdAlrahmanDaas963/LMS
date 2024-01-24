import React from "react";

import { Stack, Typography } from "@mui/material";

import courses from "../../assets/svg/landing/courses.svg";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function Section4() {
  const isSmallScreen = useResponsiveLayout();

  return (
    <Stack
      className="landing-section section section-4"
      direction={isSmallScreen ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <img
        src={courses}
        alt=""
        style={{ width: isSmallScreen ? "250px" : "450px" }}
      />
      <Stack sx={{ width: "450px" }}>
        <Typography
          textAlign={isSmallScreen ? "center" : "start"}
          sx={{
            color: "var(--blue)",
            fontWeight: "bold",
            fontSize: isSmallScreen ? "25px" : "40px",
          }}
        >
          1140+ طالب يستمتعون بميزات لا تقدر بثمن
        </Typography>
        <Typography
          textAlign={isSmallScreen ? "center" : "start"}
          sx={{ color: "var(--whitesecondary)" }}
        >
          نحن هنا لجعل تجربتكم التعليمية ممتعة وناجحة!
          <br /> انضموا إلينا اليوم واستعدوا لاستكشاف عالم المعرفة
          <br /> بأسلوب مرح ومبتكر
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Section4;
