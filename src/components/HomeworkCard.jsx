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
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <Typography>{title}</Typography>
      <Typography>deadline: {deadline}</Typography>
      {/* <Link to={`/app/assignment/${id}`} state={{ assignment }}>
        <Button>Open</Button>
      </Link> */}
      <Button
        onClick={() =>
          navigate(`/app/assignment/${id}`, { state: { assignment } })
        }
      >
        Open
      </Button>
    </Stack>
  );
}

export default HomeworkCard;
