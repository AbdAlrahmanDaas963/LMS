import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";

function HomeworkCard({ id, title, deadline, assignment, homeworkDetailes }) {
  const navigate = useNavigate();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "8px",
        marginTop: "2px",
        boxShadow:
          "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
      }}
    >
      <Typography>{title}</Typography>

      <Button
        onClick={() =>
          navigate(`/student/assignment/${id}`, { state: { assignment } })
        }
      >
        Open
      </Button>
    </Stack>
  );
}

export default HomeworkCard;
