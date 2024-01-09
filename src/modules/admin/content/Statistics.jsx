import React from "react";

import { Stack, Typography, TextField, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Statistics() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{
            width: "350px",
            minHeight: "350px",
            border: "1px solid grey",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>highest grade</Typography>
            <TextField
              id="standard-basic"
              label="Student name"
              variant="standard"
            />
          </Stack>
          <Box
            sx={{
              width: "90%",
              height: "250px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Detailes and Tables
          </Box>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{
            width: "350px",
            minHeight: "350px",
            border: "1px solid grey",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>highest grade</Typography>
            <TextField
              id="standard-basic"
              label="Student name"
              variant="standard"
            />
          </Stack>
          <Box
            sx={{
              width: "90%",
              height: "250px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Detailes and Tables
          </Box>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{
            width: "350px",
            minHeight: "350px",
            border: "1px solid grey",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>highest grade</Typography>
            <TextField
              id="standard-basic"
              label="Student name"
              variant="standard"
            />
          </Stack>
          <Box
            sx={{
              width: "90%",
              height: "250px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Detailes and Tables
          </Box>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"space-evenly"}
          sx={{
            width: "350px",
            minHeight: "350px",
            border: "1px solid grey",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>highest grade</Typography>
            <TextField
              id="standard-basic"
              label="Student name"
              variant="standard"
            />
          </Stack>
          <Box
            sx={{
              width: "90%",
              height: "250px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Detailes and Tables
          </Box>
        </Stack>
      </Stack>
      <Stack>
        {/*  */}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Item One" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
        {/*  */}
      </Stack>
    </Stack>
  );
}

export default Statistics;
