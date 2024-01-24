import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { Stack, Typography } from "@mui/material";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function TheSection({ img, title, desc, reverse, num }) {
  const isSmallScreen = useResponsiveLayout();
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: false });

  const refStack = useRef(null);
  const isInViewStack = useInView(refStack, { once: false });

  const value = isSmallScreen ? "300px" : "600px";
  const Mvalue = isSmallScreen ? "-300px" : "-600px";
  return (
    <Stack
      className={`landing-section section section-${num}`}
      direction={isSmallScreen ? "column" : reverse ? "row-reverse" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <motion.img
        src={img}
        alt=""
        style={{ width: isSmallScreen ? "250px" : "450px" }}
        ref={refImage}
        initial={{ opacity: 0, x: reverse ? Mvalue : value }}
        animate={{
          opacity: isInViewImage ? 1 : 0,
          x: isInViewImage ? "0" : reverse ? Mvalue : value,
        }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
      />
      <motion.div
        ref={refStack}
        initial={{ opacity: 0, x: reverse ? value : Mvalue }}
        animate={{
          opacity: isInViewStack ? 1 : 0,
          x: isInViewStack ? "0" : reverse ? value : Mvalue,
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
            {title}
          </Typography>
          <Typography
            textAlign={isSmallScreen ? "center" : "start"}
            sx={{ color: "var(--whitesecondary)" }}
          >
            {desc}
          </Typography>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default TheSection;
