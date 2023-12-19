import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
import HomeworkCard from "../../components/HomeworkCard";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionApp from "../../components/AccordionApp";

function CourseDetailes() {
  const { state } = useLocation();
  const homework = [
    {
      id: 1,
      title: "home1",
      deadline: "21-3-2024",
      homeworkDetailes: [
        { pushed: "12-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
      ],
    },
    {
      id: 2,
      title: "home2",
      deadline: "21-3-2024",
      homeworkDetailes: [
        { pushed: "10-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
      ],
    },
    {
      id: 3,
      title: "home3",
      deadline: "21-3-2024",
      homeworkDetailes: [
        { pushed: "10-3-2024", deadline: "21-3-2024", pdf: "pdfFile" },
      ],
    },
  ];

  if (!state || !state.courseDetails) {
    return <div>No course details available.</div>;
  }

  const { title, teacherName, time, day } = state.courseDetails;
  console.log("state :>> ", state);
  // const lectures = [
  //   {
  //     title: "Introduction to React",
  //     theoreticalLectures:
  //       "This is the content for theoretical lectures on React.",
  //     practicalLectures: "Practical examples and exercises for React.",
  //   },
  //   {
  //     title: "State and Props",
  //     theoreticalLectures:
  //       "In-depth coverage of state and props in React components.",
  //     practicalLectures: "Hands-on exercises on working with state and props.",
  //   },
  //   {
  //     title: "The last dance",
  //     theoreticalLectures:
  //       "In-depth coverage of state and props in React components.",
  //     practicalLectures: "Hands-on exercises on working with state and props.",
  //   },
  //   // Add more lectures as needed
  // ];

  const lectures = [
    {
      title: "مقدمة في React",
      theoreticalLectures: "هذا هو المحتوى للمحاضرات النظرية حول React.",
      practicalLectures: "أمثلة عملية وتمارين عملية لـ React.",
    },
    {
      title: "الحالة والخصائص",
      theoreticalLectures: "تغطية مفصلة للحالة والخصائص في مكونات React.",
      practicalLectures: "تمارين عملية على العمل مع الحالة والخصائص.",
    },
    {
      title: "العلاقات",
      theoreticalLectures: "تغطية مفصلة للحالة والخصائص في مكونات React.",
      practicalLectures: "تمارين عملية على العمل مع الحالة والخصائص.",
    },
    // Add more lectures as needed
  ];

  return (
    <Stack direction={"column"}>
      <Stack direction={"row"}>
        <Box
          sx={{ width: "200px", height: "200px", backgroundColor: "#00f" }}
        ></Box>
        <Stack alignItems={"flex-start"} sx={{ padding: "15px" }}>
          <Typography>{title} #512GTA</Typography>
          <Typography>{teacherName}</Typography>
          <Typography>{time}</Typography>
          <Typography>{day}</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ backgroundColor: "#fff", margin: "50px 0" }}>
        <AccordionApp lectures={lectures} />
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button onClick={handlePrev} disabled={currentLecture === 0}>
                Prev
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentLecture === lectures.length - 1}
                style={{ marginLeft: "8px" }}
              >
                Next
              </Button>
            </div>
            <FormControl style={{ marginLeft: "8px" }}>
              <InputLabel id="lecture-select-label">Select Lecture</InputLabel>
              <Select
                labelId="lecture-select-label"
                id="lecture-select"
                value={currentLecture}
                onChange={handleSelectChange}
                style={{ flexDirection: "column" }}
              >
                {lectures.map((lecture, index) => (
                  <MenuItem key={index} value={index}>
                    {lecture.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div style={{ width: "100%", marginTop: "16px" }}>
            <Typography variant="h5">
              {lectures[currentLecture].title}
            </Typography>
            <Accordion style={{ marginBottom: "8px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="theoretical-content"
                id="theoretical-header"
              >
                <Typography>Theoretical Lectures</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {lectures[currentLecture].theoreticalLectures}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="practical-content"
                id="practical-header"
              >
                <Typography>Practical Lectures</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {lectures[currentLecture].practicalLectures}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div> */}
      </Stack>
      <Stack>
        {homework.map((item, index) => (
          <HomeworkCard
            key={index}
            title={item.title}
            deadline={item.deadline}
            homeworkDetailes={item.homeworkDetailes}
            assignment={item}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default CourseDetailes;
