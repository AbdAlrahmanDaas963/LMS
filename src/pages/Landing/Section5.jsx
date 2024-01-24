import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import nour from "../../assets/svg/landing/nour.svg";
import dav from "../../assets/svg/landing/dav.svg";

import useResponsiveLayout from "../../utils/useResponsiveLayout";

function Section5() {
  const theme = useTheme();
  const isSmallScreen = useResponsiveLayout();

  return (
    <Grid container spacing={2} className="landing-section section section-5">
      {/* Image on the top left */}
      <Grid item xs={12} md={4}>
        <img
          src={nour}
          alt="Top Left Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>

      {/* Text in the middle */}
      <Grid item xs={12} md={4}>
        <Typography variant="h5" align="center">
          Your Text Goes Here
        </Typography>
      </Grid>

      {/* Image on the bottom right */}
      <Grid
        item
        xs={12}
        md={4}
        style={{ textAlign: isSmallScreen ? "center" : "right" }}
      >
        <img
          src={dav}
          alt="Bottom Right Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
  return <div className="landing-section section section-5"></div>;
}

export default Section5;
