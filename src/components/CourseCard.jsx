import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import placeholder from "../assets/svg/placeholder.svg";

function CourseCard({ id, title, desc, more, courseDetails }) {
  // console.log("courseDetails :>> ", courseDetails);
  return (
    <Box
      sx={{
        height: "200px",
        width: "100%",
        minWidth: "400px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        margin: "10px 0",
      }}
    >
      <img src={placeholder} width={"auto"} height={"100%"} />
      <Stack
        direction={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        sx={{ padding: "15px", width: "100%", position: "relative" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {title}-{id}
        </Typography>
        <Typography sx={{ opacity: "0.6" }}>{desc}</Typography>
        <Typography
          sx={{
            width: "150px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {more}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"flex-end"}
          width={"100%"}
          justifyContent={"flex-end"}
          sx={{ position: "absolute", left: "0", bottom: "15px" }}
        >
          <Link to={`/student/courses/${id}`} state={{ courseDetails }}>
            <Button
              size="small"
              variant="contained"
              sx={{
                marginLeft: "10px",
                borderRadius: "50px",
                padding: "0px 16px",
              }}
            >
              open
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CourseCard;
