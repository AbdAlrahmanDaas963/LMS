import React from "react";

import {
  Stack,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import MyPaper from "../../components/MyPaper";
import BackButton from "../../components/BackButton";

import img from "../../assets/course.png";

function CourseDetailes() {
  return (
    <div>
      <BackButton />
      <Stack
        sx={{
          marginTop: "15px",
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "10px",
          marginBottom: "20px",
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"}>
          <img
            src={img}
            alt=""
            width={"200px"}
            style={{ borderRadius: "4px" }}
          />
          <Stack
            alignItems={"flex-start"}
            gap={"10px"}
            sx={{ padding: "15px" }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={"7px"}>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                رياضيات متقطعة
              </Typography>
              <Typography fontSize={"15px"}>#exp123</Typography>
            </Stack>
            <Typography fontSize={"18px"}>جون دو</Typography>
            <Typography fontSize={"18px"}>12:45 ظهرا</Typography>
            <Typography fontSize={"18px"}>الاثنين - الثلاثاء</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent={"space-between"} alignItems={"flex-end"}>
          <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
            <Box
              sx={{
                backgroundColor: "#42FF00",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            />
            <Typography>207 طالب مسجل</Typography>
          </Stack>
          <Stack direction={"row"}>
            <Button
              variant="text"
              sx={{ gap: "10px" }}
              startIcon={<EditIcon />}
            >
              تعديل
            </Button>
            <Button variant="outlined">الطلاب</Button>
          </Stack>
        </Stack>
      </Stack>
      <MyPaper>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>المحاضرات</Typography>
          <Button
            variant="contained"
            sx={{ gap: "10px" }}
            startIcon={<AddIcon />}
          >
            اضافة
          </Button>
        </Stack>
      </MyPaper>
    </div>
  );
}

export default CourseDetailes;
