import React, { useState } from "react";
import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const AccordionApp = ({ lectures }) => {
  const [currentLecture, setCurrentLecture] = useState(0);
  console.log("currentLecture :>> ", currentLecture);

  const handleNext = () => {
    setCurrentLecture((prev) => (prev < lectures.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentLecture((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSelectChange = (event) => {
    setCurrentLecture(parseInt(event.target.value, 10));
  };

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      sx={{
        padding: "16px",
      }}
    >
      <Stack
        direction={"row-reverse"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%", marginBottom: "16px" }}
      >
        <FormControl style={{ marginLeft: "8px", width: "33.3%" }}>
          {/* <InputLabel id="lecture-select-label">Select Lecture</InputLabel> */}
          <Select
            labelId="lecture-select-label"
            id="lecture-select"
            value={currentLecture}
            onChange={handleSelectChange}
          >
            {lectures.map((lecture, index) => (
              <MenuItem key={index} value={index}>
                {lecture.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack
          alignItems={"center"}
          justifyContent={"flex-end"}
          direction={"row"}
          sx={{ width: "33.3%" }}
        >
          <Button
            onClick={handleNext}
            disabled={currentLecture === lectures.length - 1}
            style={{ marginLeft: "8px" }}
          >
            <NavigateNextIcon />
          </Button>
          <Typography>{currentLecture}</Typography>
          <Button onClick={handlePrev} disabled={currentLecture === 0}>
            <NavigateBeforeIcon />
          </Button>
        </Stack>

        <Typography variant="h5" sx={{ width: "33.3%" }} textAlign={"start"}>
          {lectures[currentLecture].title}
        </Typography>
      </Stack>
      {/* --------------------------- */}
      <div style={{ width: "100%", marginTop: "16px" }}>
        {/* <Typography variant="h5" sx={{ border: "1px solid blue" }}>
          {lectures[currentLecture].title}
        </Typography> */}
        <Accordion style={{ marginBottom: "8px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="theoretical-content"
            id="theoretical-header"
          >
            <Typography>المحاضرات النظرية</Typography>
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
            <Typography>المحاضرات العملية</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {lectures[currentLecture].practicalLectures}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Stack>
  );
};

export default AccordionApp;
