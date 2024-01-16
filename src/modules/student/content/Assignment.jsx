import React from "react";

import { Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import HomeworkCard from "../../../components/HomeworkCard";
import { Link } from "react-router-dom";

function Assignment() {
  const homework = [
    {
      id: 1,
      title: "home1",
      deadline: "21-3-2024",
      detailes: { pushed: "12-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
    },
    {
      id: 2,
      title: "home2",
      deadline: "21-3-2024",
      detailes: { pushed: "12-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
    },
    {
      id: 3,
      title: "home3",
      deadline: "21-3-2024",
      detailes: { pushed: "12-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
    },
  ];

  return (
    <Stack>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography fontWeight={"bold"}>فيزيا 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>لا يوجد وظائف حاليا</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography fontWeight={"bold"}>امن المعلومات</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0 20px" }}>
            <Stack
              direction={"row"}
              sx={{ width: "100%", height: "50px" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={"10px"}>
                <RemoveCircleOutlineIcon />
                <Typography>وظيفة 1</Typography>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <Typography>تاريخ اخر تسليم: 12\3\2024</Typography>
                <Link to={"assignmentdetailes"}>
                  <Typography color={"#1976D2"}>detailes</Typography>
                </Link>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              sx={{ width: "100%", height: "50px" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={"10px"}>
                <HighlightOffIcon htmlColor="#D10000" />
                <Typography>وظيفة 2</Typography>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <Typography>تاريخ اخر تسليم: 12\3\2024</Typography>
                <Typography color={"#1976D2"}>detailes</Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              sx={{ width: "100%", height: "50px" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={"10px"}>
                <CheckCircleOutlineIcon htmlColor="#00D121" />
                <Typography>وظيفة 3</Typography>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <Typography>تاريخ اخر تسليم: 12\3\2024</Typography>
                <Typography color={"#1976D2"}>detailes</Typography>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography fontWeight={"bold"}>
              تفاعل الانسان مع الحاسوب
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction={"row"}
              sx={{ width: "100%", height: "50px" }}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"row"} gap={"10px"}>
                <CheckCircleOutlineIcon htmlColor="#00D121" />
                <Typography>وظيفة 3</Typography>
              </Stack>
              <Stack direction={"row"} gap={"20px"}>
                <Typography>تاريخ اخر تسليم: 12\3\2024</Typography>
                <Typography color={"#1976D2"}>detailes</Typography>
              </Stack>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <Typography
        sx={{ marginTop: "30px", fontWeight: "bold" }}
        textAlign={"start"}
      >
        الوظائف:
      </Typography>
      <Stack>
        {homework.map((item, index) => (
          <HomeworkCard
            id={item.id}
            key={index}
            title={item.title}
            deadline={item.deadline}
            homeworkDetailes={item.homeworkDetailes}
            assignment={item}
          />
        ))}
      </Stack> */}
    </Stack>
  );
}

export default Assignment;
