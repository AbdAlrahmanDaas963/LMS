import React, { useState, useEffect } from "react";

import { Stack, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import img from "../../assets/books.jpg";
import gif from "../../assets/books.gif";

function Section1() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // After 1 second, set showGif to false
    const timeoutId = setTimeout(() => {
      setShowGif(false);
    }, 1500);

    return () => {
      // Cleanup the timeout to avoid memory leaks
      clearTimeout(timeoutId);
    };
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

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
          maxWidth: "740px",
        }}
      >
        نجمع بين التكنولوجيا الحديثة والمحتوى الأكاديمي المميز لنوفر لك تجربة
        تعليمية استثنائية وفرصة لتطوير مهاراتك وتحقيق طموحاتك الأكاديمية. انضم
        إلينا واستعد لاستكشاف عالم المعرفة والتعلم عبر الإنترنت بأسلوب مبتكر
        ومرن.
      </Typography>
      <Box>
        <img src={img} alt="" width={"400px"} />

        {/* {showGif ? (
          // Display the GIF for the first second
          <img src={gif} alt="" width={"400px"} />
        ) : (
          // After 1 second, switch to a different image
          <img src={img} alt="" width={"400px"} />
        )} */}
      </Box>
      <Stack direction={"row"} gap={"8px"}>
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
