import React from "react";

import { Stack, Typography } from "@mui/material";

import teachers from "../../assets/svg/landing/teachers.svg";

function Section3() {
  return (
    <Stack
      className="landing-section section section-3"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <Stack sx={{ width: "450px" }}>
        <Typography
          textAlign={"start"}
          sx={{ color: "var(--blue)", fontWeight: "bold", fontSize: "40px" }}
        >
          83+ معلم سيقدمون لك الدعم والارشاد
        </Typography>
        <Typography textAlign={"start"} sx={{ color: "var(--whitesecondary)" }}>
          نؤمن بأهمية تواصل البروفيسورات مع الطلاب ودعمهم في رحلتهم التعليمية.
          لذا، نسعى جاهدين لتوفير أدوات وميزات تسهل عليهم متابعة تقدم الطلاب
          وتحسين تجربتهم الأكاديمية
        </Typography>
      </Stack>
      <img src={teachers} alt="" width={"500px"} style={{ width: "450px" }} />
    </Stack>
  );
}

export default Section3;
