import React from "react";

import { Stack, Typography } from "@mui/material";

import teachers from "../../assets/svg/landing/teachers.svg";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function Section3() {
  const isSmallScreen = useResponsiveLayout();

  return (
    <Stack
      className="landing-section section section-3"
      direction={isSmallScreen ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <Stack sx={{ width: "450px" }}>
        <Typography
          textAlign={isSmallScreen ? "center" : "start"}
          sx={{
            color: "var(--blue)",
            fontWeight: "bold",
            fontSize: isSmallScreen ? "25px" : "40px",
          }}
        >
          83+ معلم سيقدمون لك الدعم والارشاد
        </Typography>
        <Typography
          textAlign={isSmallScreen ? "center" : "start"}
          sx={{
            color: "var(--whitesecondary)",
            padding: isSmallScreen ? "0 35px" : "0",
          }}
        >
          نؤمن بأهمية تواصل البروفيسورات مع الطلاب ودعمهم في رحلتهم التعليمية.
          لذا، نسعى جاهدين لتوفير أدوات وميزات تسهل عليهم متابعة تقدم الطلاب
          وتحسين تجربتهم الأكاديمية
        </Typography>
      </Stack>
      <img
        src={teachers}
        alt=""
        style={{ width: isSmallScreen ? "250px" : "450px" }}
      />
    </Stack>
  );
}

export default Section3;
