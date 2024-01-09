import React from "react";

import { Stack, Typography, Box } from "@mui/material";

import user from "../../data/user.json";
import img from "../../assets/profile.jpg";

function Profile() {
  return (
    <Stack>
      <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
        <Stack>
          <Box marginTop={"15px"}>
            <Typography>name</Typography>
            <Typography>joe done</Typography>
          </Box>
          <Box marginTop={"15px"}>
            <Typography>collage</Typography>
            <Typography>math</Typography>
          </Box>
          <Box marginTop={"15px"}>
            <Typography>grade</Typography>
            <Typography>80%</Typography>
          </Box>
        </Stack>
        <Stack>
          <Box marginTop={"15px"}>
            <Typography>st_id</Typography>
            <Typography>423423423432</Typography>
          </Box>
          <Stack direction={"row"} gap={"15px"} marginTop={"15px"}>
            <Box>
              <Typography>collage</Typography>
              <Typography>math</Typography>
            </Box>
            <Box>
              <Typography>status</Typography>
              <Typography>true</Typography>
            </Box>
          </Stack>
          <Box marginTop={"15px"}>
            <Typography>hours</Typography>
            <Typography>169/53</Typography>
          </Box>
        </Stack>
        <img src={img} alt="" width={"200px"} />
      </Stack>
      <Stack alignItems={"flex-start"}>
        <Typography>enrolled courses</Typography>
        <Stack direction={"row"} flexWrap={"wrap"}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            3
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            4
          </Box>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              border: "1px solid black",
              margin: " 15px",
            }}
          >
            5
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Profile;
