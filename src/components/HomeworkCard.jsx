import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

function HomeworkCard({ id, title, deadline, assignment, homeworkDetailes }) {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>deadline: {deadline}</Typography>
      <Link to={`/assignment/${id}`} state={{ assignment }}>
        <Button>Open</Button>
      </Link>
    </Stack>
  );
}

export default HomeworkCard;
