import React from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Typography, Box, Button } from "@mui/material";

import EastIcon from "@mui/icons-material/East";

import fourofour from "../assets/svg/fourofour.svg";
import toothless from "../assets/svg/toothless.svg";
import floor from "../assets/svg/floor.svg";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        width: "100vw",
        minWidth: "300px",
        height: "100vh",
        minHeight: "500px",
      }}
    >
      <Stack alignItems={"center"}>
        <Typography color={"#595959"} fontSize={"37px"}>
          عذرا الصفحة غير موجودة !!
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "400px",
            height: "300px",
            margin: "0 0 100px 0",
          }}
        >
          <img
            src={fourofour}
            alt=""
            width={"600px"}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            src={toothless}
            alt=""
            width={"350px"}
            style={{
              position: "absolute",
              top: "65%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
          />
          <img
            src={floor}
            alt=""
            width={"600px"}
            style={{
              position: "absolute",
              top: "102%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ gap: "10px", width: "250px" }}
          startIcon={<EastIcon />}
          onClick={handleGoBack}
        >
          عودة
        </Button>
      </Stack>
    </Stack>
  );
}

export default NotFound;
