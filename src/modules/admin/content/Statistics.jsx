import React from "react";

import { Stack, Typography, TextField, Box, useTheme } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Face3Icon from "@mui/icons-material/Face3";
import MyTable from "../../../components/MyTable";

function Statistics() {
  const theme = useTheme();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const columns = ["Orange", "Calories", "stu_lastname", "stu_name", "stu_id"];

  const rows1 = [
    {
      Orange: "Frozen yoghurt",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Frozen yoghurt",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Frozen yoghurt",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Frozen yoghurt",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Frozen yoghurt",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
  ];
  const rows2 = [
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
    {
      Orange: "Ice cream sandwich",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
  ];
  const rows3 = [
    {
      Orange: "Eclair",
      Calories: 159,
      stu_lastname: "سسس",
      stu_name: "حسام",
      stu_id: "1234",
    },
  ];

  return (
    <Stack>
      <Stack
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          marginBottom: "50px",
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
      <Stack
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px grey",
        }}
      >
        <Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            sx={{ marginBottom: "50px" }}
          >
            <Typography fontWeight={"bold"}>full search</Typography>
            <TextField
              id="standard-basic2"
              label="Student ID"
              variant="standard"
            />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"50px"}
            sx={{
              marginBottom: "20px",
              // border: "1px solid black",
              minHeight: "150px",
            }}
          >
            <Stack justifyContent={"space-evenly"} sx={{ minHeight: "150px" }}>
              <Typography fontWeight={"bold"} sx={{ marginBottom: "10px" }}>
                حميد نور الدقاق
              </Typography>
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    padding: "10px",
                    backgroundColor: theme.palette.white.main,
                    borderRadius: "7px",
                    margin: "5px 0",
                  }}
                >
                  السنة: الرابعة
                </Typography>
                <Typography
                  sx={{
                    padding: "10px",
                    backgroundColor: theme.palette.white.main,
                    borderRadius: "7px",
                    margin: "5px 0",
                  }}
                >
                  عدد الساعات المسجلة: 13
                </Typography>
                <Typography
                  sx={{
                    padding: "10px",
                    backgroundColor: theme.palette.white.main,
                    borderRadius: "7px",
                    margin: "5px 0",
                  }}
                >
                  عدد الكورسات المسجلة: 5
                </Typography>
              </Stack>
            </Stack>
            <Stack alignItems={"center"} gap={"20px"}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: theme.palette.white.main,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Face3Icon fontSize="large" />
              </Box>
              <Box>حميد نور الدقاق - 201783375</Box>
            </Stack>
          </Stack>

          <Box sx={{ width: "100%", minHeight: "500px", typography: "body1" }}>
            <TabContext value={value}>
              <Stack justifyContent={"space-between"}>
                <Stack>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      centered
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="علامات الطالب" value="1" />
                      <Tab label="وظائف الطالب" value="2" />
                      <Tab label="صفوف الطالب" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <MyTable columns={columns} data={rows1} />
                  </TabPanel>
                  <TabPanel value="2">
                    <MyTable columns={columns} data={rows2} />
                  </TabPanel>
                  <TabPanel value="3">
                    <MyTable columns={columns} data={rows3} />
                  </TabPanel>
                </Stack>
                <Stack>
                  <Typography>student statues</Typography>
                </Stack>
              </Stack>
            </TabContext>
          </Box>
        </Stack>
        {/*  */}
      </Stack>
    </Stack>
  );
}

export default Statistics;
