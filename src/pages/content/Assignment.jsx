import React from "react";

import { Stack, Typography } from "@mui/material";

import HomeworkCard from "../../components/HomeworkCard";

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
      <Typography
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
      </Stack>
    </Stack>
  );
}

export default Assignment;
