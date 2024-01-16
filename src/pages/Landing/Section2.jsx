import React from "react";

import { Stack, Typography } from "@mui/material";

import students from "../../assets/svg/landing/students.svg";

function Section2() {
  return (
    <Stack
      className="landing-section section section-2"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <img src={students} alt="" width={"500px"} style={{ width: "450px" }} />
      <Stack sx={{ width: "450px" }}>
        <Typography
          textAlign={"start"}
          sx={{ color: "var(--blue)", fontWeight: "bold", fontSize: "40px" }}
        >
          1140+ طالب يستمتعون بميزات لا تقدر بثمن
        </Typography>
        <Typography textAlign={"start"} sx={{ color: "var(--whitesecondary)" }}>
          نحن هنا لجعل تجربتكم التعليمية ممتعة وناجحة!
          <br /> انضموا إلينا اليوم واستعدوا لاستكشاف عالم المعرفة
          <br /> بأسلوب مرح ومبتكر
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Section2;
