import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { Stack, Typography } from "@mui/material";

import students from "../../assets/svg/landing/students.svg";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function Section2() {
  const isSmallScreen = useResponsiveLayout();
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: false });

  const refStack = useRef(null);
  const isInViewStack = useInView(refStack, { once: false });

  return (
    <Stack
      className="landing-section section section-2"
      direction={isSmallScreen ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <motion.img
        src={students}
        alt=""
        style={{ width: isSmallScreen ? "250px" : "450px" }}
        ref={refImage}
        initial={{ opacity: 0, x: "600px" }}
        animate={{
          opacity: isInViewImage ? 1 : 0,
          x: isInViewImage ? "0" : "600px",
        }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      />
      <motion.div
        ref={refStack}
        initial={{ opacity: 0, x: "-600px" }}
        animate={{
          opacity: isInViewStack ? 1 : 0,
          x: isInViewStack ? "0" : "-600px",
        }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
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
      </motion.div>
    </Stack>
  );
}

export default Section2;
