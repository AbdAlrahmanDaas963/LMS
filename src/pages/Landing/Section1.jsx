import React, { useState, useEffect } from "react";

import { Stack, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import img from "../../assets/books.jpg";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function Section1() {
  const isSmallScreen = useResponsiveLayout();

  return (
    <Stack
      className="landing-section section section-1"
      alignItems={"center"}
      justifyContent={"flex-start"}
      // gap={"50px"}
    >
      <Typography
        sx={{ margin: "50px 0", fontSize: "38px", fontWeight: "bold" }}
      >
        مرحبا بكم بنظام إدارة المحاضرات الشامل
      </Typography>
      <Typography
        sx={{
          color: "var(--whitesecondary)",
          maxWidth: isSmallScreen ? "350px" : "740px",
        }}
      >
        نجمع بين التكنولوجيا الحديثة والمحتوى الأكاديمي المميز لنوفر لك تجربة
        تعليمية استثنائية وفرصة لتطوير مهاراتك وتحقيق طموحاتك الأكاديمية. انضم
        إلينا واستعد لاستكشاف عالم المعرفة والتعلم عبر الإنترنت بأسلوب مبتكر
        ومرن.
      </Typography>
      <Box>
        <img src={img} alt="" width={"400px"} />
      </Box>
      <Stack direction={isSmallScreen ? "column" : "row"} gap={"8px"}>
        <Link>
          <Button
            sx={{ width: "250px", borderRadius: "4px" }}
            variant="outlined"
          >
            المزيد
          </Button>
        </Link>
        <Link>
          <Button
            sx={{ width: "250px", borderRadius: "4px" }}
            variant="contained"
          >
            ابدأ الان
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Section1;
