import React from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Typography, Button } from "@mui/material";

import EastIcon from "@mui/icons-material/East";

import MyPaper from "../../components/MyPaper";

import soon from "../../assets/svg/soon.svg";

function ComingSoon() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <MyPaper>
      <Typography
        fontWeight={"bold"}
        sx={{ color: "var(--blue)", fontSize: "70px" }}
      >
        عذرا !!!
      </Typography>
      <Stack alignItems={"center"} justifyContent={"space-between"}>
        <img
          src={soon}
          alt=""
          width={"400px"}
          style={{ marginBottom: "30px " }}
        />
        <Typography color={"#3F3D56"}>هذه الصفحة قيد التطوير</Typography>
        <Typography color={"#3F3D56"} sx={{ margin: "10px 0" }}>
          سيتم تفعيل الصفحة قريبا...
        </Typography>
        <Button
          variant="contained"
          sx={{ gap: "10px", width: "250px" }}
          startIcon={<EastIcon />}
          onClick={handleGoBack}
        >
          عودة
        </Button>
      </Stack>
    </MyPaper>
  );
}

export default ComingSoon;
